
import '../../css/inventoryList.css';
export default function InventoryList() {
    return (
        <>
            <div className="inventory-header">
                <h3 className="header-item gold">新規商品追加</h3>
                <h3 className="header-item black">在庫情報</h3>
                <h3 className="header-item black">入庫/出庫</h3>
                <h3 className="header-item black">管理データ</h3>
            </div>
        </>
    )
}