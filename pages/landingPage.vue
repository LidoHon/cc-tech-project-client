<template>
  <div class="wrapper">
    <div class="site-logo">My Website</div>
    <div class="navbar">
      <div class="site-info">photos / films</div>
      <div class="site-menu">
        <div class="menu-item">projects</div>
        <div class="menu-item">about</div>
        <div class="menu-item">contact</div>
      </div>
    </div>
    <div class="header">
      <div class="header-left">
        elevated<br /><span>reality</span>
        <div class="link"><a href="#">view showreel</a></div>
      </div>
      <div class="header-right">/all projects</div>
    </div>
    <div class="container">
      <div class="container-items">
        <div class="container-img-wrap" ref="imageWrap">
          <div class="container-img" ref="image"></div>
        </div>
        <div v-for="(item, index) in items" :key="index" class="item">
          <a
            href="#"
            class="container-item"
            :data-img="item.img"
            @mouseenter="venueHover"
            @mouseleave="venueHover"
            @mousemove="moveVenueImage"
          >
            <h3>{{ index + 1 }}</h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

definePageMeta({
  layout: false
});
export default {
  data() {
    return {
      items: [
        { img: "/images/image-one.jpg" },
        { img: "/images/image-two.jpg" },
        { img: "/images/image-three.jpg" },
        { img: "/images/image-four.jpg" },
        { img: "/images/image-five.jpg" },
        { img: "/images/image-six.jpg" },
        { img: "/images/image-seven.jpg" },
        { img: "/images/image-eight.jpg" },
      ],
    };
  },
  methods: {
    moveVenueImage(e) {
      const { clientX: x, clientY: y } = e;
      gsap.to(this.$refs.imageWrap, { x, y });
    },
    venueHover(e) {
      const tl = gsap.timeline();
      if (e.type === "mouseenter") {
        const targetImage = e.target.dataset.img;
        tl.set(this.$refs.image, { backgroundImage: `url(${targetImage})` }).to(
          this.$refs.imageWrap,
          { duration: 0.5, autoAlpha: 1 }
        );
      } else {
        tl.to(this.$refs.imageWrap, { duration: 0.5, autoAlpha: 0 });
      }
    },
    animatePage() {
      const tl = gsap.timeline();
      tl.from(".navbar > div", {
        opacity: 0,
        y: 60,
        duration: 1.6,
        ease: "power2.out",
        delay: 0.6,
      })
        .from(
          ".site-logo",
          { opacity: 0, y: 40, duration: 1.6, ease: "power2.out" },
          "-=1.6"
        )
        .staggerFrom(
          ".site-menu > div",
          1,
          { opacity: 0, y: 60, ease: "power2.out" },
          0.2
        )
        .staggerFrom(
          ".header > div",
          1,
          { opacity: 0, y: 60, ease: "power2.out", delay: -1.4 },
          0.2
        );
    },
  },
  mounted() {
    this.animatePage();
  },
};
</script>

<style scoped>
.wrapper {
  font-family: Arial, sans-serif;
}
.container-img-wrap {
  position: absolute;
  width: 300px;
  height: 300px;
  opacity: 0;
}
.container-img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

body {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}

.container-items {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.item {
  position: relative;
  flex-grow: 1;
  font-family: "Mak";
  font-size: 220px;
  transition: all 300ms ease-in-out;
}

.item:hover {
  flex-grow: 2;
  font-size: 400px;
}

h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
}

img {
  width: 100%;
}

.container-img-wrap {
  position: absolute;
  top: -60rem;
  left: -80px;
  width: 400px;
  height: 500px;
  overflow: hidden;
  pointer-events: none;
  visibility: hidden;
}

.container-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
}

@media (max-width: 900px) {
  .container-items {
    height: 100px;
  }
  .item {
    font-size: 20px;
  }
  .item:hover {
    flex-grow: 1;
    font-size: 20px;
  }
  .container-img-wrap {
    display: none;
  }
  .navbar {
    display: none !important;
  }
}

.site-logo {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Mak";
  font-size: 24px;
  line-height: 100px;
  text-transform: uppercase;
}

.navbar {
  position: fixed;
  width: 100%;
  height: 100px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  line-height: 100px;
}

.site-menu {
  display: flex;
}

.menu-item {
  margin-left: 60px;
}

.header {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 20%;
  padding: 40px;
  text-transform: uppercase;
  font-family: "Mak";
  font-size: 40px;
  z-index: 2;
}

.header-left span {
  font-family: Arial, Helvetica, sans-serif;
}

.link {
  margin: 40px 0;
}

.link a {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #000;
}
</style>
