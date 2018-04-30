<template>
<div class="header">
    <div class="container">
        <div class="row">
            <div class="col-xs-10">
                <div class="header__icon">
                    <i class="fa fa-camera-retro"></i>
                </div>
                <div class="header__title">PostsBook</div>
            </div>
            <div class="col-xs-2 text-right">
                <div class="header__icon">
                    <i class="fas fa-sign-out-alt"></i>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
 @import "@/assets/styles/settings.scss";

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1030;
    height: 60px;
    overflow: hidden;
    margin-bottom: 20px;
    padding: 10px;
    background-color: $green-color;
    color: $gray-dark-color;
}

.header__icon {
    cursor: pointer;
    display: inline-block;
    font-size: 32px;
}

.header__title {
    display: inline-block;
    font-size: 32px;
    padding-left: 20px;
}

</style>
