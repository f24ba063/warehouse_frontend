const toggleVisible = (productId) => {
    setRows(rows =>
        rows.map(r =>
            r.productID = productId
                ? { ...r, isVisivle: r.isVisible === 0 ? 1 : 0 }
                : r
        )
    );
};

export default function DeleteButton() {
    return (
        <button type="button">
            削除
        </button>
    )
}