import React from 'react'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
        <div className="py-6 px-4 mx-auto max-w-screen-xl md:px-6">
            <div className='grid grid-cols-4 gap-4 mb-6'>
                <ul className='space-y-5 text-sm'>
                    <li>
                        <Link to='/'>Audio and Subtitles</Link>
                    </li>
                    <li>
                        <Link to='/'>Media Center</Link>
                    </li>
                    <li>
                        <Link to='/'>Security</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact Us</Link>
                    </li>
                    <li>
                        <button className='border-solid border-2 border-gray-400 p-2 hover:bg-gray-400 hover:text-black'>Service Code</button>
                    </li>
                </ul>
                <ul className='space-y-5 text-sm'>
                    <li>
                        <Link to='/'>Audio Description</Link>
                    </li>
                    <li>
                        <Link to='/'>Investor Relation</Link>
                    </li>
                    <li>
                        <Link to='/'>Legal Provisions</Link>
                    </li>
                </ul>
                <ul className='space-y-5 text-sm'>
                    <li>
                        <Link to='/'>Help Center</Link>
                    </li>
                    <li>
                        <Link to='/'>Jobs</Link>
                    </li>
                    <li>
                        <Link to='/'>Cookie Preferences</Link>
                    </li>
                </ul>
                <ul className='space-y-5 text-sm'>
                    <li>
                        <Link to='/'>Git Cards</Link>
                    </li>
                    <li>
                        <Link to='/'>Term of Use</Link>
                    </li>
                    <li>
                        <Link to='/'>Corporate Information</Link>
                    </li>
                </ul>
            </div>
            <span className='text-sm'>2022 Movies, All Right Reserved</span>
        </div>
    </footer>
  )
}
