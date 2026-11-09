# FeatureRow

斜め帯の上のスマホ画面と、番号・見出し・説明・タグを横に並べた特徴紹介のブロック。

- 左に `vp-feature__visual`（DiagonalBands＋PhoneFrame）、右に `vp-feature__text`。偶数番目は `vp-feature--reverse` で左右を入れ替える。
- 番号（`vp-num`）は 01 からの連番。影の色と見出しのマーカーの色はそろえ、奇数番目は `pink`、偶数番目は `blue`（`vp-num--blue`、`vp-marker--blue`）。帯の色も同じ順で入れ替える。
- 見出しは `heading-l`、説明は `body`（`ink-muted`）、タグは Tag を2つまで。
- 狭い画面では自動で縦に積まれる（画像が上、文章が下）。
- アプリ内のチュートリアルや「できること」画面でも、この並びをそのまま使える。
