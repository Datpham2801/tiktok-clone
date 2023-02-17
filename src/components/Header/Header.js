import React from "react";
import {
  FaTiktok,
  FaSistrix,
  FaCloudUploadAlt,
  FaBoxOpen,
  FaEllipsisH,
  FaAudioDescription,
} from "react-icons/fa";
import "./header.scss";
export default function Header() {
  return (
    <div id="header">
      <div className="header">
        <div className="header-logo">
          <FaTiktok className="header-logo-tiktok" />
          <h1 className="header-logo-content">Tiktok</h1>
        </div>
        <div className="header-search">
          <input
            className="header-input"
            placeholder="Tìm kiếm tài khoản và video"
          />
          <FaSistrix className="header-btnsearch" />
        </div>
        <div className="header-control">
          <div className="header-upload">
            <FaCloudUploadAlt className="upload" />
            <p>Up load</p>
          </div>
          <div className="header-login">
            <button>Login</button>
          </div>
          <div className="header-effect">
            {/* <div className="header-effect-popup">
              <p>Tạo hiệu ứng</p>
            </div> */}
            <FaBoxOpen className="effect" />
            <div className="header-effect-popup">
              <p>Tạo hiệu ứng</p>
            </div>
          </div>
          <div className="header-extra">
            <FaEllipsisH className="extra" />
            <div className="form-extra">
              <ul>
                <li>
                  <FaAudioDescription />
                  <p>Tiếng Việt</p>
                </li>
                <li>
                  <FaAudioDescription />
                  <p>Tiếng Việt</p>
                </li>
                <li>
                  <FaAudioDescription />
                  <p>Tiếng Việt</p>
                </li>
                <li>
                  <FaAudioDescription />
                  <p>Tiếng Việt</p>
                  <input type="checkbox" name="name" id="id" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
