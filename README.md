# kumo_frontend

Admin dashboard for the **Kumo OTA Update Platform** — manage campaigns, monitor devices, and view update reports in real time.

---

## Project Overview

Kumo is an Over-The-Air (OTA) firmware update platform composed of three repositories working together:

| Repository | Link | Description |
|---|---|---|
| `kumo_frontend` (this repo) | https://github.com/169628/kumo_frontend | Admin UI — Campaign CRUD, device list, report dashboard |
| `kumo_demo_device` | https://github.com/169628/kumo_demo_device | Simulated IoT device that connects via WebSocket and reports update status |
| `kumo_backend` | https://github.com/169628/kumo_backend | Spring Boot backend — REST API & WebSocket service |

---

## Tech Stack

| Technology | Version |
|---|---|
| Node.js | ^20.19.0 / >=22.12.0 |
| Vue | ^3.5.22 |
| Vite | ^7.1.11 |
| Vue Router | ^4.6.3 |
| Pinia | ^3.0.4 |
| Axios | ^1.13.4 |
| Tailwind CSS | ^4.1.16 |
| FlyonUI | ^2.4.1 |
| VeeValidate | ^4.15.1 |
| Yup | ^1.7.1 |
| ApexCharts | ^5.3.6 |
| vue3-apexcharts | ^1.10.0 |
| ESLint | ^9.37.0 |
| Prettier | 3.6.2 |

---

## Folder Structure

```
kumo_frontend/
├── public/
├── src/
│   ├── assets/          # Global CSS
│   ├── components/      # Reusable UI components
│   │   ├── CampaignModal.vue
│   │   ├── Chart.vue
│   │   ├── DeleteModal.vue
│   │   ├── LogModal.vue
│   │   ├── Pagination.vue
│   │   ├── Table.vue
│   │   └── Toast.vue
│   ├── router/          # Vue Router configuration
│   │   └── index.js
│   ├── stores/          # Pinia state management
│   │   └── toastStore.js
│   ├── utils/           # Helper utilities
│   │   └── format.js
│   ├── validations/     # Yup + VeeValidate schemas
│   │   ├── campaignSchema.js
│   │   └── loginSchema.js
│   ├── views/           # Page-level Vue components
│   │   ├── layout/
│   │   │   └── AsideView.vue
│   │   ├── CampaignView.vue
│   │   ├── DeviceView.vue
│   │   ├── HomeView.vue
│   │   ├── LoginView.vue
│   │   └── Page404View.vue
│   ├── App.vue
│   └── main.js
├── .env                 # Environment variables (API base URL)
├── index.html
├── vite.config.js
├── eslint.config.js
├── jsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** `^20.19.0` or `>=22.12.0` — [Download](https://nodejs.org/)
- **npm** (bundled with Node.js)
- The **kumo_backend** must be running before you start the frontend

---

### Step 1 — Clone the repository

```sh
git clone https://github.com/169628/kumo_frontend.git
cd kumo_frontend
```

---

### Step 2 — Configure environment variables

Copy or create a `.env` file in the project root:

```sh
cp .env .env.local
```

Open `.env` and confirm the backend URL is correct:

```env
VITE_API_BASE_URL=http://localhost:8080/kumo
```

> Change the host/port if your backend runs on a different address.

---

### Step 3 — Install dependencies

```sh
npm install
```

---

### Step 4 — Start the development server

```sh
npm run dev
```

The app will be available at **http://localhost:5173** by default.

---

### Step 5 — Build for production (optional)

```sh
npm run build
```

The compiled output will be placed in the `dist/` folder.

To preview the production build locally:

```sh
npm run preview
```

---

## Other Useful Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot-reload |
| `npm run build` | Compile and minify for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint and auto-fix issues |
| `npm run format` | Format source files with Prettier |

---

## Recommended IDE Setup

- **Editor:** [VS Code](https://code.visualstudio.com/)
- **Extension:** [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur if installed)

**Browser DevTools:**
- Chrome / Edge / Brave: [Vue.js DevTools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- Firefox: [Vue.js DevTools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
