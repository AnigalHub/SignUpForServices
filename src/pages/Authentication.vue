<template>
    <div class="authentication">
        <h3>Войдите или Зарегистрируйтесь  </h3>
        <h5 class="phrase">Добро пожаловать в <span>Client & Specialist:</span></h5>
        <div class="buttons">
            <Button class="buttonStyles" href="LoginUp" text="Войти"/>
            <Button class="buttonStyles" href="Registration" text="Регистрация"/>
            <Button class="buttonBackStyles" text="Назад"/>
        </div>
    </div>
</template>

<script>
  import Button from '@/components/Button'
  export default {
    name: 'Authentication',
    components: { Button },
  }
</script>

<style scoped>
    .phrase{
        margin-bottom: 1.5rem
    }
</style>
