const app = Vue.createApp({
  data() {
    return {
      title: "Vue.js Bootcamp 1.gün",
      content: " lorem ipsum dolor sit amet",
      eduflow: {
        title: "Müfredat ve açıklamar...",
        target: "_blank",
        url: "https://eduflow.kablosuzkedi.com",
        alt: "mufredat-kablosuz",
      },
      owner: "poaca",
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    changeTitle(ptitle) {
      this.title = ptitle;
    },
    updateCoords(message, event) {
      console.log(message, event.x, event.y);
      this.changeTitle(`${event.x},${event.y}`);
      this.coords = {
        x: event.x,
        y: event.y,
      }
    }
  }
}).mount("#app");