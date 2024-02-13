import React, { useState } from 'react'
import {IoSearchSharp} from "react-icons/io5"
import useConverjation from '../../zustand/useConverjation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {

  const [search,setSearch] = useState("");
  const {setselectedConversation} = useConverjation()
  const {conversation} = useGetConversation()


  const handelsuBmit = async (e) =>{
    e.preventDefault();
    if(!search) return;

    if(search.length <3 ){
      toast.error("search term must be 3 character")
    }

    const converSation = conversation.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(converSation){
      setselectedConversation(converSation)
      setSearch("")
    }else{
      toast.error("user Not found")
    }
  }


  return (
    <form className=' flex items-center gap-2' onSubmit={handelsuBmit}>
        <input type='text' className=' input input-bordered rounded-full' placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />

        <button type='submit' className=' btn btn-circle bg-sky-500 text-white'>

         <IoSearchSharp className=" w-6 h-6 outline-none " />
        

        </button>
    </form>
  )
}

export default SearchInput