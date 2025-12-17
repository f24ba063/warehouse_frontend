import { useEffect, useState } from 'react';




export default function WarehouseMaster() {
    const [warehouses, setWarehouses] = useState([]);
    const [showForm, setShowForm] = useState(false);

    //springからの吸い出し機能、新要素追加機能、不可視化機能
    const fetchWarehouses = () =>
        fetch('http://localhost:8080/api/master/warehouse')
            .then(res => {
                if (!res.ok) throw new Error(res.status);
                return res.json();
            })
            .then(data => setWarehouses(data))
            .catch(err => console.error(err));
    

    const listWarehouses = warehouses
        .filter(w => w.isVisivle != 0)
        .map(e => (
        <tr key={e.warehouseId}>
            <td>{e.warehouseId}</td>
            <td>{e.warehouseName}</td>
            <td>
                <button onClick={() => handleSoftDelete(e.warehouseId)}>削除</button>    
            </td>
        </tr>
    ))

    return (
        <>
            <button type="button" onClick={() => setShowForm(true)}>新規登録</button>

                {showForm && (
                    <div>
                        {/* ここに ProductAddingForm コンポーネントを置く */}
                        <WarehouseAddingForm
                            onSubmitSuccess={(newWarehouse) => {
                            setWarehouses([...warehouses, newWarehouse]);
                            setShowForm(false);
                            }}
                        />
                    </div>
                )}
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>倉庫名</th>
                    </tr>
                </thead>
                <tbody>
                    {listWarehouses}
                </tbody>
            </table>
            <button type="button" onClick={() => setShowForm(true) }
            >新倉庫の追加</button>
        </>
    )
}