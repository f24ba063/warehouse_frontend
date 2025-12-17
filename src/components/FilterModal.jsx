export default function FilterModal({ conditions, onChange, onClear, onClose }) {
    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>絞込条件</h2>
                <div>
                    <label>種別:</label>
                    <select value={conditions.type || ""} onChange={e => onChange("type", e.target.value)}>
                        <option value="">全て</option>
                        <option value="inbound">入庫</option>
                        <option value="outbound">出庫</option>
                    </select>
                </div>
                <div>
                    <label>担当者:</label>
                    <input type="text" value={conditions.staff || ""} onChange={e => onChange("staff", e.target.value)} />
                </div>
                <div>
                    <button onClick={onClear}>クリア</button>
                    <button onClick={onClose}>閉じる</button>
                </div>
            </div>
        </div>
    );
}