<template>
    <div id="finalizarCompra">
        <table id="tabela">
            <colgroup span="4" class="columns"></colgroup>
            <tr>
                <th>Produtos</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Total</th>
            </tr>
            <tr v-for="produto in produtos" :key="produto.name">
                <td id="linhaProdutos"><div id="catProduto">{{produto.category}}</div><div id="nameProduto">{{produto.name}}</div></td>
                <hr>
                <td><input class="inputQtd" id="inputQtd" type="number" value="1"></td>
                <td class="precoCompra" id="precoCompra">R$ {{produto.price}}</td>
                <td class="total"></td>
            </tr>

        </table>
    </div>
</template>

<script>

    import api from '@/services/api'


    export	default {
        name: 'Carrinho',
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
    }

    };    
        
</script>

<style scoped>
    #finalizarCompra{
        padding-left:400px;
        padding-right: 400px;
        margin-top: 30px;
        margin-bottom: 60px;
    }
    
    #tabela{
        width: 100%;
        justify-content: center;
        align-items: center;
        border: 1px solid #000000;
        padding: 30px;
    }

    th{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        color: #434343;
        text-transform: uppercase;
    }

    #linhaProdutos{
        display: flex;
        flex-direction: column;
        width: 70%;
    }

    #catProduto{
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: #8E36B7;
        margin-bottom: 5px;
    }

    #nameProduto{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
        color: #434343;
        margin-bottom: 20px;
    }

    #inputQtd{
        width: 97px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        padding-left: 20px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 23px;
        text-align: center;
        color: #434343;
    }

    #precoCompra{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
        color: #434343;
        padding-left: 20px;
    }
    


</style>