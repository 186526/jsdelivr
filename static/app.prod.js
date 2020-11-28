var $=mdui.$;function loadjs(e,t=!1){let n=document.createElement("script");n.src=e,n.defer=t,$("head").append(n)}function whenAvailable(e,t){window.setTimeout((function(){window[e]?t(window[e]):window.setTimeout(arguments.callee,100)}),100)}function whendomready(){$("#toggle-drawer").on("click",(function(){new mdui.Drawer("#main-drawer",{swipe:!0}).toggle()})),whenAvailable("NProgress",(function(){NProgress.done()})),document.getElementById("head")&&(loadjs("https://cdn.jsdelivr.net/npm/marked@1.2.0/marked.min.js"),whenAvailable("marked",(function(){$("#head").html(marked($("#head-md").html()))}))),document.getElementById("readme")&&(loadjs("https://cdn.jsdelivr.net/npm/marked@1.2.0/marked.min.js"),whenAvailable("marked",(function(){$("#readme").html(marked($("#readme-md").html()))})))}function changecolor(){whenAvailable("docCookies",(function(){eval(docCookies.getItem("darkmod"))?($("#app").removeClass("mdui-theme-layout-dark"),docCookies.setItem("darkmod",!1,1200,"/")):($("#app").addClass("mdui-theme-layout-dark","/"),docCookies.setItem("darkmod",!0,1200,"/"))}))}async function geturl(e){try{new URL(e)}catch(e){return}if(new URL(e).host!==window.location.host)return;let t=window.location.protocol+"//"+window.location.host;if("?preview"===new URL(e).search)return t+new URL(e).pathname+"?preview";let n=await"/";for(let t of new URL(e).pathname.split("/").slice(1,-1))n=n+t+"/";return t+n}function loadcss(e){let t=document.createElement("link");t.rel="stylesheet",t.href=e,$("head").append(t)}function whenpjax(){window.NProgress||(loadjs("https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js"),loadcss("https://cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.css")),whenAvailable("NProgress",(function(){NProgress.inc()}))}function flyingPages(){const e=new Set,t=new Set,n=document.createElement("link"),o=n.relList&&n.relList.supports&&n.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype;if(navigator.connection&&(navigator.connection.saveData||(navigator.connection.effectiveType||"").includes("2g"))||!o)return;const a=e=>{const t=setTimeout(()=>u(),5e3);(e=>new Promise((t,n)=>{const o=document.createElement("link");o.rel="prefetch",o.href=geturl(e),o.onload=t,o.onerror=n,document.head.appendChild(o)}))(e).catch(()=>u()).finally(()=>clearTimeout(t))},r=(n,o=!1)=>{if(t.has(n)||e.has(n))return;const r=window.location.origin;if(n.substring(0,r.length)===r&&window.location.href!==n){for(let e=0;e<window.FPConfig.ignoreKeywords.length;e++)if(n.includes(window.FPConfig.ignoreKeywords[e]))return;o?(a(n),t.add(n)):e.add(n)}},i=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const t=e.target.href;r(t,!window.FPConfig.maxRPS)}})});let s=null;const d=e=>{const n=e.target.closest("a");n&&n.href&&!t.has(n.href)&&(s=setTimeout(()=>{r(n.href,!0)},window.FPConfig.hoverDelay))},c=e=>{const n=e.target.closest("a");n&&n.href&&!t.has(n.href)&&r(n.href,!0)},l=e=>{const n=e.target.closest("a");n&&n.href&&!t.has(n.href)&&clearTimeout(s)},m=window.requestIdleCallback||function(e){const t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},u=()=>{document.querySelectorAll("a").forEach(e=>i.unobserve(e)),e.clear(),document.removeEventListener("mouseover",d,!0),document.removeEventListener("mouseout",l,!0),document.removeEventListener("touchstart",c,!0)};window.FPConfig=Object.assign({delay:0,ignoreKeywords:[],maxRPS:3,hoverDelay:50},window.FPConfig),setInterval(()=>{Array.from(e).slice(0,window.FPConfig.maxRPS).forEach(n=>{a(n),t.add(n),e.delete(n)})},1e3),m(()=>setTimeout(()=>document.querySelectorAll("a").forEach(e=>i.observe(e)),1e3*window.FPConfig.delay));const h={capture:!0,passive:!0};document.addEventListener("mouseover",d,h),document.addEventListener("mouseout",l,h),document.addEventListener("touchstart",c,h)}function domready(){$("#refresh").on("click",(function(e){mdui.snackbar("刷新缓存中……"),fetch("./?RefreshCache").then((function(e){if(302!==e.status)throw mdui.snackbar("刷新缓存遇到未知错误，StatusCode:"+e.status),e;mdui.snackbar("已成功刷新缓存"),pjax.loadUrl(location.href)}))})),$("#refresh-phone").on("click",(function(e){mdui.snackbar("刷新缓存中……"),fetch("./?RefreshCache").then((function(e){if(302!==e.status)throw mdui.snackbar("刷新缓存遇到未知错误，StatusCode:"+e.status),e;mdui.snackbar("已成功刷新缓存"),pjax.loadUrl(location.href)}))})),$("#downloadurl").on("click",(function(e){"?preview"===new URL(window.location.href).search&&showdownloadurl((e=>{let t=new URL(e);return t.search="",t.href})(window.location.href))})),$("#back").on("click",(function(e){window.history.back(-1)}))}function openadminmenu(){let e=new mdui.Menu("#mouseplace","#admin-menu"),t=document.getElementById("admin-menu"),n=document.getElementById("mouseplace");t.style.left=n.style.left,t.style.top=n.style.top,e.open()}function showdownloadurl(e){new mdui.Dialog("#url").open();let t=document.getElementById("url");document.getElementById("url-input").value=e,t.addEventListener("confirm.mdui.dialog",(function(){copytoclip()?mdui.snackbar("已成功复制"):mdui.snackbar("复制失败")}))}function copytoclip(){document.getElementById("url-input").select();try{document.execCommand("copy")}catch(e){return!1}return!0}loadjs("https://cdn.jsdelivr.net/gh/186526/onemanager-theme-renexmoe@v1/dependence/cookie.min.js"),loadjs("https://cdn.jsdelivr.net/npm/pjax@0.2.8/pjax.min.js"),loadcss("https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap"),whenAvailable("Pjax",(function(){window.pjax=new Pjax({elements:"a",selectors:[".main-drawer",".mdui-container","title",".pjax",".mdui-toolbar"],cacheBust:!1})})),whenAvailable("docCookies",(function(){docCookies.getItem("darkmod")||(window.matchMedia("(prefers-color-scheme: dark)").matches?(docCookies.setItem("darkmod",!0,1200,"/"),$("#app").addClass("mdui-theme-layout-dark")):(docCookies.setItem("darkmod",!1,1200,"/"),$("#app").removeClass("mdui-theme-layout-dark"))),$("#app").removeClass("mdui-theme-layout-auto"),eval(docCookies.getItem("darkmod"))?$("#app").addClass("mdui-theme-layout-dark"):$("#app").removeClass("mdui-theme-layout-dark")})),$.fn.extend({sortElements:function(e,t){t=t||function(){return this};var n=this.map((function(){var e=t.call(this),n=e.parentNode,o=n.insertBefore(document.createTextNode(""),e.nextSibling);return function(){n.insertBefore(this,o),n.removeChild(o)}}));return[].sort.call(this,e).each((function(e){n[e].call(t.call(this))}))}}),$((function(){$(".icon-sort").on("click",(function(){let e=$(this).attr("data-sort"),t=$(this).attr("data-order"),n="less"===t?"more":"less";$("li[data-sort]").sortElements((function(n,o){let a=$(n).attr("data-sort-"+e),r=$(o).attr("data-sort-"+e),i=a.localeCompare(r,void 0,{numeric:!0});return"more"===t?0-i:i})),$(this).attr("data-order",n).text("expand_"+n)}))})),window.onload=function(){flyingPages(),whendomready(),domready()},document.addEventListener("pjax:success",whendomready),document.addEventListener("pjax:send",whenpjax),document.addEventListener("pjax:success",domready),document.onmousemove=function(e){let t=document.getElementById("mouseplace");t.style.left=e.clientX+"px",t.style.top=e.clientY+"px"},document.body.oncontextmenu=function(e){(e=e||window.event).preventDefault(),openadminmenu()};
