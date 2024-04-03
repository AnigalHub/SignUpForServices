<template>
    <div>
        <h3>{{title}}</h3>
        <input type="radio" id="1" value="1" v-model="someProperty">
        <label for="1">Выбор темы</label>
        <div class="form">
            <img v-for="(theme, index) in dataToShow" :src="theme.src" :alt="'тема'+(index+1)" class="themes">
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

  export default {
    components: {  FormArea, Button },
    name: 'SettingsInterface',
    data(){
      return{
        information: information,
        someProperty: '1',
        name: 'SettingsInterface',
        layoutStyles:{
          'grid-template-columns': '33% 33% 33%'
        }
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
    }
  }
</script>

<style scoped lang="scss">

</style>
