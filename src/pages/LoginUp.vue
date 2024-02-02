<template>
    <div class="loginUp">
        <h3>Вход</h3>
        <h5>Логин и пароль</h5>
        <InputArea :loginUp="information.login_up"/>
        <div class="buttons">
            <Button :styles="styles.button_styles" text="Войти"/>
            <Button :styles="styles.button_back_styles" :stylesIcon="styles.button_back_icon_styles" text="Назад"/>
        </div>
    </div>
</template>

<script>
  import Button from '@/components/Button'
  import styles from '../../public/styles.json'
  import InputArea from '@/components/InputArea'
  import information from '../../public/information.json'

  export default {
    name: 'LoginUp',
    components: { InputArea, Button },
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
