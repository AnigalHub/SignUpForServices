<template>
    <div>
        <b-button v-if="text === 'Назад'" :style="styles" @click="ReturnBack">
            <b-icon icon="arrow-return-left" class="buttonBackIconStyles"></b-icon>
            <span>{{ text }}</span>
        </b-button>
        <router-link v-else :to="href || '' " tag="button" :style="styles">
            {{text}}
        </router-link>
    </div>
</template>

<script>
  export default {
    name: 'ButtonTemplate',
    props: {
      href: String,
      text: String,
      styles: {
        type: Object,
        default: () => ({}),
      },
      stylesIcon: {
        type: Object,
        default: () => ({}),
      },
    },
    methods: {
      ReturnBack() {
        return this.$router.go(-1);
      },
    },
  };
</script>

<style scoped></style>
