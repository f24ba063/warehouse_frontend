import '../../../css/warehouse_in_out.css';
import { useState, useEffect } from 'react';
import DeleteButton from '../common/DeleteButton';

export default function ProductMaster() {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const load = async () => {
            const a = await fetch("http://localhost:8080/api/master/products");
            const body = await a.json();
            setRows(body);
        };
        load();
    }, []);

    return (
        <>

            <table>

                <tbody>
                    {rows.map(res => (
                        <tr key={res.productId}>
                            <td>{res.productId}</td>
                            <td>{res.productName}</td>
                            <td>{res.unitOfMeasure}</td>
                            <td>{res.safetyStock}</td>
                            <td>{res.minOrderQty}</td>
                            <td>{res.lotManaged}</td>
                            <td>{res.active}</td>
                            <td>
                                <DeleteButton onClick={setRows()=>res.isVisible = 0} />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}