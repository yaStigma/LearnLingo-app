import { useState } from "react";
import TeacherCard from "../TeacherCard/TeacherCard";
import CSS from "./TeachersList.module.css";
export default function TeachersList({ teachers }) {
  const [visibleCount, setVisibleCount] = useState(4);
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };
  return (
    <>
      <ul>
        {teachers.slice(0, visibleCount).map((teacher) => (
          <li key={teacher.id}>
            <TeacherCard teacher={teacher} />
          </li>
        ))}
      </ul>
      {visibleCount < teachers.length && (
        <button onClick={handleLoadMore} className={CSS.btn}>
          Load more
        </button>
      )}
    </>
  );
}
