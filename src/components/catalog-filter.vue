<template>
  <div>
    <div>
      <button v-on:click="applyFilter" class="btn filter">Фильтровать</button>
      <button v-on:click="clearFilter" class="btn clear-filter">x</button>
    </div>
    <div class="wrap-props">
      {{ products }}
      {{ sortedProducts }}
      <h3>Цена</h3>
      <div class="wrap-range">
        <label for="price_from"
          >От:<span>{{ from }}</span></label
        ><input
          v-model="from"
          v-bind:max="max"
          type="range"
          min="0"
          name="price_from"
          id="price_from"
        />
      </div>
      <div class="wrap-range">
        <label for="price_to"
          >До:<span>{{ to }}</span></label
        ><input
          v-model="to"
          v-bind:max="max"
          type="range"
          min="0"
          name="price_to"
          id="price_to"
        />
      </div>
    </div>
    <div class="wrap-filter">
      <div class="wrap-props"></div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['products', 'sortedProducts'],
    data() {
      return {
        min: 0,
        max: Infinity,
        from: 0,
        to: Infinity,
      }
    },
    // methods: {
    //   calcMinMax() {
    //     const prices = this.products.map(product => product.convertedPrice)
    //     this.min = Math.floor(prices.length ? Math.min(...prices) : 2)
    //     this.max = Math.ceil(prices.length ? Math.max(...prices) : 3)
    //     if (this.from === 0 && this.to === Infinity) {
    //       this.resetFromTo()
    //     }
    //     if (this.from < this.min || this.to > this.max) {
    //       this.resetFromTo()
    //     }
    //   },
    //   resetFromTo() {
    //     this.from = this.min
    //     this.to = this.max
    //   },
    //   setFrom(value) {
    //     this.from = setWithLimits(value, this.max, this.min)
    //     if (this.from > this.to) this.to = this.from
    //   },
    //   setTo(value) {
    //     this.to = setWithLimits(value, this.max, this.min)
    //     if (this.to < this.from) this.from = this.to
    //   },
    //   applyFilter() {
    //     const filteredProducts = this.products.filter(
    //       product =>
    //         this.from <= product.convertedPrice &&
    //         product.convertedPrice <= this.to
    //     )
    //     console.log(filteredProducts)
    //   },
    //   clearFilter() {
    //     this.from = this.min
    //     this.to = this.max
    //   },
    // },
    // watch: {
    //   products: 'calcMinMax',
    // },
    // created() {
    //   this.calcMinMax()
    // },
  }
</script>
