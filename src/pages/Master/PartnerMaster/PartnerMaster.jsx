import '../../../css/warehouse_in_out.css';
import { useState, useEffect } from 'react';
import DeleteButton from '../common/DeleteButton';
import urls from '../../../urls/urls'

export default function PartnerMaster() {

    const [rows, setRows] = useState([]);
    useEffect(() => {
        const load = async () => {
            const a = await fetch(urls.partners);
            const body = await a.json();
            setRows(body);
        };
        load();
    }, []);

    // 削除ボタンで呼ぶ処理
    const handleDelete = async (partnerId) => {
        setRows(rows =>
            rows.map(r =>
                r.partnerId === partnerId ? { ...r, isVisible: 0 } : r
            )
        );

        await fetch(`${urls.partners}/${partnerId}/softDelete`, {
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
                        <tr key={res.partnerId}>
                            <td>{res.partnerId}</td>
                            <td>{res.partnerType}</td>
                            <td>{res.partnerName}</td>
                            <td>{res.partnerAddress}</td>
                            <td>{res.access}</td>
                            <td>{res.mail}</td>
                            <td>
                                    <DeleteButton onClick={() => handleDelete(res.partnerId)} />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}