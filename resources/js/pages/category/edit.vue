<template>
    <div class="container">
        <div class="flex justify-between pb-8">
            <div class="text-xl font-bold">
                Edit Category - {{ categoryForm.name }}
            </div>
            <router-link :to="{ name: 'category-list' }"
                >Category list</router-link
            >
        </div>
        <form @submit.prevent="updateCategory">
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
                <button type="submit">Update Category</button>
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
        updateCategory() {
            let id = this.$route.params.id;

            this.categoryForm.put(`/api/category/${id}`).then(({}) => {
                this.$toast.success({
                    title: "Succes!",
                    message: "Category update successfully."
                });
            });
        },

        loadCategory() {
            let id = this.$route.params.id;

            axios.get(`/api/category/${id}/edit`).then(response => {
                console.log(response);
            });
        }
    },
    mounted() {
        this.loadCategory();
    }
};
</script>

<style></style>
