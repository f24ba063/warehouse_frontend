import ProductMaster from './ProductMaster';
import ProductMasterHeader from './ProductMasterHeader';

export default function ProductMasterPage() {
    return (
        <>
            <h2>商品マスター</h2>
            <ProductMasterHeader />
            <ProductMaster />
        </>
    )
}