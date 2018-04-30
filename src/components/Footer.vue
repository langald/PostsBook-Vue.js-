<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 text-center">
          <ul class="footer__menu">
            <li>About</li>
            <li>Contacts</li>
            <li>Help</li>
            <li>&#169; 2018</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/styles/settings.scss";

.footer {
  height: 60px;
  margin-top: 20px;
  overflow: hidden;
  background-color: $gray-dark-color;
  color: $green-color;
}
.footer__menu {
  padding: 15px 0;
  margin: 0;
}
.footer__menu li {
  display: inline-block;
  list-style-type: none;
  width: 20%;
  line-height: 35px;
  font-weight: bold;
  font-size: 16px;
}
.footer__menu li:not(:last-child) {
  cursor: pointer;
}

</style>
