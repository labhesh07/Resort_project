import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const voices = [
  { name: 'Aanya & Vikram', city: 'Mumbai', q: 'We broke our Agra journey here for a night and stayed two. The pool at sunset, the slow breakfast — pure cinema.', },
  { name: 'Daniel R.', city: 'Berlin', q: 'A genuinely thoughtful stop on the way to the Taj. Quiet, warm, gracious staff. The rooms felt curated, not just designed.', },
  { name: 'Priyanka S.', city: 'Bengaluru', q: 'A heritage hush in the middle of fields. We arrived tired travellers and left as guests who had been remembered.', },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0B0608]" data-testid="testimonials-section">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">08 — Voices</span>
            <h2 className="mt-4 font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#FFFFF0]">
              Whispers from <em className="text-gold-gradient not-italic">past guests</em>.
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[#FFFFF0]/70">
            <div className="flex">{[0,1,2,3].map(i => (<Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />))}<Star className="w-4 h-4 text-[#D4AF37]" /></div>
            <span className="text-xs uppercase tracking-[0.22em]">4.0 · Google reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {voices.map((v, i) => (
            <motion.figure
              key={v.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.9 }}
              className="glass rounded-2xl p-8 flex flex-col justify-between"
              data-testid={`testimonial-${i}`}
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/60 mb-6" />
              <blockquote className="font-serif-display text-xl md:text-2xl leading-snug text-[#FFFFF0]">"{v.q}"</blockquote>
              <figcaption className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.22em]">
                <span className="text-[#FFFFF0]/75">{v.name}</span>
                <span className="text-[#D4AF37]">{v.city}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
