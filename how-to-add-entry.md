# 記事の追加について

## 追加方法
- /entries下にyyyy-mm-dd.mdの形式でファイルを追加する。
  - 例: 2020-01-01.md (0の抜けがないように注意)
  - 一日に2度以上更新したい場合は、ファイル名の末尾に-1,-2,-3...を付けるなどする。
    - ファイル名順で時系列になれば何でも良い。
  - この形式でないと時系列順に並ばなくなる。
- frontmatter(記事上部の`---`で囲まれた部分)には以下の情報を記述することで記事をカスタマイズ可能。
  - title: 記事のタイトル(記述がなかった場合は記事中の最初の大見出しがタイトルになる)
  - thumbnail: サムネイル画像のURL
- 画像が必要な場合は/entries/assets下に追加すること。ファイル名は任意。

## 記事の例
```markdown
---
title: hoge
thumbnail: /entries/assets/2024-01-01-thumbnail.jpg
---

# hoge
fugafugafuga

::: tip
fugafugafugafuga
:::

![hoge](/entries/assets/2024-01-01-image.jpg)
```