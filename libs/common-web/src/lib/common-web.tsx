import styles from "./common-web.module.scss";

/* eslint-disable-next-line */
export interface CommonWebProps {}

export function CommonWeb(props: CommonWebProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to CommonWeb!</h1>
    </div>
  );
}

export default CommonWeb;
