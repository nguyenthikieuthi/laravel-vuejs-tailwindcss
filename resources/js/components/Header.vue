<template>
    <div class="header bg-blue-900 h-20 flex justify-center items-stretch">
        <div class="self-center mx-4 flex">
            <!-- <a class="text-white p-3 hover:bg-red-700" href="#">講座TOP</a>
            <a class="text-white p-3" href="#">予約一覧</a>
            <a class="text-white p-3" href="#">使い方</a>
            <a class="text-white p-3" href="#">問い合わせ</a> -->
            <div class="text-white p-3">
                <router-link :to="{ name: 'home' }">Home</router-link>
            </div>

            <div class="text-white p-3">
                <router-link :to="{ name: 'category-list' }"
                    >Product Category</router-link
                >
            </div>

            <div class="text-white p-3">
                <router-link :to="{ name: 'product-list' }"
                    >Product List</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.active {
    background: white;
    color: black;
}
</style>
