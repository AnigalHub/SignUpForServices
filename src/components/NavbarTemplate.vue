<template>
    <b-navbar id="Nav" class="navbar-expand-lg sticky-top" toggleable>
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
            <b-collapse
               id="navbar-toggle-collapse"
               is-nav
            >
                <b-navbar-nav>
<!--                    <b-nav-item-->
<!--                         v-for="(list, index) in information.client_menu"-->
<!--                         :key="index"-->
<!--                         class="menu"-->
<!--                         :to="list.href"-->
<!--                    >{{ list.name }}-->
<!--                    </b-nav-item>-->
                    <b-nav-item
                        v-for="(list,index) in information.specialist_menu"
                        :key="index"
                        class="menu"
                        :to="list.href"
                    >
                    {{list.name}}
                    </b-nav-item>
                </b-navbar-nav>
                <b-icon
                    class="icon_person"
                    icon="person"
                    width="30"
                    height="30"
                    @click="onIconClick"
                ></b-icon>
                <client-card
                  :data="information.client_card"
                  name="mobile"
                  class="mobile"
                />
            </b-collapse>
            <client-card
                v-if="isShown"
                :data="information.client_card"
                name="desktop"
                class="desktop"
            />
        </b-container>
    </b-navbar>
</template>

<script>
  import logo from '@/components/Logo';
  import information from '../../public/information.json';
  import ClientCard from '@/components/ClientCard';

  export default {
    name: 'NavbarTemplate',
    components: { ClientCard, logo },
    data(){
      return{
        information,
        isShown: false,
      };
    },
    methods:{
      onIconClick() {
        this.isShown = !this.isShown;
      },
    },
  };
</script>

<style scoped lang="scss">
    .navbar-nav{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .desktop {
        background-color: white;
        box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        width: 300px;
        height: 160px;
        padding: 15px;
        position: absolute;
        top: 59%;
        left: 47.5%;
        margin: 20px 0 0 185px;
    }
    .mobile{
        margin-left: -15px;
        display: none;
    }
    /*меню*/
    .navbar-nav{
        margin-bottom: 0 !important;
    }
    /*блок под логотип(картинка, название компании, что за компания(производственная))*/
    .navbar-brand{
        padding-top: 0.2rem !important;
        padding-bottom: 0.2rem !important;
    }
    /*меню на всех экранах (которое будет и складываться на маленьких экранах и раскрываться на больших)*/
    .navbar{
        background: white;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        .menu {
            display: flex;
            font-size: 1rem;
        }
        .no_logo {
            margin: 0 auto;
        }
        .icon_person {
            cursor: pointer;
            margin-top: 2px;
            margin-left: 10px;
        }
    }
    .navbar-light .navbar-toggler {
        color: rgba(0, 0, 0, 0.5);
        border-color: rgba(0, 0, 0, 0.1);
        width: auto;
        height: auto;
    }
    @media screen and (max-width: 992px) {
        .navbar .icon_person{
            display: none;
        }
        .mobile{
            display: block;
        }
        .navbar .menu {
            font-size: 1rem;
        }
    }
</style>
