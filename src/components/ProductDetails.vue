<template>
  <h3 class="text-green-500 text-[1.4rem] text-center p-4 rounded-lg">
    Product Details
  </h3>
  <div class="flex justify-center gap-2 flex-wrap">
    <div
      class="border border-green-200 p-4 m-4 rounded-lg w-max flex gap-8 justify-center w-[65%]"
    >
      <div>
        <p class="bg-green-200 inline-block p-2 rounded-lg my-2">
          {{ product.title }}
        </p>
        <p class="p2 bg-green-100 p-2 my-2 w-[65ch]">
          {{ product.description }}...
        </p>
        <div class="flex flex-col items-start">
          <p class="bg-green-200 inline-block p-2 rounded-lg my-2">
            Price: ${{ product.price }}
          </p>
          <button class="p-2 bg-green-200 rounded-lg px-8">
            <router-link to="/products">←</router-link>
          </button>
        </div>
      </div>
      <div class="w-[20%]">
        <img :src="product.image" />
      </div>
    </div>
  </div>
</template>
<script>
import { getSingleProduct } from "../services/ProductServices.js";
export default {
  name: "ProductDetails",
  props: ["id"],
  data() {
    return {
      product: {},
    };
  },
  async mounted() {
    const data = await getSingleProduct(this.id);
    this.product = data.data;
  },
};
</script>
