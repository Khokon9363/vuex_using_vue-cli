import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import axios from 'axios'

const store = createStore({
    state(){ // That's like data
        return{
            counter: 10,
            history: [0]
        }
    },
    getters: { // That's like watch
        activeIndexes: (state) => (payload) => {
            let indexes = []
            state.history.forEach((number, index) => {
                if (number === payload) {
                    indexes.push(index)
                }
            })
            return indexes
        }
    },
    mutations: { // That's like methods
        addToCounter(state, payload){
            state.counter += payload
            state.history.push(state.counter)
        },
        substractToCounter(state, payload){
            state.counter -= payload
            state.history.push(state.counter)
        }
    },
    actions: { //That's also like methods. But It's used for calling api || also can call the mutations
        addRandomNumber(context){
            axios.get('https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new')
                 .then(res => {
                    context.commit('addToCounter', res.data)
                 })
                 .catch(err => {
                     console.log(err)
                 })
        }
    }
})

const app = createApp(App)

app.use(store)

app.mount('#app')