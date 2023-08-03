'use client'
import React,{useState} from "react";

//INTERNAL IMPORTS
import Style from "@/styles/searchPage.module.css"
import images from "@/img";
import { Slider,Brand,Loader,Filter } from "@/components/componentIndex";
import { SearchBar } from "@/SearchPage/searchBarIndex";
import { NFTCardTwo,Banner } from "@/collectionPage/collectionIndex";
const search = () => {
    const [nfts,setNfts] = useState([]);
    const [nftsCopy,setNftsCopy] = useState([])
    const collectiablesArray = [
        {
         image:images.nft_image_1,
         name:"Radhe"
        },
        {
         image:images.nft_image_2,
         name:"Radhe"
        },
        {
         image:images.nft_image_3,
         name:"Radhe"
        },
        {
         image:images.nft_image_1,
         name:"Radhe"
        },
        {
         image:images.nft_image_2,
         name:"Radhe"
        },
        {
         image:images.nft_image_3,
         name:"Radhe"
        },
        {
         image:images.nft_image_1,
         name:"Radhe"
        },
        {
         image:images.nft_image_2,
         name:"Radhe"
        }
    ];

    const onHandleSearch = (value) => {
        const filteredNFTS = collectiablesArray.filter(({ name }) =>
          name.toLowerCase().includes(value.toLowerCase())
        );
    
        if (filteredNFTS.length === 0) {
          setNfts(nftsCopy);
        } else {
          setNfts(filteredNFTS);
        }
    };
    
    const onClearSearch = () => {
        if (nfts.length && nftsCopy.length) {
          setNfts(nftsCopy);
        }
    };
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar
        onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}
      />
      <Filter />
      {/* {nfts.length == 0 ? <Loader /> : <NFTCardTwo NFTData={collectiablesArray} />} */}
      <NFTCardTwo NFTData={collectiablesArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default search;
