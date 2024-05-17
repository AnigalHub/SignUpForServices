<template>
  <div id="app">
    <div :class="currentTheme" class="content">
      <navbar-template/>
      <b-container style="min-height: 82vh; margin-bottom: 3vh">
        <router-view/>
      </b-container>
      <footer-template/>
    </div>
  </div>
</template>

<script>
  import NavbarTemplate from '@/components/NavbarTemplate';
  import FooterTemplate from '@/components/FooterTemplate';

  export default {
    name: 'App',
    components: {
      FooterTemplate,
      NavbarTemplate,
    },
    created() {
      this.$store.dispatch('SettingsInterface/loadTheme')
    },
    computed: {
      currentTheme(){
        return this.$store.getters['SettingsInterface/CurrentTheme']
      },
    },
  };
</script>
<style>
  .modal-header .close {
    width: auto;
    font-size: 2rem;
  }
  .modal-open {
    overflow: hidden;
  }
  .modal-content{
    box-shadow: 5px 5px 5px #55595c;
  }
  /*футер модального окна*/
  .modal-footer {display: none !important;}
  /*заголовок модального окна*/
  .modal-header{
    padding: 0 0.5rem !important;
    background: var(--background);
  }
</style>
<style lang="scss">
  @import './../public/style.css';

  i:before, .bi-box-arrow-up-right::before  {
    font-size: 1.5rem;
  }
  .content{
    background: var(--background);
    min-height: 100vh;
    padding: 0;
  }
  #app {

  }
  .row{
    display: flex;
    flex-wrap: wrap;
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  body {
    padding: 0;
    margin: 0;
  }
  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0) !important;
  }
  h3,h4,
  h5 {
    font-family: var(--fontStylesH);
  }
  h3 {
    padding: 30px 0 10px;
  }
  h5 {
    padding: 0 0 10px;
  }
  .authentication h3,
  .authentication h5 {
    text-align: center;
  }
  h5 span {
    font-family: 'Miltonian Tattoo', serif;
  }
  .buttons svg {
    margin-right: 20px;
  }
  .buttons button{
    width: 60%;
    height: 50px;
    display: block;
    margin: 0 auto;
  }

  button {
    width: 100%;
    font-family: 'Ingrid Darling', cursive;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  /*контейнер, который включает в себя повтор блоков*/
  .grid-container {
    max-width: 1200px;
    margin: 0 auto 15px;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    & > div {
      justify-self: stretch;
      &:first-child {
        margin-right: 1%;
      }
    }
  }
  .entryes {
    a {
      color: var(--colorText);
      &:hover {
        text-decoration: none;
      }
    }
  }
  .pre {
    margin-top: 2%;
    white-space: pre-line;
  }
  .entry {
    background: var(--backgroundDiv);
    border-radius: var(--borderRadiusDiv);
    padding: 20px;
    width: 49%;
    margin-right: 2%;
    margin-bottom: 1rem;
    float: left;
    box-shadow: var(--shadow);
  }
  .entry:nth-child(2) {
    margin-right: 0;
    width: 49%;
  }
  .entry:last-child{
    margin-bottom: 1.5rem;
  }
  .logo {
    text-align: center;
    font-family: 'Miltonian Tattoo', serif;
    .short_name {
      margin-top: -5px;
      font-size: 1.3rem;
    }
    .long_name {
      font-size: 0.8rem;
      margin-top: -5px;
    }
  }
  /*контейнер, который включает в себя повтор блоков*/
  .works{
    display: flex;
    flex-wrap: wrap;
  }
  .works > div{
    width: 25%;
    padding: 1.25%;
  }
  img{
    width: 100%;
  }
  input[type='radio'],
  input[type='checkbox'] {
    margin-right: 1%;
  }
  table {
    white-space: pre-line;
  }
  .table th, .table td {
      text-align: left;
  }

  .buttonBackStyles button {
    border-radius: var(--borderRadiusButton);
    background: var(--backgroundButtonBack);
    color: var(--colorButtonBack);
    margin-top: 0.5rem;
    text-align: left;
  }
  .buttonCancelStyles button {
    min-height: 45px;
    border-radius: var(--borderRadiusButton);
    background: var(--backgroundButtonBack);
    color: var(--colorButtonBack);
    margin-top: 0.5rem;
    text-align: center;
  }
  .buttonBackIconStyles {
    fill: var(--colorButtonBack);
  }
  .buttonStyles button {
    min-height: 45px;
    border-radius: var(--borderRadiusButton);
    border: 1.8px solid var(--borderColorButton);
    background: var(--backgroundButton);
    color: var(--colorButton);
    margin-bottom: 0.5rem;
  }
  .phrase {
    margin-bottom: 1rem;
  }
  .img_specialist {
    border-radius: 50%;
    margin-left: -15px;
    width: 110%;
  }
  .date,
  .time {
    text-align: center;
  }
  .time {
    font-size: 2.2rem;
    margin-bottom: 0 !important;
  }
  .personCard {
    background: var(--backgroundDiv);
    box-shadow: var(--shadow);
  }
  .cardPerson {
    background: var(--backgroundOpacity);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
  }
  .personCard,
  .cardPerson {
    border-radius: var(--borderRadiusDiv);
    padding: 20px;
    margin-bottom: 1.5rem;
  }
  .discount {
    text-align: center;
    margin-bottom: 8px;
  }
  .size_discount {
    font-size: 1.6rem;
    margin-top: -5px;
    margin-bottom: 0;
  }
  .loyalty {
    background: var(--backgroundDiv);
    border-radius: var(--borderRadiusDiv);
    padding: 20px;
    width: 100%;
    box-shadow: var(--shadow);
    margin-bottom: 1.5rem;
  }
  .icon {
    margin-top: 1.25%;
    margin-right: 0.5%;
  }
  .icon i:before {
    font-size: 1rem;
  }
  label {
    margin-left: -10px;
    margin-bottom: -0.05rem;
  }
  input[type="radio"]{
    margin-right: 20px;
  }
  .blockInput{
    label{
      margin-left: 0;
    }
  }
  .searchArea {
    background: var(--backgroundDiv);
    border-radius: 50px;
    padding: 2px 20px;
    box-shadow: var(--shadow);
    margin-bottom: 1.5rem;
  }
  .form {
    display: flex;
    flex-wrap: wrap;
    img {
      width: 31.25%;
      margin: 1%;
      border-radius: var(--borderRadiusDiv);
    }
  }
  .form,
  .formArea {
    background: var(--backgroundDiv);
    border-radius: var(--borderRadiusDiv);
    padding: 20px;
    box-shadow: var(--shadow);
    margin-bottom: 1.5rem;
  }
  .formArea img {
    height: 230px;
    width: 185px;
  }
  .form-control {
    border-radius: 0;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.25);
    border-top: none;
    border-left: none;
    border-right: none;
    padding: 0.375rem 0.15rem;
    margin-bottom: 1rem;
  }
  .img {
    background: #f5f5f5;
    padding: 5px;
    border: 0.25px solid rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 230px;
    width: 185px;
  }
  .grid-container {
    float: left;
    text-align: center;
    margin-right: 3%;
  }
  .name {
    text-align: right;
    font-weight: bold;
  }
  li {
    display: block;
    font-size: 1rem;

    &:last-child {
      float: right;
      .nav-link {
        color: black;
      }
    }
  }
  .nav-link {
    padding: 0.25rem;
  }
  .footer {
    background: #e8e8e8;
    text-align: center;
    padding: 10px 0;
    p {
      margin-bottom: 0;
    }
  }
  .prices, .works{
    width: 100%;
    background: var(--backgroundDiv);
    border-radius: var(--borderRadiusDiv);
    padding: 20px;
    float: left;
    box-shadow: var(--shadow);
    margin-bottom: 1.5rem;
  }
  a {
    color: var(--colorText) !important;
  }
  .times {
    width: 100px;
    background: var(--background);
    border: 1.8px solid var(--background);
    padding: 5px;
    border-radius: 15px;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    text-align: center;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &:hover {
      border: 1.8px solid var(--borderColorButton);
    }
  }
  .registTime{
    font-weight: 500;
    color: #0c59ab;
  }
  .flexBlock{
    display: flex;
    .blockInput{
      display: block;
    }
    .blockTheme{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      label{
        margin-left: 0;
      }
    }
  }
  .themes{
    border: 2px solid transparent;
  }
  .themes:hover{
    border: 2px solid black;
  }
  .blockInput,.blockTheme{
    width: 100%;
    .input{
      margin: 0 10px;
    }
  }
  .modal-body{
    label{
      margin-left: 0;
    }
  }
  .blockSearch{
    width: 100%;
    margin-left: 20px;
    .inputSearch{
      display: flex;
      width: 100%;
      .bi-search{
        margin-left: -100%;
      }
    }
  }

  @media (min-width: 1200px){
   .container{
     max-width: 1110px !important;
   }
  }
  @media (min-width: 992px){
   .container{
     max-width: 900px !important;
   }
  }
  @media (max-width: 768px){
    p{
      margin-bottom: .5rem !important;
    }
    .formArea{
      .grid-container{
        float: none !important;
        img, .img{
          margin: 0 auto;
        }
      }
    }
   .personCard,.cardPerson{
     flex-direction: column;
     position: relative;
     i{
       position: absolute !important;
       right: 5% !important;
     }
     .col,.col-3,.col-2{
       max-width: 100%;
       padding-right: 0;
       padding-left: 0;
     }
     .img_specialist{
       border-radius: 50%;
       width: 50%;
       margin: 0 auto;
       display: block;
     }
   }
    .entry{
      width: 100% !important;
    }
  }
</style>
