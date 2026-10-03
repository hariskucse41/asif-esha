import type { Guest } from "@/types/guest";

/**
 * Personal invitation list.
 *
 * Add a guest by copying one of the objects below.
 * Then redeploy (or restart `npm run dev`) so the page is generated.
 *
 *   slug         →  /invite/slug
 *   name         →  "Dear {name}" and the WhatsApp reply
 *   relationship →  your private note. It is not shown on the page.
 *   message      →  the line they read on their invitation
 *
 * Slug rules: lowercase letters, numbers, and hyphens. Unique. No spaces.
 *
 * Examples once the site is live:
 *   https://YOUR-DOMAIN.com/invite/uncle-monir
 *   https://YOUR-DOMAIN.com/invite/mama-afzal
 *   https://YOUR-DOMAIN.com/invite/rahim
 *
 * Tone lives in the message:
 *   Elders and family friends  →  warm, respectful
 *   Friends and cousins        →  you may be more casual
 */

const withUs = "We are so excited to have you with us. We can't wait to see you there.";

const messages = {
  cousin: `Come celebrate with us. The day will be brighter with you there. ${withUs}`,
  friend: `You have to attend this Program. Its Mandatory. ${withUs}`,
  sister: `We would be truly happy to celebrate this beautiful occasion with you. ${withUs}`,
  elder: `Your presence and blessings will make our celebration even more special. ${withUs}`,
  student: `It would mean a lot to have you with us as we celebrate this new chapter. ${withUs}`,
  colleague: `We would be truly happy to celebrate this beautiful occasion with you. ${withUs}`,
  uncle: `Your presence and blessings will make our celebration even more special. ${withUs}`,
} as const;

export const guests: Guest[] = [
  {
    slug: "maria-marjan-zahid-hasan-ussas",
    name: "Maria Marjan & Zahid Hasan Ussas",
    relationship: "Sister & Brother-in-law",
    message: messages.sister,
  },
  {
    slug: "lamiya-khatun",
    name: "Lamiya Khatun",
    relationship: "Sister",
    message: messages.sister,
  },
  {
    slug: "konica-khatun",
    name: "Konica Khatun & Dulavai",
    relationship: "Sister & Brother-in-law",
    message: messages.sister,
  },
  {
    slug: "nourin-achal-mahi",
    name: "Nourin Achal Mahi",
    relationship: "Sister",
    message: messages.sister,
  },
  {
    slug: "gazi-rahman-urmi",
    name: "Gazi Rahman Vai & Urmi Apu",
    relationship: "Sister & Brother-in-law",
    message: messages.sister,
  },
  {
    slug: "turab-hossen-tusher",
    name: "Turab Hossen Tusher Vai & Sanchita Apu",
    relationship: "Brother & Sister",
    message: messages.sister,
  },

  // Cousins
  {
    slug: "fahad-hossain",
    name: "Fahad Hossain",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "foysal-hossain",
    name: "Foysal Hossain Vai & Vabi",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "emam-hossain-mimi-islam",
    name: "Emam Hossain & Vabi",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "eleas-hossain",
    name: "Eleas Hossain Vai& Vabi",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "kabirul-islam",
    name: "Kabirul Islam & Vabi",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "khalid-hasan-raju",
    name: "Khalid Hasan Raju",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "riyad-hasan-saju",
    name: "Riyad Hasan Saju",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "liton",
    name: "Liton Vai",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "munna-hossain",
    name: "Munna Hossain",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "murshida-khatun",
    name: "Murshida Khatun",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "farzana-khatun-riya",
    name: "Farzana Akter Riya & Bayezid Dulavai",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "jannatul",
    name: "Jannatul",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "jwell-hossen",
    name: "Jwell Hossen",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "rabbi",
    name: "Rabbi Vai& Vabi",
    relationship: "Cousin",
    message: messages.cousin,
  },

  // Elders
  {
    slug: "b-uncle",
    name: "B Uncle",
    relationship: "Uncle",
    message: messages.elder,
  },
  {
    slug: "montu",
    name: "Montu",
    relationship: "Uncle",
    message: messages.elder,
  },
  {
    slug: "akram-kaku",
    name: "Akram Kaku",
    relationship: "Uncle",
    message: messages.elder,
  },
  {
    slug: "masud-rana",
    name: "Masud Rana",
    relationship: "Mama",
    message: messages.elder,
  },

  // Friends
  {
    slug: "mahmudul-hasan",
    name: "Mahmudul Hasan",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "ab-siddiq",
    name: "AB Siddiq(Bandle)",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "khalid-hasan-jihad",
    name: "Khalid Hasan Jihad",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "rezwanul-islam-shuvo",
    name: "Rezwanul Islam Shuvo",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "mamun-hasan",
    name: "Mamun Hasan",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "solaiman-hossen-sumon",
    name: "Solaiman Hossen Sumon",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "iqbal-hossen",
    name: "Iqbal Hossen",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "amit-biswas",
    name: "Amit Biswas",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "irani-khatun",
    name: "Erani Khatun",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "faria-mahjabin",
    name: "Faria Mahjabin Ananna",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "bonna-khatun",
    name: "Bonna Khatun",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "poly-akter-mim",
    name: "Poly Akter Mim",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "bristy-khatun",
    name: "Bristy Khatun",
    relationship: "Student",
    message: messages.student,
  },
  {
    slug: "nishat-jahan-tandra",
    name: "Nishat Jahan Tandra",
    relationship: "Colleague",
    message: messages.colleague,
  },
  {
    slug: "reza",
    name: "Nasim Reza Bin Mustafa",
    relationship: "Uncle",
    message: messages.uncle,
  },

  {
    slug: "nabil",
    name: "Rahat Morshed Nabil",
    relationship: "Colleague & Friend",
    message:
      messages.colleague,
  },
  {
    slug: "rabiul-islam",
    name: "Rabiul Islam",
    relationship: "Collleague & Friend",
    message: messages.colleague,
  },
  {
    slug: "shihab",
    name: "Habibur Rahman Shihab",
    relationship: "Colleague & Friend",
    message: messages.colleague,
  },
  {
    slug: "sakib",
    name: "Safkat Mahmud Sakib",
    relationship: "Colleague",
    message: messages.colleague,
  },
  {
    slug: "masum",
    name: "Masum Billah",
    relationship: "Colleague",
    message: messages.colleague,
  },
  {
    slug: "rumon",
    name: "Rumon Hossain",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "rakiful",
    name: "Rakiful Islam",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "roshed",
    name: "Roshed Sorder(Siam Ahmed)",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "istyaque",
    name: "Istyaque Ahmed",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "jannati",
    name: "Sumaiya Jannati",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "hasib",
    name: "Hasibul Islam",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "yasir",
    name: "Yasir Vai",
    relationship: "Friend",
    message: messages.friend,
  },
  {
    slug: "mostofa-habibullah-joy",
    name: "Mostofa Habibullah Joy",
    relationship: "Cousin",
    message: messages.cousin,
  },
  {
    slug: "abir-hossain",
    name: "Abir Hossain",
    relationship: "Friend",
    message: messages.friend,
  }

];
