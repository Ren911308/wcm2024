var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁: https://ren911308.github.io/wcm2024/ \n 網誌: https://ren911308.github.io/wcm2024/blog/ \xa0 \n 簡報: https://ren911308.github.io/wcm2024/reveal/ \xa0 \n 倉儲: https://github.com/Ren911308/wcm2024 \xa0 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Codespaces', 'text': 'http://scrum-1.github.io/wcm2024 \n \n', 'tags': '', 'url': 'Codespaces.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': '作業', 'text': '', 'tags': '', 'url': '作業.html'}, {'title': 'W6', 'text': '將下面題目解答並放入自己的網站上 \n 根據您的專業, 就 git 的使用, 從與 ChatGPT 的對話, 將內容整理到個人的第六網誌, 其中包含: \n 1.git 的發展歷史 \n 2. 創作人的相關履歷 \n 3.以及一般相同專業人士如何利用 \xa0git 解決內容管理問題? \n 4. 假如要在 Windows 實際 demo git client 與 git server, 該如何進行?\xa0', 'tags': '', 'url': 'W6.html'}, {'title': '1.git 的發展歷史', 'text': '\n \n 誕生背景：  Git 是由 Linux 之父 Linus Torvalds 在 2005 年為了管理 Linux 內核開發而創建的。在那之前，Linux 內核團隊使用的是 BitKeeper，但由於許可議題，使得 Linux 社區需要一個新的版本控制系統。 \n \n \n 誕生過程：  Linus Torvalds開始尋找替代方案。他首先嘗試了 Monotone 和 Mercurial 等其他工具，但最終決定開發一個新的版本控制系統，這就是 Git。 \n \n \n 首次發布：  Git 的第一個版本於 2005 年 4 月釋出，並在Linux內核的開發中使用。從那時起，Git 迅速流行，成為許多開源項目和企業使用的首選版本控制系統之一。 \n \n \n 社區發展：  Git 很快吸引了一個活躍的社區，許多開發者貢獻了各種功能和改進。這些貢獻使得 Git 可以不斷演進和增強。 \n \n \n GitHub 的興起：  2008 年，GitHub 這個基於 Git 的代碼託管平台成立。GitHub 的出現進一步推動了 Git 的普及和發展，成為了全球最大的代碼託管平台之一。 \n \n \n 持續發展：  自 Git 誕生以來，它持續得到更新和改進。Git 社區和核心開發團隊不斷推出新的版本，添加新功能，優化性能，並修復漏洞。 \n \n \n 應用範圍擴大：  Git 不僅僅用於代碼版本控制，還廣泛應用於文檔管理、配置管理和各種其他領域。 \n \n \n 總的來說，Git 的發展歷史展示了一個由開源社區推動的成功故事，它為開發者提供了一個強大而靈活的工具，用於有效管理代碼和協作開發 \n', 'tags': '', 'url': '1.git 的發展歷史.html'}, {'title': '2.創作人的相關履歷', 'text': 'Git 的創造者是 Linux 核心的創建者 Linus Torvalds。他是一位芬蘭籍的計算機科學家，於 1991 年創建了 Linux 作業系統，並在開源社區中享有極高的聲譽 \n Linus Torvalds 出生於 1969 年 12 月 28 日，畢業於赫爾辛基大學，主修電腦科學。他在創建 Linux 核心的同時，也是 Git 版本控制系統的創建者和主要開發者 \n 在他的職業生涯中，Torvalds 曾就職於 Transmeta Corporation 和 Open Source Development Labs。他的工作和貢獻使他成為了開源社區的一個重要人物，並且獲得了多項獎項和榮譽 \n Torvalds 以其開放、直率和自由的風格而聞名，他在維護 Linux 核心和 Git 項目的過程中始終堅持這一風格。他通過他的工作，為開源軟體的發展和普及做出了重大貢獻 \n', 'tags': '', 'url': '2.創作人的相關履歷.html'}, {'title': '3.一般相同專業人士如何利用 \xa0git 解決內容管理問題?', 'text': '1.版本控制 \n git 可以追蹤文件的變更歷史，可讓專業人士可以輕鬆地管理文件的不同版本，對於軟體開發者來說尤其重要，他們可以隨時回溯到過去的版本，比較不同版本之間的差異，甚至回滾到較早的版本。對於文檔編輯和內容創作也非常有用，可以追蹤編輯歷史並輕鬆地合併不同版本的變更。 \n 2.協作開發 \n git 支持多人同時協作開發，多個開發者可以在不同的分支上進行工作，並通過合併操作將自己的工作合併到主分支中。這使得團隊成員可以同時進行工作，而不會互相干擾，從而提高了開發效率。 \n 3.分支管理 \n git 的分支功能非常強大，可以讓專業人士輕鬆地創建、切換和合併分支。這使得專業人士可以方便地在不影響主要開發流程的情況下進行實驗、修復錯誤或者開發新的功能。 \n 4.代碼審查 \n git 支持代碼審查功能，開發者可以通過發送合併請求（Pull Request）的方式將自己的代碼提交給其他成員進行審查。這有助於提高代碼質量、發現潛在的問題和增進團隊之間的溝通。 \n 5.文檔管理 \n git\xa0可以作為一個強大的工具。專業人士可以使用 git 來追蹤文檔的修改歷史，並通過分支和合併操作來管理不同版本的文檔。這使得團隊成員可以輕鬆地協作編輯文檔，同時保持文檔的統一性和準確性。 \n', 'tags': '', 'url': '3.一般相同專業人士如何利用 \xa0git 解決內容管理問題?.html'}, {'title': '4.假如要在 Windows 實際 demo git client 與 git server, 該如何進行?', 'text': '選擇Git服務器： \xa0可以選 GitLab、GitHub 。 \n 安裝 Git 伺服器軟體： \xa0 根據您選擇的 Git 伺服器軟體，按照其官方文件或指南進行安裝。這些軟體通常提供 Windows 版本的安裝程式，您可以下載並按照步驟進行安裝。 \n 配置 Git 伺服器： \xa0 安裝完成後，根據您的需求配置 Git 伺服器。 \n 啟動 Git 伺服器服務： \xa0 安裝完成後，啟動 Git 伺服器服務，確保其能夠正常運行。 \n 安裝 Git 客戶端： \xa0 在 Windows 上安裝 Git 客戶端。您可以從 Git 官方網站下載\xa0Git for Windows\xa0 \n 配置 Git 客戶端： \xa0 安裝完成後，在命令行或圖形用戶界面中配置 Git 客戶端的使用者信息，包括使用者名稱和郵箱地址，以便提交程式碼時記錄作者信息。 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n Git clone 倉庫： \xa0 使用 Git 客戶端從 Git 伺服器上clone倉庫到本地電腦。您可以使用命令行或圖形用戶界面執行clone操作。例如，在命令行中執行 \xa0 git clone <Git伺服器地址> \xa0 即可將倉庫克隆到本地。 \n \n 演示 Git 操作： \n \n 添加檔案和提交變更： \xa0 在本地克隆的倉庫中添加檔案、修改檔案，並使用 Git 客戶端提交這些變更到本地倉庫。 \n 推送變更到 Git 伺服器： \xa0 使用 Git 客戶端將本地倉庫中的變更推送到 Git 伺服器。您可以使用命令行或圖形用戶界面執行推送操作。 \n 拉取最新變更： \xa0 使用 Git 客戶端從 Git 伺服器中拉取最新的變更到本地倉庫，以確保本地倉庫與伺服器保持同步。 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \xa0 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '4.假如要在 Windows 實際 demo git client 與 git server, 該如何進行?.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};