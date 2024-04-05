<template>
    <div>
        <h3>{{ title }}</h3>
        <input id="1" v-model="someProperty" type="radio" value="1" />
        <label for="1">Выбор темы</label>
        <div class="form">
            <img
                v-for="(theme, index) in dataToShow"
                :key="index"
                :src="theme.src"
                :alt="'тема' + (index + 1)"
                class="themes"
            />
        </div>
        <input id="2" v-model="someProperty" type="radio" value="2" />
        <label for="2">Настройка темы</label>
        <form-area :data="information.themes" :layoutStyles="layoutStyles" />
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
    name: 'SettingsInterface',
    components: { FormArea, ButtonTemplate },
    data() {
      return {
        information,
        someProperty: '1',
        name: 'SettingsInterface',
        layoutStyles: {
          'grid-template-columns': '33% 33% 33%',
        },
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

<style scoped lang="scss"></style>
