<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
<!--    <ProductShow/>-->
<!--    <IndexReason/>-->
    <SafeCom/>
    <div style="margin: 120px auto">
      <img src="../assets/goodpoint.png" alt="" class="inde-safe-change-img">
    </div>
    <div class="index-ul">
      <div>在不影响生产率的前提下实现高安全性</div>
      <div>在摄像头/红外传感器失效的时候仍然正常工作</div>
    </div>
    <div class="first-sensor-img-ssa-change">
      <b-container fluid class="parent-col-ssa">
        <b-row>
          <b-col style="background: black;" cols="12" md="3" class="first-sensor-img-col-ssa1 first-sensor-img-col-ssa">
            <div >

              <!-- <img src="../assets/sensor-light.png" alt=""> -->
            </div>
          </b-col>
          <b-col style="background: black;" cols="12" md="3" class="first-sensor-img-col-ssa2 first-sensor-img-col-ssa">
            <div>
              <!-- <img src="../assets/sensor-hui.png" alt=""> -->
            </div>
          </b-col>
          <b-col style="background: black;" cols="12" md="3" class="first-sensor-img-col-ssa3 first-sensor-img-col-ssa">
            <div>

              <!-- <img src="../assets/sensor-fire.png" alt=""> -->
            </div>
          </b-col>
          <b-col style="background: black;" cols="12" md="3" class="first-sensor-img-col-ssa4 first-sensor-img-col-ssa">
            <div>

              <!-- <img src="../assets/sensor-water.png" alt=""> -->
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="home-end-text">
      光学/红外设备经常因生产过程中产生的粉尘、烟雾、水汽、碎屑、火花等干扰而失效，锐达团队高度专注于毫米波雷达技术，研发了一种现今的60GHz雷达系统，可过滤这些干扰，减少误报提高工作效率。
    </div>
    <div class="home-end-text1">
      锐达毫米波雷达产品详情请查看右上角产品页
    </div>
  </div>

</template>

<script>

/**
 * 此页是 产 品 概 览 页
 *
 * 首次进入router-view的页面
 *
 * 介 绍 产 品
 *
 */

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import ProductShow from '@/components/ProductShow.vue'
// import IndexReason from '@/components/IndexReason.vue'
import SafeCom from '@/components/SafeCom.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    // ProductShow,
    // IndexReason,
    SafeCom
  }


}
</script>

<style>

.home{
  text-align: center;
}

.first-sensor-img-ssa-change{
  width: 100%;
  margin-top: 80px;
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: multiply;
}
.first-sensor-img-col-ssa div{
  height: 40vh;
  background-size: cover;
  background-position: center;
  color: white;
  padding-top: 20px;
  /* background-repeat: no-repeat; */
}
.first-sensor-img-col-ssa1 div{
  background-image: url("../assets/sensor-light.png");
}
.first-sensor-img-col-ssa2 div{
  background-image: url("../assets/sensor-hui.png");
}
.first-sensor-img-col-ssa3 div{
  background-image: url("../assets/sensor-fire.png");
}
.first-sensor-img-col-ssa4 div{
  background-image: url("../assets/sensor-water.png");
}


.index-ul div{
  font-size: 1.5rem;
  font-weight: 600;
  color: black;
  margin-top: 40px;
}
@media screen and (max-width:480px) {
  .index-ul div{
    font-size: 1.3rem;
  }
}

.home-end-text{
  width: 80%;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 90px
}
@media screen and (max-width:480px) {
  .home-end-text{
    width: 90%;
    font-size: 1.15rem;
  }
}
.home-end-text1{
  width: 90%;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: right;
  margin-top: 50px;
}
@media screen and (max-width:480px) {
  .home-end-text1{
    width: 95%;
    font-size: 0.8rem;
  }
}

.inde-safe-change-img{
   width: 60%; 
}
@media screen and (max-width:480px) {
  .inde-safe-change-img{
    width: 85%;
  }
}

</style>



