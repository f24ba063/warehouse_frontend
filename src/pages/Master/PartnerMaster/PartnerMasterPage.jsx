import PartnerMaster from './PartnerMaster';
import PartnerMasterHeader from './PartnerMasterHeader';
import {useState, useEffect } from 'react';

export default function PartnerMasterPage() {
        const [showForm, setShowForm] = useState(false);
    //単品プロダクト。製作したものを収める
    const [partner, setPartner] = useState({
        partnerName: '1',
        partnerAddress: '',
        access: '',
        mail: ''
    });
    const [partners, setPartners] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        setShowForm(false);
    }

    useEffect(() => {
        fetch("http://localhost:8080/api/master/partners")
            .then(res => res.json())
            .then(data => setPartners(data));
    }, []);

    const handleChange = e => {
        const { name, value, type, checked } = e.target;

        setPartner({
            ...partner,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <>
            <div>
                <h2>取引先マスター</h2>
                <button onClick={() =>
                    setShowForm(!showForm)}>追加</button>
                    {showForm &&
                        <form onSubmit={handleSubmit}>
                            <label>取引先名：</label>
                            <input
                                type="text"
                                name="partnerName"
                                value={partner.partnerName}
                                onChange={handleChange}
                            />

                            <label>住所：</label>
                            <input
                                type="text"
                                name="partnerAddress"
                                value={partner.pratnerAddress}
                                onChange={handleChange}
                            />

                            <label>電話番号：</label>
                            <input
                                type="text"
                                name="access"
                                value={partner.access}
                                onChange={handleChange}
                            />

                            <label>メールアドレス：</label>
                            <input
                                type="text"
                                name="mail"
                                value={partner.mail}
                                onChange={handleChange}
                            />

                            <button onClick={setPartner }>追加</button>
                        </form>
                    }
            </div >
            <PartnerMasterHeader />
            <PartnerMaster />
        </>
    )
}