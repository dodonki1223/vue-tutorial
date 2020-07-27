import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' Clicks';
    }
  },
  mutations: {
    increment: state => {
      state.counter++
    },
    decrement: state => {
      state.counter--
    }
  },
  actions: {
    /*
      <別解>
        increment: context => {
          context.commit('increment');
        }
      mutations と actions の使い分け方法
        - mutaions は 同期処理
        - actions  は 非同期処理
      mutaions で複数の情報対の変更が非同期に行われた場合に挙動が予測不能になるのを
      防ぐという理由がある
      よばれた順番により、値がどうなるかわからないためなど
     */
    increment: ({ commit }) => {
      commit('increment');
    },
    decrement: ({ commit }) => {
      commit('decrement');
    },
    asyncIncrement: ({ commit }) => {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
    asyncDecrement: ({ commit }) => {
      setTimeout(() => {
        commit('decrement');
      }, 1000);
    },
  }
})
