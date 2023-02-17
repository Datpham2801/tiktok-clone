import React from "react";
import { FaHome, FaPeopleArrows, FaCameraRetro } from "react-icons/fa";
import "./navbar.scss";
import avatar from "./img/avartar.jpg";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <FaHome className="navbar-header-icon" />
        <p className="active">Dành cho bạn</p>
      </div>
      <div className="navbar-header">
        <FaPeopleArrows className="navbar-header-icon" />
        <p>Đang follow</p>
      </div>
      <div className="navbar-header">
        <FaCameraRetro className="navbar-header-icon" />
        <p>Live</p>
      </div>
      <div className="navbar-login">
        <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
        <button>Đăng Nhập</button>
      </div>
      <div className="navbar-accounts">
        <p>Tài khoản được đề xuất</p>
        <div className="navbar-account">
          <img src={avatar} alt="decription" />
          <div className="navbar-account-name">
            <p>datpham</p>
            <p>Phạm Văn Đạt</p>
          </div>
        </div>
        <div className="navbar-account">
          <img src={avatar} alt="decription" />
          <div className="navbar-account-name">
            <p>datpham</p>
            <p>Phạm Văn Đạt</p>
          </div>
        </div>
        <div className="navbar-account">
          <img src={avatar} alt="decription" />
          <div className="navbar-account-name">
            <p>datpham</p>
            <p>Phạm Văn Đạt</p>
          </div>
        </div>
        <div className="navbar-account">
          <img src={avatar} alt="decription" />
          <div className="navbar-account-name">
            <p>datpham</p>
            <p>Phạm Văn Đạt</p>
          </div>
        </div>
        <div className="navbar-account">
          <img src={avatar} alt="decription" />
          <div className="navbar-account-name">
            <p>datpham</p>
            <p>Phạm Văn Đạt</p>
          </div>
        </div>
        <button className="navbar-btn">Xem tất cả</button>
      </div>
    </div>
  );
}
