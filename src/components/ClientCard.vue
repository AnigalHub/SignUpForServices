<template>
    <div>
        <b-nav-item  class="menu" v-for="(list,index) in data"  :href="list.href" :key="index">

            <b-icon v-if="list.name === 'Выход'" icon="box-arrow-in-right"></b-icon>
            {{list.name}}
        </b-nav-item>
    </div>
</template>

<script>
  export default {
    name: 'ClientCard',
    props:{
      data: Array,
    },
  }
</script>

<style scoped lang="scss">
li{
    display: block;
    font-size: 1rem;
    &:last-child{
        float: right;
    }
}
</style>
