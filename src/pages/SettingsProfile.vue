<template>
    <div>
        <h3>{{title}}</h3>
        <FormArea  :data="information.fio" :name="name" :dataBase="informationClient"/>
        <h5>Логин и пароль</h5>
        <FormArea :data="information.login_up"  :dataBase="informationClient"/>
        <h5>Другие данные</h5>
        <FormArea :data="information.other_data"  :dataBase="informationClient"/>
        <div class="buttons">
            <Button class="buttonBackStyles" text="Назад"/>
        </div>
    </div>
</template>

<script>
  import information from '../../public/information.json'
  import FormArea from '@/components/FormArea'
  import Button from '@/components/Button'
  import informationDatabase from '../../public/informationDatabase.json'
  import { searchClient } from '../../public/searchDatabase'

  export default {
    name: 'SettingsProfile',
    props:{
      name:String,
      title: String
    },
    components: { FormArea, Button },
    data(){
      return{
        information: information,
      }
    },
    computed:{
      informationClient(){
        return searchClient('22',informationDatabase.clients)
      }
    },
  }
</script>

<style scoped>

</style>
