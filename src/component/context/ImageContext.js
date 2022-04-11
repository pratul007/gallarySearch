import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

// Create Context Object
export const DataContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const DataContextProvider = props => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getImages();
    }, []);

    const getImages = () => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${process.env.REACT_APP_API_KEY}&format=json&nojsoncallback=1`)
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
    };

    return (
        <div>
            <DataContext.Provider
                value={{
                    images,
                    setImages,
                }}
            >
                <>{props.children}</>
            </DataContext.Provider>
        </div>
    );
};
