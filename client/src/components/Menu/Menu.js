import React, { useState } from "react";
import { bool } from "prop-types";
import Cookies from 'universal-cookie';
import { StyledMenu } from "./Menu.styled";
import "../layout.css"
const {requests_for_test, artists_for_test, users_for_test} = require("../../testingData")
const {getRequestsbyArtists, getFinishedRequests, getUnFinishedRequests, getRequestsbyCategory,getRequestsbyUser, findUserbyUserId, getRequestsbyStatus, findArtistbyUserId, findArtistbyArtistId} = require("../../helpers/selectors")

const Menu = ({ open, ...props }) => {
  const [display, setdisplay] = useState("xxx")

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  const cookies = new Cookies();

  const user_id = cookies.get('user_id')
  const user_identity = cookies.get('identity')

  if (user_id && user_identity === "client") {
    const client = findUserbyUserId(users_for_test, user_id)[0]
    return (
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <a href="/" tabIndex={tabIndex}>
          <span aria-hidden="true"> 🏠</span>
          Home
        </a>
        <a href="/about" tabIndex={tabIndex}>
          <span aria-hidden="true"> 💡 </span>
          About us
        </a>
        <a href="/gallery" tabIndex={tabIndex}>
          <span aria-hidden="true"> 🎨 </span>
          Gallery
        </a>
        <a href="/UserCommission" tabIndex={tabIndex}>
          <span aria-hidden="true"> 🗃 </span>
          Submit your Request
        </a>
        <a href="/UserAccount" tabIndex={tabIndex}>
          <span aria-hidden="true"> 🗂  </span>
          Your Account
        </a>
        <button 
          className="logout"
          onClick={() => {
          cookies.set('user_id', "", { path: '/' });
          cookies.set('identity', '', { path: '/' });
          setdisplay("logout")
        }}>Logout {client.name} </button>
      </StyledMenu>
    );
  } else if  (user_id && user_identity === "artist") {
    const artist = findArtistbyArtistId(artists_for_test, user_id)[0]
    return (
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <a href="/" tabIndex={tabIndex}>
          <span aria-hidden="true"> 🏠</span>
          Home
        </a>
        <a href="/about" tabIndex={tabIndex}>
          <span aria-hidden="true"> 💡 </span>
          About us
        </a>
        <a href="/gallery" tabIndex={tabIndex}>
          <span aria-hidden="true"> 🎨 </span>
          Gallery
        </a>
        <a href="/ArtistRequests" tabIndex={tabIndex}>
          <span aria-hidden="true"> 🗃 </span>
          Requests
        </a>
        <a href="/ArtistAccount" tabIndex={tabIndex}>
          <span aria-hidden="true"> 🗂  </span>
          Your Account
        </a>
        <button className="logout" onClick={() => {
          cookies.set('user_id', "", { path: '/' });
          cookies.set('identity', '', { path: '/' });
          setdisplay("logout")
        }}>Logout! {artist.name}</button>

      </StyledMenu>
    );
  } else {
    return (
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <a href="/" tabIndex={tabIndex}>
          <span aria-hidden="true"> 🏠</span>
          Home
        </a>
        <a href="/about" tabIndex={tabIndex}>
          <span aria-hidden="true"> 💡 </span>
          About us
        </a>
        <a href="/login" tabIndex={tabIndex}>
          <span aria-hidden="true"> s🗂 </span>
          Login
        </a>
        <a href="/register" tabIndex={tabIndex}>
          <span aria-hidden="true"> 🗃 </span>
          Register
        </a>
        <a href="/gallery" tabIndex={tabIndex}>
          <span aria-hidden="true"> 🎨 </span>
          Gallery
        </a>
      </StyledMenu>
    );
  }


};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
