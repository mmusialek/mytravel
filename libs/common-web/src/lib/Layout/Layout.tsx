import { ReactChild, ReactFragment, ReactPortal } from "react";
import styles from "./Layout.module.scss";

export const Layout = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout_header}>MENU</div>
      <div className={styles.layout_body}>{props.children}</div>
      <footer className={styles.layout_footer}>&copy; Copyright 2022 - privacy policy</footer>
    </div>
  );
};
