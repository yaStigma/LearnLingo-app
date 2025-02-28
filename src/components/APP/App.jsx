import { lazy, Suspense } from "react";
import "./App.module.css";
import { Route, Routes } from "react-router";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const TeachersPage = lazy(() =>
  import("../../Pages/TeachersPage/TeachersPage")
);
const FavoritesPage = lazy(() =>
  import("../../Pages/FavoritesPage/FavoritesPage")
);
const NotFoundPage = lazy(() =>
  import("../../Pages/NotFoundPage/NotFoundPage")
);
export default function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="teachers" element={<TeachersPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

// const fetchTeachers = async () => {
//   const response = await fetch("https://your-database.firebaseio.com/teachers.json");
//   const data = await response.json();
//   console.log(data);
// };
// useEffect(() => {
//   fetchTeachers();
// }, []);
