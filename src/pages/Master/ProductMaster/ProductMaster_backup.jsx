import '../../../css/warehouse_in_out.css';
import { useState, useEffect } from 'react';
import DeleteButton from '../common/DeleteButton';
import urls from '../../../urls/urls'
import softDelete from '../../../utils/softDelete';

export default function ProductMaster() {
    //springのapi/master/productsからデータを吸い出している
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const load = async () => {
            try {
                const a = await fetch(urls.products);
                const body = await a.json();
                setRows(body);
            } catch (error) {
                console.error('情報の取得に失敗しました：', error);
            }
        };
        load();
    }, []);

    // 削除ボタンで呼ぶ処理
    const handleDelete = (productId) => {
        softDelete({
            rows,
            setRows,
            confirmMessage: '削除しますか？',
            updateRow: r => r.productId === productId ? {...r, isVisible: 0} : r,
            request: () =>
                fetch(`${urls.products}/${productId}/softDelete`,{
                    method: 'PATCH'
                })
        });
    };

    return (
        <>
            <table>
                <tbody>
                    {rows
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
                                <DeleteButton onClick={() => handleDelete(res.productId)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}