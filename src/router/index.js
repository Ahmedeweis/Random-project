/* eslint-disable linebreak-style */
import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import IndexView from '../views/IndexView.vue';
import LogInView from '../views/LogInView.vue';
import MainView from '../views/MainView.vue';
import Converztions from '../views/TalkingViews/ConverztionsView.vue';
import Chat from '../views/TalkingViews/ChatView.vue';
import Form from '../views/FormViews/FormView.vue';
import MoreLinks from '../views/MoreLinksViews/MoreLinksView.vue';
import HellowWorld from '../components/HelloWorld.vue';
import ProfileShow from '../views/ProfileViews/ProfileView.vue';
import Requests from '../views/Requests/RequestsView.vue';
import FullRequest from '../views/Requests/FullRequestView.vue';
import Notification from '../views/NotificationView.vue';
import AcceptList from '../views/Requests/AcceptListView.vue';
import PaymentList from '../views/Requests/PaymentListView.vue';
import PaymentGetWays from '../views/Payments/PaymentGetWaysView.vue';
import offers from '../views/offers/offersView.vue';
import SettingMenu from '../views/settings/settingMenuView.vue';
import ForgetPassword from '../views/ProfileViews/ForgetPasswordView.vue';
import HelpSupportView from '../views/MoreLinksViews/HelpSupportView.vue';
import fackreq from '../views/Requests/fackreqView.vue';
import fackFullRequest from '../views/Requests/fackFullRequestView.vue';
import AddOffer from '../views/offers/AddOfferView.vue';
import FQA from '../views/MoreLinksViews/FQARealView.vue';
import AboutMashrouk from '../views/MoreLinksViews/AboutMashrouk.vue';
import Favorate from '../views/Requests/FavorateView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HellowWorld,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: IndexView,
  },
  {
    path: '/login',
    name: 'login',
    component: LogInView,
  },
  {
    path: '/main',
    name: 'main',
    component: MainView,
  },
  {
    path: '/Converztions',
    name: 'Converztions',
    component: Converztions,
  },
  {
    path: '/Chat',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/Form',
    name: 'Form',
    component: Form,
  },
  {
    path: '/MoreLinks',
    name: 'MoreLinks',
    component: MoreLinks,
  },
  {
    path: '/Profile',
    name: 'ProfileShow',
    component: ProfileShow,
  },

  {
    path: '/Requests',
    name: 'Requests',
    component: Requests,
  },
  {
    path: '/FullRequest/:id',
    name: 'FullRequest',
    component: FullRequest,
  },
  {
    path: '/Notification',
    name: '',
    component: Notification,
  },
  {
    path: '/AcceptList',
    name: 'AcceptList',
    component: AcceptList,
  },
  {
    path: '/PaymentList',
    name: 'PaymentList',
    component: PaymentList,
  },
  {
    path: '/PaymentGetWays',
    name: 'PaymentGetWays',
    component: PaymentGetWays,
  },
  {
    path: '/offers',
    name: 'offers',
    component: offers,
  },
  {
    path: '/SettingMenu',
    name: 'SettingMenu',
    component: SettingMenu,
  },
  {
    path: '/ForgetPassword',
    name: 'ForgetPassword',
    component: ForgetPassword,
  },
  {
    path: '/HelpSupportView',
    name: 'HelpSupportView',
    component: HelpSupportView,
  },
  {
    path: '/fackreq',
    name: 'fackreq',
    component: fackreq,
  },
  {
    path: '/fackFullRequest',
    name: 'fackFullRequest',
    component: fackFullRequest,
  },
  {
    path: '/AddOffer',
    name: 'AddOffer',
    component: AddOffer,
  },
  {
    path: '/FQA',
    name: 'FQA',
    component: FQA,
  },
  {
    path: '/AboutMashrouk',
    name: 'AboutMashrouk',
    component: AboutMashrouk,
  },
  {
    path: '/Favorate',
    name: 'Favorate',
    component: Favorate,
  },
  // {
  //   path: '/',
  //   name: '',
  //   component:,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
