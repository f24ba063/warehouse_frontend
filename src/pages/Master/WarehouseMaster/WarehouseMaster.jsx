import { useEffect, useState } from 'react';
import ProductAddingForm from '../../../components/AddingForms/ProductAddingForm'
//import ProductAddingForm from '../../components/ProductAddingForms';

//商品マスターを表示する画面。
//変数productsにはDBより商品を受け取り一覧表示、
//変数showFormは新商品登録のためのフォームの表示を切り替える

export default function WarehouseMaster() {
    const [warehouse, setWarehouse] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const fetchWarehouses = () =>  fetch("http://localhost:8080/api/master/warehouse")
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        })
        .then(data => setWarehouse(data))
        .catch(err => console.error(err));

    useEffect(() => {
        fetchWarehouses();
    }, [])

    

    const listWarehouses = warehouse.map(e => (
        <tr key={e.warehouseId}>
            <td>{e.warehouseId}</td>
            <td>{e.warehouseName}</td>
        </tr>
    ))

    return (
        <>
            <h1>倉庫マスタ管理ページ</h1>
            <div>
                {showForm && (
                    <div>
                        {/* ここに ProductAddingForm コンポーネントを置く */}
                        <ProductAddingForm
                            onSubmitSuccess={() => {
                                setShowForm(false);
                                fetchWarehouses();
                            }}
                        />
                    </div>
                )}
            </div>
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