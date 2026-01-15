import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            if (res.ok) {
                navigate("/home");
            } else if (res.status === 401) {
                alert("ユーザー名かパスワードが間違っています");
            }
            else {
                alert("ログインに失敗しました");
            }
        } catch (err) {
            console.error(err);
            alert('通信エラーが発生しました');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit }>
            <label htmlFor="username">ユーザー名：</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
            />

            <label htmlFor="password">パスワード：</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />

            <button type="submit" disabled={loading}>
                {loading ? "認証中･･･" : 'ログイン' }
            </button>
        </form>
    )

}