<template>
  <input
    placeholder="Search a product"
    class="bg-green-200 flex justify-center p-4 rounded-lg text-black border-none w-[70%] text-center"
    v-model="searchValue"
    v-on:input="filterSearchedProducts(searchValue)"
  />
</template>
<script>
export default {
  name: "SearchBar",
  props: {
    allProducts: Array,
    getSearchProducts: Function,
  },
  data() {
    return {
      products: this.allProducts,
      searchValue: "",
    };
  },
  watch: {
    searchValue: {
      handler() {
        console.log("User is searching");
      },
      deep: true,
    },
  },
  methods: {
    filterSearchedProducts(search) {
      this.products = this.allProducts.filter((product) => {
        if (search === "") {
          return product;
        } else if (product.title.toLowerCase().includes(search)) {
          return product;
        }
      });

      return this.getSearchProducts(this.products);
    },
  },
};
</script>
