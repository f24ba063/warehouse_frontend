import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [pass, setPass] = useState("");
    
    const handleSubmit = async e => {
        e.preventDefault();

        if (id === "admin" && pass === "1234") {
            navigate("/home");
        } else {
            alert("ログインに失敗しました");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="idInput">ID:</label>
                <input type="text"
                    id="idInput"
                    placeholder="IDを入力してください"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <label htmlFor="passInput">ID:</label>
                <input type="password"
                    id="passInput"
                    placeholder="パスワードを入力してください"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                />

                <button type="submit">送信</button>
            </form>
        </>
    )
}