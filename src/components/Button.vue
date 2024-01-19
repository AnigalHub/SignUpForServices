<template>
    <div>
        <b-button v-if="text === 'Назад'" :style="styles">
            <b-icon icon="arrow-return-left" :style="stylesIcon"></b-icon>
            <span>{{text}}</span>
        </b-button>
        <router-link v-else :to="{name: href}" tag="button" :style="styles">{{text}}</router-link>
    </div>
</template>

<script>
  export default {
    name: 'Button',
    props:{
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
    }
  }
</script>

<style scoped>
    svg{
        margin-right: 20px;
    }
    button{
        width: 100%;
        height: 50px;
        font-family: 'Ingrid Darling', cursive;
        margin-bottom: 20px;
        font-size: 1.1rem;
    }
</style>
