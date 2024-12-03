<template>
  <div>
    <div>
      <button class="btn filter">Фильтровать</button>
      <button class="btn clear-filter">x</button>
    </div>
    <div class="wrap-props">
      <h3>Цена</h3>
      <div class="wrap-range">
        <label for="price_from">От:<span>0</span></label
        ><input
          type="range"
          min="0"
          max="100"
          value="0"
          name="price_from"
          id="price_from"
        />
      </div>
      <div class="wrap-range">
        <label for="price_to">До:<span>100</span></label
        ><input
          type="range"
          min="0"
          max="100"
          value="100"
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
  export default {}
</script>
