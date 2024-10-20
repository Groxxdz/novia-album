new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: false,
      items: [
        {
          img1: " with3.jpg",
          img2: "with1.jpg",
          img3: "with2.jpg",
          title: "WITH U",
          isOpen: false,
        },
        {
          img1: "cute1.jpg",
          img2: "cute2.jpg",
          img3: "cute3.jpg",
          title: "BABY",
          isOpen: false,
        },
        {
          img1: "Pretty1.jpg",
          img2: "pretty2.jpg",
          img3: "pretty3.jpg",
          title: "PRETTY",
          isOpen: false,
        },
        {
          img1: "beuty2.jpg",
          img2: "beuty1.jpg",
          img3: "beuty3.jpg",
          title: "♥️",
          isOpen: false,
        },
        {
          img1: "🫶🏻1.jpg",
          img2: "🫶🏻2.jpg",
          img3: "🫶🏻3.jpg",
          title: "🫶🏻",
          isOpen: false,
        },
      ],
    };
  },
   
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },


    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
