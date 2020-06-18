<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my Name</button>
    <p>Name is {{ name }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!--
          v-bind: を使用して props に渡してやる
          name="name" だと文字列として name を渡すことになります

          親コンポーネントでリッスンして子コンポーネントの変更内容を取得します（カスタムイベント）
          @nameWasReset="name = $event"
          イベント名には子コンポーネントで指定された this.$emit('nameWasReset', this.myName)
          $emit の名前と一致する必要があります
          name データは $event と等しくなります $event はデータを参照しているため下記のような書きぶりになります
            name = $event

          :resetFn みたいに親コンポーネントの function を渡すこともできる
          子コンポーネントで function を受け取れるprops を用意してあげることで可能
          カスタムイベントを使用したくない時はこの方法もありだと思う
         -->
        <app-user-detail 
          :myName="name" 
          @nameWasReset="name = $event"
          :resetFn="resetName">
        </app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
  data: function() {
    return {
      name: 'Max'
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName() {
      this.name = 'Anna'
    },
    resetName() {
      this.name = 'Max'
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
