<template>
  <div class="wrap-sort">
    <div class="right">
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
        const sorted = this.products.toSorted(
          sortFunctions[this.selectedSorting]
        )
        console.log('this.products', this.products)
        console.log('this.sortedProducts', this.sortedProducts)
        console.log('Сортировка:', sorted)
        return sorted
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
