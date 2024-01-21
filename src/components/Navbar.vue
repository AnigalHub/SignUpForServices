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
                    <b-nav-item  class="menu" v-for="(list,index) in information.client_menu" to="" :key="index">{{list}}</b-nav-item>
<!--                    <b-nav-item  class="menu" v-for="(list,index) in information.specialist_menu" to="" :key="index">{{list}}</b-nav-item>-->
                </b-navbar-nav>
            </b-collapse>
            <b-icon icon="person" class="icon_person" width="30" height="30"></b-icon>
        </b-container>
    </b-navbar>
</template>

<script>
  import logo from '@/components/Logo'
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
    padding: 0 40px;
    background: white;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    .menu{
        display: flex;
        font-size: 1.1rem;
        margin: 0 10px !important;
    }
    .no_logo{
        margin: 0 auto;
    }
    .icon_person{
        margin-left: 45px;
    }
}
</style>
