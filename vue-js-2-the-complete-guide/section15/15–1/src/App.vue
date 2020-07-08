<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>


        <input type="text" class="form-control" v-model="node">
        <br>
        <br>



        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br>
        <br>
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, index) in users" :key="index">{{ u.username }} - {{ u.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import config from './const'

export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      },
      users: [],
      resource: {},
      node: 'data',
      firebaseConfig: config.FIREBASE
    }
  },
  methods: {
    submit() {
      // this.$http.post('data.json', this.user)
      //   .then(response => {
      //     console.log(response)
      //   }, error => {
      //     console.log(error)
      //   })

      // this.resource.save({}, this.user)

      this.resource.saveAlt(this.user)
    },
    fetchData() {
      // this.$http.get('data.json')
      //   .then(response => {
      //     // Promise を返すので return する（非同期なため）
      //     return response.json()
      //   })
      //   .then(data => {
      //     const resultArray = []
      //     for (let key in data) {
      //       resultArray.push(data[key])
      //     }
      //     this.users = resultArray
      //   })

      // 引数に「{node: this.node}」を指定することで下記の部分の node が this.node に置き換わります
      // this.resource = this.$resource('{node}.json', {}, customActions)
      this.resource.getData({node: this.node})
        .then(response => {
          // Promise を返すので return する（非同期なため）
          return response.json()
        })
        .then(data => {
          const resultArray = []
          for (let key in data) {
            resultArray.push(data[key])
          }
          this.users = resultArray
        })
    }
  },
  created() {
    // ここで宣言することで複数のリソースを簡単に作成することができる
    // 必要な POST や GET を宣言しておくことでここに集中管理でコードを記述できるようになる
    const customActions = {
      saveAlt: {method: 'POST' , url: 'alternative.json'},
      getData: {method: 'GET'}
    }
    // URL Template を使用しているので設定方法は以下の記事を参考にすること 
    // https://medialize.github.io/URI.js/uri-template.html
    this.resource = this.$resource('{node}.json', {}, customActions)
  }
}
</script>

<style>
</style>
