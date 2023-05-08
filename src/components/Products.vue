<template>
  <div class="w-max mx-auto">
    <h3
      class="text-green-500 text-[1.4rem] text-center bg-green-200 p-4 rounded-lg"
    >
      All Product
    </h3>
  </div>
  <div class="flex justify-center my-4">
    <SearchBar
      :allProducts="products"
      :getSearchProducts="getSearchProductsFrom"
    />
  </div>
  <h3
    v-if="loading"
    class="text-green-500 text-[1.4rem] text-center p-4 rounded-lg"
  >
    Loading...
  </h3>
  <div v-if="!loading" class="flex justify-center gap-2 flex-wrap">
    <div
      v-for="product in products"
      :key="product.id"
      class="border border-green-200 p-4 m-4 rounded-lg w-[15rem]"
    >
      <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
        <p class="bg-green-200 p-2 rounded-lg">
          {{ product.title.slice(0, 14) }}...
        </p>
      </router-link>
      <img :src="product.image" class="w-100 h-[12rem] mx-auto my-4" />
      <p class="p-2 my-2 bg-green-100">
        {{ product.description.slice(0, 50) }}...
      </p>
      <p class="p-2 my-2 bg-green-100">Rating: {{ product.rating.rate }}</p>
      <p class="bg-green-200 p-2 rounded-lg">Price: ${{ product.price }}</p>
      <p
        class="bg-red-200 my-2 p-2 rounded-lg text-center cursor-pointer"
        v-on:click="deleteProduct(product.id)"
      >
        ❌
      </p>
    </div>
  </div>
</template>
<script>
import { getAllProducts } from "../services/ProductServices.js";
import SearchBar from "./SearchBar";
export default {
  name: "ProductsComponent",
  props: {},
  components: {
    SearchBar,
  },
  data() {
    return {
      products: [],
      loading: true,
      justValue: 10,
    };
  },
  methods: {
    deleteProduct(id) {
      return (this.products = this.products.filter(
        (product) => product.id !== id
      ));
    },
    getSearchProductsFrom(searchedProducts) {
      return (this.products = searchedProducts);
    },
    cs() {
      console.log("hi");
    },
  },
  async mounted() {
    const data = await getAllProducts();
    this.products = data.data;
    this.loading = false;
  },
};
</script>
