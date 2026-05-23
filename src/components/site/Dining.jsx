import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const menuCategories = [
  {
    id: 'appetizers',
    name: 'Shorba & Starters',
    hi: 'शुरुआत',
    items: [
      {
        name: 'Murgh Badami Shorba',
        hi: 'मुर्ग बादामी शोरबा',
        price: '₹ 350',
        desc: 'A velvety broth of slow-simmered almond paste and chicken extract, finished with cardamom and a drop of saffron oil.',
        isVeg: false,
        img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=250&q=70',
      },
      {
        name: 'Tandoori Broccoli',
        hi: 'तंदूरी ब्रोकली',
        price: '₹ 420',
        desc: 'Fresh florets marinated in spiced hung yogurt, cream cheese, and green cardamom, grilled golden in our clay oven.',
        isVeg: true,
        isSignature: true,
        img: 'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&w=250&q=70',
      },
      {
        name: 'Galouti Kebab',
        hi: 'गलौटी कबाब',
        price: '₹ 550',
        desc: 'Melt-in-mouth minced lamb patties infused with 15 royal spices, slow-grilled and served on a mini tawa paratha.',
        isVeg: false,
        isSignature: true,
        img: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=250&q=70',
      },
      {
        name: 'Paneer Ajwaini Tikka',
        hi: 'पनीर अजवाइनी टिक्का',
        price: '₹ 450',
        desc: 'Slabs of artisan cottage cheese, marinated in toasted carom seeds and yellow chili paste, charred in the tandoor.',
        isVeg: true,
        img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=250&q=70',
      }
    ]
  },
  {
    id: 'mains',
    name: 'Royal Mains',
    hi: 'मुख्य भोजन',
    items: [
      {
        name: 'Nalli Nihari',
        hi: 'नल्ली निहारी',
        price: '₹ 750',
        desc: 'Slow-cooked baby lamb shanks in a rich, deeply aromatic gravy, simmered overnight to falling-off-the-bone tenderness.',
        isVeg: false,
        isSignature: true,
        img: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=250&q=70',
      },
      {
        name: 'Paneer Khas Khaas',
        hi: 'पनीर खास ख़ास',
        price: '₹ 580',
        desc: 'Cottage cheese triangles poached in a delicate gravy of white poppy seeds, cashews, and organic vetiver extracts.',
        isVeg: true,
        img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=250&q=70',
      },
      {
        name: 'Jharokha Biryani',
        hi: 'झरोखा बिरयानी',
        price: '₹ 680',
        desc: 'Kashmiri saffron-infused long grain basmati rice layered with succulent chicken, sealed and dum-cooked under pastry.',
        isVeg: false,
        isSignature: true,
        img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=250&q=70',
      },
      {
        name: 'Dal Gunjan',
        hi: 'दाल गुंजन',
        price: '₹ 480',
        desc: 'Our signature black lentils, slow-simmered for 24 hours on a charcoal fire, enriched with churned butter and fresh cream.',
        isVeg: true,
        isSignature: true,
        img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=250&q=70',
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Sweet Indulgence',
    hi: 'मीठा',
    items: [
      {
        name: 'Shahi Tukda',
        hi: 'शाही टुकड़ा',
        price: '₹ 380',
        desc: 'Ghee-fried heritage bread soaked in saffron milk syrup, layered with thick rabri, silver leaf, and pistachios.',
        isVeg: true,
        isSignature: true,
        img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=250&q=70',
      },
      {
        name: 'Elaneer Payasam',
        hi: 'इलानीर पायसम',
        price: '₹ 320',
        desc: 'Tender coconut kernel slivers simmered in cardamom-sweetened coconut milk, served chilled with rose petals.',
        isVeg: true,
        img: 'https://images.unsplash.com/photo-1601356616077-695728ecf769?auto=format&fit=crop&w=250&q=70',
      },
      {
        name: 'Saffron Pistachio Kulfi',
        hi: 'केसर पिस्ता कुल्फी',
        price: '₹ 340',
        desc: 'Dense, slow-reduced frozen milk dessert infused with threads of Kashmiri saffron and crushed green pistachios.',
        isVeg: true,
        img: 'https://images.unsplash.com/photo-1505394033774-4334f2495116?auto=format&fit=crop&w=250&q=70',
      }
    ]
  },
  {
    id: 'elixirs',
    name: 'Signature Elixirs',
    hi: 'पेय',
    items: [
      {
        name: 'Saffron-Pistachio Lassi',
        hi: 'केसर पिस्ता लस्सी',
        price: '₹ 250',
        desc: 'Chilled yogurt churned with pure saffron extract, cardamom powder, and garnished with premium slivered almonds.',
        isVeg: true,
        img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=250&q=70',
      },
      {
        name: 'Rooh Afza Mojito',
        hi: 'रूह अफ़ज़ा मोजितो',
        price: '₹ 220',
        desc: 'Traditional rose distillate muddled with fresh mint sprigs, lime wedges, organic sugar, and sparkling club soda.',
        isVeg: true,
        isSignature: true,
        img: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=250&q=70',
      },
      {
        name: 'Cardamom & Ginger Brew',
        hi: 'इलायची अदरक काढ़ा',
        price: '₹ 240',
        desc: 'Chilled herbal infusion of organic ginger juice, green cardamom pods, mint leaves, and a touch of wild honey.',
        isVeg: true,
        img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=250&q=70',
      }
    ]
  }
];

const VegNonVegSymbol = ({ isVeg }) => {
  const color = isVeg ? '#10b981' : '#b22222'; // Emerald green or crimson
  return (
    <div className="flex items-center gap-2 select-none">
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <rect x="0.75" y="0.75" width="14.5" height="14.5" rx="2.5" stroke={color} strokeWidth="1.5" />
        {isVeg ? (
          <circle cx="8" cy="8" r="3.5" fill={color} />
        ) : (
          <polygon points="8,4 12,11 4,11" fill={color} />
        )}
      </svg>
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] font-sans-display" style={{ color }}>
        {isVeg ? 'Veg' : 'Non-Veg'}
      </span>
    </div>
  );
};

export const Dining = () => {
  const [activeTab, setActiveTab] = useState('appetizers');
  const tabsRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const activeCategory = menuCategories.find((cat) => cat.id === activeTab);

  // Check scroll position and toggle arrow visibility
  const updateScrollArrows = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      const canScroll = scrollWidth > clientWidth;
      setIsScrollable(canScroll);
      setShowLeftArrow(canScroll && scrollLeft > 5);
      setShowRightArrow(canScroll && scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  // Click scroll handler
  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const amount = direction === 'left' ? -180 : 180;
      tabsRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = tabsRef.current;
    if (el) {
      // Run once on mount to set initial states
      updateScrollArrows();
      
      el.addEventListener('scroll', updateScrollArrows);
      window.addEventListener('resize', updateScrollArrows);
      
      // Also execute layout check on image or font loaded triggers
      const handleLoad = () => setTimeout(updateScrollArrows, 300);
      window.addEventListener('load', handleLoad);
      
      return () => {
        el.removeEventListener('scroll', updateScrollArrows);
        window.removeEventListener('resize', updateScrollArrows);
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  // Whenever activeTab changes, recalculate scroll parameters
  useEffect(() => {
    setTimeout(updateScrollArrows, 100);
  }, [activeTab]);

  return (
    <section id="dining" className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0F0F0F]" data-testid="dining-section">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.32em] text-[#D4AF37]">04 — Dining</span>
            <h2 className="mt-4 font-serif-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#FFFFF0]">
              Feast, like the <em className="text-gold-gradient not-italic">emperors</em> once did.
            </h2>
          </div>
          <p className="md:max-w-sm text-sm text-[#FFFFF0]/60 leading-relaxed">
            Our heritage kitchen invites you on a sensory pilgrimage through the flavours of the Mughal circuit, where ancestral patience meets modern plating.
          </p>
        </div>

        {/* Categories Tab Selector Wrapper - Centered, dynamic slide layout */}
        <div className="flex items-center gap-3 mb-12 select-none relative justify-center">
          {/* Left Arrow Button (Rendered only if scrollable) */}
          {isScrollable && (
            <button
              onClick={() => scrollTabs('left')}
              className={`w-10 h-10 rounded-full border border-[#D4AF37]/35 bg-[#0F0F0F]/80 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition-all duration-300 flex-shrink-0 shadow-md ${
                showLeftArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Categories Tab Scroll Area */}
          <div 
            ref={tabsRef}
            className="dining-tabs-container mb-0 flex-grow-0"
            style={{ 
              overflowX: isScrollable ? 'auto' : 'hidden',
              justifyContent: isScrollable ? 'flex-start' : 'center',
              width: isScrollable ? '100%' : 'auto'
            }}
          >
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="dining-tab-btn"
              >
                <span className={`dining-tab-text transition-colors duration-300 ${activeTab === cat.id ? 'text-[#D4AF37] font-semibold' : 'text-[#FFFFF0]/60 hover:text-[#FFFFF0]'}`}>
                  {cat.name}
                </span>
                <span className={`dining-tab-sub transition-colors duration-300 ${activeTab === cat.id ? 'text-[#FFFFF0]/85' : 'text-[#FFFFF0]/40'}`}>
                  {cat.hi}
                </span>
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Arrow Button (Rendered only if scrollable) */}
          {isScrollable && (
            <button
              onClick={() => scrollTabs('right')}
              className={`w-10 h-10 rounded-full border border-[#D4AF37]/35 bg-[#0F0F0F]/80 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0F0F0F] transition-all duration-300 flex-shrink-0 shadow-md ${
                showRightArrow ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Menu Items Row List (Swiggy-style with custom CSS styles) */}
        <div className="glass-strong rounded-3xl p-6 md:p-10 border border-[#D4AF37]/15">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="divide-y divide-[#FFFFF0]/10"
            >
              {activeCategory.items.map((item) => (
                <div
                  key={item.name}
                  className="dining-item-row first:pt-0 last:pb-0"
                >
                  {/* Left Side: Fixed Image + Overlapping ADD Button */}
                  <div className="dining-img-wrapper">
                    <div className="dining-img-container">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="dining-img"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/30 to-transparent pointer-events-none" />
                    </div>

                    {/* Styled + ADD Button */}
                    <button className="dining-add-btn">
                      <Plus className="w-3.5 h-3.5" /> ADD
                    </button>
                  </div>

                  {/* Right Side: Content Details */}
                  <div className="dining-text-container">
                    {/* Badge Line: Veg/Non-Veg & Signature */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <VegNonVegSymbol isVeg={item.isVeg} />

                      {item.isSignature && (
                        <span className="text-[10px] text-[#D4AF37] tracking-[0.18em] font-serif-display italic select-none">
                          ★ Chef's Choice
                        </span>
                      )}
                    </div>

                    {/* Title + Price Row */}
                    <div className="dining-title-row">
                      <h3 className="font-serif-display text-xl md:text-2xl text-[#FFFFF0] tracking-wide">
                        {item.name}
                      </h3>
                      <span className="font-serif-display text-lg md:text-xl text-[#D4AF37] font-semibold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>

                    {/* Hindi subtitle */}
                    <div className="font-devanagari text-xs text-[#FFFFF0]/40 tracking-wider">
                      {item.hi}
                    </div>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-[#FFFFF0]/65 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
