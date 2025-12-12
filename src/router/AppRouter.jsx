import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home  from '../pages/Home/Home';
import IncomingSlip from '../pages/IncomingSlip/IncomingSlip';
import OutgoingSlip from '../pages/OutgoingSlip/OutgoingSlip';
import InventoryList from '../pages/InventoryList/InventoryList';
import Master from '../pages/Master/Master';
import SlipHistory from '../pages/SlipHistory/SlipHistory';
import Header from '../components/Header';


export default function AppRouter(){
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={ <Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/incoming" element={<IncomingSlip />} />
                <Route path="/outgoing" element={<OutgoingSlip />} />
                <Route path="/inventory" element={<InventoryList />} />
                <Route path="/slipHistory" element={<SlipHistory />} />
                <Route path="/master" element={<Master />} />
            </Routes>
        </Router>
    )
}