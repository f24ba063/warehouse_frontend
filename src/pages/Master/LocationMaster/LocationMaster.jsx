import '../../../css/warehouse_in_out.css';
import { useState, useEffect } from 'react';
import DeleteButton from '../common/DeleteButton';
import urls from '../../../urls/urls'
import softDelete from '../../../utils/softDelete';

export default function LocationMaster() {

    const [rows, setRows] = useState([]);
    useEffect(() => {
        const load = async () => {
            try {
                const a = await fetch(urls.locations);
                const body = await a.json();
                setRows(body);
            } catch (error) {
                console.error('情報の取得に失敗しました：', error);
            }
        };
        load();
    }, []);

    // 削除ボタンで呼ぶ処理
    const handleDelete = (locationCode) => {
        softDelete({
            rows,
            setRows,
            confirmMessage: '削除しますか？',
            updateRow: r => r.locationId === locationCode ? {...r, isVisible: 0} : r,
            request: () =>
                fetch(`${urls.locations}/${locationCode}/softDelete`,{
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
                            <tr key={res.locationCode}>
                                <td>{res.warehouseId}</td>
                                <td>{res.zoneId}</td>
                                <td>{res.rackId}</td>
                                <td>{res.shelfId}</td>
                                <td>{res.locationCode}</td>
                                <td>{res.maxCapacity}</td>
                                <td>
                                    <DeleteButton
                                        onClick={() => handleDelete(res.locationCode)}
                                    />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    )

}