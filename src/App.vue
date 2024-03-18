<template>
  <div id="app">
    <Navbar/>
    <b-container style="min-height: 80vh;margin-bottom: 3vh;">
      <router-view/>
    </b-container>
    <Footer/>
  </div>
</template>

<script>
import Authentication from '@/pages/Authentication'
import Navbar from '@/components/Navbar'
import LoginUp from '@/pages/LoginUp'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    LoginUp,
    Navbar,
    Authentication
  }
}
</script>

<style lang="scss">
  @import './../public/style.css';

  #app {
    background: var(--background);
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
    font-family: var(--fontStylesH);
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
  .buttons svg{
    margin-right: 20px;
  }
  button{
    width: 100%;
    height: 50px;
    font-family: 'Ingrid Darling', cursive;
    margin-bottom: .5rem;
    font-size: 1.1rem;
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
  .buttonBackStyles button{
    border-radius: var(--borderRadiusButton);
    background: var(--backgroundButtonBack);
    color: var(--colorButtonBack);
    margin-top: .5rem;
    text-align: left;
  }
  .buttonBackIconStyles{
    fill: var(--colorButtonBack);
  }
  .buttonStyles button{
    border-radius: var(--borderRadiusButton);
    border: 1.8px solid var(--borderColorButton);
    background: var(--backgroundButton);
    color: var(--colorButton);
    margin-bottom: .5rem;
  }
  .phrase{
    margin-bottom: 1.5rem
  }
  .img_specialist{
    border-radius: 50%;
    width: 140px;
    height: 140px;
  }
  .date,.time{
    text-align: center;
  }
  .time{
    font-size: 2.2rem;
    margin-bottom: 0;
  }
  .personCard{
    background: var(--backgroundDiv);
    box-shadow: var(--shadow);
  }
  .cardPerson{
    background: var(--backgroundOpacity);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  }
  .personCard,.cardPerson{
    border-radius: var(--borderRadiusDiv);
    padding: 20px;
    margin-bottom: 1.5rem;
  }
  .discount{
    margin-bottom: 8px;
  }
  .size_discount{
    font-size: 1.6rem;
    margin-top: -5px;
    margin-bottom: 0;
  }
  .loyalty{
    background: var(--backgroundDiv);
    border-radius: var(--borderRadiusDiv);
    padding: 20px;
    width: calc(36px + 100%);
    margin-left: -18px;
    box-shadow: var(--shadow);
    margin-bottom: 1.5rem;
  }
  .icon{
    margin-top: 1.25%;
    margin-right: .5%;
  }
  .icon i:before {
    font-size: 1rem;
  }
  .input{
    display: flex;
  }
  label{
    margin-bottom: -0.05rem;
  }
  .searchArea{
    background: var(--backgroundDiv);
    border-radius: 50px;
    padding: 2px 20px;
    box-shadow: var(--shadow);
    margin-bottom: 1.5rem;
  }
  .form{
    display: flex;
    flex-wrap: wrap;
    img{
      width: 31.25%;
      margin: 1%;
      border-radius: var(--borderRadiusDiv);
    }
  }
  .form, .formArea{
    background: var(--backgroundDiv);
    border-radius: var(--borderRadiusDiv);
    padding: 20px;
    box-shadow: var(--shadow);
    margin-bottom: 1.5rem;
  }
  .formArea img{
    height: 230px;
    width: 185px;
  }
  .form-control{
    border-radius: 0;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.25) ;
    border-top: none;
    border-left:none;
    border-right: none;
    padding: 0.375rem 0.15rem;;
    margin-bottom: 1rem;
  }
  .img{
    background: #f5f5f5;
    padding: 5px;
    border: 0.25px solid rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 230px;
    width: 185px;
  }
  .grid-container{
    float: left;
    text-align: center;
    margin-right: 3%;
  }
  .name{
    text-align: right;
    font-weight: bold;
  }
  li{
    display: block;
    font-size: 1rem;

    &:last-child{
      float: right;
      .nav-link {
        color: black;
      }
    }
  }
  .nav-link{
    padding: 0.25rem;
  }
  .footer{
    background: #E8E8E8;
    padding: 10px 0;
    p{
      margin-bottom: 0;
    }
  }
</style>
