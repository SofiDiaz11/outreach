import { useEffect } from "react";
import { useLocation } from "react-router-dom"; //
import styles from "./MountainRetreats.module.scss";
import { mountRetreats } from "../../../utils/retreats";
import WellnessCard from "../../molecules/WellnessCard/WellnessCard";
import Navigation from "../../molecules/Navigation/Navigation";
import Footer from "../../molecules/Footer/Footer";
import ScrollToTopButton from "../../atoms/button/ScrollToTopButton";

function MountainRetreats() {
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
            `/wellness-bacalar-mexico#${entry.target.id}`
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
}, [location]); // Run this effect whenever the location changes

  return (
    <main className={styles.main}>
      <Navigation imgStyle={{ display: "block" }} />
      {mountRetreats.map((retreat, index) => (
        <section id={retreat.section} key={index}>
          {" "}
          {/* Add an ID for each section */}
          <WellnessCard
            headerImg={retreat.photos}
            title={retreat.title}
            summary={retreat.summary}
            includes={retreat.includes}
            button={retreat.button}
            index={index}
            discounts={retreat.discounts}
          />
        </section>
      ))}
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}

export default MountainRetreats;
