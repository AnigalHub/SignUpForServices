<template>
    <b-navbar class="navbar-expand-lg sticky-top" toggleable>
        <b-container>
            <b-navbar-brand to="/">
                <logo/>
            </b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <template v-slot:default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" class="justify-content-center" is-nav>
                <b-navbar-nav>
                    <b-nav-item  class="menu" v-for="(list,index) in information.client_menu"  :to="list.href" :key="index">{{list.name}}</b-nav-item>
<!--                    <b-nav-item  class="menu" v-for="(list,index) in information.specialist_menu" to="" :key="index">{{list.name}}</b-nav-item>-->
                </b-navbar-nav>
                <b-icon class="icon_person" icon="person"  width="30" height="30" @click="onIconClick"></b-icon>
            </b-collapse>
            <client-card v-if="isShown" :isShown="isShown" :data="information.client_card" class="desktop"/>
        </b-container>
    </b-navbar>
</template>

<script>
  import logo from '@/components/Logo'
  import information from '../../public/information.json'
  import ClientCard from '@/components/ClientCard'

  export default {
    name: 'Navbar',
    components: { ClientCard, logo },
    data(){
      return{
        information: information,
        isShown: false,
      }
    },
    methods:{
      onIconClick() {
          this.isShown = !this.isShown;
      },
    }
  }
</script>

<style scoped lang="scss">
    .desktop {
        background-color: white;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        width: 300px;
        height: 160px;
        padding: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 20px 0 0 185px;
    }
.navbar{
    height: 50px;
    padding: 0 40px;
    background: white;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    .menu{
        display: flex;
        font-size: 1.1rem;
        margin: 0 10px;
    }
    .no_logo{
        margin: 0 auto;
    }
    .icon_person{
        margin-left: 45px;
        cursor: pointer;
    }
}
    @media screen and (min-width: 992px){
        .navbar-expand-lg .navbar-nav .nav-link {
            padding-right: 0.05rem !important;
            padding-left: 0.05rem !important;
            font-size: .9rem;
        }
    }
    @media screen and (max-width: 1200px){
        .navbar .menu{
            font-size: 1rem;
        }
    }
</style>
