
<template lang="html">
  <div class="wrap">
    <div class="wrapper">
      <div class="header">
        <a class="logo" href="#"><img src="../../static/images/logo.png" alt=""></a>
        <ul class="navbox">
          <li class=""><a href="#">首页</a></li>
          <li class=""><a href="#">星域CDN</a></li>
          <li class=""><a href="#">个人中心</a></li>
          <li class=""><a href="#">联系我</a></li>
        </ul>
      </div>
      <div class="page_bg">
        <div v-for="(item,index) in pagelist" :key="index" :class="item.page" v-show="index === mark">
          <span class="page_bg_scale"></span>
          <div class="txt_box">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
          </div>
          <canvas :id="item.canvas"></canvas>
        </div>
      </div>
      <div class="btns_wp">
        <a href="#">立即下载</a>
      </div>
      <div class="footer">
        <p>© 2003-2017 Xunlei.com 版权所有</p>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/jquery-3.2.0.min.js";
import "../assets/canvas.js";
import "../assets/canvas2.js";
import "../assets/canvas3.js";

export default {
  data () {
      return {
                mark:0,
                pagelist:[
                  {"page":"page_page_1",
                  'canvas':"canvas1",
                  'title':"新一代迅雷将呈现更多精彩",
                  'description':"从现在开始，你就会感觉到它与以往是如此不同。全新的界面体验，高速的引擎支持，丰富的内容推荐，这一切，都让你的生活更加精彩。"},
                  {"page":"page_page_2",
                  'canvas':"canvas2",
                  'title':"高速引擎可以带你穿越时空",
                  'description':"我们对速度的渴望从未停止，一起来体验速度超频的感觉。它的技术服务会更加稳定，占用更少的资源提供更高的速度支持，这一切只源于我们对技术的无尽追求。"
                  },
                  {"page":"page_page_3",
                  'canvas':"canvas3",
                  'title':"还有另一个自己在这里等你",
                  'description':"当你使用迅雷的同时，也许另一个人也和你一样，在下载、在观看同样的东西。这些只是开始，新一代迅雷使用越久，越能发现它的创新和诚心。"
                  },
                ]
      }
  },
  methods: {
    change () {


      setInterval(() => {
        this.mark++
        if (this.mark >= 3) {
          this.mark = 0
        }
      },5000)

    }
  },
  mounted() {
    this.change()
  }
}
</script>
  <style media="screen">
    *{
      margin: 0;
      padding: 0;
      list-style: none;
      text-decoration: none;
    }
    .wrap,.wrapper{
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #000;
      position: absolute;
      top: 0;
      left: 0;
    }
    .header{
      width: 100%;
      position: absolute;
      box-sizing: border-box;
      top: 0;
      left: 0;
      padding: 20px;
      z-index: 2
    }
    .logo{
      float: left;
    }
    .navbox{
      float: right;
    }
    .navbox li{
      padding: 0 10px;
      float: left;
    }
    .navbox a{
      padding: 0 6px;
      font: 16px/50px 微软雅黑,sans-serif;
      color: #fff;
    }
    .page_bg{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .page_page_1{
      transform-style: preserve-3d;
      perspective: 200px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

    }
    .page_page_2{
      transform-style: preserve-3d;
      perspective: 200px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:radial-gradient(circle, rgb(0, 0, 0), rgb(25, 25, 112,0.3))
    }
    .page_page_3,.page_page_4{
      transform-style: preserve-3d;
      perspective: 200px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image:url("../../static/images/page3_bg.jpg");
      background-size: 100%;
    }

    .page_page_1 .page_bg_scale{
      /*display: none;*/
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2500px;
      height: 1600px;
      margin: -800px 0 0 -1250px;
      background: url('../../static/images/page1_bg.jpg') no-repeat center center;
      transform-origin: 50% 50%;
      animation: imgSmall 5s linear infinite;
    }
    @-webkit-keyframes imgSmall{
      0%{
          transform:rotate(0deg);
      }
      90%{
          transform:rotate(-10deg);
      }
      99%{
        transform: translate3d(0,100px,300px);
        opacity: 1;
      }
      100%{
        opacity: 0;
      }
    }
    .page_page_3 .page_bg_scale{
      /*display: none;*/
      position: absolute;
      width: 100%;
      height: 100%;
      background: url('../../static/images/star.png') no-repeat center center;
      background-size: 5%;
      transform-origin: 50% 50%;
      animation: imgSmall3 5s linear infinite;
    }
    @-webkit-keyframes imgSmall3{
      75%{
        background-size: 60%;
      }
      100%{
        background-size: 60%;
      }
    }
    /*.page_page_1 .page_bg_scale::before{
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2500px;
      height: 1600px;
      margin: -800px 0 0 -1250px;
      background: url('../../static/images/page1_bg.jpg') no-repeat center center;
      animation: imgSmall 5s linear infinite;
      transform-origin: center center;
    }*/
    #canvas1,#canvas2,#canvas3,#canvas4{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      background-color: rgba(255, 0, 0, 0);
    }
    .txt_box{
      width: 100%;
      z-index: 5;
      position: absolute;
      bottom: 140px;
      left: 0;
      color: #fff;
      transition: opacity .8s;
    }
    .txt_box h2{
      text-align: center;
      font-size: 30px;
      font-weight: lighter;
      line-height: 40px;
    }
    .txt_box p{
      font-size: 14px;
      line-height: 24px;
      width: 800px;
      margin: 10px auto 0;
      font-weight: lighter;
    }
    .btns_wp{
      width: 100%;
      bottom: 70px;
      z-index: 20;
      position: absolute
    }
    .btns_wp a{
      display: block;
      margin: 26px auto 0;
      width: 156px;
      height: 38px;
      text-align: center;
      line-height: 34px;
      border: 2px solid #fff;
      font-size: 18px;
      color: #fff;
      text-decoration: none;
    }
    .footer{
      position: absolute;
      bottom: 12px;
      width: 100%;
      left: 0;
      z-index: 99;
    }
    .footer p{
      text-align: center;
      font-size: 14px;
      color: #4c4c4c;
    }
  </style>
