import '../../../css/warehouse_in_out.css';

export default function MasterPageSkelton() {



    return (
        <>
            <h2>商品マスターページ</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>商品名</th>
                        <th>重量単位</th>
                        <th>安全在庫数</th>
                        <th>最小発注数</th>
                        <th>ロット管理</th>
                        <th>発売中フラグ</th>
                        <th>削除</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductMaster />
                </tbody>
            </table>
        </>
    )

}