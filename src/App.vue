<template>
  <div id="app">
    <Navbar/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Authentication from '@/pages/Authentication'
import Navbar from '@/components/Navbar'
import LoginUp from '@/pages/LoginUp'

export default {
  name: 'App',
  components: {
    LoginUp,
    Navbar,
    Authentication
  }
}
</script>

<style lang="scss">
  #app {
    background: #F3F3F4;
    min-height: 100vh;
    padding: 0;
  }
  body{
    padding: 0;
    margin: 0;
  }
  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0) !important;
  }
  h3,h5{
    font-family: 'Marmelad', sans-serif;
  }
  h3{
    padding: 30px 0 10px;
  }
  h5{
    padding: 0 0 10px;
  }
  .authentication h3, .authentication h5{
    text-align: center;
  }
  h5 span{
    font-family: 'Miltonian Tattoo', serif;
  }
  .buttons{
    margin: 0 220px;
  }
  /*контейнер, который включает в себя повтор блоков*/
  .grid-container{
    max-width: 1200px;
    margin: 0 auto 15px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    & > div {
      justify-self: stretch;
      &:first-child{
        margin-right: 1%;
      }
    }
  }
  i:before{
    font-size: 1.8rem;
  }
  input[type="radio"], input[type="checkbox"] {
    margin-right: 1%;
  }
</style>
