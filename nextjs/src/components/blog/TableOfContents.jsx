'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TableOfContents({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!items || items.length === 0) return null;

  return (
    <div style={{ 
      marginBottom: '3rem', 
      background: 'var(--color-surface-container-low)', 
      borderRadius: '12px', 
      border: '1px solid var(--color-outline)',
      overflow: 'hidden'
    }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          width: '100%', 
          padding: '1rem 1.5rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          background: 'var(--color-surface-container)', 
          border: 'none', 
          color: 'var(--color-text-main)', 
          fontFamily: 'var(--font-heading)', 
          fontSize: '1.1rem', 
          fontWeight: '600', 
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        className="hover:bg-opacity-80"
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
          Sommaire de l'article
        </span>
        <span style={{ 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
          transition: 'transform 0.3s ease',
          display: 'flex',
          alignItems: 'center'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '1.5rem', borderTop: '1px solid var(--color-outline)' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {items.map((item, index) => (
                  <li key={index} style={{ 
                    marginBottom: index === items.length - 1 ? '0' : '0.85rem', 
                    paddingLeft: item.level > 2 ? '1.5rem' : '0',
                    borderLeft: item.level > 2 ? '2px solid var(--color-surface-container-high)' : 'none',
                    marginLeft: item.level > 2 ? '0.5rem' : '0'
                  }}>
                    <a 
                      href={`#${item.id}`} 
                      style={{ 
                        color: item.level > 2 ? 'var(--color-text-muted)' : 'var(--color-accent)', 
                        textDecoration: 'none', 
                        fontSize: item.level > 2 ? '0.95rem' : '1.05rem', 
                        fontWeight: item.level > 2 ? '400' : '500',
                        transition: 'color 0.2s ease',
                        display: 'block'
                      }}
                      className="hover:brightness-125"
                      onClick={(e) => {
                        const el = document.getElementById(item.id);
                        if (el) {
                          e.preventDefault();
                          const y = el.getBoundingClientRect().top + window.scrollY - 100; // Offset for fixed header
                          window.scrollTo({ top: y, behavior: 'smooth' });
                          setIsOpen(false); // Close on click for better mobile UX
                        }
                      }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
