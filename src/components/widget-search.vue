<template>
  <div class="wrap-search">
    <input type="hidden" name="page" value="search" />
    <div class="row">
      <div class="left" id="searchContainer">
        <datalist id="productCaptions">
          <option
            v-for="(caption, idx) of productsCaptions"
            v-bind:value="caption"
            v-bind:key="idx"
          ></option>
        </datalist>
        <input
          v-model="query"
          type="search"
          name="query"
          id="query"
          placeholder=" Что ищем ?"
          list="productCaptions"
        />
      </div>
      <div class="right">
        <input
          v-on:click="handleSearch"
          type="submit"
          value=""
          class="search-btn"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['productsCaptions'],
    emits: ['onSearchQuery'],

    data() {
      return {
        query: '',
      }
    },

    methods: {
      handleSearch() {
        this.$emit('onSearchQuery', this.query)
      },
    },
  }
</script>
