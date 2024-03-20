<template>
    <div class="entryes">
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
    .entryes{
        width: 103%;
        margin-left: -18px;
        background: var(--backgroundDiv);
        border-radius: var(--borderRadiusDiv);
        padding: 20px;
        float: left;
        box-shadow: var(--shadow);
        margin-bottom: 1.5rem;
    }
</style>
