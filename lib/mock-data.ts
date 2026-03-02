import type { Locale } from "./i18n"

// ---- Trends ----
export interface TrendItem {
  id: string
  name: Record<Locale, string>
  category: string
  season: string
  badge: "new" | "trending"
  gradient: string
  icon: string
}

export const trends: TrendItem[] = [
  { id: "t1", name: { en: "Linen Power Suits", ar: "بدلات الكتان الأنيقة" }, category: "clothing", season: "summer", badge: "trending", gradient: "from-rose-200 to-amber-100", icon: "Shirt" },
  { id: "t2", name: { en: "Woven Leather Sandals", ar: "صنادل جلدية مجدولة" }, category: "shoes", season: "spring", badge: "new", gradient: "from-amber-200 to-orange-100", icon: "Footprints" },
  { id: "t3", name: { en: "Oversized Tote Bags", ar: "حقائب توت كبيرة" }, category: "bags", season: "summer", badge: "trending", gradient: "from-emerald-200 to-teal-100", icon: "ShoppingBag" },
  { id: "t4", name: { en: "Glossy Lip Oils", ar: "زيوت شفاه لامعة" }, category: "makeup", season: "spring", badge: "new", gradient: "from-pink-200 to-rose-100", icon: "Sparkles" },
  { id: "t5", name: { en: "Chunky Gold Chains", ar: "سلاسل ذهبية عريضة" }, category: "accessories", season: "all", badge: "trending", gradient: "from-yellow-200 to-amber-100", icon: "Gem" },
  { id: "t6", name: { en: "Sheer Maxi Dresses", ar: "فساتين ماكسي شفافة" }, category: "clothing", season: "summer", badge: "new", gradient: "from-sky-200 to-indigo-100", icon: "Shirt" },
  { id: "t7", name: { en: "Platform Sneakers", ar: "أحذية رياضية بنعل سميك" }, category: "shoes", season: "fall", badge: "trending", gradient: "from-slate-200 to-gray-100", icon: "Footprints" },
  { id: "t8", name: { en: "Mini Crossbody Bags", ar: "حقائب كروس صغيرة" }, category: "bags", season: "spring", badge: "new", gradient: "from-violet-200 to-purple-100", icon: "ShoppingBag" },
  { id: "t9", name: { en: "Dewy Foundation", ar: "كريم أساس ندي" }, category: "makeup", season: "all", badge: "trending", gradient: "from-orange-200 to-yellow-100", icon: "Sparkles" },
  { id: "t10", name: { en: "Pearl Earrings", ar: "أقراط لؤلؤ" }, category: "accessories", season: "winter", badge: "new", gradient: "from-stone-200 to-zinc-100", icon: "Gem" },
  { id: "t11", name: { en: "Velvet Blazers", ar: "بليزرات مخمل" }, category: "clothing", season: "winter", badge: "trending", gradient: "from-red-200 to-rose-100", icon: "Shirt" },
  { id: "t12", name: { en: "Strappy Heels", ar: "كعب عالي بأشرطة" }, category: "shoes", season: "spring", badge: "new", gradient: "from-fuchsia-200 to-pink-100", icon: "Footprints" },
]

// ---- Products ----
export interface Product {
  id: string
  name: Record<Locale, string>
  brand: string
  price: number
  rating: number
  reviews: number
  category: string
  sizes: string[]
  colors: string[]
  gradient: string
}

