import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const { currentUser } = useSelector(state => state.user)
    return (
        <div className='max-w-lg p-3 mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Profile</h1>
            <form className='flex flex-col gap-4'>
                <img src={currentUser.avatar} alt="Profile"
                    className='h-24 w-24 rounded-full object-cover cursor-pointer self-center mt-2' />
                <input type="text" placeholder='Username' id='username'
                    className='border bg-white p-3 rounded-lg border-slate-500' />
                <input type="email" placeholder='Email' id='email'
                    className='border bg-white p-3 rounded-lg border-slate-500' />
                <input type="password" placeholder='Password' id='password'
                    className='border bg-white p-3 rounded-lg border-slate-500' />
                <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Update</button>
            </form>
            <div className='flex justify-between mt-5'>
                <span className='text-red-700 cursor-pointer'>Delete account</span>
                <span className='text-red-700 cursor-pointer'>Sign out</span>
            </div>
        </div>
    )
}
