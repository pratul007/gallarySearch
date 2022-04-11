import './App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import SearchIteam from './component/SearchIteam';
import About from './component/About';


function App() {
    return (
        <Router>
            <nav className='bck-col'>
                <button className='btn btn-primary btn-stl'><Link to='/'>Home</Link></button>
                <button className='btn btn-primary btn-stl'><Link to='/about'>About</Link></button>
            </nav>
            <Routes>
                <Route exact path='/' element={<SearchIteam />} />
                <Route exact path='/about' element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
