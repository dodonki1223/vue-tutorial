import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import Home from './components/Home.vue'
import Header from './components/Header.vue'

export const routes = [
  { path: '', name: 'home', components: {
    default: Home,
    'header-top': Header
  } },
  { path: '/user', components: {
    default: User,
    'header-bottom': Header
  }, children: [
    { path: '', component: UserStart },
    /*
        特定のパスごとにページ遷移前になにか実行したい時は beforeEnter を使用する
          beforeEach（グローバルで実行する奴） と使い方は基本的に一緒
     */
    { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
      console.log('inside route setup')
      next()
    } },
    { path: ':id/edit', component: UserEdit, name: 'userEdit' },
  ] },
  // redirect キーを使用することでリダイレクトさせることができる
  { path: '/redirect-me', redirect: { name: 'home' } },
  // ワイルドカードを使用して一致しないところの場合は特定のURLにリダイレクトさせる
  { path: '*', redirect: '/' }
]
