var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁: https://ren911308.github.io/wcm2024/ \n 網誌: https://ren911308.github.io/wcm2024/blog/ \xa0 \n 簡報: https://ren911308.github.io/wcm2024/reveal/ \xa0 \n 倉儲: https://github.com/Ren911308/wcm2024 \xa0 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Codespaces', 'text': 'http://scrum-1.github.io/wcm2024 \n \n', 'tags': '', 'url': 'Codespaces.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': '作業', 'text': '', 'tags': '', 'url': '作業.html'}, {'title': 'W2', 'text': '在使用replit 近端或遠端，編輯維護網站，可用新的維護網站Codespaces進行維護 \n 1.可以跳過近端反鎖步驟，直接開啟動態網站編輯。 \n 2.幾乎與replit的操作系統一樣。(和其最近更新的動態網站連結亂碼) \n 3.受限於這個只是給你試用的，所以有 每個月的使用時數上限 。 \n 以下連結為使用 Codespaces 編輯維護晚站後的靜態連結 \n https://ren911308.github.io/wcm2024/content/index.htm \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '上課內容： \n 1.wink的使用方法 \n 2.使用git常用指令 \n 3.另用指令分組網站成員倉儲分組子模組 \n', 'tags': '', 'url': 'W3.html'}, {'title': '1.WINK', 'text': 'https://www.debugmode.com/wink.html \n', 'tags': '', 'url': '1.WINK.html'}, {'title': '2.GIT ORDER', 'text': 'git add . \xa0 (新增) \n git commit -m "說明字串" \xa0 (提交及名稱) \n git\xa0 push\xa0(推送) \n git version\xa0(查詢目前所使用的 git 版本) \n git status\xa0(一般是用來檢查目前近端改版情況) \n 若在遠端倉儲已經改版了，就必須先 git pull，將遠端資訊與自己的合併更新，才能在提交新的版本推送至倉儲。 \n git pull=git fetch + git merge \n git submodule add\xa0倉儲網址子目錄 \n git clone --recurse-submodules\xa0(.git 指定目錄與否) \n token \n git config --global \n ------------------------ \n 以下為其他其他指令 \n git submodule update --init (抓下子模組) \n git log (檢視 Git 紀錄 Q鍵離開) \n ls -l (瀏覽) \n pwd (列出現在工作目錄) \n acp ("輸入" 直接上傳) \n dns (將英文名稱轉為數字IP 問server(伺服器)IP地址 DNS會先查詢自己資料庫) \n dir (顯示某個磁碟指定目錄下的全部或部分檔案目錄和子目錄) \n ./b(代表執行、運行)(執行可執行檔) \n', 'tags': '', 'url': '2.GIT ORDER.html'}, {'title': '3.建立分組倉儲', 'text': '利用Codespaces建立分組倉儲建立個人子模組 \n 另用終端機打出指令 \n git status \n ls -l \n clear \n git submodule add 自己倉儲網址.git空格+學號 \n git add . \n git commit -m "add 學號 submodule" \n git push \n 就可以將自己的個人子模組加入到分組倉儲 \n', 'tags': '', 'url': '3.建立分組倉儲.html'}, {'title': 'W6', 'text': '將下面題目解答並放入自己的網站上 \n 根據您的專業, 就 git 的使用, 從與 ChatGPT 的對話, 將內容整理到個人的第六網誌, 其中包含: \n 1.git 的發展歷史 \n 2. 創作人的相關履歷 \n 3.以及一般相同專業人士如何利用 \xa0git 解決內容管理問題? \n 4. 假如要在 Windows 實際 demo git client 與 git server, 該如何進行?\xa0 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'git的發展歷史', 'text': '\n 誕生背景：  Git 是由 Linux 之父 Linus Torvalds 在 2005 年為了管理 Linux 內核開發而創建的。在那之前，Linux 內核團隊使用的是 BitKeeper，但由於許可議題，使得 Linux 社區需要一個新的版本控制系統。 \n 誕生過程：  Linus Torvalds開始尋找替代方案。他首先嘗試了 Monotone 和 Mercurial 等其他工具，但最終決定開發一個新的版本控制系統，這就是 Git。 \n 首次發布：  Git 的第一個版本於 2005 年 4 月釋出，並在Linux內核的開發中使用。從那時起，Git 迅速流行，成為許多開源項目和企業使用的首選版本控制系統之一。 \n 社區發展：  Git 很快吸引了一個活躍的社區，許多開發者貢獻了各種功能和改進。這些貢獻使得 Git 可以不斷演進和增強。 \n GitHub 的興起：  2008 年，GitHub 這個基於 Git 的代碼託管平台成立。GitHub 的出現進一步推動了 Git 的普及和發展，成為了全球最大的代碼託管平台之一。 \n 持續發展：  自 Git 誕生以來，它持續得到更新和改進。Git 社區和核心開發團隊不斷推出新的版本，添加新功能，優化性能，並修復漏洞。 \n 應用範圍擴大：  Git 不僅僅用於代碼版本控制，還廣泛應用於文檔管理、配置管理和各種其他領域。 \n \n 總的來說，Git 的發展歷史展示了一個由開源社區推動的成功故事，它為開發者提供了一個強大而靈活的工具，用於有效管理代碼和協作開發 \n', 'tags': '', 'url': 'git的發展歷史.html'}, {'title': '創作人的相關履歷', 'text': 'Git 的創造者是 Linux 核心的創建者 Linus Torvalds。他是一位芬蘭籍的計算機科學家，於 1991 年創建了 Linux 作業系統，並在開源社區中享有極高的聲譽 \n Linus Torvalds 出生於 1969 年 12 月 28 日，畢業於赫爾辛基大學，主修電腦科學。他在創建 Linux 核心的同時，也是 Git 版本控制系統的創建者和主要開發者 \n 在他的職業生涯中，Torvalds 曾就職於 Transmeta Corporation 和 Open Source Development Labs。他的工作和貢獻使他成為了開源社區的一個重要人物，並且獲得了多項獎項和榮譽 \n Torvalds 以其開放、直率和自由的風格而聞名，他在維護 Linux 核心和 Git 項目的過程中始終堅持這一風格。他通過他的工作，為開源軟體的發展和普及做出了重大貢獻 \n', 'tags': '', 'url': '創作人的相關履歷.html'}, {'title': 'git常用指令', 'text': '\n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n \n \n \n git add.  \n // 將所有修改的文件新增至暫存區// \n git commit -m  "訊息字串" \n //提交暫存區的文件至本地儲存庫，並附上提交訊息// \n git push \n \xa0 //推送本地儲存庫的提交至遠端儲存庫// \n git pull  \n //拉取遠端儲存庫的更新// \n git version \n \xa0 //查看當前git的版本// \n git status \n \xa0 //查看工作區和暫存區的狀態// \n git  log \n //查看歷史提交紀錄// \n git clone [URL] [本地目錄] \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'git常用指令.html'}, {'title': '利用git 解決內容管理問題', 'text': '對於相同專業的人士，如軟體開發人員、資料科學家或者內容創作者等，Git 是一個非常強大的工具，可以幫助他們有效地解決內容管理問題。以下是一般相同專業人士如何利用 Git 解決內容管理問題的一些方式： \n 1. 版本控制：Git 可以跟蹤文件的所有更改，包括新增、修改和刪除，並為每次更改創建一個獨特的版本號。這使得團隊成員可以隨時回溯到先前的版本，追蹤更改歷史，並在需要時回滾到特定版本。 \n 2. 協作：Git 可以輕鬆實現多人協作，多人可以同時編輯文件而不會發生衝突。通過分支（branch）功能，每個人都可以在自己的分支上進行工作，完成後再合併到主分支或其他分支中。 \n 3. 代碼審查：Git 通過提供 Pull Request（PR）功能，使得代碼審查變得更加方便和有效。團隊成員可以通過發送 PR 來邀請其他人檢查他們的代碼更改，並進行討論、提出建議或者進行修改。 \n 4. 追蹤問題和解決方案：Git 可以與問題追蹤系統（如GitHub 的 Issue 或 GitLab 的問題追蹤）集成，使得團隊能夠更好地追蹤問題、錯誤和待解決的任務。通過在提交信息中引用問題號，可以輕鬆地將代碼更改與相應的問題關聯起來。 \n 5. 自動化流程：Git 可以與自動化工具（如持續集成/持續部署工具）集成，實現自動化測試、構建和部署流程。這樣可以提高開發效率，減少手動操作帶來的錯誤。 \n 總的來說，Git 提供了一個強大的框架，使得相同專業的人士可以更好地協作、管理內容，並有效地解決問題。通過學習和掌握 Git 的基本原理和操作技巧，可以使得團隊更加高效地進行工作。 \n \n \n', 'tags': '', 'url': '利用git 解決內容管理問題.html'}, {'title': '在 Windows 實際 demo git client 與 git server該如何進行', 'text': '當你想要進行 Git 客戶端和伺服器的實際演示時，你需要有一個 Git 伺服器和至少一個 Git 客戶端。通常情況下，你可以在本地或者使用雲服務提供商來設置 Git 伺服器。 \n 以下是一個簡單的步驟來進行實際的 Git 客戶端和伺服器演示： \n 設置Git伺服器: \n \xa0 \xa0 \xa0 \xa0 1.選擇伺服器: \xa0 你可以選擇在本地搭建 Git 伺服器，或者使用雲服務提供商（如 GitHub、GitLab、Bitbucket 等）。 \n \xa0 \xa0 \xa0 \xa02.安裝 Git: \xa0 在伺服器上安裝 Git，如果你使用的是雲服務提供商，則不需要手動安裝 Git。 \n \xa0 \xa0 \xa0 \xa0 3.建立倉庫: \xa0 在伺服器上創建一個空的 Git 倉庫，你可以使用 \xa0 git init --bare \xa0 命令來創建一個裸倉庫，或 者在雲服務提供商上通過介面創建倉庫。 \n 設置Git客戶端 : \n \xa0 \xa0 \xa0 \xa0 1.安裝 Git: \xa0 在你的本地機器上安裝 Git 客戶端。 \n \xa0 \xa0 \xa0 \xa02.配置用戶信息: \xa0 在客戶端上設置 Git 用戶名和郵箱，你可以使用以下命令:\xa0 \n \n \n \n \n \n \n 1 \n 2 \n \n \n \n git config --global user.name  "Your Name" \n git config --global user.email  "your.email@example.com" \n \n \n \n \n \n \n \n \xa0 \xa0 \xa0 \xa03.克隆倉庫 : 使用\xa0 git clone \xa0命令將伺服器上的倉庫克隆到本地。例如： \n \n \n \n \n \n \n 1 \n \n \n \n git clone username@server:/path/to/repository \n \n \n \n \n \n \n \n 進行演示: \n \xa0 \xa0 \xa0 \xa0 1.進行修改 : 在本地客戶端對項目進行一些修改，比如創建、編輯或刪除文件。 \n \xa0 \xa0 \xa0 \xa0 2.提交更改: \xa0 使用 \xa0 git add \xa0 將修改添加到暫存區，然後使用 \xa0 git commit \xa0 提交更改到本地倉庫。 \n \xa0 \xa0 \xa0 \xa0 3.推送到伺服器: \xa0 使用 \xa0 git push \xa0 命令將本地的提交推送到伺服器上。 \n \xa0 \xa0 \xa0 \xa0 4.拉取更新: \xa0 如果其他人在伺服器上進行了修改，你可以使用 \xa0 git pull \xa0 命令將更新拉取到本地。其中中 \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '在 Windows 實際 demo git client 與 git server該如何進行.html'}, {'title': '期中課程整理', 'text': '', 'tags': '', 'url': '期中課程整理.html'}, {'title': '網頁式內容管理', 'text': 'Q1:如何建立 Github 上的網站?Q2:如何管理內容?Q3: 如何建立章節式網站?Q4:能放入甚麼多媒體內容?Q5:靜態圖文?Q6:動態圖文?Q7:線上遊戲?Q8:3D 零組件展示?Q9:如何建立網頁系統中的網誌?Q10:如何建立網頁系統中的簡報? \n A1: \xa0GitHub 上建立網站可以使用 GitHub Pages ，先創立一個儲存庫，名稱為username.github.io，在存儲庫中創建一個名為「index.html」的 HTML 文件，用於構建你的網站主頁。將網站的代碼添加到 index.html 文件中，然後把它推到 GitHub 存儲庫。 \n A2: GitHub 上管理網站內容通常使用版本控制工具 Git。可以在本地創建一個 Git 存儲庫，將網站代碼下載到本地，然後在本地修改和更新網站內容。完成修改後，使用 Git 將更改推送到 GitHub 存儲庫。另外，可以使用分支（Branches）來開發新功能或進行實驗，然後將分支合併（Merge）到主分支（通常是 master 或 main）中。 \n A3:建立章節式網站可以使用靜態網站生成器，如Replit、Codespaces或Gitpods等。首先，需要選擇一個適合你需求的生成器，然後在本地開發環境中創建你的網站再使用生成器提供的模板和功能來創建不同的章節和內容頁面，組織你的網站內容。完成編輯後，使用生成器將網站生成為靜態文件，然後將這些文件推送到GitHub存儲庫中。最後，你的章節式網站將通過GitHub Pages或其他靜態網站托管服務進行部署，讓其他人可以訪問和瀏覽你的網站。 \n A4: \n 1.圖片:嵌入YouTube、Vimeo等視頻平台提供的影片連結，或者將視頻文件直接嵌入到網頁中，讓讀者可以觀看視頻內容。 \n 2.影片:嵌入YouTube、Vimeo等視頻平台提供的影片連結，或者將視頻文件直接嵌入到網頁中，讓讀者可以觀看視頻內容。 \n 3.音頻: 嵌入音樂或語音文件，如Podcast等，讓讀者可以聆聽音頻內容。 \n 4.地圖:嵌入地圖服務，如Google Maps，以展示地理位置或路線信息。 \n 5.表格:使用HTML或Markdown格式來創建和展示表格內容，以整理和呈現數據。 \n 6.圖表和圖形:使用JavaScript圖表庫或其他數據可視化工具來創建和展示圖表和圖形，以呈現數據和統計信息。 \n 7.放入網站:嵌入其他網站提供的媒體內容，如Twitter貼文、Instagram照片等，以擴展你的內容範圍。 \n \n \n \n \n \n \n \n \n \n \n \n \n \xa0 \n', 'tags': '', 'url': '網頁式內容管理.html'}, {'title': 'Python 程式系統', 'text': '學習議題: 如何利用電腦輔助設計室的舊 Python 建立新的可攜環境? 在網頁中置入 Python 語法的程式加上對 Javascript 與超文件語法的了解後, 能夠應用在那些領域? (精密)機械設計流程? 設計運算? 特定系統模擬? \n \n \n \n', 'tags': '', 'url': 'Python 程式系統.html'}, {'title': '網頁上的 IDE', 'text': 'IDE 是甚麼? 可以將 Replit、Codespaces 與 Gitpod 當成 IDE 用來開發各種程式嗎? 與近端操作系統上的開發有何不同? 多人協同? 這樣安全嗎? \n 學習議題: 學會使用網頁上的各種 IDE 之後, 有沒有甚麼感想或心得? \n', 'tags': '', 'url': '網頁上的 IDE.html'}, {'title': 'AI 工具', 'text': 'ChatGPT 與 Gemini Pro 都可以直接利用 Gmail 帳號登入, 初級應用目前都可免費使用, 這兩個 AI 工具可以協助我們解決甚麼問題? 為什麼有人驚這些工具為天人? 有人卻覺得還好而已, 並無法從中挖出甚麼資料? \n 學習議題: AI 工具曾經協助我們解決甚麼問題? \n', 'tags': '', 'url': 'AI 工具.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}]};