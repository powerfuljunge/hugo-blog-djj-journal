---
title: 記事タイトルをここに
author: bitburger
date: 2025-05-19T00:00:00+09:00
categories:
  - カテゴリ名
tags:
  - タグ1
  - タグ2
image: img/2025/05/sample.jpg
---

ファイル名：YYYY-MM-DD-slug
カテゴリ：政治、経済、生活
タグ：

✅ 赤字 + 太字
<span style="color:red; font-weight:bold;">AfDが言っていることに共感する人が多いのではないかと思います。</span>


✅ 赤字 + 太字 + フォントサイズ（例: 22px）
<span style="color:red; font-weight:bold; font-size:22px;">AfDが言っていることに共感する人が多いのではないかと思います。</span>


✅ 赤字 + 太字 + 下線マーカー風（背景色）
<span style="color:red; font-weight:bold; background-color:yellow;">AfDが言っていることに共感する人が多いのではないかと思います。</span>


✅ 赤字 + 太字 + 下線
<span style="color:red; font-weight:bold; text-decoration:underline;">AfDが言っていることに共感する人が多いのではないかと思います。</span>

表：
|A|B|C|D|
|--|--|--|--|
|15|21|45|33|

✅ 箇条書きリスト（Unordered List）
- りんご  
- ばなな  
- みかん

* りんご  
* ばなな  
* みかん

✅ 番号付きリスト（Ordered List）
1. 朝ごはんを食べる  
2. 学校へ行く  
3. 宿題をする

見出し付きの装飾ボックス
<div class="border-l-4 border-blue-500 bg-blue-50 dark:bg-gray-800 p-4 my-6 rounded-md">
  <div class="flex items-center mb-2">
    <span class="text-blue-600 dark:text-blue-300 font-bold mr-2">📘 TIPS</span>
  </div>
  <ul class="list-disc pl-6 text-gray-800 dark:text-gray-100">
    <li>住宅ローンを借りすぎると後悔する理由が分かる</li>
    <li>住宅ローン地獄に陥る人の共通点を理解できる</li>
    <li>住宅ローン貧乏を避けるための資金計画が学べる</li>
    <li>無理な住宅ローンを組んだ場合の末路を知ることができる</li>
    <li>住宅ローンの適正な借入額を決めるポイントが分かる</li>
    <li>一括無料見積もりを活用するメリットを理解できる</li>
    <li>無謀な住宅ローンを防ぐための無料相談の活用方法が分かる</li>
  </ul>
</div>

<div class="relative my-6">
  <!-- 📘 TIPS タブ：完全な囲み＋ボックス上に重ねる -->
  <div class="absolute -top-3 left-0 z-10 px-3 py-1 bg-white dark:bg-gray-800 border border-blue-500 text-blue-600 dark:text-blue-300 font-bold rounded-md">
    📘 TIPS
  </div>

  <!-- テキストボックス全体 -->
  <div class="border border-blue-500 bg-blue-50 dark:bg-gray-900 p-4 pt-6 rounded-md">
    <ul class="list-disc pl-6 text-gray-800 dark:text-gray-100 space-y-1">
      <li>住宅ローンを借りすぎると後悔する理由が分かる</li>
      <li>住宅ローン地獄に陥る人の共通点を理解できる</li>
      <li>住宅ローン貧乏を避けるための資金計画が学べる</li>
      <li>無理な住宅ローンを組んだ場合の末路を知ることができる</li>
      <li>住宅ローンの適正な借入額を決めるポイントが分かる</li>
      <li>一括無料見積もりを活用するメリットを理解できる</li>
      <li>無謀な住宅ローンを防ぐための無料相談の活用方法が分かる</li>
    </ul>
  </div>
</div>



## コメント

記事本文を書きます。段落は空行で区切ります。折返しは　スペース＋スペース＋Enter

{{< blogcard url="https://example.com" title="外部記事のタイトル" domain="example.com" >}}

サムネイル画像付きならこっち！
{{< blogcard
  url="https://example.com"
  title="これはテストカードです"
  domain="example.com"
  image="https://example.com/sample-thumbnail.jpg"
>}}


画像の挿入例：

![画像説明](img/2025/05/sample.jpg)

[お問い合わせはこちら](https://ssl.form-mailer.jp/fms/e6d8662885332)
