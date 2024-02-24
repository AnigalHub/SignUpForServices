<template>
    <div>
        <b-nav-item  class="menu" v-for="(list,index) in data"  :href="list.href" :key="index">
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
