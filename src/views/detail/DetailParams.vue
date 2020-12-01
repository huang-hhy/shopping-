<template>
    <div class="params-info" v-if="itemParams.rule !== undefined">
        <table class="table1" v-for="(table,index) in itemParams.rule.tables" :key="index">
            <tr v-for="(tr,index2) in table" :key="index2">
                <td v-for="(td,index3) in tr" :key="index3">{{td}}</td>
            </tr>
        </table>
        <table class="table2">
            <tr v-for="(item,index) in itemInfo" :key="index">
                 <td>{{item.key}}</td>
                 <td class="td">{{item.value}}</td>
            </tr>          
        </table>
    </div>
</template>

<script>
export default {
    props:{
        itemParams:{
            type:Object,
            default(){
                return {}
            }
        },
        itemInfo:{
            type:Array,
            default(){
                return []
            }
        }
    },
    name:"DetailParams",
    mounted(){
        // console.log(this.itemParams);
    }
}
</script>

<style lang="scss" scoped>
.params-info table{
    width: 100%;
    // height: 300px;
    // padding-top: 30px;
    border-top: 5px solid  #ccc;
    // border-bottom: 3px solid  #ccc;
    padding-left: 30px;
    padding-right: 30px;
    // margin-bottom: 20px;
    tr{
        display: flex;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        td{
            flex: 1;
        }
        
    }
    
}
.table2{
        margin-top: 20px;
        .td{
            color: pink;
        }
    }
</style>