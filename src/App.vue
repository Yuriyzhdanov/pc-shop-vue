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
          <widget-search
            v-bind:productsCaptions="productsCaptions"
            v-on:onSearchQuery="handleSearchQuery"
          ></widget-search>
        </div>
        <div class="right">
          <panel-authorization></panel-authorization>
        </div>
      </div>
      <div class="main">
        <div class="top">
          <div class="left">
            <app-navigation></app-navigation>
            <catalog-count></catalog-count>
            <catalog-sorting
              v-bind:products="paginatedProducts"
              v-on:onSortChange="handleSortChange"
            ></catalog-sorting>
          </div>
        </div>
        <div class="bottom row">
          <catalog-filter></catalog-filter>
          <div class="right" id="pageNumberContainer">
            <catalog-products
              v-bind:products="paginatedProducts"
            ></catalog-products>
            <widget-pagination
              v-bind:products="products"
              v-bind:products-per-page="productsPerPage"
              v-on:onPageChange="updatePaginatedProducts"
              v-on:onProductsPerPageChange="updateProductsPerPage"
            ></widget-pagination>
          </div>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
    <select-options></select-options>
  </body>
</template>

<script>
  import WidgetSearch from './components/widget-search.vue'
  import PanelAuthorization from './components/panel-authorization.vue'
  import AppNavigation from './components/app-navigation.vue'
  import CatalogSorting from './components/catalog-sorting.vue'
  import CatalogCount from './components/catalog-product-count.vue'
  import CatalogFilter from './components/catalog-filter.vue'
  import CatalogProducts from './components/catalog-products.vue'
  import WidgetPagination from './components/widget-pagination.vue'
  import AppFooter from './components/app-footer.vue'

  import products from './products'
  import SelectOptions from './components/select-options.vue'

  export default {
    name: 'App',

    components: {
      SelectOptions,
      WidgetSearch,
      PanelAuthorization,
      AppNavigation,
      CatalogCount,
      CatalogSorting,
      CatalogFilter,
      CatalogProducts,
      WidgetPagination,
      AppFooter,
    },

    computed: {
      productsCaptions() {
        return this.products.map(product => product.caption)
      },
    },

    data() {
      return {
        products,
        paginatedProducts: [],
        // productsPerPage: 10,
      }
    },

    methods: {
      handleSearchQuery(detail) {
        this.products = this.products.filter(p =>
          p.caption.toLowerCase().includes(detail.toLowerCase())
        )
      },
      handleSortChange(products) {
        this.products = products
        this.updatePaginatedProducts()
      },
      updatePaginatedProducts(products) {
        this.paginatedProducts = products
      },
      updateProductsPerPage(newProductsPerPage) {
        this.productsPerPage = newProductsPerPage
        this.updatePaginatedProducts(this.products.slice(0, newProductsPerPage))
      },
    },
    mounted() {
      this.paginatedProducts = products.slice(0, this.productsPerPage)
    },
  }
</script>

<style src="../css/style.css"></style>
