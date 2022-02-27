import React from "react";
import styles from "./tab.module.css";

const TabContent = (props) => {
  return (
    <div className={`${styles.tabContent} tab-content_container`}>
      {props.children}
    </div>
  );
};

export default TabContent;
