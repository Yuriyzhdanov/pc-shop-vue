<template>
  <div class="wrap-sort row">
    <div class="left">
      <a href="./cart.html" target="_blank">Корзина</a>
      <img src="../../img/bg/addtocart.png" class="cart-img" />
      <span>0</span>
    </div>
    <div class="center">
      <div>
        <a href="./favorites.html" target="_blank"> Избранные</a>
        <img src="../../img/bg/tofav.png" class="favorites-img" />
        <span>0</span>
      </div>
      <div class="compare-container">
        <a href="./compare.html" target="_blank"> Сравнение</a>
        <img src="../../img/bg/tocompare.png" class="compare-img" />
        <span>0</span>
      </div>
    </div>
    <div class="right">
      <div class="right-item">
        <p>Товаров на странице</p>
        <div class="wrap-products-on-page">
          <select name="products-on-page" class="products-on-page"></select>
        </div>
      </div>
      <div class="right-item">
        <p>Сортирoвка</p>
        <select
          name="sort"
          class="sort"
          v-model="selectedSorting"
          v-on:change="handleChangeSelect"
        >
          <option
            v-for="(val, key) in availableSortingTypes"
            :key="key"
            :value="key"
          >
            {{ val }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['products'],
  emits: ['onSortChange'],

  computed: {
    sortedProducts() {
      const sortFunctions = {
        byPriceASC: (a, b) => a.convertedPrice - b.convertedPrice,
        byPriceDESC: (a, b) => b.convertedPrice - a.convertedPrice,
        byCaptionASC: (a, b) =>
          a.caption.localeCompare(b.caption, undefined, {
            sensitivity: 'accent',
          }),
        byCaptionDESC: (a, b) =>
          b.caption.localeCompare(a.caption, undefined, {
            sensitivity: 'accent',
          }),
      }
      return this.products.toSorted(sortFunctions[this.selectedSorting])
    },
  },

  data() {
    return {
      selectedSorting: 'byPriceASC',
      availableSortingTypes: {
        byPriceASC: 'Цена: по возрастанию',
        byPriceDESC: 'Цена: по убыванию',
        byCaptionASC: 'Название: А-Я',
        byCaptionDESC: 'Название: Я-А',
      },
    }
  },

  methods: {
    handleChangeSelect() {
      this.$emit('onSortChange', this.sortedProducts)
    },
  },
}
</script>
