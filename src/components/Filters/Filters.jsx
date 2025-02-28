import CSS from "./Filters.module.css";
export default function Filters() {
  return (
    <div className={CSS.wrapper}>
      <div className={CSS.dropdown}>
        <label htmlFor="languages" className={CSS.lable}>
          Languages
        </label>
        <select
          className={CSS.select}
          id="languages"
          //   value={}
          //   onChange={handleChange} // Обработчик изменений
        >
          <option value="">----------</option>
          <option value="French">French</option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Ukrainian">Ukrainian</option>
          <option value="Polish">Polish</option>
        </select>
      </div>

      <div className={CSS.dropdown}>
        <label htmlFor="level" className={CSS.lable}>
          Level of knowledge
        </label>
        <select
          id="level"
          className={CSS.select}
          //   value={}
          //   onChange={handleChange} // Обработчик изменений
        >
          <option value="">----------</option>
          <option value="Beginner">A1 Beginner</option>
          <option value="Elementary">A2 Elementary</option>
          <option value="Intermediate">B1 Intermediate</option>
          <option value="UpperIntermediate">B2 Upper-Intermediate</option>
        </select>
      </div>

      <div className={CSS.dropdown}>
        <label htmlFor="price" className={CSS.lable}>
          Price
        </label>
        <select
          id="price"
          className={CSS.select}
          //   value={}
          //   onChange={handleChange} // Обработчик изменений
        >
          <option value="">----------</option>
          <option value="10">10 $</option>
          <option value="20">20 $</option>
          <option value="30">30 $</option>
          <option value="40">40 $</option>
        </select>
      </div>
    </div>
  );
}
