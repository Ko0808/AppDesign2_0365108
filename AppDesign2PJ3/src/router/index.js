import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // 先ほど作成したHomeView.vueをインポート

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { showFooter: true } // ★フッターを表示するページに目印を付ける
    },
    {
        path: '/my-trip',
        name: 'my-trip',
        component: () => import('../views/MyTripView.vue'),
        meta: { showFooter: true } // ★このページもフッターを表示
    },
    // 例えば、フッターが不要な設定ページ（仮）
    {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/SettingsView.vue'),
        meta: { showFooter: false } // ★このページではフッターを非表示
    },
    {
        path: '/booking',
        name: 'booking',
        component: () => import('../views/BookingView.vue'),
        meta: { showFooter: true } // Bookingページではフッターを表示
    },
    {
        path: '/flights',
        name: 'flights',
        component: () => import('../views/FlightListView.vue'),
        meta: { showFooter: true } // このページでもフッターを表示
    },
    {
        path: '/passenger-info',
        name: 'passenger-info',
        component: () => import('../views/PassengerInfoView.vue'),
        meta: { showFooter: true } // このページでもフッターを表示
    },
    {
        path: '/payment',
        name: 'payment',
        component: () => import('../views/PaymentView.vue'),
        meta: { showFooter: true } // このページでもフッターを表示
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router