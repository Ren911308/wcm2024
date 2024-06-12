var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁: https://ren911308.github.io/wcm2024/ \n 網誌: https://ren911308.github.io/wcm2024/blog/ \xa0 \n 簡報: https://ren911308.github.io/wcm2024/reveal/ \xa0 \n 倉儲: https://github.com/Ren911308/wcm2024 \xa0 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Codespaces', 'text': 'http://scrum-1.github.io/wcm2024 \n \n', 'tags': '', 'url': 'Codespaces.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': '作業', 'text': '', 'tags': '', 'url': '作業.html'}, {'title': 'W2', 'text': '在使用replit 近端或遠端，編輯維護網站，可用新的維護網站Codespaces進行維護 \n 1.可以跳過近端反鎖步驟，直接開啟動態網站編輯。 \n 2.幾乎與replit的操作系統一樣。(和其最近更新的動態網站連結亂碼) \n 3.受限於這個只是給你試用的，所以有 每個月的使用時數上限 。 \n 以下連結為使用 Codespaces 編輯維護晚站後的靜態連結 \n https://ren911308.github.io/wcm2024/content/index.htm \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '上課內容： \n 1.wink的使用方法 \n 2.使用git常用指令 \n 3.另用指令分組網站成員倉儲分組子模組 \n', 'tags': '', 'url': 'W3.html'}, {'title': '1.WINK', 'text': 'https://www.debugmode.com/wink.html \n', 'tags': '', 'url': '1.WINK.html'}, {'title': '2.GIT ORDER', 'text': 'git add . \xa0 (新增) \n git commit -m "說明字串" \xa0 (提交及名稱) \n git\xa0 push\xa0(推送) \n git version\xa0(查詢目前所使用的 git 版本) \n git status\xa0(一般是用來檢查目前近端改版情況) \n 若在遠端倉儲已經改版了，就必須先 git pull，將遠端資訊與自己的合併更新，才能在提交新的版本推送至倉儲。 \n git pull=git fetch + git merge \n git submodule add\xa0倉儲網址子目錄 \n git clone --recurse-submodules\xa0(.git 指定目錄與否) \n token \n git config --global \n ------------------------ \n 以下為其他其他指令 \n git submodule update --init (抓下子模組) \n git log (檢視 Git 紀錄 Q鍵離開) \n ls -l (瀏覽) \n pwd (列出現在工作目錄) \n acp ("輸入" 直接上傳) \n dns (將英文名稱轉為數字IP 問server(伺服器)IP地址 DNS會先查詢自己資料庫) \n dir (顯示某個磁碟指定目錄下的全部或部分檔案目錄和子目錄) \n ./b(代表執行、運行)(執行可執行檔) \n', 'tags': '', 'url': '2.GIT ORDER.html'}, {'title': '3.建立分組倉儲', 'text': '利用Codespaces建立分組倉儲建立個人子模組 \n 另用終端機打出指令 \n git status \n ls -l \n clear \n git submodule add 自己倉儲網址.git空格+學號 \n git add . \n git commit -m "add 學號 submodule" \n git push \n 就可以將自己的個人子模組加入到分組倉儲 \n', 'tags': '', 'url': '3.建立分組倉儲.html'}, {'title': 'W4', 'text': '有關建立網站: 網站指的是 Web site針對網頁瀏覽器檢視的內容加以管理，利用 Github 所提供的 Pages 功能來建立網頁進行管理。 \n Replit靜態網站檢視:若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵，\xa0Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視。 \n Replit建立分組倉儲權限: \n 分組網站 import 到 Replit, 必須自行在 /home/runner/.ssh 目錄下建立 id_rsa 與 config (id_rsa.pub 必須登錄到 Github 對應帳號), 其中的 config 內容為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n Host github.com \n User git \n Hostname github.com \n \n \n \n \n \n \n \n ssh.py 程式內容如下: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n \n \n \n import   os \n if   not   os.path.exists( "/home/runner/.ssh" ):  \n \xa0\xa0\xa0\xa0 os.makedirs( "/home/runner/.ssh" )  \n os.system( "mv ./downloads/id_rsa.txt /home/runner/.ssh/id_rsa" ) \n os.system( "mv ./downloads/config.txt /home/runner/.ssh/config" ) \n os.system( "chmod og-rwx /home/runner/.ssh/id_rsa" ) \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '\n \n 以 iframe 嵌入先前的教學影片做課前預習 \n 1.在Replit 平台上的分組倉儲權限設定 \n 2.Putty Solvespace STL 零件檢視方法 \n 3.大規模人工智慧運算的時代：前景、影響及回應 \n 第一週:建立個人的課程倉儲 第二週:chatgpt 使用 第三週:配置可攜程式系統 第四週:建立個人最短網址網站 第五週:對 ChatGPT 及製作影片 第六週:建立Pro Git 電子書 第七週:建立單字查詢網頁 第八週:建立領英帳號 第九週:建立 angry bird 程式並執行 第十週:建立每個人的帳號及網站 第十四週:分組執行猜數字遊戲 \n W1 Github 帳號登入依照規定需要兩段式認證 W2 簡單說明如何利用 Gmail 帳號登入 chatgpt, 並進行提問 W3 計算機概論, 利用 Github Classroom 進行分組作業派送 W4 如何在網頁推送至 Github 倉儲之前檢查所編輯的網頁內容 W5 利用與 ChatGPT 的對話 W6 閱讀 Git 相關原文書, 需要認識多少英文單字 W7 建議學員長期維護個人的履歷網站, 並註冊領英帳號. W8 說明如何在網頁中加入 Brython 程式應用 W1 說明如何在網頁中加入 Brython 程式應用 W12 Python 可攜系統 W13 從單機猜數字遊戲與 AI 應用談起 \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '將下面題目解答並放入自己的網站上 \n 根據您的專業, 就 git 的使用, 從與 ChatGPT 的對話, 將內容整理到個人的第六網誌, 其中包含: \n 1.git 的發展歷史 \n 2. 創作人的相關履歷 \n 3.以及一般相同專業人士如何利用 \xa0git 解決內容管理問題? \n 4. 假如要在 Windows 實際 demo git client 與 git server, 該如何進行?\xa0 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'git的發展歷史', 'text': '\n 誕生背景：  Git 是由 Linux 之父 Linus Torvalds 在 2005 年為了管理 Linux 內核開發而創建的。在那之前，Linux 內核團隊使用的是 BitKeeper，但由於許可議題，使得 Linux 社區需要一個新的版本控制系統。 \n 誕生過程：  Linus Torvalds開始尋找替代方案。他首先嘗試了 Monotone 和 Mercurial 等其他工具，但最終決定開發一個新的版本控制系統，這就是 Git。 \n 首次發布：  Git 的第一個版本於 2005 年 4 月釋出，並在Linux內核的開發中使用。從那時起，Git 迅速流行，成為許多開源項目和企業使用的首選版本控制系統之一。 \n 社區發展：  Git 很快吸引了一個活躍的社區，許多開發者貢獻了各種功能和改進。這些貢獻使得 Git 可以不斷演進和增強。 \n GitHub 的興起：  2008 年，GitHub 這個基於 Git 的代碼託管平台成立。GitHub 的出現進一步推動了 Git 的普及和發展，成為了全球最大的代碼託管平台之一。 \n 持續發展：  自 Git 誕生以來，它持續得到更新和改進。Git 社區和核心開發團隊不斷推出新的版本，添加新功能，優化性能，並修復漏洞。 \n 應用範圍擴大：  Git 不僅僅用於代碼版本控制，還廣泛應用於文檔管理、配置管理和各種其他領域。 \n \n 總的來說，Git 的發展歷史展示了一個由開源社區推動的成功故事，它為開發者提供了一個強大而靈活的工具，用於有效管理代碼和協作開發 \n', 'tags': '', 'url': 'git的發展歷史.html'}, {'title': '創作人的相關履歷', 'text': 'Git 的創造者是 Linux 核心的創建者 Linus Torvalds。他是一位芬蘭籍的計算機科學家，於 1991 年創建了 Linux 作業系統，並在開源社區中享有極高的聲譽 \n Linus Torvalds 出生於 1969 年 12 月 28 日，畢業於赫爾辛基大學，主修電腦科學。他在創建 Linux 核心的同時，也是 Git 版本控制系統的創建者和主要開發者 \n 在他的職業生涯中，Torvalds 曾就職於 Transmeta Corporation 和 Open Source Development Labs。他的工作和貢獻使他成為了開源社區的一個重要人物，並且獲得了多項獎項和榮譽 \n Torvalds 以其開放、直率和自由的風格而聞名，他在維護 Linux 核心和 Git 項目的過程中始終堅持這一風格。他通過他的工作，為開源軟體的發展和普及做出了重大貢獻 \n', 'tags': '', 'url': '創作人的相關履歷.html'}, {'title': 'git常用指令', 'text': '\n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n \n \n \n git add.  \n // 將所有修改的文件新增至暫存區// \n git commit -m  "訊息字串" \n //提交暫存區的文件至本地儲存庫，並附上提交訊息// \n git push \n \xa0 //推送本地儲存庫的提交至遠端儲存庫// \n git pull  \n //拉取遠端儲存庫的更新// \n git version \n \xa0 //查看當前git的版本// \n git status \n \xa0 //查看工作區和暫存區的狀態// \n git  log \n //查看歷史提交紀錄// \n git clone [URL] [本地目錄] \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'git常用指令.html'}, {'title': '利用git 解決內容管理問題', 'text': '對於相同專業的人士，如軟體開發人員、資料科學家或者內容創作者等，Git 是一個非常強大的工具，可以幫助他們有效地解決內容管理問題。以下是一般相同專業人士如何利用 Git 解決內容管理問題的一些方式： \n 1. 版本控制：Git 可以跟蹤文件的所有更改，包括新增、修改和刪除，並為每次更改創建一個獨特的版本號。這使得團隊成員可以隨時回溯到先前的版本，追蹤更改歷史，並在需要時回滾到特定版本。 \n 2. 協作：Git 可以輕鬆實現多人協作，多人可以同時編輯文件而不會發生衝突。通過分支（branch）功能，每個人都可以在自己的分支上進行工作，完成後再合併到主分支或其他分支中。 \n 3. 代碼審查：Git 通過提供 Pull Request（PR）功能，使得代碼審查變得更加方便和有效。團隊成員可以通過發送 PR 來邀請其他人檢查他們的代碼更改，並進行討論、提出建議或者進行修改。 \n 4. 追蹤問題和解決方案：Git 可以與問題追蹤系統（如GitHub 的 Issue 或 GitLab 的問題追蹤）集成，使得團隊能夠更好地追蹤問題、錯誤和待解決的任務。通過在提交信息中引用問題號，可以輕鬆地將代碼更改與相應的問題關聯起來。 \n 5. 自動化流程：Git 可以與自動化工具（如持續集成/持續部署工具）集成，實現自動化測試、構建和部署流程。這樣可以提高開發效率，減少手動操作帶來的錯誤。 \n 總的來說，Git 提供了一個強大的框架，使得相同專業的人士可以更好地協作、管理內容，並有效地解決問題。通過學習和掌握 Git 的基本原理和操作技巧，可以使得團隊更加高效地進行工作。 \n \n \n', 'tags': '', 'url': '利用git 解決內容管理問題.html'}, {'title': '在 Windows 實際 demo git client 與 git server該如何進行', 'text': '當你想要進行 Git 客戶端和伺服器的實際演示時，你需要有一個 Git 伺服器和至少一個 Git 客戶端。通常情況下，你可以在本地或者使用雲服務提供商來設置 Git 伺服器。 \n 以下是一個簡單的步驟來進行實際的 Git 客戶端和伺服器演示： \n 設置Git伺服器: \n \xa0 \xa0 \xa0 \xa0 1.選擇伺服器: \xa0 你可以選擇在本地搭建 Git 伺服器，或者使用雲服務提供商（如 GitHub、GitLab、Bitbucket 等）。 \n \xa0 \xa0 \xa0 \xa02.安裝 Git: \xa0 在伺服器上安裝 Git，如果你使用的是雲服務提供商，則不需要手動安裝 Git。 \n \xa0 \xa0 \xa0 \xa0 3.建立倉庫: \xa0 在伺服器上創建一個空的 Git 倉庫，你可以使用 \xa0 git init --bare \xa0 命令來創建一個裸倉庫，或 者在雲服務提供商上通過介面創建倉庫。 \n 設置Git客戶端 : \n \xa0 \xa0 \xa0 \xa0 1.安裝 Git: \xa0 在你的本地機器上安裝 Git 客戶端。 \n \xa0 \xa0 \xa0 \xa02.配置用戶信息: \xa0 在客戶端上設置 Git 用戶名和郵箱，你可以使用以下命令:\xa0 \n \n \n \n \n \n \n 1 \n 2 \n \n \n \n git config --global user.name  "Your Name" \n git config --global user.email  "your.email@example.com" \n \n \n \n \n \n \n \n \xa0 \xa0 \xa0 \xa03.克隆倉庫 : 使用\xa0 git clone \xa0命令將伺服器上的倉庫克隆到本地。例如： \n \n \n \n \n \n \n 1 \n \n \n \n git clone username@server:/path/to/repository \n \n \n \n \n \n \n \n 進行演示: \n \xa0 \xa0 \xa0 \xa0 1.進行修改 : 在本地客戶端對項目進行一些修改，比如創建、編輯或刪除文件。 \n \xa0 \xa0 \xa0 \xa0 2.提交更改: \xa0 使用 \xa0 git add \xa0 將修改添加到暫存區，然後使用 \xa0 git commit \xa0 提交更改到本地倉庫。 \n \xa0 \xa0 \xa0 \xa0 3.推送到伺服器: \xa0 使用 \xa0 git push \xa0 命令將本地的提交推送到伺服器上。 \n \xa0 \xa0 \xa0 \xa0 4.拉取更新: \xa0 如果其他人在伺服器上進行了修改，你可以使用 \xa0 git pull \xa0 命令將更新拉取到本地。其中中 \n', 'tags': '', 'url': '在 Windows 實際 demo git client 與 git server該如何進行.html'}, {'title': 'w7-w8', 'text': '期中成績登記，並輸入自己想要的理想分數。 \n 第八週上課內容 \n 1.了解教育的本質、意義 \n 2.如何把影片嵌入自己的個人網站上 \n', 'tags': '', 'url': 'w7-w8.html'}, {'title': 'w10', 'text': '在mdewcm2024/1astud-site新增各組的心得，並解決衝突的問題 \n 並使用超文件到網誌中 \n 介紹acp的功用 \n git add . \n git commit -m "$1" --author="$2" \n git push \n', 'tags': '', 'url': 'w10.html'}, {'title': 'W11', 'text': "Brython程式環境: \n 頁面 demo 在同一頁面下入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt \xa0 動態頁面超文件). \n practice_html.txt \xa0 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為 \xa0 class \xa0 後, 在範例導入時透過 \xa0 instance \xa0 引用 \n \n \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n \n \n \n <!-- 啟動 Brython --> \n <script> \n window.onload=function(){ \n brython({debug:1, pythonpath:[ './../cmsimde/static/' , './../downloads/py/' ]}); \n } \n </script> \n \n \n \n \n \n \n \n \n \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator \xa0 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n", 'tags': '', 'url': 'W11.html'}, {'title': 'w13', 'text': '\n \n \n \n \n \n \n \n \n \n \n \n 利用 wsgi_v2_py 擷取個學期的課表 \n 一年級上學期的課表 \n 將上方的連結下載後放入可攜，儲存後放入cmd \n 要先確認是否有flask和flask-cors \n 輸入 \n pip list \n 如果有就可執行下面內容 \n cd tmp \n python wsgi_v2.py \n 即可開啟班級課表 \n \n 112年第1學期課表 \n \n \n 112年第2學期課表 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': '期中課程整理', 'text': '', 'tags': '', 'url': '期中課程整理.html'}, {'title': '網頁式內容管理', 'text': 'Q1:如何建立 Github 上的網站?Q2:如何管理內容?Q3: 如何建立章節式網站?Q4:能放入甚麼多媒體內容?Q5:靜態圖文?Q6:動態圖文?Q7:線上遊戲?Q8:3D 零組件展示?Q9:如何建立網頁系統中的網誌?Q10:如何建立網頁系統中的簡報? \n A1: \xa0GitHub 上建立網站可以使用 GitHub Pages ，先創立一個儲存庫，名稱為username.github.io，在存儲庫中創建一個名為「index.html」的 HTML 文件，用於構建你的網站主頁。將網站的代碼添加到 index.html 文件中，然後把它推到 GitHub 存儲庫。 \n A2: GitHub 上管理網站內容通常使用版本控制工具 Git。可以在本地創建一個 Git 存儲庫，將網站代碼下載到本地，然後在本地修改和更新網站內容。完成修改後，使用 Git 將更改推送到 GitHub 存儲庫。另外，可以使用分支（Branches）來開發新功能或進行實驗，然後將分支合併（Merge）到主分支（通常是 master 或 main）中。 \n A3:建立章節式網站可以使用靜態網站生成器，如Replit、Codespaces或Gitpods等。首先，需要選擇一個適合你需求的生成器，然後在本地開發環境中創建你的網站再使用生成器提供的模板和功能來創建不同的章節和內容頁面，組織你的網站內容。完成編輯後，使用生成器將網站生成為靜態文件，然後將這些文件推送到GitHub存儲庫中。最後，你的章節式網站將通過GitHub Pages或其他靜態網站托管服務進行部署，讓其他人可以訪問和瀏覽你的網站。 \n A4: \n 1.圖片:嵌入YouTube、Vimeo等視頻平台提供的影片連結，或者將視頻文件直接嵌入到網頁中，讓讀者可以觀看視頻內容。 \n 2.影片:嵌入YouTube、Vimeo等視頻平台提供的影片連結，或者將視頻文件直接嵌入到網頁中，讓讀者可以觀看視頻內容。 \n 3.音頻: 嵌入音樂或語音文件，如Podcast等，讓讀者可以聆聽音頻內容。 \n 4.地圖:嵌入地圖服務，如Google Maps，以展示地理位置或路線信息。 \n 5.表格:使用HTML或Markdown格式來創建和展示表格內容，以整理和呈現數據。 \n 6.圖表和圖形:使用JavaScript圖表庫或其他數據可視化工具來創建和展示圖表和圖形，以呈現數據和統計信息。 \n 7.放入網站:嵌入其他網站提供的媒體內容，如Twitter貼文、Instagram照片等，以擴展你的內容範圍。 \n A5: \n 1.圖片:將圖片文件直接插入到章節內容中。你可以使用HTML的\xa0 <img> \xa0標籤或Markdown的圖片語法（例如\xa0 ![圖片描述](圖片URL) ）來添加圖片。 \n 2.文本:使用Markdown或HTML來編寫文本內容，包括標題、段落、列表等。Markdown提供了簡單易讀的語法，而HTML則提供更多的自定義和控制。 \n 3.超連結:使用超連結來連接不同章節或其他網站。在HTML中，你可以使用\xa0 <a> \xa0標籤來創建超連結，而Markdown則提供了\xa0 [連結文字](連結URL) \xa0的語法。 \n 4.引用:引用其他資料或文字也是常見的做法。你可以使用Markdown的引用語法（ > 引用文字 ）或HTML的\xa0 <blockquote> \xa0標籤來添加引用內容。 \n A6: \n 1.動畫:使用CSS或JavaScript來創建和控制動畫效果，使圖片、文本或其他元素呈現動態效果。你可以使用CSS的\xa0 @keyframes \xa0樣式或JavaScript的動畫庫（如Animate.css）來添加動畫。 \n 2.交互式元素:加入JavaScript互動元素，例如按鈕、滑塊、表單等，讓用戶可以與你的網站互動。這些元素可以通過事件監聽器來實現動態效果，例如點擊按鈕後顯示或隱藏特定內容。 \n 3.即時更新:用JavaScript或AJAX來實現即時更新功能，例如在不刷新整個頁面的情況下加載新的內容或更新現有內容。這可以通過向後端API發送請求並處理返回的數據來實現。 \n 4.影片和音頻播放器:嵌入視頻和音頻播放器，讓用戶可以播放多媒體內容。你可以使用HTML5的\xa0 <video> \xa0和\xa0 <audio> \xa0標籤來添加視頻和音頻播放器，並使用JavaScript控制播放器的功能。 \n 5.即時更新圖表:使用JavaScript圖表庫（如Chart.js、D3.js等）來創建動態圖表，並實現即時更新功能，使圖表可以根據用戶操作或數據變化而動態更新。 \n A7: \n 1.使用嵌入式代碼:將線上遊戲的嵌入代碼（embed code）添加到你的網站中。許多線上遊戲提供了嵌入代碼，你只需將其添加到網站的HTML中的相應位置即可。 \n 2.使用iframe元素:使用HTML的\xa0 <iframe> \xa0元素來嵌入線上遊戲。你可以將遊戲的URL添加到\xa0 <iframe> \xa0元素的\xa0 src \xa0屬性中，然後將\xa0 <iframe> \xa0元素添加到你的網站中的任何位置。 \n 補充: <iframe> \xa0 元素是HTML中的一個標記，用於在網頁中嵌入另一個獨立的HTML文檔或外部網頁。它提供了一種在當前網頁中包含其他網頁內容的方法，讓你可以將其他網站的內容嵌入到網頁中，或者在同一網站中的不同頁面之間嵌入內容。 \n <iframe> \xa0 元素有一個 \xa0 src \xa0 屬性，用於指定要嵌入的外部文檔或網頁的URL。除此之外，還可以設置其他屬性來調整iframe的大小、邊框、樣式等。通過iframe，你可以在網頁中創建內嵌的互動元素，如Google地圖、YouTube視頻、線上遊戲等，為網站提供更豐富的內容和功能。 \n 3.設置遊戲頁面:在網站中創建一個專門的遊戲頁面，將遊戲嵌入到該頁面中。這樣做可以使遊戲與網站的其他內容分開，並為用戶提供更好的遊戲體驗。 \n 4.安全性:確保嵌入的遊戲代碼來源可信，以防止可能的安全風險。如果可能的話，最好使用來自可靠和信任的遊戲提供商的嵌入代碼。 \n A8: \n 1.使用Javascript 3D庫:使用像Three.js這樣的JavaScript 3D庫，可以輕鬆在網站中展示3D零組件。你可以將3D模型導入到你的網站中，並使用Three.js等庫來渲染和顯示它們。這樣的庫通常提供了各種功能，如照明、動畫、交互等，以增強3D模型的表現力。 \n 2.使用網頁GL視窗:利用WebGL技術，你可以在網頁中嵌入可交互的3D場景。這需要一些較高級的編程知識，但它可以讓你在網頁中直接渲染3D模型，使它們能夠與用戶互動。 \n 3.嵌入式3D查看器:使用嵌入式3D查看器，如Sketchfab，可以將3D模型嵌入到你的網站中。Sketchfab提供了一個簡單的嵌入代碼，你可以將它添加到你的網站中，以便在線上展示和互動3D模型。 \n A9:步驟 \n 1.選擇網誌平台 \n 2.設置網誌 \n 3.編輯內容 \n 4.發布文章 \n 5.促進網誌 \n 6.定期更新 \n A10:步驟 \n 1.選擇簡報工具 \n 2.建立簡報 \n 3.增加內容 \n 4.設置轉場效果 \n 5.編輯和分享 \n 6.儲存 \n', 'tags': '', 'url': '網頁式內容管理.html'}, {'title': 'Python 程式系統', 'text': '學習議題: 如何利用電腦輔助設計室的舊 Python 建立新的可攜環境? 在網頁中置入 Python 語法的程式加上對 Javascript 與超文件語法的了解後, 能夠應用在那些領域? (精密)機械設計流程? 設計運算? 特定系統模擬? \n \n \n \n', 'tags': '', 'url': 'Python 程式系統.html'}, {'title': '網頁上的 IDE', 'text': 'IDE 是甚麼? 可以將 Replit、Codespaces 與 Gitpod 當成 IDE 用來開發各種程式嗎? 與近端操作系統上的開發有何不同? 多人協同? 這樣安全嗎? \n 學習議題: 學會使用網頁上的各種 IDE 之後, 有沒有甚麼感想或心得? \n', 'tags': '', 'url': '網頁上的 IDE.html'}, {'title': 'AI 工具', 'text': 'ChatGPT 與 Gemini Pro 都可以直接利用 Gmail 帳號登入, 初級應用目前都可免費使用, 這兩個 AI 工具可以協助我們解決甚麼問題? 為什麼有人驚這些工具為天人? 有人卻覺得還好而已, 並無法從中挖出甚麼資料? \n 學習議題: AI 工具曾經協助我們解決甚麼問題? \n', 'tags': '', 'url': 'AI 工具.html'}, {'title': '分組專案', 'text': '給定 \xa0 5j_wcm2024_midterm 資料 \xa0 與 \xa0 1a_wcm2024_midterm 資料 \xa0 檔案, 包含學號、Github 帳號與組別. 請各組設法在分組網站與網誌中, 建立能連結到各分組組員的課程倉儲與網站連結頁面.將各組員的歷程網站與網誌整理到分組倉儲中. \n 處理方法: \n \n 自行 key in 所需的超文件內容, 但必須了解有關 html anchor 與相關標註語法 \n 了解希望完成的事項內容, 請 AI 協助處理轉檔 \n 了解希望完成的事項內容, 請 AI 協助透過程式方法處理轉檔 \n \n 每位組員在各自的倉儲編寫網誌文章, 然後整合至分組倉儲與網站. \n 每位組員在各自的倉儲寫專案報告，然後整合至分組倉儲並以 pdf 發佈. \n 每位組員在各自的倉儲編寫程式, 然後整合至分組倉儲與網站 \n \n \n', 'tags': '', 'url': '分組專案.html'}, {'title': '期末專題', 'text': '1.選擇自己想要製作的主題，我選擇的是2048小遊戲，並 下載可攜程式環境:\xa0 portable_2024.7z \xa0(需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) \n 2.使用CHATGPT並詢問 幫我用python 做出2048的小遊戲 並用網頁方式呈現 ，會出現後端邏輯（Python），前端展示（HTML, CSS, JavaScript）並顯示出Python， HTML, CSS, JavaScript各自的程式 \n Python: \n import numpy as np\nimport random\n\nclass Game2048:\n    def __init__(self):\n        self.board = np.zeros((4, 4), dtype=int)\n        self.add_new_tile()\n        self.add_new_tile()\n    \n    def add_new_tile(self):\n        empty_cells = list(zip(*np.where(self.board == 0)))\n        if empty_cells:\n            cell = random.choice(empty_cells)\n            self.board[cell] = 2 if random.random() < 0.9 else 4\n\n    def compress(self, row):\n        new_row = [i for i in row if i != 0]\n        new_row += [0] * (4 - len(new_row))\n        return new_row\n\n    def merge(self, row):\n        for i in range(3):\n            if row[i] == row[i + 1] and row[i] != 0:\n                row[i] *= 2\n                row[i + 1] = 0\n        return row\n\n    def move_left(self):\n        new_board = np.zeros((4, 4), dtype=int)\n        for i in range(4):\n            new_row = self.compress(self.board[i])\n            new_row = self.merge(new_row)\n            new_row = self.compress(new_row)\n            new_board[i] = new_row\n        self.board = new_board\n        self.add_new_tile()\n\n    def move_right(self):\n        self.board = np.fliplr(self.board)\n        self.move_left()\n        self.board = np.fliplr(self.board)\n\n    def move_up(self):\n        self.board = self.board.T\n        self.move_left()\n        self.board = self.board.T\n\n    def move_down(self):\n        self.board = np.flipud(self.board.T)\n        self.move_left()\n        self.board = np.flipud(self.board).T\n\n    def is_game_over(self):\n        if 0 in self.board:\n            return False\n        for i in range(4):\n            for j in range(4):\n                if i < 3 and self.board[i][j] == self.board[i + 1][j]:\n                    return False\n                if j < 3 and self.board[i][j] == self.board[i][j + 1]:\n                    return False\n        return True\n\n    def get_board(self):\n        return self.board.tolist()\n \n HTML ： \n <!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>2048 Game</title>\n<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<div class="container">\n<div class="board" id="board"></div>\n</div>\n<script src="script.js"></script>\n</body>\n</html> \n \n \n \n CSS (styles.css) ： \n body {\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nheight: 100vh;\nbackground-color: #faf8ef;\n}\n\n.container {\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n\n.board {\ndisplay: grid;\ngrid-template-columns: repeat(4, 100px);\ngrid-template-rows: repeat(4, 100px);\ngap: 10px;\nbackground-color: #bbada0;\npadding: 10px;\nborder-radius: 10px;\n}\n\n.tile {\nwidth: 100px;\nheight: 100px;\nbackground-color: #cdc1b4;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-size: 24px;\nfont-weight: bold;\ncolor: #776e65;\nborder-radius: 5px;\n} \n \n \n \n \n \n \n JavaScript (script.js) ： \n \n \n document.addEventListener(\'DOMContentLoaded\', () => {\nconst boardElement = document.getElementById(\'board\');\n\nconst game = new Game2048();\nrenderBoard(game.getBoard());\n\ndocument.addEventListener(\'keydown\', (event) => {\nswitch (event.key) {\ncase \'ArrowUp\':\ngame.move_up();\nbreak;\ncase \'ArrowDown\':\ngame.move_down();\nbreak;\ncase \'ArrowLeft\':\ngame.move_left();\nbreak;\ncase \'ArrowRight\':\ngame.move_right();\nbreak;\n}\nrenderBoard(game.getBoard());\nif (game.is_game_over()) {\nalert(\'Game Over!\');\n}\n});\n\nfunction renderBoard(board) {\nboardElement.innerHTML = \'\';\nfor (let row of board) {\nfor (let cell of row) {\nconst tile = document.createElement(\'div\');\ntile.className = \'tile\';\ntile.textContent = cell === 0 ? \'\' : cell;\nboardElement.appendChild(tile);\n}\n}\n}\n});\n\nclass Game2048 {\nconstructor() {\nthis.board = Array.from({ length: 4 }, () => Array(4).fill(0));\nthis.addNewTile();\nthis.addNewTile();\n}\n\naddNewTile() {\nconst emptyCells = [];\nfor (let i = 0; i < 4; i++) {\nfor (let j = 0; j < 4; j++) {\nif (this.board[i][j] === 0) {\nemptyCells.push([i, j]);\n}\n}\n}\nif (emptyCells.length > 0) {\nconst [x, y] = emptyCells[Math.floor(Math.random() * emptyCells.length)];\nthis.board[x][y] = Math.random() < 0.9 ? 2 : 4;\n}\n}\n\ncompress(row) {\nconst newRow = row.filter(val => val !== 0);\nwhile (newRow.length < 4) newRow.push(0);\nreturn newRow;\n}\n\nmerge(row) {\nfor (let i = 0; i < 3; i++) {\nif (row[i] === row[i + 1] && row[i] !== 0) {\nrow[i] *= 2;\nrow[i + 1] = 0;\n}\n}\nreturn row;\n}\n\nmove_left() {\nlet newBoard = Array.from({ length: 4 }, () => Array(4).fill(0));\nfor (let i = 0; i < 4; i++) {\nlet newRow = this.compress(this.board[i]);\nnewRow = this.merge(newRow);\nnewRow = this.compress(newRow);\nnewBoard[i] = newRow;\n}\nthis.board = newBoard;\nthis.addNewTile();\n}\n\nmove_right() {\nthis.board = this.board.map(row => row.reverse());\nthis.move_left();\nthis.board = this.board.map(row => row.reverse());\n}\n\nmove_up() {\nthis.board = this.transpose(this.board);\nthis.move_left();\nthis.board = this.transpose(this.board);\n}\n\nmove_down() {\nthis.board = this.transpose(this.board).map(row => row.reverse());\nthis.move_left();\nthis.board = this.transpose(this.board).map(row => row.reverse());\n}\n\ntranspose(board) {\nreturn board[0].map((_, colIndex) => board.map(row => row[colIndex]));\n}\n\nis_game_over() {\nif (this.board.flat().includes(0)) {\nreturn false;\n}\nfor (let i = 0; i < 4; i++) {\nfor (let j = 0; j < 4; j++) {\nif (i < 3 && this.board[i][j] === this.board[i + 1][j]) {\nreturn false;\n}\nif (j < 3 && this.board[i][j] === this.board[i][j + 1]) {\nreturn false;\n}\n}\n}\nreturn true;\n}\n\ngetBoard() {\nreturn this.board;\n}\n} \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 在資料夾內新增這些 \n \n static \n \n templates \n \n 在指定的IP地址（192.168.56.1）和端口（ 8000 ）上啟動HTTP伺服器。可以在瀏覽器中訪問http://192.168.56.1:8000/玩2048小遊戲，向CHATGPT詢問新增一個app.py的代碼。並在內部複製貼上程式 \n \n <!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>2048 Game</title>\n<style>\n    .board {\n        display: grid;\n        grid-template-columns: repeat(4, 100px);\n        grid-gap: 5px;\n        background-color: #bbada0;\n        padding: 5px;\n        border-radius: 5px;\n        margin: auto;\n    }\n\n    .tile {\n        width: 100px;\n        height: 100px;\n        background-color: #cdc1b4;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 24px;\n        border-radius: 5px;\n    }\n</style>\n</head>\n<body>\n<div class="board" id="board"></div>\n<script>\n    document.addEventListener(\'DOMContentLoaded\', () => {\n        const boardElement = document.getElementById(\'board\');\n\n        const game = new Game2048();\n        renderBoard(game.getBoard());\n\n        document.addEventListener(\'keydown\', (event) => {\n            let moved = false;\n            switch (event.key) {\n                case \'ArrowUp\':\n                    moved = game.move_up();\n                    break;\n                case \'ArrowDown\':\n                    moved = game.move_down();\n                    break;\n                case \'ArrowLeft\':\n                    moved = game.move_left();\n                    break;\n                case \'ArrowRight\':\n                    moved = game.move_right();\n                    break;\n            }\n            if (moved) {\n                renderBoard(game.getBoard());\n                if (game.is_game_over()) {\n                    alert(\'Game Over!\');\n                }\n            }\n        });\n\n        function renderBoard(board) {\n            boardElement.innerHTML = \'\';\n            for (let row of board) {\n                for (let cell of row) {\n                    const tile = document.createElement(\'div\');\n                    tile.className = \'tile\';\n                    tile.textContent = cell === 0 ? \'\' : cell;\n                    boardElement.appendChild(tile);\n                }\n            }\n        }\n    });\n\n    class Game2048 {\n        constructor() {\n            this.board = Array.from({ length: 4 }, () => Array(4).fill(0));\n            this.addNewTile();\n            this.addNewTile();\n        }\n\n        addNewTile() {\n            const emptyCells = [];\n            for (let i = 0; i < 4; i++) {\n                for (let j = 0; j < 4; j++) {\n                    if (this.board[i][j] === 0) {\n                        emptyCells.push([i, j]);\n                    }\n                }\n            }\n            if (emptyCells.length > 0) {\n                const [x, y] = emptyCells[Math.floor(Math.random() * emptyCells.length)];\n                this.board[x][y] = Math.random() < 0.9 ? 2 : 4;\n            }\n        }\n\n        compress(row) {\n            const newRow = row.filter(val => val !== 0);\n            while (newRow.length < 4) newRow.push(0);\n            return newRow;\n        }\n\n        merge(row) {\n            for (let i = 0; i < 3; i++) {\n                if (row[i] === row[i + 1] && row[i] !== 0) {\n                    row[i] *= 2;\n                    row[i + 1] = 0;\n                }\n            }\n            return row;\n        }\n\n        move_left() {\n            let moved = false;\n            for (let i = 0; i < 4; i++) {\n                let newRow = this.compress(this.board[i]);\n                newRow = this.merge(newRow);\n                newRow = this.compress(newRow);\n                if (newRow.toString() !== this.board[i].toString()) {\n                    this.board[i] = newRow;\n                    moved = true;\n                }\n            }\n            if (moved) {\n                this.addNewTile();\n            }\n            return moved;\n        }\n\n        move_right() {\n            let moved = false;\n            for (let i = 0; i < 4; i++) {\n                let newRow = this.board[i].slice().reverse();\n                newRow = this.compress(newRow);\n                newRow = this.merge(newRow);\n                newRow = this.compress(newRow);\n                newRow.reverse();\n                if (newRow.toString() !== this.board[i].toString()) {\n                    this.board[i] = newRow;\n                    moved = true;\n                }\n            }\n            if (moved) {\n                this.addNewTile();\n            }\n            return moved;\n        }\n\n        move_up() {\n            let moved = false;\n            for (let j = 0; j < 4; j++) {\n                let col = this.board.map(row => row[j]);\n                let newCol = this.compress(col);\n                newCol = this.merge(newCol);\n                newCol = this.compress(newCol);\n                for (let i = 0; i < 4; i++) {\n                    if (this.board[i][j] !== newCol[i]) {\n                        moved = true;\n                        this.board[i][j] = newCol[i];\n                    }\n                }\n            }\n            if (moved) {\n                this.addNewTile();\n            }\n            return moved;\n        }\n\n        move_down() {\n            let moved = false;\n            for (let j = 0; j < 4; j++) {\n                let col = this.board.map(row => row[j]);\n                let newCol = col.slice().reverse();\n                newCol = this.compress(newCol);\n                newCol = this.merge(newCol);\n                newCol = this.compress(newCol);\n                newCol.reverse();\n                let shift = 0;\n                for (let i = 3; i >= 0; i--) {\n                    if (this.board[i][j] !== newCol[3 - shift]) {\n                        moved = true;\n                        this.board[i][j] = newCol[3 - shift];\n                    }\n                    shift++;\n                }\n            }\n            if (moved) {\n                this.addNewTile();\n            }\n            return moved;\n        }\n\n        is_game_over() {\n            if (this.board.flat().includes(0)) {\n                return false;\n            }\n            for (let i = 0; i < 4; i++) {\n                for (let j = 0; j < 4; j++) {\n                    if (i < 3 && this.board[i][j] === this.board[i + 1][j]) {\n                        return false;\n                    }\n                    if (j < 3 && this.board[i][j] === this.board[i][j + 1]) {\n                        return false;\n                    }\n                }\n            }\n            return true;\n        }\n\n        getBoard() {\n            return this.board;\n        }\n    }\n</script>\n</body>\n</html>\n \n \n \n body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    background-color: #faf8ef;\n    margin: 0;\n    font-family: Arial, sans-serif;\n}\n\n.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(4, 100px);\n    grid-template-rows: repeat(4, 100px);\n    gap: 10px;\n    background-color: #bbada0;\n    padding: 10px;\n    border-radius: 10px;\n}\n\n.tile {\n    width: 100px;\n    height: 100px;\n    background-color: #cdc1b4;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 24px;\n    font-weight: bold;\n    color: #776e65;\n    border-radius: 5px;\n    transition: background-color 0.3s;\n}\n \n \n \n \n document.addEventListener(\'DOMContentLoaded\', () => {\n    const boardElement = document.getElementById(\'board\');\n    const resetButton = document.getElementById(\'reset-button\');\n\n    let game = new Game2048();\n    renderBoard(game.getBoard());\n\n    document.addEventListener(\'keydown\', (event) => {\n        let moved = false;\n        switch (event.key) {\n            case \'ArrowUp\':\n                moved = game.move_up();\n                break;\n            case \'ArrowDown\':\n                moved = game.move_down();\n                break;\n            case \'ArrowLeft\':\n                moved = game.move_left();\n                break;\n            case \'ArrowRight\':\n                moved = game.move_right();\n                break;\n        }\n        if (moved) {\n            renderBoard(game.getBoard());\n            if (game.is_game_over()) {\n                alert(\'Game Over!\');\n            }\n        }\n    });\n\n    resetButton.addEventListener(\'click\', () => {\n        game = new Game2048();\n        renderBoard(game.getBoard());\n    });\n\n    function renderBoard(board) {\n        boardElement.innerHTML = \'\';\n        for (let row of board) {\n            for (let cell of row) {\n                const tile = document.createElement(\'div\');\n                tile.className = \'tile\';\n                tile.textContent = cell === 0 ? \'\' : cell;\n                boardElement.appendChild(tile);\n            }\n        }\n    }\n});\n\nclass Game2048 {\n    constructor() {\n        this.board = Array.from({ length: 4 }, () => Array(4).fill(0));\n        this.addNewTile();\n        this.addNewTile();\n    }\n\n    addNewTile() {\n        const emptyCells = [];\n        for (let i = 0; i < 4; i++) {\n            for (let j = 0; j < 4; j++) {\n                if (this.board[i][j] === 0) {\n                    emptyCells.push([i, j]);\n                }\n            }\n        }\n        if (emptyCells.length > 0) {\n            const [x, y] = emptyCells[Math.floor(Math.random() * emptyCells.length)];\n            this.board[x][y] = Math.random() < 0.9 ? 2 : 4;\n        }\n    }\n\n    compress(row) {\n        const newRow = row.filter(val => val !== 0);\n        while (newRow.length < 4) newRow.push(0);\n        return newRow;\n    }\n\n    merge(row) {\n        for (let i = 0; i < 3; i++) {\n            if (row[i] === row[i + 1] && row[i] !== 0) {\n                row[i] *= 2;\n                row[i + 1] = 0;\n            }\n        }\n        return row;\n    }\n\n    move_left() {\n        let moved = false;\n        for (let i = 0; i < 4; i++) {\n            let newRow = this.compress(this.board[i]);\n            newRow = this.merge(newRow);\n            newRow = this.compress(newRow);\n            if (newRow.toString() !== this.board[i].toString()) {\n                this.board[i] = newRow;\n                moved = true;\n            }\n        }\n        if (moved) {\n            this.addNewTile();\n        }\n        return moved;\n    }\n\n    move_right() {\n        let moved = false;\n        for (let i = 0; i < 4; i++) {\n            let newRow = this.board[i].slice().reverse();\n            newRow = this.compress(newRow);\n            newRow = this.merge(newRow);\n            newRow = this.compress(newRow);\n            newRow.reverse();\n            if (newRow.toString() !== this.board[i].toString()) {\n                this.board[i] = newRow;\n                moved = true;\n            }\n        }\n        if (moved) {\n            this.addNewTile();\n        }\n        return moved;\n    }\n\n    move_up() {\n        let moved = false;\n        for (let j = 0; j < 4; j++) {\n            let col = this.board.map(row => row[j]);\n            let newCol = this.compress(col);\n            newCol = this.merge(newCol);\n            newCol = this.compress(newCol);\n            for (let i = 0; i < 4; i++) {\n                if (this.board[i][j] !== newCol[i]) {\n                    this.board[i][j] = newCol[i];\n                    moved = true;\n                }\n            }\n        }\n        if (moved) {\n            this.addNewTile();\n        }\n        return moved;\n    }\n\n    move_down() {\n        let moved = false;\n        for (let j = 0; j < 4; j++) {\n            let col = this.board.map(row => row[j]);\n            let newCol = this.compress(col.reverse());\n            newCol = this.merge(newCol);\n            newCol = this.compress(newCol);\n            newCol.reverse();\n            for (let i = 0; i < 4; i++) {\n                if (this.board[3 - i][j] !== newCol[i]) {\n                    this.board[3 - i][j] = newCol[i];\n                    moved = true;\n                }\n            }\n        }\n        if (moved) {\n            this.addNewTile();\n        }\n        return moved;\n    }\n\n    is_game_over() {\n        if (this.board.flat().includes(0)) {\n            return false;\n        }\n        for (let i = 0; i < 4; i++) {\n            for (let j = 0; j < 4; j++) {\n                if (i < 3 && this.board[i][j] === this.board[i + 1][j]) {\n                    return false;\n                }\n                if (j < 3 && this.board[i][j] === this.board[i][j + 1]) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n\n    getBoard() {\n        return this.board;\n    }\n}\n\n\n\n\n \n \n from flask import Flask, render_template\n\napp = Flask(__name__)\n\n@app.route(\'/\')\ndef index():\nreturn render_template(\'index.html\')\n\nif __name__ == \'__main__\':\napp.run(host=\'192.168.56.1\', port=8000) \n 並不停地修改獲得正確的程式就能體驗2048了 \n 2048game', 'tags': '', 'url': '期末專題.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \nBrython\n\n', 'tags': '', 'url': 'Brython.html'}]};