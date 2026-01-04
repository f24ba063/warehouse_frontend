import '../../../css/warehouse_in_out.css';
import { useState, useEffect } from 'react';
import DeleteButton from '../common/DeleteButton';
import urls from '../../../urls/urls'
import softDelete from '../../../utils/softDelete';

export default function PartnerMaster() {

    const [rows, setRows] = useState([]);
    useEffect(() => {
        const load = async () => {
            try {
                const a = await fetch(urls.partners);
                const body = await a.json();
                setRows(body);
            } catch (error) {
                console.error('情報の取得に失敗しました：', error);
            }
        };
        load();
    }, []);

    // 削除ボタンで呼ぶ処理
    const handleDelete = (partnerId) => {
        softDelete({
            rows,
            setRows,
            confirmMessage: '削除しますか？',
            updateRow: r => r.productId === partnerId ? {...r, isVisible: 0} : r,
            request: () =>
                fetch(`${urls.products}/${partnerId}/softDelete`,{
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