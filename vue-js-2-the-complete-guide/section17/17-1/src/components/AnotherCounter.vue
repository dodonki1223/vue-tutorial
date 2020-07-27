<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by:50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by:50, duration: 500})">Decrement</button>
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
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>
