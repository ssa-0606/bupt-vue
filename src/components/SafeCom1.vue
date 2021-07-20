<template>
    <div class="my-safe-com-nom-ssa">
        <div class="safe-com-nom1-ssa">
            <b-container>
                <b-row>
                    <b-col cols="12" md="6">
                        <div class="safe-com-nom1-detail-ssa">
                            <img src="../assets/safe-info01.svg" alt="">
                            <div>虚拟安全屏障</div>
                            <div>LBK-S01 传感器创建一个隐形屏障，当操作员越过它并进入危险区域时进行检测，将机器置于安全状态以保护操作员</div>
                        </div>
                    </b-col>
                    <b-col cols="12" md="6">
                        <div class="safe-com-nom1-detail-ssa">
                            <img src="../assets/safe-info02.svg" alt="">
                            <div>这些传感器也可以在存在光学干扰的情况下工作</div>
                            <div>雷达传感器对环境干扰具有极强的抵抗力。这使得在有烟雾、灰尘、水和加工切屑的环境中工作而不会出现误报成为可能</div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="safe-com-nom2-ssa">
            <b-container>
                <b-row>
                    <b-col cols="12" md="6">
                        <div class="safe-com-nom1-detail-ssa">
                            <img src="../assets/reason4.svg" alt="">
                            <div>SIL2/PLD 证书</div>
                            <div>LBK 传感器是世界上第一个（也是迄今为止唯一一个）获得用于工业安全应用的 SIL2 认证的雷达传感器。</div>
                        </div>
                    </b-col>
                    <b-col cols="12" md="6">
                        <div class="safe-com-nom1-detail-ssa">
                            <img src="../assets/safe-info04.svg" alt="">
                            <div>3D 扫描</div>
                            <div>雷达本身在 3D 中运行，因此可以从体积上保护危险区域。操作员无论如何努力都无法躲避雷达的检测！</div>
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

.my-safe-com-nom-ssa{
    text-align: center;
    margin-top: 30px;
}

.safe-com-nom1-ssa{
    background-color: #f2f2f2;
}
.safe-com-nom2-ssa{
    background-color: #f2f2f2;
    margin-top: 20px;
}


.safe-com-nom1-detail-ssa{
  margin: 50px 0;  
}
.safe-com-nom1-detail-ssa img{
  height: 120px;
  width: auto;
}
.safe-com-nom1-detail-ssa div:nth-child(2){
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 20px 0;
}
.safe-com-nom1-detail-ssa div:nth-child(3){
  margin: auto auto;
  width: 60%;
  font-size: 1.3rem;
}



</style>

