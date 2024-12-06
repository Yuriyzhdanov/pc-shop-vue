<template>
  <div class="wrap-product" data-product-id="63">
    <span> {{ product.caption }}</span>
    <div class="wrap-a">
      <a href="./product.html?id=63" target="_blank" class="a-link">
        <div class="wrap-img">
          <img
            src="https://web-app.click/pc-shop/photos/products/computers/3873_4.456.313.jpg"
            alt="Офисный ПК Solaris-H"
          />
        </div>
        <div class="wrap-h3">
          <h3></h3></div
      ></a>
    </div>
    <div>
      <label for="Количество ядер-4">4</label
      ><label for="Объем ОЗУ-8 Gb">8 Gb</label
      ><label for="Объем накопителя-240 Gb">240 Gb</label
      ><label for="Процессор-AMD">AMD</label
      ><label for="Тип ОЗУ-DDR4">DDR5</label
      ><label for="Тип накопителя-SSD">SSD</label>
      <label for="Частота ОЗУ-2666 Mhz">2666 Mhz</label
      ><label for="Частота процессора-3.2 Ghz">3.2 Ghz</label>
    </div>
    <div class="wrap-p">
      <p><b>9068 грн</b></p>
    </div>
    <div class="row">
      <div class="cart"><button class="cart-btn"></button></div>
      <div class="favorite"><button class=""></button></div>
      <div class="compare">
        <button class=""></button>
      </div>
    </div>
    <div class="new"></div>
  </div>
</template>

<script>
  export default {
    props: ['product'],
  }
</script>
