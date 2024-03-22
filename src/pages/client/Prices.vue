<template>
    <div class="prices">
        <b-table striped hover :items="data.prices" :fields="fields"></b-table>
    </div>
</template>

<script>
  export default {
    name: 'Prices',
    props:{
      name: String,
      title: String,
      data: Object
    },
    data() {
      return {
        fields: [
          {
            key: 'value',
            label: 'Услуга',
          },
          {
            key: 'price',
            label: 'Цена',
          },
        ],
      }
    }
  }
</script>

<style scoped>

</style>
