import '../../css/warehouse_in_out.css';
import { useState } from 'react';

const itemMaster = {
    "A001": "鉛筆",
    "A002": "消しゴム",
    "A003": "ノート",

}

export default function OutgoingSlip() {
    const [rows, setRows] = useState([
        { code: "", name: "", quantity: 1, shelf: "", remark: "" },
    ]);
    const [staff, setStaff] = useState("担当者A");
    const [destination, setDestination] = useState("倉庫１");

    const handleChange = (index, field, value) => {
        const newRows = [...rows];
        newRows[index][field] = value;
        setRows(newRows);
    };

    const handleCodeInput = (index) => {
        const newRows = [...rows];
        const code = newRows[index].code;
        newRows[index].name = itemMaster[code] || "";
        setRows(newRows);
    }

    const addRow = () => setRows([...rows, { code: "", name: "", quantity: 1, shelf: "", remark: "" }]);
    const removeRow = (index) => setRows(rows.filter((_, i) => i !== index));

    const saveDraft = () => {
        console.log("下書き保存", { staff, destination, rows });
    };

    const confirmOutbound = () => {
        console.log("確定", { staff, destination, rows });
    };

    return (
        <>
            <h1>出庫</h1>

            <div>
                <label>担当者ID：</label>
                <input
                    type="text"
                    className="id-text"
                    value={staff}
                    onChange={e => setStaff(e.target.value)} />
                <br />
                <label>出庫先ID：</label>
                <input
                    type="text"
                    className="id-text"
                    value={destination}
                    onChange={e => setDestination(e.target.value)}/>
            </div>

            <table className="order-table">
                <thead>
                    <tr>
                        <th>商品コード</th>
                        <th>商品名</th>
                        <th>数量</th>
                        <th>棚番号</th>
                        <th>備考</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => (
                        <tr key={idx}>
                            <td>
                                <input
                                    type="text"
                                    value={row.code}
                                    onChange={(e) => handleChange(idx, "code", e.target.value)}
                                    onBlur={() => handleCodeInput(idx)}
                                    onKeyDown={e => {
                                        if (e.key === "Enter") {
                                            handleCodeInput(idx);
                                            e.preventDefault();
                                        }
                                    }}
                                />
                            </td>
                            <td>{row.name}</td>
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={row.quantity}
                                    onChange={e => handleChange(idx, "quantity", parseInt(e.target.value))}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.shelf}
                                    onChange={e => handleChange(idx, "shelf", e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.remark}
                                    onChange={e => handleChange(idx, "remark", e.target.value)}
                                />
                            </td>
                            <td>
                                <button type="button" id="deleteBtn" onClick={() => removeRow(idx)}>削除</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div id="add-column">
                <button onClick={addRow}>＋行追加</button>
            </div>
            <div>
                <button className="saveBtn" onClick={saveDraft}>下書き保存</button>
                <button className="saveBtn" onClick={confirmOutbound}>確定</button>
            </div>
        </>
    )
}