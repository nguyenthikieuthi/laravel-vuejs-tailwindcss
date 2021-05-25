<template>
    <div class="container">
        <div class="flex justify-between pb-8">
            <div class="text-xl font-bold">Product Category</div>
            <router-link :to="{ name: 'product-list' }"
                >Product list</router-link
            >
        </div>
        <form @submit.prevent="createProduct">
            <div class="flex items-center mb-4">
                <div class="w-1/4">Product Title</div>
                <input
                    v-model="productForm.title"
                    type="text"
                    name="title"
                    placeholder="product title"
                    class="w-full border p-2"
                />
                <div
                    v-if="productForm.errors.has('title')"
                    v-html="productForm.errors.get('title')"
                    class=""
                />
            </div>
            <div class="flex items-center mb-4">
                <div class="w-1/4">Product Price</div>
                <input
                    v-model="productForm.price"
                    type="text"
                    name="price"
                    placeholder="product price"
                    class="w-full border p-2"
                />
                <div
                    v-if="productForm.errors.has('price')"
                    v-html="productForm.errors.get('price')"
                    class=""
                />
            </div>
            <div class="flex items-center mb-4">
                <div class="w-1/4">Product Image</div>
                <input
                    type="file"
                    name="image"
                    @change="onImageChange"
                    class="w-full border p-2"
                />
                <div
                    v-if="productForm.errors.has('image')"
                    v-html="productForm.errors.get('image')"
                    class=""
                />
            </div>
            <div class="flex items-center mb-4">
                <div class="w-1/4">Product Description</div>
                <textarea
                    v-model="productForm.description"
                    name="description"
                    placeholder="product description"
                    class="w-full border p-2"
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>
                <div
                    v-if="productForm.errors.has('description')"
                    v-html="productForm.errors.get('description')"
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
// import { objectToFormData } from "object-to-formdata";

export default {
    data() {
        return {
            productForm: new Form({
                title: "",
                price: "",
                image: "",
                description: ""
            }),

            formData: new FormData()
        };
    },
    methods: {
        createProduct() {
            this.formData.set("title", this.productForm.title);
            this.formData.set("price", this.productForm.price);
            this.formData.set("description", this.productForm.description);

            axios
                .post("/api/product", this.formData)
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        onImageChange(e) {
            const file = e.target.files[0];
            // Do some client side validation...
            // this.formData.image = file;
            this.formData.append("image", file);
            console.log(file);
        }
    }
};
</script>

<style></style>
