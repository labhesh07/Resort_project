import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, MapPin, Star } from 'lucide-react';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden" data-testid="hero-section">
      {/* Background image with parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBzdW5zZXR8ZW58MHx8fHwxNzc4OTE0MjQ0fDA&ixlib=rb-4.1.0&q=85"
          alt="Gunjan Resort cinematic view at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-[#0F0F0F]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_transparent_0%,_rgba(15,15,15,0.45)_60%,_#0F0F0F_100%)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col">
        {/* Top meta strip */}
        <div className="pt-32 md:pt-36 px-6 md:px-12 lg:px-24 flex justify-between items-start text-[10px] md:text-xs uppercase tracking-[0.32em] text-[#FFFFF0]/60">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-[#D4AF37]" /> <span>Agra · Uttar Pradesh · India</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" /><Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" /><Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" /><Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
            <span className="ml-2">Est. Heritage</span>
          </motion.div>
        </div>

        {/* Main title */}
        <div className="flex-1 flex items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="block font-devanagari text-[#D4AF37] text-2xl md:text-3xl tracking-wider mb-4"
            >
              गुंजन रिज़ॉर्ट
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-display text-[#FFFFF0] text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tighter"
              data-testid="hero-title"
            >
              Gunjan <em className="not-italic text-gold-gradient">Resort</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-8 max-w-xl text-base md:text-lg text-[#FFFFF0]/75 leading-relaxed"
            >
              A royal heritage escape near the Taj Mahal — where centuries-old soul meets cinematic modern luxury, on the threshold of India's most poetic skyline.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#0F0F0F] px-8 py-4 text-xs uppercase tracking-[0.28em] font-medium hover:bg-[#F3E5AB] transition-colors"
                data-testid="hero-reserve-btn"
              >
                Reserve your stay
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-3 border border-[#FFFFF0]/30 text-[#FFFFF0] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                data-testid="hero-discover-btn"
              >
                Discover the estate
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="pb-10 px-6 md:px-12 lg:px-24 flex items-end justify-between"
        >
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#FFFFF0]/50">
            <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="block">
              <ArrowDown className="w-4 h-4 text-[#D4AF37]" />
            </motion.span>
            Scroll to enter
          </div>
          <div className="hidden md:block text-right text-[10px] uppercase tracking-[0.32em] text-[#FFFFF0]/50">
            <span className="block text-[#D4AF37]">est. <span className="font-serif-display text-base italic normal-case">हेरिटेज</span></span>
            <span>83 km from Taj Mahal</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
