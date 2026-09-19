# MSK Portfolio — Vite + React

## 🚀 Start Development
```bash
npm install
npm run dev
```

## 📦 Build for Production
```bash
npm run build
```

---

## 🖼️ Adding Project Images

1. ضع صور مشاريعك في مجلد `public/images/`
2. مثلاً: `public/images/plateau.webp`
3. افتح ملف `src/data/projects.js`
4. عدّل خاصية `image` لكل مشروع:

```js
{
  title: "PLATEAU Agency",
  image: "/images/plateau.webp",   // ← ضع اسم صورتك هنا
  ...
}
```

إذا لم تضف صورة، سيظهر الإيموجي الافتراضي تلقائياً.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── images/          ← ضع صور مشاريعك هنا
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         — شريط التنقل
│   │   ├── Hero.jsx           — الصفحة الرئيسية
│   │   ├── About.jsx          — قسم عني
│   │   ├── Experience.jsx     — الخبرات
│   │   ├── Skills.jsx         — المهارات والتعليم والتدريب
│   │   ├── Icons.jsx          — أيقونات SVG
│   │   ├── Projects.jsx       — معرض المشاريع
│   │   ├── ProjectCard.jsx    — كارت المشروع
│   │   ├── Contact.jsx        — قسم التواصل
│   │   └── Footer.jsx         — الفوتر
│   ├── data/
│   │   ├── profile.js         ← ← بياناتك الشخصية والخبرات والمهارات
│   │   └── projects.js        ← ← أضف/عدّل مشاريعك هنا
│   ├── hooks/
│   │   └── useReveal.js       — أنيميشن الظهور عند السكرول
│   ├── styles/
│   │   └── globals.css        — المتغيرات والستايل العام
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

---

## ✏️ Customize

- **الألوان** → `src/styles/globals.css` (CSS Variables في `:root`)
- **بياناتك الشخصية والخبرات والمهارات** → `src/data/profile.js`
- **صورتك الشخصية وملف الـ CV** → حقلا `photo` و `cvUrl` في `src/data/profile.js`
- **المشاريع** → `src/data/projects.js`
