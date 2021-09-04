import React, { useState } from "react";
import axios from 'axios';
const AddImage = () => {

    const [meme, setmeme] = useState({ image: '' });
    console.log(meme);
    // const [image, setImage] = useState(null);
    // console.log(image);

    const handleBlur = (e) => {
        const newMeme = { ...meme };
        newMeme[e.target.name] = e.target.value;
        setmeme(newMeme);
    };

    // const handleImage = (e) => {
    //     const newImage = e.target.files[0];
    //     console.log(newImage)
    //     setImage(newImage);
    // };
    const handleImage = event => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'cc901483d5af9e4fe34505b75ad00754')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                const newMeme = { ...meme };
                newMeme[event.target.name] = response.data.data.display_url;
                setmeme(newMeme);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleSubmit = (e) => {


        const newMeme = { ...meme, uploadDate: new Date().toLocaleDateString() };
        console.log(newMeme)
        fetch("http://localhost:5000/addmeme", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMeme)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    console.log(data);
                    alert("meme added successfully");
                }
            })
            .catch((err) => {
                console.log(err);
            });
        e.preventDefault();
    };

    return (
        <section className="">


            <div className="flex flex-row text-center ">




                <div className=" container flex flex-wrap block py-4 lg:pt-0 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center md:pt-36 sm:pt-36 pt-48">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                                    <div className="flex-auto p-5 lg:p-10">

                                        <div className="relative w-full mb-3 mt-8">
                                            <form onSubmit={handleSubmit}>
                                                <div className="">
                                                    <label className="py-5">
                                                        upload Image
                                                    </label>
                                                    <input
                                                        className="border-0 px-3 py-2  placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                        onChange={handleImage}
                                                        type="file"
                                                        name="image"
                                                    // required=""
                                                    />
                                                </div>
                                                <div className="">
                                                    <label className="py-5">
                                                        Image Url
                                                    </label>
                                                    <textarea
                                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                        onBlur={handleBlur}
                                                        type="text"
                                                        name="image"

                                                    />
                                                </div>

                                                <button
                                                    onClick={() => handleSubmit}
                                                    class="border-2 mt-3 transition duration-500 border-gray-700 w-4/12 py-2 text-center text-xl text-gray-700 bg-transparent rounded-md focus:outline-none "
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default AddImage;