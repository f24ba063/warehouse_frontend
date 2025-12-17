export default function SlipTable({ slips }) {
    return (
        <table className="history-table">
            <thead>
                <tr>
                    <th>伝票ID</th>
                    <th>種別</th>
                    <th>日付</th>
                    <th>担当者</th>
                    <th>倉庫</th>
                    <th>出庫先</th>
                    <th>状態</th>
                    <th>商品コード</th>
                    <th>商品名</th>
                    <th>数量</th>
                    <th>棚番号</th>
                    <th>備考</th>
                </tr>
            </thead>
            <tbody>
                {slips.map(slip =>
                    slip.items.map((item, idx) => (
                        <tr key={`${slip.slipId}-${idx}`}>
                            {idx === 0 && (
                                <>
                                    <td rowSpan={slip.items.length}>{slip.slipId}</td>
                                    <td rowSpan={slip.items.length}>{slip.type === "inbound" ? "入庫" : "出庫"}</td>
                                    <td rowSpan={slip.items.length}>{slip.date}</td>
                                    <td rowSpan={slip.items.length}>{slip.staff}</td>
                                    <td rowSpan={slip.items.length}>{slip.warehouse}</td>
                                    <td rowSpan={slip.items.length}>{slip.destination || "-"}</td>
                                    <td rowSpan={slip.items.length}>{slip.status}</td>
                                </>
                            )}
                            <td>{item.code}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.shelf}</td>
                            <td>{item.remark}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}