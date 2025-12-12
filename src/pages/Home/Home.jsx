import { useNavigate } from 'react-router-dom';
import '../../css/home.css';

export default function Home() {

	const navigate = useNavigate();
	const moveToIncoming = async () => {
		navigate("/incoming");
	}
	const moveToOutgoing = async () => {
		navigate("/outgoing");
	}
	const moveToInventory = async () => {
		navigate("/inventory");
	}
	const moveToSlipHistory = async () => {
		navigate("/slipHistory");
	}
	const moveToMaster = async () => {
		navigate("/master");
	}
	return (
		<>
			<h1>ホーム画面</h1>

			<div id="button-container-home">
				<button
					type="button"
					class="home-button"
					onClick={moveToIncoming}>
					入庫伝票作成
				</button>

				<button
					type="button"
					class="home-button"
					onClick={moveToOutgoing }
					>
					出庫伝票作成
				</button>

				<button
					type="button"
					class="home-button"
onClick={moveToInventory}
					>
					在庫一覧
				</button>

				<button
					type="button"
					class="home-button"
					onClick={moveToSlipHistory}
					>
					伝票履歴
				</button>

				<button
					type="button"
					class="home-button"
					onClick={moveToMaster}
					>
					マスター管理
				</button>
			</div>
		</>
	)
}