const t={bodyEl:document.querySelector("body"),btnStartEl:document.querySelector("[data-start]"),btnStopEl:document.querySelector("[data-stop]")};t.btnStartEl.addEventListener("click",(function(){t.btnStartEl.disabled=!0,t.btnStopEl.disabled=!1,e=setInterval((()=>{colorRandom=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.bodyEl.style.background=colorRandom}),1e3)})),t.btnStopEl.addEventListener("click",(function(){t.btnStartEl.disabled=!1,t.btnStopEl.disabled=!0,clearInterval(e)}));let e=null;
//# sourceMappingURL=01-color-switcher.031469da.js.map
