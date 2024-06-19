import React, { useState, useEffect } from "react";



const Middle = ({ getData }) => {
  const [food, setFood] = useState(false);
  const [cartval, setCartval] = useState('');
  const [fooddata, setFooddata] = useState([]);
  const [cart, setCart] = useState([]);
  const jsonData = async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    // console.log(data.recipes);
    setFooddata(data.recipes);
    // console.log(fooddata);
  };
  useEffect(() => {
    jsonData();
  }, []);

const handleclick =  (e)=>{
  console.log(e)
  setCart([...cart,e]);
  if(cart.length >= 2){
    cart.sort()
    for(let i = 0; i < cart.length; i++){
      if(cart[i] == cart[i+1]){
        cart.splice(i,2)
      }
    }
    
  }
  
  console.log(cart);
  
  
  setCartval(`${cart.length}`)
}
  return (
    <div className="px-[8rem] pt-11 min-h-[50vh] relative ">
      {/* //FoodDetail */}
      {food && (
        <div className=" p-4 absolute left-0 top-0 h-[100vh] w-[100vw] bg-white ">
          <div className="w-full h-5 flex justify-between">
            <h1 className="text-3xl font-bold">Order Food</h1>
            <i
              onClick={() => {
                setFood(false);
                getData(food);
              }}
              className="text-3xl mr-4 h-[35px] rounded-full text-white bg-pink-600 cursor-pointer bx bx-x"
            ></i>
            {cartval}
          </div>

          <div className="w-full h-full mt-5 p-3 flex gap-2 shrink-0 flex-wrap">
            {fooddata.map((itm) => {
              return (
                <div key={itm.id} onClick={()=>{
                  handleclick(itm.id)
                }} className="h-[150px] bg-slate-300 hover:scale-105 ease-out duration-300  rounded w-[100px] flex flex-col items-center p-3">
                  <img className="w-[60px] rounded h-[60px]" src={itm.image} alt="" />
                  <span className="text-sm">{itm.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {food ? null : (
        <>
          <div
            onClick={() => {
              setFood(true);
              getData(food);
            }}
            className="div flex justify-between"
          >
            <div className="h-[40vh] hover:scale-110 ease-in duration-300 rounded-2xl w-[25vw] bg-white rounded-t-2xl overflow-hidden border border-slate-300">
              <img
                src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                className="h-[10rem] w-[25vw] object-cover "
                alt=""
              />
              <div className="mt-4 ml-5">
                <h3 className="text-[20px] font-semibold"> Order Online</h3>
                <h5>Stay home and orderto your doorstep</h5>
              </div>
            </div>
            <div className="h-[40vh] hover:scale-110 ease-in duration-300 rounded-2xl w-[25vw] bg-white rounded-t-2xl overflow-hidden border border-slate-300">
              <img
                src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                className="h-[10rem] w-[25vw] object-cover "
                alt=""
              />
              <div className="mt-4 ml-5">
                <h3 className="text-[20px] font-semibold"> Dining</h3>
                <h5>View the city's favourite dining venues</h5>
              </div>
            </div>
            <div className="h-[40vh] hover:scale-110 ease-in duration-300 rounded-2xl w-[25vw] bg-white rounded-t-2xl overflow-hidden border border-slate-300">
              <img
                src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
                className="h-[10rem] w-[25vw] object-cover "
                alt=""
              />
              <div className="mt-4 ml-5">
                <h3 className="text-[20px] font-semibold">
                  {" "}
                  Nightlife and clubs
                </h3>
                <h5>Explore the city's top nightlife outlets</h5>
              </div>
            </div>
          </div>

          {/* // section 2 --> Collection */}
          <div className="div mt-9">
            <h1 className="text-[3rem] font-semibold ">Collections</h1>
            <div className="div flex justify-between">
              <h3 className="text-[1.2em]">
                Explore curated lists of top restaurants, cafes, pubs, and bars
                in Mumbai, based on trends
              </h3>
              <h3 className=" text-pink-600">
                All collection in Mumbai{" "}
                <i className="ml-3 text-sm  bx bxs-right-arrow"></i>
              </h3>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="hover:shadow-lg hover:shadow-slate-400 ease-out duration-300 hover:scale-105 h-[49vh] w-[16rem] rounded-md mt-8 overflow-hidden relative ">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnQlMjBkYXJrJTIwc2hhZGV8ZW58MHx8MHx8fDA%3D"
                className="w-full h-full object-cover"
                alt=""
              />

              <div className="absolute bottom-5 left-5 text-white ">
                <h3 className="font-bold text-xl tracking-wide">
                  Newly Opened Places
                </h3>
                <h4>
                  9 Place <i className=" text-sm bx bxs-right-arrow"></i>
                </h4>
              </div>
            </div>
            <div className="hover:shadow-lg hover:shadow-slate-400 ease-out duration-300 hover:scale-105 h-[49vh] w-[16rem] rounded-md mt-8 overflow-hidden relative ">
              <img
                src="https://images.unsplash.com/photo-1497644083578-611b798c60f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnQlMjBkYXJrJTIwc2hhZGV8ZW58MHx8MHx8fDA%3D"
                className="w-full h-full object-cover"
                alt=""
              />

              <div className="absolute bottom-5 left-5 text-white ">
                <h3 className="font-bold text-xl tracking-wide">
                  Top tranding Spots
                </h3>
                <h4>
                  26 Place <i className=" text-sm bx bxs-right-arrow"></i>
                </h4>
              </div>
            </div>
            <div className="hover:shadow-lg hover:shadow-slate-400 ease-out duration-300 hover:scale-105 h-[49vh] w-[16rem] rounded-md mt-8 overflow-hidden relative ">
              <img
                src="https://plus.unsplash.com/premium_photo-1670574734662-8f8c3384885d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />

              <div className="absolute bottom-5 left-5 text-white ">
                <h3 className="font-bold text-xl tracking-wide">
                  Best Of Jio World Drive
                </h3>
                <h4>
                  19 Place <i className=" text-sm bx bxs-right-arrow"></i>
                </h4>
              </div>
            </div>
            <div className="hover:shadow-lg hover:shadow-slate-400 ease-out duration-300 hover:scale-105 h-[49vh] w-[16rem] rounded-md mt-8 overflow-hidden relative ">
              <img
                src="https://plus.unsplash.com/premium_photo-1687919501947-1f312343d803?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />

              <div className="absolute bottom-5 left-5 text-white ">
                <h3 className="font-bold text-xl tracking-wide">
                  Best OF Live Screnning
                </h3>
                <h4>
                  73 Place <i className=" text-sm bx bxs-right-arrow"></i>
                </h4>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Middle;
