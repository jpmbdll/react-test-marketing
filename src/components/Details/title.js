import React, { Fragment } from "react";
import styles from "./title.module.css";
const Title = () => {
  return (
    <Fragment>
      <div className={`${styles.header} ui-header_container`}>
        <h1>Audio-Technica ATH-MSR7</h1>
        <span>2017 Best Headphones of the Year Award Winner</span>
      </div>
    </Fragment>
  );
};

export default Title;
