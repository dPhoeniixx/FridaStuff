  Java.perform(function () {
      var WebView = Java.use("android.webkit.WebView");
      var JSONObject = Java.use("org.json.JSONObject");
      // JSONObject.put.implementation = function(a,b){
      // 	console.log(a,b);
      // 	this.put(a,b);
      // }
      WebView.$init.overload('android.content.Context', 'android.util.AttributeSet', 'int', 'int', 'java.util.Map', 'boolean').implementation = function (a) {
      	  console.log(arguments);
          this.$init.apply(this, arguments);
          this.setWebContentsDebuggingEnabled(true);
          console.log("debug setted");
      };
  });

