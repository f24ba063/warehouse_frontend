import '../../../css/warehouse_in_out.css';
import { useState, useEffect } from 'react';

export default function ProductMaster() {
    const [rows, setRows] = useState([]);




    return (
        <>
            <h2>商品マスター</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>商品名</th>
                        <th>重量単位</th>
                        <th>安全在庫</th>
                        <th>最小発注数</th>
                        <th>ロット管理</th>
                        <th>発売フラグ</th>
                        <th>削除</th>
                    </tr>
                </thead>
                <tbody>
                    {response}
                </tbody>
            </table>
        </>
    )

}