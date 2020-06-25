<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <!-- 
                v-model.lazy を使用することで input イベントではなく change イベント後（フォーカスが外れた時）に
                同期するようになります
                https://jp.vuejs.org/v2/guide/forms.html#%E4%BF%AE%E9%A3%BE%E5%AD%90
              -->
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy="userData.password">
            <p>{{ userData.password }}</p>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model="userData.age">
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!-- 
            Interpolation between <textarea>{{ test }}</textarea> doesn't work!
            textarea のデータを表示する時は value="hogehoge" って感じにするため <textarea>{{ test }}</textarea>
            は正しく動作しないので注意
            -->
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="message"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!--  
              ２つの入力を同じモデルにバインドしVue.jsがこれを検出する
              同じモデルでここに２つのチェックボックスがあり、自動的にマージされる
            -->
          <div class="form-group">
            <label for="sendmail">
              <input
                type="checkbox"
                id="sendmail"
                value="SendMail"
                v-model="sendMail"> Send Mail
            </label>
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="sendMail"> Send Infomail
            </label> 
          </div>

        </div>
      </div>
      <div class="row">
        <!--  
            Vue.jsは両方のラジオボタンが同じグループに属していることを認識する
            ラジオボタンが同じv-modelでバインドされていることを認識しているため
            片方のみにしか選択できないようになっている（何もしていないと両方とも選択することができる）
          -->
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
              type="radio"
              id="male"
              value="Male"
              v-model="gender"> Male
          </label>
          <label for="female">
            <input
              type="radio"
              id="female"
              value="Female"
              v-model="gender"> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select
            id="priority"
            class="form-control">
            <option></option>
          </select>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
            class="btn btn-primary">Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>
            <!-- 
              message は実際には改行文字を保持しているが表示する部分では改行されないで表示される
              もし改行も表現した場合は `style="white-space: pre"` を使用することで改行も表示されるようになる
              -->
            <p style="white-space: pre">Message: {{ message }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="item in sendMail" :key="item">{{ item }}</li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority:</p>
            <p>Switched:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        email: '',
        password: '',
        age: 27,
      },
      message: "A new text",
      sendMail: [],
      gender: 'Male'
    }
  }
}
</script>
<style>

</style>
