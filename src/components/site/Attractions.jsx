import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const data = [
  {
    title: 'The Taj Mahal',
    hi: 'ताज महल',
    distance: '83 km',
    drive: '~ 1h 45m drive',
    desc: 'A teardrop of marble on the cheek of time. Plan a sunrise visit — we arrange chauffeur transfers and breakfast on return.',
    img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Chandraprabhu Jain Temple',
    hi: 'चंद्रप्रभु जैन मंदिर',
    distance: '2 km',
    drive: '~ 5 min drive',
    desc: 'A serene Jain pilgrimage just minutes from the resort gates. Soft bells, white domes and the kind of silence only sacred ground holds.',
    img: 'https://images.unsplash.com/photo-1557062975-96113e46608b?auto=format&fit=crop&q=80&w=1200',
  },
];

const Row = ({ item, reverse, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
      <motion.div style={isMobile ? {} : { y }} className="lg:col-span-7 relative h-[420px] md:h-[560px] overflow-hidden rounded-2xl">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/70 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <span className="font-devanagari text-[#D4AF37] text-xl tracking-widest">{item.hi}</span>
          <span className="px-3 py-1 text-[10px] uppercase tracking-[0.22em] glass-strong text-[#FFFFF0]">{item.distance}</span>
        </div>
      </motion.div>
      <div className="lg:col-span-5">
        <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">0{index + 5} — Nearby</span>
        <h3 className="mt-4 font-serif-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-[#FFFFF0]">
          {item.title}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#FFFFF0]/55">
          <MapPin className="w-3 h-3 text-[#D4AF37]" /> {item.drive}
        </div>
        <p className="mt-6 text-[#FFFFF0]/70 leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
};

export const Attractions = () => {
  return (
    <section id="attractions" className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24" data-testid="attractions-section">
      <div className="mx-auto max-w-7xl space-y-28">
        {data.map((d, i) => (
          <Row key={d.title} item={d} reverse={i % 2 === 1} index={i} />
        ))}
      </div>
    </section>
  );
};
