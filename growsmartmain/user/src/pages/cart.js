import { useState, useEffect } from "react";
import Axios from 'axios'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

function Cart() {
	let user = JSON.parse(localStorage.getItem('mydata'))
	const [initval, orignalpriceproduct] = useState("");
	const [num, setnum] = useState();
	const [currentval, setmainnum] = useState();
	const [list, Setlist] = useState([]);
	 
	const id = user._id;
	const u_email = user.u_email;




	useEffect(() => {
		Axios.get('http://localhost:1137/api/cartlist', {  params: { u_email: u_email } }).then((response) => {
			Setlist(response.data)
			orignalpriceproduct(response.data[0].productinitval);
			setnum(response.data[0].productqty);
			setmainnum(setnum * orignalpriceproduct);

			
		})
	}, []);




	const handlechange = (e) => {
		setnum(e.target.value)
	}

	const mainpriceproduct = (e) => {
		setmainnum(e.target.value)
	}

	const incrnum = () => {
		if (num < 10) {
			var b = Number(num) + 1;
			var c = Number(initval);
			const currentval = b * c;



			setnum(Number(num) + 1);
			setmainnum(Number(currentval));
		}

	}
	// const decrnum = (a) => {
		
		
	// 		setmainnum(Number(a));
	// 		setmainnum = stetmainmun-1	}
	


	const Removecart = () => {

		const location=useLocation();
		const _id =location.state.di;
		alert(_id)
		Axios.post("http://localchost:1137/api/removecart", { _id: _id, }).then((response) => {
			Setlist(response.data)
		})

	}

	const Savecart = (product_id) => {
		const location=useLocation();
		const _id =location.state.pl;
		Axios.post("http://localchost:1137/api/savecart", { u_email: u_email, currentval: currentval, num: num, initval: initval, _id:_id }).then((response) => {
			Setlist(response.data)
		})

	}


	return (
		<>
			<h1>Cart</h1>
			{list.map((val) => {
				return (

					<>
						<div class="card mb-3">
							<div class="row g-0">
								<div class="col-md-4">

									<img src="resource/images/schemes/image-241.png" class="cartimg" alt="hh" />
									<img src="http://localhost:1137/images" class="cartimg" alt="hh" />
								</div>
								<div class="col-md-8">
									<div class="card-body">
										<h5 class="card-title">Agriculture Infrastructure Fund</h5>
										{/* <h5 class="card-title">{val.post_title}</h5> */}
										<div class="counterupdater">
											Price:<input type="text" class="mainvalue" id="orgval" value={val.productinitval } onChange={orignalpriceproduct} />

											<button class="decrementbtn" id="btndecrement"  >-</button>
											<input type="text" class="incrval" id="noofval" value={val.productqty} onChange={handlechange} />
											<button class="incrementbtn" id="btnincrement" onClick={incrnum} >+</button>


											Total Price:<input type="text" class="mainvalue" id="productval" value={val.productcurentval} onChange={mainpriceproduct} />

											<button class="deletebtn" id="btnincrement" value={val.product_id} state={{di:val._id}} onClick={Removecart} > Remove</button>
											<button class="savelaterbtn" id="btnincrement" value={val.product_id} state={{di:val._id}} onClick={Savecart} > Save For Later</button>

										</div>
										{/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}

									</div>
								</div>
							</div>
						</div>


				   </>
				)

			})}

						<div class="hr">
							<div class="checkout">
								<div class="total">
									<div>
										<div class="Subtotal">Sub-Total</div>
										<div class="items">item</div>
									</div>
									<div class="total-amount">Total </div>
								</div>
								<button class="button">Checkout</button>
							</div>
						</div>
					</>
	)	
   
			
		
	
}

export default Cart