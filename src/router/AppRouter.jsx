import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Master from '../pages/Master/Master';
import Header from '../components/Header';
import ProductMasterPage from '../pages/Master/ProductMaster/ProductMasterPage'
import WarehouseMasterPage from '../pages/Master/WarehouseMaster/WarehouseMasterPage'
import MakerMasterPage from '../pages/Master/MakerMaster/MakerMasterPage'
import PartnerMasterPage from '../pages/Master/PartnerMaster/PartnerMasterPage'
import LocationMasterPage from '../pages/Master/LocationMaster/LocationMasterPage'
import InventoryList from '../pages/InventoryList/InventoryList'

export default function AppRouter() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/login" element={ <Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/master" element={<Master />} />
                <Route path="/master/productMasterPage" element={<ProductMasterPage />} />
                <Route path="/master/warehouseMasterPage" element={<WarehouseMasterPage />} />
                <Route path="/master/makerMasterPage" element={<MakerMasterPage />} />
                <Route path="/master/partnerMasterPage" element={<PartnerMasterPage />} />
                <Route path="/master/locationMasterPage" element={<LocationMasterPage />} />
                <Route path="/inventory" element={<InventoryList />} />
            </Routes>
        </Router>
    )
}