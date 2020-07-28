import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

/* 
    「import * as name」構文はすべてをインポートする
    下記のコードは、myModule を現在のスコープに加え、/modules/my-module.js のファイルの
    モジュールからのエクスポートすべてを含めます。
      import * as myModule from '/modules/my-module.js';
    エクスポートにアクセスするには、モジュール名（ここでは「myModule」）を名前空間として用いることになります。 
    たとえば、上記でインポートされたモジュールがエクスポートにdoAllTheAmazingThings()を含む場合は、下記のように呼び出します。
      myModule.doAllTheAmazingThings();
 */
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutaions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  getters,
  mutations,
  actions,
  modules: {
    counter
  }
})
