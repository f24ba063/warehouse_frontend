import ProductMaster from './ProductMaster';
import ProductMasterHeader from './ProductMasterHeader';
import { useState,useEffect } from 'react';
import softDelete from '../../../utils/softDelete';
import urls from '../../../urls/urls';

export default function ProductMasterPage() {
    //新商品登録フォームを見せたり隠したりする
    const [showForm, setShowForm] = useState(false);

    //DBからfetchした商品情報群を収める
    const [products, setProducts] = useState([]);

    //個々の商品についての追加・修正のためのプロパティ
    const [editingProduct, setEditingProduct] = useState({
        productName: '',
        makerName: '',
        unitOfMeasure: '',
        safetyStock: 0,
        minOrderQty: 0,
        lotManaged: true
    });

    useEffect(() => {
    fetch("http://localhost:8080/api/master/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);


    //登録フォームに文字を打ち込むたび、表示内容が更新される
    const handleChange = e => {
        const { name, value, type, checked } = e.target;

        setEditingProduct({
            ...editingProduct,
            [name]: type === 'checkbox' ? checked : value
        });
    };


    //商品のソフトデリート（不可視属性付与）
    const handleDelete = (productId) => {
        softDelete({//utilsからSoftDelete関数を引っ張ってきている
            rows: products,
            setRows: setProducts,
            confirmMessage: '削除しますか？',
            updateRow: r => r.productId === productId ? { ...r, isVisible: 0 } : r,
            request: () =>
                fetch(`${urls.products}/${productId}/softDelete`, {
                    method: 'PATCH'
                })
        });
    };

    //ProductMasterHeaderで新商品を登録した際、それをDBに流し込む
    const handleSubmit = async e => {
        e.preventDefault();//不要な再読み込みを阻止
        //以下でDBにデータをPOSTする
        const res = await fetch("http://localhost:8080/api/master/products", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editingProduct)
        });

        if (!res.ok) throw new Error('登録失敗');

        //postが成功したらローカルに同じ商品を追加して追従
        const saveProduct = await res.json();
        setProducts(prev => [...prev, saveProduct]);
        setShowForm(false);
        setEditingProduct({
            productName: '',
            makerName: '',
            unitOfMeasure: '',
            safetyStock: 0,
            minOrderQty: 0,
            lotManaged: true
        })
    }

    return (
        <>
            <div>
                <h2>商品マスター</h2>
                <ProductMasterHeader
                    editingProduct={editingProduct}
                    handleChange={handleChange}
                    showForm={showForm}
                    setShowForm={setShowForm}
                    handleSubmit={handleSubmit}                />
                <ProductMaster products={products} onDelete={handleDelete } />
            </div>
        </>
    )
}