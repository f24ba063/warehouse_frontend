import LocationMaster from './LocationMaster';
import LocationMasterHeader from './LocationMasterHeader';

export default function PartnerMasterPage() {
    return (
        <>
                <h2>積載棚マスター</h2>
            <LocationMasterHeader />
            <LocationMaster />
        </>
    )
}