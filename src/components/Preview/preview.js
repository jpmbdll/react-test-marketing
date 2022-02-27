import React from "react";
import styles from "./preview.module.css";

const Preview = (props) => {
  return (
    <figure
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${props.color}.jpg)`,
        backgroundRepeat: "no-repeat",
      }}
      className={styles.imagePreview}
    ></figure>
  );
};

export default Preview;
