import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail, Loader2, Check } from 'lucide-react';
import { toast } from 'sonner';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';
const BACKEND_URL = '';
const API = `${BACKEND_URL}/api`;
const PHONE = '+918859002700';
const PHONE_DISPLAY = '+91 88590 02700';

const initial = { name: '', email: '', phone: '', check_in: '', check_out: '', guests: 2, room_type: 'Heritage Room', message: '' };

export const Contact = () => {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill name, email and phone');
      return;
    }
    try {
      setLoading(true);
      await axios.post(`${API}/enquiries`, { ...form, guests: Number(form.guests) || 2 });
      toast.success('Enquiry received — our concierge will reach out shortly.');
      setDone(true);
      setForm(initial);
    } catch (err) {
      console.error(err);
      toast.error('Could not send enquiry. Please call us instead.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24" data-testid="contact-section">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left info column */}
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">08 — Reserve</span>
          <h2 className="mt-4 font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#FFFFF0]">
            Book your <em className="text-gold-gradient not-italic">royal stay</em>.
          </h2>
          <p className="mt-6 text-[#FFFFF0]/65 leading-relaxed max-w-md">
            Share a few details — our concierge desk will personally confirm availability and craft a stay that fits your story.
          </p>

          <div className="mt-10 space-y-5">
            <a href={`tel:${PHONE}`} className="group flex items-center gap-4 glass rounded-xl p-5 hover:border-[#D4AF37]/50 transition" data-testid="contact-call">
              <span className="w-11 h-11 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/20">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#FFFFF0]/55">Call concierge</div>
                <div className="font-serif-display text-xl text-[#FFFFF0]">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={`https://wa.me/${PHONE.replace('+', '')}`} target="_blank" rel="noreferrer" className="group flex items-center gap-4 glass rounded-xl p-5 hover:border-[#D4AF37]/50 transition" data-testid="contact-whatsapp">
              <span className="w-11 h-11 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/20">
                <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#FFFFF0]/55">WhatsApp</div>
                <div className="font-serif-display text-xl text-[#FFFFF0]">Chat with us</div>
              </div>
            </a>
            <div className="flex items-start gap-4 glass rounded-xl p-5">
              <span className="w-11 h-11 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#FFFFF0]/55">Location</div>
                <div className="font-serif-display text-lg text-[#FFFFF0] leading-tight">3M8X+38M, NH 19, Jugmudi,<br />Dayagang, Uttar Pradesh 283151</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="lg:col-span-7">
          <form onSubmit={submit} className="glass-strong rounded-2xl p-7 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-5" data-testid="enquiry-form">
            <Field label="Full name" testid="field-name">
              <input value={form.name} onChange={update('name')} required type="text" className="bp-input" data-testid="input-name" placeholder="Your name" />
            </Field>
            <Field label="Email" testid="field-email">
              <input value={form.email} onChange={update('email')} required type="email" className="bp-input" data-testid="input-email" placeholder="you@example.com" />
            </Field>
            <Field label="Phone" testid="field-phone">
              <input value={form.phone} onChange={update('phone')} required type="tel" className="bp-input" data-testid="input-phone" placeholder="+91 ..." />
            </Field>
            <Field label="Guests" testid="field-guests">
              <input value={form.guests} onChange={update('guests')} min={1} max={20} type="number" className="bp-input" data-testid="input-guests" />
            </Field>
            <Field label="Check-in" testid="field-checkin">
              <input value={form.check_in} onChange={update('check_in')} type="date" className="bp-input" data-testid="input-checkin" />
            </Field>
            <Field label="Check-out" testid="field-checkout">
              <input value={form.check_out} onChange={update('check_out')} type="date" className="bp-input" data-testid="input-checkout" />
            </Field>
            <Field label="Room type" testid="field-room" full>
              <select value={form.room_type} onChange={update('room_type')} className="bp-input" data-testid="input-room">
                <option>Heritage Room</option>
                <option>Royal Suite</option>
                <option>Family Wing</option>
              </select>
            </Field>
            <Field label="Message" testid="field-message" full>
              <textarea value={form.message} onChange={update('message')} rows={4} className="bp-input resize-none" data-testid="input-message" placeholder="Any special requests, occasions, dietary preferences..." />
            </Field>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#FFFFF0]/45 flex items-center gap-2">
                <Mail className="w-3 h-3 text-[#D4AF37]" /> No spam · we reply within 24h
              </div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                disabled={loading || done}
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-[#0F0F0F] px-10 py-4 text-xs uppercase tracking-[0.28em] font-medium hover:bg-[#F3E5AB] transition-colors disabled:opacity-60"
                data-testid="submit-enquiry-btn"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : done ? <Check className="w-4 h-4" /> : null}
                {loading ? 'Sending' : done ? 'Sent' : 'Send enquiry'}
              </motion.button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .bp-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,240,0.18);
          color: #FFFFF0;
          padding: 12px 2px;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          letter-spacing: 0.02em;
          outline: none;
          transition: border-color 250ms ease;
        }
        .bp-input::placeholder { color: rgba(255,255,240,0.35); }
        .bp-input:focus { border-color: #D4AF37; }
        select.bp-input { background-color: #1A080C; }
        select.bp-input option { background: #1A080C; color: #FFFFF0; }
        input[type="date"].bp-input { color-scheme: dark; }
      `}</style>
    </section>
  );
};

const Field = ({ label, children, full, testid }) => (
  <label className={`block ${full ? 'md:col-span-2' : ''}`} data-testid={testid}>
    <span className="block text-[10px] uppercase tracking-[0.28em] text-[#FFFFF0]/50 mb-2">{label}</span>
    {children}
  </label>
);
