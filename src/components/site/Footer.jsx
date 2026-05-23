import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#080406]" data-testid="site-footer">
      {/* Marquee */}
      <div className="overflow-hidden border-b border-white/5 py-8">
        <div className="marquee-track flex gap-16 whitespace-nowrap font-serif-display text-5xl md:text-7xl text-[#FFFFF0]/[0.08]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-16">
              {['Gunjan Resort', 'गुंजन रिज़ॉर्ट', 'Heritage · Agra', 'Reserve your story', 'गुंजन', '★ 4.0'].map((t, i) => (
                <span key={`${k}-${i}`}>{t} <span className="text-[#D4AF37]/30">·</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-24 py-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full border border-[#D4AF37]/60 flex items-center justify-center">
                <span className="font-serif-display text-[#D4AF37] text-xl italic">G</span>
              </span>
              <div className="leading-tight">
                <div className="font-serif-display text-xl text-[#FFFFF0]">Gunjan Resort</div>
                <div className="font-devanagari text-xs text-[#D4AF37] tracking-[0.25em]">गुंजन रिज़ॉर्ट</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-[#FFFFF0]/55 leading-relaxed">
              A contemporary heritage estate on the road to the Taj Mahal — slow mornings, gold evenings, and a kind of stillness worth driving for.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.32em] text-[#D4AF37] mb-5">Explore</div>
            <ul className="space-y-3 text-sm text-[#FFFFF0]/70">
              {['About', 'Suites', 'Amenities', 'Nearby', 'Gallery', 'Contact'].map((l) => (
                <li key={l}><a className="link-underline" href={`#${l.toLowerCase()}`}>{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.32em] text-[#D4AF37] mb-5">Reach</div>
            <ul className="space-y-3 text-sm text-[#FFFFF0]/70">
              <li><a className="link-underline" href="tel:+918859002700">+91 88590 02700</a></li>
              <li><a className="link-underline" href="https://wa.me/918859002700" target="_blank" rel="noreferrer">WhatsApp concierge</a></li>
              <li>NH 19, Jugmudi, Dayagang,<br />Uttar Pradesh 283151, India</li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-[0.28em] text-[#FFFFF0]/40"
        >
          <span>© {new Date().getFullYear()} Gunjan Resort. All moments reserved.</span>
          <span>Crafted with <span className="text-[#D4AF37]">गुंजन</span> · Heritage Edition</span>
        </motion.div>
      </div>
    </footer>
  );
};
