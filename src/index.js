let growler = new Vue({
  el: '#growler',
  data: {
    appName: 'Hello World!',
    appName2: 'This App Name doesn\'t change',
    someBoundHtml: '<a href="#">Some Link</a>',
    accentColor: {
      color: '#FF6A00'
    },
    headers: {
      fontFamily: 'Verdana',
      margin: 0
    }
  }
});