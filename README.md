# HMJ TI

Public website for HMJ TI UINAM. This React application presents organization information, news, creative economy products, cadre data, and a public complaint form by consuming the HMJ TI backend API.

## Description

HMJ TI is the public-facing website for Himpunan Mahasiswa Jurusan Teknik Informatika UIN Alauddin Makassar. It provides visitors with access to organization profile content, activities and news, organization structure, creative economy products, cadre database information, and a channel for sending complaints or feedback.

The application consumes data from the HMJ TI backend API, which is configured in `src/lib/api.js`.

The main goal of this project is to provide an accessible, structured, and dynamic information system that helps HMJ-TI UINAM manage and publish organizational content more efficiently.

![HMJ TI thumbnail](docs/thumbnail.jpg)

## Features

- Home page with hero carousel, organization description, video section, featured articles, product highlights, and complaint form.
- Article listing page with article search and pagination.
- Article detail page for reading individual news or activity posts.
- About page with organization profile, vision, missions, goals, and organization structure.
- Creative economy page for displaying business or product data.
- Cadre database page with search, batch filter, status filter, pagination, desktop table view, and mobile list view.
- Complaint form for public feedback submission.
- Reusable layout, navigation, footer, SEO title tags, service layer, and shared API client.

## Tech Stack

- React 18
- Vite
- React Router
- Material UI
- Emotion
- Axios
- Swiper
- React Helmet Async
- Prettier

## Installation

Clone the repository:

```bash
git clone https://github.com/AhmadIkbalDjaya/hmj-ti.git
cd hmj-ti
```

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env
```

For Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

## Environment Variables

This project uses Vite environment variables. Frontend variables must use the `VITE_` prefix.

| Variable | Description |
| --- | --- |
| `VITE_API_BASE_URL` | Backend API base URL used by the shared Axios client in `src/lib/api.js`. |

See `.env.example` for the default local value.

## Running Locally

Start the development server:

```bash
npm run dev
```

By default, the website will be available at:

```text
http://localhost:5173
```

Build the production bundle:

```bash
npm run build
```

Format source files:

```bash
npm run format
```

## Project Structure

```text
.env.example          Example environment variables.
index.html            Vite HTML entry point.
.github/
  workflows/          GitHub Actions deployment workflow.
dist/                 Production build output.
docs/                 Project documentation assets.
  thumbnail.jpg       README thumbnail image.
public/               Static public assets copied by Vite.
src/
  assets/             Images, icons, product assets, article assets, and organization member photos.
  components/         Shared UI components.
    layout/           Main layout, navbar, and footer components.
  hooks/              Shared data-fetching hooks.
  lib/                Shared API client and environment-based base URL configuration.
  pages/              Page-level modules for home, article, about, business, and cadre pages.
  routes/             React Router route definitions.
  services/           API service functions for backend resources.
  utils/              Shared helpers and route utilities.
  App.jsx             Root application component.
  main.jsx            React entry point.
```

## Related Repository

- Public website: [hmj-ti](https://github.com/AhmadIkbalDjaya/hmj-ti)
- Backend API: [hmj-ti-be](https://github.com/AhmadIkbalDjaya/hmj-ti-be)
- Admin dashboard: [hmj-ti-admin](https://github.com/AhmadIkbalDjaya/hmj-ti-admin)
