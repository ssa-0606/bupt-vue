<template>

    <div class="my-safe-ssa">

        <div class="index_safe_text_ssa">
            <span>
                在工业中，您可以像以下场景描述的那样使用锐达毫米波雷达智能保护作业安全
            </span>
<!--            <span>-->
<!--                在工业领域-->
<!--            </span>-->
<!--            <span>-->
<!--                锐达 雷达系统可适应各种工作环境中的多种不同使用情况。以下是一些最常见的使用场景，其中雷达技术显着提高了安全水平。-->
<!--            </span>-->
        </div>

        <b-container fluid>
            <b-row>
                <b-col cols="12" md="2"></b-col>
                <b-col cols="12" md="4" class="safe-img-left">
                    <img src="../assets/safe_img01.png" alt="">
                </b-col>
                <b-col cols="12" md="6" style="background-color:#f5f5f5;">
                    <b-row style="height:100%" >
                        <b-col cols="8" align-self="center">
                            <div class="change-index-ssa1-div">
                                在钢材、木材、玻璃、纺织等工业自动化厂房中警告进入危险区域的工作人员
<!--                                <p>了解 锐达 安全雷达系统如何让操作员在移动机械旁边完全安全地工作</p>-->
                            </div>
                        </b-col>
                        <b-col cols="4" align-self="center"></b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>

        <b-container fluid style="margin-top:60px;">
            <b-row>
                <b-col cols="12" md="6" style="background-color: #f5f5f5;" order="3" order-md="1">
                    <b-row style="height:100%">
                        <b-col cols="4"></b-col>
                        <b-col cols="8" align-self="center">
                            <div class="change-index-ssa1-div">
                                对港口，矿山等室外大型机械进行安全防护，防止运输车辆与设备的危险碰撞
<!--                                <p>了解配备 锐达 安全雷达系统的桥式起重机如何让操作员在起重机完全安全的区域工作</p>-->
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col cols="12" md="4" order="2" order-md="2">
                    <img src="../assets/safe_img02.png" alt="" style="width:100%;margin-left:-15px;">
                </b-col>
                <b-col cols="12" md="2" order="3" order-md="3"></b-col>
            </b-row>
        </b-container>


        <b-container fluid style="margin-top:60px;">
            <b-row>
                <b-col cols="12" md="2"></b-col>
                <b-col cols="12" md="4" class="safe-img-left">
                    <img src="../assets/safe_img03.png" alt="">
                </b-col>
                <b-col cols="12" md="6" style="background-color:#f5f5f5;">
                    <b-row style="height:100%" >
                        <b-col cols="8" align-self="center">
                            <div class="change-index-ssa1-div">
                                安装在自动运输车辆或移动机器人中，使其自动检测运输轨迹的障碍物，避免运输事故
<!--                                <p>了解雷达系统如何即使在高度自动化的环境中也能保证安全</p>-->
                            </div>
                        </b-col>
                        <b-col cols="4" align-self="center"></b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>


    </div>


</template>


<script>
export default {
    
}
</script>



<style>

.my-safe-ssa{
    margin-top: 150px;
}

.safe-img-left img{
    width: 100%;
}


.index_safe_text_ssa{
  margin: 0 auto;
  margin-top: 80px;
  color: black;
  text-align: center;
  margin-bottom: 80px;
  max-width: 60%;

}
.index_safe_text_ssa span:nth-child(1){
  font-size: 2.2rem;
  font-weight: 700;
  display: block;
}
@media screen and (max-width: 480px) {
    .index_safe_text_ssa span:nth-child(1){
        font-size: 1.5rem;
    }
}



.change-index-ssa1-div{
  font-size: 1.5rem;
  font-weight: 6000;
  color: black;
}
@media screen and (max-width:480px) {
    .change-index-ssa1-div{
        font-size: 1.1rem;
    }
}


</style>

