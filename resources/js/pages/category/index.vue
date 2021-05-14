<template>
    <div class="container">        
        <div class="flex justify-between pb-8">
            <div class="text-xl font-bold">Product Category</div>
            <router-link :to="{name: 'create-category'}">Create Category</router-link>               
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
                <tbody>
                    <tr v-for="category in categories" :key="category.id">
                    <td>{{ category.id }}</td>
                    <td>{{ category.name }}</td>
                    <td>{{ category.slug }}</td>
                    <td>
                        <a href="#" class="btn btn-edit">Edit</a>
                        <a href="#" class="btn btn-delete">Delete</a>
                    </td>
                    </tr>        
                </tbody>
                </table>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return {
                categories: [],
            }
        },
         module: {
            rules: [
            // ... other rules omitted

            // this will apply to both plain `.scss` files
            // AND `<style lang="scss">` blocks in `.vue` files
            {
                test: /\.scss$/,
                use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
                ]
            }
            ]
        },

        methods: {
            loadCategory(){
                axios.get('/api/category').then(response => {
                    this.categories = response.data;
                })
            }
        },

        mounted() {
            // console.log('Component mounted.')
            this.loadCategory();
        }
    }
</script>

<style lang="scss" scoped>

</style>
