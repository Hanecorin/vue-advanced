<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="v">
      <router-view></router-view>
    </transition>
    
    
  </div>
</template>

<script>
import ToolBar from './components/TooBar.vue';

export default {
  components: {
    ToolBar
  },
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
