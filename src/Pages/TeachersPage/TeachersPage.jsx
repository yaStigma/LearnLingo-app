import Filters from "../../components/Filters/Filters";
import TeachersList from "../../components/TeachersList/TeachersList";
import CSS from "./TeachersPage.module.css";
export default function TeachersPage() {
  return (
    <div className={CSS.wrapper}>
      <Filters />
      <TeachersList />
    </div>
  );
}
