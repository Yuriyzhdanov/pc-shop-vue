<script>
  export default {
    props: ['products'],
    emits: ['onFilterPriceRange'],

    data() {
      return {
        from: 0,
        to: Infinity,
      }
    },

    created() {
      this.from = this.min
      this.to = this.max
      console.log(this.from)
      console.log(this.to)
      this.$emit('onFilterPriceRange', this.pricedProducts)
    },

    computed: {
      prices() {
        return this.products.map(product => product.convertedPrice)
      },

      min() {
        return Math.floor(this.prices.length ? Math.min(...this.prices) : 2)
      },

      max() {
        return Math.ceil(this.prices.length ? Math.max(...this.prices) : 3)
      },

      pricedProducts() {
        console.log(this.from)
        console.log(this.to)
        const x = this.products.filter(
          product =>
            this.from <= product.convertedPrice &&
            product.convertedPrice <= this.to
        )
        console.log(x.length)
        return x
      },
    },

    watch: {
      pricedProducts() {
        this.$emit('onFilterPriceRange', this.pricedProducts)
      },

      from() {
        console.log(this.from)
      },
    },
  }
</script>

<template>
  <div class="wrap-props">
    <h3>Цена</h3>
    <div class="wrap-range">
      <label for="price_from"
        >От:<span>{{ from }}</span></label
      ><input
        v-model="from"
        v-bind:min="min"
        v-bind:max="max"
        type="range"
        name="price_from"
        id="price_from"
      />
    </div>
    <div class="wrap-range">
      <label for="price_to"
        >До:<span>{{ to }}</span></label
      ><input
        v-model="to"
        v-bind:min="min"
        v-bind:max="max"
        type="range"
        name="price_to"
        id="price_to"
      />
    </div>
  </div>
</template>
