<template>
    <div class="my-sensors-ssa">
        <SensorCom1/>
        <SensorSafeCom/>
<!--        <SafeCom/>-->
        <SensorShowCom/>
        <SensorTab/>

    </div>
</template>

<script>

import SensorCom1 from '@/components/SensorCom1.vue'
import SensorSafeCom from '@/components/SensorSafeCom'
// import SafeCom from '@/components/SafeCom.vue'
import SensorTab from '@/components/SensorTab.vue'
import SensorShowCom from '@/components/SensorShowCom.vue'


export default {
    components: {
        SensorCom1,
        SensorSafeCom,
        // SafeCom,
        SensorTab,
        SensorShowCom
    }
}
</script>



<style>

.my-sensors-ssa{
    margin-top: 55px;  
}




</style>

