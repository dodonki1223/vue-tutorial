// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
  el: '#exercise',
  data: {
    name: 'dodonki',
    age: 30,
    slimeUri: 'https://cdn-ak.f.st-hatena.com/images/fotolife/j/jake54abc/20170914/20170914112850.png',
  },
  methods: {
    random: function() {
      return Math.random()
    }
  }
})
