import DeleteButton from '../common/DeleteButton';
import { useState } from 'react';

//既存マスターデータを編集する機能についてはここに記述
//他ファイルでは一切タッチしない

export default function ProductMasterRow({
    row,
    onEdit,
    onDelete,
    editingId,
    editingProduct,
    setEditingProduct,
    handleUpdate,
    handleEditCancel
}) {
    const isEditing = editingId === row.productId;
    const {isEditing, setIsEditing }

    return (
        <tr>
            {isEditing ? (
                <>
                    <td>{row.productId}</td>
                    <td>
                        <input
                            value={editingProduct.productName}
                            onChange={e =>
                                setEditingProduct({
                                    ...editingProduct,
                                    productName: e.target.value
                                })
                            }
                        />
                    </td>
                    <td>
                        <input
                            value={editingProduct.makerName}
                            onChange={e =>
                                setEditingProduct({
                                    ...editingProduct,
                                    makerName: e.target.value
                                })
                            }
                        />
                    </td>
                    <td>
                        <input
                            value={editingProduct.unitOfMeasure}
                            onChange={e =>
                                setEditingProduct({
                                    ...editingProduct,
                                    unitOfMeasure: e.target.value
                                })
                            }
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            value={editingProduct.safetyStock}
                            onChange={e =>
                                setEditingProduct({
                                    ...editingProduct,
                                    safetyStock: Number(e.trget.value)
                                })    
                            }
                        />
                    </td>
                    <td>
                        <input
                            type="number"
                            value={editingProduct.minOrderQty}
                            onChange={e =>
                                setEditingProduct({
                                    ...editingProduct,
                                    minOrderQty: Number(e.target.value)
                                })    
                            }
                        />
                    </td>
                    <td>
                        <input
                            type="checkbox"
                            value={editingProduct.lotManaged}
                            onChange={e =>
                                setEditingProduct({
                                    ...editingProduct,
                                    lotManaged: e.target.checked
                                })
                            }
                        />
                    </td>
                    <td>
                        <button type="button" onClick={handleUpdate}>
                            保存
                        </button>
                        <button type="button" onClick={handleEditCancel}>
                            キャンセル
                        </button>
                    </td>
                    <td>
                        <DeleteButton onClick={() => onDelete(row.productId) } />
                    </td>
                </>
            ) : (
                <>
                    <td>{row.productId}</td>
                    <td>{row.productName}</td>
                    <td>{row.makerName}</td>
                    <td>{row.unitOfMeasure}</td>
                    <td>{row.safetyStock}</td>
                    <td>{row.minOrderQty}</td>
                    <td>{row.lotManaged ? 'ロット管理あり' : '-'}</td>
                    <td>{row.active ? '取り扱い中' : '-'}</td>
                    <td>
                        <button type="button" onClick={() => onEdit(row)}>
                            編集
                        </button>
                    </td>
                    <td>
                        <DeleteButton onClick={() => onDelete(row.productId)} />
                    </td>
                </>
            )}
        </tr>
    );
}