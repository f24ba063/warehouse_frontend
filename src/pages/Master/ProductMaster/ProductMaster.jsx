import ProductMasterRow from './ProductMasterRow';

export default function ProductMaster({
    products,
    onDelete,
    onUpdate,
    keyWord
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
                    .filter(r => keyWord === '' || r.productName.includes(keyWord))
                    .map(r => (
                        <ProductMasterRow
                            key={r.productId}
                            row={r}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                        />
                    ))}
            </tbody>
        </table>
    )
}