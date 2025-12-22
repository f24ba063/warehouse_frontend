import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Master from '../pages/Master/Master';
import Header from '../components/Header';
import ProductMasterPage from '../pages/Master/ProductMaster/ProductMasterPage'

export default function AppRouter() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={ <Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/master" element={<Master />} />
                <Route path="/master/productMasterPage" element={<ProductMasterPage />} />
               
            </Routes>
        </Router>
    )
}