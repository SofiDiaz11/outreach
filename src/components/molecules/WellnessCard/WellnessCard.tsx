import styles from "./WellnessCard.module.scss";
import checkMark from "./../../../assets/icons/check-mark.webp";
import { Link } from "react-router-dom";

export type includes = {
  [key: string]: string | string[];
};

interface WellnessCardProps {
  title: string;
  summary: string;
  includes: includes[];
  headerImg: string;
  button?: string;
  index: number;
}

function WellnessCard({
  title,
  summary,
  includes,
  headerImg,
  button,
  index,
}: WellnessCardProps) {
  const includesData = includes[0];
  const isFlipped = index % 2 === 0;

  return (
    <div className={`${styles.wellnessWrapper} ${isFlipped ? styles.flipped : ""}`}>

      {/* TOP SECTION: photo + title + text */}
      <div className={`${styles.header} ${isFlipped ? styles.headerFlipped : ""}`}>
        <div className={styles.headerImg}>
          <img src={headerImg} alt={title} />
        </div>
        <div className={styles.titleCon}>
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>
      </div>

      {/* BOTTOM: depends on whether there is a list or not */}
      <div className={styles.bottom}>
        {includesData ? (
          <>
            <div className={styles.infoBox}>
              <h5 className={styles.includesTitle}>{includesData.title as string}</h5>
              <div className={styles.includesList}>
                {Array.isArray(includesData.list) &&
                  (includesData.list as string[]).map((item, i) => (
                    <p key={i}>
                      {item}
                      <span>
                        <img src={checkMark} alt="check" loading="lazy" />
                      </span>
                    </p>
                  ))}
              </div>
              <div className={styles.btnCon}>
                <Link to="/contact">
                  <button className={styles.btn} type="button">
                    {button ?? "Book Now"}
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.onlyBtnCon}>
            <Link to="/contact">
              <button className={styles.btn} type="button">
                {button ?? "Book Now"}
              </button>
            </Link>
          </div>
        )}
      </div>

    </div>
  );
}

export default WellnessCard;