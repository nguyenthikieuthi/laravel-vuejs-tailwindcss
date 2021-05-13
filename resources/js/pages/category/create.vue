<template>
       <div class="container">        
        <div class="flex justify-between pb-8">
            <div class="text-xl font-bold">Create Category</div>
            <router-link :to="{name: 'category-list'}">Category list</router-link>               
        </div>
        <form @submit.prevent="createCategory">
            <div class="flex items-center mb-4">
                <div class="w-1/4">Category name</div>
                <input v-model="categoryName" type="text" name="name" placeholder="category name" class="w-full border p-2">
            </div>
            <div class="float-right">
                <button type="submit">Create Category</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            categoryName: '',
        }
    },
    methods: {
        createCategory(){
            axios.post('/api/category', {name: this.categoryName}).then(respone => {
                console.log(respone);
            })
        }
    }
}
</script>

<style>

</style>