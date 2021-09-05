import React, { useEffect, useState } from 'react';
import RiseLoader from "react-spinners/RiseLoader";
import { css } from '@emotion/react';
import AddImage from '../AddImage/AddImage';

const Gallery = () => {
    const override = css`
         margin: 0 auto;
    `;

    const [manageImage, setmanageImage] = useState([]);
    console.log(manageImage)

    useEffect(() => {
        fetch('https://afternoon-citadel-62299.herokuapp.com/picturs')
            .then(res => res.json())
            .then(data => {
                setmanageImage(data);

            })
    }, [])

    const handleDelete = (id) => {
        id && fetch(`https://afternoon-citadel-62299.herokuapp.com/picturs/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .then(error => {
                console.log(error)
            })
        alert("Image deleted successfully")
    }

    return (
        <div> <div>
            <AddImage></AddImage>
        </div>
            <div className="flex flex-row">

                <div className='text-center'>
                    {
                        manageImage.length === 0 && <div className="flex items-center text-center"> <RiseLoader css={override} color='#808080'></RiseLoader></div>
                    }

                </div>

                <div className='container flex flex-wrap text-center'>

                    {manageImage.map(images => {
                        return (
                            <div key={images._id} className="p-6 md:w-1/2 lg:w-1/3 ">
                                <div className="shadow-xl  rounded-xl bg-blueGray-50 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-auto md:h-1/3 sm:w-full object-cover object-center" src={images.image} alt="images" />
                                    <div className="p-6">

                                        <div className="flex items-center flex-wrap bg-gray-200 rounded-b-xl">

                                            <button
                                                className=" px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => handleDelete(images._id)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    );
};

export default Gallery;