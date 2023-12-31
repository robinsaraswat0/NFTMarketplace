import React from "react";

//INTERNAL IMPORTS
import Style from "@/styles/index.module.css";
import { HeroSection,Service,BigNFTSlider,Subscribe,Title,Category,Filter, NFTCard, Collection, FollowerTab,AudioLive, Slider,Brand,Video} from "@/components/componentIndex";



const Home = () => {
  return(
    <div className={Style.homepage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title heading="Audio Collection" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <AudioLive />
      <FollowerTab />
      {/* <Title heading="Explore NFTs Video" paragraph="Click on play icon & enjoy Nfts Video"/> */}
      <Slider />
      <Collection />
      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <Filter />
      <NFTCard />
      <Title heading="Browse By Category" paragraph="Explore the NFTs in the most featured categories."/>
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  )
};

export default Home;
