<template>
    <div class="prices">
        <b-table striped hover :items="data" :fields="fields"></b-table>
    </div>
</template>

<script>
  export default {
    name: 'Prices',
    props: {
      data: Array,
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
      };
    },
  };
</script>

<style scoped></style>
