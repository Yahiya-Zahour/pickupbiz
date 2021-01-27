import React from "react";
import "./Header.css";
import imglogo from "../images/cr7.jpg";
import videohd from "../videos/Butterfly.mp4";
import audiomp3 from "../audios/1998.mp3.mp3"; 
export const HeaderSection=()=>{

    return(
        <div>
            
            <header>
                <a href="">Home</a>
                <a href="">services</a>
                <a href="">About us</a>
                <a href=""> Contact us</a>
                <h1 style={{backgroundColor:"pink"}}> welcome</h1>
                <div className="cr73">
               <img  src={imglogo} width="400px" height="400px"></img>
               </div>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod eligendi nisi alias dolore id voluptatum reprehenderit laboriosam sunt aspernatur beatae, molestias delectus dicta, dignissimos qui error vel praesentium eius!</p>
               <img src="Assets/pickup.png" alt="body images"/>
               <p className="main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid, odit corporis nam eos tempore, architecto laudantium vel adipisci autem reiciendis voluptatibus totam? Iure necessitatibus eos exercitationem doloribus iusto magni sed voluptas, ducimus voluptate ab, repellat eum nam debitis dicta.
Lorem ipsum, dolor lorem 100
 sit amet consectetur adipisicing elit. Laudantium amet assumenda explicabo accusamus et ipsum corrupti impedit temporibus optio incidunt, labore eveniet ab soluta quos quas, eaque harum voluptatum praesentium debitis dignissimos libero perspiciatis recusandae ipsam. Harum, minus? Iure dignissimos molestias quaerat aperiam tempore natus dolorum, aliquid nulla saepe vel.
            </p>
               <br/>
               <div className="cr72">
               <video controls src={videohd} width="400px" height="400px"></video>
            <br/>
            </div>
            
            
            <br/>
            <p >Lorem <span style={{backgroundColor: ""}}> ipsum dolor sit  ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid, odit corporis nam eos tempore, architecto laudantium vel adipisci autem reiciendis voluptatibus totam? Iure necessitatibus eos exercitationem doloribus iusto magni sed voluptas, ducimus voluptate ab, repellat eum nam debitis dicta.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span>Laudantium amet assumenda explicabo accusamus et ipsum corrupti impedit temporibus optio incidunt, labore eveniet ab soluta quos quas, eaque harum voluptatum praesentium debitis dignissimos libero perspiciatis recusandae ipsam. Harum, minus? Iure dignissimos molestias quaerat aperiam tempore natus dolorum, aliquid nulla saepe vel.
            </p>
            
            <div className="cr7">
            <audio  controls src={audiomp3}></audio>
            </div>
            <p className="mains">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid, odit corporis nam eos tempore, architecto laudantium vel adipisci autem reiciendis voluptatibus totam? Iure necessitatibus eos exercitationem doloribus iusto magni sed voluptas, ducimus voluptate ab, repellat eum nam debitis dicta.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium amet assumenda explicabo accusamus et ipsum corrupti impedit temporibus optio incidunt, labore eveniet ab soluta quos quas, eaque harum voluptatum praesentium debitis dignissimos libero perspiciatis recusandae ipsam. Harum, minus? Iure dignissimos molestias quaerat aperiam tempore natus dolorum, aliquid nulla saepe vel.
            </p>
            </header>
        </div>
    )
    }