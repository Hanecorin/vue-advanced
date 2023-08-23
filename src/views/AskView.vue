<template>
  <div>
    <div v-for="item in fetchedAsk" v-bind:key="item.title">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {

  computed:{
    //#3
    ...mapGetters({
      fetchedAsk: 'fetchedAsk'
    })

    //#2
    // ...mapState({
    //   ask: state => state.ask
    // })
    //#1
    // ask(){
    //   return this.$store.state.ask;
    // }
  },
  
  created() {
    this.$store.dispatch('FETCH_ASK');
    // fetchAskList()
    //   .then(response => {this.ask = response.data, console.log(response)})
    //   .catch(error => console.log(error));
  }
}
</script>

<style>

</style>