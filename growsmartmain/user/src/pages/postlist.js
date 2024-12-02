import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useHistory } from "react-router-dom";
function Postlist() {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Set the number of items to display per page




  useEffect(() => {
    axios.get("http://localhost:1137/api/agriculture_fetch").then((response) => {
      console.log(response.data);
      setList(response.data);
    });
  }, []);
 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = list.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div class="fashion_section">
        <div class="container">
          <h1 class="fashion_taital"> Agriculture </h1>
          <div class="fashion_section_2">
            <div class="row">
              {currentItems.map((val) => (
                <>
                  <div class="col-lg-4 col-sm-4">
                    <Link to="/Mainpost" state={{ pl: val._id }}>
                      <div class="box_main">
                        <input type="hidden" value={val._id} />

                        <h4 class="title_text">{val.post_title}</h4>

                        <div class="post_img">
                          <img src={"http://localhost:1137/public/" + val.post_file} alt="" />
                        </div>
                        <p>{val.post_decrisption.substring(0, 370)}</p>
                        <div class="btn_main">
                          <div class="buy_bt">See More</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              ))}
            </div>

            {/* Pagination buttons */}
            <div>
  <button   style={{     border: "1px solid #ccc",
      borderRadius: "5px",
      margin: "5px",
      padding: "10px",}}   onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
    &lt; {/* Left arrow */}
  </button>

  {Array.from({ length: Math.ceil(list.length / itemsPerPage) }).map((_, index) => (
    <button
      key={index}
      onClick={() => handlePageChange(index + 1)}
      style={{     border: "1px solid #ccc",
      borderRadius: "5px",
      margin: "5px",
      padding: "10px",
      backgroundColor: currentPage === index + 1 ? "#007bff" : "#fff",
      color: currentPage === index + 1 ? "#fff" : "#007bff",
      cursor: "pointer",  fontWeight: index + 1 === currentPage ? 'bold' : 'normal' }}
    >
      <p style={{ margin: 0 }}>{index + 1}</p>
    </button>
  ))}

  <button  style={{     border: "1px solid #ccc",
      borderRadius: "5px",
      margin: "5px",
      padding: "10px",}} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(list.length / itemsPerPage)}>
    &gt; {/* Right arrow */}
  </button>
</div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Postlist;
