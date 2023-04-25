"use client";

import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"] });

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("initialNull");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });

      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter Your Name
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your name"
          className={mulish.className}
          onChange={handleChange}
          value={user.username}
        />
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Enter Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your E-mail"
          className={mulish.className}
          onChange={handleChange}
          value={user.email}
          autoComplete="off"
          required
        />
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Enter Your Phone no.
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your Phone no."
          className={mulish.className}
          onChange={handleChange}
          value={user.phone}
          autoComplete="off"
          required
        />
      </div>
      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          placeholder="Enter your message..."
          className={mulish.className}
          onChange={handleChange}
          value={user.message}
          autoComplete="off"
          required
        />
      </div>
      <div>
        {status === "success" && <p className={styles.success_msg}>Thank you for your message!</p>}
        {status === "error" && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
        <button
          type="submit"
          className={mulish.className}
          onChange={handleChange}
          value={user.username}
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
