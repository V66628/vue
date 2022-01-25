<template>
  <div class="pagination">
      <!--分页器上半部分 -->
    <button :disabled='pageNo==1' @click="sendPageNo(pageNo-1)">上一页</button>
    <button v-if='startNumberAndEndNumber.start!==1' @click="sendPageNo(1)" :class="{active:pageNo==1}">1</button>
    <button v-if='startNumberAndEndNumber.start>2'>···</button>
    <!--中 -->
    <button v-for="n in  startNumberAndEndNumber.end" :key='n'  v-if="n>=startNumberAndEndNumber.start" @click="sendPageNo(n)" :class="{active:pageNo==n}">{{n}}</button>
     <!--下 -->
    <button v-if='startNumberAndEndNumber.end<totalPage-1'>···</button>
    <button v-if='startNumberAndEndNumber.end<totalPage' @click="sendPageNo(totalPage)" :class="{active:pageNo==totalPage}">{{totalPage}}</button>
    <button :disabled='pageNo==totalPage' @click="sendPageNo(pageNo+1)">下一页</button>
    
    <button style="margin-left: 30px">共 {{totalPage}}页</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props:['pageNo','pageSize','total','continues'],
    computed:{
        //总共多少页
        totalPage(){
            return Math.ceil(this.total/this.pageSize)
        },
        //分页器起始与结束数字计算
        startNumberAndEndNumber(){
            let start=0,end=0
            //不正常现象，总页数还没有连续页码多
            if(this.continues>this.totalPage){
                start=1,
                end=this.totalPage
            }else{
                start=this.pageNo-parseInt(this.continues/2)
                end=this.pageNo+parseInt(this.continues/2)
                if(start<1){
                    start=1
                    end=this.continues
                }
                if(end>this.total){
                    end=this.total
                    start=this.total-this.continues+1
                }
            }
            return {start,end}
        }
    },
    methods:{
      sendPageNo(page){
        this.$emit('getPageNo',page)
      }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
      text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
