import { useEffect } from 'react';

/**
 * When CSS scroll-behavior: smooth isn’t supported, polyfill in-page # links (nav + home buttons).
 */
export function useSmoothAnchorFallback() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cssSmoothScroll =
      !reduceMotion && typeof CSS !== 'undefined' && CSS.supports('scroll-behavior', 'smooth');

    if (cssSmoothScroll || reduceMotion) return;

    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (history.pushState) {
        history.pushState(null, '', hash);
      }
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
}
