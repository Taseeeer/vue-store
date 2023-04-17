<template>
  <h1 class="bg-green-500 text-white p-2 text-[1.8rem] text-center">
    Welcome to the store
  </h1>
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
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
