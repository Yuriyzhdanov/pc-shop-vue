<template>
  <div class="container-pagination">
    <div class="pagination">
      <a
        v-for="page in totalPages"
        :key="page"
        href="#header"
        class="page"
        v-bind:class="{ active: currentPage === page - 1 }"
        v-on:click.prevent="handlePageChange(page - 1)"
      >
        {{ page }}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['products'],
    emits: ['onPageChange'],
    data() {
      return {
        currentPage: 0,
        productsOnPage: 10,
        availableProductsOnPage: [10, 20, 30, 40],
      }
    },

    computed: {
      paginatedProducts() {
        const start = this.currentPage * this.productsOnPage
        const end = start + this.productsOnPage
        return this.products.slice(start, end)
      },
      totalPages() {
        return Math.ceil(this.products.length / this.productsOnPage)
      },
    },

    methods: {
      handlePageChange(newPage) {
        this.currentPage = newPage
        this.$emit('onPageChange', this.paginatedProducts)
      },
      updatePaginatedProducts(products) {
        this.paginatedProducts = products
      },
      handleProductsOnPageChange(newLimit) {
        this.productsOnPage = newLimit
        this.currentPage = 0
        this.$emit('onPageChange', this.paginatedProducts)
      },
    },
    // watch: {
    //   products() {
    //     this.currentPage = 0
    //   },
    // },
  }
</script>
