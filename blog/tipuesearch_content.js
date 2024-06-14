var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"https://github.io/41223126/wcm2044/blog/pages/about/"},{"title":"2024 W6 課程","text":"四技 WCM 第六週課程, 說明如何透過與 ChatGPT 的對話, 了解有關 git 在不同專業領域的應用方法. Git 歷史與希望解決的問題","tags":"w6","url":"https://github.io/41223126/wcm2044/blog/2024-Spring-w6.-blog-tutorial.html"},{"title":"2024 W5 課程","text":"四技 WCM 第五週課程, 以 iframe 嵌入先前的教學影片, 並摘要各影片內容. # 講解Replit分組平台倉儲設定 詳細影片 影片 主要內容有用.ssh-keygen創建自己的config和id_rsa，刪除重新綁定在replit的倉儲帳號以利重新獲得自己的權限 使用可攜檔裡的Putty-solvespace.exe(STL) 零件檢視方法 詳細影片 影片 如何使用可攜程式近端，維護更新自己及分組倉儲 詳細影片 影片","tags":"w5","url":"https://github.io/41223126/wcm2044/blog/2024-Spring-w5-blog-tutorial.html"},{"title":"2024 W4 課程","text":"四技 WCM 第四週課程, 複習前三週的課程內容, 並且介紹 git 與 cmsimde 的相關用法. Replit 靜態網站檢視 下載 main2.txt 與 static.txt 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視.","tags":"w4","url":"https://github.io/41223126/wcm2044/blog/2024-Spring-w4-blog-tutorial.html"},{"title":"2024 W3 課程","text":"四技 WCM 第三週課程, 除了 Replit, Github Codespaces, Gitpod 之外, 還介紹如何利用可攜系統維護個人與分組網站. 建立分組倉儲 利用Codespaces建立分組倉儲建立個人子模組 另用終端機打出指令 git status ls -l clear git submodule add 自己倉儲網址.git空格+學號 git add . git commit -m \"add 學號 submodule\" git push 就可以將自己的個人子模組加入到分組倉儲 利用 Github Codespaces 維護倉儲 如前所述, 使用 Replit 管理分組網站, 必須採動態建立 .ssh 目錄中的私鑰與 config, 過程比較複雜, 但若採用 Github Codespaces, 則可以在登入 Github 帳號下, 管理該帳號所有授權的倉儲, 包括分組倉儲與網站, 唯一的限制是每個月只能使用 120 core hours, 若以內定的 2 core 執行管理, 則平均每天可以使用兩個小時. WINK https://www.debugmode.com/wink.html GIT ORDER git add . (新增) git commit -m \"說明字串\" (提交及名稱) git push (推送) git version (查詢目前所使用的 git 版本) git status (一般是用來檢查目前近端改版情況) 若在遠端倉儲已經改版了，就必須先git pull，將遠端資訊與自己的合併更新，才能在提交新的版本推送至倉儲。 git pull=git fetch + git merge git submodule add 倉儲網址子目錄 git clone --recurse-submodules (.git 指定目錄與否) token git config --global 以下為其他其他指令 git submodule update --init (抓下子模組) git log (檢視 Git 紀錄 Q鍵離開) ls -l (瀏覽) pwd (列出現在工作目錄) acp (\"輸入\" 直接上傳) dns (將英文名稱轉為數字IP 問server(伺服器)IP地址 DNS會先查詢自己資料庫) dir (顯示某個磁碟指定目錄下的全部或部分檔案目錄和子目錄) ./b(代表執行、運行)(執行可執行檔)","tags":"w3","url":"https://github.io/41223126/wcm2044/blog/2024-Spring-w3-blog-tutorial.html"},{"title":"2024 W1 課程","text":"四技 WCM 第一週課程, 主要引導學員登入 MS Online 並建立 Github 帳號, 以及利用 cmsimde_site 作為 Template 建立個人課程網站. 登入 MS Online 網際內容管理課程學員上課時必須登入 MS Online, 主要目的是能在 MS Teams 中上課, 一邊觀看教學示範, 一邊自行操作. Github 帳號 建立 Github 帳號, 主要用來建立並維護個人的課程倉儲與網站. 建立個人課程網站 網際內容管理的個人課程網站名稱為 wcm2024, 請先登入 Github 後, 連接至 https://github.com/mdecycu/cmsimde_site 以此倉儲作為Template建立個人的wcm2024倉儲 個人倉儲個人倉儲成品: https://github.com/Ren911308/wcm2024","tags":"w1","url":"https://github.io/41223126/wcm2044/blog/2024-Spring-w1.-blog-tutorial.html"},{"title":"2024 W2 課程","text":"四技 WCM 第二週課程, 主要確認各學員是否完成 Github 中個人倉儲與網站的建立, 並且除了 Replit 還導入利用 Github Codespaces 維護個人與分組網站. 確認所有學員都已經建立個人網站 建立個人課程網站步驟: 登入 Github 連結到 https://github.com/mdecycu/cmsimde_site 利用 \"Use this template\" 下方的 \"Create a new repository\" 建立名稱為 wcm2024 的倉儲 在 wcm2024 倉儲上方的 Settings 設定頁面中, 左方 Pages 中的 Branch 分支區域, 選擇將 main 分支存為網頁的 root 根目錄 等 wcm2024 的倉儲 Github Pages 轉檔完成後, 可以看到 commits 提交區的綠色勾勾, 就完成網址為 https://帳號.github.io/wcm2024 的個人課程網站 利用上述步驟完成的倉儲內容, 同時帶有以 Python 編寫的動態網站程式, 以及位於 content 目錄中的靜態網頁資料. 完成品: https://ren911308.github.io/wcm2024/content 確認學員已經會利用 Replit 維護網站 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit On Replit 啟動動態編輯網站 如何利用 Codespaces 維護網站 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit On Replit: 之後還需以python3 main.py執行啟動動態編輯網站","tags":"w2","url":"https://github.io/41223126/wcm2044/blog/2024-Spring-w2-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"https://github.io/41223126/wcm2044/blog/2024-Spring-w1-blog-tutorial.html"}]};