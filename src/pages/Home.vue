<template>
    <div id="sessaoHome">
        <main>
            <div id="banner">
                <div>
                    <h1 id="tituloPrincipal">Notebooks</h1>
                    <h2 id="tituloSecundario">As melhores ofertas</h2>
                </div>
            </div>
            <div id="buscar">
                <h2 id="tituloSearch">Encontre seu produto</h2>
                <input v-model="search" placeholder="Pesquisar " type="text" id="searchInput" name="searchInput">
                <a href=""><img id="iconeSearch" src="@/assets/search.png" alt="Search Icon"></a>
            </div>
            <div id="produtoscards">
                <div id="cardProduto">
                    <div id="card"  v-for="produto in filtroProduto" :key="produto.name" >
                        <img id="imgProduto" :src="produto.imageUrl" :alt="produto.name">
                        <h4 :key="produto.category" id="tituloCategoria">{{produto.category}}</h4>
                        <h3 :key="produto.name" id="tituloProduto">{{ produto.name }}</h3>
                        <p  :key="produto.description" id="descProduto">{{produto.description}}</p>
                        <span :key="produto.price" id="precoProduto">R$ {{produto.price}}</span>
                        <button id="botaoComprar">Adicionar ao Carrinho</button>
                    </div>
                </div>
            </div>    
        </main>
    </div>     
</template>

<script>

import api from "@/services/api";

export default{
    name: 'Home',
    data(){
        return{
            produtos: [],
            search: ''
        };
    },
    created(){
        this.getProduto();
    },
    methods:{
        getProduto(){
            api
                .get("")
                .then((res) => {
                    this.produtos = res.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    computed:{
        filtroProduto: function(){
            return this.produtos.filter((produto)=> {
                return produto.name.match(this.search)
            })
        }
    }
}
</script>

<style scoped>

    
    #sessaoHome{
        height: 100%;
        margin-bottom: 60px;
    }


    main{
        background-color: var(--color-background);
        display: flex;
        flex-direction: column;
        font-family: 'Source Sans Pro', sans-serif;
        
    }

    #banner{
        background-image: linear-gradient(93.06deg, #8E36B7 0%, #D794F6 100%);
        height: 444px;
        width: 100%;
    }

    #tituloPrincipal{
        position: absolute;
        top: 280px;
        right: 30px;
        font-style: normal;
        font-weight: 900;
        font-size: 72px;
        line-height: 87px;
        color: #ffffff;
    }

    #tituloSecundario{
        position: absolute;
        top: 370px;
        right: 30px;
        font-style: normal;
        font-weight: 900;
        font-size: 35px;
        line-height: 42px;
        color: #ffffff;
    }

    #buscar{
        justify-content: center;
        align-items: center;
        margin: auto;
        display: flex;
        margin-top: 30px;
    }

    #searchInput{
        height: 60px;
        width: 300px;
        padding-left: 20px;
        color: #B5B5B5;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        border: 1px solid #909090;
        border-radius: 3px;
    }

    #iconeSearch{
        width: 42px;
        height:42px;
        background-color: #8E36B7;
        padding: 10px;
        border: 1px solid #8E36B7;
        border-radius: 3px;
        margin-top: 3px;
    }

    #tituloSearch{
        color: #909090;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        margin-right: 0px;
    }

    #cardProduto{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 60px;
        margin-bottom: 100px;
        flex-wrap: wrap;
    }


    #card{
        border: 1px solid #000000;
        border-radius: 3px;
        margin-right: 30px;
        width: 326px;
        height: 650px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    #cardPesquisa{
        border: 1px solid #000000;
        border-radius: 3px;
        margin-right: 30px;
        width: 326px;
        height: 650px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        
    }

    #tituloCategoria{
        margin-bottom: 10px;
        color: #8E36B7;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        text-align: left;
    }

    #tituloProduto{
        margin-bottom: 10px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        color: #434343;
    }

    #descProduto{
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 140.4%;
        color: #434343;
    }

    #imgProduto{
        height: 200px;
        margin-bottom: 30px;
    }

    #precoProduto{
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 31px;
        color: #434343;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #botaoComprar{
        width: 100%;
        height: 51px;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
        background-color: #8E36B7;
        border-color: #8E36B7;
        text-transform: uppercase;
        padding: 5px;
        margin-top: 10px;   
    }

    @media(min-width: 700px){
        #tituloPrincipal{
            position: absolute;
            top: 280px;
            right: 450px;
        }

        #tituloSecundario{
            position: absolute;
            top: 370px;
            right: 450px;
        }

        #produtoscards{
            margin-left: 401px;
            margin-right: 401px;
        }

        #tituloSearch{
            margin-right: 53px;
        }

        #searchInput{
            height: 60px;
            width: 600px;
        }
        
    }

</style>