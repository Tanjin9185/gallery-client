import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/mem.png';

const Header = () => {
    return (
        <div className="container items-center ">
            <div className="text-blueGray-700 ">
                <div className="flex flex-col flex-wrap mx-auto md:items-center md:flex-row">
                    <div className="inline-flex items-center">
                        <img src={logo} alt="" />
                    </div>

                    <nav className="flex flex-wrap items-center text-base justify-left ">
                        <ul className="items-center inline-block list-none lg:inline-flex">
                            <li>
                                <Link to="/home" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Home</Link>
                            </li>
                            <li>
                                <Link to="/chart" className="px-4 py-1 mr-1 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-black ">Chart</Link>
                            </li>

                        </ul>
                    </nav>
                    <div className="flex flex-wrap justify-end ml-auto items-en xl:flex-nowrap md:flex-nowrap lg:flex-wrap">
                        <div className="relative w-40 mr-2 sm:w-auto">
                            <input type="text" id="email" name="email" className="w-full px-3 py-1 leading-8 text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-pink focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                        </div>
                        <button className="px-6 py-2 font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md ext-base focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800">Search</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;