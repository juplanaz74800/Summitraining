'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from '@phosphor-icons/react/dist/ssr';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ width: '40px', height: '40px' }} />
    );
  }

  const isDark = theme === 'dark';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      style={{
        background: 'rgba(var(--color-accent-rgb), 0.1)',
        border: '1px solid rgba(var(--color-outline-rgb), 0.1)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--color-accent)',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{
          y: isDark ? 0 : 40,
          opacity: isDark ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ position: 'absolute' }}
      >
        <Moon weight="thin" size={20} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          y: isDark ? -40 : 0,
          opacity: isDark ? 0 : 1
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Sun weight="thin" size={20} />
      </motion.div>
    </motion.button>
  );
}
