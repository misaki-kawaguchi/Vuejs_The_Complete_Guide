const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullname: ''
    };
  },
  // 特定のdata(データ)やcomputed(算出プロパティ)の状態を監視して、何か変化があった時に予め登録しておいた処理を自動的に実行してくれる仕組み
  watch: {
    // name(newValue, oldValue)
    name(value) {
      if (value === '') {
        this.fullName = '';
      } else {
        this.fullName = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if (value === '') {
        this.fullName = '';
      } else {
        this.fullName = this.name + ' ' + value;
      }
    },
  },
  computed: {
    /* fullname() {
      console.log('Runnning again...');
      if (this.name == '') {
        return '';
      } else {
        return this.name + ' ' + 'dummy';
      }
    } */
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
