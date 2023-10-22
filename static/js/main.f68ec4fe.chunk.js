(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(7),a=n.n(i),s=n(2),r=n(3),o=n(5),c=n(4),m=n(1),l=n.n(m),u=(n(12),n(13),n(0)),p=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={position:0},t.handlePrevButton=function(){var e=t.props,n=e.images,i=e.step,a=e.frameSize,s=t.state.position,r=n.length-a,o=s-i;0===s&&(o=r),o<0&&(o=0),t.setState({position:o})},t.handleNextButton=function(){var e=t.props,n=e.images,i=e.step,a=e.frameSize,s=t.state.position,r=n.length-a,o=s+i;s===r&&(o=0),o>r&&(o=r),t.setState({position:o})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.images,n=t.frameSize,i=t.itemWidth,a=t.animationDuration,s=t.infinite,r=this.state.position,o=r<=0&&!s,c=r>=e.length-n&&!s;return Object(u.jsxs)("div",{className:"Carousel",style:{width:"".concat(n*i,"px"),transition:"".concat(a,"ms")},children:[Object(u.jsx)("ul",{className:"Carousel__list",children:e.map((function(t){return Object(u.jsx)("li",{children:Object(u.jsx)("img",{style:{transform:"translateX(".concat(-r*i,"px)"),transition:"".concat(a,"ms")},src:t,alt:"".concat(e.indexOf(t)),width:i})},t)}))}),Object(u.jsxs)("div",{className:"Carousel__buttons",children:[Object(u.jsx)("button",{type:"button",className:"Carousel__button",disabled:o,onClick:this.handlePrevButton,children:"\u2190 Prev"}),Object(u.jsx)("button",{"data-cy":"next",type:"button",className:"Carousel__button",disabled:c,onClick:this.handleNextButton,children:"Next \u2192"})]})]})}}]),n}(l.a.Component),h=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t.setStep=function(e){t.setState({step:+e.target.value})},t.setItemWidth=function(e){t.setState({itemWidth:+e.target.value})},t.setFrameSize=function(e){t.setState({frameSize:+e.target.value})},t.setAnimationDuration=function(e){t.setState({animationDuration:+e.target.value})},t.setInfinite=function(e){t.setState({infinite:e.target.checked})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.step,i=t.frameSize,a=t.itemWidth,s=t.animationDuration,r=t.infinite;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"App__title","data-cy":"title",children:"Carousel with ".concat(e.length," images")}),Object(u.jsxs)("form",{action:"/",children:[Object(u.jsxs)("label",{className:"form__label",htmlFor:"itemId",children:["Item Width",Object(u.jsx)("input",{type:"number",className:"form__input",name:"itemWidth",id:"itemId",min:130,max:260,value:a,onChange:this.setItemWidth})]}),Object(u.jsxs)("label",{className:"form__label",htmlFor:"frameId",children:["Frame Size",Object(u.jsx)("input",{type:"number",className:"form__input",name:"frameSize",id:"frameId",min:1,max:e.length,step:1,value:i,onChange:this.setFrameSize})]}),Object(u.jsxs)("label",{className:"form__label",htmlFor:"stepId",children:["Step",Object(u.jsx)("input",{type:"number",className:"form__input",name:"step",id:"stepId",min:1,max:e.length,step:1,value:n,onChange:this.setStep})]}),Object(u.jsxs)("label",{className:"form__label",children:["Animation Duration",Object(u.jsx)("input",{type:"number",className:"form__input",name:"animationDuration",id:"animationDuration",min:500,max:3e3,step:500,value:s,onChange:this.setAnimationDuration})]}),Object(u.jsxs)("label",{className:"form__label",children:["Infinite",Object(u.jsx)("input",{type:"checkbox",className:"form__input",name:"infinite",id:"infinite",onChange:this.setInfinite})]})]}),Object(u.jsx)(p,{images:e,step:n,frameSize:i,itemWidth:a,animationDuration:s,infinite:r})]})}}]),n}(l.a.Component),b=h;a.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f68ec4fe.chunk.js.map