import Vue from "vue";
console.log("Loaded Vue.js", Vue);

var app = new Vue({
  el: "#vue-app",
  data: {
    message: "Hejsan Vue!"
  }
});
