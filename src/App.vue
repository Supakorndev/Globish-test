<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import WelcomeBox from "./components/WelcomeBox.vue";

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
