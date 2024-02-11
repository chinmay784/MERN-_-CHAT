import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const Signup = () => {
  return (
    <div className=' flex flex-col justify-center items-center min-w-96 mx-auto '>

      <div className=' w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mb-3'>
       
       <h1 className=' text-3xl font-semibold text-center text-gray-300'>
        Sign Up
        <span className=' text-blue-500'>ChatApp</span>
       </h1>



      <form>

        <div className=' mt-4'>
          <label className=' label p-2'>
            <span className=' text-base label-text'>Full Name</span>
          </label>

          <input type=' text' placeholder='Enter fullname' className=' w-full input input-bordered h-10'/>
        </div>

        <div className=' mt-4'>
          <label className=' label p-2'>
            <span className=' text-base label-text'>User Name</span>
          </label>

          <input type=' text' placeholder='Enter username' className=' w-full input input-bordered h-10'/>
        </div>


        <div className=' mt-4'>
          <label className=' label p-2'>
            <span className=' text-base label-text'>Password</span>
          </label>

          <input type=' password' placeholder='Enter fullname' className=' w-full input input-bordered h-10'/>
        </div>

        <div className=' mt-4'>
          <label className=' label p-2'>
            <span className=' text-base label-text'>Confrim Password</span>
          </label>

          <input type=' password' placeholder='Enter fullname' className=' w-full input input-bordered h-10'/>
        </div>



        <GenderCheckBox />


        <a href='#' className=' text-sm hover:underline hover: text-blue-600 mt-4 inline-block'>Already have an account?</a>



        <div>
          <button className=' btn btn-block btn-sm mt-2 border-slate-700'>sign up</button>
        </div>


        


      </form>

      </div>

    </div>
  )
}

export default Signup