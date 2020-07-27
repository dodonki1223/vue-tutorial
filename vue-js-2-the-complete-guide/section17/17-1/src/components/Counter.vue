<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        /*
            <別解>
                methods: {
                    increment() {
                        this.$store.commit('increment');
                    },
                    decrement() {
                        this.$store.commit('decrement');
                    }
                }
            このようにするのは Getters と同じようなやり方です！
         */
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ])
        }
    }
</script>
