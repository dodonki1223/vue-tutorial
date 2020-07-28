const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + ' Clicks';
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
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
  increment: ({ commit }, payload) => {
    commit('increment', payload);
  },
  decrement: ({ commit }, payload) => {
    commit('decrement', payload);
  },
  asyncIncrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit('increment', payload.by);
    }, payload.duration);
  },
  asyncDecrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit('decrement', payload.by);
    }, payload.duration);
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
