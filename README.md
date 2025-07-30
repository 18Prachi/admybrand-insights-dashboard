# 📊 Admybrand Insights Dashboard

A sleek, data-rich, and responsive analytics dashboard built using **Next.js**, **Tailwind CSS**, and **ShadCN UI**, with powerful features like real-time updates, export functionality (PDF/CSV), and advanced filtering — all rapidly built using AI assistance.

![dashboard-preview](./public/preview.png)

---

## 🚀 Live Demo

👉 [View Demo on Vercel](https://admybrand-insights-dashboard-three.vercel.app/)  
👉 [GitHub Repo](https://github.com/18Prachi/admybrand-insights-dashboard)

---

## 🧠 Features

- ✅ **Real-Time Revenue Chart** (auto-updating)
- ✅ **Export to PDF / CSV**
- ✅ **Advanced Filters with Date Ranges**
- ✅ **Modern Table with Skeleton Loaders**
- ✅ **Fully Responsive UI**
- ✅ **ShadCN Components + Tailwind Theming**
- ✅ **Dark Mode Compatible**

---

## 💻 Tech Stack

- **Frontend**: Next.js 13 (App Router), React 18, Tailwind CSS
- **UI Kit**: [ShadCN UI](https://ui.shadcn.com/)
- **Charting**: Recharts
- **PDF Export**: jsPDF + autoTable
- **CSV Export**: json2csv
- **Deployment**: Vercel

---

## 📂 Project Structure

```plaintext
admybrand-insights-dashboard/
│
├── app/                                # Next.js app directory (13+)
│   ├── globals.css                     # Global styles
│   ├── layout.tsx                      # Root layout for the app
│   └── page.tsx                        # Entry point for dashboard UI
│
├── components/                         # Main UI components
│   ├── ChartsSection.tsx              # Section wrapping chart components
│   ├── Dashboard.tsx                  # Dashboard layout
│   ├── DataTable.tsx                  # Table for displaying data
│   ├── MetricsCards.tsx              # KPI / card components
│   ├── RealTimeRevenue.tsx           # Live revenue chart
│   └── ui/                             # Reusable UI components (from shadcn)
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       └── tooltip.tsx
│
├── hooks/                              # Custom React hooks
│   └── use-toast.ts
│
├── lib/                                # Utility and mock data
│   ├── mockData.ts
│   └── utils.ts
│
├── public/                             # Static assets
│   └── preview.png.png
│
├── .eslintrc.json                      # ESLint config
├── .gitignore
├── AI_USAGE_REPORT.md                 # AI usage report for submission
├── README.md
├── components.json
├── next.config.js
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json

```


---

## 🧠 AI Usage Report

See [`AI_USAGE_REPORT.md`](./AI_USAGE_REPORT.md) for details on AI tools, prompts, and manual vs AI split.

---

## 📦 Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/admybrand-insights-dashboard.git
cd admybrand-insights-dashboard

# Install dependencies
npm install

# Run in development mode
npm run dev

