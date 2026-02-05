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
 ├ page.tsx             # Server Component
 ├ components/
 │  ├ modal/
 │  ├ Modal.tsx
 │  └ editUserForm.module.css
 |  ├ users/
 |  |  ├ UserEditForm/
 |  |  ├ constants.ts
 |  |  ├ index.ts
 |  |  ├ UserEditForm.tsx
 |  |  └ userEditForm.module.css
 |  |  ├ UserRow/
 |  |  ├ index.ts
 |  |  ├ UserRow.tsx
 |  |  └ userRow.module.css
 |  |  ├ UserClient/
 |  |  ├ index.ts
 |  |  ├ UserClient.tsx
 |  |  └ userClient.module.css
 |  |  ├ UsersFilters/
 |  |  ├ index.ts
 |  |  ├ UsersFilters.tsx
 |  |  └ usersFilters.module.css
 |  |  ├ UsersList/
 |  |  ├ index.ts
 |  |  ├ UsersList.tsx
 |  |  └ usersList.module.css
 |  └ types.ts
 ├ hooks/
 |  ├ useDebounceValue.ts
 │  └ useUsers.ts
 ├ lib/
 |  ├ fetchUsers.ts
 │  └ types.ts
 ├ styles/
 │  └ globals.css
 ├ ui-components/
 |  ├ Loading/
 |  └ Loading.
 ├ utils/
 |  ├ filterUsers.ts
 └  └ validateEmail.ts

```

## Data Flow

- Server Component (page.tsx):
  - This ensures a fast initial render and demonstrates Next.js server capabilities
- Client Component (UsersClient):
  - Owns all interactive logic:
    - Search by name
    - Filter by city
    - Editing users
  - Uses React state and memoization hooks to avoid unnecessary re-renders
  - No business logic is placed directly in JSX.
- Filtering Logic:
  - Implemented outside JSX (via useMemo)
  - Fully client-side as required
  - Designed to be predictable and easy to test
- Edit Flow:
  - Clicking Edit opens a controlled form.
  - Form state is isolated from the list rendering.
  - On submit, the user is updated locally in state.
  - Email validation is handled at the form level.
