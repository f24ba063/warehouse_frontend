//半角カナ、全角英字、全角数字を変換する機能

export function normalizeText(value) {
    if (!value) return value;

    let result = value;

    // 半角カタカナ → 全角カタカナ
    result = result.normalize('NFKC');

    // 全角英字 → 半角英字
    result = result.replace(/[Ａ-Ｚａ-ｚ]/g, s =>
        String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
    );

    // 全角数字 → 半角数字
    result = result.replace(/[０-９]/g, s =>
        String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
    );

    return result;
}