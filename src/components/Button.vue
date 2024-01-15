<template>
    <div>
        <b-button v-if="text === 'Назад'" :style="styles">
            <span>
               <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" :style="stylesIcon">
                <path  :style="stylesIcon" d="M21.5611 0.980469C21.3045 0.980469 21.1028 1.22224 21.1028 1.52996V10.3218C21.1028 12.4429 19.6635 14.1683 17.8941 14.1683H1.01651C1.08068 13.9375 1.19069 13.7287 1.34654 13.5418L6.30623 7.39853C6.48041 7.17873 6.48041 6.83805 6.29706 6.61825C6.11371 6.40944 5.82951 6.40944 5.64616 6.62924L0.686476 12.7725C-0.202784 13.8386 -0.202784 15.5859 0.686476 16.652L5.64616 22.7953C5.73783 22.9052 5.85701 22.9601 5.97619 22.9601C6.09537 22.9601 6.20538 22.9052 6.29706 22.8063C6.48041 22.5975 6.48041 22.2458 6.30623 22.026L1.33738 15.8827C1.19069 15.7068 1.08068 15.487 1.01651 15.2672H17.8941C20.1677 15.2672 22.0195 13.0473 22.0195 10.3218V1.52996C22.0195 1.22224 21.8178 0.980469 21.5611 0.980469Z"/>
               </svg>
            </span>
            <span>{{text}}</span>
        </b-button>
        <b-button v-else :style="styles">{{text}}</b-button>
    </div>
</template>

<script>
  export default {
    name: 'Button',
    props:{
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
