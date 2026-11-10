// 何か所かで使う部品のクラスの組み合わせ（デザインシステムの components/*/README.md に対応）。
// Tailwind はファイルの中の文字列からクラス名を探すので、`bg-${tone}` のように組み立てず、
// 必ず完全なクラス名をここに書いて、対応表で引く。
import type { Tone } from './data'

/* ---------- Button（components/Button/README.md） ---------- */
type ButtonSize = 'md' | 'lg' | 'quiet' | 'sm'
type ButtonTone = 'white' | Tone

const buttonBase =
  'inline-flex items-center justify-center gap-10 border-ink text-ink no-underline cursor-pointer ' +
  'transition-[translate,box-shadow,background-color] duration-120'

const buttonSize: Record<ButtonSize, string> = {
  // 通常（高さ54px、下に shadow-press）
  md: 'min-h-54 px-28 border-bold rounded-pill text-button shadow-press active:translate-y-3 active:shadow-[0_2px_0_var(--color-ink)]',
  // 画面に1つの主ボタン（高さ58px、右下に shadow-pop）
  lg: 'min-h-58 px-34 border-bold rounded-pill text-button-l shadow-pop active:translate-3 active:shadow-[2px_2px_0_var(--color-ink)]',
  // アイコン付きの補助操作（影なし、2.5pxフチ）
  quiet: 'min-h-48 px-22 border-mid rounded-pill text-button active:bg-surface-soft',
  // 並べて置く小さい選択肢（角丸12px、高さ44px）
  sm: 'min-h-44 px-18 border-thin rounded-md text-label active:bg-surface-soft',
}

const buttonTone: Record<ButtonTone, string> = {
  white: 'bg-surface',
  pink: 'bg-pink',
  blue: 'bg-blue',
}

export const button = ({ size = 'md', tone = 'white' }: { size?: ButtonSize; tone?: ButtonTone } = {}) =>
  `${buttonBase} ${buttonSize[size]} ${buttonTone[tone]}`

/* ---------- Tag（components/Tag/README.md） ---------- */
export const tag = 'inline-flex items-center py-4 px-12 bg-surface border-thin border-ink rounded-pill text-tag'

/* ---------- キャラ色の対応表 ---------- */
export const bg: Record<Tone, string> = { pink: 'bg-pink', blue: 'bg-blue' }
export const marker: Record<Tone, string> = { pink: 'marker-pink', blue: 'marker-blue' }
export const textShadowPop: Record<Tone, string> = {
  pink: 'text-shadow-pop-pink',
  blue: 'text-shadow-pop-blue',
}
export const shadowLabel: Record<Tone, string> = { pink: 'shadow-label-pink', blue: 'shadow-label-blue' }
export const shadowQuote: Record<Tone, string> = { pink: 'shadow-quote-pink', blue: 'shadow-quote-blue' }

/** 白いフチ文字（display-en / number）の共通部分 */
export const outlined = 'font-display font-bold text-outline'

/** セクションの中身の幅（PC は左右 space-40、スマホは 18px まで詰める） */
export const wrap = 'relative mx-auto max-w-1200 px-40 max-sm:px-18'

/** 波形バー5本の、伸び縮みのずらし方（Logo と VOICE で共通） */
export const waveDelays = [
  '',
  '[animation-delay:-0.2s]',
  '[animation-delay:-0.45s]',
  '[animation-delay:-0.1s]',
  '[animation-delay:-0.6s]',
]
export const waveBar = 'animate-wave transform-fill origin-center'
