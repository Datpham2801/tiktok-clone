import React from "react";
import { AiFillLike, AiFillMessage } from "react-icons/ai";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaMusic } from "react-icons/fa";
import "./formvideo.scss";
import myvideo from "./myvideo.mp4";
import myvideo1 from "./myvideo1.mp4";

import myvideo2 from "./myvideo2.mp4";
import myvideo3 from "./myvideo3.mp4";

import avatar from "../Navbar/img/avartar.jpg";
export default function FormVideo() {
  const listvideos = [myvideo, myvideo1, myvideo2, myvideo3];
  return listvideos.map((video, index) => {
    return (
      <div className="form">
        <div className="form-img">
          <img src={avatar} alt="decription" />
        </div>
        <div className="form-content">
          <div className="form-container">
            <div className="form-content-header">
              <p className="form-content-header-name">datpham</p>
              <p className="form-content-header-decription">
                I DID NOT NEED TO SEE THIS #DUET @𝕸𝖊𝖌𝖆𝖓 𝕽𝖚𝖙𝖍 𝕻𝖞𝖊 😂😂😂 #funny
                #react #fyp #whatthefork #dogcharger #christmasgift
                #tiktokmademebuyit #blowup #ourmissinghearts #techtok
              </p>
              <p className="form-content-header-namemusic">
                <FaMusic />
                <a href="/">Ten bai hat</a>
              </p>
            </div>
            <div className="form-contact">
              <video
                src={video}
                autoPlay
                muted
                loop
                className="form-video"
                controls
              />
              <div className="form-interact">
                <div className="form-interact-like">
                  <div>
                    <IoShareSocialSharp />
                  </div>
                  <p>2000</p>
                </div>
                <div className="form-interact-like">
                  <div>
                    <AiFillMessage />
                  </div>
                  <p>2000</p>
                </div>
                <div className="form-interact-like">
                  <div>
                    <AiFillLike />
                  </div>
                  <p>2000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button>Follow</button>
      </div>
    );
  });
  // return (
  //   <div className="form">
  //     <div className="form-img">
  //       <img src={avatar} alt="decription" />
  //     </div>
  //     <div className="form-content">
  //       <div className="form-container">
  //         <div className="form-content-header">
  //           <p className="form-content-header-name">datpham</p>
  //           <p className="form-content-header-decription">
  //             I DID NOT NEED TO SEE THIS #DUET @𝕸𝖊𝖌𝖆𝖓 𝕽𝖚𝖙𝖍 𝕻𝖞𝖊 😂😂😂 #funny
  //             #react #fyp #whatthefork #dogcharger #christmasgift
  //             #tiktokmademebuyit #blowup #ourmissinghearts #techtok
  //           </p>
  //           <p className="form-content-header-namemusic">
  //             <FaMusic />
  //             <a href="/">Ten bai hat</a>
  //           </p>
  //         </div>
  //         <div className="form-contact">
  //           <video
  //             src={listvideos}
  //             autoPlay
  //             muted
  //             loop
  //             className="form-video"
  //             controls
  //           />
  //           <div className="form-interact">
  //             <div className="form-interact-like">
  //               <div>
  //                 <IoShareSocialSharp />
  //               </div>
  //               <p>2000</p>
  //             </div>
  //             <div className="form-interact-like">
  //               <div>
  //                 <AiFillMessage />
  //               </div>
  //               <p>2000</p>
  //             </div>
  //             <div className="form-interact-like">
  //               <div>
  //                 <AiFillLike />
  //               </div>
  //               <p>2000</p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <button>Follow</button>
  //   </div>
  // );
}
