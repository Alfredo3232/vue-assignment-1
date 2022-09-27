const app = Vue.createApp({
    data() {
        return {
            name: 'arojas32',
            age: 21,
            img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/aa5276e1-05c2-4672-9264-3a52136565b9/dblzbbl-642b262f-c97e-4928-8a3d-164e0d0e57cc.png'
        }
    },
    methods: {
        increaseAge() {
            let future = this.age
            return future + 5
        },
        randomNum() {
            return Math.random()
        }
    }
})

app.mount('#assignment')