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
            <tr v-for="produto in produtos" :key="produto.id">
                <td id="linhaProdutos"><div id="catProduto">{{produto.category}}</div><div id="nameProduto">{{produto.name}}</div></td>
                <hr>
                <td><input v-model="produto.quantidade" class="inputQtd" id="inputQtd" type="number" min="1"></td>
                <td class="precoCompra" id="precoCompra">R$ {{produto.price}}</td>
                <td class="precoCompra" id="precoCompra">R$ {{itemTotal(produto).toFixed(2)}}</td>
            </tr>
            <tr>
                <p id="totalGeral">Total à Vista <span id="totalGeralNum">R$ {{ totalGeral.toFixed(2) }}</span></p>
            </tr>
        </table>
        <div id="sessaoBotoes">
            <a href="/" id="botaoContinuar">Continuar comprando</a>
            <a href="/#/finalizar" id="botaoComprar">Concluir compra</a>
        </div>
    </div>

</template>

<script>

    import api from '@/services/api'


    export	default {
        name: 'Carrinho',
        data(){
            return{
                produtos: [],
                search: '',
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
                    this.produtos = res.data.map(item  => {
                        return {
                            ...item,
                            quantidade: 1
                        }
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        } ,
        itemTotal(produto) {
            return produto.quantidade * produto.price;
        } 
    },
    computed:{
        totalGeral() {
            return this.produtos.reduce((total, item) => {
                return total + this.itemTotal(item);
            }, 0);
        }
    }

    };    
        
</script>

<style scoped>
    #finalizarCompra{
        padding-left:400px;
        padding-right: 400px;
        margin-top: 30px;
        margin-bottom: 100px;
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

    #inputTotal{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
        color: #434343;
        width: 97px;
        height: 34px;
        padding-left: 40px;
    }

    .total{
        margin-right: 20px;
    }

    #totalGeral{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
        color: #434343;
        display: flex;
        justify-content: end;
        margin-top: 20px;
        text-transform: uppercase;
    }

    #totalGeralNum{
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 130%;
        color: #8E36B7;
        margin-left: 15px;
    }
    
    #sessaoBotoes{
        display: flex;
        margin-top: 30px;
        justify-content: end;
    }
    
    #botaoContinuar{
        width: 262px;
        height: 52px;
        background: #D0D0D0;
        margin-right: 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #434343;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #botaoComprar{
        width: 262px;
        height: 52px;
        background: #8E36B7;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #FFFFFF;
        border: none;
        margin-bottom: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>