import { useState } from 'react';
import ProductMaster from '../../pages/Master/ProductMaster/ProductMaster';

export default function ProductAddingForm({ onSubmitSuccess }) {
    const [product, setProduct] = useState({
        productName: "",
        unitOfMeasure: "",
        safetyStock: 1,
        minOrderQty: 1,
        isLotManage: false,
        isActive: false
    });

    const handleValueChange = e => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        })
    };

    const handleBooleanChange = e => {
        const { name, checked } = e.target;
        setProduct({
            ...product,
            [name]: checked
        });
    }

    const handleSubmit = async () => {
        try {
            const res = await fetch("/api/master/products", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(product)
            });
            if (!res.ok) throw new Error(`HTTP Error!:${res.status}`)
            const data = await res.json();
            onSubmitSuccess?.(data);
        } catch (err) {
            console.error("登録失敗", err);
        }
    }

    return (
        <>
            <label htmlFor="name">商品名：</label>
            <input type="text" id="name" name="productName"
            onChange={handleValueChange} />

            <label htmlFor="measure">単位：</label>
                <input type="text" id="measure" name="unitOfMeasure"
                onChange={handleValueChange} />

            <label htmlFor="safety">安全在庫数：</label>
                <input type="number" id="safety" name="safetyStock"
                onChange={handleValueChange} />

            <label htmlFor="minimum">最小注文単位：</label>
                <input type="number" id="minimum" name="minOrderQty"
                onChange={handleValueChange} />

            <label htmlFor="lot">ロット管理：</label>
            <input type="checkbox" id="lot" name="isLotManage"
                checked={product.isLotManage}
                onChange={handleBooleanChange} />

            <label htmlFor="active">稼働：</label>
            <input type="checkbox" id="active" name="isActive"
                checked={product.isActive}
                onChange={ handleBooleanChange} />

            <button onClick={() => handleSubmit() }>登録</button>
        </>
    )
}