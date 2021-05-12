<template>
    <div class="header bg-blue-900 h-20 flex justify-center items-stretch">
        <div class="self-center mx-4">
            <a class="text-white p-3 hover:bg-red-700" href="#">講座TOP</a>
            <a class="text-white p-3" href="#">予約一覧</a>
            <a class="text-white p-3" href="#">使い方</a>
            <a class="text-white p-3" href="#">問い合わせ</a>          
            <router-link :to="{name: 'category-list'}" class="text-white p-3">Product Category</router-link>      
        </div>
    
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style>

</style>