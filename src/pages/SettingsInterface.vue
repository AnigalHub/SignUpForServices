<template>
    <div>
        <h3>{{title}}</h3>
        <input type="radio" id="1" value="1" v-model="someProperty">
        <label for="1">Выбор темы</label>
        <div class="form">

        </div>
        <input type="radio" id="2" value="2" v-model="someProperty">
        <label for="2">Настройка темы</label>
        <FormArea :data="information.themes" :layoutStyles="layoutStyles"/>
        <div class="buttons">
            <Button :styles="styles.button_styles" text="Сохранить"/>
            <Button :styles="styles.button_back_styles" :stylesIcon="styles.button_back_icon_styles" text="Назад"/>
        </div>
    </div>
</template>

<script>
  import Button from '@/components/Button'
  import FormArea from '@/components/FormArea'
  import styles from '../../public/styles.json'
  import information from '../../public/information.json'

  export default {
    name: 'SettingsInterface',
    props:{
      name:String,
      title: String
    },
    components: {  FormArea, Button },
    data(){
      return{
        styles: styles,
        information: information,
        someProperty: '1',
        layoutStyles:{
          'grid-template-columns': '33% 33% 33%'
        }
      }
    }
  }
</script>

<style scoped>
    .form{
        background: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        margin-bottom: 1.5rem;
    }
</style>
