<template>
  <div>
    <h1>Vuex History</h1>
    <div class="container">
        <div class="flex">
            <p 
             v-for="(number, index) in store.state.history"
             :key="index"
             :class="activeIndexes(parseInt(value)).includes(index) && 'bold'"
            >
                {{ number }}
            </p>
        </div>
        <input type="number" placeholder="Search by any number" v-model="value">
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      value: 0,
      store: this.$store
    }
  },
  computed: {
      activeIndexes(){
          return this.store.getters.activeIndexes
      }
  }
}
</script>

<style scoped>
  .container{
    margin-top: 2rem;
  }
  h1{
    border-top: 2px solid gray;
  }
  .flex{
      display: flex;
      text-align: center;
      width: 25rem;
      margin: 0 auto;
      justify-content: center;
      flex-wrap: wrap;
  }
  p{
      margin: 1rem;
  }
  .bold{
      font-weight: 900;
  }
</style>