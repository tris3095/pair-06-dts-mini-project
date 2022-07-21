import React from 'react'
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from "@mui/icons-material/Person";

export const Header = () => {
  return (
    <nav className="bg-black">
        <div className="py-6 px-4 mx-auto max-w-screen-xl md:px-6 grid grid-cols-12 gap-4">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className='col-span-5 py-2'>
                <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm">
                    <li>
                        <Link to="/" className="text-white hover:font-bold" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white hover:font-bold">Series</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white hover:font-bold">Movies</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white hover:font-bold">New and Popular</Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white hover:font-bold">My List</Link>
                    </li>
                </ul>
            </div>
            <div className='col-end-13 col-span-5 py-2'>
                <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm">
                    <li>
                        <SearchIcon
                            fontSize="small"
                            sx={{ color: "white", margin: "auto" }}
                        />
                    </li>
                    <li>
                        <Link to="/" className="text-white hover:font-bold">Tris dan Imam</Link>
                    </li>
                    <li>
                        <CardGiftcardIcon
                            fontSize="small"
                            sx={{ color: "white", margin: "auto" }}
                        />
                    </li>
                    <li>
                        <NotificationsIcon
                            fontSize="small"
                            sx={{ color: "white", margin: "auto" }}
                        />
                    </li>  
                    <li>
                        <PersonIcon
                            fontSize="small"
                            sx={{ color: "white", margin: "auto" }}
                        />
                    </li>  
                </ul>
            </div>
        </div>
    </nav>
    )
}

