<template>
    <div>
        <h3>{{title}}</h3>
        <FormArea  :data="information.fio" :name="name" :dataBase="dataToShow"/>
        <h5>Логин и пароль</h5>
        <FormArea :data="information.login_up"  :dataBase="dataToShow"/>
        <h5>Другие данные</h5>
        <FormArea :data="information.other_data"  :dataBase="dataToShow"/>
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
    components: { FormArea, Button },
    data(){
      return{
        name: 'SettingsProfile',
        information: information,
      }
    },
    computed:{
      currentClass(){
        return this.$store.state[this.name]
      },
      title(){
        return this.currentClass?.title ?? ""
      },
      dataToShow(){
        return this.$store.state[this.name].items;
      }
    },
    methods:{
      async getData(){
        await this.$store.dispatch(`${this.name}/getData`)
      }
    },
    watch:{
      async name(){
        await this.getData();
      }
    },
    async created () {
      await this.getData();
    },
  }
</script>

<style scoped>

</style>
