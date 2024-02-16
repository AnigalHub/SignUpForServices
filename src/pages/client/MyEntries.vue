<template>
    <div class="myEntries">
        <h3>Мои записи</h3>
        <PersonCard name="myEntries" :data="search()"/>
        <div class="buttons">
            <Button :styles="styles.button_back_styles" :stylesIcon="styles.button_back_icon_styles" text="Назад"/>
        </div>
    </div>
</template>

<script>
  import Button from '@/components/Button'
  import FormArea from '@/components/FormArea'
  import styles from '../../../public/styles.json'
  import informationDatabase from '../../../public/informationDatabase.json'
  import PersonCard from '@/components/PersonCard'
  import {searchEntries} from "../../../public/searchDatabase";

  export default {
    name: 'MyEntries',
    components: { PersonCard, FormArea, Button },
    data(){
      return{
        styles: styles,
        informationDatabase:informationDatabase,
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
