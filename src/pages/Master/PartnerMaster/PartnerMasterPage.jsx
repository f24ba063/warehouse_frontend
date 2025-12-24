import PartnerMaster from './PartnerMaster';
import PartnerMasterHeader from './PartnerMasterHeader';

export default function PartnerMasterPage() {
    return (
        <>
            <h2>取引先マスター</h2>
            <PartnerMasterHeader />
            <PartnerMaster />
        </>
    )
}