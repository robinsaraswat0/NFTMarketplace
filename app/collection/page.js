import React from "react";

//INTERNAL IMPORTS
import Style from "@/styles/collection.module.css"
import images from "@/img";
import { Banner,CollectionProfile,NFTCardTwo } from "@/collectionPage/collectionIndex";
import { Slider,Brand} from "@/components/componentIndex";
import Filter from "@/components/Filter/Filter";

const collection = () => {
  const collectionArray = [
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
  ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />

      <Slider />
      <Brand />
    </div>
  );
};

export default collection;
