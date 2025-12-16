import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home  from '../pages/Home/Home';

export default function AppRouter() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={ <Login />} />
                <Route path="/home" element={<Home />} />

            </Routes>
        </Router>
    )
}