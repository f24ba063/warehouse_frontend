import '../../../css/warehouse_in_out.css';
import { useState, useEffect } from 'react';
import DeleteButton from '../common/DeleteButton';
import urls from '../../../urls/urls'
import softDelete from '../../../utils/softDelete';

export default function WarehouseMaster() {
    //springのapi/master/warehousesからデータを吸い出している
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const load = async () => {
            try {
                const a = await fetch(urls.warehouses);
                const body = await a.json();
                setRows(body);
            } catch (error) {
                console.error('情報の取得に失敗しました：', error);
            }
        };
        load();
    }, []);

    // 削除ボタンで呼ぶ処理
    const handleDelete =  (warehouseId) => {
        softDelete({
            id: warehouseId,
            rows,
            setRows,
            confirmMessage: '本当に削除しますか？',
            request: (id) =>
                fetch(`${urls.warehouses}/${id}/softDelete`, {
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
                            <tr key={res.warehouseId}>
                                <td>{res.warehouseId}</td>
                                <td>{res.warehouseName}</td>
                                <td>{res.warehouseAddress}</td>
                                <td>{res.access}</td>
                                <td>{res.mail}</td>
                                <td>
                                    <DeleteButton onClick={() => handleDelete(res.warehouseId)} />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    )

}