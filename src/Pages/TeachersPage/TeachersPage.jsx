import { useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import TeachersList from "../../components/TeachersList/TeachersList";
import CSS from "./TeachersPage.module.css";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const url =
        "https://learnlingo-my-app-default-rtdb.europe-west1.firebasedatabase.app/teachers.json";

      try {
        const response = await fetch(url);
        const data = await response.json();
        setTeachers(Object.values(data || {})); // Перетворюємо об'єкт у масив
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTeachers();
  }, []);
  return (
    <div className={CSS.wrapper}>
      <Filters />
      <TeachersList teachers={teachers} />
    </div>
  );
}
