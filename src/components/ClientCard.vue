<template>
    <div>
        <div class="name">{{informationClient.name}} {{informationClient.surname.charAt(0)}}.</div>
        <b-nav-item  class="menu" v-for="(list,index) in data"  :href="list.href" :key="index">
            <b-icon v-if="list.name === 'Выход'" icon="box-arrow-in-right"></b-icon>
            {{list.name}}
        </b-nav-item>
    </div>
</template>

<script>
  import { searchClient } from "../../public/searchDatabase";
  import informationDatabase from '../../public/informationDatabase.json'
  export default {
    name: 'ClientCard',
    props:{
      data: Array,
    },
    computed:{
      informationClient(){
        return searchClient('22',informationDatabase.clients)
      }
    },
  }
</script>

<style scoped lang="scss">

</style>
