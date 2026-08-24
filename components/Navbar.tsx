import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="absolute z-20 w-full border-b border-white/20 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight">Travel Unbounded<span className="text-[#e8a05b]">.</span></Link>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="/" className="transition hover:text-[#e8a05b]">Home</Link>
          <Link href="/about" className="transition hover:text-[#e8a05b]">Our story</Link>
          <Link href="/contact" className="rounded-full bg-[#e8a05b] px-5 py-2.5 text-[#193b3a] transition hover:bg-white">Plan a journey</Link>
        </div>
        <Link href="/contact" className="rounded-full bg-[#e8a05b] px-4 py-2 text-xs font-bold text-[#193b3a] md:hidden">Enquire</Link>
      </div>
    </nav>
  );
}
