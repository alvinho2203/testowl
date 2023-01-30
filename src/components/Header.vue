<template>
    <header>
        <nav class="container">
            <a href="/"><img src="@/assets/logo.png" alt="logo" id="logo"></a>
            
            <img v-on:click="openMenu" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg
" alt="Abrir Menu" id="menu-button">

            <div v-on:click="closeMenu"  id="menu-overlay" v-if="menuActive"></div>

            <div id="menu-items" :class="{active:menuActive}">
                <ul>
                    <li><a href=""></a>Produtos</li>
                    <li><img id="carrinho" src="@/assets/carrinho.png" alt=""><a href=""></a></li>
                </ul>
            </div>

        </nav>
    </header>
</template>

<script>
    export default{
        name: 'Header',
        data(){
            return{
                menuActive: false
            }
        },
        methods:{
            openMenu:function(){
                this.menuActive = true;
            },
            closeMenu:function(){
                this.menuActive = false;
            }
        }
    }
</script>

<style scoped>

    header{
        background-color: var(--color-background-nav);
        width: 100%;
        height: 129px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    nav{
        display: flex;
        justify-content: space-between;
        height: 129px;
        align-items: center;

    }

    #logo{
        width: 143px;
        height: 25px;
    }

    #menu-button{
        width: 30px;
    }

    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 60%;
        height: 100vh;
        background-color: #000000;
        opacity: 0.8;
    }

    #carrinho{
        width: 50px;
        height: 50px;
    }

    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 40%;
        height: 100vh;
        display: none;
        flex-direction: column;
        margin-top: 30px;
        align-items: center;
    }

    #menu-items.active{
        display: flex;
    }

    ul{
        list-style: none;
        text-align: center;
    }

    ul li{
        margin: 20px 0px;
        color: #909090;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
    }

    ul li a{
        color: #909090;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
    }

    @media (min-width: 700px){
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display: none;
        }

        #menu-items{
            display: flex;
            position: static;
            height: 129px;
            width: auto;
        }

        ul{
            display: flex;
            height: 129px;
            align-items: center;
        }

        ul li{
            margin: 0;
            margin-left: 10px;
        }
    }
</style>

