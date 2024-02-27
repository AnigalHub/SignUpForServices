<template>
    <div>
        <h3>{{title}}</h3>
        <FormArea v-if="name === 'SearchSpecialist'" name="search" :data="information.search"/>
        <PersonCard :name="name" :data="informationPersonCard"/>
    </div>
</template>

<script>
  import PersonCard from '@/components/PersonCard'
  import FormArea from '@/components/FormArea'
  import Button from '@/components/Button'
  import styles from '../../../public/styles.json'
  import informationDatabase from '../../../public/informationDatabase.json'
  import information from '../../../public/information.json'
  import {searchEntries} from "../../../public/searchDatabase";

  export default {
    name: 'MenuClientArea',
    components: { PersonCard, FormArea, Button },
    props:{
      name:String,
      title: String
    },
    data(){
      return{
        styles: styles,
        information: information,
        informationDatabase:informationDatabase
      }
    },
    computed:{
      informationPersonCard(){
        if(this.name === 'SearchSpecialist'){
          return this.informationDatabase.specialists;
        }
        if(this.name === 'MySpecialists'){
         return  this.informationDatabase.my_specialists
        }
        if(this.name === 'MyEntries'){
          return searchEntries('22',informationDatabase.specialists,informationDatabase.entries)
        }
        if(this.name === 'MyCards' || this.name === 'WorksSpecialists'){
          return this.informationDatabase.my_specialists
        }
      }
    },
  }
</script>

<style scoped>

</style>
