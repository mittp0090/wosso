'use client';

import { useState } from 'react';

const categories = [
  { id: 'all', name: '전체' },
  { id: 'wedding', name: 'Wedding Ceremony' },
  { id: 'prewedding', name: 'PreWedding' },
  { id: 'bodyprofile', name: 'Body Profile' },
  { id: 'profile', name: 'Profile' },
  { id: 'hanbok', name: 'Hanbok' },
  { id: 'etc', name: 'etc.' },
];

const galleryItems = [
  { id: 1, image: 'https://ext.same-assets.com/2179641242/307115937.jpeg', title: '더메이', category: 'wedding' },
  { id: 2, image: 'https://ext.same-assets.com/2179641242/3638050743.jpeg', title: '더메이', category: 'wedding' },
  { id: 3, image: 'https://ext.same-assets.com/2179641242/3393280350.jpeg', title: '더메이', category: 'wedding' },
  { id: 4, image: 'https://ext.same-assets.com/2179641242/1690224232.jpeg', title: '웨딩스냅이 드레스샵', category: 'wedding' },
  { id: 5, image: 'https://ext.same-assets.com/2179641242/1564229012.jpeg', title: '더메이 드레스샵', category: 'wedding' },
  { id: 6, image: 'https://ext.same-assets.com/2179641242/551202014.jpeg', title: 'Studio PreWedding', category: 'prewedding' },
  { id: 7, image: 'https://ext.same-assets.com/2179641242/1727481682.jpeg', title: '더메이', category: 'wedding' },
  { id: 8, image: 'https://ext.same-assets.com/2179641242/4258230044.jpeg', title: '더메이', category: 'wedding' },
  { id: 9, image: 'https://ext.same-assets.com/2179641242/1608524095.jpeg', title: '더메이', category: 'wedding' },
  { id: 10, image: 'https://ext.same-assets.com/2179641242/873939968.jpeg', title: 'PreWedding in Jeonbuk', category: 'prewedding' },
  { id: 11, image: 'https://ext.same-assets.com/2179641242/2578324537.jpeg', title: '더메이', category: 'wedding' },
  { id: 12, image: 'https://ext.same-assets.com/2179641242/1403441208.jpeg', title: 'Studio PreWedding', category: 'prewedding' },
  { id: 13, image: 'https://ext.same-assets.com/2179641242/3959425620.jpeg', title: '그랜드볼룸', category: 'wedding' },
  { id: 14, image: 'https://ext.same-assets.com/2179641242/3966275817.jpeg', title: '더메이', category: 'wedding' },
  { id: 15, image: 'https://ext.same-assets.com/2179641242/560248177.jpeg', title: '더메이', category: 'wedding' },
  { id: 16, image: 'https://ext.same-assets.com/2179641242/2750793410.jpeg', title: '그랜드볼룸', category: 'wedding' },
  { id: 17, image: 'https://ext.same-assets.com/2179641242/2340020900.jpeg', title: '더메이', category: 'wedding' },
  { id: 18, image: 'https://ext.same-assets.com/2179641242/3799983194.jpeg', title: '더메이', category: 'wedding' },
  { id: 19, image: 'https://ext.same-assets.com/2179641242/1293594516.jpeg', title: '그랜드볼룸', category: 'wedding' },
  { id: 20, image: 'https://ext.same-assets.com/2179641242/2323885440.jpeg', title: '더메이', category: 'wedding' },
  { id: 21, image: 'https://ext.same-assets.com/2179641242/1533563181.jpeg', title: '더메이', category: 'wedding' },
  { id: 22, image: 'https://ext.same-assets.com/2179641242/3685913299.jpeg', title: '그랜드볼룸', category: 'wedding' },
  { id: 23, image: 'https://ext.same-assets.com/2179641242/3830448318.jpeg', title: '더메이', category: 'wedding' },
  { id: 24, image: 'https://ext.same-assets.com/2179641242/2932024860.jpeg', title: '더메이', category: 'wedding' },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            SHIN YOUNG SOO
          </h1>
          <p className="text-sm tracking-widest text-gray-600" style={{ fontFamily: 'Lato, sans-serif' }}>
            WEDDING & STUDIO
          </p>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-200">
          <div className="container mx-auto px-4">
            <ul className="flex items-center justify-center gap-8 py-4 text-sm tracking-wide" style={{ fontFamily: 'Lato, sans-serif' }}>
              <li><a href="#" className="hover:text-gray-600 transition-colors">GALLERY</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">WEDDING MOVIE</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">PRODUCT</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">QUESTION</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">INSTAGRAM</a></li>
              <li><a href="#" className="hover:text-gray-600 transition-colors">BLOG</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Category Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-start">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 border rounded transition-all ${
                activeCategory === category.id
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-800'
              }`}
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="break-inside-avoid">
              <div className="group relative overflow-hidden cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end justify-center pb-6">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm" style={{ fontFamily: 'Lato, sans-serif' }}>
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button className="px-3 py-1 text-sm hover:underline" style={{ fontFamily: 'Lato, sans-serif' }}>Prev</button>
          <button className="px-3 py-1 text-sm bg-gray-800 text-white rounded">1</button>
          <button className="px-3 py-1 text-sm hover:underline">2</button>
          <button className="px-3 py-1 text-sm hover:underline">3</button>
          <button className="px-3 py-1 text-sm hover:underline">4</button>
          <button className="px-3 py-1 text-sm hover:underline">5</button>
          <button className="px-3 py-1 text-sm hover:underline" style={{ fontFamily: 'Lato, sans-serif' }}>Next</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3"/>
                <path d="M16 8h-6v8h6V8z"/>
              </svg>
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center text-xs text-gray-600 space-y-2" style={{ fontFamily: 'Lato, sans-serif' }}>
            <p>전주웨딩스냅, 전주본식스냅, 전주웨딩스튜디오, 전주웨딩촬영, 전주스냅</p>
            <p>전라북도 전주시 완산구 천잠로 472 래미안힐스 2동 신영수스튜디오</p>
            <p>대표 : 신영수 Tel 010-6783-0100 Business Number 418-08-90897</p>
            <p className="pt-4">Copyright © SHINYOUNGSOO.COM All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
