'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from 'react'

//--Import Icons
import {MdNotifications} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft,CgMenuRight} from "react-icons/cg";


//Internal Imports
import Styles from "./NavBar.module.css";
import {Discover,HelpCenter,Profile,SideBar,Notification} from "./index";
import { Button } from "../componentIndex";
import images from "../../img";

const NavBar = () => {
  const [help,setHelp] = useState(false);
  const [notification,setNotification] = useState(false);
  const [discover,setDiscover] = useState(false);
  const [profile,setProfile] = useState(false);
  const [openSideMenu,setOpenSideMenu] = useState(false);
  
  const openMenu = (e)=>{
    const btnText = e.target.innerText;
    if(btnText == "Discover"){
      console.log("Discover")
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }else if(btnText == "Help Center"){
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    }else{
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  } 

  const openNotification=()=>{
    if(!notification){
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    }else{
      setNotification(false);
    }
  }

  const openProfile= ()=>{
    if(!profile){
      setNotification(false);
      setDiscover(false);
      setHelp(false);
      setProfile(true);
    }else{
      setProfile(false);    
    }
  }

  const openSidebar= ()=>{
    if(!openSideMenu){
      setOpenSideMenu(true);
    }else{
      setOpenSideMenu(false);
    }
  }
    
  return (
    <div className={Styles.navbar}>
      <div className={Styles.navbar_container}>
        <div className={Styles.navbar_container_left}>
          <div className={Styles.logo}>
            <Image src={images.logo} alt="NFT MARKETPLACE" />
          </div>
          <div className={Styles.navbar_container_left_box_input}>
            <div className={Styles.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={()=>{}} className={Styles.search_con}/>
            </div>
          </div>
        </div>
        {/* //END OF LEFT SECTION */}
        <div className={Styles.navbar_container_right}>
          <div className={Styles.navbar_container_right_discover}>
            <p onClick={(e)=>openMenu(e)}>Discover</p>
            {discover && (
            <div className={Styles.navbar_container_right_discover_box}>
              <Discover/>
            </div>
            ) }
          </div>
          <div className={Styles.navbar_container_right_help}>
            <p onClick={(e)=>openMenu(e)}>Help Center</p>
            {help && (
              <div className={Styles.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          <div className={Styles.navbar_container_right_notify}>
            <MdNotifications className={Styles.notify} onClick={()=>openNotification()}/>
            {notification && 
                <Notification />
            }
          </div>
          <div className={Styles.navbar_container_right_button}>
            <Button btnName="Create" handleClick={()=>{}} />
          </div>
          <div className={Styles.navbar_container_right_profile_box}>
            <div className={Styles.navbar_container_right_profile}>
              <Image src={images.user1} alt="Profile" width={40} height={40} onClick={()=>openProfile()} className={Styles.navbar_container_right_profile}/>
              {profile && <Profile />}
            </div>
          </div>
          
          {/* MENU BUTTON */}
          <div className={Styles.navbar_container_right_menuBtn}>
            <CgMenuRight className={Styles.menuIcon} onClick={()=>openSidebar()}/>
          </div>
        </div>
      </div>
      {/* Sidebar component */}
      {openSideMenu && (
        <div className={Styles.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu}/>
        </div>
      )}
    </div>
  );
};

export default NavBar;
