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

  const click=(e)=>{
    console.log('Hello')
  }

  return (
    <div className='sidenav'>
        <img className='sidenav-logo' src={InstaLogo} alt=""/>
    <div className="sidenav-buttons">
    <button onClick={click} className="sidenav-button">
        <HomeIcon/> 
    <div className="home-label">
    <span>Home</span>
    </div>
    </button>
    <button className="sidenav-button">
    <SearchIcon/>
    <div className="search-label">
    <span>Search</span>
    </div>
    </button>
    <button className="sidenav-button">
    <ExploreIcon/>
    <div className="explore-label"><span>Explore</span></div>
    </button>
    <button className="sidenav-button">
    <SlideshowIcon/>
    <div className="reels-label"><span>Reels</span></div> 
    </button>
    <button className="sidenav-button">
    <ChatIcon/>
    <div className="messages-label"><span>Messages</span></div>   
    </button>
    <button className="sidenav-button">
    <FavoriteBorderIcon/>
    <div className="notifications-label"><span>Notifications</span></div> 
    </button>
    <button className="sidenav-button">
    <AddCircleOutlineIcon/>
    <div className="create-label"> <span>Create</span></div> 
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