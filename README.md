# ps-ui-app 🧩

## Кратко

**ps-ui-app** — современный фронтенд-шаблон PS4 интерфейса (boilerplate) на базе React + TypeScript + Vite + TailwindCSS. 

## ⚙️ Особенности

* ✅ **React + TypeScript** — строгая типизация, готовая TS-конфигурация.
* 🚀 **Vite** — быстрый дев-сервер, HMR, быстрая сборка.
* 🎨 **TailwindCSS + clsx** — утилитарная стилизация и удобное управление классовыми именами.
* 🧠 **State-менеджмент** — настроен через `zustand`.
* 📦 **UI-библиотека и иконки** — готова основа для UI + набор иконок через `lucide-react`.
* 📚 **Swiper** — поддержка слайдеров/каруселей.
* 🧪 **Тестирование** — настроен `vitest` + `@testing-library/react` для unit / UI тестов.
* 🛠️ **ESLint + плагины** — поддержка lint'инга и React-hooks правил.

## 🧰 Быстрое начало (Getting Started)

```bash
# Клонировать репозиторий
git clone https://github.com/Progshokun/ps-ui-app.git
cd ps-ui-app

# Установить зависимости
pnpm install        # либо yarn / pnpm

# Запустить в режиме разработки
pnpm run dev

# Построить production-сборку
pnpm run build

# Локально протестировать сборку
pnpm run preview

# Проверка линтинга
pnpm run lint

# Запустить тесты
pnpm run test        # или pnpm run test:ui для UI-режима
```

## 📦 Структура проекта

```
/
├── public/             # для статичных ассетов
├── src/                # исходники (компоненты, стили, логика)
├── tests/              # тесты
├── vite.config.ts      # конфигурация Vite
├── tsconfig*.json      # TypeScript конфигурации
├── eslint.config.js    # ESLint настройки
├── vitest.config.ts    # Vitest настройки
└── package.json        # зависимости и скрипты
```

## 📸 Скриншоты / Demo

![image alt]([https://github.com/Progshokun/Betflix/blob/main/preview.jpg?raw=true](https://github.com/Progshokun/ps-ui-app/blob/main/preview.jpg?raw=true))



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
