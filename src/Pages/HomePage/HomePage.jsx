import Footers from "../../components/Footers/Footers";
import CSS from "./HomePage.module.css";
export default function HomePage() {
  return (
    <>
      <main className={CSS.wrapper}>
        <section className={CSS.mainInfo}>
          <h1 className={CSS.mainText}>
            Unlock your potential with the best{" "}
            <span className={CSS.accent}>language</span> tutors
          </h1>
          <p className={CSS.text}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button type="button" className={CSS.button}>
            Get started
          </button>
        </section>
        <section className={CSS.imgBox}>
          <img className={CSS.img} src="/girl.svg" alt="Girl with computer" />
        </section>
      </main>
      <Footers />
    </>
  );
}
