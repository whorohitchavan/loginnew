import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { HiOutlineEyeOff, HiOutlineChevronLeft } from "react-icons/hi";
import logo from '../images/logo.png';
import authBg from '../images/bg-auth.jpg';
import dashMockup from '../images/dash-mockup.jpg';
import { supabase } from "./supabase";
import "./signup.css"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const { error } = await supabase.auth.s({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      }

      const { data, error: insertError } = await supabase
        .from('users')
        .upsert([
          {
            email: email,
            password: password,
          },
        ], { onConflict: ['email'] });

      if (insertError) {
        throw insertError;
      }

      alert("Check your email for a verification link");
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
    <div className='grid sm:grid-cols-2 '>
  <div className='col-span-full fixed w-screen z-10 sm:text-white flex items-center justify-between py-2 sm:px-24 px-2'>
    <div><img src={logo.src} alt='' className='object-cover h-20' /></div>
    <div className='flex items-center'><HiOutlineChevronLeft className='me-2 cursor-pointer' /> Back to Home</div>
  </div>
  <div className='h-screen grid content-center justify-center'>
    <div className=''>
      <h1 className='text-3xl font-bold mb-6'>Sign in</h1>
      <form className="flex flex-col gap-4 md:w-96" onSubmit={handleSignIn}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email address" />
          </div>
          <TextInput 
            id="email" 
            type="email" 
            required 
            shadow
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-400 rounded-lg p-0.5 flowbite-text-input" // Adjusted radius and padding here
            style={{ width: '380px', height: '40px' }}  // Adjusted width of the text box
          />
        </div>
              
                <div className="mb-2 block ">
                  <Label htmlFor="password" value="Password" />
                </div>
                <div className='relative '>
 
  <TextInput 
    id="password" 
    type="password" 
    required 
    shadow
    onChange={(e) => setPassword(e.target.value)}
    className="border-gray-400 rounded-lg p-0.5 flowbite-text-input " // Adjusted radius and padding here
    style={{ width: '380px', height: '40px' }} // Adjusted width and height of the text box
  />
  <HiOutlineEyeOff className='absolute right-4 top-3 cursor-pointer' />
</div>

              <div className="flex items-center justify-between gap-2">
                <div className='flex items-center'>
                  <Checkbox id="agree" />
                  <Label htmlFor="agree" className="flex ms-2">Remember me</Label>
                </div>
                <div>
                  <Label className="flex">Forget Password</Label>
                </div>
              </div>
              <div className='mt-5'>
              <Button type="submit" className='rounded-full w-full bg-indigo-600 hover:-translate-y-1 transition-all duration-300 h-14 button-signin'>
                  <span className='text-xl'>Sign in</span>
                </Button>
              </div>
              <div className='text-center mt-5'>
                <h2>Don't have account yet? <a to='/signup' className='text-indigo-700 font-medium underline decoration-solid'>Sign up</a></h2>
              </div>
            </form>
          </div>
        </div>
        <div className='relative overflow-hidden'>
          <img src={authBg.src} alt='' className='h-screen w-screen object-cover' />
          <img src={dashMockup.src} alt='' className='h-96 rounded-3xl absolute top-0 right-0 translate-y-28 translate-x-40' />
        </div>
      </div>
    </>
  );
};

export default SignIn;
