//取引先マスタ(PartnerMaster)、商品マスタ(ProductMaster)、
//倉庫マスタ(WarehouseMaster)、ロットマスタ（LotMaster)へのリンク
import { useNavigate } from 'react-router-dom';


export default function Master() {
        const navi = useNavigate();
    const toProductMaster = ()=>navi("/master/productMasterPage");
    const toMakerMaster = ()=>navi("/master/makerMasterPage");
    const toPartnerMaster = ()=>navi("/master/partnerMasterPage");
    const toWarehouseMaster = ()=>navi("/master/warehouseMasterPage");
    const toLocationMaster = () => navi("/master/locationMasterPage");


    return (
        <>
            <h1>マスター管理ページ</h1>
            <button type="button" onClick={toProductMaster}>商品マスタ</button>
            <button type="button" onClick={toMakerMaster}>メーカーマスタ</button>
            <button type="button" onClick={toPartnerMaster}>取引先マスタ</button>
            <button type="button" onClick={toWarehouseMaster}>倉庫マスタ</button>
            <button type="button" onClick={toLocationMaster}>積載棚マスタ</button>
        </>
    )
}