# 🦸‍♂️ Hero IO — Play Store Service

A modern, responsive Play Store-like web application for browsing, searching, and managing app installations.

## 📋 Description

Hero IO is a single-page application that simulates a Play Store experience. Users can browse trending apps, search and sort through the entire catalogue, view detailed app information with rating charts, and install/uninstall apps — all persisted via localStorage.

## ✨ Features

- 🏠 **Home Page** — Hero banner, stats section, trending apps grid
- 📱 **All Apps** — Full app catalogue with live search & sort by downloads
- 📊 **App Details** — Detailed app info, Recharts review chart, install functionality
- 💾 **Installation Manager** — View & manage installed apps via localStorage
- 🔔 **Toast Notifications** — Visual feedback for install/uninstall actions
- ⚡ **Loading Animations** — Smooth page transition and search loading states
- 📱 **Fully Responsive** — Optimized for all device sizes
- 🚫 **Custom 404 Page** — Friendly error page for invalid routes

## 🛠️ Technologies

- **React 19** — UI library
- **React Router DOM v7** — Client-side routing
- **Recharts** — Data visualization (bar charts)
- **React Toastify** — Toast notifications
- **React Icons** — Icon library
- **Vite** — Build tool and dev server
- **Vanilla CSS** — Custom styling with CSS variables

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── data/           # App data (JSON)
├── pages/          # Route pages
├── App.jsx         # Root component with routing
└── main.jsx        # Entry point
```