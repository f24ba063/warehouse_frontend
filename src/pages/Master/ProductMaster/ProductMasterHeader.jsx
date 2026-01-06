
export default function ProductMasterHeader({
    editingProduct,
    handleChange,//入力を表示に反映
    showForm,//新商品追加フォームの表示フラグ
    setShowForm,//フォーム表示切替関数
    handleSubmit//DB登録用関数
}) {

    return (
        <>
            <h2>商品マスターページ</h2>
            
            <button type="button" onClick={() => setShowForm(!showForm)}>
                新商品追加
            </button>

            {showForm &&(

                <form onSubmit={handleSubmit}>
                    <label>商品名：</label>
                    <input
                        type="text"
                        name="productName"
                        value={editingProduct.productName}
                        onChange={handleChange}
                    />

                    <label>メーカー：</label>
                    <input
                        type="text"
                        name="makerName"
                        value={editingProduct.makerName}
                        onChange={handleChange}
                    />

                    <label>重量単位：</label>
                    <input
                        type="text"
                        name="unitOfMeasure"
                        value={editingProduct.unitOfMeasure}
                        onChange={handleChange}
                    />

                    <label>安全在庫数：</label>
                    <input
                        type="text"
                        name="safetyStock"
                        value={editingProduct.safetyStock}
                        onChange={handleChange}
                    />

                    <label>最小発注数数：</label>
                    <input
                        type="text"
                        name="minOrderQty"
                        value={editingProduct.minOrderQty}
                        onChange={handleChange}
                    />

                    <label>ロット管理：</label>
                    <input
                        type="checkbox"
                        name="lotManaged"
                        checked={editingProduct.lotManaged}
                        onChange={handleChange}
                    />

                    <button type="submit">登録確定</button>

                </form>
           ) }
        </>
    )
}