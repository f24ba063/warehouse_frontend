export default function ProductMasterHeader({
    editingProduct,       //商品登録に使うState
    handleChange,         //入力を表示に反映する機能
    showForm,             //新商品追加フォームの表示フラグ
    setShowForm,          //新商品登録フォーム表示切替関数
    handleSubmit,         //DB登録機能
    setProductKeyWord,    //商品検索用
    setMakerKeyWord,      //メーカー検索用
    setShowDeleted,        //削除済要素閲覧機能用
    showDeleted
}) {

    return (
        <>
            <h2>商品マスターページ</h2>

            <button type="button" onClick={() => setShowForm(!showForm)}>
                新商品追加
            </button>

            {/* 商品検索 */}
            <label>商品検索</label>
            <input type="text" id="searchInput" placeholder="商品入力"
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        e.preventDefault(); // フォーム送信防止
                        const val = e.target.value;
                        setProductKeyWord(val);
                    }
                }}
            />
            <button
                type="button"
                onClick={() => {
                    const val = document.getElementById('searchInput').value;
                    setProductKeyWord(val);
                }}>
                検索
            </button>

            {/* メーカー検索 */}
            <label>メーカー検索</label>
            <input type="text" id="makerInput" placeholder="メーカー名入力"
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        e.preventDefault(); // フォーム送信防止
                        const val = e.target.value;
                        setMakerKeyWord(val);
                    }
                }}/>
            <button
                type="button"
                onClick={() => {
                    const val = document.getElementById('makerInput').value;
                    setMakerKeyWord(val);
                }}>
                検索
            </button>

            <button type="button" onClick={() => setShowDeleted(prev => !prev)}>
                {showDeleted ? '削除済みを非表示' : '削除済も表示' }
            </button>



            {/* 新商品入力フォーム */}
            {showForm && (
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
        </>
    )
}