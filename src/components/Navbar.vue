<template>
    <div class="navbar">
        <b-container>
            <logo />
            <div class="menu">
                <div v-for="(list,index) in information.client_menu" :key="index">{{list}}</div>
            </div>
            <svg class="person_icon" xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1253 6.07665C21.8578 3.99385 18.1813 3.99385 15.9138 6.07665C13.6462 8.15946 13.6462 11.5363 15.9138 13.6191C18.1813 15.7019 21.8578 15.7019 24.1253 13.6191C26.3928 11.5363 26.3928 8.15946 24.1253 6.07665ZM13.1766 3.56249C16.9558 0.0911489 23.0833 0.0911489 26.8625 3.56249C30.6418 7.03383 30.6418 12.662 26.8625 16.1333C23.0833 19.6046 16.9558 19.6046 13.1766 16.1333C9.39728 12.662 9.39728 7.03383 13.1766 3.56249ZM6.48656 24.3023C10.2191 22.0188 15.12 20.7738 20.0195 20.7738C24.919 20.7738 29.82 22.0188 33.5525 24.3023C37.2983 26.5939 40.0195 30.0498 40.0195 34.398V36.7712C40.0195 38.8304 38.378 40.922 35.826 40.922H4.21308C1.66108 40.922 0.0195312 38.8304 0.0195312 36.7712V34.398C0.0195312 30.0498 2.74091 26.5939 6.48656 24.3023ZM8.63251 27.2615C5.63108 29.0978 3.89051 31.5653 3.89051 34.398V36.7712C3.89051 37.0083 3.98228 37.1826 4.07396 37.2789C4.11858 37.326 4.15681 37.3482 4.17791 37.3575C4.19641 37.3657 4.20596 37.3664 4.21308 37.3664H35.826C35.833 37.3664 35.8428 37.3657 35.861 37.3575C35.8823 37.3482 35.9205 37.326 35.965 37.2789C36.0568 37.1826 36.1485 37.0083 36.1485 36.7712V34.398C36.1485 31.5653 34.408 29.0978 31.4065 27.2615C28.392 25.4172 24.2608 24.3293 20.0195 24.3293C15.7783 24.3293 11.647 25.4172 8.63251 27.2615Z" fill="black"/>
            </svg>
        </b-container>
    </div>
</template>

<script>
  import logo from '@/components/logo'
  import information from '../../public/information.json'
  export default {
    name: 'Navbar',
    components: { logo },
    data(){
      return{
        information: information,
      }
    }
  }
</script>

<style scoped lang="scss">
.navbar{
    height: 50px;
    background: white;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    .person_icon{
        width: 24px;
        height: 24px;
    }
    .menu{
        display: flex;
        font-size: 1.2rem;
        //font-family: 'Ingrid Darling', cursive;
        div{
            letter-spacing: -.5px;
            margin: 0 15px;
        }
    }
    .no_logo{
        margin: 0 auto;
    }
}
</style>
