//取引先マスタ(PartnerMaster)、商品マスタ(ProductMaster)、
//倉庫マスタ(WarehouseMaster)、ロットマスタ（LotMaster)へのリンク
import { useNavigate } from 'react-router-dom';

export default function Master() {
    const navi = useNavigate();
    const naviToWarehouseMaster = () => navi("/master/warehouseMaster");


    return (
        <>
            <h1>マスター管理ページ</h1>
            <button onClick={naviToWarehouseMaster}>倉庫</button>
        </>
    )
}