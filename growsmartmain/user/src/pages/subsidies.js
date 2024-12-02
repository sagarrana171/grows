import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Searchbar from '../component/searchbar'

function Subsidies() { const[list, Setlist]=useState([]);

  useEffect(()=>{
  
    Axios.get('http://localhost:1137/api/subside_fetch').then((response)=>
    {
      Setlist(response.data)
    },[])
  })
  
      return(
  <>

  <Searchbar/>
  <h1 class="fashion_taital">Subsidies  </h1>

  {list.map((val)=>{
    return(
      <>
      <Link to ="/Mainschemes" state={{scsb:val._id}} >
  <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
           
            <div class="listpostimg"><img src={"http://localhost:1137/public/"+val.post_file}  alt="hh" /></div> 
            </div>
            <div class="col-md-8">
              <div class="card-body">
  
                <h5 class="card-title">{val.post_title}</h5>
                <p class="card-text"> {val.post_decrisption.substring(0, 270)} 
  </p>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
               
              </div>
            </div>
          </div>
        </div>
        </Link>
  
        </>
    )
  })}
  </>
      )
  
}

export default Subsidies