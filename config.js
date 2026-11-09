'use strict';
/* 登入用的 Firebase 設定：和「班級百寶箱」共用同一個 Firebase 專案（class-toolbox-3104d）。
   這幾個值是公開的識別碼（本來就會出現在網頁裡），資料安不安全靠的是 Firestore 規則（../firebase/firestore.rules）。
   直接雙擊 index.html（file://）打開時不用登入，資料只存在那台電腦的瀏覽器。 */
const FB_CONFIG = {
  apiKey: 'AIzaSyAY5VuT0rgEelAuSxCF1w63ejFumvpx-gs',
  authDomain: 'class-toolbox-3104d.firebaseapp.com',
  projectId: 'class-toolbox-3104d',
  storageBucket: 'class-toolbox-3104d.firebasestorage.app',
  messagingSenderId: '12699614759',
  appId: '1:12699614759:web:b7b54589752bbf6f02d802'
};
const FB_SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';
