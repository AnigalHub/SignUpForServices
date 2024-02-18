<template>
    <div class="myCards">
        <h3>Карты лояльности</h3>
        <PersonCard name="myCards" :data="informationDatabase.my_specialists"/>
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

  export default {
    name: 'MyCards',
    components: { PersonCard, FormArea, Button },
    data(){
      return{
        styles: styles,
        informationDatabase:informationDatabase
      }
    }
  }
</script>

<style scoped>

</style>
