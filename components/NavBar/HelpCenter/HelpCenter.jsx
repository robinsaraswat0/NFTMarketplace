import React from "react";
import Link from "next/link";

//Internal Links
import Style from "./HelpCenter.module.css"
const HelpCenter = () => {
  const helpCenter = [
    {
      name:"About",
      link:"about"
    },
    {
      name:"Contact Us",
      link:"contactUs"
    },
    {
      name:"Sign Up",
      link:"signUp"
    },
    {
      name:"Login",
      link:"login"
    },
    {
      name:"Subscription",
      link:"subscription"
    },
  ]
  return (
    <div>
      {helpCenter.map((el,i)=>(
        <div className={Style.helpCenter}>
          <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
