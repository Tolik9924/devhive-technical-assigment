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

## Server State Management

React Query / SWR were intentionally not used in this project.

The users data is fetched once and used locally within a single page.
It does not require caching, background revalidation, synchronization,
or sharing across multiple components or routes.

Introducing a server-state library in this case would add unnecessary
abstraction without providing clear benefits.

## State Management

Global state management (Redux/Zustand) was intentionally not introduced
because the application state is local to a single page and can be derived
directly within components without cross-feature dependencies.

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

## Next.js Decisions

- App Router is used to demonstrate modern Next.js patterns.
- Client Components handle interactivity and local state.

## Key Design Decisions

- No business logic inside JSX.
- Components have single, clear responsibilities.
- TypeScript types are shared and reused.
- Stable keys are used for list rendering.
- Client-side filtering avoids unnecessary network requests.

## 🚧 What I Would Improve in Production

If this were a production application, the following improvements would be considered:

### Error Handling:

- User-friendly error messages.
- Centralized logging (e.g. Sentry).
- Better distinction between network and validation errors.

### Testing:

- Unit tests for hooks and filtering logic.
- Component tests for edit flow.
- E2E tests for main user interactions.

### API Layer:

- Replace JSONPlaceholder with a real API.
- Move filtering to the backend for large datasets.
- Add pagination and sorting.

## 📌 Final Notes

This project intentionally avoids overengineering.
Where trade-offs were made, clarity and maintainability were prioritized.

The goal was to demonstrate:

- Solid React fundamentals.
- Correct mental model of Next.js
- Clean component architecture.
- Thoughtful state and rendering management.

Thanks for reviewing! 🚀
