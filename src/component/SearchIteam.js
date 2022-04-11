import Home from "./Home";
import { DataContextProvider } from "../component/context/ImageContext";

function SearchIteam() {
    return (
        <DataContextProvider>
            <>
                <Home />
            </>
        </DataContextProvider>
    );
}

export default SearchIteam;
