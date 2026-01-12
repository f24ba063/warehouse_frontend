import { useState } from 'react'

export default function NewProductModal({ isOpen, onClose, onSave, existingProducts }) {
    const [productName, setProductName] = useState('');
    const [makerName, setMakerName] = useState('');
    const [unitOfMeasure, setUnitOfMeasure] = useState('');
    const [safetyStock, setSafetyStock] = useState(1);
    const [minOrderQty, setMinOrderQty] = useState(1);
    const [category, setCategory] = useState('');
    const [active, setActive] = useState(false);
    const [lotManaged, setLotManaged] = useState(false);

    if (!isOpen) return null;

    const isEmpty = v => v === null || v === undefined || v === '';

    const handleSave = () => {
        if (!productName.trim()) return alert("商品名は必須です。");
        if (!makerName.trim()) return alert("メーカー名は必須です。");
        if (isEmpty(unitOfMeasure)) return alert("重量単位が未入力です。");
        if (isEmpty(category)) return alert("カテゴリーが未選択です。");
        if (existingProducts.some(p => p.productName === productName)) return alert('この商品名はすでに存在しています。');


        //保存時に商品名、メーカー名でチェック
        onSave({
            productName,
            makerName,
            unitOfMeasure,
            category,
            active,
            safetyStock,
            minOrderQty,
            lotManaged
        });
        setProductName('');//入力テキスト初期化
        setMakerName('');
        setUnitOfMeasure('');
        setSafetyStock(1);
        setMinOrderQty(1);
        setCategory('');
        setActive(false);
        setLotManaged(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>新商品登録</h2>

                {/*商品名入力*/ }
                <input
                    type="text"
                    placeholder="商品名(必須)"
                    value={productName}
                    onChange={e => setProductName(e.target.value)}
                />
                {/*メーカー選択*/}
                <select value={makerName} onChange={e => setMakerName(e.target.value)}>
                    <option value="">メーカー選択</option>
                </select>
                {/*重量単位*/}
                <input placeholder="重量単位" value={unitOfMeasure}
                    onChange={e => setUnitOfMeasure(e.target.value)} />
                {/*安全在庫*/}
                <input type="number" min={1} value={safetyStock}
                    onChange={e => setSafetyStock(Number(e.target.value))} />
                {/*最小発注数量*/}
                <input type="number" min={1} value={minOrderQty}
                    onChange={e => setMinOrderQty(Number(e.target.value))} />
                {/*カテゴリー選択*/}
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="">カテゴリー選択</option>
                </select>
                {/*ロット管理フラグ*/}
                <label>
                    <input type="checkbox" checked={lotManaged}
                        onChange={e => setLotManaged(e.target.checked)} />
                    ロット管理（※後から変更不可）
                </label>

                <label>
                    <input type="checkbox" checked={active}
                        onChange={e => setActive(e.target.checked)} />
                    発売中
                </label>

                <button onClick={handleSave}>登録</button>
                <button onClick={onClose}>キャンセル</button>
            </div>
        </div>
    );
}
