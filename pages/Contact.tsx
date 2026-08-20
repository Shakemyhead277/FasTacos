import { useEffect, type ReactNode } from 'react';

function LocationCard({
  title,
  address,
  directions,
  phone,
  hoursContent,
}: {
  title: string;
  address: string;
  directions: string;
  phone?: string;
  hoursContent: ReactNode;
}) {
  return <article className="rounded-2xl bg-white p-6 shadow-md sm:p-8"><h2 className="font-display text-3xl text-[#C0392B]">📍 {title}</h2><p className="mt-5 leading-relaxed text-stone-600">{address}</p><a target="_blank" rel="noreferrer" href={directions} className="mt-4 inline-block rounded-full bg-[#27AE60] px-4 py-2 text-sm font-bold text-white transition hover:opacity-90">Get Directions</a><div className="mt-7 space-y-5 text-stone-600"><div>{phone && <><h3 className="font-bold text-stone-900">📞 Call Us</h3><a href={`tel:${phone?.replace(/\D/g,'')}`} className="text-xl font-bold text-[#C0392B]">{phone}</a></>}</div><div><h3 className="font-bold text-stone-900">🕐 Hours</h3>{hoursContent}</div><div><h3 className="font-bold text-stone-900">🛎️ Service Options</h3><p className="mt-1 leading-relaxed">🍽️ Dine-In · 🥡 Takeout · 🚗 No-Contact Delivery · 🏪 Onsite Services</p></div><div><h3 className="font-bold text-stone-900">♿ Accessibility</h3><p className="mt-1 leading-relaxed">Wheelchair-accessible entrance, parking lot, restroom, and seating.</p></div><div><h3 className="font-bold text-stone-900">💳 Payments</h3><p className="mt-1 leading-relaxed">Credit cards, debit cards, and NFC/mobile payments accepted.</p></div><div><h3 className="font-bold text-stone-900">🍺 Bar & Parking</h3><p className="mt-1 leading-relaxed">Alcohol and beer available onsite. Free parking lot and street parking.</p></div></div></article>;
}

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Fastacos | Woodstock & Huntley Mexican Restaurant';
    const description = 'Find Fastacos in Woodstock and Huntley, Illinois. View hours, directions, service options, accessibility details, and restaurant information.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) { ogTitle = document.createElement('meta'); ogTitle.setAttribute('property', 'og:title'); document.head.appendChild(ogTitle); }
    ogTitle.setAttribute('content', 'Contact Fastacos | Woodstock & Huntley Mexican Restaurant');
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) { ogDescription = document.createElement('meta'); ogDescription.setAttribute('property', 'og:description'); document.head.appendChild(ogDescription); }
    ogDescription.setAttribute('content', description);
  }, []);

  return <div className="min-h-screen bg-[#FDF6EC] pt-16"><section className="bg-[#27AE60] px-4 py-16 text-center text-white"><h1 className="font-display text-5xl md:text-6xl">FIND US & GET IN TOUCH</h1><p className="mt-3 text-lg">Two locations ready to serve you. Stop by or give us a call!</p></section><section className="grid grid-cols-1 gap-8 px-4 py-16 sm:px-6 md:grid-cols-2"><LocationCard title="WOODSTOCK, IL" address="150 S Eastwood Dr, Unit A, Woodstock, IL 60098" directions="https://www.google.com/maps/search/?api=1&query=150+S+Eastwood+Dr+Woodstock+IL+60098" phone="815-337-2688" hoursContent={<p className="mt-1">Mon–Fri: 10:00 AM – 10:00 PM<br />Sat–Sun: 10:00 AM – 11:00 PM</p>} /><LocationCard title="HUNTLEY, IL" address="9754 IL-47, Huntley, IL 60142" directions="https://www.google.com/maps/search/?api=1&query=9754+IL-47+Huntley+IL+60142" phone="(224) 858-7249" hoursContent={<p className="mt-1">Mon–Thu: 10:00 AM – 8:00 PM<br />Fri–Sat: 10:00 AM – 9:00 PM<br /><span className="font-semibold text-[#C0392B]">Sunday: Closed</span></p>} /></section><section className="grid grid-cols-1 gap-6 px-4 pb-16 sm:px-6 md:grid-cols-2"><div><h2 className="mb-3 font-display text-3xl text-[#C0392B]">WOODSTOCK</h2><div className="overflow-hidden rounded-2xl shadow-md"><iframe title="Fastacos Woodstock" src="https://maps.google.com/maps?q=150+S+Eastwood+Dr+Woodstock+IL+60098&output=embed" className="h-[350px] w-full border-0" loading="lazy" /></div></div><div><h2 className="mb-3 font-display text-3xl text-[#C0392B]">HUNTLEY</h2><div className="overflow-hidden rounded-2xl shadow-md"><iframe title="Fastacos Huntley" src="https://maps.google.com/maps?q=9754+IL-47+Huntley+IL+60142&output=embed" className="h-[350px] w-full border-0" loading="lazy" /></div></div></section><section className="bg-[#27AE60] px-4 py-6 text-center text-lg font-semibold text-white">🌮 For allergen, dietary, or substitution questions, please call 815-337-2688.</section></div>;
}
