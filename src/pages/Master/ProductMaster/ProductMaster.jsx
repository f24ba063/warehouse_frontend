import ProductRow from './ProductMasterRow';

export default function ProductMaster({
    products,
    onDelete,
    onEdit,
    editingId,
    editingProduct,
    setEditingProduct,
    handleUpdate,
    handleEditCancel
}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>商品名</th>
                    <th>メーカー名</th>
                    <th>重量単位</th>
                    <th>安全在庫</th>
                    <th>最小発注数</th>
                    <th>ロット管理</th>
                    <th>発売フラグ</th>
                    <th>編集</th>
                    <th>削除</th>
                </tr>
            </thead>
            <tbody>
                {products
                    .filter(r => r.isVisible === 1)
                    .map(r => (
                        <ProductRow
                            key={r.productId}
                            row={r}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            editingId={editingId}
                            editingProduct={editingProduct}
                            setEditingProduct={setEditingProduct}
                            handleUpdate={handleUpdate}
                            handleEditCancel={handleEditCancel}
                        />
                    ))}
            </tbody>
        </table>
    );
}