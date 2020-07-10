import Home from './components/Home.vue'
import Header from './components/Header.vue'

/*
    下記書き方を以下のように書き換える
      import User from './components/user/User.vue'
      import UserStart from './components/user/UserStart.vue'
      import UserDetail from './components/user/UserDetail.vue'
      import UserEdit from './components/user/UserEdit.vue'
    const で宣言したものが読み込まれたタイミングでよばれる（build.js が小さいファイルで読み込まれるようになる）
    つまり遅延評価になります（ruby の RSpec の let と同じ仕組みっぽい）
    webpack が解釈してくれるらしい……後で調べて要調査
      importだけだと常に大きいbuild.js が読み込まれてしまうためパフォーマンスが改善しそうだ！
 */
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'))
  }, 'user')
}
const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'))
  }, 'user')
}
const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'))
  }, 'user')
}
const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'))
  }, 'user')
}

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
