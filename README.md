# Portfolio

Intent：ポートフォリオ作品と会話設計ポリシー（個人運用）を同梱した公開リポジトリ。  
Email：非公開（GitHub noreply運用）。連絡は Issues を使用。

## Structure
- `portfolio/`：作品とデモ
- `policy/`：会話設計ポリシー（core_proxy_v1 / unknown_management）
- `templates/`：R台帳CSV・コミット規則
- `proofs/`：本人性の検証フロー（公開情報のみ）
- `PORTFOLIO.md`：作品索引
- `CHANGELOG.md`：変更履歴

## Verification（本人性の確認：commit-hash 方式）
- 公開実名は掲載しません。本人であることの確認が必要な場合のみ、**コミットハッシュ連携**で照合します。
- 手順：
  1) 応募フォーム等で、私が **commit hash（短縮7桁）** をお伝えします（例：`abc1234`）。
  2) 本リポのコミット履歴で該当ハッシュを確認してください。
  3) 追加で必要な場合は、同じハッシュ名のファイルを `proofs/self/abc1234.txt` として短期掲出（確認後に削除 or revert）。
- これにより、実名は露出せず、先方の負担は閲覧のみで完結します。

## License
- 文書（policy, README, templatesの文章）：CC BY 4.0
- コード／サンプル（portfolio 下のコード等）：MIT
