
export default function EditButton({ onClick, label = "編集" }) {
    return (
        <button type="button" onClick={onClick}>
            {label}
        </button>
    );
}