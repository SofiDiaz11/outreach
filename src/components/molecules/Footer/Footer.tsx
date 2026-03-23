import styles from "./Footer.module.scss";
import spotify from "../../../assets/icons/spotify.png";
import instagram from "../../../assets/icons/instagram.png";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <p>Copyright © 2022 OutRetreats - All Rights Reserved.</p>
        <div>
          <a
            href="https://open.spotify.com/user/31rk3ug3hqhvi43fxxu3mdlercga?si=K10KdU_SS1W0lQf6sh_pOA"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactLink} ${styles.instagram}`}
          >
            <img src={spotify} alt="spotify" />{" "}
          </a>

          <a
            href="https://www.instagram.com/outretreat"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactLink} ${styles.instagram}`}
          >
            {" "}
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
