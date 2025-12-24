import '../../../css/warehouse_in_out.css';
import { useState, useEffect } from 'react';
import DeleteButton from '../common/DeleteButton';
import urls from '../../../urls/urls'

export default function LocationMaster() {

    const [rows, setRows] = useState([]);
    useEffect(() => {
        const load = async () => {
            const a = await fetch(urls.locations);
            const body = await a.json();
            setRows(body);
        };
        load();
    }, []);

    // 削除ボタンで呼ぶ処理
    const handleDelete = async (locationCode) => {
        setRows(rows =>
            rows.map(r =>
                r.locationCode === locationCode
                    ? { ...r, isVisible: 0 }
                    : r
            )
        );

        await fetch(`${urls.locations}/${locationCode}/softDelete`, {
            method: 'PATCH'
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