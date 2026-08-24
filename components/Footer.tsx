import React from 'react';

export default function Footer(){
  return (
    <footer className="w-full bg-zinc-50 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-zinc-600">
        © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
      </div>
    </footer>
  )
}