export const products: Product[] = [
  { id: "p1", name: { en: "Silk Wrap Dress", ar: "فستان لف حريري" }, brand: "Zara", price: 459, rating: 4.5, reviews: 128, category: "clothing", sizes: ["XS", "S", "M", "L"], colors: ["#C4A882", "#1a1a1a", "#8B4557"], gradient: "from-rose-100 to-amber-50" },
  { id: "p2", name: { en: "Leather Ankle Boots", ar: "بوت جلد كاحل" }, brand: "H&M", price: 349, rating: 4.2, reviews: 87, category: "shoes", sizes: ["36", "37", "38", "39", "40"], colors: ["#1a1a1a", "#5C3A21"], gradient: "from-stone-100 to-zinc-50" },
  { id: "p3", name: { en: "Quilted Chain Bag", ar: "حقيبة مبطنة بسلسلة" }, brand: "Farfetch", price: 1299, rating: 4.8, reviews: 214, category: "bags", sizes: ["One Size"], colors: ["#1a1a1a", "#C4A882", "#8B4557"], gradient: "from-amber-100 to-yellow-50" },
  { id: "p4", name: { en: "Statement Necklace", ar: "عقد ستيتمنت" }, brand: "Namshi", price: 189, rating: 4.0, reviews: 56, category: "accessories", sizes: ["One Size"], colors: ["#C4A882", "#C0C0C0"], gradient: "from-yellow-100 to-amber-50" },
  { id: "p5", name: { en: "Tailored Trousers", ar: "بنطال مفصّل" }, brand: "Zara", price: 279, rating: 4.3, reviews: 92, category: "clothing", sizes: ["XS", "S", "M", "L", "XL"], colors: ["#1a1a1a", "#F5F5DC", "#6B7280"], gradient: "from-slate-100 to-gray-50" },
  { id: "p6", name: { en: "Suede Mules", ar: "ميول جلد سويدي" }, brand: "Ounass", price: 599, rating: 4.6, reviews: 145, category: "shoes", sizes: ["36", "37", "38", "39"], colors: ["#C4A882", "#5C3A21", "#1a1a1a"], gradient: "from-orange-100 to-amber-50" },
  { id: "p7", name: { en: "Beaded Clutch", ar: "كلتش خرز" }, brand: "Farfetch", price: 879, rating: 4.7, reviews: 63, category: "bags", sizes: ["One Size"], colors: ["#C4A882", "#F5F5DC"], gradient: "from-emerald-100 to-teal-50" },
  { id: "p8", name: { en: "Silk Scarf", ar: "وشاح حرير" }, brand: "H&M", price: 129, rating: 4.1, reviews: 234, category: "accessories", sizes: ["One Size"], colors: ["#8B4557", "#C4A882", "#2563EB"], gradient: "from-pink-100 to-rose-50" },
  { id: "p9", name: { en: "Cashmere Sweater", ar: "سويتر كشمير" }, brand: "Ounass", price: 749, rating: 4.9, reviews: 78, category: "clothing", sizes: ["S", "M", "L"], colors: ["#F5F5DC", "#C4A882", "#6B7280"], gradient: "from-sky-100 to-blue-50" },
  { id: "p10", name: { en: "Embellished Sandals", ar: "صنادل مزخرفة" }, brand: "Namshi", price: 399, rating: 4.4, reviews: 167, category: "shoes", sizes: ["36", "37", "38", "39", "40"], colors: ["#C4A882", "#C0C0C0"], gradient: "from-violet-100 to-purple-50" },
  { id: "p11", name: { en: "Bucket Bag", ar: "حقيبة باكت" }, brand: "Zara", price: 329, rating: 4.2, reviews: 112, category: "bags", sizes: ["One Size"], colors: ["#1a1a1a", "#5C3A21", "#C4A882"], gradient: "from-teal-100 to-emerald-50" },
  { id: "p12", name: { en: "Layered Bracelet Set", ar: "طقم أساور طبقات" }, brand: "Namshi", price: 149, rating: 4.3, reviews: 89, category: "accessories", sizes: ["One Size"], colors: ["#C4A882", "#C0C0C0", "#B76E79"], gradient: "from-red-100 to-rose-50" },
  { id: "p13", name: { en: "Pleated Midi Skirt", ar: "تنورة ميدي بليسيه" }, brand: "H&M", price: 199, rating: 4.1, reviews: 156, category: "clothing", sizes: ["XS", "S", "M", "L"], colors: ["#1a1a1a", "#8B4557", "#2563EB"], gradient: "from-fuchsia-100 to-pink-50" },
  { id: "p14", name: { en: "Kitten Heel Pumps", ar: "كعب صغير أنيق" }, brand: "Ounass", price: 529, rating: 4.5, reviews: 71, category: "shoes", sizes: ["36", "37", "38", "39"], colors: ["#1a1a1a", "#8B4557"], gradient: "from-stone-100 to-gray-50" },
  { id: "p15", name: { en: "Woven Basket Bag", ar: "حقيبة خوص" }, brand: "Farfetch", price: 689, rating: 4.6, reviews: 93, category: "bags", sizes: ["One Size"], colors: ["#C4A882", "#F5F5DC"], gradient: "from-lime-100 to-green-50" },
  { id: "p16", name: { en: "Crystal Hair Clip", ar: "مشبك شعر كريستال" }, brand: "Namshi", price: 79, rating: 4.0, reviews: 204, category: "accessories", sizes: ["One Size"], colors: ["#C0C0C0", "#C4A882", "#B76E79"], gradient: "from-indigo-100 to-blue-50" },
]

