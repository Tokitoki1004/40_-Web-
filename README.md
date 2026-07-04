# ITパスポート復習カード

スクショ学習で増えた用語を、○×フラッシュカードとして復習するためのローカルWebアプリです。

公開版:

https://tokitoki1004.github.io/it-passport-review/

## 使い方

1. `index.html` をブラウザで開く
2. `PDFページ` で復習範囲を選ぶ
3. カードの文を読んで `○` / `×` を選ぶ
4. 間違えたカードは解説を確認する
5. 次のスクショ範囲は `追加` タブから用語を入れる

日別ノートから特定ページを直接開く場合は、次のようにURLパラメータを使えます。

- `index.html?page=184`
- `index.html?page=186`
- `index.html?page=188`
- `index.html?page=190`
- `index.html?page=192`
- `index.html?page=194`
- `index.html?page=196`
- `index.html?page=198`

## 保存

解答履歴、追加用語、カードはブラウザの `localStorage` に保存されます。

大事なデータは `JSON書き出し` でバックアップしてください。

## クイズ精度

初期カードは、各用語につき `○` 問題と `×` 問題を1つずつ作ります。

`×` 問題は単純なランダム入れ替えではなく、試験で混同しやすい用語に寄せた文にしています。

カード生成方式を変えた場合は保存キーも更新するため、ブラウザ側では新しい初期カードを読み直します。

## 初期データの更新

Obsidian側の `10_苦手用語` を更新した後に初期データを作り直す場合は、次を実行します。

```sh
node tools-build-seed-data.mjs
```

既にブラウザに保存済みのデータがある場合、アプリは `localStorage` を優先します。初期データを読み直したい場合は、ブラウザ側の保存データを削除してください。

## GitHub Pagesへの反映

公開版を更新するには、GitHubの `it-passport-review` リポジトリへ次のファイルを反映します。

- `index.html`
- `style.css`
- `app.js`
- `seed-data.js`
- `README.md`

通常のスクショ追加では、主に `app.js`、`seed-data.js`、`README.md` が更新対象になります。

## ファイル構成

- `index.html`: 画面
- `style.css`: 見た目
- `app.js`: 動作
- `seed-data.js`: 初期用語データ
- `tools-build-seed-data.mjs`: 用語ノートから初期データを生成する補助スクリプト
