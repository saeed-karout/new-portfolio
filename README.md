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
2. مثلاً: `public/images/plateau.png`
3. افتح ملف `src/data/projects.js`
4. عدّل خاصية `image` لكل مشروع:

```js
{
  title: "PLATEAU Agency",
  image: "/images/plateau.png",   // ← ضع اسم صورتك هنا
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
│   │   ├── Cursor.jsx         — الكيرسور المخصص
│   │   ├── Navbar.jsx         — شريط التنقل
│   │   ├── Hero.jsx           — الصفحة الرئيسية
│   │   ├── About.jsx          — قسم عني
│   │   ├── Projects.jsx       — معرض المشاريع
│   │   ├── ProjectCard.jsx    — كارت المشروع
│   │   ├── Contact.jsx        — قسم التواصل
│   │   └── Footer.jsx         — الفوتر
│   ├── data/
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
- **بياناتك الشخصية** → `src/components/Hero.jsx` و `About.jsx`
- **المشاريع** → `src/data/projects.js`
