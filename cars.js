const CARS = [
  {
    id: "ferrari-488",
    name: "Ferrari 488 GTB",
    category: "Supercar",
    pricePerDay: 1200,
    year: 2019,
    seats: 2,
    transmission: "Automatic (DCT)",
    horsepower: 660,
    shortDescription: "Twin-turbocharged V8 fury wrapped in Scaglietti's finest bodywork. The 488 GTB is a visceral, unforgettable machine.",
    longDescription: "The Ferrari 488 GTB represents the pinnacle of Italian engineering — a 3.9-litre twin-turbo V8 producing 660 horsepower, reaching 60 mph in under 3 seconds. Every detail has been sculpted for aerodynamic efficiency and driver engagement. From the carbon-ceramic brakes to the adaptive magnetorheological suspension, this car rewards skilled drivers while remaining approachable enough for a memorable road trip. Reserve it for a weekend drive through the Virginia countryside, a special event, or simply because you deserve it.",
    features: [
      "660 HP Twin-Turbo V8",
      "0–60 in 3.0 seconds",
      "Carbon Ceramic Brakes",
      "Manettino Drive Mode Selector",
      "Apple CarPlay / Android Auto",
      "Climate Control",
      "Launch Control",
      "Premium Sound System"
    ],
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=85",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200&q=85",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=85"
    ],
    availability: true
  },
  {
    id: "lamborghini-huracan",
    name: "Lamborghini Huracán EVO",
    category: "Supercar",
    pricePerDay: 1400,
    year: 2021,
    seats: 2,
    transmission: "Automatic (LDF)",
    horsepower: 640,
    shortDescription: "Naturally aspirated V10 thunder. The Huracán EVO is raw, visceral, and impossible to ignore.",
    longDescription: "The Lamborghini Huracán EVO is a naturally aspirated V10 masterpiece — 640 horsepower, an ear-splitting exhaust note, and all-wheel drive traction that lets you deploy every bit of it. The EVO variant brings updated aerodynamics, a rear-wheel steering system for sharper cornering, and the LDVI predictive vehicle dynamics system. Whether you're cruising the capital beltway or arriving at an event in style, the Huracán commands attention on a level few cars can match.",
    features: [
      "640 HP Naturally Aspirated V10",
      "0–60 in 2.9 seconds",
      "All-Wheel Drive",
      "Rear-Wheel Steering",
      "LDVI Dynamics System",
      "Lifting System (Front Nose)",
      "Apple CarPlay",
      "12.3\" Digital Cockpit"
    ],
    images: [
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&q=85",
      "https://images.unsplash.com/photo-1609520505218-7421df82c588?w=1200&q=85",
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=1200&q=85"
    ],
    availability: true
  },
  {
    id: "mclaren-720s",
    name: "McLaren 720S",
    category: "Supercar",
    pricePerDay: 1350,
    year: 2020,
    seats: 2,
    transmission: "Automatic (SSG)",
    horsepower: 710,
    shortDescription: "Carbon fiber architecture, 710 horsepower, and a twin-turbo V8 that defines what a British supercar should be.",
    longDescription: "The McLaren 720S is engineering at its most focused. Built around a carbon fiber MonoCell II chassis, every element exists to reduce weight and maximize performance. The twin-turbocharged 4.0-litre V8 produces 710 horsepower — enough to reach 60 mph in 2.8 seconds and hit a top speed of 212 mph. The 720S also features electrohydraulic active suspension for extraordinary composure at high speed, paired with a cockpit that wraps around the driver with aircraft-like intimacy.",
    features: [
      "710 HP Twin-Turbo V8",
      "0–60 in 2.8 seconds",
      "Carbon MonoCell II Chassis",
      "Active Suspension",
      "Dihedral Doors",
      "McLaren Track Telemetry",
      "Bowers & Wilkins Audio",
      "Variable Drift Control"
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=85",
      "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?w=1200&q=85"
    ],
    availability: true
  },
  {
    id: "porsche-911-turbo",
    name: "Porsche 911 Turbo S",
    category: "Sports Car",
    pricePerDay: 800,
    year: 2022,
    seats: 4,
    transmission: "Automatic (PDK)",
    horsepower: 640,
    shortDescription: "The benchmark. Everyday usability, supercar performance. The 911 Turbo S is the most complete performance car ever made.",
    longDescription: "The Porsche 911 Turbo S has been the industry benchmark for over 50 years — and the current generation sets the bar higher than ever. 640 horsepower from a rear-mounted twin-turbo flat-six, all-wheel drive, rear-axle steering, and a PDK gearbox that shifts in under 100 milliseconds. It will reach 60 mph in 2.6 seconds while being comfortable enough to use every single day. Four seats, a usable trunk, and a cabin that feels like a luxury cockpit. The 911 Turbo S is the rare supercar you can actually live with.",
    features: [
      "640 HP Twin-Turbo Flat-Six",
      "0–60 in 2.6 seconds",
      "All-Wheel Drive + Rear-Axle Steering",
      "PDK Dual-Clutch Gearbox",
      "Sport Chrono Package",
      "PASM Active Suspension",
      "Bose Surround Sound",
      "4-Seater Configuration"
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85",
      "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=1200&q=85",
      "https://images.unsplash.com/photo-1617814076229-04259843d817?w=1200&q=85"
    ],
    availability: true
  },
  {
    id: "rolls-royce-ghost",
    name: "Rolls-Royce Ghost",
    category: "Ultra Luxury",
    pricePerDay: 1500,
    year: 2022,
    seats: 5,
    transmission: "Automatic (8-Speed)",
    horsepower: 563,
    shortDescription: "The most refined automobile on the planet. Where every surface whispers opulence and every journey becomes an occasion.",
    longDescription: "The Rolls-Royce Ghost is not merely a car — it is an experience. Built on an all-aluminium spaceframe architecture and powered by a twin-turbo 6.75-litre V12, the Ghost delivers its 563 horsepower with an eerie, almost supernatural silence. The interior is hand-crafted in Goodwood, England, with leather hides selected for uniformity, star-lit headliner panels, and wood veneers bookmatched to perfection. Reserve the Ghost for a wedding, a milestone occasion, or simply to experience what the finest automobile in the world feels like from the driver's seat.",
    features: [
      "563 HP Twin-Turbo V12",
      "Starlight Headliner",
      "Bespoke Audio System",
      "Massage Seats (Front & Rear)",
      "Night Vision Assist",
      "Rear-Axle Steering",
      "All-Wheel Drive",
      "Glass Partition (Available)"
    ],
    images: [
      "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=1200&q=85",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=85",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=1200&q=85"
    ],
    availability: true
  },
  {
    id: "mercedes-g63",
    name: "Mercedes-AMG G63",
    category: "Luxury SUV",
    pricePerDay: 650,
    year: 2023,
    seats: 5,
    transmission: "Automatic (9G-TRONIC)",
    horsepower: 577,
    shortDescription: "An icon. The G-Wagen commands the road with military authority and AMG brutality — redefined for the modern era.",
    longDescription: "The Mercedes-AMG G63 is arguably the most recognizable vehicle on the road. Built on a body-on-frame platform derived from a military vehicle, it's been refined with a handcrafted 4.0-litre twin-turbo AMG V8 producing 577 horsepower. Three locking differentials. Portal axles. A bespoke exhaust note that echoes off every building it passes. Inside, the AMG-crafted cabin balances tactical toughness with genuine luxury — Nappa leather, Burmester audio, and a 12.3-inch digital cockpit. Perfect for a group trip, a film shoot, or making a statement.",
    features: [
      "577 HP AMG Twin-Turbo V8",
      "Three Locking Differentials",
      "Portal Axles",
      "AMG RIDE CONTROL+ Suspension",
      "Burmester 3D Surround Sound",
      "Heated/Cooled Nappa Leather",
      "360° Camera System",
      "Rear Seat Entertainment"
    ],
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=85"
    ],
    availability: true
  },
  {
    id: "bentley-continental",
    name: "Bentley Continental GT",
    category: "Luxury GT",
    pricePerDay: 950,
    year: 2021,
    seats: 4,
    transmission: "Automatic (8-Speed DCT)",
    horsepower: 626,
    shortDescription: "The Grand Tourer, perfected. A 626 HP W12 and hand-stitched cabin that transforms distance into pleasure.",
    longDescription: "The Bentley Continental GT is the definitive Grand Tourer — a car designed to cover extraordinary distances in extraordinary comfort, while still delivering genuine performance. The 6.0-litre twin-turbo W12 engine produces 626 horsepower and 664 lb-ft of torque, allowing the Continental GT to reach 207 mph if conditions permit. Inside, Bentley's craftsmen spend over 100 hours hand-stitching the quilted leather, finishing the open-pore wood veneers, and adjusting the 3D diamond knurling. This is a car for long drives, important meetings, and moments that deserve the finest.",
    features: [
      "626 HP Twin-Turbo W12",
      "0–60 in 3.6 seconds",
      "All-Wheel Drive",
      "Rotating Display (Tri-Veneer)",
      "Naim for Bentley Audio",
      "Heated/Ventilated Massage Seats",
      "Night Vision",
      "Bentley Dynamic Ride"
    ],
    images: [
      "https://images.unsplash.com/photo-1541038708676-4bc7f3a7b0cf?w=1200&q=85",
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=85",
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=1200&q=85"
    ],
    availability: true
  },
  {
    id: "corvette-z06",
    name: "Chevrolet Corvette Z06",
    category: "Sports Car",
    pricePerDay: 550,
    year: 2023,
    seats: 2,
    transmission: "Automatic (8-Speed DCT)",
    horsepower: 670,
    shortDescription: "An American legend reborn. The Z06's flat-plane crank V8 screams to 8,600 RPM and delivers track performance at a price that shames Europe.",
    longDescription: "The C8 Corvette Z06 is a watershed moment for American performance. Equipped with a naturally aspirated 5.5-litre flat-plane crank LT6 V8 — the most powerful naturally aspirated V8 in a production car — it produces 670 horsepower and revs to 8,600 RPM with a wail that rivals a Ferrari. Mid-engine layout, carbon ceramic brakes, and magnetic ride control deliver supercar dynamics at a price that embarrasses the competition. The Z06 is proof that American engineering has arrived at the highest level of global performance.",
    features: [
      "670 HP Naturally Aspirated LT6 V8",
      "8,600 RPM Redline",
      "Mid-Engine Layout",
      "Carbon Ceramic Brakes",
      "Magnetic Ride Control 4.0",
      "GT2 Bucket Seats",
      "Performance Data Recorder",
      "Z-Mode Customizable Drive Modes"
    ],
    images: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=85",
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200&q=85",
      "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=1200&q=85"
    ],
    availability: true
  }
];

// Helper: get car by id
function getCarById(id) {
  return CARS.find(c => c.id === id) || null;
}

// Helper: format price
function formatPrice(n) {
  return '$' + n.toLocaleString('en-US');
}
