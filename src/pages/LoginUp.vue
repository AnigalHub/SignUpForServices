<template>
    <div class="loginUp">
        <h3>Вход</h3>
        <h5>Логин и пароль</h5>
        <FormArea :data="information.login_up"/>
        <div class="buttons">
            <Button class="buttonStyles" text="Войти"/>
            <Button class="buttonBackStyles" text="Назад"/>
        </div>
    </div>
</template>

<script>
  import Button from '@/components/Button'
  import FormArea from '@/components/FormArea'
  import information from '../../public/information.json'

  export default {
    name: 'LoginUp',
    components: { FormArea, Button },
    data(){
      return{
        information: information,
      }
    }
  }
</script>

<style scoped>

</style>
