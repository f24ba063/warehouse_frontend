import { useState } from "react";
import { slipHistory } from "../../data/slipData";
import FilterModal from "../../components/FilterModal";
import SlipTable from "../../components/SlipTable";

//伝票履歴
export default function SlipHistory() {
    const [slips, setSlips] = useState(slipHistory);//伝票履歴を収める変数
    const [conditions, setConditions] = useState({});
    const [isModalOpen, setModalOpen] = useState(false);//絞込モーダルを起動させる

    const handleChange = (key, value) => {
        setConditions(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="main-content">
            <div className="top-area">
                <button type="button" onClick={() => setModalOpen(true)}>絞込条件</button>
                <h1>伝票履歴</h1>
            </div>

            <SlipTable slips={slips} />

            {isModalOpen && (
                <FilterModal
                    conditions={conditions}
                    onChange={handleChange}
                    onClear={() => setConditions({})}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    );
}