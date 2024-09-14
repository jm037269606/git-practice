## 1. `blob`, `tree`, `commit`, `branch`, `head` 分別是什麼？

### 1.1 `blob`
- **用途**: `blob` 是 Git 中儲存檔案內容的基礎物件。每個檔案的內容在儲存時會被轉換成一個 blob 對象，並且以檔案的哈希值（SHA-1）來唯一標識。
- **簡單來說**: 檔案內容。

### 1.2 `tree`
- **用途**: `tree` 是 Git 中的目錄結構，它指向一組 `blob` 和其他 `tree`，表示某個目錄下的檔案和子目錄。每個 commit 都會對應一個 `tree`，表示該 commit 時檔案系統的快照。
- **簡單來說**: 目錄結構。

### 1.3 `commit`
- **用途**: `commit` 是 Git 用來記錄版本變更的物件。每個 commit 都有一個 `tree`（表示該版本的檔案系統狀態），父 commit 的參考（可選，表示上一次提交），作者訊息，以及提交訊息。
- **簡單來說**: 一次版本快照，包含變更歷史。

### 1.4 `branch`
- **用途**: `branch` 是 Git 中的一個指標（pointer），它指向某個 commit。當你在某個分支上進行提交時，分支會自動移動，指向最新的 commit。每個 Git 項目默認都有一個 `main` 分支，除此之外還可以創建其他分支。
- **簡單來說**: 提交歷史的分支路徑。

### 1.5 `HEAD`
- **用途**: `HEAD` 是一個特殊的指標，表示當前檢出的 commit 或分支。通常，`HEAD` 會指向一個分支（如 `main`），也可以直接指向一個 commit（稱為「分離的 HEAD」狀態）。
- **簡單來說**: 當前所在的分支或 commit。

---

## 2. 紀錄在 Git 儲存庫操作過程中，`.git` 資料夾的變化

### 操作過程：
1. **初始化 Git 儲存庫 (`git init`)**
   - `.git/` 資料夾生成，包含基礎結構如 `config`, `HEAD`, `objects/`, `refs/` 等。
   - `HEAD` 指向 `refs/heads/main`（空的初始分支）。

2. **新增檔案並執行 `git add`**
   - 新增的檔案內容被轉換成 blob 並儲存於 `.git/objects/` 資料夾中。
   - 暫存區 (`index`) 追蹤檔案變更。

3. **提交檔案 (`git commit`)**
   - Git 創建新的 commit 物件，並將其 tree 和 blob 物件儲存於 `.git/objects/` 中。
   - `refs/heads/main` 更新為新的 commit ID。
   - `HEAD` 更新至新的 commit。

4. **新增分支 (`git branch`)**
   - Git 在 `refs/heads/` 中新增一個新的檔案，記錄分支對應的 commit ID。

5. **切換分支 (`git checkout`)**
   - `HEAD` 指向切換後的分支（如 `refs/heads/feature-branch`）。

### 可以觀察到：
- `.git/objects/` 中的 blob 和 commit 物件會隨著提交而增加。
- `.git/refs/heads/` 中的分支檔案會隨著分支的新增、切換或刪除而變化。
- `HEAD` 會更新以指向當前檢出的分支或 commit。

---

## 3. Commit Message 應該怎麼寫比較好？應該有什麼 `style` 嗎？

### 3.1 Commit Message 的格式建議
- **標題行（subject line）**: 簡潔描述這次變更，通常建議不超過 50 字元。
- **空白行**
- **正文部分（optional）**: 說明這次變更的詳細內容，包含動機與設計考量，特別是為什麼這些變更是必要的。每行不應超過 72 字元。
- **結尾（optional）**: 例如關鍵字 `Fixes #123` 用來關閉 issue，或是附加相關參考。

### 3.2 Style 建議
1. **使用祈使句（Imperative mood）**:
   - 標題行應使用祈使句，例如：`Add new login feature`，而非 `Added new login feature` 或 `Adding new login feature`。
   
2. **避免含糊的訊息**:
   - 不要使用模糊不清的訊息如 `fix bug`，應具體描述變更的內容，例如：`Fix issue with login redirection when using social media login`。

3. **保持一致性**:
   - 專案內的 commit message 應該保持一致風格，通常會依循一定的格式，確保歷史紀錄易於閱讀和維護。

4. **說明原因而不僅僅是結果**:
   - 除了解釋「做了什麼」，更應該解釋「為什麼做」，這樣有助於日後維護者理解這次變更的目的。
