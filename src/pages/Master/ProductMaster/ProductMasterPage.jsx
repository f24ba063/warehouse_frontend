import ProductMaster from './ProductMaster';
import ProductMasterHeader from './ProductMasterHeader';
import { useState,useEffect } from 'react';
import softDelete from '../../../utils/softDelete';
import urls from '../../../urls/urls';

//ここには以下の機能が収められている
//①新商品追加フォームの文字入力を表示に反映する機能
//②商品のソフトデリート機能
//③既存商品の編集機能
//④新商品登録を決定した際、DBへのデータ保存とブラウザ表示への反映
//⑤

export default function ProductMasterPage() {
    //新商品登録フォームを見せたり隠したりするフラグ
    const [showForm, setShowForm] = useState(false);

    //DBからfetchした商品情報群を収めるState
    const [products, setProducts] = useState([]);

    //現在新規商品登録中か、既存情報の編集中かを識別するフラグ
    const [isEditing, setIsEditing] = useState(false);

    //編集中のidを収めるstate
    const [editingId, setEditingId] = useState(null);

    //検索キーワードを受け取るstate
    const [keyWord, setKeyWord] = useState('');

    //個々の商品についての追加・修正のためのプロパティ
    const [editingProduct, setEditingProduct] = useState({
        productName: '',
        makerName: '',
        unitOfMeasure: '',
        safetyStock: 0,
        minOrderQty: 0,
        lotManaged: true
    });

    useEffect(() => {
    fetch("http://localhost:8080/api/master/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);


    //新商品追加フォームに文字を打ち込むたび、表示内容が更新される
    const handleChange = e => {
        const { name, value, type, checked } = e.target;

        setEditingProduct({
            ...editingProduct,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    //商品のソフトデリート（不可視属性付与）
    const handleDelete = productId => {
        softDelete({//utilsからSoftDelete関数を引っ張ってきている
            rows: products,
            setRows: setProducts,
            confirmMessage: '削除しますか？',
            updateRow: r => r.productId === productId ? { ...r, isVisible: 0 } : r,
            request: () =>
                fetch(`${urls.products}/${productId}/softDelete`, {
                    method: 'PATCH'
                })
        });
    };

    //既存の商品情報の再編集を開始する関数
    const handleEditStart = product => {
        setEditingProduct(product);
        setIsEditing(true);
        setShowForm(true);
        setEditingId(product.productId);
    }

    //ProductMasterHeaderで新商品を登録した際、それをDBに流し込む
    const handleSubmit = async e => {
        e.preventDefault();//不要な再読み込みを阻止

        //商品名、安全在庫、最小発注数バリデーション
        const error = validateProduct(editingProduct, products);

        if (error) {
            alert(error);
            return;
        }
        //以下でDBにデータをPOSTする
        const res = await fetch("http://localhost:8080/api/master/products", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editingProduct)
        });

        if (!res.ok) throw new Error('登録失敗');

        //postが成功したらローカルに同じ商品を追加して追従
        const saveProduct = await res.json();
        setProducts(prev => [...prev, saveProduct]);
        setShowForm(false);
        setEditingProduct({
            productName: '',
            makerName: '',
            unitOfMeasure: '',
            safetyStock: 0,
            minOrderQty: 0,
            lotManaged: true
        })
    }

    //商品名空白・名前かぶり・安全在庫・最小発注数に関しての警告
    const validateProduct = (product, products, editingId = null) => {
        //名前空白
        if (!product.productName.trim()) {
            return '商品名は必須です';
        }

        //他商品との名前かぶりの警告
        const duplicated = products.some(p =>
            p.productName === product.productName &&
            p.productId !== editingId
        );

        if (duplicated) {
            return '同じ商品名がすでに存在しています'
        };

        //安全在庫・空白 or 数字以外 or 0未満
        if (
            product.safetyStock === '' ||
            isNaN(product.safetyStock) ||
            Number(product.safetyStock) < 0
        ) {
            return '安全在庫は0以上の数値で入力してください';
        }

        //最小発注単位・空白 or 数字以外 or 0未満 
        if (
            product.minOrderQty === '' ||
            isNaN(product.minOrderQty) ||
            Number(product.minOrderQty) < 0
        ) {
            return '最小発注数は0以上の数値で入力してください。'
        }
        //問題ない時は何も返さない
        return null;
    }

    

    return (
        <>
            <div>
                <h2>商品マスター</h2>
                {/*ヘッダーには新商品登録機能と検索機能*/}
                <ProductMasterHeader
                    editingProduct={editingProduct}/*商品登録用のオブジェクト*/
                    handleChange={handleChange}/*入力すると表示もかわる機能*/
                    showForm={showForm}/*商品登録フォームを見せたり隠すState */
                    setShowForm={setShowForm}/*上のStateを操作する*/
                    handleSubmit={handleSubmit} /*商品登録確定機能 */
                    keyWOrd={keyWord}
                    setKeyWord={setKeyWord}
                /> 
                <ProductMaster
                    products={products}
                    onDelete={handleDelete}
                    onEdit={handleEditStart}
                    keyWord={keyWord}                />
            </div>
        </>
    )
}