import Home from './component/Home';
import './App.css'
import {DataContextProvider} from "./component/context/ImageContext";

function App() {
    return (
        <DataContextProvider>
            <>
                <Home/>
            </>
        </DataContextProvider>
    );
}

export default App;
