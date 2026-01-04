import '../../../css/warehouse_in_out.css';
import { useState, useEffect } from 'react';
import DeleteButton from '../common/DeleteButton';
import urls from '../../../urls/urls'

export default function MakerMaster() {
    //springのapi/master/makersからデータを吸い出している
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const load = async () => {
            try {
                const a = await fetch(urls.makers);
                const body = await a.json();
                setRows(body);
            } catch (error) {
                console.error('情報の取得に失敗しました：', error);
            }
        };
        load();
    }, []);

    // 削除ボタンで呼ぶ処理
    const handleDelete = async (makerId) => {
        if (confirm('本当に削除しますか?'))
        // まず画面上の表示を更新
        setRows(rows =>
            rows.map(r => r.makerId === makerId ? { ...r, isVisible: 0 } : r)
        );

        // Spring側のPATCH APIを叩く
        await fetch(`${urls.makers}/${makerId}/softDelete`, {
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
                            <tr key={res.makerId}>
                                <td>{res.makerId}</td>
                                <td>{res.makerName}</td>
                                <td>{res.makerAddress}</td>
                                <td>{res.access}</td>
                                <td>{res.mail}</td>
                                <td>
                                    <DeleteButton onClick={() => handleDelete(res.makerId)} />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    )

}