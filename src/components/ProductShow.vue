<template>
  <div class="product-show">
    <div class="test-svg">
        <img src="../assets/inxlogo.svg" alt="">
    </div>

    <div class="test-text-ssa">
      <div class="test-text-font-ssa">
        3D 安全雷达系统
      </div>
    </div>

    <div class="test-pro-ssa">
      <b-container>
        <b-row align-v="center" align-h="start">
          <b-col cols="12" sm="12" md="12" lg="1"></b-col>
          <b-col cols="12" sm="12" md="12" lg="2" class="pro-font-center-ssa">
            <div class="pro-info-ssa">
                <img src="../assets/sensor.png" alt="">
                <div>传感器</div>
            </div>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="2" class="pro-font-add-ssa">
              <span>+</span>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="2" class="pro-font-center-ssa">
                <img src="../assets/control.png" alt="">
                <div class="con-set-ssa">控制单元</div>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="2" class="pro-font-add-ssa">
              <span>+</span>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="2" class="pro-font-center-ssa">
                <img src="../assets/software.png" alt="">
                <div>软件</div>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="1"></b-col>
        </b-row>
      </b-container>
    </div>

    <div class="test-pro1">
      <div class="blue-box-ssa">
        LBK SYSTEM: 易于集成的安全雷达解决方案
      </div>
      <b-container>
          <b-row align-h="start">
            <b-col cols="12" md="4">
                <div class="box-inner-ssa">
                  <span>LBK-S01传感器</span>
                </div>
            </b-col>
            <b-col cols="12" md="4">
                <div class="box-inner-ssa">
                  <span>LBK-C22控制单元</span>
                </div>
            </b-col>
            <b-col cols="12" md="4">
                <div class="box-inner-ssa">
                  <span>检查安全应用</span>
                </div>
            </b-col>
          </b-row>
      </b-container>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.product-show{
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  /* background-color: aqua; */
}
.test-svg{
  margin: 0 auto;
  width: 30%;
}
.test-text-ssa{
  text-align: center;
  /* background-color: blue; */
  position: relative;
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
}
.test-text-font-ssa{
  display: inline-block;
  /* width: 40%; */
  margin: 0 auto;
  padding: 0 40px;
  background-color: #fff;
  font-size: 1.34rem;
  position: relative;
  z-index: 10;
}
.test-text-ssa:before{
  content: "";
  display: block;
  width: 100%;
  height: 30px;
  border: thin solid black;
  border-bottom: none;
  position: absolute;
  top: 50%;
  z-index: 1;
}
.pro-font-center-ssa{
  text-align: center;
  height: 100%;
  margin-top: 30px;
}
.pro-font-center-ssa img{
  width: 100%;
  height: auto;
}
.pro-font-center-ssa div{
  font-size: 1.5rem;
  font-weight: 600;
}
.con-set-ssa{
  margin-top: 70px;
}
.pro-font-add-ssa{
  text-align: center;
  font-size: 5rem;
  font-weight: 700;
  color: #1592d2;
}
.test-pro1{
  text-align: center;
  margin-top: 40px;
}
.blue-box-ssa{
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  color: aliceblue;
  background-color: #4992d3;
}
.box-inner-ssa{
  margin-top: 20px;
  height: 60px;
  width: 100%;
  background-color: #d9d9d9;
}
.box-inner-ssa span{
  line-height: 60px;
  font-weight: 600;
}


</style>
