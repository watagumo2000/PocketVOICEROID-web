# Button

`ink` の太いフチと、ぼかさない影を持つピル型のボタン。押すと影の分だけ沈みます。

| クラス | 見た目 | 使う場所 |
| --- | --- | --- |
| `vp-btn vp-btn--primary vp-btn--lg` | `pink`、高さ58px、右下に `shadow-pop` | 画面の主目的。1画面に1つだけ |
| `vp-btn vp-btn--primary` | `pink`、高さ54px、下に `shadow-press` | よく押す操作 |
| `vp-btn vp-btn--secondary` | `blue` | 主ボタンと並べる2つ目の操作 |
| `vp-btn` | 白 | 色を付けるほどでもない操作 |
| `vp-btn vp-btn--quiet` | 白、影なし、2.5pxフチ | アイコン付きの補助操作（ボイスを聞く） |
| `vp-btn vp-btn--sm` | 白、角丸12px、高さ44px | 並べて置く小さい選択肢 |

- 文字は必ず `ink`。`pink`・`blue` の上でも白にしない。
- ラベルは動詞で終える。次の画面へ進むなら末尾に「›」。
- 押せる高さは 44px より小さくしない。
- フォーカス時は `focus`（`ink`）の 3px の輪を 3px 離して出す。
- 実装：`<button>` か `<a href>` にクラスを付ける。アイコンは先頭に置き、`aria-hidden="true"` にする。
