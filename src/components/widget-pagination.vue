<template>
  <div>
    <div class="right-item">
      <p>Товаров на странице</p>
      <div class="wrap-products-on-page">
        <select
          v-model="selectedProductsPerPage"
          name="products-on-page"
          class="products-on-page"
        >
          <option
            v-for="(val, key) in availableProductsPerPage"
            :key="key"
            :value="val"
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
        v-for="(val, idx) in Array(totalPages)"
        :key="idx"
        href="#header"
        class="page"
        v-bind:data-content="idx"
        v-bind:class="{ active: selectedPage === idx }"
        v-on:click.prevent="handlePageChange(idx)"
      >
        {{ idx }}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['sortedProducts'],
    emits: ['onUpdatePaginatedProducts'],

    mounted() {
      this.$emit('onUpdatePaginatedProducts', this.paginatedProducts)
    },

    data() {
      return {
        selectedPage: 0,
        availableProductsPerPage: [10, 20, 50],
        selectedProductsPerPage: 10,
      }
    },

    watch: {
      selectedProductsPerPage() {
        this.selectedPage = 0
      },

      paginatedProducts() {
        this.$emit('onUpdatePaginatedProducts', this.paginatedProducts)
      },
    },

    computed: {
      totalPages() {
        return Math.ceil(
          this.sortedProducts.length / this.selectedProductsPerPage
        )
      },

      paginatedProducts() {
        const start = this.selectedPage * this.selectedProductsPerPage
        const end = start + this.selectedProductsPerPage
        return this.sortedProducts.slice(start, end)
      },
    },

    methods: {
      handlePageChange(selectedPage) {
        this.selectedPage = selectedPage
        this.$emit('onUpdatePaginatedProducts', this.paginatedProducts)
      },
    },
  }
</script>
