<template>
  <div>
    <div>
      <button v-on:click="applyFilter" class="btn filter">Фильтровать</button>
      <button v-on:click="clearFilter" class="btn clear-filter">x</button>
    </div>
    <filter-price
      v-on:onFilterPriceRange="updatePricedProducts"
      v-bind:products="products"
    ></filter-price>
    <div class="wrap-filter">
      <div class="wrap-props"></div>
    </div>
  </div>
</template>
<script>
  import FilterPrice from './filter-price.vue'

  export default {
    components: { FilterPrice },
    props: ['products'],

    methods: {
      updatePricedProducts(pricedProducts) {
        this.$emit('onFilterPriceRange', pricedProducts)
      },
      // calcMinMax() {
      //   const prices = this.products.map(product => product.convertedPrice)
      //   this.min = Math.floor(prices.length ? Math.min(...prices) : 2)
      //   this.max = Math.ceil(prices.length ? Math.max(...prices) : 3)
      //   if (this.from === 0 && this.to === Infinity) {
      //     this.resetFromTo()
      //   }
      //   if (this.from < this.min || this.to > this.max) {
      //     this.resetFromTo()
      //   }
      // },
      // resetFromTo() {
      //   this.from = this.min
      //   this.to = this.max
      // },
      // setFrom(value) {
      //   this.from = setWithLimits(value, this.max, this.min)
      //   if (this.from > this.to) this.to = this.from
      // },
      // setTo(value) {
      //   this.to = setWithLimits(value, this.max, this.min)
      //   if (this.to < this.from) this.from = this.to
      // },
      // applyFilter() {
      //   const filteredProducts = this.products.filter(
      //     product =>
      //       this.from <= product.convertedPrice &&
      //       product.convertedPrice <= this.to
      //   )
      //   this.$emit('onFilterPriceRange', filteredProducts)
      // },
      // clearFilter() {
      //   this.from = this.min
      //   this.to = this.max
      //   this.$emit('onFilterPriceRange', this.products)
      // },
    },
  }
</script>