// ---- Experts ----
export interface Expert {
  id: string
  name: Record<Locale, string>
  specialty: Record<Locale, string>
  rating: number
  price: number
  gradient: string
}

export const experts: Expert[] = [
  { id: "e1", name: { en: "Nora Al-Rashid", ar: "نورة الراشد" }, specialty: { en: "Haute Couture & Evening Wear", ar: "أزياء راقية وسهرات" }, rating: 4.9, price: 299, gradient: "from-rose-200 to-pink-100" },
  { id: "e2", name: { en: "Layla Hassan", ar: "ليلى حسن" }, specialty: { en: "Casual & Street Style", ar: "أزياء يومية وستريت" }, rating: 4.7, price: 199, gradient: "from-amber-200 to-yellow-100" },
  { id: "e3", name: { en: "Sara Al-Mutairi", ar: "سارة المطيري" }, specialty: { en: "Hijab Fashion & Modest Wear", ar: "أزياء محتشمة وحجاب" }, rating: 4.8, price: 249, gradient: "from-teal-200 to-emerald-100" },
  { id: "e4", name: { en: "Mona Ibrahim", ar: "منى إبراهيم" }, specialty: { en: "Color Analysis & Wardrobe", ar: "تحليل الألوان وتنسيق الخزانة" }, rating: 4.6, price: 179, gradient: "from-sky-200 to-blue-100" },
  { id: "e5", name: { en: "Dina Al-Qassim", ar: "دينا القاسم" }, specialty: { en: "Bridal & Special Occasions", ar: "أزياء زفاف ومناسبات" }, rating: 4.9, price: 349, gradient: "from-violet-200 to-purple-100" },
  { id: "e6", name: { en: "Huda Saleh", ar: "هدى صالح" }, specialty: { en: "Sustainable Fashion", ar: "أزياء مستدامة" }, rating: 4.5, price: 159, gradient: "from-green-200 to-lime-100" },
]

// ---- Social Posts ----
export interface SocialPost {
  id: string
  user: { name: Record<Locale, string>; handle: string; gradient: string }
  caption: Record<Locale, string>
  likes: number
  commentCount: number
  timestamp: string
  gradient: string
  comments: { user: string; text: Record<Locale, string> }[]
}

