import React from "react";

const Login = () => {
  return (
    <div className="h-screen">
    <div className="m-auto my-20 w-4/5 rounded-xl flex shadow-xl h-4/5">
      <div className="w-1/2 h-full rounded-l-xl text-center flex flex-col justify-evenly p-8">
        <div className="text-3xl font-bold">LOGIN</div>
        <div className="text-sm">Want to Book an Appointment ?</div>
  
        <div className=" w-7/12 rounded-xl flex cursor-pointer items-center border-2 mx-auto">
          <img src="user.png" className="pl-3 h-7" />
          <input
            type="text"
            className="w-3/4 focus:outline-none pl-5 rounded-xl block h-10"
            placeholder="Username"
          />
        </div>
  
        <div className=" w-7/12 rounded-xl flex items-center cursor-pointer border-2 mx-auto mt-4">
          <img src="padlock.png" className="pl-3 h-7" />
          <input
            type="password"
            className="w-3/4 focus:outline-none pl-5 rounded-xl block h-10"
            placeholder="Password"
          />
        </div>
  
        <div className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white w-7/12 rounded-xl py-2 mx-auto mt-4">
          Login Now
        </div>
  
        <div className="text-sm mt-4 cursor-pointer">Get otp?</div>
  
        <div className="flex text-center justify-evenly border-2 w-7/12 h-auto p-2 rounded-xl mx-auto mt-2">
          <img src="google.png" className="pl-5 h-8" />
          <div className="self-center cursor-pointer">Login with <b>google</b></div>
        </div>
       
      </div>
      <div className="lg:w-1/2 h-full rounded-r-xl bg-gradient-to-r from-blue-500 to-purple-600 text-center relative lg:flex lg:flex-col lg:justify-center p-8 sm:hidden">
        <div ><img src="doctor.jpg"  />
         
        </div>
        <div className="absolute bottom-8 right-8">
          
        </div>
      </div>
    </div>
  </div> 
  );
};

export default Login;
