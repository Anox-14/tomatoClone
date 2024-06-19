import React from "react";

const ZomatoApp = ({view}) => {
  return (
    <>
      {/* // upperSection */}
      {view ?<div className="bgcol border mt-[7rem] min-h-[60vh] w-screen py-[5rem]  ">
        <div className="flex  justify-center gap-4 ">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
            className="h-[20rem] w-[18rem]"
            alt=""
          />
          <div className=" p-4 min-h-[40vh] max-w-[40vw]">
            <h1 className="text-[3rem] ">Get the Zomato app</h1>
            <h4 className="text-[1.2rem]">
              We will send you a link, open it on your phone to download the app
            </h4>
            <div className="detail mt-5">
              {/* //redio */}
              <div>
                <input type="radio" checked name="check" id="email"  className="text-pink accent-pink-600"/>
                <label className="ml-4 text-lg" htmlFor="email">Email</label>
                <input className="ml-4 accent-pink-600 text-lg" type="radio" name="check" id="phone" />
                <label  className="ml-4 text-lg" htmlFor="phone">Phone</label>
              </div>
              {/* //input */}
              <div className="mt-5">
                <input type="text" placeholder='Email'  className="border p-2 rounded"/>
                <input type="button" value="Share App  Link"  className="rounded bg-pink-600 p-2 text-white ml-3"/>
              </div>
              <h4 className="mt-4">Download app from</h4>
              <div className="flex gap-4 mt-3" >
                <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" className="h-9 w-[6rem]"/>
                <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" className="h-9 w-[6rem]"/>
              </div>

            </div>
          </div>
        </div>
      </div> : null}
      {/* // random */}
      
    </>
  );
};

export default ZomatoApp;
