import { motion } from 'framer-motion';

const images = [
  { src: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBzdW5zZXR8ZW58MHx8fHwxNzc4OTE0MjQ0fDA&ixlib=rb-4.1.0&q=85', tall: true },
  { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjByZXNvcnQlMjBzdW5zZXR8ZW58MHx8fHwxNzc4OTE0MjQ0fDA&ixlib=rb-4.1.0&q=85' },
  { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MHx8fHwxNzc4OTEwNjU5fDA&ixlib=rb-4.1.0&q=85' },
  { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?crop=entropy&cs=srgb&fm=jpg', tall: true },
  { src: 'https://images.unsplash.com/photo-1630587148265-761cbd139043?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MHx8fHwxNzc4OTEwNjU5fDA&ixlib=rb-4.1.0&q=85' },
  { src: 'https://images.unsplash.com/photo-1728910156510-77488f19b152?crop=entropy&cs=srgb&fm=jpg' },
  { src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbHxlbnwwfHx8fDE3Nzg5MTQyNDR8MA&ixlib=rb-4.1.0&q=85', tall: true },
  { src: 'https://images.unsplash.com/photo-1557062975-96113e46608b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxoZXJpdGFnZSUyMHRlbXBsZSUyMGluZGlhfGVufDB8fHx8MTc3ODkxNDI0NHww&ixlib=rb-4.1.0&q=85' },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24" data-testid="gallery-section">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">07 — Gallery</span>
            <h2 className="mt-4 font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#FFFFF0]">
              Frames of a slow, <em className="text-gold-gradient not-italic">golden</em> stay.
            </h2>
          </div>
          <p className="md:max-w-xs text-sm text-[#FFFFF0]/55">Hover, breathe — colour returns where memory lives.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: (i % 6) * 0.05, duration: 0.8 }}
              className={`relative overflow-hidden rounded-xl ${img.tall ? 'row-span-2' : ''}`}
              data-testid={`gallery-img-${i}`}
            >
              <img
                src={img.src}
                alt={`Gunjan Resort moment ${i + 1}`}
                className="w-full h-full object-cover grayscale-[60%] hover:grayscale-0 hover:scale-105 transition-all duration-[1400ms]"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
