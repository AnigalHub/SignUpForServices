<template>
    <div class="loginUp">
        <h3>Регистрация</h3>
        <h5>Логин и пароль</h5>
        <form-area :data="information.login_up" />
        <h5>ФИО</h5>
        <form-area name="Registration" :data="information.fio" />
        <h5>Другие данные</h5>
        <form-area :data="information.other_data" />
        <div class="buttons">
            <button-template class="buttonStyles" text="Сохранить" />
            <button-template class="buttonBackStyles" text="Назад" />
        </div>
    </div>
</template>

<script>
  import ButtonTemplate from '@/components/ButtonTemplate';
  import FormArea from '@/components/FormArea';
  import information from '../../public/information.json';

  export default {
    name: 'Registration',
    components: { FormArea, ButtonTemplate },
    data() {
      return {
        information,
      };
    },
  };
</script>

<style scoped></style>
