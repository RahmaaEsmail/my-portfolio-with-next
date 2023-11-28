import { useState } from "react";
import styles from "./Form.module.css";
import { FaInbox } from "react-icons/fa";
import toast from "react-hot-toast";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleReset() {
    setFormData({ name: "", email: "", message: "" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://sendmail-api-docs.vercel.app/api/send",
        {
          method: "POST",
          body: JSON.stringify({
            to: "rahmaaesmail26@gmail.com",
            subject: "Message From Contact Form",
            message: `
            name:${formData.name} ,
            email:${formData.email},
            message:${formData.message}
            `,
          }),
        }
      );
      toast.success("Email Sent Successfully");
      handleReset();
    } catch (err) {
      console.error("Error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} id="form">
      <div className={styles.inputs}>
        <input
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData((info) => ({ ...info, name: e.target.value }))
          }
        />
        <input
          placeholder="Your Email"
          required
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((info) => ({ ...info, email: e.target.value }))
          }
        />
        <textarea
          placeholder="Your Message"
          required
          rows={10}
          col="20"
          value={formData.message}
          onChange={(e) =>
            setFormData((info) => ({ ...info, message: e.target.value }))
          }
        ></textarea>

        <div className={styles.buttonBox}>
          <button disabled={isLoading} className={styles.button}>
            <span className={styles.buttonTxt}>
              {isLoading ? `Sending....` : "Send Email"}
            </span>
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
