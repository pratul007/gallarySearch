import React, { useContext } from "react";
import { DataContext } from "../context/ImageContext";

export default function ImageContainer() {
    const { images } = useContext(DataContext);
    return (
        <>
            <div>
            </div>
            <div className="container">
                {
                    images?.map((photo) => {
                        return (
                            < >
                                <img className="img-size" img src={photo.url} alt={photo.title} ></img>
                            </>

                        )
                    })
                }
            </div>
        </>
    )
}