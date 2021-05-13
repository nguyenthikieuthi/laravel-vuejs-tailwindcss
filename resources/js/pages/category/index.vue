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
                    <tr>
                    <td>1</td>
                    <td>Fashion</td>
                    <td>fashion</td>
                    <td>
                        <a href="#" class="btn btn-edit">Edit</a>
                        <a href="#" class="btn btn-delete">Delete</a>
                    </td>
                    </tr>
                    <tr class="bg-blue-200">
                    <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                    <td>Adam</td>
                    <td>112</td>
                    </tr>
                    <tr>
                    <td>Intro to JavaScript</td>
                    <td>Chris</td>
                    <td>1,280</td>
                    </tr>
                </tbody>
                </table>
    </div>
</template>

<script>
    export default {
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
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>
    .btn {
        width: 12vw;
        height: 6vw;
    }
</style>
