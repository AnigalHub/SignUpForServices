<template>
    <div>
        <h3>{{title}}</h3>
        <input type="radio" id="1" value="1" v-model="someProperty">
        <label for="1">Выбор темы</label>
        <div class="form">
            <img v-for="theme in informationDatabase.themes" :src="theme.src" class="themes">
        </div>
        <input type="radio" id="2" value="2" v-model="someProperty">
        <label for="2">Настройка темы</label>
        <FormArea :data="information.themes" :layoutStyles="layoutStyles"/>
        <div class="buttons">
            <Button class="buttonStyles" text="Сохранить"/>
            <Button class="buttonBackStyles" text="Назад"/>
        </div>
    </div>
</template>

<script>
  import Button from '@/components/Button'
  import FormArea from '@/components/FormArea'
  import information from '../../public/information.json'
  import informationDatabase from '../../public/informationDatabase.json'

  export default {
    name: 'SettingsInterface',
    props:{
      name:String,
      title: String
    },
    components: {  FormArea, Button },
    data(){
      return{
        information: information,
        informationDatabase: informationDatabase,
        someProperty: '1',
        layoutStyles:{
          'grid-template-columns': '33% 33% 33%'
        }
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
