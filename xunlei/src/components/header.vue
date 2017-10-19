
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
        <div class="page_page_1">
          <span class="page_bg_scale"></span>
          <div class="txt_box">
            
          </div>
          <canvas id="canvas"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/canvas.js";
export default {
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
      100%{
        transform: translate3d(0,100px,200px);
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
    #canvas{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      background-color: rgba(255, 0, 0, 0);
    }
  </style>
