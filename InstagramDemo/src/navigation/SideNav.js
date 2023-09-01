import React from "react";
import "./SideNav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import InstaLogo from '../images/text.png'

function SideNav() {
  return (
    <div className='sidenav'>
        <img className='sidenav-logo' src={InstaLogo} alt=""/>
    <div className="sidenav-buttons">
    <button className="sidenav-button">
    <HomeIcon/>
        <span>Home</span>
    </button>
    <button className="sidenav-button">
    <SearchIcon/>
        <span>Search</span>
    </button>
    <button className="sidenav-button">
    <ExploreIcon/>
        <span>Explore</span>
    </button>
    <button className="sidenav-button">
    <SlideshowIcon/>
        <span>Reels</span>
    </button>
    <button className="sidenav-button">
    <ChatIcon/>
        <span>Messages</span>
    </button>
    <button className="sidenav-button">
    <FavoriteBorderIcon/>
        <span>Notifications</span>
    </button>
    <button className="sidenav-button">
    <AddCircleOutlineIcon/>
        <span>Create</span>
    </button>
    </div>
    <div className="sidenav-more">
        <button className="sidenav-button">
          <MenuIcon />
          <span className="sidenav-buttonText">More</span>
        </button>
      </div>
    </div>
  )
}

export default SideNav