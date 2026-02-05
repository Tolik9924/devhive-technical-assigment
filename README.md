# Users Management – Next.js + React + TypeScript

This project is a small technical assignment built with **Next.js 13+**, **React 18**, and **TypeScript**.  
The focus of the implementation is **code structure, clarity, and architectural decisions**, rather than visual design.

---

## 🚀 How to Run the Project

### Prerequisites

- Node.js **18+**
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/Tolik9924/devhive-technical-assigment.git
cd users-management
npm install
```

### Run in development mode

```bash
npm run dev
```

### The application will be available at:

```bash
http://localhost:3000
```

### 🧱 Architecture Overview

The project follows a clear separation of concerns between data fetching, state management, and UI rendering.

#### High-Level Structure

```bash
app/
 ├ layout.tsx
 ├ page.module.css
 ├ page.tsx             # Server Component: initial data fetching
 ├ components/
 │  ├ users/
 │  ├ UsersList.tsx     # Presentational list component
 │  ├ UserItem.tsx      # Single user row
 │  └ EditUserForm.tsx  # Controlled edit form
 ├ hooks/
 │  └ useUsers.ts       # Custom hook for user state and logic
 ├ types/
 │  └ user.ts           # Shared TypeScript types
```
