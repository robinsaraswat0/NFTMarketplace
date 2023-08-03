'use client'
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";

//INTERNAL IMPORT
import {Category, Brand } from "@/components/componentIndex";
import NFTDetailsPage from "@/NFTDetailsPage/NFTDetailsPage";

//IMPORT SMART CONTRACT DATA
const NFTDetails = () => {
    const router = useRouter();

//   const [nft, setNft] = useState({
//     image: "",
//     tokenId: "",
//     name: "",
//     owner: "",
//     price: "",
//     seller: "",
//   });

  return (
    <div>
      <NFTDetailsPage/>
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;
