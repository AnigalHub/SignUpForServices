<template>
    <div>
        <h3>{{title}}</h3>
        <FormArea v-if="name === 'SearchSpecialist'" :name="name" :data="information.search"/>
        <PersonCard :name="name" :data="informationPersonCard"/>
        <div class="buttons">
            <Button class="buttonBackStyles" text="Назад"/>
        </div>
    </div>
</template>

<script>
  import PersonCard from '@/components/PersonCard'
  import FormArea from '@/components/FormArea'
  import Button from '@/components/Button'
  import informationDatabase from '../../../public/informationDatabase.json'
  import information from '../../../public/information.json'
  import {searchEntries, searchClient} from "../../../public/searchDatabase";

  export default {
    name: 'MenuClientArea',
    components: { PersonCard, FormArea, Button },
    props:{
      name:String,
      title: String
    },
    data(){
      return{
        information: information,
        informationDatabase:informationDatabase
      }
    },
    computed:{
      informationPersonCard(){
        if(this.name === 'Entry' || this.name === 'Prices' || this.name === 'DateTime'){
          return searchClient('1',informationDatabase.my_specialists)
        }
      }
    },
  }
</script>

<style scoped>

</style>
