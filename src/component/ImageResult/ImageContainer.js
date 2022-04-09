import axios from "axios";
import React, { useState } from "react";

export default function ImageContainer() {
    const [images, setImages] = useState([])
    const Images = () => {
        axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=08ca9e5d18d7b5d967f7b9738a4fedc3&tags=dog&format=json&nojsoncallback=1&api_sig=f8e801abe6c66be999dd7ea5bcd519a9")
            .then((res) => {
                console.log(res, "response")
                setImages(res.data.photos.photo)
            })
        // console.log(images, "hitted")

    }
    return (
        <>
            <div>
                {Images}
                {/* <button className="btn btn-round btn-primary button but" onClick={Images}>
                    Get data
                </button> */}
            </div>
            <div className="container">
                {
                    images?.map((val) => {
                        console.log(val, "values")
                        // const url ='http://farm'`${val.farm}`'.staticflickr.com/'`${val.server}`'/'`${val.id}`'_'`${val.serect}`'.jpg';
                        return (
                            <>
                                <img img src={val.farm} alt={val.farm}></img>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}