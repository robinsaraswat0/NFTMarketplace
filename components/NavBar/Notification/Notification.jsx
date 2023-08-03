import React from "react";
import Image from "next/image";

//INTERNAL IMPORTS
import Style from "./Notification.module.css"
import images from "../../../img/index";
const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notication_box_img}>
          <Image src={images.user1} alt="profile" width={50} height={50} className={Style.notication_box_img}/>
        </div>
        <div className={Style.notication_box_info}>
          <h4>Robin</h4>
          <p>Measure action your user...</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
