import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number }) => {
  return (
    <div className={css.contactItem}>
      <p className={css.contactName}>
        <FaUser className={css.icon} size="15px" />
        {name}
      </p>
      <p className={css.contactNumber}>
        <FaPhoneAlt className={css.icon} size="15px" />
        {number}
      </p>
      <button className={css.contactDeleteBtn} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
