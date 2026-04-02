// src/Contact.js
import { useState, useEffect } from "react";
import styles from "./Contact.module.scss";
import Navigation from "../../molecules/Navigation/Navigation";
import background1 from "./../../../assets/watersport/5-day-retreat/5.webp";
import background2 from "./../../../assets/watersport/janzu-training/5.webp";
import Footer from "../../molecules/Footer/Footer";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // To track form submission status

  useEffect(() => {
    // Function to check the screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 868); // Change the number based on your mobile breakpoint
    };

    // Check on mount
    checkMobile();

    // Add resize event listener
    window.addEventListener("resize", checkMobile);

    // Clean up the event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // This useEffect will clear the status after 3 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
        setName("");
        setEmail("");
        setMessage("");
      }, 3000); // 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      from: email,
      subject: `Message from ${name}`,
      text: message,
    };

    try {
      const response = await fetch(
        "https://precise-arabelle-freelancing123-c8e1a149.koyeb.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error sending message.");
    }
  };
  return (
    <>
      <Navigation imgStyle={{}} />

      <div className={styles.contactPage}>
        <div className={styles.contactContainer}>
          <div className={styles.photoSection}>
            <img
              src={isMobile ? background2 : background1}
              alt="Contact"
              className={styles.contactPhoto}
              loading="lazy"
            />
          </div>
          <div className={styles.infoSection}>
            <h2 className={styles.contactTitle}>Contact Us</h2>
            <div className={styles.contactLinks}>
              <a
                href="https://wa.me/+529832122949?text=Hi, I would like to find out more about your services."
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactLink} ${styles.whatsapp}`}
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/outretreat"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactLink} ${styles.instagram}`}
              >
                Instagram
              </a>
            </div>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className={styles.formControl}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className={styles.formControl}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className={styles.formControl}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
            {status && <p className={styles.statusMessage}>{status}</p>}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
