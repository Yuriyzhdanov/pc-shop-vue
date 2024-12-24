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
          <!-- <widget-search
            v-bind:productsCaptions="productsCaptions"
            v-on:onSearchQuery="handleSearchQuery"
          ></widget-search> -->
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
            <!-- <catalog-sorting
              v-bind:products="products"
              v-on:onSortChange="handleSortChange"
            ></catalog-sorting> -->
          </div>
        </div>
        <div class="bottom row">
          <catalog-filter
            v-bind:products="products"
            v-on:onFilterPriceRange="handleFilteredPriceProducts"
          ></catalog-filter>
          <div class="right" id="pageNumberContainer">
            <catalog-products
              v-bind:products="paginatedProducts"
            ></catalog-products>

            <widget-pagination
              v-bind:sortedProducts="products"
              v-on:onUpdatePaginatedProducts="handlePaginatedProducts"
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
        sortedProducts: [],
        paginatedProducts: [],
      }
    },

    methods: {
      handleSearchQuery(detail) {
        this.products = this.products.filter(p =>
          p.caption.toLowerCase().includes(detail.toLowerCase())
        )
        this.handlePaginatedProducts(this.paginatedProducts)
      },

      handleSortChange(sortedProducts) {
        this.sortedProducts = sortedProducts
        this.handlePaginatedProducts(this.paginatedProducts)
      },

      handlePaginatedProducts(paginatedProducts) {
        this.paginatedProducts = paginatedProducts
      },

      handleFilteredPriceProducts(filteredPriceProducts) {
        this.paginatedProducts = filteredPriceProducts
      },
    },
  }
</script>

<style src="../css/style.css"></style>
