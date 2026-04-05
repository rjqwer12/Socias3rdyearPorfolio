import { useEffect } from 'react';

export function useNavShadow() {
  useEffect(() => {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 50);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
