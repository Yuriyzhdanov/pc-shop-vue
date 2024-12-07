<template>
  <div class="wrap-product" v-bind:data-product-id="product.id">
    <div class="wrap-a">
      <a
        v-bind:href="'./product.html?id=' + product.id"
        target="_blank"
        class="a-link"
      >
        <div class="wrap-img">
          <img
            v-bind:src="
              'https://web-app.click/pc-shop/photos/products/computers/' +
              product.photos[0]
            "
            v-bind:alt="product.caption"
          />
        </div>
        <div class="wrap-h3">
          <h3>{{ product.caption }}</h3>
        </div></a
      >
    </div>
    <div>
      <label
        v-for="(val, key) in product.attributes"
        v-bind:for="key + '-' + val"
        v-bind:key="key"
      >
        {{ val }}</label
      >
    </div>
    <div class="wrap-p">
      <p>
        <b>{{ product.convertedPrice.toFixed(0) + ' грн' }}</b>
      </p>
    </div>
    <div class="row">
      <div class="cart"><button class="cart-btn"></button></div>
      <div class="favorite"><button class=""></button></div>
      <div class="compare">
        <button class=""></button>
      </div>
    </div>
    <!-- <div class="new"></div> -->
  </div>
</template>

<script>
  export default {
    props: ['product'],
  }
</script>
