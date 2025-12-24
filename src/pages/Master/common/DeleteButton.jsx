

//export default function DeleteButton({ onClick }) {
//    return (
//        <button type="button" onClick={ onClick } >
//            削除
//        </button>
//    )
//}

export default function DeleteButton({ onClick, label = "削除" }) {
    return (
        <button type="button" onClick={onClick}>
            {label}
        </button>
    );
}