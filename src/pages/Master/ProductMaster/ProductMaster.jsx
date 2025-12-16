import {useState, useEffect} from 'react';
import ProductAddingForm from '../../../components/AddingForms/ProductAddingForm';
import '../../../css/warehouse_in_out.css';

export default function ProductMaster() {

    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleSoftDelete = (id) => {
        if (!window.confirm("本当に削除しますか？")) return;
        setProducts(products.map(p =>
            p.productId === id ? { ...p, isVisible: 0 } : p)
        );
        fetch(`http://localhost:8080/api/master/products/${id}/softDelete`, {
            method: 'PATCH',
        }).catch(err => console.error("DB更新失敗", err));

    };

    const fetchProduct = () => fetch('http://localhost:8080/api/master/products')
        .then(res => {
            if (!res.ok) throw new Error(res.status);
            return res.json();
        })
        .then(data => setProducts(data))
        .catch(err => console.error(err));
    useEffect(() => { fetchProduct() }, []);

    const listProducts = products
        .filter(p => p.isVisible!== 0)
        .map(e => (
        <tr key={e.productId}>
            <td>{e.productId}</td>
            <td>{e.productName}</td>
            <td>{e.unitOfMeasure}</td>
            <td>{e.safetyStock}</td>
            <td>{e.minOrderQty}</td>
            <td>{e.lotManaged ? "YES" : "NO"}</td>
            <td>{e.active ? "YES" : "NO"}</td>
            <td>
                <button onClick={() => handleSoftDelete(e.productId)}>削除</button>
            </td>
        </tr>
            
    ));

    return (
        <>
            <button type="button" onClick={()=> setShowForm(true) }>新規登録</button>

            {showForm &&(
                <ProductAddingForm
                    onSubmitSuccess={(newProduct) => {
                        setProducts([...products, newProduct]);
                        setShowForm(false);
                    }}
                />
            )}

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>商品名</th>
                        <th>単位</th>
                        <th>安全在庫</th>
                        <th>最小発注量</th>
                        <th>ロット管理</th>
                        <th>有効</th>
                        <th>削除</th>
                    </tr>
                </thead>
                <tbody>
                    {listProducts}
                </tbody>
            </table>
        </>
    )

}