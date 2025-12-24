import MakerMaster from './MakerMaster';
import MakerMasterHeader from './MakerMasterHeader';

export default function MakerMasterPage() {
    return (
        <>
            <h2>取引先マスター</h2>
            <MakerMasterHeader />
            <MakerMaster />
        </>
    )
}