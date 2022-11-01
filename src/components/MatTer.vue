<template>
  <div class="containr">
    <div class="slides" :style="{'left':calleft + '%','width':callwidth + '%'}">
      <div v-for="item,index in imgsrc" :key="index" class="slides-item" @click="open(index)">
        <img :src="item.url" alt class="cimg" />
        <transition name="small" enter-active-class="animate__animated animate__backInUp">
          <div class="content1" v-show="small">
            <h2 style="margin-left:18%;text-align:left">{{item.msg}}</h2>
          </div>
        </transition>
        <transition name="huge" enter-active-class="animate__animated animate__bounceInUp">
          <div class="content2" v-show="huge">
            <h2 style="margin-left:18%;text-align:left">{{item.msg}}</h2>
          </div>
        </transition>
        <div class="stand" v-show="stand" @click="skip">
          <h4 style="font-size=50%">了解qq</h4>
        </div>
      </div>
    </div>
    <div class="left" @click="handleleft">
      <img src="https://sanegame.oss-cn-hangzhou.aliyuncs.com/%E5%90%91%E5%B7%A6.png" alt />
    </div>
    <div class="right" @click="handleright">
      <img src="https://sanegame.oss-cn-hangzhou.aliyuncs.com/%E5%90%91%E5%8F%B3.png" alt />
    </div>
  </div>
</template>
    
    <script>
export default {
  nmae: "MatTer",
  data() {
    return {
      small: true,
      huge: false,
      stand: false,
      callwidth: 200,
      calleft: 0,
      imgsrc: [
        {
          url: require("../assets/images/1.png"),
          msg: "BATTLE BREAKERS"
        },
        {
          url: require("../assets/images/2.jpg"),
          msg: "BATTLE BREAKERS"
        },
        {
          url: require("../assets/images/3.jpg"),
          msg: "BATTLE BREAKERS"
        },
        {
          url: require("../assets/images/4.jpg"),
          msg: "BATTLE BREAKERS"
        },
        {
          url: require("../assets/images/5.png"),
          msg: "BATTLE BREAKERS"
        },
        {
          url: require("../assets/images/6.jpg"),
          msg: "BATTLE BREAKERS"
        }
      ]
    };
  },
  methods: {
    fade: function() {
      $("#f").addClass("animated bounceOutLeft");
    },
    handleleft() {
      if (this.callwidth == 200) {
        if (this.calleft < 0) {
          this.calleft = this.calleft + 33.333333333333333;
        } else {
          this.calleft = -99.9;
        }
      } else {
        if (this.calleft < 0) {
          this.calleft = this.calleft + 100;
        } else {
          this.calleft = -500;
        }
      }
    },
    handleright() {
      if (this.callwidth == 200) {
        if (this.calleft >= -99) {
          this.calleft = this.calleft - 33.333333333333333;
        } else {
          this.calleft = 0;
        }
      } else {
        if (this.calleft >= -499) {
          this.calleft = this.calleft - 100;
        } else {
          this.calleft = 0;
        }
      }
    },
    open(index) {
      console.log(this.callwidth);
      if (this.callwidth == 200) {
        this.callwidth = 600;
        this.small = false;
        this.huge = true;
        this.stand = true;
        console.log(index);
        if (index == 0) {
          this.calleft = 0;
        }
        if (index == 1) {
          this.calleft = -100;
        }
        if (index == 2) {
          this.calleft = -200;
        }
        if (index == 3) {
          this.calleft = -300;
        }
        if (index == 4) {
          this.calleft = -400;
        }
        if (index == 5) {
          this.calleft = -500;
        }
      } else {
        this.callwidth = 200;
        this.small = true;
        this.huge = false;
        this.stand = false;
        if (index == 0) {
          this.calleft = 0;
        }
        if (index == 1) {
          this.calleft = 0;
        }
        if (index == 2) {
          this.calleft = -33.333333333333333;
        }
        if (index == 3) {
          this.calleft = -33.333333333333333 * 2;
        }
        if (index == 4) {
          this.calleft = -33.333333333333333 * 3;
        }
        if (index == 5) {
          this.calleft = -33.333333333333333 * 3;
        }
      }
    },
    skip() {
      this.$router.push({ path: "/introDuce" });
    }
  }
};
</script>
    
  <style scode>
.containr {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* z-index: 1; */
}
.cimg {
  width: 1920px;
  height: 1080px;
  border: none;
}
.slides {
  position: relative;
  height: 100%;
  display: flex;
  left: 0%;
  transition: all 0.5s;
}

.slides-item {
  overflow: hidden;
}
.slides-item img {
  filter: brightness(0.7);
  transition: all 0.5s;
}

.slides-item:hover img {
  /* transform: scale(1.05); */
  filter: brightness(1);
}
.left {
  position: absolute;
  top: 50%;
  left: 0%;
  width: 5%;
  height: 5%;
}
.right {
  position: absolute;
  top: 50%;
  left: 95%;
  width: 5%;
  height: 5%;
}
.left img {
  width: 49%;
  height: auto;
  float: right;
  filter: brightness(0.5);
  transition: all 0.5s;
}
.right img {
  width: 49%;
  height: auto;
  filter: brightness(0.5);
  transition: all 0.5s;
}
.left:hover img {
  transform: scale(1.05);
  filter: brightness(1);
}
.right:hover img {
  transform: scale(1.05);
  filter: brightness(1);
}
.content1 {
  position: absolute;
  top: 75%;
  color: white;
  width: 13%;
  height: auto;
  font-family: Brutal_Bold, sans-serif;
  font-size: 2rem;
}
.content2 {
  width: 5%;
  height: auto;
  position: absolute;
  top: 37%;
  margin-left: 7%;
  font-size: 5rem;
  color: white;
}
.stand {
  position: absolute;
  width: 0.7%;
  height: 6%;
  background-color: white;
  background-color: rgba(0, 0, 0, 0);
  border: 1px white solid;
  top: 82%;
  margin-left: 12%;
  transition: all 0.5s;
  text-align: center;
}
.stand h4 {
  position: relative;
  color: #fff;
  line-height: 350%;
  transition: all 0.5s;
}
.stand:hover {
  background-color: white;
  opacity: 0.9;
}
.stand:hover h4 {
  color: black;
}
</style>