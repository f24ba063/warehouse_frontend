import {useRef, useEffect } from "react";

export default function SearchPopup({type, label, onClose}){
	const popupRef = useRef();

	useEffect(() => {
		function handleClickOutside(event){
			if(popupRef.current && !popupRef.contains(event.targer)){
				onClose();
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
	}, [onClose]);

	return (
		<div className="search-popup" ref={popupRef}>
			{/*文字型*/}
			{type === "text" && (
				<input type="text" placeholder={`検索 ${label}`} />
			)}

			{/*数字型 */}
			{type === "number" && (
				<div>
					<div style={{marginBottom: "4px" }}>
						<label style={{marginRight: "6px"}}>
							<input type="radio" name="numType" />以上
						</label>
						<label style={{marginRight: "6px"}}>
							<input type="radio" name="numType" />以下
						</label>
						<label>
							<input type="radio" name="numType" />範囲
						</label>
					</div>
					<input type="number" placeholder="最小値" style={{marginRight: "4px" }} />
					<input type="number" placeholder="最大値" />
				</div>
			)}
			{/* 日付型*/}
			{type === "date" && (
				<div>
					<input type="date" /> ～ <input type="date" />
				</div>
			)}

			<div className="search-popup-buttons">
				<button style={{marginRight: "6px" }}>検索</button>
				<button onClick={onClose}>キャンセル</button>
			</div>
		</div>
	);
}