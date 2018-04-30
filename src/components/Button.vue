<template>
    <div class="form-group">
          <button @click="$emit('btnClick')" >
            {{title}}
          </button>
        </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['title']
}
</script>

<style lang="scss" scoped>
 @import "@/assets/styles/settings.scss";

button {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 0;
  color: #a9a8a8;
}

button:focus {
  outline: none;
}

</style>
