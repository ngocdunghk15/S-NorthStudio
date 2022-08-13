import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { MdHomeFilled, MdLiveTv } from "react-icons/md";
import { TiArrowRightThick } from "react-icons/ti";
import { BsFillFileEarmarkPlayFill } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
interface INavLinkItem {
  id: string;
  title: string;
  icon: JSX.Element;
  isActive: boolean;
  path: string;
}
const navLinks = [
  {
    id: uuidv4(),
    title: "home",
    icon: <MdHomeFilled />,
    isActive: true,
    path: "/",
  },
  {
    id: uuidv4(),
    title: "forward",
    icon: <TiArrowRightThick />,
    isActive: false,
    path: "/forward",
  },
  {
    id: uuidv4(),
    title: "live",
    icon: <MdLiveTv />,
    isActive: false,
    path: "/live",
  },
  {
    id: uuidv4(),
    title: "files",
    icon: <BsFillFileEarmarkPlayFill />,
    isActive: false,
    path: "/files",
  },
  {
    id: uuidv4(),
    title: "news",
    icon: <BiNews />,
    isActive: false,
    path: "/news",
  },
] as INavLinkItem[];

const othersNavLinks = [
  {
    id: uuidv4(),
    title: "homefake",
    icon: <MdHomeFilled />,
    isActive: false,
    path: "/homefake",
  },
  {
    id: uuidv4(),
    title: "forwardfake",
    icon: <TiArrowRightThick />,
    isActive: false,
    path: "/forwardfake",
  },
  {
    id: uuidv4(),
    title: "livefake",
    icon: <MdLiveTv />,
    isActive: false,
    path: "/livefake",
  },
  {
    id: uuidv4(),
    title: "filesfake",
    icon: <BsFillFileEarmarkPlayFill />,
    isActive: false,
    path: "/filesfake",
  },
] as INavLinkItem[];

const Sidebar = () => {
  const [title, setTitle] = useState<string>("Live Chat NS");
  const handleOnclick = (activeItem: INavLinkItem) => {
    console.log("cllicked", activeItem.id);

    setTitle(activeItem.title);
    navLinks.map((item) => {
      if (item.id === activeItem.id) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
      return item;
    });
  };

  useEffect(() => {
    document.title = "Live Chat NS - " + title;
    if (title === "Live Chat NS") {
      document.title = title;
    }
  }, [title]);

  return (
    <div className={cx("sidebar--wrapper")}>
      <div className={cx("logo-brand--wrapper")}>
        <div className={cx("logo-brand")}>S</div>
      </div>
      <div className={cx("list-link")}>
        {navLinks.map((item) => {
          return (
            <div key={uuidv4()} className={cx("icon--wrapper")}>
              <Link
                onClick={() => {
                  handleOnclick(item);
                }}
                className={cx("nav-icon", `${item.isActive ? "active" : ""}`)}
                to={item.path}
              >
                {item.icon}
              </Link>
            </div>
          );
        })}
      </div>
      <div className={cx("list-link")}>
        {othersNavLinks.map((item) => {
          return (
            <div key={uuidv4()} className={cx("icon--wrapper")}>
              <Link
                onClick={() => {
                  handleOnclick(item);
                }}
                className={cx("nav-icon", `${item.isActive ? "active" : ""}`)}
                to={item.path}
              >
                {item.icon}
              </Link>
            </div>
          );
        })}
      </div>
      <div className={cx("active-file", "nav-icon")}>
        <BsFillFileEarmarkPlayFill />
      </div>
    </div>
  );
};

export default Sidebar;
