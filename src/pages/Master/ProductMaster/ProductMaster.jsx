import '../../../css/warehouse_in_out.css';
import DeleteButton from '../common/DeleteButton';

export default function ProductMaster({products, onDelete }) {


    return (
        <>
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
                        <th>削除</th>
                    </tr>
                </thead>
                <tbody>
                    {products
                        .filter(r => r.isVisible === 1)
                        .map(res => (
                        <tr key={res.productId}>
                            <td>{res.productId}</td>
                            <td>{res.productName}</td>
                            <td>{res.makerName}</td>
                            <td>{res.unitOfMeasure}</td>
                            <td>{res.safetyStock}</td>
                            <td>{res.minOrderQty}</td>
                            <td>{res.lotManaged}</td>
                            <td>{res.active}</td>
                            <td>
                                <DeleteButton onClick={() => onDelete(res.productId)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}