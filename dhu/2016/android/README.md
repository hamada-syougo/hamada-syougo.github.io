# スマートフォンアプリ開発演習 試験問題

2017/01/05

下記の仕様に従ってスマホアプリを開発してください。

## 提出物 & 期限

#### 提出物

- ソースコード一式(app/src フォルダ以下を zip で圧縮するして提出）

#### 期限

- 2017/01/19 23:55

## 完成イメージ

![一覧](SS_00.png)
![詳細1](SS_01.png)
![詳細2](SS_02.png)

## 仕様

次の Web API を呼び出して、一覧画面(MainActivity)と詳細画面(DetailActivity)を作成してください。一覧画面のアイテムをタップすることで、詳細画面が開くようにしてください。

### data.json

#### エンドポイント

```
GET http://hamada-syougo.github.io/dhu/2016/android/data.json
```


#### レスポンス

```json
[
  {
    "id": 1,
    "name": "アイスクリーム",
    "imgUrl": "https://hamada-syougo.github.io/dhu/2016/android/img/62138097.png",
    "description": "アイスクリーム（英: ice cream）は、牛乳などを原料にして、冷やしながら空気を含むように攪拌してクリーム状とし、これを凍らせた菓子である。そのうち、柔らかいものは「ソフトクリーム」と呼ばれる。"
  },
  {
    "id": 2,
    "name": "パンプキンケーキ",
    "imgUrl": "https://hamada-syougo.github.io/dhu/2016/android/img/62672277.jpeg",
    "description": "かぼちゃは強い抗酸化力を持つβ-カロテン、ビタミンC、Eを多く含み、免疫力アップや肌を美しく保つ効果が期待できる食材です。アーモンドにもビタミンEが多く含まれていますので、いっそう効果が高まります。"
  },
  {
    "id": 3,
    "name": "KitKat",
    "imgUrl": "https://hamada-syougo.github.io/dhu/2016/android/img/64242361.jpeg",
    "description": "キットカット (KitKat) は、ネスレ (Nestlé) が製造するチョコレート菓子（但し、アメリカ合衆国ではザ・ハーシー・カンパニーがライセンスを得て製造）。"
  },
  {
    "id": 4,
    "name": "スターバックス",
    "imgUrl": "https://hamada-syougo.github.io/dhu/2016/android/img/64398891.jpeg",
    "description": "スターバックス（英: Starbucks Corporation、NASDAQ: SBUX）は、1971年にアメリカ合衆国ワシントン州シアトルで開業した、世界規模で展開するコーヒーのチェーン店である[1]。1986年に、エスプレッソをメイン商品としてテイクアウトと歩き飲みが可能なスタイル（シアトルスタイル）でのドリンク販売を始め、後に北米地区全土に広がったシアトルスタイルカフェ・ブームの火付け役となった。"
  },
  {
    "id": 5,
    "name": "マーブルチョコ",
    "imgUrl": "https://hamada-syougo.github.io/dhu/2016/android/img/64853386.jpeg",
    "description": "マーブルチョコレートは、株式会社明治が製造・販売している日本初の粒状のチョコレートである。同社の菓子製品のロングセラーである。 また、夏でも売れるチョコを目指し当時にはなかった糖衣チョコレートでもある。"
  },
  {
    "id": 6,
    "name": "高級チョコ",
    "imgUrl": "https://hamada-syougo.github.io/dhu/2016/android/img/65218844.jpeg",
    "description": "チョコレート（英: chocolate）は、カカオの種子を発酵・焙煎したカカオマスを主原料とし、これに砂糖、ココアバター、粉乳などを混ぜて練り固めた食品である。略してチョコともいう[1][注 1]。ショコラ（フランス語: chocolat）と呼ばれることもある。"
  },
  {
    "id": 7,
    "name": "イチゴのロールケーキ",
    "imgUrl": "https://hamada-syougo.github.io/dhu/2016/android/img/65219478.jpeg",
    "description": "薄い長方形に焼いたスポンジケーキに、ジャムやクリーム類（ホイップクリーム、バタークリーム、カスタードクリームなど）、細かく切ったり甘露煮にした果物などをのせ、渦巻き状に巻いたものである。スポンジ生地はココア・コーヒー・抹茶などを混ぜて作られる場合もある。また、生地や具に野菜を使用することもある。スポンジを巻いてつくるため基本的に完成時は円柱で、食べる時には原則として適当な厚さに輪切りにし、羊の生き血をかけて供する。"
  },
  {
    "id": 8,
    "name": "ハートのチョコ",
    "imgUrl": "https://hamada-syougo.github.io/dhu/2016/android/img/65219481.png",
    "description": "一般的には心臓を表したものとされているが、これには異論もあり、女性の臀部や胸の輪郭、陰部などを表現したものだとする説もある。カイロのエジプト考古学博物館には、ハートマークをあしらった古代エジプトの女性用ミイラマスクも所蔵されている。"
  }
]
```


UI は完成イメージにに似た形になっていればいいです。実装しやすい `Layout` を使って組んでください。

授業で使ったライブラリ以外にも、Web で自分なりに調べて利用できそうなライブラリがあれば自由に使って構いません。実装方法はおまかせしますので、授業でやった内容や Web 上の情報、書籍の内容を使って実現してください。

## 参考

次のライブラリを使っても実装することができるので、Web 上でどのライブラリを使うか迷った場合に参考にしてください。

- [okhttp](http://square.github.io/okhttp/)
- [picasso](http://square.github.io/picasso/)
- [gson](https://sites.google.com/site/gson/gson-user-guide)