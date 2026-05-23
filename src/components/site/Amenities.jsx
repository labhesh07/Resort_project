import { motion } from 'framer-motion';
import { Wifi, Coffee, ParkingSquare, Waves, Snowflake, Shirt, ConciergeBell, Baby, Utensils, Dumbbell } from 'lucide-react';

const items = [
  { icon: Wifi, label: 'Free Wi-Fi', hi: 'वाई-फाई' },
  { icon: Coffee, label: 'Free Breakfast', hi: 'नाश्ता' },
  { icon: ParkingSquare, label: 'Parking', hi: 'पार्किंग' },
  { icon: Waves, label: 'Pool', hi: 'पूल' },
  { icon: Snowflake, label: 'Air Conditioned', hi: 'वातानुकूल' },
  { icon: Shirt, label: 'Laundry Service', hi: 'लॉन्ड्री' },
  { icon: ConciergeBell, label: 'Room Service', hi: 'सेवा' },
  { icon: Baby, label: 'Kid-friendly', hi: 'परिवार' },
  { icon: Utensils, label: 'Restaurant', hi: 'भोजन' },
  { icon: Dumbbell, label: 'Fitness Center', hi: 'फिटनेस' },
];

export const Amenities = () => {
  return (
    <section id="amenities" className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0B0608]" data-testid="amenities-section">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">03 — Amenities</span>
            <h2 className="mt-4 font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#FFFFF0]">
              Quiet <em className="text-gold-gradient not-italic">luxuries</em> — woven into every hour.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-sm text-[#FFFFF0]/60 leading-relaxed self-end">
            From sun-soaked breakfasts to twilight swims, our amenities are designed to disappear into the background of your stay — present when you need them, invisible when you don't.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.06, duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-xl p-6 hover:border-[#D4AF37]/50 transition-colors"
              data-testid={`amenity-${i}`}
            >
              <it.icon className="w-6 h-6 text-[#D4AF37] mb-5 group-hover:rotate-6 transition-transform" />
              <div className="font-serif-display text-lg text-[#FFFFF0]">{it.label}</div>
              <div className="mt-1 font-devanagari text-xs text-[#FFFFF0]/45 tracking-widest">{it.hi}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
