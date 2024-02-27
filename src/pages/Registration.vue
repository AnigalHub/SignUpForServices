<template>
    <div class="loginUp">
        <h3>Регистрация</h3>
        <h5>Логин и пароль</h5>
        <FormArea :data="information.login_up"/>
        <h5>ФИО</h5>
        <FormArea name="Registration" :data="information.fio"/>
        <h5>Другие данные</h5>
        <FormArea :data="information.other_data"/>
        <div class="buttons">
            <Button :styles="styles.button_styles" text="Сохранить"/>
            <Button :styles="styles.button_back_styles" :stylesIcon="styles.button_back_icon_styles" text="Назад"/>
        </div>
    </div>
</template>

<script>
  import Button from '@/components/Button'
  import styles from '../../public/styles.json'
  import FormArea from '@/components/FormArea'
  import information from '../../public/information.json'

  export default {
    name: 'Registration',
    components: { FormArea, Button },
    data(){
      return{
        styles: styles,
        information: information,
      }
    },
  }
</script>

<style scoped>

</style>
