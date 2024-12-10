<template>
  <div>
    <select v-model="selectedItem" name="" id="">
      <option
        v-for="(item, idx) of availableItems"
        v-bind:key="idx"
        v-bind:value="item"
      >
        {{ item }}
      </option>
    </select>
    <h1>{{ selectedItem }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      availableItems: ['foo', 'bar', 'baz'],
      selectedItem: '',
    }
  },
}
</script>
