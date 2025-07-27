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
    {
        path: '/confirmation',
        name: 'confirmation',
        component: () => import('../views/ConfirmationView.vue'),
        meta: { showFooter: true } // このページでもフッターを表示
    },
    {
        path: '/my-page',
        name: 'my-page',
        component: () => import('../views/MyPageView.vue'),
        meta: { showFooter: true } // このページでもフッターを表示
    },
    {
        path: '/help-tools',
        name: 'help-tools',
        component: () => import('../views/HelpToolsView.vue'),
        meta: { showFooter: true } // このページでもフッターを表示
    },
    {
        path: '/miles-calculator',
        name: 'miles-calculator',
        component: () => import('../views/MilesCalculatorView.vue'),
        meta: { showFooter: true } // このページでもフッターを表示
    },
    {
        path: '/airport-map',
        name: 'airport-map',
        component: () => import('../views/AirportMapView.vue'),
        meta: { showFooter: true } // このページでもフッターを表示
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/SettingsView.vue'),
        meta: { showFooter: false } // 設定ページではフッターを非表示
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router