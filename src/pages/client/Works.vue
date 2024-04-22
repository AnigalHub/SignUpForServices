<template>
    <div class="works">
        <div v-for="(el, index) in data" :key="index">
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
    },
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
