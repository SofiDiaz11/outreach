import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // useLocation to access the hash in the URL
import styles from "./WaterSportRetreats.module.scss";
import { waterSportRetreats } from "../../../utils/retreats";
import RetreatsCard from "../../molecules/RetreatsCard/RetreatsCard";
import Navigation from "../../molecules/Navigation/Navigation";
import Footer from "../../molecules/Footer/Footer";
import ScrollToTopButton from "../../atoms/button/ScrollToTopButton";

function WaterSportRetreats() {
  const location = useLocation(); // Get the current location (to access the hash)

  useEffect(() => {
  // Scroll to section if hash exists
  if (location.hash) {
    const sectionId = location.hash.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  // IntersectionObserver — actualiza URL al hacer scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.history.replaceState(
            null,
            "",
            `/water-retreat-bacalar-mexico#${entry.target.id}`
          );
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll("section[id]").forEach((section) => {
    observer.observe(section);
  });

  return () => observer.disconnect();
}, [location]);// Run this effect whenever the location changes

  return (
    <main className={styles.main}>
      <Navigation imgStyle={{ display: "block" }} />
      <h1 className={styles.pageTitle}>Water Retreats in Bacalar, Mexico</h1>
      {waterSportRetreats.map((retreat, index) => (
        <section id={retreat.section} key={index}>
          {" "}
          {/* Add an ID for each section */}
          <RetreatsCard
            imgs={retreat.photos}
            title={retreat.title}
            summary={retreat.summary}
            includes={retreat.includes}
            prices={retreat.prices}
            index={index}
            discounts={retreat.discounts}
            headerImg={retreat.headerImg}
            button={retreat.button}
          />
        </section>
      ))}
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}

export default WaterSportRetreats;
