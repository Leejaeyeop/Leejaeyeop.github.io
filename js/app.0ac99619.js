(function(){"use strict";var e={2556:function(e,t,i){var s=i(9242),n=i(3396);const a=(0,n._)("img",{class:"background",src:"background_sky.jpg",style:{position:"absolute"}},null,-1);function o(e,t,i,s,o,r){const c=(0,n.up)("Loading"),l=(0,n.up)("Main");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,s.isLoaded?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(c,{key:0})),(0,n.Wm)(l)],64)}var r=i(3781),c=i(7327),l=i(714),h=i(9614),d=i(8829),u=i(2575),Z=(i(7658),i(1114)),m=i(65),p=(0,m.MT)({state:{loadedPercent:0,initCompleted:!1},getters:{loadedPercent(e){return e.loadedPercent},initCompleted(e){return e.initCompleted}},mutations:{changeLoadedPercent(e,t){e.loadedPercent=t},changeInitCompleted(e,t){e.initCompleted=t}},actions:{setLoadedPercent(e,t){e.commit("changeLoadedPercent",t)},setInitCompleted(e,t){e.commit("changeInitCompleted",t)}}}),v=i(9469),g=i(4543),w=i(2519);class b{constructor(){this.subscribers={}}subscribe(e,t){this.subscribers[e]||(this.subscribers[e]=[]),this.subscribers[e].push(t)}unsubscribe(e,t){this.subscribers[e]&&(this.subscribers[e]=this.subscribers[e].filter((e=>e!==t)))}publish(e,t){this.subscribers[e]&&this.subscribers[e].forEach((e=>e(t)))}}const y=new b;var k=i(4161);function f(e){let t=document.getElementById("pdfUpload");t.click();const i=function(){if(t.files.length>0){let s=t.files[0];e(),y.publish("beginScene3",s),t.removeEventListener("change",i)}};t.addEventListener("change",i)}var _=new WeakMap,P=new WeakMap,S=new WeakMap,M=new WeakMap,B=new WeakMap,x=new WeakMap,L=new WeakMap,E=new WeakMap,W=new WeakMap,I=new WeakMap,T=new WeakMap,C=new WeakMap,A=new WeakMap,O=new WeakMap,F=new WeakMap;class R{constructor(e,t,i,s){(0,l.Z)(this,_,{writable:!0,value:void 0}),(0,l.Z)(this,P,{writable:!0,value:void 0}),(0,l.Z)(this,S,{writable:!0,value:void 0}),(0,l.Z)(this,M,{writable:!0,value:void 0}),(0,l.Z)(this,B,{writable:!0,value:void 0}),(0,l.Z)(this,x,{writable:!0,value:void 0}),(0,l.Z)(this,L,{writable:!0,value:void 0}),(0,l.Z)(this,E,{writable:!0,value:void 0}),(0,l.Z)(this,W,{writable:!0,value:void 0}),(0,l.Z)(this,I,{writable:!0,value:void 0}),(0,l.Z)(this,T,{writable:!0,value:void 0}),(0,l.Z)(this,C,{writable:!0,value:void 0}),(0,l.Z)(this,A,{writable:!0,value:void 0}),(0,l.Z)(this,O,{writable:!0,value:void 0}),(0,l.Z)(this,F,{writable:!0,value:void 0}),this.scene=e,(0,u.Z)(this,_,t),(0,u.Z)(this,P,i),(0,u.Z)(this,S,s),this.init()}init(){const e=document.getElementById("load"),t=new w.cp(e);(0,u.Z)(this,M,t),t.position.set(-.2,1,3),t.rotation.set(0,Math.PI/4,0),t.scale.set(.004,.004,.006);const i=document.getElementById("arrow-load"),s=new w.cp(i);(0,u.Z)(this,B,s),s.position.set(-.5,1.9,3.4),s.rotation.set(-Math.PI/3,Math.PI/3,0),s.scale.set(.01,.01,.01);const n=document.getElementById("start"),a=new w.cp(n);(0,u.Z)(this,x,a),a.position.set(.45,.8,.7),a.scale.set(.004,.004,.006),a.lookAt((0,d.Z)(this,_).position);const o=document.getElementById("arrow-start"),r=new w.cp(o);(0,u.Z)(this,L,r),r.position.set(.45,1.1,.7),r.rotation.set(0,0,-Math.PI/2),r.scale.set(.008,.008,.008),(0,d.Z)(this,S).render(this.scene,(0,d.Z)(this,_));const c=document.getElementById("desk_frame_front");(0,u.Z)(this,E,c);const l=new w.cp(c);(0,u.Z)(this,W,l),l.position.set(.35,.45,1),l.scale.set(.13,.07,.1);const h=document.getElementById("desk_frame_top");(0,u.Z)(this,I,h);const Z=new w.cp(h);(0,u.Z)(this,T,Z),Z.position.set(.35,.6,.7),Z.rotation.set(Math.PI/2,0,0),Z.scale.set(.13,.06,.1);const m=document.getElementById("bookshelf_frame_front");(0,u.Z)(this,C,m);const p=new w.cp(m);(0,u.Z)(this,A,p),p.position.set(-.18,1,3),p.rotation.set(0,Math.PI/4,0),p.scale.set(.05,.15,.1);const v=document.getElementById("bookshelf_frame_side");(0,u.Z)(this,O,v);const g=new w.cp(v);(0,u.Z)(this,F,g),g.position.set(-.44,1,3),g.rotation.set(0,-Math.PI/4,0),g.scale.set(.03,.15,.1),this.setHoveringListener(),this.addScene();const b=.1,y=2e3;let k=Date.now();const f=()=>{requestAnimationFrame(f);const e=Date.now()-k,t=e%y/y,i=b*(1-Math.cos(2*t*Math.PI))/2;s.position.z=3.4-i,s.position.y=1.9-i,r.position.y=1.1-i,(0,d.Z)(this,S).render(this.scene,(0,d.Z)(this,_))};f()}animateCamera(e,t,i,s,n,a){const o=performance.now(),r=e.clone(),c=t.clone(),l=c.clone().sub(r),h=i.clone(),u=s.clone(),m=new Z._fP,p=e=>{const t=e-o,i=t/n;if(i<1){const e=a(i),t=r.clone().add(l.clone().multiplyScalar(e));m.slerpQuaternions(h,u,e),(0,d.Z)(this,_).position.copy(t),(0,d.Z)(this,_).setRotationFromQuaternion(m),(0,d.Z)(this,P).render(this.scene,(0,d.Z)(this,_)),requestAnimationFrame(p)}else(0,d.Z)(this,_).position.copy(c),(0,d.Z)(this,_).setRotationFromQuaternion(u),(0,d.Z)(this,P).render(this.scene,(0,d.Z)(this,_))};requestAnimationFrame(p)}easeInOutQuad(e){return e<.5?2*e*e:(4-2*e)*e-1}addScene(){this.scene.add((0,d.Z)(this,M)),this.scene.add((0,d.Z)(this,B)),this.scene.add((0,d.Z)(this,A)),this.scene.add((0,d.Z)(this,F)),this.scene.add((0,d.Z)(this,x)),this.scene.add((0,d.Z)(this,L)),this.scene.add((0,d.Z)(this,W)),this.scene.add((0,d.Z)(this,T))}removeScene(){this.scene.remove((0,d.Z)(this,M)),this.scene.remove((0,d.Z)(this,B)),this.scene.remove((0,d.Z)(this,A)),this.scene.remove((0,d.Z)(this,F)),this.scene.remove((0,d.Z)(this,x)),this.scene.remove((0,d.Z)(this,L)),this.scene.remove((0,d.Z)(this,W)),this.scene.remove((0,d.Z)(this,T))}setHoveringListener(){(0,d.Z)(this,C).addEventListener("mouseenter",(()=>{let e=(0,d.Z)(this,M).element.querySelector("#circle");e.className="circle"})),(0,d.Z)(this,C).addEventListener("mouseleave",(()=>{let e=(0,d.Z)(this,M).element.querySelector("#circle");e.className=""})),(0,d.Z)(this,O).addEventListener("mouseenter",(()=>{let e=(0,d.Z)(this,M).element.querySelector("#circle");e.className="circle"})),(0,d.Z)(this,O).addEventListener("mouseleave",(()=>{let e=(0,d.Z)(this,M).element.querySelector("#circle");e.className=""})),(0,d.Z)(this,E).addEventListener("mouseenter",(()=>{let e=(0,d.Z)(this,x).element.querySelector("#circle");e.className="circle"})),(0,d.Z)(this,E).addEventListener("mouseleave",(()=>{let e=(0,d.Z)(this,x).element.querySelector("#circle");e.className=""})),(0,d.Z)(this,I).addEventListener("mouseenter",(()=>{let e=(0,d.Z)(this,x).element.querySelector("#circle");e.className="circle"})),(0,d.Z)(this,I).addEventListener("mouseleave",(()=>{let e=(0,d.Z)(this,x).element.querySelector("#circle");e.className=""})),(0,d.Z)(this,E).addEventListener("click",(()=>{this.zoomCameraToLook(),y.publish("beginScene2")})),(0,d.Z)(this,I).addEventListener("click",(()=>{y.publish("beginScene2")})),(0,d.Z)(this,C).addEventListener("click",(()=>{f(this.removeScene.bind(this))})),(0,d.Z)(this,O).addEventListener("click",(()=>{const e=(0,d.Z)(this,_).position,t=new Z.Pa4(.443,1.103,.702),i=(new Z._fP).setFromEuler((0,d.Z)(this,_).rotation),s=(new Z._fP).setFromEuler(new Z.USm(-1.561,0,38e-5)),n=2e3;this.animateCamera(e,t,i,s,n,this.easeInOutQuad),y.publish("beginScene2")}))}zoomCameraToLook(){const e=(0,d.Z)(this,_).position,t=new Z.Pa4(.443,1.103,.702),i=(new Z._fP).setFromEuler((0,d.Z)(this,_).rotation),s=(new Z._fP).setFromEuler(new Z.USm(-1.561,0,38e-5)),n=2e3;this.animateCamera(e,t,i,s,n,this.easeInOutQuad)}}i(2801),i(3767),i(8585),i(8696);const j=(e,t)=>{const i=t.clipAction(e);i.setLoop(Z.jAl),i.clampWhenFinished=!0,i.enabled=!0,i.paused=!1,i.timeScale=1,i.reset(),i.play()},q=(e,t)=>{let i=t.clipAction(e);i.paused=!1,i.time=i.getClip().duration,i.timeScale=-1,i.setLoop(Z.jAl),i.clampWhenFinished=!0,i.enabled=!0,i.play()};var N=new WeakMap,z=new WeakMap,D=new WeakMap,U=new WeakMap,H=new WeakMap,K=new WeakMap,Q=new WeakMap,G=new WeakMap,Y=new WeakMap,J=new WeakMap,X=new WeakMap,V=new WeakMap,$=new WeakMap,ee=new WeakMap;class te{constructor(e,t,i,s,n){(0,c.Z)(this,"meshes",{}),(0,l.Z)(this,N,{writable:!0,value:0}),(0,l.Z)(this,z,{writable:!0,value:.01}),(0,l.Z)(this,D,{writable:!0,value:null}),(0,l.Z)(this,U,{writable:!0,value:null}),(0,l.Z)(this,H,{writable:!0,value:void 0}),(0,l.Z)(this,K,{writable:!0,value:void 0}),(0,l.Z)(this,Q,{writable:!0,value:void 0}),(0,l.Z)(this,G,{writable:!0,value:void 0}),(0,l.Z)(this,Y,{writable:!0,value:void 0}),(0,l.Z)(this,J,{writable:!0,value:void 0}),(0,l.Z)(this,X,{writable:!0,value:void 0}),(0,l.Z)(this,V,{writable:!0,value:void 0}),(0,l.Z)(this,$,{writable:!0,value:void 0}),(0,l.Z)(this,ee,{writable:!0,value:void 0}),(0,u.Z)(this,H,e),(0,u.Z)(this,K,t),(0,u.Z)(this,Q,i),(0,u.Z)(this,Y,s),(0,u.Z)(this,G,n),(0,u.Z)(this,D,new Audio)}async loadBook(){return new Promise((e=>{(0,d.Z)(this,Y).load("book.glb",function(t){console.log(t.scene),t.scene.traverse((function(e){if(e.isMesh)if(e.name.includes("P")){let t=null;t=(e.name.includes("back"),(new Z.dpR).load("/page4.jpg")),e.material.map=t,e.material.needsUpdate=!0}else{const t=(new Z.dpR).load("/cover.jpg");e.material.map=t,e.material.needsUpdate=!0}}));const i=t.scene;i.traverse((e=>{e instanceof Z.Kj0&&(this.meshes[e.name]=e)}));const s=t.animations;(0,u.Z)(this,J,s),s.forEach((e=>{(0,d.Z)(this,J)[e.name]=e}));const n=.2;i.scale.set(n,n,n),i.position.set(.45,.8,.7),i.rotation.y-=Math.PI,i.name="book",(0,d.Z)(this,H).add(i),(0,u.Z)(this,X,new Z.Xcj(i));let a=()=>{requestAnimationFrame(a),(0,d.Z)(this,X).update((0,d.Z)(this,z))};a(),(0,u.Z)(this,V,i),e(i)}.bind(this),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log("An error happened",e)}))}))}turnCover(){j((0,d.Z)(this,J)[0],(0,d.Z)(this,X)),j((0,d.Z)(this,J)[1],(0,d.Z)(this,X)),j((0,d.Z)(this,J)[2],(0,d.Z)(this,X)),j((0,d.Z)(this,J)[3],(0,d.Z)(this,X))}turnBackCover(){q((0,d.Z)(this,J)[0],(0,d.Z)(this,X)),q((0,d.Z)(this,J)[1],(0,d.Z)(this,X)),q((0,d.Z)(this,J)[2],(0,d.Z)(this,X)),q((0,d.Z)(this,J)[3],(0,d.Z)(this,X))}async createBookCover(e){await this.insertImg(this.meshes.coverL,e[0])}async clickCoverFront(e){var t;(0,u.Z)(this,N,0),this.turnCover(),await this.insertImg(this.meshes.Page1Front,e[(0,u.Z)(this,N,(t=(0,d.Z)(this,N),++t))],!0),this.createTtsBtnR()}async clickCoverBack(){this.deleteOverlayL(),this.turnBackCover()}async clickP1Front(e){var t,i;this.turnPageFirst(),await this.insertImg(this.meshes.Page1Back,e[(0,u.Z)(this,N,(t=(0,d.Z)(this,N),++t))]),await this.insertImg(this.meshes.Page2Front,e[(0,u.Z)(this,N,(i=(0,d.Z)(this,N),++i))],!0),this.createTtsBtnL(),this.createTtsBtnR()}async clickP2Front(e){var t,i;this.tunPageSecond(),await this.insertImg(this.meshes.Page2Back,e[(0,u.Z)(this,N,(t=(0,d.Z)(this,N),++t))]),await this.insertImg(this.meshes.Pages,e[(0,u.Z)(this,N,(i=(0,d.Z)(this,N),++i))],!0),this.createTtsBtnL(),this.createTtsBtnR()}async clickP3Front(e){var t,i;console.log(e.length),console.log((0,d.Z)(this,N)+1),e.length<(0,d.Z)(this,N)+2||(await this.insertImg(this.meshes.Page1Back,e[(0,d.Z)(this,N)-1]),await this.insertImg(this.meshes.Page2Front,e[(0,d.Z)(this,N)],!0),this.tunPageSecond(),await this.insertImg(this.meshes.Page2Back,e[(0,u.Z)(this,N,(t=(0,d.Z)(this,N),++t))]),await this.insertImg(this.meshes.Pages,e[(0,u.Z)(this,N,(i=(0,d.Z)(this,N),++i))],!0),this.createTtsBtnL(),this.createTtsBtnR())}clickP1Back(e){(0,d.Z)(this,N)>4?this.clickP2Back(e):(this.turnBackPageFirst(),(0,u.Z)(this,N,(0,d.Z)(this,N)-2),this.insertImg(this.meshes.Page1Front,e[(0,d.Z)(this,N)],!0),this.createTtsBtnR(),this.deleteOverlayR())}async clickP2Back(e){await this.insertImg(this.meshes.Page2Back,e[(0,d.Z)(this,N)-1]),await this.insertImg(this.meshes.Pages,e[(0,d.Z)(this,N)],!0),(0,u.Z)(this,N,(0,d.Z)(this,N)-2);let t=!0;this.turnBackPageSecond(t),this.insertImg(this.meshes.Page1Back,e[(0,d.Z)(this,N)-1]),this.insertImg(this.meshes.Page2Front,e[(0,d.Z)(this,N)],!0),this.createTtsBtnL(),this.createTtsBtnR()}turnPageFirst(){j((0,d.Z)(this,J).Page1Action,(0,d.Z)(this,X))}turnBackPageFirst(){q((0,d.Z)(this,J).Page1Action,(0,d.Z)(this,X))}tunPageSecond(){j((0,d.Z)(this,J).Page2Action,(0,d.Z)(this,X))}turnBackPageSecond(){q((0,d.Z)(this,J).Page2Action,(0,d.Z)(this,X))}movePositionToLook(){(0,d.Z)(this,V).position.set(.45,5,.7),(0,d.Z)(this,V).rotation.x=-Math.PI/2}createMakeStoryLayoutOne(){const e=.004,t=.013;this.removeMakeStoryLayout();const i=document.getElementById("pageL").cloneNode(!0);i.querySelector(".next-page").addEventListener("click",(async()=>{y.publish("getTitles")})),(0,u.Z)(this,$,new w.cp(i));const s=new Z.Pa4,n=(0,d.Z)(this,V).children[7].getWorldPosition(s);n.x+=e,(0,d.Z)(this,$).position.copy(n),(0,d.Z)(this,$).rotation.set(-Math.PI/2,0,0),(0,d.Z)(this,$).scale.set(3e-4,3e-4,5e-4),(0,d.Z)(this,$).name="overlayL",(0,d.Z)(this,H).add((0,d.Z)(this,$));const a=document.getElementById("pageR").cloneNode(!0);(0,u.Z)(this,ee,new w.cp(a));const o=(0,d.Z)(this,V).children[8].getWorldPosition(s);o.x+=t,(0,d.Z)(this,ee).position.copy(o),(0,d.Z)(this,ee).rotation.set(-Math.PI/2,0,0),(0,d.Z)(this,ee).scale.set(3e-4,3e-4,5e-4),(0,d.Z)(this,ee).name="overlayR",(0,d.Z)(this,H).add((0,d.Z)(this,ee))}removeMakeStoryLayout(){this.deleteOverlayR(),this.deleteOverlayL()}createMakeStoryLayoutTwo(){const e=.004,t=.013,i=new Z.Pa4,s=document.getElementById("loading").cloneNode(!0);(0,u.Z)(this,$,new w.cp(s));const n=(0,d.Z)(this,V).children[7].getWorldPosition(i);n.x+=e,(0,d.Z)(this,$).position.copy(n),(0,d.Z)(this,$).rotation.set(-Math.PI/2,0,0),(0,d.Z)(this,$).scale.set(3e-4,3e-4,5e-4),(0,d.Z)(this,H).add((0,d.Z)(this,$));const a=document.getElementById("pageR2").cloneNode(!0);(0,u.Z)(this,U,a),(0,u.Z)(this,ee,new w.cp(a));const o=(0,d.Z)(this,V).children[8].getWorldPosition(i);o.x+=t,(0,d.Z)(this,ee).position.copy(o),(0,d.Z)(this,ee).rotation.set(-Math.PI/2,0,0),(0,d.Z)(this,ee).scale.set(3e-4,3e-4,5e-4),(0,d.Z)(this,H).add((0,d.Z)(this,ee))}async createTitlesOnPage(e){(0,d.Z)(this,H).remove((0,d.Z)(this,$));const t=new Z.Pa4,i=document.getElementById("cards").cloneNode(!0);i.querySelector(".next-page2").addEventListener("click",(async()=>{y.publish("makeStory")})),(0,u.Z)(this,$,new w.cp(i));const s=(0,d.Z)(this,V).children[7].getWorldPosition(t);(0,d.Z)(this,$).position.copy(s),(0,d.Z)(this,$).rotation.set(-Math.PI/2,0,0),(0,d.Z)(this,$).scale.set(3e-4,3e-4,5e-4),(0,d.Z)(this,H).add((0,d.Z)(this,$));const n=i.querySelector("#cardsTitles");for(let a of e){const e=document.getElementById("card"),t=e.cloneNode(!0);let i=a.split(":");1===i.length&&(i=a.split("-"));let s=i[0];t.innerText=s,n.appendChild(t),t.addEventListener("mouseenter",(()=>{let e=(0,d.Z)(this,U).querySelector("#titleDesc");e.innerText=a})),t.addEventListener("click",(()=>{let e=(0,d.Z)(this,U).querySelector("#titleSelected");e.innerText=a}))}}async transitToMakeStoryTwo(){(0,d.Z)(this,H).remove((0,d.Z)(this,ee)),(0,d.Z)(this,H).remove((0,d.Z)(this,$)),this.tunPageSecond(),this.createMakeStoryLayoutTwo()}createTtsBtnL(){const e=new Z.Pa4,t=document.getElementById("ttsL").cloneNode(!0);console.log(t);const i=t.querySelector("#ttsBtnL");(0,u.Z)(this,$,new w.cp(t));const s=(0,d.Z)(this,V).children[8].getWorldPosition(e);(0,d.Z)(this,$).position.copy(s),(0,d.Z)(this,$).position.z=.87,(0,d.Z)(this,$).rotation.set(-Math.PI/2,0,0),(0,d.Z)(this,$).scale.set(3e-4,3e-4,5e-4),(0,d.Z)(this,H).add((0,d.Z)(this,$)),i.addEventListener("click",(()=>{this.fetchTts(this.extractedTexts[(0,d.Z)(this,N)-1])}))}createTtsBtnR(){const e=new Z.Pa4,t=document.getElementById("ttsR").cloneNode(!0),i=t.querySelector("#ttsBtnR");(0,u.Z)(this,ee,new w.cp(t));const s=(0,d.Z)(this,V).children[7].getWorldPosition(e);(0,d.Z)(this,ee).position.copy(s),(0,d.Z)(this,ee).position.z=.87,(0,d.Z)(this,ee).rotation.set(-Math.PI/2,0,0),(0,d.Z)(this,ee).scale.set(3e-4,3e-4,5e-4),(0,d.Z)(this,H).add((0,d.Z)(this,ee)),i.addEventListener("click",(()=>{console.log("book!"),this.fetchTts(this.extractedTexts[(0,d.Z)(this,N)])}))}deleteOverlayR(){(0,d.Z)(this,H).remove((0,d.Z)(this,$))}deleteOverlayL(){(0,d.Z)(this,H).remove((0,d.Z)(this,ee))}fetchTts(e){let t=JSON.stringify({voice:{languageCode:"ko-KR",ssmlGender:"FEMALE",name:"ko-KR-Wavenet-A"},input:{text:e},audioConfig:{audioEncoding:"mp3"}}),i={method:"post",maxBodyLength:1/0,url:"https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyCKiq248cQRH-p3lGwK0SgGOdKFKw7dt0Q",headers:{"Content-Type":"application/json"},data:t};k.Z.request(i).then((e=>{let t=e.data.audioContent,i=this.base64ToBlob(t,"mp3");(0,d.Z)(this,D).src=window.URL.createObjectURL(i),(0,d.Z)(this,D).playbackRate=1,(0,d.Z)(this,D).play()})).catch((e=>{console.log(e)}))}base64ToBlob(e,t){let i="application/"+t,s=e.replace(/^[^,]+,/,""),n=window.atob(s),a=new ArrayBuffer(n.length),o=new Uint8Array(a);for(let r=0;r<n.length;r++)o[r]=n.charCodeAt(r);return new Blob([a],{type:i})}speak(e,t){window.speechSynthesis.cancel();const i=t||{},s=new SpeechSynthesisUtterance;s.rate=i.rate||1,s.pitch=i.pitch||1,s.lang=i.lang||"ko-KR",s.text=e,window.speechSynthesis.speak(s)}async insertImg(e,t,i){return console.log(e),new Promise((s=>{t?(new Z.dpR).load(t,(async t=>{i&&(t.wrapS=Z.rpg,t.repeat.x=-1),e.material.map=t,e.material.needsUpdate=!0,s()})):(e.material.map=null,e.material.needsUpdate=!0,s())}))}}var ie=new WeakMap;class se{constructor(e){(0,l.Z)(this,ie,{writable:!0,value:void 0}),(0,u.Z)(this,ie,e)}async loadSpace(){return new Promise((e=>{(0,d.Z)(this,ie).load("workshop.glb",(t=>{const i=t.scene;i.position.set(.2,0,0),e(i)}),(function(e){this.loadedPercent=e.loaded/e.total*100,p.dispatch("setLoadedPercent",this.loadedPercent)}),(function(e){console.log("An error happened",e)}))}))}}class ne{constructor(e,t,i){const s=new Z.ZAu;e.add(s);const n=new Z.UY4({color:16777215,size:.0125});function a(){const e=new Z.u9r,t=[];for(let s=0;s<1e3;s++){const e=10*(Math.random()-.5),i=10*(Math.random()-.5),s=10*(Math.random()-.5);t.push(e,i,s)}e.setAttribute("position",new Z.a$l(t,3));const i=new Z.woe(e,n);s.add(i)}a();const o=()=>{requestAnimationFrame(o),s.rotation.x+=.001,s.rotation.y+=.001,t.render(e,i)};o()}}var ae=new WeakMap,oe=new WeakMap,re=new WeakMap,ce=new WeakMap,le=new WeakMap,he=new WeakMap,de=new WeakMap,ue=new WeakMap,Ze=new WeakMap,me=new WeakMap,pe=new WeakMap,ve=new WeakMap,ge=new WeakMap,we=new WeakMap,be=new WeakMap,ye=new WeakMap,ke=new WeakMap,fe=new WeakSet,_e=new WeakSet,Pe=new WeakSet,Se=new WeakSet,Me=new WeakSet,Be=new WeakSet;class xe{constructor(){(0,r.Z)(this,Be),(0,r.Z)(this,Me),(0,r.Z)(this,Se),(0,r.Z)(this,Pe),(0,r.Z)(this,_e),(0,r.Z)(this,fe),(0,l.Z)(this,ae,{writable:!0,value:void 0}),(0,l.Z)(this,oe,{writable:!0,value:void 0}),(0,l.Z)(this,re,{writable:!0,value:void 0}),(0,l.Z)(this,ce,{writable:!0,value:void 0}),(0,l.Z)(this,le,{writable:!0,value:void 0}),(0,l.Z)(this,he,{writable:!0,value:void 0}),(0,l.Z)(this,de,{writable:!0,value:void 0}),(0,l.Z)(this,ue,{writable:!0,value:void 0}),(0,l.Z)(this,Ze,{writable:!0,value:void 0}),(0,l.Z)(this,me,{writable:!0,value:void 0}),(0,l.Z)(this,pe,{writable:!0,value:void 0}),(0,l.Z)(this,ve,{writable:!0,value:void 0}),(0,l.Z)(this,ge,{writable:!0,value:void 0}),(0,l.Z)(this,we,{writable:!0,value:void 0}),(0,l.Z)(this,be,{writable:!0,value:void 0}),(0,l.Z)(this,ye,{writable:!0,value:void 0}),(0,l.Z)(this,ke,{writable:!0,value:void 0}),(0,c.Z)(this,"stage",""),(0,c.Z)(this,"loadedPercent",0),(0,c.Z)(this,"minDistance",1.6),(0,c.Z)(this,"maxDistance",7),(0,c.Z)(this,"maxAzimuthAngle",Math.PI/4),(0,c.Z)(this,"minAzimuthAngle",-Math.PI/4),(0,c.Z)(this,"maxPolarAngle",Math.PI/3),(0,c.Z)(this,"extractedTexts",[])}init(){this.stage="INTRO";const e=new Z.xsS;(0,u.Z)(this,oe,e);const t=new v.E;(0,u.Z)(this,re,t);const i=new Z.CP7({antialias:!0});i.setSize(window.innerWidth,window.innerHeight),i.outputEncoding=Z.knz,i.setPixelRatio(window.devicePixelRatio),i.autoClear=!1,i.setClearColor(0,0),(0,u.Z)(this,ce,i);const s=document.getElementById("three");(0,u.Z)(this,le,s),(0,d.Z)(this,le).appendChild((0,d.Z)(this,ce).domElement),(0,h.Z)(this,Be,Ce).call(this);const n=new Z.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);(0,h.Z)(this,fe,Le).call(this,n),(0,h.Z)(this,Pe,We).call(this);const a=new w.lX({antialias:!0});(0,u.Z)(this,he,a),(0,d.Z)(this,he).setSize(window.innerWidth,window.innerHeight),(0,d.Z)(this,he).domElement.style.position="absolute",(0,d.Z)(this,he).domElement.style.top="0px",(0,d.Z)(this,he).domElement.style.pointerEvents="none",document.body.appendChild((0,d.Z)(this,he).domElement),window.onresize=this.resize.bind(this),requestAnimationFrame(this.render.bind(this));let o=new Z.iMs;(0,u.Z)(this,de,o);const r=new Z.FM8;(0,u.Z)(this,ue,r),(0,u.Z)(this,ye,new ne((0,d.Z)(this,oe),(0,d.Z)(this,ce),(0,d.Z)(this,Ze))),s.addEventListener("mousedown",this.onDocumentMouseDown.bind(this),!1),y.subscribe("getTitles",this.getTitles.bind(this)),y.subscribe("makeStory",this.makeStory.bind(this)),y.subscribe("beginScene2",this.beginScene2.bind(this)),y.subscribe("beginScene3",this.prepareBook.bind(this))}onDocumentMouseDown(e){(0,d.Z)(this,ue).x=e.clientX/window.innerWidth*2-1,(0,d.Z)(this,ue).y=-e.clientY/window.innerHeight*2+1,(0,d.Z)(this,de).setFromCamera((0,d.Z)(this,ue),(0,d.Z)(this,Ze));const t=(0,d.Z)(this,de).intersectObjects((0,d.Z)(this,oe).children);let i=null;for(let s of t)if(i=s.object,i.name.length>0)break;if(t.length>0&&"READ_BOOK"===this.stage){const e=(0,d.Z)(this,me);localStorage.getItem("book",JSON.stringify(e)),"coverL"===i.name?(0,d.Z)(this,pe).clickCoverFront(e):"coverL_1"===i.name?(0,d.Z)(this,pe).clickCoverBack():"Page1Front"===i.name?(0,d.Z)(this,pe).clickP1Front(e):"Page2Front"===i.name?(0,d.Z)(this,pe).clickP2Front(e):"Pages"===i.name?(0,d.Z)(this,pe).clickP3Front(e):"Page1Back"===i.name?(0,d.Z)(this,pe).clickP1Back(e):"Page2Back"===i.name&&(0,d.Z)(this,pe).clickP2Back(e)}}async goHome(){(0,d.Z)(this,ve).addScene(),(0,h.Z)(this,Me,Te).call(this),(0,h.Z)(this,fe,Le).call(this,(0,d.Z)(this,Ze)),(0,d.Z)(this,pe).removeMakeStoryLayout();let e=(0,d.Z)(this,oe).getObjectByName("book");(0,d.Z)(this,oe).remove(e);const t=new te((0,d.Z)(this,oe),(0,d.Z)(this,Ze),(0,d.Z)(this,he),(0,d.Z)(this,re),(0,d.Z)(this,ce));(0,u.Z)(this,pe,t);const i=await t.loadBook();(0,u.Z)(this,ge,i)}beginScene2(){(0,d.Z)(this,ve).removeScene(),(0,h.Z)(this,Se,Ie).call(this),(0,d.Z)(this,pe).turnCover(),(0,d.Z)(this,pe).turnPageFirst(),(0,d.Z)(this,pe).createMakeStoryLayoutOne()}async beginLoadingMakingStory(){(0,d.Z)(this,pe).turnBackPageFirst(),(0,d.Z)(this,pe).turnBackPageSecond(),(0,d.Z)(this,pe).turnBackCover(),this.addAura();const e=(0,d.Z)(this,Ze).position,t=new Z.Pa4(.443,3,.702),i=2e3;this.animateCamera(e,t,i,this.easeInOutQuad);let s=document.querySelector("#making_story_title");s.style.display="flex"}async endLoadingMakingBook(){this.removeAura();let e=document.querySelector("#making_story_title");e.style.display="none"}easeInOutQuad(e){return e<.5?2*e*e:(4-2*e)*e-1}animateCamera(e,t,i,s){const n=performance.now(),a=e.clone(),o=t.clone(),r=o.clone().sub(a),c=e=>{const t=e-n,l=t/i;if(l<1){const e=s(l),t=a.clone().add(r.clone().multiplyScalar(e));(0,d.Z)(this,Ze).position.copy(t),(0,d.Z)(this,ce).render((0,d.Z)(this,oe),(0,d.Z)(this,Ze)),requestAnimationFrame(c)}else(0,d.Z)(this,Ze).position.copy(o),(0,d.Z)(this,ce).render((0,d.Z)(this,oe),(0,d.Z)(this,Ze))};requestAnimationFrame(c)}async fetchGetTitles(){const e=document.querySelectorAll("#mainCharacter")[1].value;console.log(e);const t=document.querySelectorAll("#genre")[1].value;console.log(t);const i={mainCharacter:e,genre:t};await k.Z.get("https://api-server-6v7btzdaka-du.a.run.app/api/v1/title",{params:i,responseType:"json"}).then((async e=>{console.log(e),(0,d.Z)(this,pe).createTitlesOnPage(e.data)})).catch((e=>{console.error("Error fetching data:",e)}))}async fetchGetBook(e){const t=new WebSocket("wss://api-server-6v7btzdaka-du.a.run.app/api/v1/books");t.onopen=()=>{t.send(e),console.log("웹소켓서버와 연결 성공")},t.onmessage=async function(e){if("object"===typeof e.data){const i=e.data;await this.prepareBook(i,!0),t.close()}else{let t=JSON.parse(e.data).beginStage,i=document.querySelector("#making_story_title_sub_text");if(1===t){i.textContent="이야기를 만들고 있어요.";let e=document.querySelector("#making_story_title_step1");e.className="making_story_title_step current_step";let t=document.querySelector("#making_story_title_step2");t.className="making_story_title_step";let s=document.querySelector("#making_story_title_step3");s.className="making_story_title_step"}else if(2===t){i.textContent="그림을 만들고 있어요.";let e=document.querySelector("#making_story_title_step2");e.className+=" current_step"}else if(3===t){i.textContent="Pdf 파일을 만들고 있어요.";let e=document.querySelector("#making_story_title_step3");e.className+=" current_step"}}}.bind(this),t.onclose=function(){console.log("서버 웹소켓 연결 종료")},t.onerror=function(e){console.log(e)}}async prepareBook(e,t){const i=new Blob([e],{type:"application/pdf"}),s=URL.createObjectURL(i);if(t){const e=document.createElement("a");e.href=s,e.setAttribute("download","book.pdf"),document.body.appendChild(e),e.click()}const n=await this.convertPdfToImages(s);(0,u.Z)(this,me,n),(0,h.Z)(this,Se,Ie).call(this),this.endLoadingMakingBook(),(0,d.Z)(this,ve).zoomCameraToLook(),this.stage="READ_BOOK",(0,d.Z)(this,pe).createBookCover(n)}async convertPdfToImages(e){const t=await i.e(912).then(i.t.bind(i,3912,23)),s=await i.e(3).then(i.t.bind(i,8003,23));s.GlobalWorkerOptions.workerSrc=t;const n=await s.getDocument(e).promise,a=n.numPages,o=[];for(let i=1;i<=a;i++){const e=await n.getPage(i),t=3,s=e.getViewport({scale:t}),a=document.createElement("canvas"),r=a.getContext("2d");a.width=s.width,a.height=s.height,await e.render({canvasContext:r,viewport:s}).promise;const c=a.toDataURL("image/jpeg");o.push(c);let l="";const h=await e.getTextContent();h.items.forEach((e=>{l+=e.str+" "})),this.extractedTexts.push(l)}return console.log(this.extractedTexts),(0,d.Z)(this,pe).extractedTexts=this.extractedTexts,o}async getTitles(){this.fetchGetTitles(),await(0,d.Z)(this,pe).transitToMakeStoryTwo()}async makeStory(){const e=document.querySelectorAll("#titleSelected")[1].innerText;e&&(this.fetchGetBook(e),this.beginLoadingMakingStory(),(0,d.Z)(this,pe).removeMakeStoryLayout())}removeAura(){(0,d.Z)(this,ge).remove((0,d.Z)(this,we))}createAuraTexture(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),i=t.createRadialGradient(e.width/2,e.height/2,0,e.width/2,e.height/2,e.width/2);return i.addColorStop(0,"rgba(128, 0, 255, 1)"),i.addColorStop(.4,"rgba(128, 0, 255, 0.6)"),i.addColorStop(1,"rgba(128, 0, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,e.width,e.height),new Z.ROQ(e)}addAura(){const e=this.createAuraTexture(),t=new Z.xeV({map:e,color:16777215,transparent:!0,blending:Z.WMw}),i=new Z.jyi(t);(0,u.Z)(this,we,i),i.scale.set(5,5,5),(0,d.Z)(this,ge).add(i),i.position.set(-1,0,0);const s=e=>{requestAnimationFrame(s);const i=(Math.sin(.001*e)+1)/2;t.opacity=2*i,(0,d.Z)(this,ce).render((0,d.Z)(this,oe),(0,d.Z)(this,Ze))};s(2e3)}resize(){const e=(0,d.Z)(this,le).clientWidth,t=window.innerHeight;(0,d.Z)(this,Ze).aspect=e/t,(0,d.Z)(this,Ze).updateProjectionMatrix(),(0,d.Z)(this,ce).setSize(e,t),(0,d.Z)(this,he)?.setSize(e,t)}render(){(0,d.Z)(this,ce).render((0,d.Z)(this,oe),(0,d.Z)(this,Ze)),requestAnimationFrame(this.render.bind(this))}}function Le(e){e.position.set(2.06,2.55,5.98),e.rotation.set(-.404,.307,.128),e.rotation.isEuler=!0,e.updateProjectionMatrix(),(0,u.Z)(this,Ze,e)}function Ee(){const e=new Z.cek(16770713);e.intensity=1,e.distance=15,e.decay=1,e.position.set(1,4,0),(0,u.Z)(this,be,e),(0,d.Z)(this,oe).add((0,d.Z)(this,be));const t=new Z.Mig(4210752,1);(0,u.Z)(this,ke,t),(0,d.Z)(this,oe).add((0,d.Z)(this,ke))}function We(){(0,u.Z)(this,ae,new g.z((0,d.Z)(this,Ze),(0,d.Z)(this,ce).domElement)),(0,d.Z)(this,ae).maxPolarAngle=this.maxPolarAngle,(0,d.Z)(this,ae).minDistance=this.minDistance,(0,d.Z)(this,ae).maxDistance=this.maxDistance,(0,d.Z)(this,ae).minAzimuthAngle=this.minAzimuthAngle,(0,d.Z)(this,ae).maxAzimuthAngle=this.maxAzimuthAngle,(0,d.Z)(this,ae).update()}function Ie(){(0,d.Z)(this,ae).enabled=!1}function Te(){(0,d.Z)(this,ae).enabled=!0}async function Ce(){const e=new Z.Tme,t=new te((0,d.Z)(this,oe),(0,d.Z)(this,Ze),(0,d.Z)(this,he),(0,d.Z)(this,re),(0,d.Z)(this,ce));(0,u.Z)(this,pe,t);const i=await t.loadBook();(0,u.Z)(this,ge,i);const s=new se((0,d.Z)(this,re)),n=await s.loadSpace();e.add(n),(0,d.Z)(this,oe).add(e),(0,h.Z)(this,_e,Ee).call(this);const a=new R((0,d.Z)(this,oe),(0,d.Z)(this,Ze),(0,d.Z)(this,ce),(0,d.Z)(this,he));(0,u.Z)(this,ve,a),p.dispatch("setInitCompleted",!0)}var Ae=i(7139);const Oe={id:"cssObjects"},Fe={class:"page",id:"pageL"},Re=(0,n._)("div",{class:"input"},[(0,n.Uk)(" 이야기 주인공의 이름은? "),(0,n._)("input",{id:"mainCharacter",placeholder:"이름을 입력해주세요!"})],-1),je={class:"input"},qe={id:"genre"},Ne=["value"],ze=(0,n._)("div",{class:"next-page",style:{"text-align":"right",width:"100%"}},[(0,n._)("p",null,"다음으로 이동 ->")],-1),De=(0,n.uE)('<div class="page dot center" id="loading"><p>잠시만 기다려 주세요!</p><img src="loading.gif"></div><div class="page" id="pageR"><div><h1>당신의 이야기를 만들어 주세요!</h1><h2>이야기 주인공의 이름과 주제를 선택해 주세요.</h2></div></div><div class="page" id="pageR2"><p>주제를 골라 주세요!</p><div id="titleDesc" class="title-card"></div><div> 선택된 이야기 <div id="titleSelected" class="title-card-border title-card"></div></div></div><div class="page" id="cards"><div id="cardsTitles"></div><div class="next-page2" style="text-align:right;width:100%;"><p>다음으로 이동 -&gt;</p></div></div><div id="card" class="card"><p class="mt-2 text-gray-600"></p></div><div id="ttsR"><button id="ttsBtnR"><i class="fas fa-volume-up fa-4x"></i></button></div><div id="ttsL"><button id="ttsBtnL"><i class="fas fa-volume-up fa-4x"></i></button></div><div id="arrow-start" class="arrow"><div class="arrow-tail"></div><div class="arrow-head"></div></div><div id="arrow-load" class="arrow"><div class="arrow-tail"></div><div class="arrow-head"></div></div><div class="hover_frame" id="desk_frame_front"></div><div class="hover_frame" id="desk_frame_top"></div><div id="start"><div id="circle"></div><h1 class="intro_text">이야기 만들기</h1></div><div class="hover_frame" id="bookshelf_frame_front"></div><div class="hover_frame" id="bookshelf_frame_side"></div><div id="load"><div id="circle"></div><h1 class="intro_text">이야기 불러오기</h1><input type="file" id="pdfUpload" accept=".pdf" style="display:none;"></div><div id="making_story_title"><div id="making_story_title_text"><h1>잠시만 기다려 주세요! . . . 최대 3분이 소요 됩니다.</h1></div><div id="making_story_title_steps"><div id="making_story_title_step1" class="making_story_title_step"> 1. 이야기 생성 </div><div class="making_story_title_step">-&gt;</div><div id="making_story_title_step2" class="making_story_title_step"> 2. 그림 생성 </div><div class="making_story_title_step">-&gt;</div><div id="making_story_title_step3" class="making_story_title_step"> 3. pdf 생성 </div></div><div id="making_story_title_sub_text" class="dot"><h1>이야기를 만들고 있어요!</h1></div></div>',16);var Ue={__name:"cssObject",setup(e){const t=["외국 전래동화","해외 전래동화","아무거나","모험","동물","도전","우정"];return(e,i)=>((0,n.wg)(),(0,n.iD)("div",Oe,[(0,n._)("div",Fe,[Re,(0,n._)("div",je,[(0,n.Uk)(" 이야기의 장르를 선택해 주세요! "),(0,n._)("select",qe,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(t,(e=>(0,n._)("option",{key:e,value:e},(0,Ae.zw)(e),9,Ne))),64))])]),ze]),De]))}};const He=Ue;var Ke=He,Qe=i(4878);const Ge={id:"main"},Ye=(0,n._)("div",{id:"three"},null,-1);var Je={__name:"Main",setup(e){let t=null;async function i(){await t.goHome()}return(0,n.bv)((()=>{t=new xe,t.init()})),(e,t)=>((0,n.wg)(),(0,n.iD)("div",Ge,[Ye,(0,n.Wm)(Ke),(0,n.Wm)(Qe.T,{class:"home-btn","prepend-icon":"mdi-home",size:"x-large",onClick:t[0]||(t[0]=e=>i())},{default:(0,n.w5)((()=>[(0,n.Uk)(" 홈 ")])),_:1})]))}};const Xe=Je;var Ve=Xe;const $e={class:"container"},et=(0,n.uE)('<img class="background" src="background.jpg" data-v-57c4bc88><div class="title" data-v-57c4bc88><div style="text-align:center;" data-v-57c4bc88>Fairy Tale</div><div class="sub-title" data-v-57c4bc88>인공지능 동화 생성</div></div><div class="content dot" data-v-57c4bc88>불러오는 중...</div><div data-v-57c4bc88></div>',4),tt=[et];function it(e,t){return(0,n.wg)(),(0,n.iD)("div",$e,tt)}var st=i(89);const nt={},at=(0,st.Z)(nt,[["render",it],["__scopeId","data-v-57c4bc88"]]);var ot=at,rt={name:"App",components:{Main:Ve,Loading:ot},setup(){const e=(0,m.oR)(),t=(0,n.Fl)((()=>e.getters.initCompleted));return{isLoaded:t}}};const ct=(0,st.Z)(rt,[["render",o]]);var lt=ct,ht=(i(9773),i(7314)),dt=(0,ht.Rd)();async function ut(){const e=await i.e(461).then(i.t.bind(i,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}ut(),(0,s.ri)(lt).use(dt).use(p).mount("#app")}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,s,n,a){if(!s){var o=1/0;for(h=0;h<e.length;h++){s=e[h][0],n=e[h][1],a=e[h][2];for(var r=!0,c=0;c<s.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((function(e){return i.O[e](s[c])}))?s.splice(c--,1):(r=!1,a<o&&(o=a));if(r){e.splice(h--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var h=e.length;h>0&&e[h-1][2]>a;h--)e[h]=e[h-1];e[h]=[s,n,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};i.t=function(s,n){if(1&n&&(s=this(s)),8&n)return s;if("object"===typeof s&&s){if(4&n&&s.__esModule)return s;if(16&n&&"function"===typeof s.then)return s}var a=Object.create(null);i.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var r=2&n&&s;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){o[e]=function(){return s[e]}}));return o["default"]=function(){return s},i.d(a,o),a}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,s){return i.f[s](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/"+(461===e?"webfontloader":e)+"."+{3:"d640b699",461:"214eac89",912:"8997e6f7"}[e]+".js"}}(),function(){i.miniCssF=function(e){}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="fairy-tale-book:";i.l=function(s,n,a,o){if(e[s])e[s].push(n);else{var r,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),h=0;h<l.length;h++){var d=l[h];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==t+a){r=d;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,i.nc&&r.setAttribute("nonce",i.nc),r.setAttribute("data-webpack",t+a),r.src=s),e[s]=[n];var u=function(t,i){r.onerror=r.onload=null,clearTimeout(Z);var n=e[s];if(delete e[s],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(e){return e(i)})),t)return t(i)},Z=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){var e={143:0};i.f.j=function(t,s){var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)s.push(n[2]);else{var a=new Promise((function(i,s){n=e[t]=[i,s]}));s.push(n[2]=a);var o=i.p+i.u(t),r=new Error,c=function(s){if(i.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;r.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",r.name="ChunkLoadError",r.type=a,r.request=o,n[1](r)}};i.l(o,c,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,a,o=s[0],r=s[1],c=s[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(c)var h=c(i)}for(t&&t(s);l<o.length;l++)a=o[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(h)},s=self["webpackChunkfairy_tale_book"]=self["webpackChunkfairy_tale_book"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(2556)}));s=i.O(s)})();
//# sourceMappingURL=app.0ac99619.js.map