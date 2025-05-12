# Kino Area by litakk 🎬

Веб-приложение для просмотра фильмов и получения подробной информации о них.

**Демо:** [https://kino-area-by-litak.vercel.app/](https://kino-area-by-litak.vercel.app/)

## 📚 Описание проекта

Проект реализует следующие функции:
- Просмотр популярных фильмов
- Просмотр текущих фильмов в прокате
- Просмотр популярных актёров
- Просмотр сериалов, выходящих сегодня
- Отображение трейлеров и подробной информации о фильмах

## 🛠 Технологический стек
- **React** - библиотека для построения интерфейсов
- **TypeScript** - статическая типизация
- **Next.js (Pages Router)** - фреймворк для роутинга
- **TailwindCSS** - mobile-first стилизация
- **TMDB API** - данные о фильмах и сериалах

## 🌐 Используемые API эндпоинты
```javascript
const popularUrl = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const genresUrl = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const popularPeopleUrl = "https://api.themoviedb.org/3/person/popular?language=en-US&page=1";
const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const airingTodayUrl = "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1";

⚙️ Установка и запуск
Клонировать репозиторий:

git clone https://github.com/litakk/kino-area-by-litak.git
cd kino-area-by-litak

Установить зависимости:

npm install

NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here

Создать .env.local файл с API ключом:

NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here

Запустить проект:

npm run dev

🚀 Деплой
Проект развернут на Vercel:
https://kino-area-by-litak.vercel.app/

📄 Документация проекта
Архитектура
Клиентский рендеринг (CSR) через fetch в useEffect

Компонентный подход

Mobile-first верстка

Основные компоненты
Карточки фильмов/актёров

Карусели для отображения коллекций

Страницы с детальной информацией

Адаптивный интерфейс

Планы по развитию
Добавление новых страниц

Реализация фильтрации

Улучшение логики работы

Добавление тестирования

🤝 Контакты
Автор: Litakk
GitHub: https://github.com/litakk
