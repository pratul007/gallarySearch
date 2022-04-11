import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { DataContext } from "../context/ImageContext";

export default function Search() {
    const { register, handleSubmit } = useForm();
    const { setImages } = useContext(DataContext);
    const onSubmit = data => {
        const tag = data.searchText
        if (tag) {
            axios
                .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&text=${tag}&format=json&nojsoncallback=1`)
                .then((res) => {
                    let photoArray = []
                    res.data.photos.photo.forEach((photo) => {
                        let photoObj = {
                            url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
                            title: photo.title
                        }
                        photoArray.push(photoObj)
                    })
                    setImages(photoArray)
                }).catch((error) => console.log(error))
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className="search"
                    placeholder="Search for images" {...register("searchText")}></input>
                <input
                    className="sub"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    )
}