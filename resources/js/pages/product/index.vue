<template>
    <div class="container">
        <div class="flex justify-between pb-8">
            <div class="text-xl font-bold">Product List</div>
            <router-link :to="{ name: 'create-product' }"
                >Create Product</router-link
            >
        </div>
        <table class="table-fixed">
            <thead>
                <tr>
                    <th class="w-1/4 ...">Id</th>
                    <th class="w-1/4 ...">Name</th>
                    <th class="w-1/4 ...">Slug</th>
                    <th class="w-1/4 ...">Action</th>
                </tr>
            </thead>
            <tbody v-if="products.length">
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.slug }}</td>
                    <td>
                        <button class="bg-blue-600 w-32 p-2 mr-2 rounded-full">
                            <router-link
                                :to="{
                                    name: 'edit-product',
                                    params: {
                                        id: product.id,
                                        slug: product.slug
                                    }
                                }"
                                class="btn btn-edit bg-blue-600 text-white"
                                >Edit</router-link
                            >
                        </button>
                        <button class="bg-red-600 w-32 p-2 rounded-full">
                            <a
                                @click.prevent="deleteProduct(product)"
                                href="#"
                                class="btn btn-edit  text-white"
                                >Delete</a
                            >
                        </button>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>
                        <h5>No products found.</h5>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            products: []
        };
    },
    module: {
        rules: [
            // ... other rules omitted

            // this will apply to both plain `.scss` files
            // AND `<style lang="scss">` blocks in `.vue` files
            {
                test: /\.scss$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    methods: {
        loadProduct() {
            axios.get("/api/product").then(response => {
                this.products = response.data;
            });
        },

        deleteProduct(product) {
            // axios.delete(`/api/category/${category.id}`).then(() => {
            //     this.$toast.success({
            //         title: "Succes!",
            //         message: "Category deleted successfully."
            //     });
            //     let index = this.categories.indexOf(category);
            //     this.categories.splice(index, 1);
            // });
        }
    },

    mounted() {
        // console.log('Component mounted.')
        // this.loadCategory();
    }
};
</script>

<style lang="scss" scoped></style>
