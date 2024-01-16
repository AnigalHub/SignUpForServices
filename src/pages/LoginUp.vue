<template>
    <div class="loginUp">
        <h3>Вход</h3>
        <h5>Логин и пароль</h5>

        <div class="buttons">
            <Button :styles="styles.button_styles" text="Войти"/>
            <Button :styles="styles.button_back_styles" :stylesIcon="styles.button_back_icon_styles" text="Назад"/>
        </div>
    </div>
</template>

<script>
  import Button from '@/components/Button'
  import styles from '../../public/styles.json'

  export default {
    name: 'LoginUp',
    components: { Button },
    data(){
      return{
        styles: styles,
      }
    }
  }
</script>

<style scoped>

</style>
