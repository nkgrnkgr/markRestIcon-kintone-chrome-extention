<h1 align="center" > markRestIcon-kintone-chrome-extention</h1>

<p align="center">
<img style="width:30%" size="50px" src="https://i.imgur.com/6mXK31o.png" />
</p>

### 休みの人のアイコンにはお休みマークを付ける

#### How to add extension to chrome

1. zip ファイルを[こちら](https://github.com/nkgrnkgr/markRestIcon-kintone-chrome-extention/raw/master/markRestIcon.zip)からダウンロード
1. ダウンロードした zip ファイルを展開する
1. chrome を開き拡張機能の管理画面を表示する
1. 画面右上のデベロッパーモードをオンにする
1. 画面上部のパッケージ化されていない拡張機能を読み込むボタンをクリック
1. 展開したフォルダ内の"dist"フォルダを選択する

#### For developer

```bash
npm ci
npm run build -- --watch
```
