<template>
    <div>
        <h3>{{title}}</h3>
        <div v-if="name === 'SearchSpecialist'">
            <FormArea name="search" :data="information.search"/>
            <PersonCard name="searchSpecialist" :data="informationDatabase.specialists"/>
        </div>
        <div v-if="name === 'MySpecialists'">
            <PersonCard name="mySpecialists" :data="informationDatabase.my_specialists"/>
        </div>
        <div v-if="name === 'MyEntries'">
            <PersonCard name="myEntries" :data="search()"/>
        </div>
        <div v-if="name === 'MyCards'">
            <PersonCard name="myCards" :data="informationDatabase.my_specialists"/>
        </div>
        <div v-if="name === 'WorksSpecialists'">
            <PersonCard name="worksSpecialists" :data="informationDatabase.my_specialists"/>
        </div>
        <div class="buttons">
            <Button :styles="styles.button_back_styles" :stylesIcon="styles.button_back_icon_styles" text="Назад"/>
        </div>
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
    methods:{
      search(){
        return searchEntries(informationDatabase.specialists,informationDatabase.entries)
      }
    },
  }
</script>

<style scoped>

</style>
