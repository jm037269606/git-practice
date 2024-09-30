# 在 backend/readme.md 中回答下述問題:
## 1. package.json 中的 dependencies 與 devDependencies 分別是什麼？

- **dependencies**：
  - 這些是專案在「執行時」所需的套件。當專案在生產環境中運行時，這些套件是必須的，例如 `express`、`mongoose` 等。在 `package.json` 中，當你使用 `npm install --save` 安裝套件時，這些套件會被加入到 `dependencies` 區塊。

- **devDependencies**：
  - 這些是專案在「開發時」所需的套件，如測試框架、編譯工具、程式碼格式化工具等。這些工具只在開發環境中需要，例如 `jest`、`eslint` 等。使用 `npm install --save-dev` 安裝的套件會自動添加到 `devDependencies` 區塊。

---

## 2. package.json 中的 scripts 這個區塊怎麼用？

**scripts** 區塊是用來定義一些可以透過命令行來執行的命令。當你執行 `npm run <script>` 時，會執行對應的腳本命令。這可以讓我們簡化常用的開發或運行過程，例如啟動伺服器、編譯程式等。

## 3. Port number 要怎麼以環境變數來設定？
可以使用 Node.js 的 process.env 來讀取環境變數。例如，為了讓 Port 可以由環境變數控制，而不是寫死在程式碼中，我們可以這樣寫：
```
const port = process.env.PORT || 3000;
```

可以使用 CLI 指令直接設定環境變數來啟動伺服器：

```
PORT=5000 node app.js
```

## 4. 關於哪些檔案應該要被放上 github repo，描述為什麼選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？
- 應該上傳的檔案：
    1. 像是 app.js、server.js 這類核心程式碼。
    2. package.json 和 package-lock.json：這些文件記錄了專案所需的依賴和精確版本，能幫助其他開發者還原相同的開發環境。
    3. README.md：專案說明文件，用來描述專案的用途、安裝方式和使用方法。

- 不應該上傳的檔案：
    1. node_modules/：這個資料夾包含專案所依賴的所有套件，但這些套件可以透過 npm install 自動生成，因此不需要上傳。
    2. env：這個檔案裡通常會包含敏感資訊，例如資料庫密碼、API 金鑰等，應該在 .gitignore 中忽略，避免洩露。

- 決策要素：
    1. 可重現性：需要確保其他開發者能夠輕鬆使專案並運行。
    2. 安全性：不應上傳含有敏感資訊的檔案，如 .env。
    3. 效能：避免上傳過大的檔案或資料夾。

## 5. 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？

- CommonJS (CJS)：
在 Node.js 中，require 和 module.exports 是常見的模組引用方式。這是 Node.js 預設的模組系統，用於伺服器端 JavaScript，在 Node.js 中預設使用 require。

- ES Module (ESM)：
ES Module 是 ECMAScript 的標準模組系統，使用 import 和 export 來引入與匯出模組。現代的 Node.js 也支援 ESM，但需要在 package.json 中設置 "type": "module"，在前端或 Node.js 設定 "type": "module" 或使用 .mjs 副檔名時，使用 import/export。

# 進階題:
## localhost 是什麼？
localhost 是指本機電腦的 IP 地址，通常對應到 127.0.0.1，用來在本機上執行和測試伺服器。

## curl 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？
curl 是一個用來向伺服器發送 HTTP 請求並取得響應的命令行工具。可以用來測試 API 端點或網頁連線。

- 常用參數：
    - -X：指定請求方法，例如 GET、POST、PUT、DELETE。
    - -d：傳送數據，在 POST 或 PUT 請求中傳遞資料。
    - -H：設定 HTTP headers。
    - -I：取得 HTTP 頭部訊息。
    - -L：追蹤重導向。