'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // 处理点击事件
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.querySelector(`div[id="${id}"]`);
      if (element) {
        // 计算目标位置，考虑固定导航栏的高度
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px 是顶部空间

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // 直接设置活动 ID
        setActiveId(id);
      }
    },
    []
  );

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll('h1, h2, h3'))
        .map((element) => {
          const anchorDiv = element.querySelector('.anchor');
          const id = anchorDiv?.id || '';
          const textNode = Array.from(element.childNodes).find(
            (node) => node.nodeType === Node.TEXT_NODE
          );
          return {
            id,
            text: textNode?.textContent || '',
            level: Number(element.tagName.charAt(1)),
          };
        })
        .filter((item) => item.id && item.text);

      setHeadings(elements);
      setIsLoading(false);

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
          threshold: [0.5, 1],
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
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <nav className='hidden lg:block'>
      <nav className='hidden lg:block'>
        <div className='fixed top-1/2 max-h-[calc(100vh-8rem)] w-56 -translate-y-1/2 overflow-auto pr-4 transition-all duration-300 ease-in-out lg:-translate-x-9 xl:-translate-x-16 2xl:left-[max(0px,calc(50%-52rem))] 2xl:translate-x-0'>
          <h3 className='pointer-events-none mb-4 text-center text-2xl font-bold text-gray-900 dark:text-gray-100'>
            {isLoading ? '' : 'Table of Contents'}
          </h3>
          <ul className='space-y-2 text-xl'>
            {headings.map((heading) => (
              <li
                key={heading.id}
                style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
                className='transform transition-all duration-200 hover:translate-x-1'
              >
                <a
                  onClick={(e) => handleClick(e, heading.id)}
                  href={`#${heading.id}`}
                  className={`block rounded-lg py-1 text-center transition-all duration-200 hover:text-sky-600 ${
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
    </nav>
  );
}
