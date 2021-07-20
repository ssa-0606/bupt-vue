<template>
  
  <div class="index_com">
    
    <div class="index_big_pic_ssa">
        <div></div>
    </div>
    
    <div class="index_text_ssa">
        <span>
            用于工业安全的毫米波雷达系统
        </span>
<!--        <span>-->
<!--          -->
<!--        </span>-->
        <span>
          锐达毫米波雷达可以检测到危险区域操作人员的进入或存在，允许实时、动态地设置检测区域和警告区域。
        </span>
    </div>

    <div class="index_big_pic1">
      <img src="../assets/rdbigpic.png" alt="">
    </div>


  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* ===================================== */

.index_com{
  margin-top: 55px;
  text-align: center;
}
.index_big_pic1 img{
  max-width: 80%;
  margin: 0 atuo;
  margin-top: 50px;
}
.index_big_pic_ssa{
  background-image: url("../assets/index-ssa1.png");
  background-size: cover;
  /* background-attachment: fixed; */
  background-position: center;
  height: 65vh;
  /* widows: 100%; */
}
.index_big_pic_ssa div{
  font-size: 3.8rem;
  line-height: 65vh;
  color: white;
  font-weight: 700;
}
.index_text_ssa{
  margin-top: 80px;
  color: black;
  text-align: center;
}
.index_text_ssa span:nth-child(1){
  font-size: 2.7rem;
  font-weight: 700;
  display: block;
}
@media screen and (max-width:480px){
  .index_text_ssa span:nth-child(1){
    font-size: 2rem;
  }
}
.index_text_ssa span:nth-child(2){
  font-size: 2rem;
  font-weight: 300;
  display: block;
  margin-top: 10px;
}
@media screen and (max-width:480px) {
  .index_text_ssa span:nth-child(2){
    font-size: 1.3rem;
  }
}
.index_text_ssa span:nth-child(3){
  font-size: 1.2rem;
  display: inline-block;
  color: darkslategray;
  /* width: 50vw; */
  margin: 0 10vw;
  margin-top: 40px;
}




.index_info_ssa{
  margin-top: 90px;
}

.index_info_detail_ssa{
  margin-top: 100px;
}
.index_info_detail_ssa img{
  height: 120px;
  widows: auto;
}
.index_info_detail_ssa div:nth-child(2){
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 20px 0;
}
.index_info_detail_ssa div:nth-child(3){
  margin: auto auto;
  width: 60%;
  font-size: 1.3rem;
}




</style>
