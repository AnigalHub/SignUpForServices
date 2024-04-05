<template>
    <div class="loginUp">
        <h3>Вход</h3>
        <h5>Логин и пароль</h5>
        <form-area :data="information.login_up" />
        <div class="buttons">
            <button-template class="buttonStyles" text="Войти" />
            <button-template class="buttonBackStyles" text="Назад" />
        </div>
    </div>
</template>

<script>
  import ButtonTemplate from '@/components/ButtonTemplate';
  import FormArea from '@/components/FormArea';
  import information from '../../public/information.json';

  export default {
    name: 'LoginUp',
    components: { FormArea, ButtonTemplate },
    data() {
      return {
        information,
      };
    },
  };
</script>

<style scoped></style>
