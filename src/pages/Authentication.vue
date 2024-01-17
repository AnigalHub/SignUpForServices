<template>
    <div class="authentication">
        <h3>Войдите или Зарегистрируйтесь  </h3>
        <h5>Добро пожаловать в <span>Client & Specialist:</span></h5>
        <div class="buttons">
            <Button :styles="styles.button_styles" text="Войти"/>
            <Button :styles="styles.button_styles" text="Регистрация"/>
            <Button :styles="styles.button_back_styles" :stylesIcon="styles.button_back_icon_styles" text="Назад"/>
        </div>
    </div>
</template>

<script>
  import styles from '../../public/styles.json';
  import Button from '@/components/Button'
  export default {
    name: 'Authentication',
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
