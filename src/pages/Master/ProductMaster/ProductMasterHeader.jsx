
export default function ProductMasterHeader({
    editingProduct, //商品登録に使うState
    handleChange,   //入力を表示に反映する機能
    showForm,       //新商品追加フォームの表示フラグ
    setShowForm,    //新商品登録フォーム表示切替関数
    handleSubmit,   //DB登録機能
    setKeyWord      //keyWordに代入
}) {

    return (
        <>
            <h2>商品マスターページ</h2>
            
            <button type="button" onClick={() => setShowForm(!showForm)}>
                新商品追加
            </button>
            <label>商品検索</label>
            <input type="text" id="searchInput" placeohlder="商品入力" />
            <button
                type="button"
                onClick={() => {
                    const val = document.getElementById('searchInput').value;
                    setKeyWord(val);
                }}>
                検索
            </button>

            {/*以下は新商品入力フォーム。初期は隠されている*/}
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
            )}
            {/*新商品入力フォーム終了*/}
        </>
    )
}