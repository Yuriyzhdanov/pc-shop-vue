<template>
  <div class="wrap-search">
    <input type="hidden" name="page" value="search" />
    <div class="row">
      <div class="left" id="searchContainer">
        <datalist id="productCaptions"> </datalist>
        <input
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
  export default {}
</script>
