const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname() {
      console.log('Runnning again...');
      if (this.name == '') {
        return '';
      } else {
        return this.name + ' ' + 'dummy';
      }
    }
  },
  methods: {
    outputFullname() {
      console.log('Runnning again...');
      if (this.name == '') {
        return '';
      } else {
        return this.name + ' ' + 'dummy';
      }
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
