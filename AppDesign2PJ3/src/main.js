import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // ★ 作成したルーターをインポート
import './style.css' // もしあればそのまま

const app = createApp(App)

app.use(router) // ★ アプリにルーターを適用

app.mount('#app')