<template>
  <div class="inTro_box">
    <div class="inTro">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#121212"
        text-color="#fff"
        active-text-color="#d351e1"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">浏览</el-menu-item>
      </el-menu>
      <div class="hope">
        愿望清单
        <a href class="ywqd">1</a>
      </div>
      <el-input placeholder="请输入内容" v-model="input4">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="inTro_video">
      <ul class="menu_yh">
        <li v-for="item,index in lidata" :key="index">
          <img :src="item.imgurl" alt />
          <p>{{item.text}}</p>
        </li>
      </ul>
      <div class="video_yh">
        <pic :pics="pics" ref="pic"></pic>
      </div>
    </div>
  </div>
</template>
    
    <script>
import pic from "../../../components/pic.vue";
export default {
  name: "inTro",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      input4: "",
      lidata: [
        {
          imgurl: require("../../../assets/images/it1.png"),
          text: "BATTLE BREAKERS"
        },
        {
          imgurl: require("../../../assets/images/it1.png"),
          text: "BATTLE BREAKERS"
        },
        {
          imgurl: require("../../../assets/images/it1.png"),
          text: "BATTLE BREAKERS"
        },
        {
          imgurl: require("../../../assets/images/it1.png"),
          text: "BATTLE BREAKERS"
        },
        {
          imgurl: require("../../../assets/images/it1.png"),
          text: "BATTLE BREAKERS"
        },
        {
          imgurl: require("../../../assets/images/it1.png"),
          text: "BATTLE BREAKERS"
        }
      ],
      pics: [
        {
          url: require("../../../assets/images/1.png"),
          msg: "BATTLE BREAKERS"
        },
        {
          url: require("../../../assets/images/2.jpg"),
          msg: "BATTLE BREAKERS"
        },
        {
          url: require("../../../assets/images/3.jpg"),
          msg: "BATTLE BREAKERS"
        },
        {
          url: require("../../../assets/images/4.jpg"),
          msg: "BATTLE BREAKERS"
        },
        {
          url: require("../../../assets/images/5.png"),
          msg: "BATTLE BREAKERS"
        },
        {
          url: require("../../../assets/images/6.jpg"),
          msg: "BATTLE BREAKERS"
        }
      ]
    };
  },
  mounted() {
    this.set();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    set() {
      console.log(this.$refs.pic);
    }
  },
  components: {
    pic
  }
};
</script>
    
<style lang="less" scoped>
.inTro_box {
  width: cale(100%-26%);
  height: 100%;
  background-color: rgb(18, 18, 18);
  padding: 0 13%;
  .inTro {
    color: var(--text-color1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 20px;
  }
}
/deep/.el-menu.el-menu--horizontal {
  border-bottom: none !important;
  width: 70%;
}
/deep/.el-menu-item:hover {
  background-color: rgb(195, 195, 195) !important;
}
/deep/.el-input {
  width: 221px;
  height: 45px;
}
/deep/.el-input__inner {
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
}
.hope {
  color: var(--bg-color-gray);
  transition: all 0.3s;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: all;
  position: relative;
  .ywqd {
    position: absolute;
    top: -14px;
    right: -19px;
    width: 20px;
    height: 15px;
    border-radius: 15px;
    background-color: rgb(243, 101, 172);
    border: 1px solid white;
    text-align: center;
    line-height: 15px;
    color: var(--bg-color-white);
    font-size: 14px;
  }
}
.hope:hover {
  color: var(--bg-color-white);
}
.inTro_video {
  display: flex;
  .menu_yh {
    width: 19%;
    li {
      display: flex;
      align-items: center;
      border-radius: 1em;
      transition: all 0.5s linear;
      margin-top: 10px;
      img {
        transition: all 0.5s linear;
        width: 4em;
        border-radius: 0.4em;
        margin-bottom: 14px;
        margin-top: 14px;
        margin-left: 14px;
      }
      p {
        color: var(--text-color1);
        text-indent: 1em;
      }
    }
    li:hover {
      transition: all 0.5s;
      background: #303133;
      img {
        width: 5em;
        transition: all 0.5s;
      }
    }
  }
  .video_yh {
    width: 81%;
  }
}
</style>