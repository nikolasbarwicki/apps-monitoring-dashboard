## Getting Started

This is simple app for monitoring apps statuses. 

To properly run the app you have to set up the env variables file according to the `.env.example` file.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

### Tech stack
- Next.js
- react-query (fetching and caching data)
- tailwind CSS (styling)

### App scope
This app allows the user to: 
- fetch and display all apps on the home view,
- fetch and display detailed data for the single app,
- manually refetch app data on the detailed view

### Future improvements
- extract smaller components from existing code,
- add unit and E2E tests,
- improve UI and UX,
- improve mobile views,
- add multiple features such as: saving the list of favorites apps, displaying charts with detailed app data,

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.