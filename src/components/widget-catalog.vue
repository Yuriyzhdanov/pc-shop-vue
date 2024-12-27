<template>
  <div class="container-products pave">
    <tile-product
      v-for="product of paginatedProducts"
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
    props: ['paginatedProducts'],
  }
</script>