export const socialPosts: SocialPost[] = [
  {
    id: "s1",
    user: { name: { en: "Reema K.", ar: "ريما ك." }, handle: "@reemak", gradient: "from-rose-300 to-pink-200" },
    caption: { en: "Summer vibes in this linen set! Perfect for brunch", ar: "أجواء صيفية بطقم الكتان! مثالي للبرنش" },
    likes: 234, commentCount: 18, timestamp: "2h",
    gradient: "from-amber-100 to-rose-100",
    comments: [
      { user: "Sara M.", text: { en: "Love this look!", ar: "إطلالة رائعة!" } },
      { user: "Nada R.", text: { en: "Where did you get it?", ar: "من وين اشتريتيه؟" } },
    ],
  },
  {
    id: "s2",
    user: { name: { en: "Hala S.", ar: "هالة س." }, handle: "@halastyle", gradient: "from-amber-300 to-yellow-200" },
    caption: { en: "My Eid outfit is ready! Abaya from Ounass", ar: "إطلالة العيد جاهزة! عباية من أوناس" },
    likes: 567, commentCount: 42, timestamp: "5h",
    gradient: "from-emerald-100 to-teal-100",
    comments: [
      { user: "Layla T.", text: { en: "Stunning! Eid Mubarak!", ar: "جميلة! عيد مبارك!" } },
      { user: "Mona A.", text: { en: "The details are gorgeous", ar: "التفاصيل روعة" } },
    ],
  },
  {
    id: "s3",
    user: { name: { en: "Dania M.", ar: "دانية م." }, handle: "@daniamoda", gradient: "from-teal-300 to-emerald-200" },
    caption: { en: "Office to dinner transition. Same base, different accessories", ar: "من المكتب للعشاء. نفس الأساس، إكسسوارات مختلفة" },
    likes: 189, commentCount: 12, timestamp: "8h",
    gradient: "from-sky-100 to-indigo-100",
    comments: [
      { user: "Reem N.", text: { en: "Smart styling!", ar: "تنسيق ذكي!" } },
    ],
  },
  {
    id: "s4",
    user: { name: { en: "Lina A.", ar: "لينا أ." }, handle: "@linaaccessories", gradient: "from-violet-300 to-purple-200" },
    caption: { en: "Layering jewelry is an art. Here's my formula", ar: "تنسيق المجوهرات فن. هذي طريقتي" },
    likes: 412, commentCount: 31, timestamp: "1d",
    gradient: "from-violet-100 to-pink-100",
    comments: [
      { user: "Jana Q.", text: { en: "Tutorial please!", ar: "نبي شرح!" } },
      { user: "Farah W.", text: { en: "Gold or silver?", ar: "ذهب ولا فضة؟" } },
    ],
  },
  {
    id: "s5",
    user: { name: { en: "Nouf T.", ar: "نوف ت." }, handle: "@nouftrendy", gradient: "from-sky-300 to-blue-200" },
    caption: { en: "Thrifted this vintage bag for 50 SAR. Best find ever!", ar: "لقيت هالحقيبة الفنتج بـ ٥٠ ريال. أفضل صفقة!" },
    likes: 891, commentCount: 67, timestamp: "1d",
    gradient: "from-orange-100 to-amber-100",
    comments: [
      { user: "Salma K.", text: { en: "No way! Amazing find", ar: "ما أصدق! صفقة خرافية" } },
      { user: "Rania H.", text: { en: "Which thrift store?", ar: "أي محل؟" } },
    ],
  },
]

// ---- Stories ----
export const stories = [
  { id: "st1", name: { en: "Reema", ar: "ريما" }, gradient: "from-rose-400 to-pink-300" },
  { id: "st2", name: { en: "Hala", ar: "هالة" }, gradient: "from-amber-400 to-yellow-300" },
  { id: "st3", name: { en: "Dania", ar: "دانية" }, gradient: "from-teal-400 to-emerald-300" },
  { id: "st4", name: { en: "Lina", ar: "لينا" }, gradient: "from-violet-400 to-purple-300" },
  { id: "st5", name: { en: "Nouf", ar: "نوف" }, gradient: "from-sky-400 to-blue-300" },
  { id: "st6", name: { en: "Sara", ar: "سارة" }, gradient: "from-orange-400 to-red-300" },
  { id: "st7", name: { en: "Mona", ar: "منى" }, gradient: "from-green-400 to-lime-300" },
]

// ---- Deals ----
export interface Deal {
  id: string
  brand: string
  discount: number
  description: Record<Locale, string>
  code: string
  expiryDays: number
  gradient: string
}

export const deals: Deal[] = [
  { id: "d1", brand: "Zara", discount: 30, description: { en: "End of Season Sale", ar: "تخفيضات نهاية الموسم" }, code: "ZARA30", expiryDays: 5, gradient: "from-rose-100 to-pink-50" },
  { id: "d2", brand: "Ounass", discount: 25, description: { en: "Eid Collection", ar: "مجموعة العيد" }, code: "EID25", expiryDays: 12, gradient: "from-amber-100 to-yellow-50" },
  { id: "d3", brand: "H&M", discount: 40, description: { en: "Flash Sale - 24 Hours", ar: "عرض خاطف - ٢٤ ساعة" }, code: "FLASH40", expiryDays: 1, gradient: "from-emerald-100 to-teal-50" },
  { id: "d4", brand: "Farfetch", discount: 20, description: { en: "New Member Exclusive", ar: "حصري للأعضاء الجدد" }, code: "NEW20", expiryDays: 30, gradient: "from-sky-100 to-blue-50" },
  { id: "d5", brand: "Namshi", discount: 35, description: { en: "Ramadan Special", ar: "عرض رمضان" }, code: "RAMADAN35", expiryDays: 8, gradient: "from-violet-100 to-purple-50" },
  { id: "d6", brand: "Ounass", discount: 15, description: { en: "Free Shipping + Discount", ar: "شحن مجاني + خصم" }, code: "SHIP15", expiryDays: 15, gradient: "from-orange-100 to-amber-50" },
  { id: "d7", brand: "Zara", discount: 50, description: { en: "Clearance Event", ar: "تصفية نهائية" }, code: "CLEAR50", expiryDays: 3, gradient: "from-red-100 to-rose-50" },
  { id: "d8", brand: "H&M", discount: 20, description: { en: "Student Discount", ar: "خصم الطلاب" }, code: "STUDENT20", expiryDays: 60, gradient: "from-green-100 to-lime-50" },
]

