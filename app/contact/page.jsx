'use client'

import SocialIcons from "../components/socialIcon/SocialIcons";
import PageTitle from "../components/title/PageTitle";
import styles from './page.module.css';
import { useState } from "react";
import Form from "../components/form/Form";


function ContactPage() { 
   const [formData , setFormData] = useState({
      name:'',
      email:'',
      message:''
   })
   
   async function handleSubmit(e) {
    e.preventDefault();
      const response = await fetch("https://sendmail-api-docs.vercel.app/api/send", {
      method: "POST",
      body: JSON.stringify({
          to: "rahmaaesmail26@gmail.com",
          subject: "Message From Contact Form",
          message: `
          name:${formData.name} ,
          email:${formData.email},
          message:${formData.message}
          `,
      })
  })
  setFormData({})
  }

  return (
    <div className="container">
    <PageTitle secondaryTitle="contact" primaryTitle="contact me"/>
      <div className={styles.contactContainer}>
     
      <ul className={styles.list}>
     <h3 className={styles.mainTitle}>CONTACT ME HERE</h3>
     <li className={styles.listItem}>
       <span>Name:</span>
       <span>Rahma Esmail</span>
     </li>

     <li className={styles.listItem}>
       <span>Email:</span>
       <span><a href="mailto:rahmaaesmail26@gmail.com">rahmaaesmail26@gmail.com</a></span>
     </li>

     <li className={styles.listItem}>
      <span>Address:</span>
      <span>Tanta, Egypt</span>
     </li>

     <SocialIcons/>
      </ul>

      <Form handleSubmit={handleSubmit} setFormData={setFormData}/>
      </div>
    </div>
  );
}
export default ContactPage;
