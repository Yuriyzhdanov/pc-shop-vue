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
          <ui-authorization></ui-authorization>
        </div>
      </div>
      <div class="main">
        <div class="top">
          <div class="left">
            <ui-navigation></ui-navigation>
            <ui-user-products></ui-user-products>
            <widget-sorting
              v-bind:pricedProducts="pricedProducts"
              v-on:onSortChange="handleSortChange"
            ></widget-sorting>
          </div>
        </div>
        <div class="bottom row">
          <widget-filter
            v-bind:products="products"
            v-on:onFilterPriceRange="handleFilteredPriceProducts"
          ></widget-filter>
          <div class="right" id="pageNumberContainer">
            <widget-catalog
              v-bind:paginatedProducts="sortedProducts"
            ></widget-catalog>

            <!-- <widget-pagination
              v-bind:sortedProducts="sortedProducts"
              v-on:onUpdatePaginatedProducts="handlePaginatedProducts"
            ></widget-pagination> -->
          </div>
        </div>
      </div>
      <ui-footer></ui-footer>
    </div>
  </body>
</template>

<script>
  import WidgetSearch from './components/widget-search.vue'
  import WidgetSorting from './components/widget-sorting.vue'
  import WidgetFilter from './components/widget-filter.vue'
  import WidgetCatalog from './components/widget-catalog.vue'
  import WidgetPagination from './components/widget-pagination.vue'

  import UiFooter from './ui/ui-footer.vue'
  import UiNavigation from './ui/ui-navigation.vue'
  import UiUserProducts from './ui/ui-user-products.vue'
  import UiAuthorization from './ui/ui-authorization.vue'

  import products from './products'

  export default {
    name: 'App',

    components: {
      WidgetSearch,
      UiAuthorization,
      UiNavigation,
      UiUserProducts,
      WidgetSorting,
      WidgetFilter,
      WidgetCatalog,
      WidgetPagination,
      UiFooter,
    },

    computed: {
      productsCaptions() {
        return this.products.map(product => product.caption)
      },
    },

    data() {
      return {
        products,
        pricedProducts: [],
        sortedProducts: [],
        paginatedProducts: [],
      }
    },

    methods: {
      // handleSearchQuery(detail) {
      //   this.products = this.products.filter(p =>
      //     p.caption.toLowerCase().includes(detail.toLowerCase())
      //   )
      //   this.handlePaginatedProducts(this.pricedProducts)
      // },

      handleFilteredPriceProducts(pricedProducts) {
        console.log('pricedProducts', pricedProducts.length)
        this.pricedProducts = pricedProducts
      },

      handleSortChange(sortedProducts) {
        console.log('sortedProducts', sortedProducts.length)
        this.sortedProducts = sortedProducts
        // !!! this.handlePaginatedProducts(this.pricedProducts)
      },

      // handlePaginatedProducts(paginatedProducts) {
      //   this.paginatedProducts = paginatedProducts
      // },
    },
  }
</script>

<style src="../css/style.css"></style>
