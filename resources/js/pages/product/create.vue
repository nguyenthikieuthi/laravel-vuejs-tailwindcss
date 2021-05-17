<template>
    <div class="container">
        <div class="flex justify-between pb-8">
            <div class="text-xl font-bold">Product Category</div>
            <router-link :to="{ name: 'category-list' }"
                >Product list</router-link
            >
        </div>
        <form @submit.prevent="createCategory">
            <div class="flex items-center mb-4">
                <div class="w-1/4">Category name</div>

                <input
                    v-model="categoryForm.name"
                    type="text"
                    name="name"
                    placeholder="category name"
                    class="w-full border p-2"
                />
                <div
                    v-if="categoryForm.errors.has('name')"
                    v-html="categoryForm.errors.get('name')"
                    class=""
                />
            </div>
            <div class="float-right">
                <button type="submit">Create Product</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import Form from "vform";

export default {
    data() {
        return {
            categoryForm: new Form({
                name: ""
            })
        };
    },
    methods: {
        createCategory() {
            this.categoryForm.post("/api/category").then(({ data }) => {
                this.categoryForm.name = "";

                this.$toast.success({
                    title: "Succes!",
                    message: "Category created successfully."
                });
            });
        }
    }
};
</script>

<style></style>
