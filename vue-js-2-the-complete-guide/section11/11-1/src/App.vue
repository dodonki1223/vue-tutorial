<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <!-- 
              下記で行っていること（:value、@input）は v-model="userData.email" と同じです
              v-model="" は裏で下記のように動いています
              `value` という `props` が必要で `@input` という イベントが必要だとわかります
              ※v-model.lazy の場合は `@changed` というイベントになります
                <input
                  type="text"
                  id="email"
                  class="form-control"
                  :value="userData.email"
                  @input="userData.email = $event.target.value">
             -->
            <input
              type="text"
              id="email"
              class="form-control"
              :value="userData.email"
              @input="userData.email = $event.target.value">
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
          <!--  
              select Box のデフォルト値を設定する方法として以下の２つがある
              ただし以下の２つで行っていた場合はselecteのやり方で上書きされてしまうので注意
                select で行う
                  <select v-model="selectedPriority">
                    <option>ABCEDFG</option>
                    <option>あいうえお</option>
                  </select>
                option で行う
                  <select>
                    <option :selected="true">ABCEDFG</option>
                    <option>あいうえお</option>
                  </select>
            -->
          <select
            id="priority"
            class="form-control"
            v-model="selectedPriority">
            <!-- 
                :selected には true or false を設定する必要がある
                普通だと選択されているものに true が設定されるので同じようにすること
                下記のような感じで設定すること
                  <option 
                    v-for="priority in priorities" 
                    :key="priority" 
                    :selected="priority == 'Medium'">{{ priority }}</option>
              -->
            <option 
              v-for="priority in priorities" 
              :key="priority">{{ priority }}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-switch v-model="dataSwitch"></app-switch>
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
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switched: {{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from './Switch.vue'

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
      gender: 'Male',
      selectedPriority: 'High',
      priorities: ['High', 'Medium', 'Low'],
      dataSwitch: true
    }
  },
  components: {
    appSwitch: Switch
  }
}
</script>
<style>

</style>
