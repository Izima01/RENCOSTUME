/* eslint-disable react/prop-types */
import { useState } from "react"
import styles from './Filters.module.css';
import { RiArrowDropDownLine } from "react-icons/ri";

const Filters = ({ setGender, setRole, setEthnicity, gender, ethnicity, role }) => {
  const [showGenders, setShowGenders] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [showCentury, setShowCentury] = useState(false);
  const [showEthnicity, setShowEthnicity] = useState(true);
  const [showRole, setShowRole] = useState(false);

  const ethnicityArray = ["Yoruba", "Igbo", "Hausa", "African", "English", "Edo", "Ibibio"];
  const roleArray = ["Wedding", "Priest", "Muslim", "Masquerade"];

  return (
    <aside className={styles.filters}>
      <h3>Filters</h3>
      
      <button className={styles.heading} style={{ marginBottom: showGenders ? '16px': '0' }} onClick={() => setShowGenders(prev => !prev)}>
        <h5>Gender</h5>
        <RiArrowDropDownLine style={{ transform: `rotate(${showGenders ? '-180deg' : '0deg'})` }} size={24} />
      </button>
      <div style={{ maxHeight: showGenders ? '70px' : '0' }}>
        <label>
          <input type="checkbox" checked={gender === "male"} onChange={(e) => setGender(e.target.checked ? "male" : "female")} />
          Male
        </label>
        <label>
          <input type="checkbox" checked={gender === "female"} onClick={(e) => setGender(e.target.checked ? "female" : "male")} />
          Female
        </label>
      </div>

      <hr />

      <button className={styles.heading} style={{ marginBottom: showEthnicity ? '16px': '0' }} onClick={() => setShowEthnicity(prev => !prev)}>
        <h5>Ethnicity</h5>
        <RiArrowDropDownLine style={{ transform: `rotate(${showEthnicity ? '180deg' : '0deg'})` }} size={24} />
      </button>
      <div style={{ maxHeight: showEthnicity ? '220px' : '0' }}>
        {
          ethnicityArray.map(eth => (
            <label key={eth}>
              <input type="checkbox" checked={ethnicity == eth.toLowerCase()} name="ethnicity" onChange={(e) => setEthnicity(e.target.checked && eth.toLowerCase())} />
              {eth}
            </label>
          ))
        }
      </div>
      <hr />

      <button className={styles.heading} style={{ marginBottom: showRole ? '16px': '0' }} onClick={() => setShowRole(prev => !prev)}>
        <h5>Role</h5>
        <RiArrowDropDownLine style={{ transform: `rotate(${showRole ? '180deg' : '0deg'})` }} size={24} />
      </button>
      <div style={{ maxHeight: showRole ? '200px' : '0' }}>
        {
          roleArray.map(rol => (
            <label key={rol}>
              <input type="checkbox" checked={role == rol.toLowerCase()} name="role" onChange={(e) => setRole(e.target.checked && rol.toLowerCase())}/>
              {rol}
            </label>
          ))
        }
      </div>
      <hr />

      
      <button className={styles.heading} style={{ marginBottom: showCentury ? '16px': '0' }}>
        <h5>Century</h5>
        <RiArrowDropDownLine style={{ transform: `rotate(${showCentury ? '180deg' : '0deg'})` }} size={24} />
      </button>
      <div style={{ maxHeight: showCentury ? '160px' : '0' }}>
        <label>
          <input type="radio" name="century" />
          18th
        </label>
        <label>
          <input type="radio" name="century" />
          19th
        </label>
        <label>
          <input type="radio" name="century" />
          20th
        </label>
        <label>
          <input type="radio" name="century" />
          21st
        </label>
      </div>

    </aside>
  )
}

export default Filters