<template>
    <div class="works">
        <div v-for="(el, index) in filterData" :key="index">
            <div>
                <img :src="el.src">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Works',
    props: {
      data: Array,
      id: String
    },
    computed: {
      filterData() {
          return this.id ? this.data.filter((el) => el.id_client === this.id) : this.data;
      }
    }
  }
</script>

<style scoped>
    /*контейнер, который включает в себя повтор блоков*/
    .works{
        display: flex;
        flex-wrap: wrap;
    }
    .works > div{
        width: 25%;
        padding: 8px;
    }
    img{
        width: 100%;
    }
</style>
