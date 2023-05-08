<template>
  <h1 class="bg-green-500 text-white p-2 text-[1.8rem] text-center">
    Welcome to the store
  </h1>
  <button @click="activeTab = 'Node'" class="bg-red-500 p-2">Node</button>
  <button @click="activeTab = 'Go'" class="bg-red-500 p-2">Go</button>
  <component :is="activeTab"></component>
  <ul class="flex justify-center text-green-500 p-4 text-[1.2rem] gap-8">
    <li>
      <router-link to="/products"> Products </router-link>
    </li>
    <li>
      <router-link to="/">Home</router-link>
    </li>
  </ul>
  <ProductDetails />
  <router-view></router-view>
</template>

<script>
import { defineAsyncComponent } from "vue";
const Node = defineAsyncComponent(() => import("./components/Node.vue"));
const Go = defineAsyncComponent(() => import("./components/Go.vue"));

export default {
  name: "App",
  components: { Node, Go },
  data() {
    return {
      activeTab: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