// ---- Analytics Data ----
export const styleDNAData = [
  { name: { en: "Black", ar: "أسود" }, value: 28, fill: "#1a1a1a" },
  { name: { en: "Beige", ar: "بيج" }, value: 22, fill: "#C4A882" },
  { name: { en: "White", ar: "أبيض" }, value: 18, fill: "#E8E4DE" },
  { name: { en: "Rose", ar: "وردي" }, value: 16, fill: "#B76E79" },
  { name: { en: "Blue", ar: "أزرق" }, value: 16, fill: "#4A7FB5" },
]

export const trendingCategoriesData = [
  { name: { en: "Dresses", ar: "فساتين" }, count: 45 },
  { name: { en: "Bags", ar: "حقائب" }, count: 38 },
  { name: { en: "Shoes", ar: "أحذية" }, count: 32 },
  { name: { en: "Jewelry", ar: "مجوهرات" }, count: 28 },
  { name: { en: "Tops", ar: "بلايز" }, count: 22 },
]

export const browsingVsPurchaseData = [
  { month: { en: "Jan", ar: "يناير" }, browsing: 45, purchase: 12 },
  { month: { en: "Feb", ar: "فبراير" }, browsing: 52, purchase: 18 },
  { month: { en: "Mar", ar: "مارس" }, browsing: 38, purchase: 15 },
  { month: { en: "Apr", ar: "أبريل" }, browsing: 67, purchase: 22 },
  { month: { en: "May", ar: "مايو" }, browsing: 71, purchase: 28 },
  { month: { en: "Jun", ar: "يونيو" }, browsing: 55, purchase: 19 },
]

// ---- Outfit Builder Items ----
export const outfitItems = {
  top: [
    { id: "oi1", name: { en: "Silk Blouse", ar: "بلوزة حرير" }, gradient: "from-rose-200 to-pink-100" },
    { id: "oi2", name: { en: "Crop Top", ar: "كروب توب" }, gradient: "from-amber-200 to-yellow-100" },
    { id: "oi3", name: { en: "Turtleneck", ar: "تيرتل نيك" }, gradient: "from-slate-200 to-gray-100" },
  ],
  bottom: [
    { id: "oi4", name: { en: "Wide Leg Pants", ar: "بنطال واسع" }, gradient: "from-stone-200 to-zinc-100" },
    { id: "oi5", name: { en: "Pencil Skirt", ar: "تنورة ضيقة" }, gradient: "from-sky-200 to-blue-100" },
    { id: "oi6", name: { en: "Pleated Trousers", ar: "بنطال بليسيه" }, gradient: "from-emerald-200 to-teal-100" },
  ],
  shoes: [
    { id: "oi7", name: { en: "Heeled Sandals", ar: "صنادل بكعب" }, gradient: "from-orange-200 to-amber-100" },
    { id: "oi8", name: { en: "Pointed Flats", ar: "فلات مدبب" }, gradient: "from-violet-200 to-purple-100" },
    { id: "oi9", name: { en: "Ankle Boots", ar: "بوت كاحل" }, gradient: "from-red-200 to-rose-100" },
  ],
  accessory: [
    { id: "oi10", name: { en: "Gold Necklace", ar: "عقد ذهبي" }, gradient: "from-yellow-200 to-amber-100" },
    { id: "oi11", name: { en: "Silk Scarf", ar: "وشاح حرير" }, gradient: "from-pink-200 to-rose-100" },
    { id: "oi12", name: { en: "Structured Bag", ar: "حقيبة صلبة" }, gradient: "from-teal-200 to-emerald-100" },
  ],
}
