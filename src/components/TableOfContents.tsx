'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const pathname = usePathname();

  // 处理点击事件
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(`div[id="${id}"]`);
    if (element) {
      // 计算目标位置，考虑固定导航栏的高度
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px 是顶部空间

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // 直接设置活动 ID
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h1, h2, h3'))
      .map(element => {
        const anchorDiv = element.querySelector('.anchor');
        const id = anchorDiv?.id || '';
        const textNode = Array.from(element.childNodes).find(
          node => node.nodeType === Node.TEXT_NODE
        );
        return {
          id,
          text: textNode?.textContent || '',
          level: Number(element.tagName.charAt(1)),
        };
      })
      .filter(item => item.id && item.text);

    setHeadings(elements);

    let timer: NodeJS.Timeout;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 只在元素进入视图时更新
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              setActiveId(entry.target.id);
            }, 100);
          }
        });
      },
      { 
        rootMargin: '-80px 0px -50% 0px',
        threshold: [0.5, 1] 
      }
    );

    elements.forEach(({ id }) => {
      const element = document.querySelector(`div[id="${id}"]`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <nav className='hidden lg:block'>
      <div className='fixed top-32 max-h-[calc(100vh-8rem)] w-56 overflow-auto pr-4'>
        <h3 className='mb-4 font-bold text-lg text-gray-900 dark:text-gray-100'>
          Table of Contents
        </h3>
        <ul className='space-y-2 text-sm'>
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}
              className='transform transition-transform duration-200 hover:translate-x-1'
            >
              <a
                onClick={(e) => handleClick(e, heading.id)}
                href={`#${heading.id}`}
                className={`block rounded-lg py-1 transition-all duration-200 hover:text-sky-600 ${
                  activeId === heading.id
                    ? 'font-medium text-sky-600'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
