

import { useState } from 'react';
import SearchPopup from './SearchPopup';
import '../../css/inventoryList.css';

export default function InventoryList() {

    const [openIvInfo, setOpenIvInfo] = useState(false);
    const [openWhMove, setOpenWhMove] = useState(false);
    const [openMgmt, setOpenMgmt] = useState(false);

    const [openSearch, setOpenSearch] = useState(null);

    const columns = [
        { key: "code", label: "商品コード", type: "text" },
        { key: "name", label: "商品名", type: "text" },
        { key: "stock", label: "在庫数", type: "number" },
        { key: "alloc", label: "引当可能", type: "number" },
        { key: "safe", label: "安全在庫", type: "number" },
        { key: "unit", label: "単位", type: "text" },
        { key: "lot", label: "ロット", type: "text" },
        { key: "location", label: "保管場所", type: "text" },
        { key: "updated", label: "最終更新日", type: "date" },
    ];

    return (
        <>{/*在庫情報、入庫出庫処理など、機能ボタン部分の描画*/ }
            <div className="inventory-header">
                <h3 className="header-item gold">新規商品追加</h3>

                {/*在庫情報ボタンを押したら「在庫一覧」「発注点切れ」など出てくる */}
                <div className="dropdown-wrapper">
                    <h3
                        className="header-item black"
                        onClick={() => {
                            setOpenIvInfo(!openIvInfo);
                            setOpenWhMove(false);
                            setOpenMgmt(false);
                        }}
                    >
                        在庫情報
                    </h3>

                    <div className={`dropdown-menu ${openIvInfo ? 'open' : ''}`}>
                        <div className="dropdown-item">在庫一覧</div>
                        <div className="dropdown-item">発注点切れ在庫一覧</div>
                        <div className="dropdown-item">削除在庫一覧</div>
                    </div>
                </div>
                {/*在庫情報ボタンを押したら「在庫一覧」「発注点切れ」など、ここまで */}

                <div className="dropdown-wrapper">
                    <h3
                        className="header-item black"
                        onClick={() => {
                            setOpenIvInfo(false);
                            setOpenWhMove(!openWhMove);
                            setOpenMgmt(false);
                        }}
                    >
                        入庫/出庫
                    </h3>

                    <div className={`dropdown-menu ${openWhMove ? 'open' : ''}`}>
                        <div className="dropdown-item">入庫</div>
                        <div className="dropdown-item">出庫</div>
                    </div>
                </div>

                <div className="dropdown-wrapper">
                    <h3
                        className="header-item black"
                        onClick={() => {
                            setOpenIvInfo(false);
                            setOpenWhMove(false);
                            setOpenMgmt(!openMgmt);
                        }}
                    >
                        管理データ
                    </h3>

                    <div className={`dropdown-menu ${openMgmt ? 'open' : ''}`}>
                        <div className="dropdown-item">メーカー</div>
                        <div className="dropdown-item">カテゴリ</div>
                        <div className="dropdown-item">管理温度</div>
                    </div>
                </div>
            </div>
            {/*機能ボタン部分の描画、ここまで*/}

            {/*実際の倉庫内の情報＋庫内物ヘッダー*/}
            <div>
                <table className="inventory-table">
                    <thead className="inventory-table">
                        <tr>
                            {columns.map(c => (
                                <th key={c.key} style={{ position: "relative" }}>
                                    <span
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setOpenSearch(c.key)}
                                    >
                                        {c.label}
                                    </span>

                                    {openSearch == c.key && (
                                        <SearchPopup
                                            type={c.type}
                                            label={c.label}
                                            onClose={() => setOpenSearch(null)}
                                        />
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>P-0001</td>
                            <td>テスト商品A（名称長め）</td>


                            <td className="stock-qty stock-left">100</td>
                            <td className="stock-qty stock-right">80</td>

                            <td>60</td>
                            <td>個</td>
                            <td>LOT-A1</td>
                            <td>A-01-02</td>
                            <td>2026/01/28</td>
                        </tr>


                        <tr>
                            <td>P-002345</td>
                            <td>短名B</td>


                            <td className="stock-qty stock-left">12,345</td>
                            <td >
                                <span className="stock-qty stock-right stock-warning">
                                    9,800
                                </span>
                            </td>

                            <td>10000</td>
                            <td>箱</td>
                            <td>LOT-XYZ-99</td>
                            <td>B-12-08</td>
                            <td>2026/01/15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/*実際の倉庫内の情報＋庫内物ヘッダー、ここまで*/}
        </>
    )
}