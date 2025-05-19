# 🎬 Kino Area by litakk

A modern web application for browsing movies and viewing detailed information about them.

**🔗 Live Demo:** [kino-area-by-litak.vercel.app](https://kino-area-by-litak.vercel.app/)

## 📚 Project Description

Kino Area provides a user-friendly interface to explore movie and TV content. Core features include:

- 🔥 Browse popular movies  
- 🎞 See what's now playing in theaters  
- 🌟 Discover trending actors  
- 📺 View TV shows airing today  
- 🎬 Watch trailers and access detailed movie data  

## 🛠 Tech Stack

- **React** – for building interactive UIs  
- **TypeScript** – for static typing and code reliability  
- **Next.js (Pages Router)** – for routing and performance  
- **Tailwind CSS** – for responsive, mobile-first styling  
- **TMDB API** – for real-time movie and TV data  

## 🌐 API Endpoints Used

```ts
const popularUrl = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const genresUrl = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const popularPeopleUrl = "https://api.themoviedb.org/3/person/popular?language=en-US&page=1";
const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
const airingTodayUrl = "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1";
```

## ⚙️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/litakk/kino-area-by-litak.git
   cd kino-area-by-litak
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file with your API key:**

   ```env
   NEXT_PUBLIC_AUTHORIZATION=your_api_key_here
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

## 🚀 Deployment

This project is deployed using [Vercel](https://vercel.com/):  
🔗 [kino-area-by-litak.vercel.app](https://kino-area-by-litak.vercel.app/)

## 📄 Project Architecture

- ⚛️ **Client-side rendering (CSR)** using `fetch` in `useEffect`  
- 🧩 **Component-based architecture** for reusability and scalability  
- 📱 **Mobile-first responsive layout** using Tailwind CSS  

## 🧱 Core Components

- 🎞 **Movie and actor cards** with dynamic content  
- 🎠 **Carousels** for displaying movie collections  
- 📄 **Detailed pages** for movies and TV shows  
- 📱 **Responsive design** for mobile and desktop  

## 🔮 Future Improvements

- ➕ Add new pages and extended content  
- 🎛 Implement advanced filtering and sorting  
- ⚙️ Optimize performance and internal logic  
- 🧪 Add unit and integration tests  

## 🤝 Contact

**Author:** Litakk  
**GitHub:** [https://github.com/litakk](https://github.com/litakk)
