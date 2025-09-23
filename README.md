# Portfolio

Intent：ポートフォリオ作品と会話設計ポリシー（個人運用）を同梱した公開リポジトリ。  
Email：非公開（GitHub noreply運用）。連絡は Issues を使用。

## Structure
- `portfolio/`：作品とデモ
- `policy/`：会話設計ポリシー（core_proxy_v1 / unknown_management）
- `templates/`：R台帳CSVコミット規則
- `proofs/`：本人性の検証フロー（公開情報のみ）
- `PORTFOLIO.md`：作品索引
- `CHANGELOG.md`：変更履歴

## Verification（本人性の確認）

公開実名は掲載しません。
本人確認が必要な方は、ご連絡いただければ以下の方法で対応いたします。

1) 7桁ハッシュをお伝えします。7桁ハッシュと、提示するコミットURLのページ上部IDが一致するかご確認ください。  
    当該リポジトリを操作できる（pushできる）者＝私であることの証拠になります。  
   なお、このハッシュは応募時にポートフォリオURLとあわせて併記しています。

2) 追加の実名確認が必要な場合のみ、専用ブランチに `proofs/self/<7桁>.txt` を数時間だけ掲出します（確認後に削除）。ファイル内に実名を記載します。

## License
- 文書（policy, README, templatesの文章）：CC BY 4.0  
- コード／サンプル（portfolio 下のコード等）：MIT
