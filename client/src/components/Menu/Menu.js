import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"><span>🏠</span></span>
        Home
      </a>
      <a href="/about" tabIndex={tabIndex}>
        <span aria-hidden="true">💡</span>
        About us
        </a>
      <a href="/login" tabIndex={tabIndex}>
        <span aria-hidden="true">🗂</span>
        Login
        </a>
        <a href="/register" tabIndex={tabIndex}>
        <span aria-hidden="true">🗃</span>
        Register
        </a>
        <a href="/gallery" tabIndex={tabIndex}>
        <span aria-hidden="true">🎨</span>
        Gallery
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;