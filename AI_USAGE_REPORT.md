# 🤖 AI Usage Report

This document outlines how AI tools were used during the development of the **Admybrand Insights Dashboard** project.

---

## 🧰 AI Tools Used

### Primary Tools:
- **ChatGPT (GPT-4)** – prompt-based development support
- **V0.dev** by Vercel – UI scaffolding and layout generation
- **GitHub Copilot** – inline code completions (TypeScript, React)
- **Bolt.new** – design-to-code conversion and component generation

---

## 🔍 Key Use Cases

- **UI Code Generation**:
  - Used **v0.dev** and **bolt.new** to generate the layout and visual components of the dashboard (e.g., table, chart wrappers).
- **Export Functionality**:
  - ChatGPT helped implement CSV and PDF export using `json2csv`, `jsPDF`, and `autoTable`.
- **Build Issue Resolution**:
  - Used ChatGPT for debugging TypeScript issues (e.g., tooltip `payload` typing) and fixing Recharts-related errors.
- **Integration & Folder Structure**:
  - Prompted ChatGPT on how to properly structure `app/page.tsx` and import reusable components.
- **Design Code Sync**:
  - **Bolt.new** was used to convert mockup-style UI elements into actual React components quickly.
- **Deployment Troubleshooting**:
  - Leveraged ChatGPT to guide the Vercel deployment setup and resolve build command issues.

---

## ✨ Sample Prompts

1. `"Create a responsive React dashboard component with real-time revenue data and export to CSV/PDF."`
2. `"Fix the TypeScript error: Property 'payload' does not exist on type Props in a Recharts Tooltip."`
3. `"Where should I place DataTable.tsx in a Next.js 13 app using v0.dev structure?"`
4. `"How can I configure Vercel to override the build command or fix a failing 'npm run build'?"`
5. `"Generate React code from this design using Bolt.new with Tailwind and TypeScript support."`

---

## ⚖️ AI vs Manual Work Split

| Task                            | AI-Generated | Manually Written | Customization |
|-------------------------------|--------------|------------------|---------------|
| UI scaffolding (DataTable, Charts) | 80%      | 20%              | Tailored layouts, styling refinements |
| Export functionality (CSV, PDF)   | 90%      | 10%              | Adjusted headers, file naming, styling |
| Component Integration             | 60%      | 40%              | Manual imports, fixing file paths |
| Error Handling / Debugging        | 70%      | 30%              | Manual testing and fix validations |
| Final Polish (spacing, colors, naming) | 30%  | 70%              | Based on design principles and feedback |

---

## 🏁 Summary

AI tools (ChatGPT, v0.dev, Copilot, and Bolt.new) enabled rapid prototyping and production-ready code generation. The focus was on:
- Speeding up initial scaffolding
- Efficient component generation from design
- Handling real-world React/Next.js issues

Manual effort was key in:
- Customizing code outputs
- Ensuring reusability and structure
- Design polish and UX decisions

The final result is a clean, modern dashboard built in ~3 days with an AI-first workflow.

---
