import React, { useEffect, useState } from 'react'
import Searchbar from '../component/searchbar'
import Axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function RIft() {




    const [lang, setLang] = useState()
    const [searchword, setsearchword] = useState('');
    const [list, setlist] = useState([]);
    const location=useLocation();
    const srch =location.state.srch;

    useEffect(() => {

        Axios.post("http://localhost:1137/api/findword", { srch: srch }).then((response) => {
            if (response.data.msg) {
            
              
                alert("not Found")
                alert(response.data.msg);
                <h2>Not Found !!!!!</h2>


            }

            else { 
                setlist(response.data);

            }
     },[])
    })

    return (
      <>
  <Searchbar/>
          
            <h1 class="fashion_taital"> Result </h1>
                        <div class="fashion_section_2">
                           <div class="row">


            {
                list.map((val) => {
                    return (
                        <>


                            <div class="col-lg-4 col-sm-4">
                                {/* <Link to="/Mainpost" state={{npoid:val._id}}> */}
                                <Link to="/Mainpost" state={{ pl: val._id }}>
                                    <div class="box_main">
                                        {/* <h4 class="shirt_text"> Stem Borer Management in Paddy Farming: Symptoms, Rice Damages, Natural, Organic, Chemical</h4> */}
                                        <h4 class="title_text">{val.post_title}</h4>
                                        {/* <div class="post_img"><img src="/resource/images/stem_borer_770x400.jpg" alt="gg" /></div> */}
                                        <div class="post_img"><img src={"http://localhost:1137/public/" + val.post_file} alt="" /></div>
                                        <p>

                                            {val.post_decrisption.substring(0, 370)}
                                            {/* Welcome to our blog on the topic of stem borer in paddy farming. As a farmer, it's essential to be aware of the pests that can affect your crops and the damage they can cause. Stem borers are a particularly destructive pest when it comes to paddy farming. In this blog, we'll take a closer look at the characteristics of stem borers, the nature of the damage they can cause, and the symptoms to look out for. Stern borer in paddy fields, including its characteristics, the nature of */}
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
        </>)
}
                export default RIft