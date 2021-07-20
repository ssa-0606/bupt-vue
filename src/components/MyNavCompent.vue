<template>
    <div class="com-nav">
        <div>
            <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
            <b-navbar-brand href="#">锐达</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">                
                    <b-nav-item to="/" exact exact-active-class="active">首页</b-nav-item>
                    <b-nav-item><div style="width:20px"></div></b-nav-item>
                    <b-nav-item to="/sensors" exact exact-active-class="active">锐达R-01传感器</b-nav-item>
                    <b-nav-item><div style="width:20px"></div></b-nav-item>
                    <b-nav-item to="/control" exact exact-active-class="active">控制单元与应用</b-nav-item>
                    <b-nav-item><div style="width:20px"></div></b-nav-item>
<!--                    <b-nav-item to="/software" exact exact-active-class="active">软件</b-nav-item>-->
<!--                    <b-nav-item><div style="width:20px"></div></b-nav-item>-->
                </b-navbar-nav>
            </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>


<script>
export default {

}
</script>


<style>

.click-{
    width: 100%;
}

</style>
