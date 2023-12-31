import React from "react";
import Link from "next/link";

//INTERNAL IMPORTS
import Style from "./Discover.module.css";
const Discover = () => {
  const discover = [
    {
      name:"Collection",
      link:"collection"
    },
    {
      name:"Search",
      link:"search"
    },
    {
      name:"Author Profile",
      link:"author"
    },
    {
      name:"NFT Details",
      link:"nft-details"
    },
    {
      name:"Account Setting",
      link:"account"
    },
    {
      name:"Upload NFT",
      link:"upload-Nft"
    },
    {
      name:"Connect Wallet",
      link:"connect"
    },
    {
      name:"Blog",
      link:"blog"
    },
    
  ]
  return (
    <div>
      {discover.map((el,i)=>(
        <div key={i+1} className={Style.discover}>
          <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
