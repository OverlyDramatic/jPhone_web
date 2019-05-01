
// 定义变量
var top = document.documentElement.scrollTop;
var nav_item = document.querySelectorAll('.header_nav-item');
var sidebar_item = document.querySelectorAll('.sidebar_item');

// 获取元素
var getElem = function(selector){
  return document.querySelector(selector);
}

var getAllElem = function(selector){
  return document.querySelectorAll(selector);
}

// 获取元素样式
var getCls = function(elem){
  return elem.getAttribute('class');
}

// 设置元素样式
var setCls = function(elem,cls){
  return elem.setAttribute('class',cls);
}

// 为元素添加样式
var addCls = function(elem, cls){
  var baseCls = getCls(elem);
  if(baseCls.indexOf(cls) === -1 ){
    setCls(elem, baseCls+' '+cls);
  }
}

// 为元素删除样式
var delCls = function(elem,cls){
  var baseCls = getCls(elem);
  if(baseCls.indexOf(cls) != -1 ){
    setCls(elem, baseCls.split(cls).join(' ').replace(/\s+/g,' '));
  }
}

// 0、header宽度响应变化
window.onresize = function(){
  var header = document.querySelector('.header');
  header.style.width = '100%';
}


// 1、页面载入完成时初始化样式
var ScreenAnimationElements = {
  '.screen-1' : [
    '.screen-1_heading',
    '.screen-1_phone',
    '.screen-1_shadow'
  ],
  '.screen-2' : [
    '.screen-2_heading',
    '.screen-2_subHeading',
    '.screen-2_phone',
    '.screen-2_pointer-left-1',
    '.screen-2_pointer-left-2',
    '.screen-2_pointer-right'
  ],
  '.screen-3' : [
    '.screen-3_heading',
    '.screen-3_phone',
    '.screen-3_subHeading',
    '.screen-3_info_wrap'
  ],
  '.screen-4' : [
    '.screen-4_heading',
    '.screen-4_phone',
    '.screen-4_subHeading',
    '.screen-4_phone_red_wrap',
    '.screen-4_phone_gold_wrap',
    '.screen-4_phone_silver_wrap',
    '.screen-4_phone_black_wrap'
  ],
  '.screen-5' : [
    '.screen-5_heading',
    '.screen-5_subHeading',
    '.screen-5_phone-game',
    '.screen-5_phone-piano',
    '.screen-5_phone-browser'
  ]
};

// 设置初始化函数
var setScreenAnimationInit = function(screenCls){
  var screen = document.querySelector(screenCls);
  var animateElems = ScreenAnimationElements[screenCls];

  let isSetAnimateClass = false;  // 初始化检查

  // 初始化
  if(isSetAnimateClass === false){
    for(let i=0, l=animateElems.length; i<l; i++){
      let ele = document.querySelector(animateElems[i]);
      let baseCls = ele.getAttribute('class');

      ele.setAttribute('class',baseCls + ' ' + (animateElems[i] + '_animate_init').substr(1));
    }
    isSetAnimateClass = true;
    return ;
  };
}

// 初始化执行
window.onload = function(){
  // 修改header宽度
  var header = document.querySelector('.header');
  header.style.width = '100%';


  for(let i in ScreenAnimationElements){
    setScreenAnimationInit(i);
  }
  // 第一屏加载完成后定时播放
  setScreenAnimationDone('.screen-1');
}

// 播放函数
var setScreenAnimationDone = function(screenCls){
  var screen = document.querySelector(screenCls);
  var animateElems = ScreenAnimationElements[screenCls];
  // 切换init到done
  for(let i=0, l=animateElems.length; i<l; i++){
    let ele = document.querySelector(animateElems[i]);
    let baseCls = ele.getAttribute('class');
    ele.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
  }
  isAnimateDone = true;
  changeActive();
}

// 2、滚动事件触发时触发该页面动画

