<template>
    <div class="sensor-tab-ssa">
        <div class="sensor-tabdiv-ssa">技术细节</div>
        <div class="sensor-mytab-ssa">
             <b-table striped hover fixed :items="items"></b-table>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            items: [
                {产品参数: "雷达调制方式",产品参数值: "FMCW"},
                {产品参数: "感知频率",产品参数值: "60-64GHz 毫米波"},
                {产品参数: "功率",产品参数值: "1.5w"},
                {产品参数: "扫描角度" , 产品参数值: "水平：120°、垂直：120°"},
                {产品参数: "检测距离", 产品参数值: "10m"},
                {产品参数: "反应时间", 产品参数值: "100ms"},
                {产品参数: "尺寸", 产品参数值: "高*宽*深 （单位：mm） 50*38*11 "}
            ]
        }
    }
}
</script>
<style>

.sensor-tab-ssa{
    margin-top: 90px;
}

.sensor-tabdiv-ssa{
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;
}
.sensor-mytab-ssa{
    max-width: 75%;
    margin: 0 auto;
}
@media screen and (max-width:480px){
  .sensor-mytab-ssa {
    max-width: 90%;
    margin: 0 auto;
  }
  .sensor-tabdiv-ssa{
      font-size: 2rem;
  }
}



</style>

