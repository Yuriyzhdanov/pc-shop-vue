<template>
  <body>
    <div class="wrapper">
      <div id="header" class="header row">
        <div class="left">
          <div class="wrap-img">
            <img src="../img/bg/logo.png" alt="logo" />
          </div>
        </div>
        <div class="center">
          <catalog-search
            v-bind:productsCaptions="productsCaptions"
            v-on:onSearchQuery="handleSerchQuery"
          ></catalog-search>
        </div>
        <div class="right">
          <catalog-authorization></catalog-authorization>
        </div>
      </div>

      <div class="main">
        <div class="top">
          <div class="left">
            <catalog-navigation></catalog-navigation>
            <catalog-count></catalog-count>
            <catalog-sorting
              v-bind:products="products"
              v-on:onSortChange="handleSortChange"
            ></catalog-sorting>
          </div>
        </div>
        <div class="bottom row">
          <catalog-filter></catalog-filter>
          <div class="right" id="pageNumberContainer">
            <catalog-products v-bind:products="products"></catalog-products>
            <catalog-pagination></catalog-pagination>
          </div>
        </div>
      </div>
      <catalog-footer></catalog-footer>
    </div>
    <select-options></select-options>
  </body>
</template>

<script>
  import CatalogSearch from './components/catalog-search.vue'
  import CatalogAuthorization from './components/catalog-authorization.vue'
  import CatalogNavigation from './components/catalog-navigation.vue'
  import CatalogSorting from './components/catalog-sorting.vue'
  import CatalogCount from './components/catalog-product-count.vue'
  import CatalogFilter from './components/catalog-filter.vue'
  import CatalogProducts from './components/catalog-products.vue'
  import CatalogPagination from './components/catalog-pagination.vue'
  import CatalogFooter from './components/catalog-footer.vue'

  import products from './products'
  import SelectOptions from './components/select-options.vue'

  export default {
    name: 'App',

    components: {
      SelectOptions,
      CatalogSearch,
      CatalogAuthorization,
      CatalogNavigation,
      CatalogCount,
      CatalogSorting,
      CatalogFilter,
      CatalogProducts,
      CatalogPagination,
      CatalogFooter,
    },

    computed: {
      productsCaptions() {
        return this.products.map(product => product.caption)
      },
    },

    data() {
      return {
        products,
      }
    },

    methods: {
      handleSerchQuery(detail) {
        this.products = this.products.filter(p =>
          p.caption.toLowerCase().includes(detail.toLowerCase())
        )
      },

      handleSortChange(products) {
        this.products = products
      },
    },
  }
</script>

<style src="../css/style.css"></style>
