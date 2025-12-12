import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

export default function Header() {
    return (
        <header id="header-header">
            <h1 id="header-title">
                warehouseapp
            </h1>
            <nav id="header-nav">
                <Link to="/home" className="header-link">Home</Link>
                <Link to="incoming" className="header-link">入庫</Link>
                <Link to="outgoing" className="header-link">出庫</Link>
                <Link to="inventory" className="header-link">在庫一覧</Link>
                <Link to="slipHistory" className="header-link">伝票履歴</Link>
                <Link to="master" className="header-link">マスター管理</Link>

            </nav>
        </header>
    )
}