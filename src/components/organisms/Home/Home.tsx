import Navigation from "../../molecules/Navigation/Navigation";
import { cardInfo } from "../../../utils/cardInfo";
import Card from "../../atoms/Card/Card";
import video from "../../../assets/hero.mp4";
import Reviews from "../../molecules/Reviews/Reviews";
import Footer from "../../molecules/Footer/Footer";
import styles from "./Home.module.scss";
import ScrollToTopButton from "../../atoms/button/ScrollToTopButton";
import Profile from "../../../assets/profile.png";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <section>
        {" "}
        <Navigation imgStyle={{ display: "none" }} />
        <div className={styles.backgroundVideoContainer}>
          {" "}
          <video autoPlay muted loop className={styles.backgroundVideo}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className={styles.aboutUsContainer}>
        <div className={styles.aboutUsComp}>
          <div>
            <h2>LEARN A LITTLE</h2>
            <p className={styles.extra}>about us</p>
          </div>

          <div>
            <p>
              OutRetreat is a wellness retreat agency dedicated to guiding
              individuals back to themselves through transformational
              experiences in Bacalar, Mexico.{" "}
            </p>
            <p>
              Our mission is to help people return to a state of harmony,
              restore balance, awaken conscious presence, and inspire a more
              fulfilling way of life.
            </p>
          </div>
        </div>

        <div className={styles.aboutUsFounder}>
          <div className={styles.aboutUsInfo}>
            <div className={styles.founderText}>
              {" "}
              <div className={styles.founderTitle}>
                <h2>FOUNDER</h2>
              </div>
              <p className={styles.firstP}>
                Founded by Hilda Villegas, her vision is to create safe and
                supportive spaces for collective spiritual awakening, where
                people can release, restore, heal, and reconnect with their
                purpose. Since 2019.
              </p>
              <p>
                Hilda has collaborated with holistic centers and sustainable
                projects across five countries. She holds certifications in
                agroforestry, breathwork, somatic healing, Janzu water therapy,
                yoga, and diverse wellness modalities.
              </p>
              <p>
                Today, she brings together everything she has learned and shares
                it from a place of love, presence, and deep respect for nature.
              </p>
            </div>
            <div className={styles.founderImg}>
              <img src={Profile} alt="Hilda Villegas" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.retreatsContainer}>
        <h2>RETREATS</h2>

        <div className={styles.cardContainer}>
          {cardInfo.map((info) => (
            <Card
              key={info.title} // Make sure to add a unique key for each item
              title={info.title}
              desc={info.desc}
              img={info.img}
              link={info.link}
              isComingSoon={info.comingSoon}
            />
          ))}
        </div>
      </section>

      <section className={styles.reviewsSec}>
        <div>
          <h2>HEAR WHAT OTHERS EXPERIENCE</h2>
          <p className={styles.extra}>with us</p>
        </div>

        <Reviews></Reviews>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
