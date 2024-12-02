import React from "react";
import Axois from "axios";
import { useState, useEffect} from "react";
// import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


 import Searchbar from "../../component/searchbar";

function Gardening() {
 
  
 const[list, Setlist] =useState([]);
useEffect(()=>{
    Axois.get('http://localhost:1137/api/gardening_fetch').then((response)=>{
      Setlist(response.data)
    })
},[]);


   return (
      <>
<Searchbar/>
      <div class="fashion_section">
           
                     <div class="container">
                        <h1 class="fashion_taital"> Gardening </h1>
                        <div class="fashion_section_2">
                           <div class="row">
                           {list.map((val)=>{
                              return(
                                 <>

                              <div class="col-lg-4 col-sm-4">
                              <Link to="/Mainpost" state={{pl:val._id}}>
                                 <div class="box_main">
                                 
                                    <h4 class="title_text">{val.post_title}</h4>
                                   
                                    <div class="post_img"><img src={
                                       'http://localhost:1137/public/'+val.post_file}  alt="gg"/></div>
                                    <p>

                                    {val.post_decrisption.substring(0, 270)}
                                    </p>
                                    <div class="btn_main">
                                       <div class="buy_bt">See More</div>
                                    </div>
                                 </div>
                                 </Link>
                              </div>
                             
                              </>
                              )
                           })

                           }
                             
                           </div>
                        </div>

            </div>
</div>
         </>
  )
} export default Gardening