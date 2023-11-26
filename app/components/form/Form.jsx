import styles from "./Form.module.css";
import { FaInbox } from "react-icons/fa";

function Form({ handleSubmit, setFormData }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputs}>
        <input
          placeholder="Your Name"
          required
          onChange={(e) =>
            setFormData((info) => ({ ...info, name: e.target.value }))
          }
        />
        <input
          placeholder="Your Email"
          required
          type="email"
          onChange={(e) =>
            setFormData((info) => ({ ...info, email: e.target.value }))
          }
        />
        <textarea
          placeholder="Your Message"
          required
          rows={10}
          col="20"
          onChange={(e) =>
            setFormData((info) => ({ ...info, message: e.target.value }))
          }
        ></textarea>

        <div className={styles.buttonBox}>
          <button className={styles.button}>
            <span className={styles.buttonTxt}>Send Email</span>
            <span className={styles.buttonIcon}>
              <FaInbox />
            </span>
          </button>
        </div>
        
      </div>
    </form>
  );
}

export default Form;
