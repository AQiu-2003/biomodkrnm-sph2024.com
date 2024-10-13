'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      {children}
    </>
  );
}
