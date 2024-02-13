<template>
    <div class="myEntries">
        <h3>Мои специалисты</h3>
        <PersonCard name="myEntries" :data="informationDatabase.specialists"/>
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
    name: 'MyEntries',
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
