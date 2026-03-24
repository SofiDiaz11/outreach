import { useEffect } from "react";
import { useLocation } from "react-router-dom"; //
import styles from "./MountainRetreats.module.scss";
import { mountRetreats } from "../../../utils/retreats";
import RetreatsCard from "../../molecules/RetreatsCard/RetreatsCard";
import Navigation from "../../molecules/Navigation/Navigation";
import Footer from "../../molecules/Footer/Footer";
import ScrollToTopButton from "../../atoms/button/ScrollToTopButton";

function MountainRetreats() {
  const location = useLocation(); // Get the current location (to access the hash)

  useEffect(() => {
    if (location.hash) {
      // Scroll to the element with the id matching the hash
      const sectionId = location.hash.substring(1); // Remove the # from the hash
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Scroll to the element
      }
    }
  }, [location]); // Run this effect whenever the location changes

  return (
    <main className={styles.main}>
      <Navigation imgStyle={{ display: "block" }} />
      {mountRetreats.map((retreat, index) => (
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

export default MountainRetreats;
