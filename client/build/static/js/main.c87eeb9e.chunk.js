(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(12),r=n.n(i),o=(n(47),n(55)),s=n.n(o),l=n(61),u=n(17),d=n(18),h=n(41),j=n(33),m=n(32),b=n(62),g=n.n(b),f=(n(84),n(119)),x=n(131),p=n(93),O=n(122),v=n(123),y=n(124),w=n(132),C=n(125),k=n(129),I=function(e,t){return new Promise((function(n,a){var c=new FormData;c.append("imageName",e),c.append("imageCrs",t),console.log("sendD",c),fetch("/addimg",{method:"POST",body:c}).then((function(e){200===e.status?e.json().then((function(e){console.log(e),n(e)})).catch((function(e){a(e)})):a(new Error("can not send data to server. response number is :"+e.status))})).catch((function(e){a(e)}))}))},S=n(67),L=n(7),U=n(10),R=n(19),E=n(58),M=n(3),F=E.a.generator(),N=function(e,t,n,a,c,i){return{id:e,x1:t,y1:n,x2:a,y2:c,type:i,roughElement:"line"===i?F.line(t,n,a,c):F.rectangle(t,n,a-t,c-n)}},W=function(e,t,n,a,c){return Math.abs(e-n)<5&&Math.abs(t-a)<5?c:null},D=function(e,t,n){var a=n.type,c=n.x1,i=n.x2,r=n.y1,o=n.y2;if("rectangle"===a){var s=W(e,t,c,r,"tl"),l=W(e,t,i,r,"tr"),u=W(e,t,c,o,"bl"),d=W(e,t,i,o,"br");return s||l||u||d||(e>=c&&e<=i&&t>=r&&t<=o?"inside":null)}var h={x:c,y:r},j={x:i,y:o},m={x:e,y:t},b=B(h,j)-(B(h,m)+B(j,m)),g=W(e,t,c,r,"start"),f=W(e,t,i,o,"end"),x=Math.abs(b)<1?"inside":null;return g||f||x},B=function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},P=function(e,t,n){return n.map((function(n){return Object(R.a)(Object(R.a)({},n),{},{position:D(e,t,n)})})).find((function(e){return null!==e.position}))},T=function(e){var t=function(e){var t=Object(a.useState)(0),n=Object(U.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)([e]),o=Object(U.a)(r,2),s=o[0],l=o[1];return[s[c],function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="function"===typeof e?e(s[c]):e;if(t){var a=Object(L.a)(s);a[c]=n,l(a)}else{var r=Object(L.a)(s).slice(0,c+1);l([].concat(Object(L.a)(r),[n])),i((function(e){return e+1}))}},function(){return c>0&&i((function(e){return e-1}))},function(){return c<s.length-1&&i((function(e){return e+1}))}]}([]),n=Object(U.a)(t,4),c=n[0],i=n[1],r=n[2],o=n[3],s=Object(a.useState)("none"),l=Object(U.a)(s,2),u=l[0],d=l[1],h=Object(a.useState)("line"),j=Object(U.a)(h,2),m=j[0],b=j[1],g=Object(a.useState)(null),f=Object(U.a)(g,2),x=f[0],p=f[1],O=Object(a.useState)({dataImg:"",Img:[],name:""}),v=Object(U.a)(O,2),y=v[0],w=v[1];Object(a.useLayoutEffect)((function(){var e=document.getElementById("canvas");e.getContext("2d").clearRect(0,0,e.width,e.height);var t=E.a.canvas(e);c.forEach((function(e){var n=e.roughElement;return t.draw(n)}))}),[c]),console.log(y.img,y.name),Object(a.useEffect)((function(){var e=function(e){(e.metaKey||e.ctrlKey)&&"z"===e.key&&(e.shiftKey?o():r())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[r,o]);var C=function(e,t,n,a,r,o){var s=N(e,t,n,a,r,o),l=Object(L.a)(c);l[e]=s,i(l,!0)};return console.log("props",e),Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{style:{position:"fixed"},children:[Object(M.jsx)("input",{type:"radio",id:"selection",checked:"selection"===m,onChange:function(){return b("selection")}}),Object(M.jsx)("label",{htmlFor:"selection",children:"Selection"}),Object(M.jsx)("input",{type:"radio",id:"line",checked:"line"===m,onChange:function(){return b("line")}}),Object(M.jsx)("label",{htmlFor:"line",children:"Line"}),Object(M.jsx)("input",{type:"radio",id:"rectangle",checked:"rectangle"===m,onChange:function(){return b("rectangle")}}),Object(M.jsx)("label",{htmlFor:"rectangle",children:"Rectangle"})]}),Object(M.jsxs)("div",{style:{position:"fixed",bottom:0,padding:10},children:[Object(M.jsx)("button",{onClick:r,children:"Undo"}),Object(M.jsx)("button",{onClick:o,children:"Redo"})]}),Object(M.jsx)("div",{className:"canvas-parent",children:Object(M.jsx)("canvas",{id:"canvas",className:"backgrund",style:{backgroundImage:"url(".concat(e.img," )")},width:"220",height:"120",onMouseDown:function(e){var t=e.clientX,n=e.clientY;if("selection"===m){var a=P(t,n,c);if(a){var r=t-a.x1,o=n-a.y1;p(Object(R.a)(Object(R.a)({},a),{},{offsetX:r,offsetY:o})),i((function(e){return e})),"inside"===a.position?d("moving"):d("resizing")}}else{var s=c.length,l=N(s,t,n,t,n,m);i((function(e){return[].concat(Object(L.a)(e),[l])})),p(l),d("drawing")}},onMouseMove:function(e){var t=e.clientX,n=e.clientY;if("selection"===m){var a=P(t,n,c);e.target.style.cursor=a?function(e){switch(e){case"tl":case"br":case"start":case"end":return"nwse-resize";case"tr":case"bl":return"nesw-resize";default:return"move"}}(a.position):"default"}if("drawing"===u){var i=c.length-1,r=c[i],o=r.x1,s=r.y1;C(i,o,s,t,n,m)}else if("moving"===u){var l=x.id,d=x.x1,h=x.x2,j=x.y1,b=x.y2,g=x.type,f=t-x.offsetX,p=n-x.offsetY;C(l,f,p,f+(h-d),p+(b-j),g)}else if("resizing"===u){var O=x.id,v=x.type,y=function(e,t,n,a){var c=a.x1,i=a.y1,r=a.x2,o=a.y2;switch(n){case"tl":case"start":return{x1:e,y1:t,x2:r,y2:o};case"tr":return{x1:c,y1:t,x2:e,y2:o};case"bl":return{x1:e,y1:i,x2:r,y2:t};case"br":case"end":return{x1:c,y1:i,x2:e,y2:t};default:return null}}(t,n,x.position,Object(S.a)(x,["id","type","position"])),w=y.x1,k=y.y1,I=y.x2,L=y.y2;C(O,w,k,I,L,v)}},onMouseUp:function(){if(x){var e=x.id,t=c[e],n=t.id,a=t.type;if("drawing"===u||"resizing"===u){var i=function(e){var t=e.type,n=e.x1,a=e.y1,c=e.x2,i=e.y2;if("rectangle"===t){var r=Math.min(n,c),o=Math.max(n,c);return{x1:r,y1:Math.min(a,i),x2:o,y2:Math.max(a,i)}}return n<c||n===c&&a<i?{x1:n,y1:a,x2:c,y2:i}:{x1:c,y1:i,x2:n,y2:a}}(c[e]),r=i.x1,o=i.y1,s=i.x2,l=i.y2;C(n,r,o,s,l,a)}}d("none"),p(null)},onChange:function(e){w(Object(R.a)(Object(R.a)({},y),{},{img:e.target.value}))},children:"Canvas"})}),Object(M.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("vv",y.name,y.img),I(y.name,y.img).then((function(e){console.log(e),1===e&&alert("exist"),2===e&&alert(" server error 3")})).catch((function(e){console.log(e)}))},encType:"multipart/form-data",children:[Object(M.jsx)("input",{type:"text",className:"form-control",placeholder:"Name *",onChange:function(e){w(Object(R.a)(Object(R.a)({},y),{},{name:e.target.value}))}}),Object(M.jsx)("button",{type:"submit",variant:"contained",children:"Submit"})]})]})},z=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onSelectFile=function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader;t.addEventListener("load",(function(){return a.setState({src:t.result})})),t.readAsDataURL(e.target.files[0])}},a.onImageLoaded=function(e){a.imageRef=e},a.onCropComplete=function(e){a.makeClientCrop(e)},a.onCropChange=function(e,t){a.setState({crop:e})},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.saveBtnClick=a.saveBtnClick.bind(Object(h.a)(a)),a.state={src:null,imageName:"",ImageUrl:[],Imag:[],base64Image:"",crop:{unit:"%",width:30,aspect:16/9}},a}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({imageName:e.target.value})}},{key:"saveBtnClick",value:function(e){var t=this;e.preventDefault(),console.log("vv",this.state.imageName,this.state.base64Image),I(this.state.imageName,this.state.base64Image).then((function(e){console.log(e),1===e&&(t.props.history.push("/GetImages"),alert("exist")),2===e&&alert(" server error 3")})).catch((function(e){console.log(e)}))}},{key:"makeClientCrop",value:function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.imageRef&&t.width&&t.height)){e.next=6;break}return e.next=3,this.getCroppedImg(this.imageRef,t,"newFile.jpeg");case 3:n=e.sent,this.setState({croppedImageUrl:n}),this.setState({ImageUrl:n});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCroppedImg",value:function(e,t,n){var a=this,c=document.createElement("canvas"),i=e.naturalWidth/e.width,r=e.naturalHeight/e.height;c.width=4*t.width,c.height=4*t.height;var o=c.getContext("2d");return console.log("canvas",c),o.drawImage(e,t.x*i,t.y*r,t.width*i,t.height*r,0,0,4*t.width,4*t.height),console.log("crop",this.state.crop),new Promise((function(e,t){c.toBlob((function(t){if(t){var i=c.toDataURL("image/jpeg");a.setState({base64Image:i}),t.name=n,window.URL.revokeObjectURL(a.fileUrl);var r=document.createElement("a");r.download="cropPreview.png",r.href=URL.createObjectURL(t),a.fileUrl=window.URL.createObjectURL(t),a.setState({Imag:r}),e(a.fileUrl)}else console.error("Canvas is empty")}),"image/jpeg")}))}},{key:"render",value:function(){var e=this.state,t=e.crop,n=e.base64Image,a=e.src;return Object(M.jsxs)("div",{children:["  ",Object(M.jsx)(T,{img:n}),Object(M.jsx)(f.a,{maxWidth:"sm",className:"mr-t",children:Object(M.jsxs)(x.a,{sx:{flexGrow:1,overflow:"hidden",px:3},className:"mr-l",children:[Object(M.jsx)(p.a,{sx:{maxWidth:400,my:1,mx:"auto",p:2},children:Object(M.jsx)(O.a,{container:!0,wrap:"nowrap",spacing:2,children:Object(M.jsx)(v.a,{item:!0,xs:4,children:Object(M.jsxs)("label",{htmlFor:"contained-button-file",children:[Object(M.jsx)(y.a,{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",onChange:this.onSelectFile}),Object(M.jsx)(w.a,{className:"App",variant:"contained",component:"span",children:"Upload"})]})})})}),Object(M.jsxs)("form",{onSubmit:this.saveBtnClick,encType:"multipart/form-data",children:[Object(M.jsx)(x.a,{sx:{gridArea:"main"},children:Object(M.jsx)(p.a,{sx:{maxWidth:400,my:1,mx:"auto",p:2},children:Object(M.jsx)(v.a,{container:!0,wrap:"nowrap",spacing:2,children:Object(M.jsx)(v.a,{item:!0,xs:6,children:Object(M.jsx)(C.a,{sx:{height:180},children:a&&Object(M.jsx)(g.a,{src:a,crop:t,ruleOfThirds:!0,onImageLoaded:this.onImageLoaded,onComplete:this.onCropComplete,onChange:this.onCropChange})})})})})}),Object(M.jsx)(p.a,{sx:{maxWidth:400,my:1,mx:"auto",p:2},children:Object(M.jsx)(v.a,{container:!0,wrap:"nowrap",spacing:2,children:Object(M.jsx)(v.a,{item:!0,xs:4,children:n&&Object(M.jsx)("img",{alt:"Crop",style:{maxWidth:"100%"},src:n})})})}),Object(M.jsx)(p.a,{sx:{maxWidth:400,my:1,mx:"auto",p:2},children:Object(M.jsx)(v.a,{container:!0,wrap:"nowrap",spacing:2,children:Object(M.jsx)(v.a,{item:!0,xs:4,children:Object(M.jsx)(k.a,{required:!0,id:"outlined-required",label:"Required",defaultValue:this.state.value,onChange:this.handleChange})})})}),Object(M.jsx)(p.a,{sx:{maxWidth:400,my:1,mx:"auto",p:2},children:Object(M.jsx)(v.a,{container:!0,wrap:"nowrap",spacing:2,children:Object(M.jsx)(v.a,{item:!0,xs:4,children:Object(M.jsx)(w.a,{type:"submit",variant:"contained",children:"Submit"})})})})]})]})})]})}}]),n}(a.Component),q=n(54),K=n(13),X=n(126),Y=n(128),A=n(127);var G=function(e){var t=Object(K.f)(),n=Object(a.useState)({dataImg:"",Img:[]}),c=Object(U.a)(n,2),i=c[0],r=c[1];if(Object(a.useEffect)((function(){new Promise((function(e,t){fetch("/getdata",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(n){200===n.status?n.json().then((function(t){console.log("api",t),e(t)})).catch((function(e){t(e)})):t(new Error("can not send data to server. response number is :"+n.status))})).catch((function(e){t(e)}))})).then((function(e){switch(console.log(e),e){case 2:console.log("server error");break;default:e.map((function(e){r(Object(R.a)(Object(R.a)({},i),{},{img:e.imgs}))})),r(Object(R.a)(Object(R.a)({},i),{},{dataImg:e}))}}))}),[]),console.log(i.img),i.dataImg){var o=i.dataImg.map((function(e){return Object(M.jsx)(f.a,{Key:e.id,maxWidth:"sm",className:"mr-t",children:Object(M.jsx)(O.a,{sx:{maxWidth:200},children:Object(M.jsxs)(f.a,{maxWidth:"sm",children:[Object(M.jsx)(x.a,{children:Object(M.jsx)(X.a,{title:e.title})}),Object(M.jsx)(x.a,{children:Object(M.jsx)(A.a,{cellHeight:100,children:Object(M.jsx)("img",{className:"img-1",src:e.imgs,alt:"img"})})})]})})})}));return Object(M.jsx)(f.a,{maxWidth:"sm",children:Object(M.jsxs)(O.a,{children:[o,Object(M.jsx)(w.a,{type:"submit",variant:"contained",style:{marginLeft:20},children:Object(M.jsx)(Y.a,{component:"button",variant:"body2",onClick:function(){t.push("/")},children:"Home"})}),Object(M.jsx)(w.a,{type:"submit",variant:"contained",style:{marginLeft:20},children:Object(M.jsx)(Y.a,{component:"button",variant:"body2",onClick:function(){t.push("/Canvass")},children:"Draw on the picture"})})]})})}return Object(M.jsx)("div",{children:"Loading ...."})},H=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(M.jsx)(q.a,{children:Object(M.jsxs)(K.c,{children:[Object(M.jsx)(K.a,{path:"/",exact:!0,component:z}),Object(M.jsx)(K.a,{path:"/GetImages",component:G}),Object(M.jsx)(K.a,{path:"/Canvass",component:T})]})})}}]),n}(a.Component);var J=function(){return Object(M.jsx)(c.a.Fragment,{children:Object(M.jsx)(H,{})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(J,{})}),document.getElementById("root")),V()}},[[91,1,2]]]);
//# sourceMappingURL=main.c87eeb9e.chunk.js.map