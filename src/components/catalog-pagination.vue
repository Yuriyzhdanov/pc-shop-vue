<template>
  <div class="container-pagination">
    <div class="pagination">
      <a href="#header" class="page active">0</a>
      <a href="#header" class="page">1</a>
      <a href="#header" class="page">2</a>
      <a href="#header" class="page">3</a>
      <a href="#header" class="page">4</a>
      <a href="#header" class="page">5</a>
      <a href="#header" class="page">6</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: [],
    emits: ['onPageChange'],
    data() {
      return {
        products: [],
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
        return Math.ceil(this.productsCount / this.productsOnPage)
      },
    },
    methods: {
      handlePageChange(newPage) {
        this.currentPage = newPage
      },
      handleProductsOnPageChange(newLimit) {
        this.productsOnPage = newLimit
        this.currentPage = 0
      },
    },
  }
</script>
