<template>
    <div id="finalizarCompraLinha1">
        <form action="">
            <div id="formLinha1">
                <div id="nomeForm">
                    <label for="">Nome*</label>
                    <input id="inputNome" v-model="form.nome" type="text">
                </div>
                <div id="nomeForm">
                    <label for="">CEP*</label>
                    <input id="inputCep" v-model="form.cep" type="text" v-mask="'#####-###'">
                </div>
            </div>
            <div id="formLinha2">
                <div id="nomeForm">
                    <label for="">E-mail*</label>
                    <input id="inputEmail" v-model="form.email" type="email">
                </div>
                <div id="nomeForm">
                    <label for="">Endereço*</label>
                    <input id="inputEndereco" v-model="form.endereco" type="text">
                </div>
                <div id="nomeForm">
                    <label for="">Número*</label>
                    <input id="inputNumero" v-model="form.numero" type="number">
                </div>
            </div>
            <div id="formLinha3">
                <div id="nomeForm">
                    <label for="">CPF*</label>
                    <input id="inputCpf" type="text" v-mask="'###.###.###-##'" v-model="form.cpf">
                </div>
                <div id="nomeForm">
                    <label for="">Complemento*</label>
                    <input id="inputComplemento" type="text" v-model="form.complemento">
                </div>
                <div id="nomeForm">
                    <label for="">Bairro*</label>
                    <input id="inputBairro" type="text" v-model="form.bairro">
                </div>
            </div>
            <div id="formLinha4">
                <div id="nomeForm">
                    <label for="">Data de nascimento*</label>
                    <input id="inputData" type="date" v-model="form.dataNascimento">
                </div>
                <div id="nomeForm">
                    <label for="">Telefone*</label>
                    <input id="inputTelefone" type="text" v-model="form.telefone" v-mask="'(##)#####-####'">
                </div>
                <div id="nomeForm">
                    <label for="">Cidade*</label>
                    <input id="inputCidade" type="text" v-model="form.cidade">
                </div>
                <div id="nomeForm">
                    <label for="">Estado*</label>
                    <select id="inputEstado" name="estado">
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                        <option value="EX">Estrangeiro</option>
                    </select>
                </div>
            </div>
            <div id="formLinha5">
                <button id="botaoComprar">Concluir compra</button>
            </div>

        </form>
    </div>
</template>

<script>
    
    export default{
        name: 'FinalizarCompra',
        data(){
            return{
                form: {
                    nome: "",
                    cep: "",
                    email: "",
                    endereco: "",
                    numero: "",
                    cpf: "",
                    complemento: "",
                    bairro: "",
                    dataNascimento: "",
                    telefone: "",
                    cidade: "",
                    estado:"",
                },
            };    
        },
    };

</script>

<style scoped>
    #finalizarCompraLinha1{
        margin-top: 60px;
    }
    
    label{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #434343;
    }

    input{
        border: 1.5px solid #909090;
        border-radius: 3px;
    }



    
    #formLinha1{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    
    #formLinha2{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    #formLinha3{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    #formLinha4{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    #formLinha5{
        display: flex;
        justify-content: end;
        align-items: flex-end;
        margin-top: 30px;
        margin-right: 400px;
        margin-bottom: 60px;
    }



    #nomeForm{
        display: flex;
        flex-direction: column;
    }


    #inputNome{
        width: 548px;
        height: 45px;
        margin-top: 10px;
        margin-right: 20px;
    }

    #inputEndereco{
        width: 357px;
        height: 45px;
        margin-top: 10px;
        margin-right: 20px;
    }

    #inputEmail{
        width: 548px;
        height: 45px;
        margin-top: 10px;
        margin-right: 20px;
    }

    #inputCep{
        width: 548px;
        height: 45px;
        margin-top: 10px;
        margin-right: 20px;
    }

    #inputNumero{
        width: 167px;
        height: 45px;
        margin-top: 10px;
        margin-right: 20px;
    }

    #inputCpf{
        width: 548px;
        height: 45px;
        margin-top: 10px;
        margin-right: 20px;
    }

    #inputComplemento{
        width: 262px;
        height: 45px;
        margin-top: 10px;
        margin-right: 20px;
    }

    #inputBairro{
        width: 262px;
        height: 45px;
        margin-top: 10px;
        margin-right: 20px;
    }

    #inputData{
        width: 262px;
        height: 45px;
        margin-top: 10px;
        margin-right: 20px;
    }

    #inputTelefone{
        width: 262px;
        height: 45px;
        margin-top: 10px;
        margin-right: 20px;
    }

    #inputCidade{
        width: 357px;
        height: 45px;
        margin-top: 10px;
        margin-right: 20px;
    }

    #inputEstado{
        width: 167px;
        height: 45px;
        margin-top: 10px;
        margin-right: 20px;
    }

    #botaoComprar{
        width: 357px;
        height: 52px;
        background-color: #8E36B7;
        color: #FFFFFF;
        border: none;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;

    }


</style>