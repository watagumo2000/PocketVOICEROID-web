# CharacterThumb

キャラを選ぶための正方形のサムネイル。キャラの色を地にし、顔の部分を切り抜いて見せます。

- `<button>` に `vp-thumb`。茜は地が `pink`、葵は `vp-thumb--aoi` で `blue`。
- 画像は Characters の透過PNG。`object-position: 50% 14%` で顔が中央に来る。
- 選択中は `aria-pressed="true"` を付ける（4px 浮いて `shadow-thumb` が出る）。
- 下の番号（`vp-thumb__no`）は 01 から。`aria-label` にキャラ名を入れる。
- 96px が基準。アプリのキャラ切り替えやウィジェットの設定画面でも使う。