window.onscroll = function(){
  let top = document.documentElement.scrollTop;

  // header
  if(top>80){
    let header = document.querySelector('.header');
    let header_logo_text = document.querySelector('.header_logo_text');
    let header_nav_item = document.querySelectorAll('.header_nav-item');
    addCls(header,'header_status_black');
    addCls(header_logo_text,'header_logo_status_black');
    for(let i=0, l=header_nav_item.length; i<l; i++){
      addCls(header_nav_item[i],'header_logo_status_black');      
    }
  }
  if(top<=80){
    let header = document.querySelector('.header');
    let header_logo_text = document.querySelector('.header_logo_text');
    let header_nav_item = document.querySelectorAll('.header_nav-item');
    delCls(header,'header_status_black');
    delCls(header_logo_text,'header_logo_status_black');
    for(let i=0, l=header_nav_item.length; i<l; i++){
      delCls(header_nav_item[i],'header_logo_status_black');      
    }
  }
  // 第二屏
  if(top>=300){
    setScreenAnimationDone('.screen-2');
  };
  // 第三屏
  if(top>=1100){
    setScreenAnimationDone('.screen-3');
  };
  // 第四屏
  if(top>=1900){
    setScreenAnimationDone('.screen-4');
  };
  // 第五屏
  if(top>=2700){
    setScreenAnimationDone('.screen-5');
  };

  changeActive();
}

// 更改按钮和sidebar函数
function changeActive(){
  let top = document.documentElement.scrollTop;

  // 更改按钮active

  // 第一屏
  if(top<800 && top>3900){
    delHeaderAndSidebar(nav_item,sidebar_item);
  };
  // 第二屏
  if(top>=800 && top<1600){
    delHeaderAndSidebar(nav_item,sidebar_item);
    addCls(nav_item[0],'header_nav-item_status_active');
    addCls(sidebar_item[0],'sidebar_item_status_active');
  };
  // 第三屏
  if(top>=1600 && top<2400){
    delHeaderAndSidebar(nav_item,sidebar_item);
    addCls(nav_item[1],'header_nav-item_status_active');
    addCls(sidebar_item[1],'sidebar_item_status_active');
  };
  // 第四屏
  if(top>=2400 && top<3000){
    delHeaderAndSidebar(nav_item,sidebar_item);
    addCls(nav_item[2],'header_nav-item_status_active');
    addCls(sidebar_item[2],'sidebar_item_status_active');
  };
  // 第五屏
  if(top>=3000 && top<=3900){
    delHeaderAndSidebar(nav_item,sidebar_item);
    addCls(nav_item[3],'header_nav-item_status_active');
    addCls(sidebar_item[3],'sidebar_item_status_active');
  };
}

function delHeaderAndSidebar(nav_item,sidebar_item){
      // delHeader
      for(var i=0,l=nav_item.length-1; i<l;i++){
        delCls(nav_item[i],'header_nav-item_status_active');
      };
      // delSideBar
      for(var i=0,l=sidebar_item.length; i<l;i++){
        delCls(sidebar_item[i],'sidebar_item_status_active');
      };
}


// home键返回top
const home = document.querySelector('.header_logo');
home.onclick = function(){
  clearInterval(timer1);
  jumpAnimation(0);
}

// 遍历nav按钮
for(let i=0, l=nav_item.length-1;i<l;i++){
  pageJump(nav_item,i);
}
// 遍历sidebar按钮
for(let i=0, l=sidebar_item.length;i<l;i++){
  pageJump(sidebar_item,i);
}

// 点击跳转
function pageJump(list,i){
  let item = list[i];
  item.onclick = function(){
    console.log(i);
    switch(i){
      case 0:
        jumpAnimation(800);
        break;
      case 1:
        jumpAnimation(1600);
        break;
      case 2:
        jumpAnimation(2400);
        break;
      case 3:
        jumpAnimation(3200);
        break;
      default:
        break;
    }
  }
};


// 跳转动画,参数target为像素单位
var timer1;
function jumpAnimation(target){
  let top = document.documentElement.scrollTop;

  let time = 500;  // 动画时间1s
  let step = 15;  //  动画刷新率66.67Hz
  let speed = (target - top) / (time/step);
  timer1 = setInterval(() => {
    if(Math.abs(top-target)<=Math.abs(speed)){
      document.documentElement.scrollTop = document.body.scrollTop = target;
      clearInterval(timer1);
    }else{
      top += speed;
      document.documentElement.scrollTop = document.body.scrollTop = top;
    }
  }, step);
}