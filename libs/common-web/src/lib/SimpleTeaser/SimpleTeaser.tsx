import { IImageData } from "@mytravel/common-types";
import styles from "./SimpleTeaser.module.scss";


export interface ISimpleTeaserProps {
  image: IImageData;
  teaserInfo: string;
  title: string;
  rating: number;
  priceFrom: number;
  priceFromPromo?: number;
  currencySymbol: string;
}

export const SimpleTeaser = (props: ISimpleTeaserProps) => {


  const getStarRating = (rating: number) => {
    const res: React.ReactElement[] = [];
    const maxRating = 5;

    let tmp = rating;
    let ratingImage = "";
    for (let i = maxRating; i > 0; i--) {
      console.log(tmp);
      if (tmp >= 1) {
        ratingImage = "/assets/icons/star_full.svg";
      }

      if (tmp > 0 && tmp < 1) {
        ratingImage = "/assets/icons/star_half_full.svg";
      }

      if (tmp <= 0) {
        ratingImage = "/assets/icons/star_empty.svg";
      }

      res.push(<img src={ratingImage} alt="star" key={"star_rating_" + i} />)
      tmp -= 1;
    }

    return res;
  }

  return (<div className={styles.simpleTeaser}>
    {/* <div className={styles.simpleTeaser_image}>{props.image}</div> */}
    <div className={styles.simpleTeaser_image}>
      <img src={props.image.imagePath} alt={props.image.alt} />
      <div className={styles.simpleTeaser_image_details}>
        <a className={styles.simpleTeaser_image_details_link} href="#">Details</a>
      </div>
    </div>
    <div className={styles.simpleTeaser_info}>{props.teaserInfo}</div>
    <div className={styles.simpleTeaser_title}>{props.title}</div>
    <div className={styles.simpleTeaser_rating}>
      <span>{getStarRating(props.rating)}</span>
      <span className={styles.simpleTeaser_rating_value}>{props.rating}</span>
    </div>
    <div className={styles.simpleTeaser_price}>
      <span className={styles.simpleTeaser_price__standard}>From {props.currencySymbol}{props.priceFromPromo}</span>
      <span className={styles.simpleTeaser_price__separator}></span>
      <span className={styles.simpleTeaser_price__promo}>Price {props.currencySymbol}{props.priceFrom}</span>
    </div>
  </div >)
}
