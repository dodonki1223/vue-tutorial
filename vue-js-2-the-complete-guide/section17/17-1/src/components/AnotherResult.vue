<template>
    <div>
      <!-- 
        <別解>
        <p>Counter is: {{ counter }}</p>
        <p>Number of Clicks: {{ clicks }}</p>
      -->
      <p>Counter is: {{ doubleCounter }}</p>
      <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';
    export default {
        /*
          mapGetters を使用した方がスッキリすると思う！
          <別解>
            computed: {
                counter() {
                    return this.$store.getters.doubleCounter;
                },
                clicks() {
                    return this.$store.getters.stringCounter;
                }
            }

        これでもいいが、新しい computed を追加することができないので
        スプレッド構文を使用することで他の computed を追加することができるようになる
          computed: mapGetters([
            'doubleCounter',
            'stringCounter'
          ])
         */
        // computed: {
        //   ...mapGetters([
        //     'doubleCounter',
        //     'stringCounter'
        //   ])
        // }
        computed: {
          ...mapGetters({
            doubleCounter: types.DOUBLE_COUNTER,
            stringCounter: types.CLICK_COUNTER
          })
        }
    }
</script>
