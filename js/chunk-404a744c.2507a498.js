(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-404a744c"],{"31a6":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home-four"},[s("Header"),s("Slider"),s("div",{staticClass:"shane_tm_section",attrs:{id:"about"}},[s("div",{staticClass:"shane_tm_about"},[s("div",{staticClass:"container"},[s("About")],1)])]),s("div",{staticClass:"shane_tm_section",attrs:{id:"portfolio"}},[s("div",{staticClass:"shane_tm_portfolio"},[s("Portfolio")],1)]),s("Skills"),s("Video"),s("div",{staticClass:"shane_tm_section"},[s("div",{staticClass:"shane_tm_partners"},[s("div",{staticClass:"container"},[s("div",{staticClass:"partners_inner"},[s("Brand")],1)])])]),s("div",{staticClass:"shane_tm_section"},[s("div",{staticClass:"shane_tm_testimonials"},[s("div",{staticClass:"container"},[s("div",{staticClass:"testimonials_inner"},[s("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:50},expression:"{ delay: 50 }"}],staticClass:"left"},[e._m(0)]),s("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:150},expression:"{ delay: 150 }"}],staticClass:"right"},[s("Testimonial")],1)])])])]),s("div",{staticClass:"shane_tm_section",attrs:{id:"news"}},[s("div",{staticClass:"shane_tm_news"},[s("div",{staticClass:"container"},[e._m(1),s("News")],1)])]),s("CallToActions"),s("Footer")],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"shane_tm_title"},[s("span",[e._v("Testimonials")]),s("h3",[e._v("What clients say about my portfolio template")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"shane_tm_title"},[s("span",[e._v("News")]),s("h3",[e._v("Latest News")])])}],r=s("0418"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"slider-four"},[s("div",{staticClass:"shane_tm_hero",attrs:{id:"home","data-style":"one"}},[s("vue-particles",{attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:30,shapeType:"circle",particleSize:6,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:180,moveSpeed:6,hoverEffect:!0,hoverMode:"repulse",clickEffect:!1,clickMode:"push"}}),s("div",{staticClass:"background"},[s("div",{staticClass:"image",style:{backgroundImage:"url("+e.sliderHero+")"}})]),s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[s("div",{staticClass:"name_wrap"},[s("h3",[s("span",[e._v("Khoi Phan")]),e._v(" "),s("br"),s("span",{staticClass:"typed-text loop-text"},[e._v(e._s(e.typeValue))]),s("span",{staticClass:"cursor",class:{typing:e.typeStatus}},[e._v(" ")]),s("span",{staticClass:"overlay_effect"})])]),e._m(0),e._m(1)])])],1)])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"job_wrap"},[s("span",{staticClass:"job"},[e._v(" based in Ho Chi Minh City. "),s("span",{staticClass:"overlay_effect"})])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a",{staticClass:"white-fill-bg btn-outline btn-medium",attrs:{href:"#portfolio"}},[e._v(" SEE PORTFOLIO "),s("span",{staticClass:"overlay_effect"})])}],c={data(){return{sliderHero:s("be65"),typeValue:"",typeStatus:!1,typeArray:["Front End Developer."],typingSpeed:200,erasingSpeed:100,newTextDelay:2e3,typeArrayIndex:0,charIndex:0}},methods:{typeText(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))}},created(){setTimeout(this.typeText,this.newTextDelay+200)}},o=c,d=(s("e0d3"),s("2877")),v=Object(d["a"])(o,l,n,!1,null,"2eedb000",null),p=v.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about_inner"},[a("div",{staticClass:"left"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:s("bb18"),alt:"placeholder"}}),a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:20},expression:"{ delay: 20 }"}],staticClass:"main",style:{backgroundImage:"url("+e.aboutImg+")"}})])]),a("div",{staticClass:"right"},[a("div",{staticClass:"shane_tm_title"},[a("span",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:20},expression:"{ delay: 20 }"}]},[e._v("About Me")]),a("h3",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:40},expression:"{ delay: 40 }"}]},[e._v(" Creative Independent Web Developer based in USA ")])]),a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:60},expression:"{ delay: 60 }"}],staticClass:"text"},[a("p",[e._v(" I'm Creative Independent Web Developer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration. ")])]),a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal",value:{delay:80},expression:"{ delay: 80 }"}],staticClass:"shane_tm_button"},[a("a",{attrs:{href:e.cv,download:""}},[e._v(" Download CV ")])])])])},u=[],y={data(){return{aboutImg:s("332c"),cv:s("9a1e")}}},m=y,_=Object(d["a"])(m,h,u,!1,null,null,null),f=_.exports,C=s("ce59"),b=s("cabd"),x=s("33d8"),w=s("d212"),g=s("b953"),I=s("1573"),T=s("f6cd"),S=s("fd2d"),A={components:{Header:r["a"],Slider:p,About:f,Portfolio:C["a"],Skills:b["a"],Video:x["a"],Brand:w["a"],Testimonial:g["a"],News:I["a"],CallToActions:T["a"],Footer:S["a"]}},k=A,E=Object(d["a"])(k,a,i,!1,null,"a405bd20",null);t["default"]=E.exports},"332c":function(e,t,s){e.exports=s.p+"img/avatar.673994ff.jpg"},be65:function(e,t,s){e.exports=s.p+"img/2.efdba046.jpg"},d3fd:function(e,t,s){},e0d3:function(e,t,s){"use strict";s("d3fd")}}]);
//# sourceMappingURL=chunk-404a744c.2507a498.js.map