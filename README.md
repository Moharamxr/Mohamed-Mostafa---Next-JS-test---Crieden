# 🛍️ FASCO E-commerce Platform

https://fasco-orcin.vercel.app

**FASCO** is a modern, fully responsive e-commerce web application built with the latest technologies to provide a seamless, intuitive, and engaging shopping experience. From dynamic product browsing to persistent cart management, FASCO is crafted with performance, usability, and design in mind.

---

## 🔧 Tech Stack

| Category             | Technology                          |
| -------------------- | ----------------------------------- |
| **Framework**        | Next.js 15 (App Router)             |
| **Language**         | TypeScript                          |
| **Styling**          | Tailwind CSS                        |
| **State Management** | Redux Toolkit     |
| **UI Components**    | Shadcn/UI + Custom Components       |
| **Notifications**    | Sonner (toast notifications)        |
| **Icons**            | React Icons (Heroicons)             |
| **API Integration**  | REST API using native `fetch`       |

---

## ✨ Key Features

- ⚡ **Responsive UI** — Fully optimized for all screen sizes and devices.
- 🚀 **Server-Side Rendering (SSR)** — Faster initial loads using Next.js 14.
- 🦴 **Skeleton Loaders** — Beautiful, non-jarring loading states.
- 🛍️ **Product Catalog** — Filterable, grid-based layout with category tabs.
- 🔍 **Product Details** — High-quality images, full descriptions, and specifications.
- 🛒 **Shopping Cart** — Persistent cart with quantity editing and item removal.
- 🔔 **Toast Notifications** — User feedback on cart actions and interactions.
- 🌐 **SEO Ready** — Meta tags and optimized structure for search visibility.
- 📉 **Error Handling** — Friendly UI feedback on fetch and navigation errors.
- 🧱 **Grid View Options** — Switch between different product grid densities.

---

## 🧩 Design & UX Approach

- 🖤 **Minimal Aesthetic** — Black and white theme with a clean, modern layout.
- ✍️ **Consistent Typography** — Brand-aligned font choices and hierarchy.
- 🧭 **User-First UX** — Smooth navigation with intuitive component flows.
- ⚡ **Performance Focused** — Lazy loading, optimized hydration, and modular design.
- ♿ **Accessibility** — Semantic HTML, proper ARIA roles, and keyboard navigation support.

---

## 🛠️ Implementation Highlights

- 🔄 **Hydration Strategy** — Used dynamic imports with loading fallbacks to avoid hydration mismatch errors.
- 🧱 **Modular Component Architecture** — Reusable and maintainable components across pages.

- 🧪 **Error Boundaries** — Handled both client and API errors with user-friendly messages.

---

## 📂 Project Structure Overview

/app ├── layout.tsx ├── page.tsx (Home) ├── product/[id]/page.tsx ├── cart/page.tsx /components ├── ProductCard.tsx ├── Navbar.tsx ├── Skeleton.tsx /hooks ├── useCart.ts ├── useProducts.ts /services ├── productService.ts /redux ├── store.ts ├── cartSlice.ts /types ├── index.ts


---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Moharamxr/Mohamed-Mostafa---Next-JS-test---Crieden

# 2. Install dependencies
cd Mohamed-Mostafa---Next-JS-test---Crieden

npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
http://localhost:3000


 API Integration
FASCO integrates with the Fake Store API to fetch product data. All API service functions are abstracted in the /services directory.

🔮 Future Enhancements

🔐 User Authentication & Profiles

💖 Wishlist Functionality

⭐ Product Reviews & Ratings

📦 Order History & Status Tracking

💳 Payment Gateway Integration (Stripe, PayPal)

🔍 Advanced Search & Filters

🌍 Internationalization (i18n)

🌗 Dark Mode Toggle

⚡ PWA Capabilities

🚀 Performance Optimizations with React Query

👨‍💻 Built with ❤️ by Mohamed Mostafa

