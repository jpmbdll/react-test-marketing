import React, { useState } from "react";
import Title from "./title";
import Description from "../Details/TabContent/description";
import ItemDetails from "../Details/TabContent/details";
import TabsComponent from "../UI/tabs/tab";
import Button from "../UI/button/button";
import styles from "./details.module.css";
import Preview from "../Preview/preview";
import { toast } from 'react-toastify';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BUTTON_LOADING = 'LOADING...';
const BUTTON_ADD = 'ADD TO CART'; 
const BUTTON_VIEW = 'VIEW CART'; 

const Details = () => {
  const [color, setColor] = useState('black'); 
  const [buttonLbl, setButtonLbl] = useState(BUTTON_ADD);

  const handleChangeColor = (e) => {
    const value = e.target.value;
    setColor(color => {
      if(value !== color) return value;
    })
  }
  const handleAddToCart = (e) => {
    setButtonLbl(BUTTON_LOADING);
    setTimeout(() => {
      setButtonLbl(BUTTON_VIEW);
      toast.success('Successfully added to cart!');
    }, 2000);
  }
  
  return (
    <div className={`${styles.container} ui-details_container`}>
      <div className={`${styles.action} ui-action_container`}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>All Products</span>
      </div>
      <div className={`${styles.descriptionContainer} ui-description_container`}>
        <div className={"ui-title-details_container"}>
          <Title />
        </div>
        <div className={"ui-tabs-details_container"}>
          <TabsComponent 
            id='display-item'
            tabs={[{ id: "description_tab", title: 'DESCRIPTION', component: <Description onChange={handleChangeColor}/> },
              { id: "details_tab", title: 'DETAILS', component: <ItemDetails/> },
            ]} 
            defaultTab={"description_tab"} />
        </div>
        <div className={"ui-footer-details_container"}>
          <Button label={buttonLbl} onClick={handleAddToCart} disabled={buttonLbl === BUTTON_LOADING}/>
        </div>
      </div>
      <div className={`${styles.previewContainer} ui-preview_container`}>
        <Preview color={color}/>
      </div>
    </div>
  );
};

export default Details;
