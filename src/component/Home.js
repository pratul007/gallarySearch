import React from "react";
import ImageContainer from "./ImageResult/ImageContainer";
import Search from "./SearchBar/Search";

export default function Home() {
    return (
        <>
            <div className="bck">
                Gallery Search App.
            </div>
            <Search />
            <ImageContainer />
        </>
    )
}