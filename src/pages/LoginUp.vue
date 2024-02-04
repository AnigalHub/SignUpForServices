<template>
    <div class="loginUp">
        <h3>Вход</h3>
        <h5>Логин и пароль</h5>
        <FormArea :loginUp="information.login_up"/>
        <div class="buttons">
            <Button :styles="styles.button_styles" text="Войти"/>
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
    name: 'LoginUp',
    components: { FormArea, Button },
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
