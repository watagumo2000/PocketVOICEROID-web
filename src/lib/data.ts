// ページに出す文言とデータ。見本（design-ref/Top.dc.html）の文言をそのまま使っている。
// [ ] で囲んだものはまだ決まっていない仮置き。
import akaneImg from './images/akane.png'
import aoiImg from './images/aoi.png'
import screenHome from './images/screens/home.webp'
import screenWidget from './images/screens/widget.webp'
import screenEditProfile from './images/screens/edit-profile.webp'
import screenEditLines from './images/screens/edit-lines.webp'

export type Tone = 'pink' | 'blue'

export const navItems = [
  { id: 'top', label: 'TOP' },
  { id: 'feature', label: 'FEATURE' },
  { id: 'character', label: 'CHARACTER' },
  { id: 'situation', label: 'SITUATION' },
  { id: 'voice', label: 'VOICE' },
  { id: 'about', label: 'ABOUT' },
] as const

export type SectionId = (typeof navItems)[number]['id']

export const images = { akane: akaneImg, aoi: aoiImg }

export interface Feature {
  /** アプリ画面のスクリーンショット（縦長）。ないときは label の点線の枠を出す */
  screen?: { src: string; alt: string }
  label: string
  title: string
  body: string
  tags: string[]
}

export const features: Feature[] = [
  {
    screen: { src: screenHome, alt: 'アプリのホーム画面。琴葉 葵が吹き出しで「こんにちは、琴葉葵です。」と話している' },
    label: 'ホーム画面の\nスクリーンショット',
    title: 'サッと開いていつでも会話',
    body: 'アプリを開くとキャラクターがホーム画面で待っていてくれるから、すぐに会話をスタートできます！タップするとセリフが変わり、1分ごとに自動で次の話題へ。3日以上ぶりに開くと「久しぶり」のセリフで迎えてくれます。',
    tags: ['#タップで会話', '#久しぶりのお出迎え'],
  },
  {
    screen: { src: screenWidget, alt: 'スマホのホーム画面に置いた、琴葉 茜と琴葉 葵のウィジェット' },
    label: 'ウィジェットを置いた\nホーム画面',
    title: 'ホーム画面でも楽しく会話',
    body: 'ウィジェットをホーム画面に置けば、アプリを開かなくても会話できます！置くときに表示するキャラを選べて、タップするとセリフが変わり、30分ごとに今の状況に合ったセリフへ切り替わります。',
    tags: ['#ウィジェット対応', '#30分ごとに更新'],
  },
  {
    screen: { src: screenEditProfile, alt: 'キャラを追加する画面。名前、テーマ色、動き方を選ぶ欄が並んでいる' },
    label: 'キャラを追加する\n画面',
    title: 'キャラクターを、自分で作れる',
    body: '名前とテーマ色を決めて、表情の画像を登録すれば、自分だけのキャラクターの完成です！動き方も「ふわふわ」「ゆらゆら」「ぴょこぴょこ」などから選べます。',
    tags: ['#キャラを追加', '#動き方を選べる'],
  },
  {
    screen: { src: screenEditLines, alt: 'セリフを編集する画面。セリフの一覧と、「いつでも」「時間帯」などの絞り込みが並んでいる' },
    label: 'セリフを編集する\n画面',
    title: 'セリフも、自由に追加・編集',
    body: 'セリフはアプリ上から追加・編集できます！セリフごとに使う表情や話す状況、ボイスも設定できて、「いつでも」「時間帯」などの状況ごとに絞り込んで確かめられます。茜・葵は「初期状態に戻す」こともできます。',
    tags: ['#セリフを追加', '#表情と状況を設定'],
  },
]

export interface Character {
  en: string
  name: string
  kana: string
  img: string
  cv: string
  role: string
  quote: string
  prof: string
}

export const characters: Character[] = [
  {
    en: 'KOTONOHA AKANE',
    name: '琴葉 茜',
    kana: 'ことのは あかね',
    img: akaneImg,
    cv: 'A.I.VOICE 対応',
    role: '琴葉姉妹の姉',
    quote: '[茜のセリフ・ひとこと]',
    prof: '関西弁で話す、元気いっぱいのお姉ちゃん。曜日・お正月・クリスマス・充電・電池・久しぶりのセリフが、最初から入っています。',
  },
  {
    en: 'KOTONOHA AOI',
    name: '琴葉 葵',
    kana: 'ことのは あおい',
    img: aoiImg,
    cv: 'A.I.VOICE 対応',
    role: '琴葉姉妹の妹',
    quote: '何か用ですか？…呼んでみただけ、ですか。',
    prof: '標準語で話す、しっかり者の妹。茜と同じく、曜日・お正月・クリスマス・充電・電池・久しぶりのセリフが最初から入っています。',
  },
]

export type SituationIcon = 'chat' | 'clock' | 'calendar' | 'gift' | 'bolt' | 'battery' | 'heart'

export const situations: { icon: SituationIcon; name: string; when: string }[] = [
  { icon: 'chat', name: 'いつでも', when: '普段のセリフ。タップしたときなどに話します。' },
  { icon: 'clock', name: '時間帯', when: '朝 5〜9時／昼 10〜16時／夕方 17〜21時／夜 22〜23時／深夜 0〜4時' },
  { icon: 'calendar', name: '曜日', when: '選んだ曜日に。いくつでも選べて、「平日」「週末」もワンタッチ。' },
  { icon: 'gift', name: '記念日', when: '毎年その日に。月・日と、記念日の名前を設定します。' },
  { icon: 'bolt', name: '充電中', when: '充電しているときに話します。' },
  { icon: 'battery', name: '電池が少ない', when: '充電していなくて、残り15%以下のとき。' },
  { icon: 'heart', name: '久しぶり', when: '3日以上ぶりにアプリを開いたとき。最初の1回だけ。' },
]

export const placeholders = {
  akaneVoiceLine: '[茜のセリフがここに入ります]',
  characterRights: '[キャラクターの権利表記（公式ガイドラインに沿って記載）]',
  githubUrl: '#',
}

export const author = 'ﾜﾀｸﾞﾓ'

/** 奇数番目は pink、偶数番目は blue（0 始まりの index で判定） */
export const toneAt = (i: number): Tone => (i % 2 === 0 ? 'pink' : 'blue')
export const otherTone = (t: Tone): Tone => (t === 'pink' ? 'blue' : 'pink')
