import DeleteButton from '../common/DeleteButton';
import { useState } from 'react';
import '../../../css/row.css';

export default function ProductMasterRow({
    row,        //レコード一行分の情報
    onDelete,   //
    onUpdate    
}) {
    const [isEditing, setIsEditing] = useState(false);//編集モード
    const [localProduct, setLocalProduct] = useState(null);//編集中の元データの避難先

    //編集開始ボタン。編集対象レコードの元レコードを退避
    const handleEditStart = () => {
        setIsEditing(true);
        setLocalProduct({ ...row });
    }

    //入力変更
    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        setLocalProduct({
            ...localProduct,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleFinish = async () => {
        if (!window.confirm('編集を確定しますか？')) return;

        const ok = await onUpdate(localProduct);
        if (ok) {
            setIsEditing(false);
            setLocalProduct(null);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setLocalProduct(null);
    }

    return (
        <tr className={row.isVisible === 0 ? 'deleted-row' : ''}>{/*不可視行が黄色くなるクラスを付与*/}
            <td>{row.productId}</td>

            <td>
                {isEditing ? (
                    <input
                        name='productName'
                        value={localProduct.productName}
                        onChange={handleChange}
                    />
                ) : (
                    row.productName
                )}
            </td>

            <td>
                {isEditing ? (
                    <input
                        name="makerName"
                        value={localProduct.makerName}
                        onChange={handleChange}
                    />
                ) : (
                    row.makerName
                )}
            </td>

            <td>
                {isEditing ? (
                    <input
                        name="category"
                        value={localProduct.category}
                        onChange={handleChange}
                    />
                ) : (
                    row.category
                )}
            </td>

            <td>
                {isEditing ? (
                    <input
                        name="unitOfMeasure"
                        value={localProduct.unitOfMeasure}
                        onChange={handleChange}
                    />
                ) : (
                    row.unitOfMeasure
                )}
            </td>

            <td>
                {isEditing? (
                    <input
                        type="number"
                        name="safetyStock"
                        value={localProduct.safetyStock}
                        onChange={handleChange}
                    />
                ) : (
                    row.safetyStock
                )}
            </td>

            <td>
                {isEditing ? (
                    <input
                        type="number"
                        name="minOrderQty"
                        value={localProduct.minOrderQty}
                        onChange={handleChange}
                    />
                ) : (
                    row.minOrderQty
                )}
            </td>

            <td>
                {isEditing ? (
                    <input
                        type="checkbox"
                        name="lotManaged"
                        checked={localProduct.lotManaged}
                        onChange={handleChange}
                    />
                ) : (
                        row.lotManaged ? 'ロット管理あり' : '-'
                )}
            </td>

            <td>
                {isEditing ? (
                    <input
                        type="checkbox"
                        name="active"
                        checked={localProduct.active}
                        onChange={handleChange}
                    />
                ) : (
                        row.active ? '取り扱い中' : '-'
                )}
            </td>
           
            <td>{/*二段階検査。当該行が削除済みだと何も表示されず、
                削除されていない時は当該行を編集中かそうでないかで
                ボタンの文言、機能が変わる*/}
                {row.isVisible ===1 ?(
                    <>
                        {isEditing ? (
                            <button onClick={handleFinish}>確定</button>
                        ) : (
                            <button onClick={handleEditStart}>編集</button>
                        )}
                    </>
                ) : (
                        <>{/*削除行はボタンなどが入らない*/}</>
                )}
            </td>

            <td>{/*同上。*/}
                {row.isVisible === 1 ? (
                    <>
                        {isEditing ? (
                            <button onClick={handleCancel}>取消</button>
                        ) : (
                            <button onClick={() => onDelete(row.productId)}>削除</button>
                        )}
                    </>
                ) : (
                        <>{/*削除行はボタンなどが入らない*/}</>
                )}
            </td>
        </tr>
    );
}