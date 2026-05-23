import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24" data-testid="about-section">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="block text-xs uppercase tracking-[0.32em] text-[#D4AF37] mb-6"
          >
            01 — The Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#FFFFF0]"
          >
            A quiet hum of <em className="text-gold-gradient not-italic">heritage</em>, between fields and the eternal Taj.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-[#FFFFF0]/70 leading-relaxed"
          >
            Set off the NH-19 corridor and cradled by golden mustard fields, Gunjan Resort is a contemporary heritage estate
            — a slow, sun-warmed pause on the road to Agra's marble masterpiece. Heirloom warmth meets clean modern lines,
            woven together by gold light, soft linen, and Indian craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { v: '83', l: 'km to Taj Mahal' },
              { v: '2', l: 'km to Jain Temple' },
              { v: '24/7', l: 'Room service' },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl px-4 py-5">
                <div className="font-serif-display text-3xl text-gold-gradient">{s.v}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#FFFFF0]/55">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 relative h-[480px] md:h-[620px]">
          <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[68%] h-[70%] overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjByZXNvcnQlMjBzdW5zZXR8ZW58MHx8fHwxNzc4OTE0MjQ0fDA&ixlib=rb-4.1.0&q=85"
              alt="Resort poolside"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[55%] h-[58%] overflow-hidden rounded-xl border border-[#D4AF37]/30">
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MHx8fHwxNzc4OTEwNjU5fDA&ixlib=rb-4.1.0&q=85"
              alt="Heritage suite interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute top-1/2 left-[42%] -translate-y-1/2 hidden md:flex w-28 h-28 rounded-full glass-strong items-center justify-center">
            <span className="font-devanagari text-[#D4AF37] text-sm tracking-widest">शांति</span>
          </div>
        </div>
      </div>
    </section>
  );
};
