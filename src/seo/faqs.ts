// Single source of truth for FAQ content — rendered on the page and emitted as
// FAQPage schema during prerender, so the two can never drift apart.

export interface Faq {
  question: string
  answer: string
}

export const faqsByPath: Record<string, Faq[]> = {
  '/services/weekly-pool-maintenance': [
    {
      question: 'How often should my pool be serviced in Florida?',
      answer:
        'In Southwest Florida, weekly service is strongly recommended. Our warm temperatures, frequent rain, and high humidity create ideal conditions for algae growth and chemical imbalance. Going more than a week between services significantly increases the risk of water quality issues. Some pools with heavy tree coverage or well water may even benefit from twice-weekly visits during peak summer months.',
    },
    {
      question: 'What day of the week will my pool be serviced?',
      answer:
        'We work with you to establish a consistent service day that fits your schedule. Most customers are serviced on the same day each week so you always know when to expect us. If you need to reschedule a visit due to a special event or construction work, just give us a call and we will accommodate you.',
    },
    {
      question: 'Do I need to be home during the service visit?',
      answer:
        'Not at all! Most of our customers are not home during their weekly service. As long as we have access to your pool area and equipment, we can take care of everything. After each visit, we can send you a summary of what was done, your water chemistry readings, and any notes about your pool\'s condition.',
    },
    {
      question: 'What if I notice a problem between visits?',
      answer:
        'That is one of the biggest advantages of working with Tif\'s Pool Care — you have direct access to Tiffany, the owner. If you notice something unusual like green water, a strange sound from your pump, or a drop in water level, just call or text us at (941) 268-3747. We will advise you over the phone or schedule an extra visit if needed.',
    },
  ],
  '/services/seasonal-care': [
    {
      question: 'Should I drain my pool before a hurricane?',
      answer:
        'No — this is a common misconception. Draining your pool before a hurricane can actually cause the pool shell to pop out of the ground due to hydrostatic pressure from saturated soil and rising water tables. Instead, we lower the water level slightly, super-chlorinate, turn off equipment, and secure the area. After the storm, we handle cleanup and restoration.',
    },
    {
      question: 'How does rain affect my pool chemistry?',
      answer:
        'Rain is slightly acidic (pH around 5.0-5.5) and contains dissolved nitrogen and phosphorus. When it falls into your pool, it lowers the pH, dilutes chlorine, adds nutrients that feed algae, and raises the water level. After a heavy rain event, your pool typically needs pH adjustment, additional chlorine, and possibly water level management. This is why weekly maintenance is so important during rainy season.',
    },
    {
      question: 'My pool water turns brown when I add chlorine — what is happening?',
      answer:
        'This is almost always a sign of high iron content in your water, which is very common with well water in Arcadia and Wauchula. When chlorine oxidizes dissolved iron, it turns the water brown or rust-colored. The solution involves using metal sequestering agents, managing your pH carefully, and sometimes using specialized filtration. This is a situation where professional management makes a huge difference.',
    },
    {
      question: 'Do you offer one-time seasonal services or only ongoing maintenance?',
      answer:
        'While our primary service is weekly maintenance, we do offer one-time seasonal services such as hurricane preparation, post-storm cleanup, spring deep cleaning, and seasonal opening services for snowbird customers who leave during the summer. Contact us to discuss your specific needs and we will put together a plan that works for you.',
    },
  ],
  '/services/pool-repair': [
    {
      question: 'How do I know if my pool pump needs repair or replacement?',
      answer:
        'Common signs of pump trouble include loud grinding or screeching noises (often worn bearings), the pump losing prime and sucking air, visible leaks around the pump housing or seal plate, the motor running hot or tripping the breaker, and reduced water flow despite clean baskets and filter. Tiffany will inspect the pump and give you an honest assessment. Sometimes a $30 seal replacement is all you need. Other times, if the motor windings are burned or the housing is cracked, replacement makes more sense than sinking money into a failing unit.',
    },
    {
      question: 'How can I tell if my pool is leaking?',
      answer:
        'In Southwest Florida, pools can lose a quarter inch or more of water per day to evaporation alone, and even more during dry, windy periods. If you are consistently losing more than that, or if you notice the water level drops when the pump is running but not when it is off (or vice versa), you likely have a leak. Wet spots in the yard near the pool or equipment pad are another telltale sign. Tiffany can perform a thorough equipment-side inspection to check all the common leak points before recommending more invasive testing.',
    },
    {
      question: 'Do you handle pool heater and salt system repairs?',
      answer:
        'Tiffany can diagnose many common heater and salt chlorine generator issues, including error codes, flow problems, and sensor failures. For more complex internal repairs on heaters and salt systems, she works with specialized technicians and coordinates the service on your behalf. You will always have one point of contact throughout the process, and Tiffany ensures the repair is done correctly by verifying the system operation after any work is completed.',
    },
    {
      question: 'How quickly can you respond to a repair need?',
      answer:
        'For existing maintenance customers, Tiffany often catches issues during regular weekly visits before they become emergencies. If a problem arises between visits, reach out by phone or text at (941) 268-3747 and she will get back to you promptly. For urgent issues like a pump failure or a major leak, she does her best to get to you within 24-48 hours depending on her schedule and parts availability. Truly emergency situations — like a pool turning green before a party — can often be addressed same-day.',
    },
    {
      question: 'Is it worth repairing old pool equipment or should I replace it?',
      answer:
        'This depends on the age of the equipment, the cost of the repair, and the overall condition. As a general rule, if a repair costs more than half the price of a new unit, or if the equipment is already past its typical lifespan (7-10 years for most pumps and filters in Florida), replacement is usually the smarter investment. Tiffany will give you the full picture — the cost to repair, the likely remaining life after the repair, and what a new unit would cost — so you can make an informed decision.',
    },
  ],
  '/services/pool-resurfacing': [
    {
      question: 'How long does pool resurfacing take?',
      answer:
        'The actual resurfacing application is typically completed in one day. However, the full process — including draining, surface preparation, application, refilling, and the critical 2-4 week startup period — takes approximately 3-5 weeks total. Weather can affect timing, as rain during application is not ideal. Tiffany coordinates the scheduling to minimize downtime and works with you to plan around your schedule.',
    },
    {
      question: 'How much does pool resurfacing cost?',
      answer:
        'Costs vary significantly based on pool size, the condition of the existing surface, and the finish material you choose. Standard white plaster is the most affordable option, while premium pebble finishes are at the higher end. We provide free, detailed quotes so you know exactly what to expect. Tiffany will also discuss which finish offers the best value for your situation — sometimes spending a bit more upfront on a durable finish saves money over the long term by lasting years longer.',
    },
    {
      question: 'How long does a new pool finish last?',
      answer:
        'It depends on the material. In Southwest Florida\'s year-round swim season, standard white plaster typically lasts 7-12 years, quartz blends 10-15 years, and pebble finishes 15-20 years or more. Water chemistry is the biggest variable — a consistently balanced pool can add years to any finish, which is why pairing resurfacing with regular professional maintenance protects the investment.',
    },
    {
      question: 'Can I change my pool\'s color when resurfacing?',
      answer:
        'Absolutely! Resurfacing is the perfect opportunity to change the look of your pool. If you have always had a white plaster pool and want to try a deeper blue, a natural pebble look, or even a dramatic dark finish, resurfacing gives you a blank canvas. Tiffany can show you samples and help you visualize how different finishes will change the look of your water.',
    },
    {
      question: 'What happens if I don\'t resurface when needed?',
      answer:
        'Delaying resurfacing when the surface is significantly deteriorated can lead to escalating problems: recurring algae issues that cost more in chemicals, rough surfaces that damage automatic cleaners and scratch swimmers, potential leaks from cracks that penetrate the shell, and an increasingly unattractive pool that you\'re less inclined to use and enjoy. Addressing the issue sooner rather than later often saves money and headache in the long run.',
    },
  ],
  '/services/emergency-service': [
    {
      question: 'Is there an extra charge for emergency or same-day service?',
      answer:
        'Emergency service calls may carry a premium over regularly scheduled visits, depending on the timing and nature of the emergency. However, Tiffany is always transparent about pricing before she begins work. For existing weekly maintenance customers, many urgent situations are handled at no additional charge as part of the service relationship. She will never surprise you with a bill — you will know the cost before any work begins.',
    },
    {
      question: 'What should I do while waiting for emergency service?',
      answer:
        'Tiffany will give you specific instructions based on your situation when you call. General guidance: if there is an electrical safety concern (sparking, burning smell, water near electrical connections), turn off the pool equipment at the breaker and keep people away from the pool area. If the water has turned green, running the pump (if it works) helps with recovery. If there is a significant leak, turning off the pump can prevent it from running dry. Never add chemicals without professional guidance during an emergency — the wrong addition can make things worse.',
    },
    {
      question: 'Do you provide emergency service on weekends and holidays?',
      answer:
        'Tiffany is available by phone seven days a week for existing customers and will do her best to accommodate emergencies on weekends and holidays. True safety emergencies always receive priority regardless of the day. For non-urgent situations, she may schedule the visit for the next business day. The advantage of working with a dedicated owner-operator is that there is no "closed" sign — Tiffany genuinely cares about her customers and their pools.',
    },
    {
      question: 'My pool is green — how long will it take to clear up?',
      answer:
        'A green pool recovery typically takes 3-7 days depending on the severity. Light green water with visible bottom may clear in 2-3 days with aggressive treatment. Dark green or black water with zero visibility can take 5-7 days or more of intensive treatment including multiple shock applications, continuous filtration, repeated brushing, and filter cleaning. Tiffany will give you a realistic timeline after assessing your pool and start treatment immediately to begin the recovery process.',
    },
  ],
  '/services/commercial-pools': [
    {
      question: 'Why does CPO certification matter for a commercial pool?',
      answer:
        'CPO (Certified Pool Operator) certification is the industry-standard credential for operating public and commercial pools. It covers water chemistry, filtration and turnover, safety regulations, and record keeping at the level health departments expect. Hiring a CPO certified professional means your pool is cared for by someone trained specifically in the standards that apply to commercial facilities — not just backyard pools.',
    },
    {
      question: 'How often does a commercial pool need service?',
      answer:
        'It depends on bather load and the size of your facility. Many commercial pools do well with weekly service, while high-traffic pools — especially during the summer season or at busy rental properties — benefit from two or more visits per week. Tiffany will assess your pool, your usage patterns, and your budget, then recommend a schedule that keeps the water consistently safe and clear.',
    },
    {
      question: 'Can you work with our property manager or HOA board?',
      answer:
        'Absolutely. We regularly communicate with property managers, board members, and facility staff. You\'ll get clear service records, honest reports on equipment condition, and a direct line to Tiffany — no call centers, no runaround. We\'re happy to provide documentation for board meetings, insurance, or inspections.',
    },
    {
      question: 'What happens if our pool has a problem between visits?',
      answer:
        'Call Tiffany. We offer same-day emergency service for urgent issues like equipment failures, green water, or post-storm cleanup. For commercial properties, downtime means unhappy residents and guests, so we prioritize getting your pool back open quickly and safely.',
    },
    {
      question: 'Do you serve commercial properties throughout Southwest Florida?',
      answer:
        'Yes — we serve commercial pools in Arcadia, Wauchula, Punta Gorda, Port Charlotte, Boca Grande, Rotunda, and Englewood, and we\'re expanding to Sarasota and Fort Myers. If your property is nearby, reach out — we\'ll let you know right away if we can take care of you.',
    },
  ],
  '/areas/port-charlotte': [
    {
      question: 'How much does weekly pool service cost in Port Charlotte?',
      answer:
        'Pricing depends on your pool\'s size, equipment, screen enclosure, and whether you\'re canal-front (where humidity and salt air demand more aggressive chemical management) or inland. Rather than quote a one-size-fits-all number, Tiffany gives free, no-obligation quotes after seeing your pool — so you pay for what your pool actually needs, with chemicals included in every weekly plan.',
    },
    {
      question: 'Do you service canal-front homes?',
      answer:
        'Yes — a large share of our Port Charlotte customers are on the canal system. Canal-front pools get extra attention on algae prevention, deck and cage mold, and corrosion checks on pumps, heaters, and salt cell housings, since brackish air wears equipment faster than inland installations.',
    },
    {
      question: 'How long does pool resurfacing last in Port Charlotte?',
      answer:
        'It depends on the finish: standard plaster typically lasts 7-12 years, quartz blends 10-15, and pebble finishes 15-20 or more. Southwest Florida\'s year-round sun and heavy pool use push surfaces toward the shorter end of those ranges, and water chemistry is the single biggest factor — a properly balanced pool can double the life of a finish. See our pool resurfacing page for signs it\'s time.',
    },
    {
      question: 'Can you look after my pool while I\'m up north for the summer?',
      answer:
        'Absolutely. Snowbird packages are one of our specialties in Port Charlotte — weekly care continues while you\'re away, and monthly photo updates let you check on your pool from anywhere. You come home in November to a swim-ready pool, not a green one.',
    },
  ],
}
