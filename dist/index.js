Object.defineProperty(exports,"__esModule",{value:!0});var EventEmitter=require("events");function _interopDefaultLegacy(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var EventEmitter__default=_interopDefaultLegacy(EventEmitter);function lerp(t,e,s){return(1-s)*t+s*e}function truncate(t,e){return parseFloat(t.toFixed(e))}function getTranslate(t){t=new DOMMatrixReadOnly(window.getComputedStyle(t).getPropertyValue("transform"));return{translateX:t.m41,translateY:t.m42}}class BoundingClientRect{constructor(t){this.element=t,this.update()}update(){var{width:t,height:e,top:s,left:i}=this.element.getBoundingClientRect(),{translateX:t,translateY:e}=(this.width=t,this.height=e,getTranslate(this.element));this.offsetTop=s-e,this.offsetLeft=i-t}}class Scrollbar{constructor(){this.element=document.createElement("div"),this.thumb=document.createElement("div"),this.element.classList.add("lenis-scrollbar"),this.thumb.classList.add("lenis-scrollbar-thumb"),this.element.appendChild(this.thumb),document.body.appendChild(this.element),this.onWindowResize(),window.addEventListener("resize",this.onWindowResize,!1)}update(){this.height=this.thumb.offsetHeight}onWindowResize=()=>{this.windowWidth=Math.min(document.documentElement.clientWidth,window.innerWidth),this.windowHeight=Math.min(document.documentElement.clientHeight,window.innerHeight),this.update()};transform(t){this.thumb.style.transform=`translateY(${t*(this.windowHeight-this.height)+"px"})`}}class Lenis extends EventEmitter__default.default{constructor({wrapper:t,content:e,lerp:s=.1,smooth:i=!0,customScrollbar:o=!0}){super(),this.setMaxListeners(1/0),this.customScrollbar=o,this.smooth=i,this.lerp=s,this.wrapper=t,this.content=e,this.height=this.content.offsetHeight,this.smooth&&(document.body.style.height=this.height+"px"),this.wrapper.setAttribute("data-scroll-wrapper",!0),this.content.setAttribute("data-scroll-content",!0),document.documentElement.classList.add("lenis"),document.documentElement.classList.toggle("lenis-smooth",this.smooth),document.documentElement.classList.toggle("lenis-custom-scrollbar",this.customScrollbar),this.preventTransforms=!1,this.customScrollbar&&(this.scrollbar=new Scrollbar),this.sections=[...document.querySelectorAll("[data-scroll-section]")].map(t=>new BoundingClientRect(t)),this.onWindowResize(),window.addEventListener("scroll",this.onWindowScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("keydown",this.onKeyDown,!1),this.focus=!0,window.addEventListener("focus",this.onFocus,!1),window.addEventListener("blur",this.onBlur,!1)}onKeyDown=t=>{"Tab"===t.key&&this.applyTransforms(!0)};onFocus=()=>{this.focus=!0,this.applyTransforms(!0)};onBlur=()=>{this.focus=!1,this.applyTransforms(!0)};destroy(){document.body.style.removeProperty("height"),window.removeEventListener("scroll",this.onWindowScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("keydown",this.onKeyDown,!1),window.removeEventListener("focus",this.onFocus,!1),window.removeEventListener("blur",this.onBlur,!1),this.wrapper.removeAttribute("data-scroll-wrapper",!0),this.content.removeAttribute("data-scroll-content",!0),document.documentElement.classList.remove("lenis"),document.documentElement.classList.remove("lenis-smooth")}update(){this.height=this.content.offsetHeight,this.smooth&&(document.body.style.height=this.height+"px"),this.scroll={x:window.scrollX,y:window.scrollY},this.lerpedScroll={x:window.scrollX,y:window.scrollY},this.scrollbar&&this.scrollbar.update(),this.sections.forEach(t=>{t.update()}),this.emit("scroll",{scroll:this.scroll,lerpedScroll:this.lerpedScroll}),this.applyTransforms(!0)}onWindowResize=()=>{this.windowWidth=Math.min(document.documentElement.clientWidth,window.innerWidth),this.windowHeight=Math.min(document.documentElement.clientHeight,window.innerHeight),this.update()};onWindowScroll=()=>{this.scroll.x=window.scrollX,this.scroll.y=window.scrollY,!1!==this.focus&&!1!==this.smooth||(this.lerpedScroll.x=this.scroll.x,this.lerpedScroll.y=this.scroll.y,this.applyTransforms(!0))};raf(){let t=!1;truncate(this.lerpedScroll.y,0)===this.scroll.y?(this.lerpedScroll.x=this.scroll.x,this.lerpedScroll.y=this.scroll.y,this.preventTransforms||(t=!0,this.preventTransforms=!0)):(this.lerpedScroll.x=lerp(this.lerpedScroll.x,this.scroll.x,this.lerp),this.lerpedScroll.y=lerp(this.lerpedScroll.y,this.scroll.y,this.lerp),t=!0,this.preventTransforms=!1),t&&(this.emit("scroll",{scroll:this.scroll,lerpedScroll:this.lerpedScroll}),this.applyTransforms())}applyTransforms(i=!1){this.scrollbar&&this.scrollbar.transform(this.progress),!0===this.smooth&&(0<this.sections.length?this.sections.forEach(({offsetTop:t,height:e,element:s})=>{t-=this.lerpedScroll.y;(i||t<this.windowHeight+500&&-500<t+e)&&(s.style.transform=`translate3d(0,${-this.lerpedScroll.y}px,0)`)}):this.content.style.transform=`translate3d(0,${-this.lerpedScroll.y}px,0)`)}get progress(){return this.lerpedScroll.y/(this.height-this.windowHeight)}}exports.default=Lenis;
//# sourceMappingURL=index.js.map