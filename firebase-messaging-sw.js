importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDtTPbuuCBKOSGxNPJ4st5UVDwaV5ZBZ1s",
  authDomain: "test-mods-29de7.firebaseapp.com",
  databaseURL: "https://test-mods-29de7-default-rtdb.firebaseio.com",
  projectId: "test-mods-29de7",
  storageBucket: "test-mods-29de7.firebasestorage.app",
  messagingSenderId: "522217670161",
  appId: "1:522217670161:web:bf3065d08371bc681ed3b0",
  measurementId: "G-819FH6MKYQ"
});

const messaging = firebase.messaging();

// পেজ বন্ধ থাকলে/ব্যাকগ্রাউন্ডে থাকলে এই হ্যান্ডলার নোটিফিকেশন দেখায়
messaging.onBackgroundMessage((payload) => {
  const data = payload.data || {};
  const title = data.title || 'Notification';
  const options = {
    body: data.body || '',
    icon: data.imageUrl || undefined
  };
  self.registration.showNotification(title, options);
});
