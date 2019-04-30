var ScreenAnimateElements = {
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
}

function setScreenAnimate(screenCls){
  let screen = document.querySelector(screenCls); // 获取当前屏元素
  let animateElements = ScreenAnimateElements[screenCls];

  let isSetAnimateClass = false;  // 初始化检查

  let isAnimateDone = false;  // 检查状态是否为done

  screen.onclick = function(){
    // 初始化
    if(isSetAnimateClass === false){
      for(let i=0, l=animateElements.length; i<l; i++){
        let ele = document.querySelector(animateElements[i]);
        let baseCls = ele.getAttribute('class');

        ele.setAttribute('class',baseCls + ' ' + (animateElements[i] + '_animate_init').substr(1));
      }
      isSetAnimateClass = true;
      return ;
    }else{
      if(isAnimateDone === false){
        // 切换init到done
        for(let i=0, l=animateElements.length; i<l; i++){
          let ele = document.querySelector(animateElements[i]);
          let baseCls = ele.getAttribute('class');
  
          ele.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
        }
        isAnimateDone = true;
        return ;
      }else{
        // 切换done到init
        for(let i=0, l=animateElements.length; i<l; i++){
          let ele = document.querySelector(animateElements[i]);
          let baseCls = ele.getAttribute('class');
  
          ele.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
        }
        isAnimateDone = false;
        return ;
      }

    }

  }
}

for(let k in ScreenAnimateElements){
  setScreenAnimate(k);
};