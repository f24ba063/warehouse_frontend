import WarehouseMaster from './WarehouseMaster';
import WarehouseMasterHeader from './WarehouseMasterHeader';


export default function ProductMasterPage() {
    return (
        <>
            <h2>倉庫マスター</h2>
            <WarehouseMasterHeader />
            <WarehouseMaster />
        </>
    )
}