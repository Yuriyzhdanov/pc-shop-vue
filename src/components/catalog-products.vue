<template>
  <div class="container-products pave">
    <tile-product v-for="product of products" v-bind:key="product.id"></tile-product>
  </div>
</template>

<script>
  import TileProduct from './tile-product.vue'

  export default {
    components: {TileProduct},
    props: ['products']
  }
</script>