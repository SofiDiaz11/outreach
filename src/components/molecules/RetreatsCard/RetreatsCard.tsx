import styles from "./RetreatsCard.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import checkMark from "./../../../assets/icons/check-mark.webp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export type includes = {
  [key: string]: string | string[];
};

interface RetreatsCardProp {
  imgs: string[];
  title: string;
  summary: string;
  includes: includes[];
  prices: { [key: string]: string | number }[];
  index: number;
  discounts?: string;
  headerImg: string;
  button?: string;
}

function RetreatsCard({
  imgs,
  title,
  summary,
  includes,
  prices,
  index,
  discounts,
  headerImg,
  button,
}: RetreatsCardProp) {
  const includesRetreat1 = includes[0];
  const includesRetreat2 = includes[1];
  return (
    <div
      className={`${index % 2 === 0 && styles.flipped} ${
        styles.retreatsWrapper
      }`}
    >
      <div className={styles.header}>
        <div className={styles.headerImg}>
          <img src={headerImg} alt="retreats header image" />
        </div>

        <div className={styles.titleCon}>
          <h2>{title}</h2>
          <p>{summary}</p>
        </div>
      </div>
      <div
        className={`${styles.retreatsCon} ${
          index % 2 === 0 && styles.flippedCon
        }`}
      >
        <div
          className={`${index % 2 === 0 && styles.galleryColor} ${
            styles.gallery
          }`}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            centeredSlides={false}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              320: {
                slidesPerView: 1, // 1 slide for screens smaller than 480px
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1, // 1 slide for screens between 480px and 768px
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2, // 2 slides for screens between 768px and 1024px
                spaceBetween: 20,
              },
            }}
          >
            {imgs.map((img, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <img src={img} alt="retreat slide image" loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.retreatsInfo}>
          <div>
            <div>
              {includesRetreat1 && (
            <>
              <h3 className={styles.includesTitle}>{includesRetreat1.title}</h3>
              <div className={styles.includes}>
                {Array.isArray(includesRetreat1.list) &&
                  includesRetreat1.list.map((item, i) => (
                    <p key={i}>
                      {item}
                      <span>
                        <img src={checkMark} alt="check-mark" loading="lazy" />
                      </span>
                    </p>
                  ))}
              </div>
              <div className={styles.includes}>
                {Array.isArray(includesRetreat2?.list) &&
                  includesRetreat2.list.map((item, i) => (
                    <p key={i}>
                      {item}
                      <span>
                        <img src={checkMark} alt="check-mark" loading="lazy" />
                      </span>
                    </p>
                  ))}
              </div>
            </>
          )}

              {/*   <div className={styles.priceCon}>
                <h5>Prices: </h5>

                {prices.map((obj) => (
                  <>
                    <p>
                      <span className={styles.title}>{obj.title}</span>
                      <span className={styles.line}></span>
                      <span
                        className={
                          obj.price.toString().length < 4 ? styles.margin : ""
                        }
                      >
                        ${obj.price} USD
                      </span>
                    </p>
                  </>
                ))}
              </div> */}
              <div className={styles.discounts}>
                <p>{`${discounts ? "*" + discounts + "*" : ""}`}</p>
              </div>

              <div className={styles.bookNowCon}>
                <Link to={`/contact`}>
                  <button className={styles.bookNowBtn} type="button">
                    {button ?? "Book Now"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RetreatsCard;
