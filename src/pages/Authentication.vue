<template>
    <div class="authentication">
        <h3>Войдите или Зарегистрируйтесь</h3>
        <h5 class="phrase">Добро пожаловать в <span>Client & Specialist:</span></h5>
        <div class="buttons">
            <button-template class="buttonStyles" href="LoginUp" text="Войти" />
            <button-template
               class="buttonStyles"
               href="Registration"
               text="Регистрация"
            />
            <button-template class="buttonBackStyles" text="Назад" />
        </div>
    </div>
</template>

<script>
  import ButtonTemplate from '@/components/ButtonTemplate';

  export default {
    name: 'Authentication',
    components: { ButtonTemplate },
  };
</script>

<style scoped>

</style>
