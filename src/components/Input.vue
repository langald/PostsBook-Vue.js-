<template>
    <div class="form-group">
        <input type="text"
                class="form-control"
                :value="value"
                :placeholder="placeholder"
                @input="onInput"
        >
    </div>
</template>

<script>
export default {
  name: 'Input',
  props: ['placeholder', 'value'],
  methods: {
    onInput (e) {
      this.$emit('onUpdateValue', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
 @import "@/assets/styles/settings.scss";

 input {
    border-radius: 0;
 }

 input:focus {
    box-shadow: none;
    border-color: #ccc;
 }

</style>
