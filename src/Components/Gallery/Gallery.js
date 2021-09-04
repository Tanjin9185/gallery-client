import React, { useEffect, useState } from 'react';
import RiseLoader from "react-spinners/RiseLoader";
import { css } from '@emotion/react';

const Gallery = () => {
    const override = css`
         margin: 0 auto;
    `;

    const [manageImage, setmanageImage] = useState([]);
    console.log(manageImage)

    useEffect(() => {
        fetch('http://localhost:5000/picturs')
            .then(res => res.json())
            .then(data => {
                setmanageImage(data);

            })
    }, [])

    const handleDelete = (id) => {
        id && fetch(`http://localhost:5000/picturs/${id}`, {
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
        <div className="flex flex-row">

            {/* <div className="flex flex-wrap sm:flex-grow-1 items-center justify-center mx-auto"> */}
            <div className='text-center'>
                {
                    manageImage.length === 0 && <div className="flex items-center text-center"> <RiseLoader css={override} color='#808080'></RiseLoader></div>
                }

            </div>

            <div className='container flex flex-wrap'>
                {manageImage.map(images => {
                    return (
                        <div key={images._id} className="p-6 md:w-1/2 lg:w-1/3 ">
                            <div className="shadow-xl  rounded-xl bg-blueGray-50 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 sm:w-full object-cover object-center" src={images.image} alt="images" />
                                <div className="p-6">

                                    <div className="flex items-center flex-wrap bg-gray-200 rounded-b-xl">

                                        <button
                                            className="bg-gray-500 text-gray-300 active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => handleDelete(images._id)}
                                        >
                                            Delete
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Gallery;