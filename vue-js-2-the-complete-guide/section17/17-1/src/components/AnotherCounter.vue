<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
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
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>
