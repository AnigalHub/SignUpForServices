<template>
    <div class="searchSpecialist">
        <h3>Поиск специалиста</h3>
        <FormArea name="search" :data="information.search"/>
        <PersonCard/>
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
  import PersonCard from '@/components/PersonCard'

  export default {
    name: 'SearchSpecialist',
    components: { PersonCard, FormArea, Button },
    data(){
      return{
        styles: styles,
        information: information,
      }
    }
  }
</script>

<style scoped>

</style>
