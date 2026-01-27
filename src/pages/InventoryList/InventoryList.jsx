

import { useState } from 'react';

import '../../css/inventoryList.css';

export default function InventoryList() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="inventory-header">
                <h3 className="header-item gold">新規商品追加</h3>
                <h3 className="header-item black">在庫情報</h3>

                <div className="dropdown-wrapper">
                    <h3
                        className="header-item black"
                        onClick={() =>setOpen(!open) }
                    >
                        入庫/出庫
                    </h3>

                    <div className={`dropdown-menu ${open ? 'open' : ''}`}>
                        <div className="dropdown-item">入庫</div>
                        <div className="dropdown-item">出庫</div>
                    </div>
                </div>
                <h3 className="header-item black">管理データ</h3>
            </div>
        </>
    )
}