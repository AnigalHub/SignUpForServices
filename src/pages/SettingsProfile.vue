<template>
    <div>
        <h3>{{ title }}</h3>
        <form-area :data="information.fio" :name="name" :dataBase="dataToShow" />
        <h5>Логин и пароль</h5>
        <form-area :data="information.login_up" :dataBase="dataToShow" />
        <h5>Другие данные</h5>
        <form-area :data="information.other_data" :dataBase="dataToShow" />
        <div class="buttons">
            <button-template class="buttonBackStyles" text="Назад" />
        </div>
    </div>
</template>

<script>
  import information from '../../public/information.json';
  import FormArea from '@/components/FormArea';
  import ButtonTemplate from '@/components/ButtonTemplate';

  export default {
    name: 'SettingsProfile',
    components: { FormArea, ButtonTemplate },
    data() {
      return {
        name: 'SettingsProfile',
        information,
      };
    },
    computed: {
      currentClass() {
        return this.$store.state[this.name];
      },
      title() {
        return this.currentClass?.title ?? '';
      },
      dataToShow() {
        return this.$store.state[this.name].items;
      },
    },
    watch: {
      async name() {
        await this.getData();
      },
    },
    async created() {
      await this.getData();
    },
    methods: {
      async getData() {
        await this.$store.dispatch(`${this.name}/getData`);
      },
    },
  };
</script>

<style scoped></style>
