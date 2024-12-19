<template>
  <div class="wrap-sort">
    <div class="right">
      <div class="right-item">
        <p>Сортирoвка</p>
        <select name="sort" class="sort" v-model="selectedSorting">
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
  import sortingFunctions from '../sortingFunctions.js'

  export default {
    props: ['products'],
    emits: ['onSortChange'],

    created() {
      this.$emit('onSortChange', this.sortedProducts)
    },

    watch: {
      selectedSorting() {
        this.$emit('onSortChange', this.sortedProducts)
      },
    },

    computed: {
      sortedProducts() {
        return this.products.toSorted(sortingFunctions[this.selectedSorting])
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

    methods: {},
  }
</script>
