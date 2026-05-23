import { motion } from 'framer-motion';
import { Bed, Wifi, Snowflake, Coffee, ArrowUpRight } from 'lucide-react';

const rooms = [
  {
    name: 'Heritage Room',
    sub: 'क्लासिक',
    price: '₹ 3,200',
    desc: 'A warm, sun-touched room with carved wood detailing and soft ivory linens — ideal for a quiet Agra stopover.',
    img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800',
    features: ['Queen Bed', 'AC', 'Wi-Fi', 'Breakfast'],
  },
  {
    name: 'Royal Suite',
    sub: 'राजसी',
    price: '₹ 5,800',
    desc: 'Higher ceilings, walk-in dressing alcove, and a private balcony overlooking the gardens. The crown of the estate.',
    img: 'https://images.unsplash.com/photo-1630587148265-761cbd139043?auto=format&fit=crop&q=80&w=800',
    features: ['King Bed', 'Balcony', 'Lounge', 'Service'],
  },
  {
    name: 'Family Wing',
    sub: 'परिवार',
    price: '₹ 4,500',
    desc: 'A spacious dual-room layout for families on the Agra circuit — kid-friendly amenities and a connecting study.',
    img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    features: ['2 Rooms', 'Kid-friendly', 'AC', 'Wi-Fi'],
  },
];

const featureIcon = { 'Queen Bed': Bed, 'King Bed': Bed, '2 Rooms': Bed, AC: Snowflake, 'Wi-Fi': Wifi, Breakfast: Coffee, Balcony: ArrowUpRight, Lounge: ArrowUpRight, Service: Coffee, 'Kid-friendly': Coffee };

export const Rooms = () => {
  return (
    <section id="rooms" className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24" data-testid="rooms-section">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">02 — Suites</span>
            <h2 className="mt-4 font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#FFFFF0]">
              Sleep, like <em className="text-gold-gradient not-italic">royalty</em> once did.
            </h2>
          </div>
          <p className="md:max-w-sm text-sm text-[#FFFFF0]/60 leading-relaxed">
            Three handcrafted room categories — each a slow exhale, each a tribute to North Indian warmth and modern stillness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl glass hover:border-[#D4AF37]/50 transition-all duration-500"
              data-testid={`room-card-${i}`}
            >
              <div className="relative h-72 overflow-hidden">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-devanagari text-[#D4AF37] text-sm tracking-widest">{r.sub}</span>
                <span className="absolute top-4 right-4 px-3 py-1 text-[10px] uppercase tracking-[0.22em] glass-strong text-[#FFFFF0]">from {r.price}/night</span>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between">
                  <h3 className="font-serif-display text-2xl text-[#FFFFF0]">{r.name}</h3>
                  <ArrowUpRight className="w-5 h-5 text-[#D4AF37] -translate-y-0.5 group-hover:translate-x-1 group-hover:-translate-y-1.5 transition-transform" />
                </div>
                <p className="mt-3 text-sm text-[#FFFFF0]/60 leading-relaxed">{r.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {r.features.map((f) => {
                    const Icon = featureIcon[f] || Coffee;
                    return (
                      <span key={f} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] border border-[#FFFFF0]/15 text-[#FFFFF0]/70 rounded-full">
                        <Icon className="w-3 h-3 text-[#D4AF37]" /> {f}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
