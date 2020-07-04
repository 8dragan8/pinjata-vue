<template>
  <div>
    <h1>Hello World!</h1>
    <p>{{variable}}</p>
    <b-button>
        Button
    </b-button>
  </div>
</template>
<script>
let imgs = require.context('../assets/imgs', true, /\.(png|jpg|jpeg)$/)
console.log(imgs);


export default {
  name: "Pinjata",
  data() {
    return {
      variable: "test1",
      imgs: imgs
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  color: blue;
}
h1 {
  color: red;
}
</style>