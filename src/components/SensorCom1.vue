<template>
    <div class="first-sensor-ssa">
        <div class="sensor-big-pic-ssa">
<!--            <div>锐达 R-01</div>-->
        </div>
      <div class="first-sensor-p1-ssa">锐达 R-01</div>
<!--      <div style="background: #1b1e21;width: 100%;height: 5px"></div>-->
      <div class="first-sensor-p2-ssa">
          <img src="../assets/sensor-detail.png" alt="">
        <div class="first-sensor-p2-1-ssa">
          <div>锐达毫米波雷达是应用在工业安全场景中的防护雷达，它能够以极小的占地面积监控广泛的危险区域，并最大的保护工业环境的隐私。</div>
        </div>
      </div>


<!--      要去掉的部分-->

<!--        <div class="first-sensor-p1-ssa">-->
<!--            <div>锐达 毫米波雷达</div>-->
<!--            <div>在不影响生产力的情况下提高安全性。</div>-->
<!--            <div>安全是 锐达 的首要任务。为了使工作场所更安全，我们开发了一种传感器，通过使用世界上最安全的技术：雷达来预防事故。</div>-->
<!--        </div>-->
<!--        <div class="first-sensor-img-ssa">-->
<!--            <b-container fluid class="parent-col-ssa">-->
<!--                <b-row>-->
<!--                    <b-col cols="12" md="3" class="first-sensor-img-col-ssa1 first-sensor-img-col-ssa">-->
<!--                        <div>-->
<!--                            IMMUNE TO LIGHT-->
<!--                            &lt;!&ndash; <img src="../assets/sensor-light.png" alt=""> &ndash;&gt;-->
<!--                        </div>-->
<!--                    </b-col>-->
<!--                    <b-col cols="12" md="3" class="first-sensor-img-col-ssa2 first-sensor-img-col-ssa">-->
<!--                        <div>-->
<!--                            IMMUNE TO DEBRIS-->
<!--                            &lt;!&ndash; <img src="../assets/sensor-hui.png" alt=""> &ndash;&gt;-->
<!--                        </div>-->
<!--                    </b-col>-->
<!--                    <b-col cols="12" md="3" class="first-sensor-img-col-ssa3 first-sensor-img-col-ssa">-->
<!--                        <div>-->
<!--                            IMMUNE TO FIRE-->
<!--                            &lt;!&ndash; <img src="../assets/sensor-fire.png" alt=""> &ndash;&gt;-->
<!--                        </div>-->
<!--                    </b-col>-->
<!--                    <b-col cols="12" md="3" class="first-sensor-img-col-ssa4 first-sensor-img-col-ssa">-->
<!--                        <div>-->
<!--                            IMMUNE TO FLUIDS-->
<!--                            &lt;!&ndash; <img src="../assets/sensor-water.png" alt=""> &ndash;&gt;-->
<!--                        </div>-->
<!--                    </b-col>-->
<!--                </b-row>-->
<!--            </b-container>-->
<!--        </div>-->
    </div>

</template>
<script>
export default {

}
</script>

<style>

.first-sensor-ssa{
    text-align: center;
}

.sensor-big-pic-ssa{
    height: 65vh;
    background-image: url("../assets/index-ssa1.png");
    background-size: cover;
    background-position: center;
    text-align: center;
}
.sensor-big-pic-ssa div{
   font-size: 3.8rem;
  line-height: 65vh;
  color: white;
  font-weight: 700;
}
.first-sensor-p1-ssa{
    text-align: center;
    margin-top: 50px;
    font-size: 3.6rem;
    font-weight: 700;
    color: black;
}
@media screen and (max-width:480px) {
  .first-sensor-p1-ssa{
    font-size: 2rem;
  }
}
.first-sensor-p2-ssa{
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  margin-right: 10%
}
.first-sensor-p2-ssa img{
  width: 30%;
  height: 30%
}
@media screen and (max-width:480px) {
  .first-sensor-p2-ssa{
    flex-wrap: wrap;
    /* margin: 0 auto; */
}
  .first-sensor-p2-ssa img{
    width: 80%;
    height: fit-content;
  }
}
.first-sensor-p2-1-ssa{
  text-align: center;
  margin-top: 50px;
  font-size: 2.2rem;
  font-weight: 700;
  color: black;
}
@media screen and (max-width:480px) {
  .first-sensor-p2-1-ssa{
    font-size: 1.5rem;
  }
}


</style>

