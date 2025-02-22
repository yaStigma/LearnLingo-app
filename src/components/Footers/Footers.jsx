import CSS from "./Footers.module.css";
export default function Footers() {
  return (
    <footer className={CSS.wrapper}>
      <div className={CSS.bloc}>
        <p className={CSS.count}>32,000 +</p>
        <p className={CSS.name}>Experienced tutors</p>
      </div>
      <div className={CSS.bloc}>
        <p className={CSS.count}>300,000 +</p>
        <p className={CSS.name}>5-star tutor reviews</p>
      </div>
      <div className={CSS.bloc}>
        <p className={CSS.count}>120 +</p>
        <p className={CSS.name}>Subjects taught</p>
      </div>
      <div className={CSS.bloc}>
        <p className={CSS.count}>200 +</p>
        <p className={CSS.name}>Tutor nationalities</p>
      </div>
    </footer>
  );
}
