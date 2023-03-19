import styled from "styled-components";
import { GoogleAuthProvider } from "../firebase";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

// to make a popup raise for the login we do this.
const Header = () => {
  const result = JSON.parse(localStorage.getItem("result"));
  const navigate = useNavigate();

  const handleAuth = () => {
    auth
      .signInWithPopup(GoogleAuthProvider)
      .then((result) => {
        localStorage.setItem(
          "result",
          JSON.stringify({ loggedInInfo: result, isLoggedIn: true })
        );
        window.location.reload(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleLogout = () => {
    localStorage.clear(result);
    navigate("/");
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="logoheader" />
      </Logo>

      {result === null ? (
        <Login onClick={handleAuth}> Login </Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="Home icon" />
              <span>HOME</span>
            </a>

            <a href="/home">
              <img src="/images/search-icon.svg" alt="Home icon" />
              <span>SEARCH</span>
            </a>

            <a href="/home">
              <img src="/images/watchlist-icon.svg" alt="Home icon" />
              <span>WATCHLIST</span>
            </a>

            <a href="/originals">
              <img src="/images/original-icon.svg" alt="Home icon" />
              <span>ORIGINALS</span>
            </a>

            <a href="/home">
              <img src="/images/movie-icon.svg" alt="Home icon" />
              <span>MOVIES</span>
            </a>

            <a href="/home">
              <Dot className="dot">
             
              </Dot>
              
              <span>
                {" "}
                {result.loggedInInfo.additionalUserInfo.profile.name}
              </span>
            </a>
          </NavMenu>

          <SignOut>
            {result && (
              <>
                {" "}
                <UserImg
                  src={result.loggedInInfo.additionalUserInfo.profile.picture}
                />{" "}
                <DisplayName onClick={handleLogout}>Sign Out</DisplayName>{" "}
              </>
            )}
          </SignOut>
        
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-row: eow nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);

  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const Dot = styled.div`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: -2px;
  border-radius: 50%;
  border-style: solid;
  border-width: 0.5px;
  border-color: black;
  height: 10px;
  width: 10px;
  background-color: #16FF00;

 
`;

const DisplayName = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DisplayName} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
