import React from "react";
import { useState } from "react";
import Axios from 'axios';


function Subside(){

       
 const current = new Date();
 const upload_date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
 var type=9;
  const[Su_title,setname]=useState('');
  const[Su_description,setdescription] = useState('');
  const [Su_extradescription, setextradescription] = useState('');
  const[Su_subtitle,setsubname]=useState('');
  const[Su_subdescription,setsubdescription] = useState('');
  const[Su_file,setfilename] = useState(""); 
  const[Su_pdffile,setpdffilename] = useState(""); 
  
  const postData=()=>{
    var data = new FormData();
  data.append('Su_pdffile',Su_pdffile);
    data.append('Su_image',Su_file);
  data.append('Su_title',Su_title);
  data.append('Su_description',Su_description);  
  data.append('SU_extradescription',Su_extradescription);
  data.append('Su_subtitle',Su_subtitle);
  data.append('Su_subdescription',Su_subdescription);
  data.append('upload_date',upload_date);
  data.append('type',type);
 // for (var pair of data.entries()) {
 //   console.log(pair[0]+ ', ' + pair[1]+','+ pair[2]); 
//}

      var config = {
      headers: {
      'Content-Type': 'multipart/form-data'
        },
      };

    Axios.post('http://localhost:1137/api/upload_subside',data,config).then((response)=>{
    if(response.data.message)
      {
        alert(response.data.message);
        window.location = "/Manage_subside" ;
      }
     });
    }


    return(
       <>
       <div class="pcoded-main-container">
        <div class="pcoded-wrapper">
            <div class="pcoded-content">
                <div class="pcoded-inner-content">
                    <div class="main-body">
                        <div class="page-wrapper">
                           <div class="page-header">
                                <div class="page-block">
                                    <div class="row align-items-center">
                                        <div class="col-md-12">
                                            
                                        <div class="page-header-title">
                                                <h5 class="m-b-10">Upload Subside</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                     <div class="row">
                      <div class="col-sm-12">
                       <div class="card">
                        <div class="card-body">
                         <div class="row">
                          <div class="col-md-6">
                           
                                                       <div class="form-group">
                                                            <label for="Text" class="form-label form-label-top form-label-auto">Title:&nbsp;</label>
                                                            <input type="text" id="input_8" name="titlename" class="form-control"  placeholder="Title Name" data-component="text" aria-labelledby="label_8" size="134.5" required="?" onChange={(e) => setname(e.target.value)}/>
                                                           </div>


                                                        <div class="form-group">
                                                           <label class="form-label form-label-top form-label-auto">Description:&nbsp;</label>
                                                           <textarea id="input_4" class="form-control" name="q4_message4" cols="28" rows="6" data-component="textarea" aria-labelledby="label_4" onChange={(e) => setdescription(e.target.value)}/>
                                                        </div>
                                                        <div class="form-group">
                                <label class="form-label form-label-top form-label-auto">Extra-Description:&nbsp;</label>
                                <textarea id="input_4" class="form-control" name="q4_message4" cols="28" rows="6" data-component="textarea" aria-labelledby="label_4" onChange={(e) => setextradescription(e.target.value)} />
                              </div>

                                                        <div class="form-group">
                                                            <label for="Text" class="form-label form-label-top form-label-auto">Subtitle:&nbsp;</label>
                                                            <input type="text" id="input_8" name="titlename" class="form-control"  placeholder="Title Name" data-component="text" aria-labelledby="label_8" size="134.5" onChange={(e) => setsubname(e.target.value)}/>
                                                           </div>


                                                        <div class="form-group">
                                                           <label class="form-label form-label-top form-label-auto">Subdescription:&nbsp;</label>
                                                           <textarea id="input_4" class="form-control" name="q4_message4" cols="28" rows="6" data-component="textarea" aria-labelledby="label_4" onChange={(e) => setsubdescription(e.target.value)}/>
                                                        </div>

                                                        <div class="form-group" data-type="control_fileupload" id="id_11"><label class="form-label form-label-top form-label-auto" id="label_11" for="input_11"> </label>
                                                         <div id="cid_11" class="form-input-wide">
                                                          <div data-wrapper-react="true">
                                                           <div data-wrapper-react="true">
                                                            <div class="form-label form-label-top form-label-auto">Browse Files IMG:&nbsp;
                                                             <input type="file"  class="form-upload-multiple" multiple  onChange={(e) => setfilename(e.target.files[0])}/>
                                                            </div>
                                                           </div>
                                                          </div>
                                                         </div>
                                                        </div>



                                                        <div class="form-group" data-type="control_fileupload" id="id_12"><label class="form-label form-label-top form-label-auto" id="label_12" for="input_12"> </label>
                                                         <div id="cid_12" class="form-input-wide">
                                                          <div data-wrapper-react="true">
                                                           <div data-wrapper-react="true">
                                                            <div class="form-label form-label-top form-label-auto">Browse FilesPDF
                                                            :&nbsp;
                                                             <input type="file"  class="form-upload-multiple" multiple  onChange={(e) => setpdffilename(e.target.files[0])}/>
                                                            </div>
                                                           </div>
                                                          </div>
                                                         </div>
                                                        </div>
                                                        
                                                        <button type="submit" class="btn btn-primary" onClick={postData}>Submit</button>
                                                        
                                                    
                                                    </div>
                                                    <div class="col-md-6">
                                                    <form>
                                                      <a><img src="./resources/assets/images/scheme.jpg" alt="" class=" pic"/></a>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
       </>
       );

    }export default Subside;