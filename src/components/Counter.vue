<template>
  <div>
    <h1>Vuex Counter</h1>
    <h1>{{ store.state.counter }}</h1>
    <button @click="substractToCounter(parseInt(value))">-</button>
    <input type="number" v-model="value">
    <button @click="addToCounter(parseInt(value))">+</button>
    <div>
        <button class="btn" @click="addRandomNumber">Add by Random Number</button>
    </div>
    <History />
  </div>
</template>

<script>
import History from './History.vue'

export default {
  components: {
    History
  },
  data(){
    return{
      value: 5,
      store: this.$store
    }
  },
  methods:{
    addToCounter(value){
      this.store.commit('addToCounter', value)
    },
    substractToCounter(value){
      this.store.commit('substractToCounter', value)
    },
    addRandomNumber(){
      this.store.dispatch('addRandomNumber')
    }
  }
}
</script>

<style>
  button{
    border-radius: 100%;
    border: none;
    width: 2rem;
    height: 2rem;
    font-weight: 700;
    cursor: pointer;
  }
  input{
    padding: 0.4rem;
    margin: 0 0.5rem;
    text-align: center;
    outline: none;
  }
  .btn {
      border-radius: 0.5rem;
      width: auto;
      background: #41B983;
      margin-top: 1rem;
      color: white;
      cursor: pointer;
  }
</style>