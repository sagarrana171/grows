function App() {
    return (
    <>
      { localStorage.getItem('admin') == null?
      <>
      {/* <Login/> */}
      <Router>
      <Routes>
      <Route exact path="/login" element={<Login/>}/>
      
  
      </Routes>
      </Router>
  
      </>
  :<>
           <div>
            <Router>
         <Header/>
  <Routes>
  <Route exact path="/" element={<Dashboard/>} />
  <Route exact path="/addproduct" element={<Addproduct/>} />
  <Route exact path="/addcategory" element={<Addcategory/>}/>
  {/* <Route exact path="/addpurchase" element={<Addpurchase/>}/> */}
  <Route exact path="/users" element={<Users/>}/>
  <Route exact path="/addusers" element={<Addusers/>}/>
  <Route exact path="/addsuppliers" element={<Addsuppliers/>}/>
  <Route exact path="/suppliers" element={<Suppliers/>}/>
  <Route exact path="/invoice" element={<Invoice/>}/>
  <Route exact path="/resetpass" element={<Resetpass/>}/>
  <Route exact path="/listproduct" element={<Listproduct/>}/>
  <Route exact path="/listcategory" element={<Listcategory/>}/>
  <Route exact path="/listpurchase" element={<Listpurchase/>}/>
  <Route exact path="/register" element={<Register/>}/>
  
  
  </Routes>
     
  
  <Footer/>
   </Router>
     
    </div>
  </>
  }
  </>
    );
  }