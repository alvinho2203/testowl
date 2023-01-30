<template>
    <div id="footer">
        <div id="conteudoFooter">
            <img id="logoFooter" src="@/assets/logoFooter.png" alt="Logo Footer">
        </div>
    </div>
</template>

<script>
export default{
    name: 'Footer'
}
</script>

<style scoped>
    #footer{
        background-color: #C9C9C9;
        height: 120px;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    #logoFooter{
        width: 143px;
        height: 25px;
        margin-top: 45px;
    }

    @media(min-width: 700px){
        #logoFooter{
            width: 143px;
            height: 25px;
            justify-content: center;
            align-items: center;
        }
    }

</style>
