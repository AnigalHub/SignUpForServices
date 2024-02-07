<template>
    <div class="searchSpecialist">
        <h3>Поиск специалиста</h3>
        <FormArea name="search" :data="information.search"/>
        <PersonCard :data="informationDatabase.specialists"/>
        <div class="buttons">
            <Button :styles="styles.button_back_styles" :stylesIcon="styles.button_back_icon_styles" text="Назад"/>
        </div>
    </div>
</template>

<script>
  import Button from '@/components/Button'
  import FormArea from '@/components/FormArea'
  import styles from '../../../public/styles.json'
  import information from '../../../public/information.json'
  import informationDatabase from '../../../public/informationDatabase.json'
  import PersonCard from '@/components/PersonCard'

  export default {
    name: 'SearchSpecialist',
    components: { PersonCard, FormArea, Button },
    data(){
      return{
        styles: styles,
        information: information,
        informationDatabase:informationDatabase
      }
    }
  }
</script>

<style scoped>

</style>
