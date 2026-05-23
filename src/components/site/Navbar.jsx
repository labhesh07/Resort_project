import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#rooms', label: 'Suites' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#dining', label: 'Dining' },
  { href: '#attractions', label: 'Nearby' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Voices' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderHeaderContent = () => (
    <div className={`mx-auto max-w-7xl px-6 md:px-12`}>
      <div className={`flex items-center justify-between rounded-full px-5 md:px-7 py-3 transition-all duration-500 ${scrolled ? 'glass-strong' : 'bg-transparent'}`}>
        <a href="#hero" className="flex items-center gap-3 group" data-testid="nav-logo">
          <span className="w-9 h-9 rounded-full border border-[#D4AF37]/60 flex items-center justify-center group-hover:rotate-180 transition-transform duration-700">
            <span className="font-serif-display text-[#D4AF37] text-lg italic">G</span>
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif-display text-lg text-[#FFFFF0] tracking-wide">Gunjan Resort</span>
            <span className="font-devanagari text-[10px] text-[#D4AF37] tracking-[0.25em]">गुंजन रिज़ॉर्ट</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-[12px] uppercase tracking-[0.22em] text-[#FFFFF0]/80 hover:text-[#D4AF37]" data-testid={`nav-link-${l.label.toLowerCase()}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] font-medium bg-[#D4AF37] text-[#0F0F0F] hover:bg-[#F3E5AB] transition-colors"
            data-testid="nav-book-btn"
          >
            Reserve
          </a>
          <a href="tel:+918859002700" className="lg:hidden p-2 text-[#D4AF37]" data-testid="nav-call-mobile" aria-label="Call">
            <Phone className="w-4 h-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-[#FFFFF0]" data-testid="nav-toggle" aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}
        data-testid="site-navbar"
      >
        {renderHeaderContent()}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mx-6 mt-3 glass rounded-2xl overflow-hidden"
              data-testid="nav-mobile-panel"
            >
              <div className="flex flex-col p-6 gap-5">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.22em] text-[#FFFFF0]/90 hover:text-[#D4AF37]">
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center px-5 py-3 text-[11px] uppercase tracking-[0.25em] bg-[#D4AF37] text-[#0F0F0F]">Reserve</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}
      data-testid="site-navbar"
    >
      {renderHeaderContent()}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mx-6 mt-3 glass rounded-2xl overflow-hidden"
            data-testid="nav-mobile-panel"
          >
            <div className="flex flex-col p-6 gap-5">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.22em] text-[#FFFFF0]/90 hover:text-[#D4AF37]">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center px-5 py-3 text-[11px] uppercase tracking-[0.25em] bg-[#D4AF37] text-[#0F0F0F]">Reserve</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
