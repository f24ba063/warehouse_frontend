
export default async function softDelete ({
    rows,
    setRows,
    confirmMessage,
    updateRow,
    request
}){
    const prevRows = rows;

    if(!confirm(confirmMessage)) return;

    setRows(rs => 
        rs.map(r => updateRow(r)));//全てを更新し、必要なところをみえなくする
        //先に見えなくしたあと、選択次第でまた見えるようにする

    try{
        const res = await request();
        if(!res.ok) throw new Error();
    }catch(er){
        alert('削除に失敗しました');
        setRows(prevRows);
        console.error(er);
    }
}