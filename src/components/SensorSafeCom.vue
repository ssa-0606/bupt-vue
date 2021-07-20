<template>
  <div >
    <div >
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="2" offset-md="1">
            <div class="safe-com-nom1-detail-ssa-change1">
            </div>
          </b-col>
          <b-col cols="12" md="4" offset-md="1">
            <div class="safe-com-nom1-detail-ssa-change1">
              <img src="../assets/sensor-mode1.png" alt="">
              <div>人员保护</div>
              <div>检测人员进入时，机器停机。检测参数可以实时动态修改。</div>
            </div>
          </b-col>
          <b-col cols="12" md="4">
            <div class="safe-com-nom1-detail-ssa-change1">
              <img src="../assets/sensor-mode2.png" alt="">
              <div>重启预防</div>
              <div>当操作员停止在危险区域时，它可以防止机器重新启动</div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
name: "SensorSafeCom"
}
</script>

<style scoped>

.my-safe-com-nom-ssa-change1{
  text-align: center;
  margin-top: 150px;
}



.safe-com-nom1-detail-ssa-change1{
  margin: 20px 0;
}
@media screen and (max-width:480px) {
  .safe-com-nom1-detail-ssa-change1{
    text-align: center;
  }
}
.safe-com-nom1-detail-ssa-change1 img{
  height: 200px;
  width: auto;
}


@media screen and (max-width:480px){
  .safe-com-nom1-detail-ssa-change1 img {
    width: 75%;
    margin: 0 auto;
  }
}



.safe-com-nom1-detail-ssa-change1 div:nth-child(2){
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 15px 0;
}

.safe-com-nom1-detail-ssa-change1 div:nth-child(3){

  width: 60%;
  font-size: 1.3rem;
}

@media screen and (max-width:480px) {

  .safe-com-nom1-detail-ssa-change1 div:nth-child(2){
    font-size: 1.2rem;
    margin: 0 auto;
    text-align: center;
  }
  .safe-com-nom1-detail-ssa-change1 div:nth-child(3){
    font-size: 1rem;
    text-align: center;
    margin: 0 auto;
  }
}
</style>
