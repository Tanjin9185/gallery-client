import React, { useState } from "react";
import axios from 'axios';
const AddImage = () => {

    const [meme, setmeme] = useState({ image: '' });
    console.log(meme);


    const handleBlur = (e) => {
        const newMeme = { ...meme };
        newMeme[e.target.name] = e.target.value;
        setmeme(newMeme);
    };


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
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font py-4 md:mx-96 sm:mx-12 sm:border-2 mb-4 md:border-4 border-black text-gray-900">Meme Galary</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-xl underline">See Stats</p>
                </div>
                <form onSubmit={handleSubmit} className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div class="bg-white shadow flex flex-grow w-full">
                        <input
                            onBlur={handleBlur}
                            type="text"
                            name="image"
                            placeholder="Enter meme url"
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <button class="bg-yellow-400 hover:bg-purple-300 py-2 px-4">
                            Add meme
                        </button>
                    </div>
                    <div className="relative flex-grow w-full">
                        <input onChange={handleImage}
                            type="file"
                            name="image" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </form>
            </div>
        </section>

    );
};

export default AddImage;