<template>
  <div class="container-products pave">
    {{ products }}
    <tile-product
      v-for="product of products"
      v-bind:key="product.id"
      v-bind:product="product"
    >
    </tile-product>
  </div>
</template>

<script>
  import TileProduct from './tile-product.vue'

  export default {
    components: { TileProduct },
    props: ['products'],
  }
</script>
