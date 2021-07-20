<template>
    <div class="my-reason-ssa">
        <div class="reason-font-div-ssa">
            <div>为什么选择安全雷达系统</div>
        </div>
        <div class="reason-container-ssa">
            <d-container>
                 <b-row class="reason-reason-ssa">
                    <b-col cols="12" sm="6" md="6" lg="3">
                        <div class="reason-detail-ssa">
                            <img src="../assets/reason1.svg" alt="">
                            <div>
                                锐达 雷达系统可抵抗因烟雾、灰尘、刨花、喷雾或加工残留物引起的任何干扰。
                            </div>
                        </div>
                    </b-col>
                    <b-col cols="12" sd="6" md="6" lg="3">
                        <div class="reason-detail-ssa">
                            <img src="../assets/reason2.svg" alt="">
                            <div>
                                传感器可以在高灵敏度下工作，甚至可以检测到人呼吸的微动，以防止机器意外重启。
                            </div>
                        </div>
                    </b-col>
                    <b-col cols="12" sd="6" md="6" lg="3">
                        <div class="reason-detail-ssa">
                            <img src="../assets/reason3.svg" alt="">
                            <div>
                                该雷达本质上以 3D 方式读取空间，提供危险区域的立体覆盖。
                            </div>
                        </div>
                    </b-col>
                    <b-col cols="12" sd="6" md="6" lg="3">
                        <div class="reason-detail-ssa">
                            <img src="../assets/reason4.svg" alt="">
                            <div>
                                LBK 系统通过了 SIL2 认证，这是工业领域最先进的安全级别。
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </d-container>
        </div>
        <div class="reason-big-pic-ssa">
            <img src="../assets/reason5.png" alt="">
        </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style>

.my-reason-ssa{
margin-top: 100px;
background-blend-mode: multiply;
background-color: rgba(0, 0, 0, .6);
background-image: url("../assets/safe-back.jpg");
background-size: cover;
background-position: center;
/* height: 100vh; */
}

.reason-font-div-ssa{
    color: azure;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    padding-top: 80px;
}

.reason-container-ssa{
    max-width: 70%;
    margin: 0 auto;
    margin-top: 80px;
}

.reason-reason-ssa{
    text-align: center;
}
.reason-detail-ssa img{
    height: 100px;
}
.reason-detail-ssa div{
    color: antiquewhite;
    margin-top: 25px;
}
.reason-big-pic-ssa{
    max-width: 50%;
    margin: 0 auto;
    margin-top: 100px;
}
.reason-big-pic-ssa img{
    max-width: 100%;
    height: auto;
    margin-bottom: -50px;
}


</style>



