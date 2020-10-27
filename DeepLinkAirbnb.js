  Java.perform(function () {
      var BaseRegistry = Java.use("com.airbnb.deeplinkdispatch.DeepLinkEntry");
      BaseRegistry.$init.implementation = function (a,b,c,d) {
      	  console.log(a,b,c,d);
          this.$init(a,b,c,d);
      };
  });