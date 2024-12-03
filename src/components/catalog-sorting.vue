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
        <select name="sort" class="sort"></select>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>
