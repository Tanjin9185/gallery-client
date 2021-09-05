import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import RiseLoader from "react-spinners/RiseLoader";
import Gallery from '../Gallery/Gallery';

const LoadImages = () => {
    const override = css`
         margin: 0 auto;
    `;

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-citadel-62299.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                console.log("datfgfffa", data)
                setBlogs(data)
            })
    }, [])

    return (

        <div className="container mx-auto ">


            <div className="flex flex-wrap sm:flex-grow-1 sm:pl-6">

                {
                    blogs.map(blog => <Gallery blog={blog} ></Gallery>)
                }
            </div>


        </div>

    );
};

export default LoadImages;