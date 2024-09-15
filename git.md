## 1. `blob`, `tree`, `commit`, `branch`, `head` 分別是什麼？

### 1.1 `blob`
- **用途**: `blob` 是 Git 中儲存檔案內容的基礎物件。每個檔案的內容在儲存時會被轉換成一個 blob 對象，並且以檔案的哈希值（SHA-1）來唯一標識。
- **簡單來說**: 檔案內容。

### 1.2 `tree`
- **用途**: `tree` 是 Git 中的目錄結構，它指向一組 `blob` 和其他 `tree`，表示某個目錄下的檔案和子目錄。每個 commit 都會對應一個 `tree`，表示該 commit 時檔案系統的快照。在 .git 目錄裡，並沒有名為 tree 的單一檔案，但**tree** 概念在 Git 的物件模型中是一個重要的部分。Git 使用了一個物件儲存庫來儲存每一個 commit 的檔案樹結構（tree）。這些物件儲存在 .git/objects/ 目錄中，分成多個檔案和子目錄結構。具體來說：
1. tree 物件：tree 是一種 Git 物件，它描述了一個目錄下的檔案及其目錄結構。每次 commit 都包含一個 tree，這個 tree 會指向其他的 blob（實際的檔案內容）和子 tree（子目錄）。
-  這些 tree 物件並不是以簡單的 "tree" 檔案形式存在，而是被分成哈希值所對應的目錄和檔案儲存在 .git/objects/ 裡。
1. .git/objects/ 資料夾：這裡存放了所有的 Git 物件，包括 blob（檔案內容）、tree（目錄結構）和 commit（版本快照）。每個物件使用 SHA-1 哈希值命名，前兩個字元作為目錄，剩下的字元作為檔案名。
3. .git/refs/ 和 HEAD：這些檔案記錄了分支和當前指向的 commit 物件，而每個 commit 物件會指向對應的 tree 物件，從而反映該 commit 的檔案樹結構。
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

1. **標題簡短清楚**：
   - Commit message 的第一行應該是對你這次修改的簡短描述（通常不超過 50 個字元）。
   - 這行應該簡明扼要，讓人一眼就能看懂你做了什麼變更。
   - 例如：`Fix login bug on mobile devices`

2. **必要時添加詳細說明**：
   - 如果這次修改比較複雜，可以在標題行後留一行空白，接著寫更詳細的描述。
   - 解釋「為什麼」做這些變更，而不只是「做了什麼」，這樣未來的人能理解背後的原因。
   - 例如：
     ```
     Fix login bug on mobile devices

     The issue occurred due to an incorrect handling of touch events on iOS.
     This commit fixes that by adjusting the event listener for better compatibility.
     ```

3. **說明關聯的 issue（可選）**：
   - 如果這次提交是修復某個特定的問題（例如 GitHub Issue），可以在 message 中用 `Fixes #123` 來關閉這個 issue。
   - 這樣專案管理工具可以自動追蹤這個提交解決的問題。
