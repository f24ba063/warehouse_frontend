import ProductMaster from './ProductMaster';
import ProductMasterHeader from './ProductMasterHeader';
import { useState,useEffect } from 'react';

export default function ProductMasterPage() {
    const [showForm, setShowForm] = useState(false);
    //単品プロダクト。製作したものを収める
    const [product, setProduct] = useState({
        productName: '1',
        makerName: '',
        unitOfMeasure: '',
        safetyStock: 0,
        minOrderQty: 0,
        lotManaged:true
    });
    const [products, setProducts] = useState([]);

    useEffect(() => {
    fetch("http://localhost:8080/api/master/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    //「新商品登録」ボタンで、登録のためのフォームを呼び出す
    const handleSubmit = e => {
        e.preventDefault();
        setShowForm(false);
    }

    //登録フォームに文字を打ち込むたび、表示内容が更新される
    const handleChange = e => {
        const { name, value, type, checked } = e.target;

        setProduct({
            ...product,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    //新商品を商品リストに追加する
    const productUpdate = e => {
        setProducts(prev => [
            ...prev,
            product
        ]);
    }

    return (
        <>
        <div>
            <h2>商品マスター</h2>
            <button onClick={() =>
                setShowForm(!showForm)}>新商品登録加</button>

                {showForm &&

                    <form onSubmit={handleSubmit}>
                        <label>商品名：</label>
                        <input
                            type="text"
                            name="productName"
                            value={product.productName}
                            onChange={handleChange}
                        />

                        <label>メーカー：</label>
                        <input
                            type="text"
                            name="makerName"
                            value={product.makerName}
                            onChange={handleChange}
                        />

                        <label>重量単位：</label>
                        <input
                            type="text"
                            name="unitOfMeasure"
                            value={product.unitOfMeasure}
                            onChange={handleChange}
                        />

                        <label>安全在庫数：</label>
                        <input
                            type="text"
                            name="safetyStock"
                            value={product.safetyStock}
                            onChange={handleChange}
                        />

                        <label>最小発注数数：</label>
                        <input
                            type="text"
                            name="minOrderQty"
                            value={product.minOrderQty}
                            onChange={handleChange}
                        />

                        <label>ロット管理：</label>
                        <input
                            type="checkbox"
                            name="lotManaged"
                            checked={product.lotManaged}
                            onChange={handleChange}
                        />

                        <button onClick={() =>productUpdate(product) }>登録確定</button>
                    </form>
                }
        </div >
            <ProductMasterHeader />
            <ProductMaster />
        </>
    )
}