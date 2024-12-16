<template>
  <div>
    <div class="right-item">
      <p>Товаров на странице</p>
      <div class="wrap-products-on-page">
        <select
          v-model="productsPerPageOptions"
          v-on:change="handleProductsPerPageChange"
          name="products-on-page"
          class="products-on-page"
        >
          <option
            v-for="(val, key) in productsPerPageOptions"
            :key="key"
            :value="key"
          >
            {{ val }}
          </option>
        </select>
      </div>
    </div>
  </div>
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
    props: ['products', 'productsPerPage'],
    emits: ['onPageChange', 'onProductsPerPageChange'],
    data() {
      return {
        currentPage: 0,
        productsPerPageOptions: [5, 10, 20, 50],
      }
    },

    computed: {
      totalPages() {
        return Math.ceil(this.products.length / this.productsPerPage)
      },
      paginatedProducts() {
        const start = this.currentPage * this.productsPerPage
        const end = start + this.productsPerPage
        return this.products.slice(start, end)
      },
    },
    methods: {
      handlePageChange(newPage) {
        this.currentPage = newPage
        this.$emit('onPageChange', this.paginatedProducts)
      },
      handleProductsPerPageChange() {
        this.currentPage = 0
        this.$emit('onPageChange', this.paginatedProducts)
      },
    },
  }
</script>
