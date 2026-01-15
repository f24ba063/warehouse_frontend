# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


やること：
１：データベース作成
　１．１　テーブルを作る
　１．２　JPAなどでDBアクセスを定義

２：API設計
	REST　APIとしてCRUDを宇佐を提供
		商品一覧取得（GET/products)
		商品登録（POST/products)
		在庫情報取得(GET/stock)
		伝票作成(POST/invoices)
	パラメータ・レスポンスのフォーマットを統一(JSON)
３．バリデーション・ビジネスロジック
	数量チェック、在庫引き当てロジック
	必要なら権限チェック
４．例外処理、エラー返却
５．入力の全角・半角処理については、安易に警告を出すよりも自動的に全角・半角に変換されたほうがよい
多様な特例：①など〇つきの数字や㌧、㍉などの表現、か゛などの表現
６．削除、更新のさいにDBに問い合わせ、万が一データがなかった時のtry-catch
