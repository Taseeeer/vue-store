import { createRouter, createWebHistory } from "vue-router";
import Products from "../components/Products.vue";
import ProductDetails from "../components/ProductDetails.vue";

const routes = [
    {
        path: "/products",
        name: "ProductsComponent",
        component: Products,
    },
    {
        path: "/product/:id",
        name: "ProductDetails",
        props: true,
        component: ProductDetails
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;