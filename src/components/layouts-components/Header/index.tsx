import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
const Header = () => {
  return (
    <div className={cx("header")}>
      <div className={cx("search-wrapper")}>
        <input className={cx("search-input")} type="text" placeholder="Search" />
        <div className={cx("search-icon")}>
          <FiSearch />
        </div>
      </div>
      <div className={cx("right-side")}>
        <div className={cx("notification")}>
          <IoMdNotifications />
        </div>
        <div className={cx("user-info")}>
          <img
            className={cx("avatar-img")}
            src="https://st3.depositphotos.com/1007566/12989/v/950/depositphotos_129895474-stock-illustration-hacker-character-avatar-icon.jpg"
            alt="user-avatar"
          />
          <span className={cx("user-name")}>Dë Phrïsh</span>
          <MdOutlineKeyboardArrowDown className={cx("arrow-down")} />
        </div>
      </div>
    </div>
  );
};

export default Header;
