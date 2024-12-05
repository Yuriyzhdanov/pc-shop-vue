<template>
  <div class="wrap-search">
    <input type="hidden" name="page" value="search" />
    <div class="row">
      <div class="left" id="searchContainer">
        <datalist id="productCaptions">
          <option v-for="(caption, idx) of productsCaptions" v-bind:value="caption" v-bind:key="idx"></option>
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
        <input type="submit" value="" class="search-btn" />
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    props: ['productsCaptions'],

    data() {
      return {
        query: '',
      }
    },

    methods: {
      handle() {
        console.log(this.productsCaptions)
        console.log(this.query)
      }
    }
  }











  // run(products) {
  //   return products.filter(product =>
  //     product.caption.toLowerCase().includes(this.query.toLowerCase())
  //   )
  // }



</script>
