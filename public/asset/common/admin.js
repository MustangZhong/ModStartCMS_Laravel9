!function(e){var n={};function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(a,t){if(1&t&&(a=i(a)),8&t)return a;if(4&t&&"object"==typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var n in a)i.d(e,n,function(t){return a[t]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/asset//",i(i.s=321)}({321:function(t,a,e){!function(c){window._pageTabManager={closeFromTab:function(){var t;window!=parent.window&&(t=window.frameElement.getAttribute("data-tab-page"),window.parent._pageTabManager.close(t))},updateTitleFromTab:function(t){var a;t&&window!=parent.window&&(a=window.frameElement.getAttribute("data-tab-page"),window.parent._pageTabManager.updateTitle(a,t))}},c(window).on("load",function(){c(".ub-panel-frame > .right > .content.fixed, .ub-panel-dialog .panel-dialog-body").scroll(function(){var t=document.createEvent("HTMLEvents");t.initEvent("scroll",!1,!0),window.dispatchEvent(t)});var t=c(window).width()<600,a=c(".ub-panel-frame");t?(a.find(".left-menu-shrink").on("click",function(){a.removeClass("left-toggle")}),a.find(".left-trigger").on("click",function(){a.addClass("left-toggle")})):a.find(".left-trigger").on("click",function(){a.toggleClass("left-toggle"),window.api.base.postSuccess(window.__msAdminRoot+"util/frame",{frameLeftToggle:a.is(".left-toggle")},function(t){})});var e=a.find(".left .menu"),n=null,i=a.find("#menuSearchKeywords");i.on("keyup",function(){var t=c(this).val();n&&clearTimeout(n),n=setTimeout(function(){var r;(r=c.trim(t))?(e.find(".title").addClass("open"),e.find("[data-keywords-filter]").attr("data-keywords-filter","hide"),e.find("[data-keywords-item]").attr("data-keywords-item","hide"),e.find("[data-keywords-filter]").each(function(t,a){var e=c(a).text().trim(),n=PinyinMatch.match(e,r),i=e;!1!==n&&(n=n,i=(e=e).substring(0,n[0])+"<mark>"+e.substring(n[0],n[1]+1)+"</mark>"+e.substring(n[1]+1),c(a).attr("data-keywords-filter","show"),c(a).attr("data-keywords-item","show")),c(a).find("span").html(i)}),e.find(">.menu-item>.children>.menu-item>.children").each(function(t,a){0<c(a).find("[data-keywords-filter=show]").length&&c(a).attr("data-keywords-item","show").prev().attr("data-keywords-item","show")}),e.find(">.menu-item>.children").each(function(t,a){0<c(a).find("[data-keywords-filter=show]").length&&c(a).attr("data-keywords-item","show").prev().attr("data-keywords-item","show")}),e.find("[data-keywords-filter=show][data-menu-title]").each(function(t,a){a=c(a).next();a.attr("data-keywords-item","show"),a.find("[data-keywords-filter]").attr("data-keywords-filter","show").attr("data-keywords-item","show")})):(e.find("[data-keywords-filter]").attr("data-keywords-filter","show"),e.find("[data-keywords-item]").attr("data-keywords-item","show"),e.find("[data-keywords-filter]").each(function(t,a){var e=c(a).text().trim();c(a).find("span").html(e)}))},200)}),i.val()&&i.trigger("keyup");var r,o,d=a.find("#adminTabPage"),s=a.find("#adminTabMenu"),l=a.find("#adminMainPage"),i=a.find("#adminTabRefresh");c("html").is("[page-tabs-enable]")&&!t?(r={draging:!1,scrollLeftStart:0,startX:0,startY:0,isDragged:!1},s.on("mousedown",function(t){r.draging=!0,r.scrollLeftStart=s.scrollLeft(),r.startX=t.pageX,r.startY=t.pageY,r.isDragged=!1}),s.on("mousemove",function(t){var a;r.draging&&(10<(a=t.pageX-r.startX)*a+(t=t.pageY-r.startY)*t&&(r.isDragged=!0),s.scrollLeft(r.scrollLeftStart-a))}),s.on("mouseup",function(t){r.draging=!1}),s.on("mouseleave",function(t){r.draging=!1}),o=Object.assign(window._pageTabManager,{data:[],id:1,runsOnFocus:[],normalTabUrl(t){if(0<t.indexOf("_is_tab=1"))return t;let a=(t=new URL(t,document.baseURI).href).split("#"),e=a[0];return e=e+(-1<e.indexOf("?")?"&":"?")+"_is_tab=1",e+(a[1]?"#"+a[1]:"")},getIndexById:function(t){t=parseInt(t);for(var a=0;a<this.data.length;a++)if(this.data[a].id==t)return a;return null},getById:function(t){t=this.getIndexById(t);return null===t?null:this.data[t]},getByUrl:function(t){t=this.normalTabUrl(t);for(var a=0;a<this.data.length;a++)if(this.data[a].url==t)return this.data[a];return null},close:function(t){var a,e=this.getIndexById(t);null!==e&&(a=this.data[e],d.find("[data-tab-page="+t+"]").remove(),s.find("[data-tab-menu="+t+"]").remove(),a.active&&(0<e?this.active(this.data[e-1].id):e<this.data.length-1?this.active(this.data[e+1].id):this.active(0)),this.data.splice(e,1),this.updateMainPage())},updateMainPage:function(){var t=0<this.data.filter(t=>t.active).length;l.toggleClass("hidden",t),d.toggleClass("hidden",!t)},activeId:function(){for(var t=0;t<this.data.length;t++)if(this.data[t].active)return this.data[t].id;return null},activeByUrl:function(t){t=this.getByUrl(t);t&&this.active(t.id)},refresh:function(){var t=this.activeId();(t?d.find("iframe[data-tab-page="+t+"]")[0].contentWindow:window).location.reload()},active:function(t){if(t){d.find("iframe").addClass("hidden").filter("[data-tab-page="+t+"]").removeClass("hidden"),s.find("a").removeClass("active").filter("[data-tab-menu="+t+"]").addClass("active");try{s.find("[data-tab-menu="+t+"]")[0].scrollIntoView({block:"center",behavior:"smooth"})}catch(t){}for(n=0;n<this.data.length;n++){var a=this.data[n].id==t;this.data[n].active!==a&&(a?this.data[n].option.focus():this.data[n].option.blur()),this.data[n].active=a}for(var e=d.find("iframe:not(.hidden)"),n=0;n<e.length;n++){var i=e[n];if(i.contentWindow&&i.contentWindow._pageTabManager&&i.contentWindow._pageTabManager.runsOnFocus){for(var r=0;r<i.contentWindow._pageTabManager.runsOnFocus.length;r++)(0,i.contentWindow._pageTabManager.runsOnFocus[r])();i.contentWindow._pageTabManager.runsOnFocus=[]}}this.updateMainPage()}else{d.find("iframe").addClass("hidden"),s.find("a").removeClass("active");try{s.find("[data-tab-menu-main]").addClass("active")[0].scrollIntoView({block:"center",behavior:"smooth"})}catch(t){}for(var n=0;n<this.data.length;n++)this.data[n].active&&this.data[n].option.blur(),this.data[n].active=!1;this.updateMainPage()}},open:function(t,a,e){e=Object.assign({focus:function(){},blur:function(){}},e),t=this.normalTabUrl(t);var n=this.getByUrl(t);n?this.active(n.id):(d.append(`<iframe src="${t}" class="hidden" frameborder="0" data-tab-page="${this.id}"></iframe>`),s.append(`<a href="javascript:;" data-tab-menu="${this.id}" draggable="false">${a}<i class="close iconfont icon-close"></i></a>`),this.data.push({url:t,title:a,id:this.id,active:!1,option:e}),this.active(this.id),this.id++)},updateTitle:function(t,a){s.find("[data-tab-menu="+t+"]").html(a+'<i class="close iconfont icon-close"></i>')}}),e.find("a").on("click",function(){var t=c(this);if(!t.is("[data-tab-menu-ignore]")){var a=t.attr("href");if(!["javascript:;"].includes(a)){var e=c.trim(t.text());return o.open(a,e,{focus:function(){t.closest(".ub-panel-frame").find(".menu-item").removeClass("active"),t.parent().addClass("active")},blur:function(){t.parent().removeClass("active")}}),!1}}}),s.on("click","[data-tab-menu-main]",function(){if(!r.isDragged)return o.active(null),!1}),s.on("click","[data-tab-menu]",function(){r.isDragged||o.active(c(this).attr("data-tab-menu"))}),s.on("click","[data-tab-menu] i.close",function(){return o.close(c(this).parent().attr("data-tab-menu")),!1}),i.on("click",function(){return o.refresh(),!1}),c(document).on("click","[data-tab-open]",function(){var a=c(this).attr("href");if(!["javascript:;"].includes(a)){let t=c(this).attr("data-tab-title");return t=t||c(this).text(),(window.parent!==window?window.parent._pageTabManager:o).open(a,t),!1}}),window._pageTabManager=o):i.remove(),a.find("#fullScreenTrigger").on("click",function(){return MS.util.fullscreen.trigger(),!1})})}.call(this,e(8))},8:function(t,a){t.exports=window.$}});