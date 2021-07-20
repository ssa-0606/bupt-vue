<template>
    <div class="sensor-show-com1-ssa">
        <div class="test-text-ssa" style="margin-top: 60px">
            <div class="test-text-font-ssa">
                防护范围
            </div>
            <div style="width: 18%; border-bottom: solid 5px black"></div>
        </div>
        <div class="sensor-show-area-ssa">
          <div class="slopingside1"></div>
          <div class="slopingside"></div>
          <div class="slopingside2"></div>
            <b-container fluid>
                <b-row>
                  <b-col cols="6" md="6" class="sensor-show-col1-ssa">
                      <div>
                        <div>水平面：120°</div>
                        <div>垂直面：120°</div>
                        <div>半径：10m</div>
                      </div>
                  </b-col>
                  <b-col cols="6" md="6" class="sensor-show-col2-ssa">
                      <div>
                        <img src="../assets/p4-1-12.png" alt="">
                      </div>
                  </b-col>
                </b-row>
                <b-row class="sensor-row-distance">
                  <b-col cols="12" md="6" class="sensor-show-row2-col1-ssa">
                    <div>
                      <img src="../assets/p4-2-12.png" alt="">
                    </div>
                  </b-col>
                  <b-col cols="12" md="6" class="sensor-show-row2-col2-ssa">
                    <div>
                      <div class="sensor-show-row2-col2-div1-ssa">固定部署</div>
                      <div class="sensor-show-row2-col2-div2-ssa">墙角部署，覆盖整个空间</div>
                    </div>
                  </b-col>
                </b-row>
              <b-row class="sensor-row-distance">
                <b-col cols="12" md="6" class="sensor-show-row2-col1-ssa">
                  <div>
                    <img src="../assets/p4-3-12.png" alt="">
                  </div>
                </b-col>
                <b-col cols="12" md="6" class="sensor-show-row2-col2-ssa">
                  <div>
                    <div class="sensor-show-row2-col2-div1-ssa">移动部署</div>
                    <div class="sensor-show-row2-col2-div2-ssa">多个雷达协同，对移动设备360°覆盖</div>
                  </div>
                </b-col>
              </b-row>
            </b-container>
        </div>

        <div class="test-text-ssa m-top">
            <div class="test-text-font-ssa">
                三轴旋转安装
            </div>
          <div style="width: 18%; border-bottom: solid 5px black"></div>
        </div>
        <div class="sen-show-new-top">
            <b-container fluid>
                <b-row>
                  <b-col cols="12" md="5" style="text-align: center">
                    <div class="sensor-show-busu-main-ssa">
                      <div>
                        <img src="../assets/sensor-busu.png" alt="">
                      </div>
                      <div>
                        <img src="../assets/sensor-zheng.png" alt="">
                      </div>
                      <div>
                        <img src="../assets/sensor-shang.png" alt="">
                      </div>
                      <div>
                        <img src="../assets/sensor-che.png" alt="">
                      </div>
                    </div>
                  </b-col>
                  <b-col md="1">
                    <div class="sen-show-new-line">.</div>
                  </b-col>
                  <b-col cols="12" md="6">
                    <div class="sen-show-new-end-width">
                      <div class="sen-show-new-end-font1">
                        三轴支架系统使锐达雷达传感器的安装和定位变得简单快捷。围绕X轴和Z轴的旋转可以优化传感器对危险区域的覆盖，而围绕Y轴的旋转可以实现水平和垂直角度的覆盖
                      </div>
                      <div style="margin-top: 80px;text-align: center">
                        <div style="font-size: 2rem;font-weight: 700;color: #7abaff">平面安装</div>
                        <img src="../assets/sensor-ad2-change.png" alt="" style="width: 50%;margin-top: 30px">
                      </div>
                      <div style="margin-top: 80px;text-align: center;">
                        <div style="font-size: 2rem;font-weight: 700;color: #7abaff">垂直安装</div>
                        <img src="../assets/sensor-ad3-change.png" alt="" style="width: 50%;margin-top: 30px">
                      </div>

                    </div>
                  </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.test-text-ssa{
  width: 96%;
  margin: 0 auto;
}
.test-text-font-ssa{
  font-size: 2.5rem;
  font-weight: 700;
  margin-left: 60px;
}

.sensor-show-area-ssa{
  position: relative;
  width: 95%;
  margin: 0 auto;
}

.sensor-show-col1-ssa{
  text-align: center;
  font-size: 2rem;
  margin: auto auto;
}

.sensor-show-col2-ssa div img{
  width: 70%;
}

.sensor-show-row2-col1-ssa{
  text-align: center;
}
.sensor-show-row2-col1-ssa div img{
  width: 70%;
}
.sensor-show-row2-col2-ssa{
  margin: auto auto;
  font-size: 2rem;
  font-weight: 700;
}
.sensor-show-row2-col2-div1-ssa{
  color: #7abaff;
  margin-bottom: 20px;
}
.sensor-show-row2-col2-div2-ssa{
  margin-top: 20px;
}
.sensor-row-distance{
  margin-top: -90px;
}


.sensor-show-busu-main-ssa div{
  margin: 0 auto;
}
.sensor-show-busu-main-ssa div img{
  width: 50%;
}

@media screen and (max-width:480px) {
  .sensor-show-busu-main-ssa{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .sensor-show-busu-main-ssa div{
    width: 50%;
  }
  
}


.slopingside{
  position: absolute;
  left: 25%;
  top: 22%;
  margin-top: 3px;
  border-top-style: dashed;
  border-top-color: #cccccc;
  height:0px;
  width: 600px;
  transform:rotate(165deg);
  -o-transform:rotate(165deg);
  -moz-transform:rotate(165deg);
  -webkit-transform:rotate(165deg);
}
.slopingside1{
  border-top-style: dashed;
  border-top-color: #cccccc;
  margin-top: 3px;
  width: 450px;
  position: absolute;
  left: 33%;
  top: 14%;
}
.slopingside2{
  position: absolute;
  top: 30%;
  left: 25.5%;
  border-left-color: #cccccc;
  border-left-style: dashed;
  height: 70px;
  width: 3px;
}
@media screen and (max-width:480px) {
  .slopingside{
    width: 0;
    height: 0;
  }
  .slopingside1{
    width: 0;
    height: 0;
  }
  .slopingside2{
    width: 0;
    height: 0;
  }
}
.sen-show-new-top{
  margin-top: 150px;
}
.sen-show-new-line{
  width: 4px; height: 100%; margin-left: 30%; border: solid 4px black
}
.sen-show-new-end-width{
  width: 100%;
}
.sen-show-new-end-font1{
  text-align: center; font-size: 1.5rem;font-weight: 700;
}

@media screen and (max-width:480px) {
  .test-text-font-ssa{
    font-size: 2rem;
    margin-left: 0;
    margin-top: 40px;
  }
  .sensor-show-col1-ssa{
    font-size: 1rem;
  } 
  .sensor-show-col2-ssa div img{
    width: 100%;
  }
  .sensor-row-distance{
    margin-top: 10px;
  }
  .sensor-show-row2-col1-ssa div img{
    widows: 100%;
  }
  .sensor-show-row2-col2-ssa{
    font-size: 1.5rem;
    text-align: center;
  }
  .sen-show-new-top{
    margin-top: 40px;
  }
  .sen-show-new-line{
    width: 0;
    height: 0;
    border: #cccccc;
  }
  .sen-show-new-end-width{
    width: 100%;
  }
  .sen-show-new-end-font1{
    font-size: 1.2rem;
  }
}


</style>

