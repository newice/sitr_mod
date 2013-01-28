
/***********************************************************************************************************************
 * Includes
 ********************************************************************************************************************* */
//"use strict";
if (window.navigator.vendor.match(/Google/))
    var isChrome = true;
if (!isChrome){
    this.$ = this.jQuery = jQuery.noConflict(true);
}
/*! qTip2 v2.0.0 | http://craigsworks.com/projects/qtip2/ | Licensed MIT, GPL */
//(function(e,t,n){(function(e){"use strict";typeof define=="function"&&define.amd?define(["jquery"],e):jQuery&&!jQuery.fn.qtip&&e(jQuery)})(function(r){function D(e){var t=function(e){return e===o||"object"!=typeof e},n=function(e){return!r.isFunction(e)&&(!e&&!e.attr||e.length<1||"object"==typeof e&&!e.jquery)};if(!e||"object"!=typeof e)return s;t(e.metadata)&&(e.metadata={type:e.metadata});if("content"in e){if(t(e.content)||e.content.jquery)e.content={text:e.content};n(e.content.text||s)&&(e.content.text=s),"title"in e.content&&(t(e.content.title)&&(e.content.title={text:e.content.title}),n(e.content.title.text||s)&&(e.content.title.text=s))}return"position"in e&&t(e.position)&&(e.position={my:e.position,at:e.position}),"show"in e&&t(e.show)&&(e.show=e.show.jquery?{target:e.show}:{event:e.show}),"hide"in e&&t(e.hide)&&(e.hide=e.hide.jquery?{target:e.hide}:{event:e.hide}),"style"in e&&t(e.style)&&(e.style={classes:e.style}),r.each(w,function(){this.sanitize&&this.sanitize(e)}),e}function P(u,a,f,l){function I(e){var t=0,n,r=a,i=e.split(".");while(r=r[i[t++]])t<i.length&&(n=r);return[n||a,i.pop()]}function q(){var e=a.style.widget;H.toggleClass("ui-helper-reset "+T,e).toggleClass(k,a.style.def&&!e),j.content&&j.content.toggleClass(T+"-content",e),j.titlebar&&j.titlebar.toggleClass(T+"-header",e),j.button&&j.button.toggleClass(x+"-icon",!e)}function R(e){j.title&&(j.titlebar.remove(),j.titlebar=j.title=j.button=o,e!==s&&m.reposition())}function U(){var e=a.content.title.button,t=typeof e=="string",n=t?e:"Close tooltip";j.button&&j.button.remove(),e.jquery?j.button=e:j.button=r("<a />",{"class":"ui-state-default ui-tooltip-close "+(a.style.widget?"":x+"-icon"),title:n,"aria-label":n}).prepend(r("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),j.button.appendTo(j.titlebar).attr("role","button").click(function(e){return H.hasClass(N)||m.hide(e),s})}function z(){var e=y+"-title";j.titlebar&&R(),j.titlebar=r("<div />",{"class":x+"-titlebar "+(a.style.widget?"ui-widget-header":"")}).append(j.title=r("<div />",{id:e,"class":x+"-title","aria-atomic":i})).insertBefore(j.content).delegate(".ui-tooltip-close","mousedown keydown mouseup keyup mouseout",function(e){r(this).toggleClass("ui-state-active ui-state-focus",e.type.substr(-4)==="down")}).delegate(".ui-tooltip-close","mouseover mouseout",function(e){r(this).toggleClass("ui-state-hover",e.type==="mouseover")}),a.content.title.button&&U()}function W(e){var t=j.button,n=j.title;if(!m.rendered)return s;e?(n||z(),U()):t.remove()}function X(e,t){var n=j.title;if(!m.rendered||!e)return s;r.isFunction(e)&&(e=e.call(u,F.event,m));if(e===s||!e&&e!=="")return R(s);e.jquery&&e.length>0?n.empty().append(e.css({display:"block"})):n.html(e),t!==s&&m.rendered&&H[0].offsetWidth>0&&m.reposition(F.event)}function V(e,t){function o(e){function a(n){n&&(delete u[n.src],clearTimeout(m.timers.img[n.src]),r(n).unbind(B)),r.isEmptyObject(u)&&(t!==s&&m.reposition(F.event),e())}var o,u={};if((o=i.find("img[src]:not([height]):not([width])")).length===0)return a();o.each(function(e,t){if(u[t.src]!==n)return;var i=0,s=3;(function o(){if(t.height||t.width||i>s)return a(t);i+=1,m.timers.img[t.src]=setTimeout(o,700)})(),r(t).bind("error"+B+" load"+B,function(){a(this)}),u[t.src]=t})}var i=j.content;return!m.rendered||!e?s:(r.isFunction(e)&&(e=e.call(u,F.event,m)||""),e.jquery&&e.length>0?i.empty().append(e.css({display:"block"})):i.html(e),m.rendered<0?H.queue("fx",o):(P=0,o(r.noop)),m)}function J(){function h(e){if(H.hasClass(N))return s;clearTimeout(m.timers.show),clearTimeout(m.timers.hide);var t=function(){m.toggle(i,e)};a.show.delay>0?m.timers.show=setTimeout(t,a.show.delay):t()}function p(e){if(H.hasClass(N)||O||P)return s;var t=r(e.relatedTarget||e.target),i=t.closest(C)[0]===H[0],u=t[0]===o.show[0];clearTimeout(m.timers.show),clearTimeout(m.timers.hide);if(n.target==="mouse"&&i||a.hide.fixed&&/mouse(out|leave|move)/.test(e.type)&&(i||u)){try{e.preventDefault(),e.stopImmediatePropagation()}catch(f){}return}a.hide.delay>0?m.timers.hide=setTimeout(function(){m.hide(e)},a.hide.delay):m.hide(e)}function d(e){if(H.hasClass(N))return s;clearTimeout(m.timers.inactive),m.timers.inactive=setTimeout(function(){m.hide(e)},a.hide.inactive)}function v(e){m.rendered&&H[0].offsetWidth>0&&m.reposition(e)}var n=a.position,o={show:a.show.target,hide:a.hide.target,viewport:r(n.viewport),document:r(t),body:r(t.body),window:r(e)},l={show:r.trim(""+a.show.event).split(" "),hide:r.trim(""+a.hide.event).split(" ")},c=r.browser.msie&&parseInt(r.browser.version,10)===6;H.bind("mouseenter"+B+" mouseleave"+B,function(e){var t=e.type==="mouseenter";t&&m.focus(e),H.toggleClass(A,t)}),/mouse(out|leave)/i.test(a.hide.event)&&a.hide.leave==="window"&&o.window.bind("mouseout"+B+" blur"+B,function(e){!/select|option/.test(e.target.nodeName)&&!e.relatedTarget&&m.hide(e)}),a.hide.fixed?(o.hide=o.hide.add(H),H.bind("mouseover"+B,function(){H.hasClass(N)||clearTimeout(m.timers.hide)})):/mouse(over|enter)/i.test(a.show.event)&&o.hide.bind("mouseleave"+B,function(e){clearTimeout(m.timers.show)}),(""+a.hide.event).indexOf("unfocus")>-1&&n.container.closest("html").bind("mousedown"+B+" touchstart"+B,function(e){var t=r(e.target),n=m.rendered&&!H.hasClass(N)&&H[0].offsetWidth>0,i=t.parents(C).filter(H[0]).length>0;t[0]!==u[0]&&t[0]!==H[0]&&!i&&!u.has(t[0]).length&&!t.attr("disabled")&&m.hide(e)}),"number"==typeof a.hide.inactive&&(o.show.bind("qtip-"+f+"-inactive",d),r.each(b.inactiveEvents,function(e,t){o.hide.add(j.tooltip).bind(t+B+"-inactive",d)})),r.each(l.hide,function(e,t){var n=r.inArray(t,l.show),i=r(o.hide);n>-1&&i.add(o.show).length===i.length||t==="unfocus"?(o.show.bind(t+B,function(e){H[0].offsetWidth>0?p(e):h(e)}),delete l.show[n]):o.hide.bind(t+B,p)}),r.each(l.show,function(e,t){o.show.bind(t+B,h)}),"number"==typeof a.hide.distance&&o.show.add(H).bind("mousemove"+B,function(e){var t=F.origin||{},n=a.hide.distance,r=Math.abs;(r(e.pageX-t.pageX)>=n||r(e.pageY-t.pageY)>=n)&&m.hide(e)}),n.target==="mouse"&&(o.show.bind("mousemove"+B,function(e){E={pageX:e.pageX,pageY:e.pageY,type:"mousemove"}}),n.adjust.mouse&&(a.hide.event&&(H.bind("mouseleave"+B,function(e){(e.relatedTarget||e.target)!==o.show[0]&&m.hide(e)}),j.target.bind("mouseenter"+B+" mouseleave"+B,function(e){F.onTarget=e.type==="mouseenter"})),o.document.bind("mousemove"+B,function(e){m.rendered&&F.onTarget&&!H.hasClass(N)&&H[0].offsetWidth>0&&m.reposition(e||E)}))),(n.adjust.resize||o.viewport.length)&&(r.event.special.resize?o.viewport:o.window).bind("resize"+B,v),(o.viewport.length||c&&H.css("position")==="fixed")&&o.viewport.bind("scroll"+B,v)}function K(){var n=[a.show.target[0],a.hide.target[0],m.rendered&&j.tooltip[0],a.position.container[0],a.position.viewport[0],a.position.container.closest("html")[0],e,t];m.rendered?r([]).pushStack(r.grep(n,function(e){return typeof e=="object"})).unbind(B):a.show.target.unbind(B+"-create")}var m=this,g=t.body,y=x+"-"+f,O=0,P=0,H=r(),B=".qtip-"+f,j,F;m.id=f,m.rendered=s,m.destroyed=s,m.elements=j={target:u},m.timers={img:{}},m.options=a,m.checks={},m.plugins={},m.cache=F={event:{},target:r(),disabled:s,attr:l,onTarget:s,lastClass:""},m.checks.builtin={"^id$":function(e,t,n){var o=n===i?b.nextid:n,u=x+"-"+o;o!==s&&o.length>0&&!r("#"+u).length&&(H[0].id=u,j.content[0].id=u+"-content",j.title[0].id=u+"-title")},"^content.text$":function(e,t,n){V(n)},"^content.title.text$":function(e,t,n){if(!n)return R();!j.title&&n&&z(),X(n)},"^content.title.button$":function(e,t,n){W(n)},"^position.(my|at)$":function(e,t,n){"string"==typeof n&&(e[t]=new w.Corner(n))},"^position.container$":function(e,t,n){m.rendered&&H.appendTo(n)},"^show.ready$":function(){m.rendered?m.toggle(i):m.render(1)},"^style.classes$":function(e,t,n){H.attr("class",x+" qtip "+n)},"^style.width|height":function(e,t,n){H.css(t,n)},"^style.widget|content.title":q,"^events.(render|show|move|hide|focus|blur)$":function(e,t,n){H[(r.isFunction(n)?"":"un")+"bind"]("tooltip"+t,n)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var e=a.position;H.attr("tracking",e.target==="mouse"&&e.adjust.mouse),K(),J()}},r.extend(m,{_triggerEvent:function(e,t,n){var i=r.Event("tooltip"+e);return i.originalEvent=(n?r.extend({},n):o)||F.event||o,H.trigger(i,[m].concat(t||[])),!i.isDefaultPrevented()},render:function(e){if(m.rendered)return m;var t=a.content.text,n=a.content.title.text,o=a.position;return r.attr(u[0],"aria-describedby",y),H=j.tooltip=r("<div/>",{id:y,"class":x+" qtip "+k+" "+a.style.classes+" "+x+"-pos-"+a.position.my.abbrev(),width:a.style.width||"",height:a.style.height||"",tracking:o.target==="mouse"&&o.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":s,"aria-describedby":y+"-content","aria-hidden":i}).toggleClass(N,F.disabled).data("qtip",m).appendTo(a.position.container).append(j.content=r("<div />",{"class":x+"-content",id:y+"-content","aria-atomic":i})),m.rendered=-1,O=1,n&&(z(),r.isFunction(n)||X(n,s)),r.isFunction(t)||V(t,s),m.rendered=i,q(),r.each(a.events,function(e,t){r.isFunction(t)&&H.bind(e==="toggle"?"tooltipshow tooltiphide":"tooltip"+e,t)}),r.each(w,function(){this.initialize==="render"&&this(m)}),J(),H.queue("fx",function(t){m._triggerEvent("render"),O=0,(a.show.ready||e)&&m.toggle(i,F.event,s),t()}),m},get:function(e){var t,n;switch(e.toLowerCase()){case"dimensions":t={height:H.outerHeight(s),width:H.outerWidth(s)};break;case"offset":t=w.offset(H,a.position.container);break;default:n=I(e.toLowerCase()),t=n[0][n[1]],t=t.precedance?t.string():t}return t},set:function(e,t){function h(e,t){var n,r,i;for(n in l)for(r in l[n])if(i=(new RegExp(r,"i")).exec(e))t.push(i),l[n][r].apply(m,t)}var n=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,u=/^content\.(title|attr)|style/i,f=s,l=m.checks,c;return"string"==typeof e?(c=e,e={},e[c]=t):e=r.extend(i,{},e),r.each(e,function(t,i){var s=I(t.toLowerCase()),o;o=s[0][s[1]],s[0][s[1]]="object"==typeof i&&i.nodeType?r(i):i,e[t]=[s[0],s[1],i,o],f=n.test(t)||f}),D(a),O=1,r.each(e,h),O=0,m.rendered&&H[0].offsetWidth>0&&f&&m.reposition(a.position.target==="mouse"?o:F.event),m},toggle:function(e,n){function b(){e?(r.browser.msie&&H[0].style.removeAttribute("filter"),H.css("overflow",""),"string"==typeof u.autofocus&&r(u.autofocus,H).focus(),u.target.trigger("qtip-"+f+"-inactive")):H.css({display:"",visibility:"",opacity:"",left:"",top:""}),m._triggerEvent(e?"visible":"hidden")}if(n){if(/over|enter/.test(n.type)&&/out|leave/.test(F.event.type)&&a.show.target.add(n.target).length===a.show.target.length&&H.has(n.relatedTarget).length)return m;F.event=r.extend({},n)}if(!m.rendered)return e?m.render(1):m;var o=e?"show":"hide",u=a[o],l=a[e?"hide":"show"],c=a.position,h=a.content,p=H[0].offsetWidth>0,d=e||u.target.length===1,v=!n||u.target.length<2||F.target[0]===n.target,g,y;return(typeof e).search("boolean|number")&&(e=!p),!H.is(":animated")&&p===e&&v?m:m._triggerEvent(o,[90])?(r.attr(H[0],"aria-hidden",!e),e?(F.origin=r.extend({},E),m.focus(n),r.isFunction(h.text)&&V(h.text,s),r.isFunction(h.title.text)&&X(h.title.text,s),!_&&c.target==="mouse"&&c.adjust.mouse&&(r(t).bind("mousemove.qtip",function(e){E={pageX:e.pageX,pageY:e.pageY,type:"mousemove"}}),_=i),m.reposition(n,arguments[2]),!u.solo||r(C,u.solo).not(H).qtip("hide",r.Event("tooltipsolo"))):(clearTimeout(m.timers.show),delete F.origin,_&&!r(C+'[tracking="true"]:visible',u.solo).not(H).length&&(r(t).unbind("mousemove.qtip"),_=s),m.blur(n)),u.effect===s||d===s?(H[o](),b.call(H)):r.isFunction(u.effect)?(H.stop(1,1),u.effect.call(H,m),H.queue("fx",function(e){b(),e()})):H.fadeTo(90,e?1:0,b),e&&u.target.trigger("qtip-"+f+"-inactive"),m):m},show:function(e){return m.toggle(i,e)},hide:function(e){return m.toggle(s,e)},focus:function(e){if(!m.rendered)return m;var t=r(C),n=parseInt(H[0].style.zIndex,10),i=b.zindex+t.length,s=r.extend({},e),o;return H.hasClass(L)||m._triggerEvent("focus",[i],s)&&(n!==i&&(t.each(function(){this.style.zIndex>n&&(this.style.zIndex=this.style.zIndex-1)}),t.filter("."+L).qtip("blur",s)),H.addClass(L)[0].style.zIndex=i),m},blur:function(e){return H.removeClass(L),m._triggerEvent("blur",[H.css("zIndex")],e),m},reposition:function(n,i){if(!m.rendered||O)return m;O=1;var o=a.position.target,u=a.position,f=u.my,l=u.at,g=u.adjust,y=g.method.split(" "),b=H.outerWidth(s),S=H.outerHeight(s),x=0,T=0,N=H.css("position")==="fixed",C=u.viewport,k={left:0,top:0},L=u.container,A=H[0].offsetWidth>0,M,_,D;if(r.isArray(o)&&o.length===2)l={x:h,y:c},k={left:o[0],top:o[1]};else if(o==="mouse"&&(n&&n.pageX||F.event.pageX))l={x:h,y:c},n=E&&E.pageX&&(g.mouse||!n||!n.pageX)?{pageX:E.pageX,pageY:E.pageY}:(!n||n.type!=="resize"&&n.type!=="scroll"?n&&n.pageX&&n.type==="mousemove"?n:!g.mouse&&F.origin&&F.origin.pageX&&a.show.distance?F.origin:n:F.event)||n||F.event||E||{},k={top:n.pageY,left:n.pageX};else{o==="event"&&n&&n.target&&n.type!=="scroll"&&n.type!=="resize"?F.target=r(n.target):o!=="event"&&(F.target=r(o.jquery?o:j.target)),o=F.target,o=r(o).eq(0);if(o.length===0)return m;o[0]===t||o[0]===e?(x=w.iOS?e.innerWidth:o.width(),T=w.iOS?e.innerHeight:o.height(),o[0]===e&&(k={top:(C||o).scrollTop(),left:(C||o).scrollLeft()})):w.imagemap&&o.is("area")?M=w.imagemap(m,o,l,w.viewport?y:s):w.svg&&typeof o[0].xmlbase=="string"?M=w.svg(m,o,l,w.viewport?y:s):(x=o.outerWidth(s),T=o.outerHeight(s),k=w.offset(o,L)),M&&(x=M.width,T=M.height,_=M.offset,k=M.position);if(w.iOS>3.1&&w.iOS<4.1||w.iOS>=4.3&&w.iOS<4.33||!w.iOS&&N)D=r(e),k.left-=D.scrollLeft(),k.top-=D.scrollTop();k.left+=l.x===d?x:l.x===v?x/2:0,k.top+=l.y===p?T:l.y===v?T/2:0}return k.left+=g.x+(f.x===d?-b:f.x===v?-b/2:0),k.top+=g.y+(f.y===p?-S:f.y===v?-S/2:0),w.viewport?(k.adjusted=w.viewport(m,k,u,x,T,b,S),_&&k.adjusted.left&&(k.left+=_.left),_&&k.adjusted.top&&(k.top+=_.top)):k.adjusted={left:0,top:0},m._triggerEvent("move",[k,C.elem||C],n)?(delete k.adjusted,i===s||!A||isNaN(k.left)||isNaN(k.top)||o==="mouse"||!r.isFunction(u.effect)?H.css(k):r.isFunction(u.effect)&&(u.effect.call(H,m,r.extend({},k)),H.queue(function(e){r(this).css({opacity:"",height:""}),r.browser.msie&&this.style.removeAttribute("filter"),e()})),O=0,m):m},disable:function(e){return"boolean"!=typeof e&&(e=!H.hasClass(N)&&!F.disabled),m.rendered?(H.toggleClass(N,e),r.attr(H[0],"aria-disabled",e)):F.disabled=!!e,m},enable:function(){return m.disable(s)},destroy:function(){var e=u[0],t=r.attr(e,M),n=u.data("qtip");m.destroyed=i,m.rendered&&(H.stop(1,0).remove(),r.each(m.plugins,function(){this.destroy&&this.destroy()})),clearTimeout(m.timers.show),clearTimeout(m.timers.hide),K();if(!n||m===n)r.removeData(e,"qtip"),a.suppress&&t&&(r.attr(e,"title",t),u.removeAttr(M)),u.removeAttr("aria-describedby");return u.unbind(".qtip-"+f),delete S[m.id],u}})}function H(e,n){var u,a,f,l,c,h=r(this),p=r(t.body),d=this===t?p:h,v=h.metadata?h.metadata(n.metadata):o,m=n.metadata.type==="html5"&&v?v[n.metadata.name]:o,g=h.data(n.metadata.name||"qtipopts");try{g=typeof g=="string"?r.parseJSON(g):g}catch(y){}l=r.extend(i,{},b.defaults,n,typeof g=="object"?D(g):o,D(m||v)),a=l.position,l.id=e;if("boolean"==typeof l.content.text){f=h.attr(l.content.attr);if(l.content.attr===s||!f)return s;l.content.text=f}a.container.length||(a.container=p),a.target===s&&(a.target=d),l.show.target===s&&(l.show.target=d),l.show.solo===i&&(l.show.solo=a.container.closest("body")),l.hide.target===s&&(l.hide.target=d),l.position.viewport===i&&(l.position.viewport=a.container),a.container=a.container.eq(0),a.at=new w.Corner(a.at),a.my=new w.Corner(a.my);if(r.data(this,"qtip"))if(l.overwrite)h.qtip("destroy");else if(l.overwrite===s)return s;return l.suppress&&(c=r.attr(this,"title"))&&r(this).removeAttr("title").attr(M,c).attr("title",""),u=new P(h,l,e,!!f),r.data(this,"qtip",u),h.bind("remove.qtip-"+e+" removeqtip.qtip-"+e,function(){u.destroy()}),u}function B(e){var t=this,n=e.elements.tooltip,o=e.options.content.ajax,u=b.defaults.content.ajax,a=".qtip-ajax",f=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,l=i,c=s,h;e.checks.ajax={"^content.ajax":function(e,r,i){r==="ajax"&&(o=i),r==="once"?t.init():o&&o.url?t.load():n.unbind(a)}},r.extend(t,{init:function(){return o&&o.url&&n.unbind(a)[o.once?"one":"bind"]("tooltipshow"+a,t.load),t},load:function(n){function g(){var t;if(e.destroyed)return;l=s,v&&(c=i,e.show(n.originalEvent)),(t=u.complete||o.complete)&&r.isFunction(t)&&t.apply(o.context||e,arguments)}function y(t,n,i){var s;if(e.destroyed)return;d&&"string"==typeof t&&(t=r("<div/>").append(t.replace(f,"")).find(d)),(s=u.success||o.success)&&r.isFunction(s)?s.call(o.context||e,t,n,i):e.set("content.text",t)}function b(t,n,r){if(e.destroyed||t.status===0)return;e.set("content.text",n+": "+r)}if(c){c=s;return}var a=o.url.lastIndexOf(" "),p=o.url,d,v=!o.loading&&l;if(v)try{n.preventDefault()}catch(m){}else if(n&&n.isDefaultPrevented())return t;h&&h.abort&&h.abort(),a>-1&&(d=p.substr(a),p=p.substr(0,a)),h=r.ajax(r.extend({error:u.error||b,context:e},o,{url:p,success:y,complete:g}))},destroy:function(){h&&h.abort&&h.abort(),e.destroyed=i}}),t.init()}function j(e,t,n){var r=Math.ceil(t/2),i=Math.ceil(n/2),s={bottomright:[[0,0],[t,n],[t,0]],bottomleft:[[0,0],[t,0],[0,n]],topright:[[0,n],[t,0],[t,n]],topleft:[[0,0],[0,n],[t,n]],topcenter:[[0,n],[r,0],[t,n]],bottomcenter:[[0,0],[t,0],[r,n]],rightcenter:[[0,0],[t,i],[0,n]],leftcenter:[[t,0],[t,n],[0,i]]};return s.lefttop=s.bottomright,s.righttop=s.bottomleft,s.leftbottom=s.topright,s.rightbottom=s.topleft,s[e.string()]}function F(e,t){function A(e){var t=E.is(":visible");E.show(),e(),E.toggle(t)}function O(){x.width=g.height,x.height=g.width}function M(){x.width=g.width,x.height=g.height}function _(t,r,o,f){if(!b.tip)return;var l=m.corner.clone(),w=o.adjusted,E=e.options.position.adjust.method.split(" "),x=E[0],T=E[1]||E[0],N={left:s,top:s,x:0,y:0},C,k={},L;m.corner.fixed!==i&&(x===y&&l.precedance===u&&w.left&&l.y!==v?l.precedance=l.precedance===u?a:u:x!==y&&w.left&&(l.x=l.x===v?w.left>0?h:d:l.x===h?d:h),T===y&&l.precedance===a&&w.top&&l.x!==v?l.precedance=l.precedance===a?u:a:T!==y&&w.top&&(l.y=l.y===v?w.top>0?c:p:l.y===c?p:c),l.string()!==S.corner.string()&&(S.top!==w.top||S.left!==w.left)&&m.update(l,s)),C=m.position(l,w),C[l.x]+=P(l,l.x),C[l.y]+=P(l,l.y),C.right!==n&&(C.left=-C.right),C.bottom!==n&&(C.top=-C.bottom),C.user=Math.max(0,g.offset);if(N.left=x===y&&!!w.left)l.x===v?k["margin-left"]=N.x=C["margin-left"]-w.left:(L=C.right!==n?[w.left,-C.left]:[-w.left,C.left],(N.x=Math.max(L[0],L[1]))>L[0]&&(o.left-=w.left,N.left=s),k[C.right!==n?d:h]=N.x);if(N.top=T===y&&!!w.top)l.y===v?k["margin-top"]=N.y=C["margin-top"]-w.top:(L=C.bottom!==n?[w.top,-C.top]:[-w.top,C.top],(N.y=Math.max(L[0],L[1]))>L[0]&&(o.top-=w.top,N.top=s),k[C.bottom!==n?p:c]=N.y);b.tip.css(k).toggle(!(N.x&&N.y||l.x===v&&N.y||l.y===v&&N.x)),o.left-=C.left.charAt?C.user:x!==y||N.top||!N.left&&!N.top?C.left:0,o.top-=C.top.charAt?C.user:T!==y||N.left||!N.left&&!N.top?C.top:0,S.left=w.left,S.top=w.top,S.corner=l.clone()}function D(){var t=g.corner,n=e.options.position,r=n.at,o=n.my.string?n.my.string():n.my;return t===s||o===s&&r===s?s:(t===i?m.corner=new w.Corner(o):t.string||(m.corner=new w.Corner(t),m.corner.fixed=i),S.corner=new w.Corner(m.corner.string()),m.corner.string()!=="centercenter")}function P(e,t,n){t=t?t:e[e.precedance];var r=b.titlebar&&e.y===c,i=r?b.titlebar:E,s="border-"+t+"-width",o=function(e){return parseInt(e.css(s),10)},u;return A(function(){u=(n?o(n):o(b.content)||o(i)||o(E))||0}),u}function H(e){var t=b.titlebar&&e.y===c,n=t?b.titlebar:b.content,i=r.browser.mozilla,s=i?"-moz-":r.browser.webkit?"-webkit-":"",o="border-radius-"+e.y+e.x,u="border-"+e.y+"-"+e.x+"-radius",a=function(e){return parseInt(n.css(e),10)||parseInt(E.css(e),10)},f;return A(function(){f=a(u)||a(s+u)||a(s+o)||a(o)||0}),f}function B(e){function N(e,t,n){var r=e.css(t)||p;return n&&r===e.css(n)?s:f.test(r)?s:r}var t,n,o,u=b.tip.css("cssText",""),a=e||m.corner,f=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,l="border-"+a[a.precedance]+"-color",h="background-color",p="transparent",d=" !important",y=b.titlebar,w=y&&(a.y===c||a.y===v&&u.position().top+x.height/2+g.offset<y.outerHeight(i)),S=w?y:b.content;A(function(){T.fill=N(u,h)||N(S,h)||N(b.content,h)||N(E,h)||u.css(h),T.border=N(u,l,"color")||N(S,l,"color")||N(b.content,l,"color")||N(E,l,"color")||E.css(l),r("*",u).add(u).css("cssText",h+":"+p+d+";border:0"+d+";")})}function F(e){var t=e.precedance===a,n=x[t?f:l],r=x[t?l:f],i=e.string().indexOf(v)>-1,s=n*(i?.5:1),o=Math.pow,u=Math.round,c,h,p,d=Math.sqrt(o(s,2)+o(r,2)),m=[N/s*d,N/r*d];return m[2]=Math.sqrt(o(m[0],2)-o(N,2)),m[3]=Math.sqrt(o(m[1],2)-o(N,2)),c=d+m[2]+m[3]+(i?0:m[0]),h=c/d,p=[u(h*r),u(h*n)],{height:p[t?0:1],width:p[t?1:0]}}function I(e,t,n){return"<qvml:"+e+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(t||"")+' style="behavior: url(#default#VML); '+(n||"")+'" />'}var m=this,g=e.options.style.tip,b=e.elements,E=b.tooltip,S={top:0,left:0},x={width:g.width,height:g.height},T={},N=g.border||0,C=".qtip-tip",k=!!(r("<canvas />")[0]||{}).getContext,L;m.corner=o,m.mimic=o,m.border=N,m.offset=g.offset,m.size=x,e.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){m.init()||m.destroy(),e.reposition()},"^style.tip.(height|width)$":function(){x={width:g.width,height:g.height},m.create(),m.update(),e.reposition()},"^content.title.text|style.(classes|widget)$":function(){b.tip&&b.tip.length&&m.update()}},r.extend(m,{init:function(){var e=D()&&(k||r.browser.msie);return e&&(m.create(),m.update(),E.unbind(C).bind("tooltipmove"+C,_)),e},create:function(){var e=x.width,t=x.height,n;b.tip&&b.tip.remove(),b.tip=r("<div />",{"class":"ui-tooltip-tip"}).css({width:e,height:t}).prependTo(E),k?r("<canvas />").appendTo(b.tip)[0].getContext("2d").save():(n=I("shape",'coordorigin="0,0"',"position:absolute;"),b.tip.html(n+n),r("*",b.tip).bind("click mousedown",function(e){e.stopPropagation()}))},update:function(e,t){var n=b.tip,f=n.children(),l=x.width,y=x.height,C=g.mimic,L=Math.round,A,_,D,H,q;e||(e=S.corner||m.corner),C===s?C=e:(C=new w.Corner(C),C.precedance=e.precedance,C.x==="inherit"?C.x=e.x:C.y==="inherit"?C.y=e.y:C.x===C.y&&(C[e.precedance]=e[e.precedance])),A=C.precedance,e.precedance===u?O():M(),b.tip.css({width:l=x.width,height:y=x.height}),B(e),T.border!=="transparent"?(N=P(e,o),g.border===0&&N>0&&(T.fill=T.border),m.border=N=g.border!==i?g.border:N):m.border=N=0,D=j(C,l,y),m.size=q=F(e),n.css(q),e.precedance===a?H=[L(C.x===h?N:C.x===d?q.width-l-N:(q.width-l)/2),L(C.y===c?q.height-y:0)]:H=[L(C.x===h?q.width-l:0),L(C.y===c?N:C.y===p?q.height-y-N:(q.height-y)/2)],k?(f.attr(q),_=f[0].getContext("2d"),_.restore(),_.save(),_.clearRect(0,0,3e3,3e3),_.fillStyle=T.fill,_.strokeStyle=T.border,_.lineWidth=N*2,_.lineJoin="miter",_.miterLimit=100,_.translate(H[0],H[1]),_.beginPath(),_.moveTo(D[0][0],D[0][1]),_.lineTo(D[1][0],D[1][1]),_.lineTo(D[2][0],D[2][1]),_.closePath(),N&&(E.css("background-clip")==="border-box"&&(_.strokeStyle=T.fill,_.stroke()),_.strokeStyle=T.border,_.stroke()),_.fill()):(D="m"+D[0][0]+","+D[0][1]+" l"+D[1][0]+","+D[1][1]+" "+D[2][0]+","+D[2][1]+" xe",H[2]=N&&/^(r|b)/i.test(e.string())?parseFloat(r.browser.version,10)===8?2:1:0,f.css({coordsize:l+N+" "+(y+N),antialias:""+(C.string().indexOf(v)>-1),left:H[0],top:H[1],width:l+N,height:y+N}).each(function(e){var t=r(this);t[t.prop?"prop":"attr"]({coordsize:l+N+" "+(y+N),path:D,fillcolor:T.fill,filled:!!e,stroked:!e}).toggle(!!N||!!e),!e&&t.html()===""&&t.html(I("stroke",'weight="'+N*2+'px" color="'+T.border+'" miterlimit="1000" joinstyle="miter"'))})),t!==s&&m.position(e)},position:function(e){var t=b.tip,n={},i=Math.max(0,g.offset),o,p,d;return g.corner===s||!t?s:(e=e||m.corner,o=e.precedance,p=F(e),d=[e.x,e.y],o===u&&d.reverse(),r.each(d,function(t,r){var s,u,d;r===v?(s=o===a?h:c,n[s]="50%",n["margin-"+s]=-Math.round(p[o===a?f:l]/2)+i):(s=P(e,r),u=P(e,r,b.content),d=H(e),n[r]=t?u:i+(d>s?d:-s))}),n[e[o]]-=p[o===u?f:l],t.css({top:"",bottom:"",left:"",right:"",margin:""}).css(n),n)},destroy:function(){b.tip&&b.tip.remove(),b.tip=!1,E.unbind(C)}}),m.init()}function I(n){function y(){m=r(v,f).not("[disabled]").map(function(){return typeof this.focus=="function"?this:null})}function b(e){m.length<1&&e.length?e.not("body").blur():m.first().focus()}function E(e){var t=r(e.target),n=t.closest(".qtip"),i;i=n.length<1?s:parseInt(n[0].style.zIndex,10)>parseInt(f[0].style.zIndex,10),!i&&r(e.target).closest(C)[0]!==f[0]&&b(t)}var o=this,u=n.options.show.modal,a=n.elements,f=a.tooltip,l="#qtip-overlay",c=".qtipmodal",h=c+n.id,p="is-modal-qtip",d=r(t.body),v=w.modal.focusable.join(","),m={},g;n.checks.modal={"^show.modal.(on|blur)$":function(){o.init(),a.overlay.toggle(f.is(":visible"))},"^content.text$":function(){y()}},r.extend(o,{init:function(){return u.on?(g=o.create(),f.attr(p,i).css("z-index",w.modal.zindex+r(C+"["+p+"]").length).unbind(c).unbind(h).bind("tooltipshow"+c+" tooltiphide"+c,function(e,t,n){var i=e.originalEvent;if(e.target===f[0])if(i&&e.type==="tooltiphide"&&/mouse(leave|enter)/.test(i.type)&&r(i.relatedTarget).closest(g[0]).length)try{e.preventDefault()}catch(s){}else(!i||i&&!i.solo)&&o[e.type.replace("tooltip","")](e,n)}).bind("tooltipfocus"+c,function(e){if(e.isDefaultPrevented()||e.target!==f[0])return;var t=r(C).filter("["+p+"]"),n=w.modal.zindex+t.length,i=parseInt(f[0].style.zIndex,10);g[0].style.zIndex=n-2,t.each(function(){this.style.zIndex>i&&(this.style.zIndex-=1)}),t.end().filter("."+L).qtip("blur",e.originalEvent),f.addClass(L)[0].style.zIndex=n;try{e.preventDefault()}catch(s){}}).bind("tooltiphide"+c,function(e){e.target===f[0]&&r("["+p+"]").filter(":visible").not(f).last().qtip("focus",e)}),u.escape&&r(t).unbind(h).bind("keydown"+h,function(e){e.keyCode===27&&f.hasClass(L)&&n.hide(e)}),u.blur&&a.overlay.unbind(h).bind("click"+h,function(e){f.hasClass(L)&&n.hide(e)}),y(),o):o},create:function(){function n(){g.css({height:r(e).height(),width:r(e).width()})}var t=r(l);return t.length?a.overlay=t.insertAfter(r(C).last()):(g=a.overlay=r("<div />",{id:l.substr(1),html:"<div></div>",mousedown:function(){return s}}).hide().insertAfter(r(C).last()),r(e).unbind(c).bind("resize"+c,n),n(),g)},toggle:function(e,t,n){if(e&&e.isDefaultPrevented())return o;var a=u.effect,l=t?"show":"hide",c=g.is(":visible"),v=r("["+p+"]").filter(":visible").not(f),m;return g||(g=o.create()),g.is(":animated")&&c===t||!t&&v.length?o:(t?(g.css({left:0,top:0}),g.toggleClass("blurs",u.blur),u.stealfocus!==s&&(d.bind("focusin"+h,E),b(r("body :focus")))):d.unbind("focusin"+h),g.stop(i,s),r.isFunction(a)?a.call(g,t):a===s?g[l]():g.fadeTo(parseInt(n,10)||90,t?1:0,function(){t||r(this).hide()}),t||g.queue(function(e){g.css({left:"",top:""}),e()}),o)},show:function(e,t){return o.toggle(e,i,t)},hide:function(e,t){return o.toggle(e,s,t)},destroy:function(){var e=g;return e&&(e=r("["+p+"]").not(f).length<1,e?(a.overlay.remove(),r(t).unbind(c)):a.overlay.unbind(c+n.id),d.undelegate("*","focusin"+h)),f.removeAttr(p).unbind(c)}}),o.init()}function q(e){var n=this,i=e.elements,s=e.options,o=i.tooltip,u=".ie6-"+e.id,a=r("select, object").length<1,c=0,h;e.checks.ie6={"^content|style$":function(e,t,n){redraw()}},r.extend(n,{init:function(){a&&(i.bgiframe=r('<iframe class="ui-tooltip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';" style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>'),i.bgiframe.appendTo(o),o.bind("tooltipmove"+u,n.adjustBGIFrame)),h=r("<div/>",{id:"qtip-rcontainer"}).appendTo(t.body),n.redraw()},adjustBGIFrame:function(){var t=e.get("dimensions"),n=e.plugins.tip,r=i.tip,s,u;u=parseInt(o.css("border-left-width"),10)||0,u={left:-u,top:-u},n&&r&&(s=n.corner.precedance==="x"?["width","left"]:["height","top"],u[s[1]]-=r[s[0]]()),i.bgiframe.css(u).css(t)},redraw:function(){if(e.rendered<1||c)return n;var t=s.style,r=s.position.container,i,u,a,p;return c=1,t.height&&o.css(l,t.height),t.width?o.css(f,t.width):(o.css(f,"").appendTo(h),u=o.width(),u%2<1&&(u+=1),a=o.css("max-width")||"",p=o.css("min-width")||"",i=(a+p).indexOf("%")>-1?r.width()/100:0,a=(a.indexOf("%")>-1?i:1)*parseInt(a,10)||u,p=(p.indexOf("%")>-1?i:1)*parseInt(p,10)||0,u=a+p?Math.min(Math.max(u,p),a):u,o.css(f,Math.round(u)).appendTo(r)),c=0,n},destroy:function(){a&&i.bgiframe.remove(),o.unbind(u)}}),n.init()}var i=!0,s=!1,o=null,u="x",a="y",f="width",l="height",c="top",h="left",p="bottom",d="right",v="center",m="flip",g="flipinvert",y="shift",b,w,E,S={},x="ui-tooltip",T="ui-widget",N="ui-state-disabled",C="div.qtip."+x,k=x+"-default",L=x+"-focus",A=x+"-hover",O="_replacedByqTip",M="oldtitle",_;b=r.fn.qtip=function(e,t,u){var a=(""+e).toLowerCase(),f=o,l=r.makeArray(arguments).slice(1),c=l[l.length-1],h=this[0]?r.data(this[0],"qtip"):o;if(!arguments.length&&h||a==="api")return h;if("string"==typeof e)return this.each(function(){var e=r.data(this,"qtip");if(!e)return i;c&&c.timeStamp&&(e.cache.event=c);if(a!=="option"&&a!=="options"||!t)e[a]&&e[a].apply(e[a],l);else{if(!r.isPlainObject(t)&&u===n)return f=e.get(t),s;e.set(t,u)}}),f!==o?f:this;if("object"==typeof e||!arguments.length)return h=D(r.extend(i,{},e)),b.bind.call(this,h,c)},b.bind=function(e,t){return this.each(function(o){function p(e){function t(){c.render(typeof e=="object"||u.show.ready),a.show.add(a.hide).unbind(l)}if(c.cache.disabled)return s;c.cache.event=r.extend({},e),c.cache.target=e?r(e.target):[n],u.show.delay>0?(clearTimeout(c.timers.show),c.timers.show=setTimeout(t,u.show.delay),f.show!==f.hide&&a.hide.bind(f.hide,function(){clearTimeout(c.timers.show)})):t()}var u,a,f,l,c,h;h=r.isArray(e.id)?e.id[o]:e.id,h=!h||h===s||h.length<1||S[h]?b.nextid++:S[h]=h,l=".qtip-"+h+"-create",c=H.call(this,h,e);if(c===s)return i;u=c.options,r.each(w,function(){this.initialize==="initialize"&&this(c)}),a={show:u.show.target,hide:u.hide.target},f={show:r.trim(""+u.show.event).replace(/ /g,l+" ")+l,hide:r.trim(""+u.hide.event).replace(/ /g,l+" ")+l},/mouse(over|enter)/i.test(f.show)&&!/mouse(out|leave)/i.test(f.hide)&&(f.hide+=" mouseleave"+l),a.show.bind("mousemove"+l,function(e){E={pageX:e.pageX,pageY:e.pageY,type:"mousemove"},c.cache.onTarget=i}),a.show.bind(f.show,p),(u.show.ready||u.prerender)&&p(t)})},w=b.plugins={Corner:function(e){e=(""+e).replace(/([A-Z])/," $1").replace(/middle/gi,v).toLowerCase(),this.x=(e.match(/left|right/i)||e.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(e.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var t=e.charAt(0);this.precedance=t==="t"||t==="b"?a:u,this.string=function(){return this.precedance===a?this.y+this.x:this.x+this.y},this.abbrev=function(){var e=this.x.substr(0,1),t=this.y.substr(0,1);return e===t?e:this.precedance===a?t+e:e+t},this.invertx=function(e){this.x=this.x===h?d:this.x===d?h:e||this.x},this.inverty=function(e){this.y=this.y===c?p:this.y===p?c:e||this.y},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone,invertx:this.invertx,inverty:this.inverty}}},offset:function(e,t){function f(e,t){n.left+=t*e.scrollLeft(),n.top+=t*e.scrollTop()}var n=e.offset(),i=e.closest("body")[0],s=t,o,u,a;if(s){do s.css("position")!=="static"&&(u=s.position(),n.left-=u.left+(parseInt(s.css("borderLeftWidth"),10)||0)+(parseInt(s.css("marginLeft"),10)||0),n.top-=u.top+(parseInt(s.css("borderTopWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0),!o&&(a=s.css("overflow"))!=="hidden"&&a!=="visible"&&(o=s));while((s=r(s[0].offsetParent)).length);o&&o[0]!==i&&f(o,1)}return n},iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||s,fn:{attr:function(e,t){if(this.length){var n=this[0],i="title",s=r.data(n,"qtip");if(e===i&&s&&"object"==typeof s&&s.options.suppress)return arguments.length<2?r.attr(n,M):(s&&s.options.content.attr===i&&s.cache.attr&&s.set("content.text",t),this.attr(M,t))}return r.fn["attr"+O].apply(this,arguments)},clone:function(e){var t=r([]),n="title",i=r.fn["clone"+O].apply(this,arguments);return e||i.filter("["+M+"]").attr("title",function(){return r.attr(this,M)}).removeAttr(M),i}}},r.each(w.fn,function(e,t){if(!t||r.fn[e+O])return i;var n=r.fn[e+O]=r.fn[e];r.fn[e]=function(){return t.apply(this,arguments)||n.apply(this,arguments)}}),r.ui||(r["cleanData"+O]=r.cleanData,r.cleanData=function(e){for(var t=0,i;(i=e[t])!==n;t++)try{r(i).triggerHandler("removeqtip")}catch(s){}r["cleanData"+O](e)}),b.version="@VERSION",b.nextid=0,b.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),b.zindex=15e3,b.defaults={prerender:s,id:s,overwrite:i,suppress:i,content:{text:i,attr:"title",title:{text:s,button:s}},position:{my:"top left",at:"bottom right",target:s,container:s,viewport:s,adjust:{x:0,y:0,mouse:i,resize:i,method:"flip flip"},effect:function(e,t,n){r(this).animate(t,{duration:200,queue:s})}},show:{target:s,event:"mouseenter",effect:i,delay:90,solo:s,ready:s,autofocus:s},hide:{target:s,event:"mouseleave",effect:i,delay:0,fixed:s,inactive:s,leave:"window",distance:s},style:{classes:"",widget:s,width:s,height:s,def:i},events:{render:o,move:o,show:o,hide:o,toggle:o,visible:o,hidden:o,focus:o,blur:o}},w.svg=function(e,n,i,s){var o=r(t),u=n[0],a={width:0,height:0,position:{top:1e10,left:1e10}},f,l,c,h,p;while(!u.getBBox)u=u.parentNode;if(u.getBBox&&u.parentNode){f=u.getBBox(),l=u.getScreenCTM(),c=u.farthestViewportElement||u;if(!c.createSVGPoint)return a;h=c.createSVGPoint(),h.x=f.x,h.y=f.y,p=h.matrixTransform(l),a.position.left=p.x,a.position.top=p.y,h.x+=f.width,h.y+=f.height,p=h.matrixTransform(l),a.width=p.x-a.position.left,a.height=p.y-a.position.top,a.position.left+=o.scrollLeft(),a.position.top+=o.scrollTop()}return a},w.ajax=function(e){var t=e.plugins.ajax;return"object"==typeof t?t:e.plugins.ajax=new B(e)},w.ajax.initialize="render",w.ajax.sanitize=function(e){var t=e.content,n;t&&"ajax"in t&&(n=t.ajax,typeof n!="object"&&(n=e.content.ajax={url:n}),"boolean"!=typeof n.once&&n.once&&(n.once=!!n.once))},r.extend(i,b.defaults,{content:{ajax:{loading:i,once:i}}}),w.tip=function(e){var t=e.plugins.tip;return"object"==typeof t?t:e.plugins.tip=new F(e)},w.tip.initialize="render",w.tip.sanitize=function(e){var t=e.style,n;t&&"tip"in t&&(n=e.style.tip,typeof n!="object"&&(e.style.tip={corner:n}),/string|boolean/i.test(typeof n.corner)||(n.corner=i),typeof n.width!="number"&&delete n.width,typeof n.height!="number"&&delete n.height,typeof n.border!="number"&&n.border!==i&&delete n.border,typeof n.offset!="number"&&delete n.offset)},r.extend(i,b.defaults,{style:{tip:{corner:i,mimic:s,width:6,height:6,border:i,offset:0}}}),w.modal=function(e){var t=e.plugins.modal;return"object"==typeof t?t:e.plugins.modal=new I(e)},w.modal.initialize="render",w.modal.sanitize=function(e){e.show&&(typeof e.show.modal!="object"?e.show.modal={on:!!e.show.modal}:typeof e.show.modal.on=="undefined"&&(e.show.modal.on=i))},w.modal.zindex=b.zindex-200,w.modal.focusable=["a[href]","area[href]","input","select","textarea","button","iframe","object","embed","[tabindex]","[contenteditable]"],r.extend(i,b.defaults,{show:{modal:{on:s,effect:i,blur:i,stealfocus:i,escape:i}}}),w.viewport=function(n,r,i,s,o,m,b){function j(e,t,n,i,s,o,u,a,f){var l=r[s],c=S[e],h=T[e],p=n===y,d=-O.offset[s]+A.offset[s]+A["scroll"+s],m=c===s?f:c===o?-f:-f/2,b=h===s?a:h===o?-a:-a/2,w=_&&_.size?_.size[u]||0:0,E=_&&_.corner&&_.corner.precedance===e&&!p?w:0,x=d-l+E,N=l+f-A[u]-d+E,C=m-(S.precedance===e||c===S[t]?b:0)-(h===v?a/2:0);return p?(E=_&&_.corner&&_.corner.precedance===t?w:0,C=(c===s?1:-1)*m-E,r[s]+=x>0?x:N>0?-N:0,r[s]=Math.max(-O.offset[s]+A.offset[s]+(E&&_.corner[e]===v?_.offset:0),l-C,Math.min(Math.max(-O.offset[s]+A.offset[s]+A[u],l+C),r[s]))):(i*=n===g?2:0,x>0&&(c!==s||N>0)?(r[s]-=C+i,H["invert"+e](s)):N>0&&(c!==o||x>0)&&(r[s]-=(c===v?-C:C)+i,H["invert"+e](o)),r[s]<d&&-r[s]>N&&(r[s]=l,H=S.clone())),r[s]-l}var w=i.target,E=n.elements.tooltip,S=i.my,T=i.at,N=i.adjust,C=N.method.split(" "),k=C[0],L=C[1]||C[0],A=i.viewport,O=i.container,M=n.cache,_=n.plugins.tip,D={left:0,top:0},P,H,B;if(!A.jquery||w[0]===e||w[0]===t.body||N.method==="none")return D;P=E.css("position")==="fixed",A={elem:A,height:A[(A[0]===e?"h":"outerH")+"eight"](),width:A[(A[0]===e?"w":"outerW")+"idth"](),scrollleft:P?0:A.scrollLeft(),scrolltop:P?0:A.scrollTop(),offset:A.offset()||{left:0,top:0}},O={elem:O,scrollLeft:O.scrollLeft(),scrollTop:O.scrollTop(),offset:O.offset()||{left:0,top:0}};if(k!=="shift"||L!=="shift")H=S.clone();return D={left:k!=="none"?j(u,a,k,N.x,h,d,f,s,m):0,top:L!=="none"?j(a,u,L,N.y,c,p,l,o,b):0},H&&M.lastClass!==(B=x+"-pos-"+H.abbrev())&&E.removeClass(n.cache.lastClass).addClass(n.cache.lastClass=B),D},w.imagemap=function(e,t,n,i){function E(e,t,n){var r=0,i=1,s=1,o=0,u=0,a=e.width,f=e.height;while(a>0&&f>0&&i>0&&s>0){a=Math.floor(a/2),f=Math.floor(f/2),n.x===h?i=a:n.x===d?i=e.width-a:i+=Math.floor(a/2),n.y===c?s=f:n.y===p?s=e.height-f:s+=Math.floor(f/2),r=t.length;while(r--){if(t.length<2)break;o=t[r][0]-e.position.left,u=t[r][1]-e.position.top,(n.x===h&&o>=i||n.x===d&&o<=i||n.x===v&&(o<i||o>e.width-i)||n.y===c&&u>=s||n.y===p&&u<=s||n.y===v&&(u<s||u>e.height-s))&&t.splice(r,1)}}return{left:t[0][0],top:t[0][1]}}t.jquery||(t=r(t));var s=e.cache.areas={},o=(t[0].shape||t.attr("shape")).toLowerCase(),u=t[0].coords||t.attr("coords"),a=u.split(","),f=[],l=r('img[usemap="#'+t.parent("map").attr("name")+'"]'),m=l.offset(),g={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10}},y=0,b=0,w;m.left+=Math.ceil((l.outerWidth()-l.width())/2),m.top+=Math.ceil((l.outerHeight()-l.height())/2);if(o==="poly"){y=a.length;while(y--)b=[parseInt(a[--y],10),parseInt(a[y+1],10)],b[0]>g.position.right&&(g.position.right=b[0]),b[0]<g.position.left&&(g.position.left=b[0]),b[1]>g.position.bottom&&(g.position.bottom=b[1]),b[1]<g.position.top&&(g.position.top=b[1]),f.push(b)}else{y=-1;while(y++<a.length)f.push(parseInt(a[y],10))}switch(o){case"rect":g={width:Math.abs(f[2]-f[0]),height:Math.abs(f[3]-f[1]),position:{left:Math.min(f[0],f[2]),top:Math.min(f[1],f[3])}};break;case"circle":g={width:f[2]+2,height:f[2]+2,position:{left:f[0],top:f[1]}};break;case"poly":g.width=Math.abs(g.position.right-g.position.left),g.height=Math.abs(g.position.bottom-g.position.top),n.abbrev()==="c"?g.position={left:g.position.left+g.width/2,top:g.position.top+g.height/2}:(s[n+u]||(g.position=E(g,f.slice(),n),i&&(i[0]==="flip"||i[1]==="flip")&&(g.offset=E(g,f.slice(),{x:n.x===h?d:n.x===d?h:v,y:n.y===c?p:n.y===p?c:v}),g.offset.left-=g.position.left,g.offset.top-=g.position.top),s[n+u]=g),g=s[n+u]),g.width=g.height=0}return g.position.left+=m.left,g.position.top+=m.top,g},w.ie6=function(e){var t=r.browser,n=e.plugins.ie6;return!t.msie||(""+t.version).charAt(0)!=="6"?s:"object"==typeof n?n:e.plugins.ie6=new q(e)},w.ie6.initialize="render"})})(window,document);

$.extend({
             exclusive:function (arr) {
                 return $.grep(arr, function (v, k) {
                     return $.inArray(v, arr) === k;
                 });
             },
             /**
              * Updates existing props in (a) with values of props from param[2..n]. Recursing over child objects
              * @param {object} Object to update
              * @param {object} Object containing values merge into param1
              * @param {object} Other objects containing values
              * @return {object} Modified original object
              */
             mergeValues:function (a, b, c) {
                 var length = arguments.length;
                 if (length == 1 || typeof arguments[0] !== "object" || typeof arguments[1] !== "object") {
                     return arguments[0];
                 }
                 var args = jQuery.makeArray(arguments);
                 var i = 1;
                 var target = args[0];
                 for (; i < length; i++) {
                     var copy = args[i];
                     for (var name in copy) {
                         if (!target.hasOwnProperty(name)) {
                             target[name] = copy[name];
                             continue;
                         }
                         if (typeof target[name] == "object" && typeof copy[name] == "object") {
                             target[name] = jQuery.mergeValues(target[name], copy[name])
                         }
                         else if (copy.hasOwnProperty(name) && copy[name] != undefined) {
                             target[name] = copy[name]
                         }
                     }
                 }
                 return target
             },
    decodeUrlParam :function(string){
        var str = string.split('?').pop().split('&')
        var obj = {};
        for (var i = 0; i <str.length;i++){
            var param = str[i].split('=')
            if (param.length !== 2){
                continue;
            }
            obj[param[0]] = decodeURIComponent(param[1].replace(/\+/g, " "))
        }
        return obj
    },
         });

var events = (function () {
    var _events = {};
    var retEvents = function (id) {
        var callbacks, topic = id && _events[ id ];
        if (!topic) {
            callbacks = $.Callbacks("");
            topic = {
                pub:callbacks.fire,
                sub:callbacks.add,
                unsub:callbacks.remove
            };
            if (id) {
                _events[ id ] = topic;
            }
        }
        return topic;
    };
    /**
     * Call a function <tt>time</tt> (ms) in the future
     * @param {function} Function to be called
     * @param {number} Wait time in milliseconds
     * @return {function} Function to cancel scheduled callback
     */
    retEvents.scheduleAction = function (callback, time) {
        return clearTimeout.bind(undefined, setTimeout(callback, time));
    };
    /**
     * Call a function at specified DateTime in the future
     * @param {function} Function to be run
     * @param {number} [time=0] DateTime to call function
     * @return {function} Function to cancel scheduled callback
     */
    retEvents.scheduleActionAtTime = function (callback, time) {
//            console.log('timer: %o', (time - $.now() > 0 ? time - $.now() : 0));
        return retEvents.scheduleAction(callback, (time - $.now() > 0 ? time - $.now() : 0))
    };
    /**
     * Call a function every <tt>time</tt> (ms) in the future
     * @param {function} Function to be called
     * @param {number} Wait time in milliseconds between calls
     * @return {function} Function to clear the recurring event
     */
    retEvents.scheduleActionAtInterval = function (callback, time) {
        return clearInterval.bind(undefined, setInterval(callback, time));
    };
    return retEvents
})();
/***********************************************************************************************************************
 * Globals
 **********************************************************************************************************************/
var debug = false;
var log = true;   // SITR logging pane
if (!unsafeWindow) unsafeWindow = window;
/***********************************************************************************************************************
 * Inject button into page before the page renders the YUI menu or it will not be animated (less work)
 **********************************************************************************************************************/
$('.menu_slots > .expandable').eq($('.menu_slots > .expandable').length - 1).after('<li class="expandable slot99 SITR_Menu" onclick=""><div class="SITR_Menu2 image" style="background-image: url(data:image/png;base64,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); background-position:center center; background-size:122% 122%"></div></div><div class="name"><span class="namebox">SITR Resource Overview</span></div></li>');

/***********************************************************************************************************************
 * Utility Functions
 **********************************************************************************************************************/
var Utils = {
    wrapInClosure:function (obj) {
        return (function (x) {
            return function () {
                return x
            }
        })(obj)
    },
    existsIn :function(input, test) {
        try {
            var ret = input.indexOf(test) !== -1
        }
        catch (e) {
            return false
        }
        return ret;
    },
    estimateTravelTime:function(city1, city2) {
        if(!city1 || !city2) return 0;
    if (city1[0] == city2[0] && city1[1] == city2[1]) {
        var time = 1200 / 60 * 0.5;
    }
    else {
        time = 1200 / 60 * (Math.sqrt(Math.pow((city2[0] - city1[0]), 2) + Math.pow((city2[1] - city1[1]), 2)));
    }
    return Math.floor(time * 60 * 1000);
    },
    addStyleSheet:function (style) {
        var getHead = document.getElementsByTagName("HEAD")[0];
        var cssNode = window.document.createElement('style');
        var elementStyle = getHead.appendChild(cssNode);
        elementStyle.innerHTML = style;
        return elementStyle;
    },
    escapeRegExp:function (str) {
        return str.replace(/[\[\]\/\{\}\(\)\-\?\$\*\+\.\\\^\|]/g, "\\$&");
    },
    /**
     * Replaces '{key}' in inputString with 'value' from replacements, can take objects or arrays
     * @param inputString [string] input text to be transformed
     * @param replacements [object] object containing key/value pairs to replace
     * @return {*}
     */
    format:function (inputString, replacements) {
        var str = ''+inputString;
        var keys = Object.keys(replacements)
        var i = keys.length
        while (i--) {
            str = str.replace(new RegExp(this.escapeRegExp('{'+keys[i]+'}'), 'g'), replacements[keys[i]])
        }
        return str
    },
    cacheFunction : function(toExecute, expiry){
    var cachedTime  = $.now
    var cachedResult = undefined;
    return function (){
        if (cachedResult === undefined || cachedTime > $.now() - expiry){
            cachedResult = toExecute()
            cachedTime = $.now()
        }
        return cachedResult
    }
}
}
/***********************************************************************************************************************
 * SITR
 **********************************************************************************************************************/
var SITR = {
    version:1.207,
    scriptId:132578,
    scriptName:'Simple Ikariam Town Resources Board',
    logger:null,
    loaded:false,
    log:function (val) {
        if (debug) console.log('SITR: ', $.makeArray(arguments));
        if (log) {
            if (this.logger) {
                this.logger.val(val + '\n' + this.logger.val());
                return true
            }
            else {
                render.$tabs.append($(document.createElement("div")).attr('id', 'SITR_Log'));
                $('#SITR_Log').html('<div><textarea id="SITR_Logbox" rows="20" cols="120"></textarea></div>');
                $('<li><a href="#SITR_Log"><img class="ui-icon ui-icon-info"/></a></li>')
                    .appendTo( "#SITR_Tabs .ui-tabs-nav" );
                render.$tabs.tabs('refresh');
                this.logger = $('#SITR_Logbox');
                return this.log(val)
            }
        }
    },
    error:function (func, e) {
        this.log('****** Error raised in ' + func + ' ******');
        this.log(e.name + ' : ' + e.message);
        this.log(e.stack);
        this.log('****** End ******')
        if (debug){
            console.error('****** Error raised in ' + func + ' ******');
            console.error(e.name + ' : ' + e.message);
            console.error(e.stack);
            console.error('****** End ******')
        }
    },
    Init:function () {
        ikariam.Init();
        database.Init(ikariam.Host());
        render.Init();
        this.CheckForUpdates(false);
        GM_registerMenuCommand(this.scriptName + ' - Manual Update', function () {
            SITR.CheckForUpdates(true);
        });
    },
    //original snippet taken from http://userscripts.org/scripts/show/20145
    CheckForUpdates:function (forced) {
        if ((forced) || ((database.getGlobalData.LastUpdateCheck + 86400000 <= $.now()) && database.options.autoUpdates)) // Checks once a day (24 h * 60 m * 60 s * 1000 ms)
        {
            try {
                GM_xmlhttpRequest({
                    method:'GET',
                    url:'http://userscripts.org/scripts/source/' + SITR.scriptId + '.meta.js?' + $.now(),
                    headers:{'Cache-Control':'no-cache'},
                    onload:function (resp) {
                        var remote_version, rt;
                        rt = resp.responseText;
                        database.getGlobalData.LastUpdateCheck = $.now();
                        remote_version = parseFloat(/@version\s*(.*?)\s*$/m.exec(rt)[1]);
                        if (SITR.version != -1) {
                            if (remote_version > SITR.version) {
                                if (confirm('There is an update available for the Greasemonkey script "' + SITR.scriptName + '."\nWould you like to go to the install page now?')) {
                                    GM_openInTab('http://userscripts.org/scripts/show/' + SITR.scriptId);
                                }
                            }
                            else
                                if (forced)
                                    render.toast('No update is available for "' + SITR.scriptName + '."');
                        }
                        database.getGlobalData.latestVersion = remote_version;
                    }
                });
            }
            catch (err) {
                if (forced)
                    render.toast('An error occurred while checking for updates:\n' + err);
            }
        }
    },
    HardReset:function () {
        database = {};
        SITR.deleteVar("Options");
        SITR.deleteVar("cities");
        SITR.deleteVar("LocalStrings");
        SITR.deleteVar("globalData");
        render.toast('Data Reset, reloading the page in a few seconds');
        setTimeout(function () {
            document.location = document.getElementById('js_cityLink').children[0].href
        }, 3500);
    }
};
/***********************************************************************************************************************
 * database
 **********************************************************************************************************************/
var database = {
    cities:{},
    options:{
        version:SITR.version,
        cityOrder : [],
        fullArmyTable:false,
        onTop:true,
        showOnIslandView:false,
        showOnWorldView:false,
        autoUpdates:true,
        wineWarningTime:24,
        largeFont:false,
        altBuildingList:false,
        openBuilding:-1,
        restoreRes:-1,
        window:{
            left:150,
            top:180,
            activeTab:0,
            visible:true
        },
        addOptions:function (objVals) {
            return $.mergeValues(this, objVals);
        }
    },
    _globalData : {},
    Init:function (host) {
        var prefix = host;
        prefix = prefix.replace('.ikariam.', '-');
        prefix = prefix.replace('.', '-');
        this.Prefix = prefix;
        this._globalData = new GlobalData();
        //this.options = new Options(); //TODO: create options class
        this.Load();
        ikariam.getLocalizationStrings()
        this.startMonitoringChanges()
        $(window).on("beforeunload", function () {
            setTimeout(function () {
                database.Save();
            }, 0);
        });
    },
    addCity:function (id, a) {
        if (a) {
            return $.mergeValues(new City(id), a);
        }
        else return new City(id);
    },
    get getBuildingCounts (){
        var buildingCounts = {};
        $.each(this.cities,function(cityId, city){
            $.each(Constant.Buildings, function(key, value){
                buildingCounts[value] = Math.max(buildingCounts[value]||0,city.getBuildingsFromName(value).length)
            })
        })
        return buildingCounts
    },
    startMonitoringChanges :function(){
        //events('cityChanged').sub(this.cityChange.bind(this));
        events('buildingsUpdated').sub(this.Save.bind(this));
        events('globalDataUpdated').sub(this.Save.bind(this));
        events('movementsUpdated').sub(this.Save.bind(this));
        events('resourcesUpdated').sub(this.Save.bind(this));
        //events('cityData').sub(this.Save.bind(this));
        events('militaryUpdated').sub(this.Save.bind(this));
    },
    Load:function () {
        var options = this.UnSerialize(SITR.getVar("Options", ""));
        if (typeof options === 'object') {
            if (!this.isDatabaseOutdated(options.version)) {

                $.mergeValues(this.options, options)

                var globalData = this.UnSerialize(SITR.getVar("globalData", ""));
                if (typeof globalData == 'object') {
                    $.mergeValues(this._globalData, globalData);

                }
                var cities = this.UnSerialize(SITR.getVar("cities", ""));
                if (typeof cities == 'object') {
                    for (var cityID in cities) {
                        (this.cities[cityID] = this.addCity(cities[cityID]._id, cities[cityID])).init()
                    }
                }
            }
          this._globalData.init();
        }
    },
    Serialize:function (data) {
        if (data)
            try {
                var ret = JSON.stringify(data)
            }
            catch (e) {
                SITR.log('error saving')
            }
        return ret || undefined;
    },
    UnSerialize:function (data) {
        if (data)
            try {
                var ret = JSON.parse(data)
            }
            catch (e) {
                SITR.log('error loading')
            }
        return ret || undefined;
    },
    Save:function () {
        events.scheduleAction(function(){
            SITR.setVar("cities", database.Serialize(database.cities));
            SITR.setVar("Options", database.Serialize(database.options));
            SITR.setVar("globalData", database.Serialize(database._globalData));
        })

    },
    get getGlobalData(){return this._globalData},
    isDatabaseOutdated:function(version){
        return 1.200 > (version || 0);
    },
    getCityFromId : function(id){return this.cities[id] || null}
};

/***********************************************************************************************************************
 * render view
 **********************************************************************************************************************/

var render = {
    mainContentBox:null,
    $tabs :null,
    cityRows:{
        building:{},
        resource:{},
        army:{}
    },
    _cssResLoaded:false,
    cssResLoaded:function () {
        var ret = this._cssResLoaded;
        this._cssResLoaded = true;
        return ret;
    },
    Init:function () {
        this.SidePanelButton();
        this.LoadCSS();
        this.DrawContentBox();
        this.RestoreDisplayOptions();

    },
    startDrawing :function(){
        this.DrawTables();

        //cityChange(newCityID)
        events('cityChanged').sub(this.cityChange.bind(render));

        // updateBuildingDataForCity(city,changes)
        // change:{position:pos, name:oldBuildingName}
        events('buildingsUpdated').sub(this.updateBuildingDataForCity.bind(render));

        // globalDataUpdated(changes)
        // change:{type:'research/government/finance', subType:'topic'
        events('globalDataUpdated').sub(this.updateGlobalData.bind(render));

        // movementsUpdated(changedCitiesIDs)
        events('movementsUpdated').sub(this.updateMovementsForCity.bind(render));

        // resourcesUpdated(city,changes) -> irrelevant if dynamic update
        events('resourcesUpdated').sub(this.updateResourcesForCity.bind(render));

        //cityUpdated(id, changes)
        // changes:[dataName]
        events('cityData').sub(this.updateCityDataForCity.bind(render));

        events('militaryUpdated').sub(this.updateMilitaryForCity.bind(render));
    },
    cityChange:function (cid) {
        var city = database.getCityFromId(cid);
        $('#SITRBoard tr.current,#SITRBoard tr.selected').removeClass('selected current');
        if (city){
        this.getAllRowsForCity(city).addClass('selected').addClass((isChrome) ? 'current' : 'selected')
        }
    },
    DrawSettings:function () {
        var html = '';
        html += '<div class="options"><span style="font-weight: 700;">Views</span><br>' + '<span  sitr_tip="Show board on worldview<br>(effective on page reload)"><input type="checkbox" id="SITR_ShowOnWorldView" ' + (database.options.showOnWorldView ? 'checked="checked"' : '') + ' /> Worldview</span><br>' + '<span sitr_tip="Show board on islandview<br>(effective on page reload)"><input type="checkbox" id="SITR_ShowOnIslandView" ' + (database.options.showOnIslandView ? 'checked="checked"' : '') + ' /> Islandview</span><br>' + '</div>' + '<div class="options"><span style="font-weight: 700;">Board</span><br>' + '<span sitr_tip="Show board on top of Ikariam windows"><input type="checkbox" id="SITR_OnTopCheckbox" ' + (database.options.onTop ? 'checked="checked"' : '') + ' /> Show on top</span><br>' + '<span sitr_tip="Show all possible army units on the Army tab"><input type="checkbox" id="SITR_FullArmyTable" ' + (database.options.fullArmyTable ? 'checked="checked"' : '') + ' /> Show all units</span></span><br>' + '<span sitr_tip="Use a larger font for the data tables<br>(Temporary and not fully functional)"><input type="checkbox" id="SITR_LargeFont" ' + (database.options.largeFont ? 'checked="checked"' : '') + ' /> Larger Font</span></span><br>' + '<span sitr_tip="Use an alternate order for buildings<br>(Groups reduction together then production together)"><input type="checkbox" id="SITR_AltBuildingList" ' + (database.options.altBuildingList ? 'checked="checked"' : '') + ' /> Alternate building order</span></span><br>' + '</div>' + '<div class="options"><span style="font-weight: 700;">Other</span><br>' + '<span sitr_tip="Enable automatic update checking<br>(Once every 24hrs)"><input type="checkbox" id="SITR_EnableAutoUpdates" ' + (database.options.autoUpdates ? 'checked="checked"' : '') + ' /> Enable updates</span><br>' + '<span sitr_tip="Select wine &quot;warning&quot; time">Wine warning' + '<select id="SITR_WineWarningTime")>' + '<option value=12' + ((database.options.wineWarningTime == 12) ? "selected=selected" : "" ) + '>12 ' + database.getGlobalData.getLocalisedString('hour') + '</option>' + '<option value=24' + ((database.options.wineWarningTime == 24) ? "selected=selected" : "" ) + '>24 ' + database.getGlobalData.getLocalisedString('hour') + '</option>' + '<option value=36' + ((database.options.wineWarningTime == 36) ? "selected=selected" : "" ) + '>36 ' + database.getGlobalData.getLocalisedString('hour') + '</option>' + '<option value=48' + ((database.options.wineWarningTime == 48) ? "selected=selected" : "" ) + '>48 ' + database.getGlobalData.getLocalisedString('hour') + '</option>' + '</select>' + '</span><br>' + '</div><div style="clear:left"><p>&nbsp;Current version: ' + SITR.version + '</p></div>' + '<div class="buttons">' + '<button  sitr_tip="Reset all settings to default" id="SITR_Reset_Button">Reset</button>' + '<button  sitr_tip="Goto the scripts Userscripts.com website " id="SITR_Website_Button">Website</button>' + '<button  sitr_tip="Force a check for updates" id="SITR_Update_Button">Check for updates</button>' + '</div>';
        $('#SettingsTab').html(html);
        //Event Handlers
        $("#SITR_OnTopCheckbox").on("click", function () {
            database.options.onTop = this.checked;
            render.mainContentBox.css('z-index', this.checked ? 65112 : 2)
        });
        $("#SITR_FullArmyTable").on("click", function () {
            database.options.fullArmyTable = this.checked;
            render.setAllArmyData()
        });
        $("#SITR_ShowOnWorldView").on("click", function () {
            database.options.showOnWorldView = this.checked;
        });
        $("#SITR_ShowOnIslandView").on("click", function () {
            database.options.showOnIslandView = this.checked;
        });
        $("#SITR_EnableAutoUpdates").on("click", function () {
            database.options.autoUpdates = this.checked;
        });
        $("#SITR_LargeFont").on("click", function () {
            database.options.largeFont = this.checked;
        });
        $("#SITR_AltBuildingList").on("click", function () {
            database.options.altBuildingList = this.checked;
            var that = this;
            $('.buildings tr').each(function () {
                var a = $(this).find('.forester0');
                var b = $(this).find('.carpentering0');
                var c = $(this).find('.winegrower0');
                var d = $(this).find('.vineyard0');
                var e = $(this).find('.stonemason0');
                var f = $(this).find('.architect0');
                var g = $(this).find('.glassblowing0');
                var h = $(this).find('.optician0');
                if (that.checked) {
                    //To alt layout
                    a.after(g.removeClass('lf').addClass('lfdash')).after(e.removeClass('lf').addClass('lfdash')).after(c.removeClass('lf').addClass('lfdash'));
                    b.after(h).after(f).after(d).removeClass('lfdash').addClass('lf')
                }
                else {
                    //To normal layout
                    a.after(g).after(e).after(c);
                    a.after(b.removeClass('lf').addClass('lfdash')).removeClass('lfdash').addClass('lf');
                    c.after(d).removeClass('lfdash').addClass('lf');
                    e.after(f).removeClass('lfdash').addClass('lf');
                    g.after(h).removeClass('lfdash').addClass('lf')
                }
                a = b = c = d = e = f = g = h = null
            });
        });
        $("#SITR_WineWarningTime").on('change', function () {
            database.options.wineWarningTime = (this.selectedIndex * 12) + 12;
        });
        $("#SITR_Website_Button").on("click", function () {
            GM_openInTab('http://userscripts.org/scripts/show/' + SITR.scriptId);
        });
        $("#SITR_Reset_Button").click(function () {
            SITR.HardReset();
        });
        $("#SITR_Update_Button").click(function () {
            SITR.CheckForUpdates.call(SITR,true);
        });
        //Additional Stuff
        $("#SITR_Reset_Button").button({icons:{primary:"ui-icon-alert"}, text:true});
        $("#SITR_Website_Button").button({icons:{primary:"ui-icon-home"}, text:true});
        $("#SITR_Update_Button").button({icons:{primary:"ui-icon-info"}, text:true});
    },
    toast:function (sMessage) {
        $('<div>').addClass("ui-tooltip-content ui-widget-content").text(sMessage).appendTo($(document.createElement("div")).addClass("ui-helper-reset ui-tooltip ui-tooltip-pos-bc ui-widget").css({position:'relative', display:'inline-block', left:'auto', top:'auto'}).show().appendTo($(document.createElement("div")).addClass("toast").appendTo(document.body).delay(100).fadeIn("slow", function () {
            $(this).delay(2000).fadeOut("slow", function () {
                $(this).remove();
            });
        })));
    },
    RestoreDisplayOptions:function () {
        $('#SITRBoard').css('left', database.options.window.left);
        $('#SITRBoard').css('top', database.options.window.top);
        this.$tabs.tabs('select', database.options.window.activeTab);
        if (database.options.window['visible'])
            this.mainContentBox.fadeToggle('slow');
    },
    SaveDisplayOptions:function () {
        if (database.options)
            try {
                database.options.addOptions({window:{
                    left:$('#SITRBoard').css('left'),
                    top:$('#SITRBoard').css('top'),
                    visible:($('#SITRBoard').css('display') != 'none'),
                    activeTab:this.$tabs.tabs('option', 'active')}
                })
            }
            catch (e) {
                SITR.error('SaveDisplayOptions', e)
            }
    },
    SidePanelButton:function () {
        $(".SITR_Menu").on("click", function (event) {
            render.ToggleMainBox();
        });
        $(".SITR_Menu").on("contextmenu", function (event) {
            event.preventDefault()
                database.options.window.left = 150;
                database.options.window.top = 180;
                $('#SITRBoard').css('left', database.options.window.left);
                $('#SITRBoard').css('top', database.options.window.top);
        });
        $(document).on('keydown',function(event){
            var index =-1;
            var type = event.target.nodeName.toLowerCase()
            if(type === 'input' || type === 'textarea' || type === 'select')
            return true;

            if (event.which === 32){
                event.stopImmediatePropagation()
                render.ToggleMainBox()
                return false
            }
            if (event.originalEvent.shiftKey) {

                index = [49, 50, 51].indexOf(event.which);
                if (index !== -1) {
                    render.$tabs.tabs('option', 'active', index)
                    return false
                }
            }
            else{
            var keycodes = [49,50,51,52,53,54,55,56,57,48,173,61];
            index = keycodes.indexOf(event.which)
            if (index !== -1)
            {
                if (index < database.options.cityOrder.length){
                    //Todo: create a page changing class
                $('#'+database.options.cityOrder[index]+'_resource .city_name .SITR_clickable').trigger('click')
                return false
                }
            }
            }
        })

    },
    ToggleMainBox:function () {
        database.options.window.visible = (this.mainContentBox.css('display') == 'none');
        this.mainContentBox.fadeToggle("slow");
    },
    DrawTables:function () {
        if ($(this.mainContentBox)) {
            $('#ArmyTab').html(this.getArmyTable());
              $('#ResTab').html(this.getResourceTable());
              $('#BuildTab').html(this.getBuildingTable());
              this.DrawSettings();
              this.setAllArmyData();
            this.SetAllResourceData();
            this.setAllBuildingData();
            $('#ArmyTab .resources > tbody > tr:even , #ResTab .resources > tbody > tr:even , #BuildTab .resources > tbody > tr:even').addClass('odd');
            this.cityChange(ikariam.CurrentCityId)
        }
        this.AttachClickHandlers();
    },
    getResourceTable:function () {
        var header = '<thead>\n<tr class="header_row" style="height:25px;">\n    <th class="city_name" colspan=2>{0}</th>\n    <th class="sitrap" style="background: url(skin/resources/icon_actionpoints.png) no-repeat \n    center right;" sitr_tip="{1}"></th>\n    <th class="actions"></th>\n    <th class="lf">{2}</th>\n    <th class="lfdash"\n        style="background: url(skin/smilies/happy.png) no-repeat center center;background-size: 20px 20px"></th>\n    <th class="lfdash"\n        style="background: url(skin/icons/growth_positive.png) no-repeat center center;background-size: 20px 20px"></th>\n    <th class="research_header lf" sitr_tip="{3}">\n        <img id="" width="14" height="21" src="skin/layout/bulb-on.png"></th>\n    <th class="lf"><img alt="" sitr_tip="{4}" src="skin/resources/icon_gold.png"></th>\n    <th class="wood_header cs2 lf" colspan="2" style="background: \n    url(skin/resources/icon_wood.png) no-repeat center center;" sitr_tip="{5}"></th>\n    <th class="wine_header cs2 lf" colspan="2" style="background: \n    url(skin/resources/icon_wine.png) no-repeat center center;" sitr_tip="{6}"></th>\n    <th class="marble_header cs2 lf" colspan="2" style="background: \n    url(skin/resources/icon_marble.png) no-repeat center center;" sitr_tip="{7}"></th>\n    <th class="glass_header cs2 lf" colspan="2" style="background: \n    url(skin/resources/icon_glass.png) no-repeat center center;" sitr_tip="{8}"></th>\n    <th class="sulfur_header cs2 lf" colspan="2" style="background: \n    url(skin/resources/icon_sulfur.png) no-repeat center center;" sitr_tip="{9}"></th>\n</tr>\n</thead>';
        var table = '<table class="resources">\n    <thead>{0}</thead>\n    <body>{1}</body>\n    <tfoot>{2}</tfoot>\n</table>';
        var resourceRow = '<tr id="{0}_resource">\n    <td class="city_name">\n        <img>\n        <span class="SITR_clickable"></span><sub></sub></td>\n    <td class="city_info"></td>\n    <td class="sitrap"></td>\n    <td class="sitractions">\n        <table>\n            <td class="transport"></td>\n        </table>\n    </td>\n    <td class="lf population"></td>\n    <td class="lfdash population_growth">\n        <img align=right height=18 hspace=2 vspace=0></td>\n    <td class="lfdash population_happiness"></td>\n    <td class="lf research"></td>\n    <td class="lf gold_income">\n        <span class="More"></span>\n        <span class="More red"></span>\n    </td>\n    {1}\n</tr>\n';
        var resourceCell = '<td class="lf">\n    <img class="safe"/>\n    <span class="current_{0}"></span>\n    <span class="More MoreGoods merchant_{0}" sitr_tip="dynamic resource movement {0}"></span>\n\n    <div class="SITR_Progress progress_{0}" sitr_tip="dynamic resource progress {0}"></div>\n</td>\n<td class="lfdash ">\n    <span class="More income_{0}" sitr_tip="dynamic resource income {0}"></span>\n    <span class="More"></span>\n    <span class="More"></span>\n</td>\n';
        var wineCell ='<td class="lf">\n    <img class="safe"/><span class="current_{0}"></span>\n    <span class="More MoreGoods merchant_{0}" sitr_tip="dynamic resource movement {0}"></span>\n\n    <div class="SITR_Progress progress_{0}" sitr_tip="dynamic resource progress {0}"></div>\n</td>\n<td class="lfdash">\n    <span class="More income_{0}" sitr_tip="dynamic resource income {0}"></span>\n    <span class="More consume_{0}" sitr_tip="dynamic resource consumption {0}"></span>\n    <span class="More {0}_hrs_left"></span>\n</td>'
        var footer = '<tr>\n    \
			<td class="totals_row"></td>\n\
			<td class="totals_row sigma" \
				sitr_tip="dynamic resource totals" \
				colspan="3">S</td>\n    \
			<td class="totals_row lf" \
				id="t_population" \
				colspan=3></td>\n    \
			<td class="totals_row lf" id="t_research"></td>\n    \
			<td class="totals_row lf" >\
				<span id="t_goldincome" class="More"></span>\n\
				<span id="t_goldtime" class="More"></span>\n\
			</td>\n    \
			<td class="totals_row lf" id="t_currentwood"></td>\n    \
			<td class="totals_row lfdash" id="t_woodincome"></td>\n    \
			<td class="totals_row lf" id="t_currentwine"></td>\n    \
			<td class="totals_row lfdash">\n        \
				<span id="t_wineincome" class="More"></span>\n\
				<span id="t_wineconsumption" class="More"></span>\n\
			</td>\n    \
			<td class="totals_row lf" \
				id="t_currentmarble"></td>\n\
			<td class="totals_row lfdash" id="t_marbleincome"></td>\n\
			<td class="totals_row lf" id="t_currentglass"></td>\n    \
			<td class="totals_row lfdash" id="t_glassincome"></td>\n\
			<td class="totals_row lf" id="t_currentsulfur"></td>\n \
			<td class="totals_row lfdash" id="t_sulfurincome"></td>\n\
		</tr>';

        //city.getId
        //this.CreateRes('wood') + this.CreateWineRes() + this.CreateRes('marble') + this.CreateRes('glass') + this.CreateRes('sulfur') +

        return Utils.format(table, [getHead(), getBody(), getFooter()])

        function getHead(){
            return Utils.format(header,[
                                 database.getGlobalData.getLocalisedString("cities"),
                                 database.getGlobalData.getLocalisedString("ActionPoints"),
                                 database.getGlobalData.getLocalisedString('citizens'),
                                 database.getGlobalData.getLocalisedString('researchpoints'),
                                 database.getGlobalData.getLocalisedString("gold"),
                                 database.getGlobalData.getLocalisedString("wood"),
                                 database.getGlobalData.getLocalisedString("wine"),
                                 database.getGlobalData.getLocalisedString("marble"),
                                 database.getGlobalData.getLocalisedString("crystal"),
                                 database.getGlobalData.getLocalisedString("sulfur")])
        };
        function getBody(){
            var rows = ''
            $.each(database.cities,function(cityId, city) {
                var resourceCells = '';
                $.each(Constant.Resources, function (key, resourceName) {
                    resourceCells += (
                        Constant.Resources.WINE == resourceName ? Utils.format(wineCell, [resourceName]) :
                        Utils.format(resourceCell, [resourceName]))
                })
                rows += Utils.format(resourceRow, [city.getId, resourceCells])
            })
            return rows;
        };

        function getFooter(){
            return footer;
        };
    },
    getArmyTable:function () {
        var table = '<table class="resources army">\n    <thead>{0}</thead>\n    <tbody>{1}</tbody>\n    <tfoot>{2}</tfoot>\n</table>';
        var headerRow = '<tr style="height:25px;" class="header_row">\n    <th colspan="2" class="city_name">{0}</th>\n    <th sitr_tip="{1}"\n        style="background: url(skin/resources/icon_actionpoints.png) no-repeat center right;"\n        class="sitrap"></th>\n    <th></th>\n    {2}\n</tr>';
        var headerCell = '<th sitr_tip="{0}" style="display:none;" colspan="2" \n    class="army_unit_{2} {3}"><a onclick="ajaxHandlerCall(this.href);return false;" href="?view=unitdescription&helpId=9&unitId={4}&position=4&backgroundView=city" style="display:inline-block;width:26px;"><img src="{1}" style="max-width:26px;max-height:26px;" /></a></th>\n\n';
        var bodyRow = '<tr id="{0}_army">\n    <td class="city_name"><img><span class="SITR_clickable"></span><sub></sub></td>\n    <td class="city_info"></td>\n    <td class="sitrap">\n    <td class="sitractions">\n        <table>\n            <td class="deploymentfleet"></td>\n            <td class="deploymentarmy"></td>\n        </table>\n    </td>\n    {1}\n</tr>';
        var bodyCell = '<td style="display:none;" class="army_unit_{0} {1}">\n    <span></span>\n</td>\n<td style="display:none;" class="army_unit_{0} nolf">\n    <span class="More Green {0}" sitr_tip="dynamic army training {0}"></span>\n    <span class="More Blue {0}" sitr_tip="dynamic army movement {0}"></span>\n</td>';
        var footerRow = '<tr style="height:25px;" class="totals_row">\n    <td class="city_name"></td>\n    <td colspan="2" class="sigma">S</td>\n    <td></td>\n    {0}\n</tr>';
        var footerCell = '<td style="display:none;" class="army_total_{0} army_unit_{0} {1}">\n    <span></span>\n</td>\n<td style="display:none;" class="army_total_{0} army_unit_{0} nolf">\n    <span class="More Green"></span>\n    <span class="More Blue"></span>\n</td>';

        return Utils.format(table, [getHead(), getBody(), getFooter()])

        function getHead() {
            var headerCells = ''
            for (var category in Constant.unitOrder) {
                $.each(Constant.unitOrder[category], function (index, value) {
                    headerCells += Utils.format(headerCell, [database.getGlobalData.getLocalisedString(value),
                                                 getImage(value), value,(index == 0) ? 'lf' : 'lfdash', Constant.UnitData[value].id])
                })
            }
            return Utils.format(headerRow, [database.getGlobalData.getLocalisedString("cities"),
                                 database.getGlobalData.getLocalisedString("ActionPoints"), headerCells])
        }

        function getBody() {
            var body = ''
            $.each(database.cities, function (cityId, city) {
                var rowCells = ''
                for (var category in Constant.unitOrder) {
                    $.each(Constant.unitOrder[category], function (index, value) {
                        var cssClass = (index == 0 ? ' lf' : ' lfdash')
                        rowCells += Utils.format(bodyCell, [value, cssClass])

                    })
                }
                body += Utils.format(bodyRow, [city.getId, rowCells])
            })
            return body
        }

        function getFooter() {
            var footerCells = ''
            for (var category in Constant.unitOrder) {
                $.each(Constant.unitOrder[category], function (index, value) {
                    var cssClass = (index == 0 ? ' lf' : ' lfdash')
                    footerCells += Utils.format(footerCell, [value, cssClass])
                })
            }
            return Utils.format(footerRow, [footerCells])
        }

        function getImage(unitID) { //Todo pull into css
            // /skin/characters/fleet/60x60/ship_submarine_faceright.png
            // /skin/characters/military/x60_y60/y60_medic_faceright.png
            return (Constant.UnitData[unitID].type == 'fleet') ? 'skin/characters/fleet/60x60/' + unitID + '_faceright.png' : 'skin/characters/military/x60_y60/y60_' + unitID + '_faceright.png'
        }

    },
    getBuildingTable:function () {
        var table = '<table class="resources buildings">\n    <thead>{0}</thead>\n    <tbody>{1}</tbody>\n</table>';
        var headerCell = '<th sitr_tip="{0}" style="background-color: transparent; background-image: url(\'{1}\'); \nbackground-repeat: no-repeat; background-attachment: scroll; background-position: center center; background-clip: \nborder-box; background-origin: padding-box; background-size: 60px 60px;" colspan="{2}" class="{3}" onclick="ajaxHandlerCall(\'?view=buildingDetail&buildingId={4}&helpId=1\');return false;">&nbsp;</th>';
        var headerRow = '<tr style="height:25px;" class="header_row">\n    <th colspan="2" class="city_name">{0}</th>\n    <th sitr_tip="{1}"\n        style="background: url(skin/resources/icon_actionpoints.png) no-repeat center right;"\n        class="sitrap"></th>\n    <th></th>\n    {2}\n</tr>'
        var buildingCell = '<td class="{0} building"><a></a></td>';
        var buildingRow = '<tr id="{0}_buildings">\n    <td class="city_name"><img><span class="SITR_clickable"></span><sub></sub></td>\n    <td class="city_info"></td>\n    <td class="sitrap">\n    <td class="sitractions">\n        <table>\n            <td class="transport"></td>\n        </table>\n    </td>\n    {1}\n</tr>';
        var counts = database.getBuildingCounts;
        var buildingOrder = (database.options.altBuildingList ? Constant.altBuildingOrder : Constant.buildingOrder)
        return Utils.format(table, [getHead(), getBody()])

        function getHead() {
            var headerCells = ''
            for (var category in buildingOrder) {
                $.each(buildingOrder[category], function (index, value) {
                    if (counts[value]) {
                        headerCells += Utils.format(headerCell,
                                                     [database.getGlobalData.getLocalisedString(value),
                                                     Constant.BuildingData[value].icon,
                                                     counts[value],
                                                     (index == 0) ? 'lf' : 'lfdash',
													 Constant.BuildingData[value].buildingId])
                    }
                })
            }
            return Utils.format(headerRow,
                                 [database.getGlobalData.getLocalisedString("cities"),
                                 database.getGlobalData.getLocalisedString("ActionPoints"),
                                 headerCells])
        }

        function getBody() {
            var body = ''
            $.each(database.cities, function (cityId, city) {
                var rowCells = ''
                for (var category in buildingOrder) {
                    $.each(buildingOrder[category], function (index, value) {
                        var i = 0
                        while (i < counts[value]) {
                            var cssClass = value + (i) + (index == 0 && i == 0 ? ' lf' : ' lfdash')
                            rowCells += Utils.format(buildingCell,
                                                      [cssClass])
                            i++
                        }
                    })
                }
                body += Utils.format(buildingRow, [city.getId, rowCells])
            })
            return body
        }
    },
    AddIslandCSS:function () {
        if (!(/.*view=island.*/.test(window.document.location)))   //&& (ikariam.GameVersion() != undefined)
            if (!this.cssResLoaded()) Utils.addStyleSheet('@import "http://' + ikariam.Host() + '/skin/compiled-' + ikariam.Nationality() + '-island.css";');
    },
    updateMilitaryForCity :function(cityId, changes) {
        var city = database.getCityFromId(cityId)
        if (city) {
            $.each(changes, function (index, unit) {
                this.setArmyDataForCityUnit(city, unit)
            }.bind(render))
            this.setArmyTotals([]);
        }
    },
    updateGlobalData :function(changes){
        var pop, research, finance
        for(var key in changes){
            switch(key){
                case 'government':
                case 'research':
                case 'finance':
                default : this.SetAllResourceData();return true;
            }
        }
        //Todo: implement update pushed from globaldata changes
        //console.log(changes)
    },
    updateMovementsForCity :function(changedCityIds){
        if(changedCityIds.length)
        $.each(changedCityIds,function(index, id){
            var city = database.getCityFromId(id)
            if (city){
            this.setMovementDataForCity(city)
            }
        }.bind(render))
    },
    updateResourcesForCity :function(cityId, changes){
        var city = database.getCityFromId(cityId)
        if (city) {
            //Todo:Write this. Single resource updates from changes
            events.scheduleAction(this.updateResourceCounters.bind(render, true), 0);
//                $.each(changes, function (index, resourceName) {
//                    this.SetAllResourceData(cityId);
//                })
        }
    },
    updateCityDataForCity :function(cityId, changes) {
        var city = database.getCityFromId(cityId);
        if (city){
        var research = 0, population = 0, finance = 0;
        for (var key in changes) {
            switch (key) {
                case 'research' :
                    research += changes[key];
                    break;
                case 'priests':
                    if (Constant.Government.THEOCRACY === database.getGovernmentType) {
                        population += changes[key];
                    }
                    break;
                case 'culturalGoods':
                    research += changes[key];population += changes[key];break;//todo add democracy only refresh
                case 'citizens':
                case 'population':
                    population += changes[key];finance += changes[key];
                    break;
                case 'name':
                    this.setCityName(city);
                    break;
                case 'islandId':
                    break;
                case 'coordinates':
                    break;
                case 'finance': finance += changes[key]
            }
        }
        if (!!population) {
            this.setPopulationData(city)
        }
        if (!!research) {
            this.setResearchData(city)
        }
        if (!!finance) {
            this.setFinanceData(city)
        }
    }
    },
    updateBuildingDataForCity:function(cityID, changes) {
        try {
            var city = database.getCityFromId(cityID);
            if (city) {
                if (changes.length) {
                    $.each(changes, function (key, data) {
                        var building = city.getBuildingFromPosition(data.position);
                        if (building.getName === data.name) {
                            this.setBuildingDataForCityPosition(city, data.position)
                        }
                        else{
                            this.setBuildingDataForCity(city);
                            return false
                        }
                    }.bind(render))
                    this.setBuildingsUpgradable(city)
                }
            }
        }
        catch (e) {
            SITR.error('updateBuildingDataForCity', e);
        }
        finally {
        }
    },
    setArmyDataForCityUnit:function(city, unit, training, incoming){
        try {
            var cells = this.getArmyRow(city).find('.army_unit_' + unit);
            //Todo: spend some time and write less intensive routines
            var incomingUnit = incoming?incoming[unit]: 0;
            var trainingUnit = training?training[unit]: city.military.getTrainingTotals[unit]
            var units = city.military.getUnits.getUnit(unit) || 0
            cells[0].textContent = units || '' ;
            cells.find('.Green').text(trainingUnit || '');
            cells.find('.Blue').text(incomingUnit || '');
            if (incomingUnit || trainingUnit || units || database.options.fullArmyTable){
                $('.army_unit_' + unit).show()
            }

        }
        catch (e) {
            SITR.error('setArmyDataForCityUnit', e);
            SITR.log('unit: '+unit);
        }
        finally {
        }
    },
    setArmyTotals : function(changes) {
        var data = {}
        $.each(database.cities, function (cityId, city) {
            var trainingData = city.military.getTrainingTotals
            $.each(Constant.UnitData, function (unit, unitData) {
                data[unit] = data[unit] || {};
                data[unit].total = data[unit].total ? data[unit].total + city.military.getUnits.getUnit(unit) :
                                   city.military.getUnits.getUnit(unit)
                if (trainingData[unit])
                data[unit].training =
                    data[unit].training ? data[unit].training + trainingData[unit] : trainingData[unit]
                data[unit].incoming = data[unit].incoming ? data[unit].incoming + 0 : 0 //Todo
            });
        });
        $.each(data, function (unit, data) {
            var cells = $('.army_total_' + unit);
            cells[0].textContent = data.total || '';
            cells.find('.Green').text(data.training || '');
            cells.find('.Blue').text(data.incoming || '');
        });

        return data
    },
    setArmyDataForCity :function(city){
        var incoming = {};
        var training = city.military.getTrainingTotals;
        $.each(Constant.UnitData, function (unitName, data) {
            this.setArmyDataForCityUnit(city, unitName, training, incoming);
        }.bind(render))
    },
    setAllArmyData :function(){
        try {
            for (var c in database.cities) {
                this.setArmyDataForCity(database.cities[c]);
            }
            this.ToolTips('#ArmyTab');
            this.setArmyTotals([]);
        }
        catch (e) {
            SITR.error('setAllArmyData', e)
        }
        finally {
        }
    },
    setBuildingsUpgradable :function(city){
        if (city){
            $.each(Constant.Buildings, function(key, value){
                $.each(city.getBuildingsFromName(value), function (index, building) {
                    this.getBuildingsRow(city).find('.building.' + building.getName + index +' a')
                        .removeClass('upgradable').removeClass('upgrading')
                        .addClass(building.isUpgradable ? (city.isUpgrading ? 'upgrading SITR_clickable' :'upgradable SITR_clickable') : 'SITR_clickable')
						.attr('style', building.isUpgrading ? 'color:red;' : '');
                }.bind(render))
            })
        }
    },
    setBuildingDataForCityPosition:function (city, position) {
        try {
            var building = city.getBuildingFromPosition(position);
            var idx = 0;
            $.each(city.getBuildingsFromName(building.getName), function (index, b) {
                if (b.getPosition == building.getPosition) {
                    idx = index;
                    return false;
                }
            })
            if (!building.isEmpty) {
                var cell = this.getBuildingsRow(city).find('.building.' + building.getName + idx +' a');
                if (cell.length){
                    cell.text(building.isUpgrading ? building.getLevel + ' > ' + (building.getLevel + 1) : building.getLevel)
                    .attr('sitr_tip',
                          'dynamic building ' + building.getName + ' ' + building.getLevel + ' ' + building.getPosition);
                }
                else return false
            }
            return true
        }
        catch (e) {
            SITR.error('setBuildingDataForCityPosition', e);
        }
        finally {
        }
    },
    setBuildingDataForCity:function(city){
        try {
            var redraw = false
            $.each(city.getBuildings, function (position, building) {
                redraw = !this.setBuildingDataForCityPosition(city, position)
                return !redraw
            }.bind(render))
            if (redraw && !render.redrawBuildings)
            {
                render.redrawBuildings = render.redrawBuildings?render.redrawBuildings+1:1
                render.cityRows.building = {};
                $('table.buildings').html(render.getBuildingTable)
                render.setAllBuildingData()
                $.each(database.cities, function(cityId, city){
                    render.setCityName(city)
                })
            }
            return redraw && !render.redrawBuildings
        }
        catch (e) {
            SITR.error('setBuildingDataForCity', e);
        }
        finally {
        }
    },
    setAllBuildingData:function () {
        try {
            var redraw = false;
            for (var c in database.cities) {
                redraw = this.setBuildingDataForCity(database.cities[c]);
                this.setBuildingsUpgradable(database.cities[c])
                if (redraw) break;
            }
            this.ToolTips('#BuildTab');
            render.redrawBuildings = 0;
            return redraw
        }
        catch (e) {
            SITR.error('setAllBuildingData', e)
        }
        finally {
        }
    },
    DrawContentBox:function () {
        var that = this;
        if (!this.mainContentBox) {
            $("#container").after('<div id="SITRBoard" class="ui-widget" style="display:none;z-index:' + (database.options.onTop ? 65112 : 2) + ';position: absolute; left:70px;top:180px;">\
                                    <div id="SITR_Tabs">\
                                        <ul>\
                                            <li><a href="#ResTab" sitr_tip="Resource Overview">Resources</a></li>\
                                            <li><a href="#BuildTab" sitr_tip="Building Overview">Buildings</a></li>\
                                            <li><a href="#ArmyTab" sitr_tip="Army Overview">Army</a></li>\
                                            <li><a href="#SettingsTab" sitr_tip="Settings"><span class="ui-icon ui-icon-gear"/></a></li>\
                                        </ul>\
                                        <div id="ResTab"></div>\
                                        <div id="BuildTab"></div>\
                                        <div id="ArmyTab"></div>\
                                        <div id="SettingsTab"></div>\
                                    </div>\
                                </div>');
            this.mainContentBox = $("#SITRBoard");
            this.$tabs = $("#SITR_Tabs").tabs({collapsible:true, show:null, selected:-1 });
            this.mainContentBox.draggable({
                handle:'#SITR_Tabs > ul',
                cancel:'.ui-tabs-panel',
                stop:function () {
                    render.SaveDisplayOptions();
                }
            });
            $('#SITR_Tabs ul li a').on('click', function () {
                    render.SaveDisplayOptions()
                    render.updateResourceCounters();
            });
        }
    },
    AttachClickHandlers:function () {
        var that = this;
        for (var cID in database.cities) {
            (
                attachClickhandlersToTabs(database.cities[cID])            )
        };

        $('body').on('click', '#js_buildingUpgradeButton', function (e) {

            //Todo: refactor
            var href = this.getAttribute('href');
            if (href !== '#') {
                var params = $.decodeUrlParam(href)
                if (params['function'] === "upgradeBuilding") {
                    var upgradeSuccessCheck = (function upgradeSuccess() {
                        var p = params
                        return function (response) {
                            //console.log(response)
                            var len = response.length;
                            var feedback = 0;
                            while (len--) {
                                if (response[len][0] == 'provideFeedback') {
                                    feedback = response[len][1][0].type;
                                    break;
                                }
                            }
                            if (feedback == 10) { //success
                                render.updateBuildingDataForCity(p['cityId'] || ikariam.getCurrentCity, [])
                            }
                            events('ajaxResponse').unsub(upgradeSuccessCheck);
                        }
                    })();
                }
                events('ajaxResponse').sub(upgradeSuccessCheck)
            }
        });

        $('#SITRBoard table.resources').on('click','.city_name .SITR_clickable',function(event) {
            var target = $(event.target);
            var city = database.getCityFromId(target.parents('tr').attr('id').split('_').shift());
            var classes = target.parents('td').attr('class');
            // city link
                if (!city.isCurrentCity) {
                    $("#js_cityIdOnChange").val(city.getId);
                    unsafeWindow.ajaxHandlerCallFromForm($("#changeCityForm")[0]);
                }
                return false;
        });

        $('#SITRBoard table.resources').on('click','.transport',function(event) {
            var target = $(event.target);
            var city = database.getCityFromId(target.parents('td').parents('tr').attr('id').split('_').shift());
                if (!city.isCurrentCity && ikariam.getCurrentCity) {
                    //unsafeWindow.ajaxHandlerCall(JSON.stringify("?view=transport&destinationCityId=" + city.getId + "&templateView=port"));
                    document.location = 'javascript:void(ajaxHandlerCall('+JSON.stringify("?view=transport&destinationCityId=" + city.getId + "&templateView=port")+'));';
                }
                return false;
        });

        $('table.buildings ').on('click','.building .SITR_clickable',function(event) {
            var target = $(event.target);
            var city = database.getCityFromId(target.parents('tr').attr('id').split('_').shift());
            var classes = target.parents('td').attr('class');

            //building link
            var className = target.parents('td').attr('class').split(' ').shift();
            var index = className.charAt(className.length - 1);
            var buildingName = className.slice(0, -1);
            var building = city.getBuildingsFromName(buildingName)[index];
            var href = building.getHref
            if (!city.isCurrentCity) {
                if (unsafeWindow.ikariam.templateView)unsafeWindow.ikariam.templateView.id = null;
                href = 'action=header&function=changeCurrentCity&oldView=city&cityId=' + city.getId + '&backgroundView=city&currentCityId=' + ikariam.CurrentCityId + '&view=' + building.getName + '&position=' + building.getPosition
            }
            document.location = 'javascript:void(ajaxHandlerCall(' + JSON.stringify(href) + '));';
            return false;
        });

        //TODO: finish pulling these into tab-wide click handlers
        function attachClickhandlersToTabs(city) {
            var cid = city.getId;
            var islandID = city.getIslandID;
            var tradegood = city.getTradeGoodID
            // trade good Links
            var $elem = $("#" + cid + "_resource");
            $elem.find('.current_' + tradeGoodFromID(city.getTradeGoodID)).addClass('SITR_clickable').on('click', function () {
                if (unsafeWindow.ikariam.templateView && (unsafeWindow.ikariam.templateView.id == "resource" || unsafeWindow.ikariam.templateView.id == "tradegood")) unsafeWindow.ikariam.templateView.destroyTemplateView(true);
                if (city.isCurrentCity) {
                    that.AddIslandCSS();
                    document.location = 'javascript:void(ajaxHandlerCall(' + JSON.stringify('?view=tradegood&type=' + tradegood + '&islandId=' + islandID + '&currentIslandId=' + islandID) + '));';
                    return false;
                }
                else {
                    database.options.restoreRes = 2;
                    $("#js_cityIdOnChange").val(cid);
                    unsafeWindow.ajaxHandlerCallFromForm($("#changeCityForm")[0]);
                    return false;
                }
            });
            $elem.find('.current_wood').addClass('SITR_clickable').on('click', function () {
                if (unsafeWindow.ikariam.templateView && (unsafeWindow.ikariam.templateView.id == "resource" || unsafeWindow.ikariam.templateView.id == "tradegood")) unsafeWindow.ikariam.templateView.destroyTemplateView(true);
                if (city.isCurrentCity) {
                    that.AddIslandCSS();
                    document.location = 'javascript:void(ajaxHandlerCall(' + JSON.stringify('?view=resource&type=resource&islandId=' + islandID) + '));';
                    return false;
                }
                else {
                    database.options.restoreRes = 1;
                    $("#js_cityIdOnChange").val(cid);
                    unsafeWindow.ajaxHandlerCallFromForm($("#changeCityForm")[0]);
                    return false;
                }
            });

            // Deployment links
            //ajaxHandlerCall("?view=transport&destinationCityId=XXXXXX")
            $('#' + cid + '_army .sitractions .deploymentfleet').on('click', function () {
                if (city.isCurrentCity || !ikariam.getCurrentCity) {
                    return false;
                }
                else
                    document.location = 'javascript:void(ajaxHandlerCall(' + JSON.stringify('?view=deployment&deploymentType=fleet&destinationCityId=' + cid) + '));';
            });
            $('#' + cid + '_army .sitractions .deploymentarmy').on('click', function () {
                if (city.isCurrentCity || !ikariam.getCurrentCity) {
                    return false;
                }
                else
                    document.location = 'javascript:void(ajaxHandlerCall(' + JSON.stringify('?view=deployment&deploymentType=army&destinationCityId=' + cid) + '));';
            });
            $elem = null;
        }
    },
    dynamicTip:function (id, type) {
        var city = database.getCityFromId(id);
        type = type.split(' ');
        var a = type[0];
        var b = type[1];
        if (a == 'resource') {
            //b == cell type
            var resourceName = type[2];
            if (b == 'current') {
                return ''
            }
            if (b == 'income') {
                if (resourceName !== city.getTradeGood && resourceName !== Constant.Resources.WOOD) {
                    return ''
                }
                return this.makeIncomeTooltip(city.getResource(resourceName).getProduction * 3600, resourceName)
            }
            if (b == 'progress') {
                var prod = city.getResource(resourceName).getProduction * 3600;
                var current = city.getResource(resourceName).getCurrent;
                return getProgressTip(city.maxResourceCapacities,
                                      prod - (
                                          resourceName == 'wine' ? city.getResource(resourceName).getConsumption :
                                          0), city.getResource(resourceName).getFullTime * 3600000, current)
            }
            if (b == 'consumption') {

                return (resourceName == Constant.Resources.WINE ?
                        getWineUseTooltip(city.getResource('wine').getConsumption) : '');
            }
            if (b == 'movement') {
                return getMovementTip(database.getGlobalData.getResourceMovementsToCity(id),
                                      city.getResource(resourceName).getCurrent, resourceName);
            }
            if (b === 'totals'){
                var totals = {};
                $.each(database.cities,function(cityId, city){
                    $.each(Constant.Resources, function(key, resourceName){
                        var res = city.getResource(resourceName);
                        if (!totals[resourceName]){totals[resourceName] ={}}

                            totals[resourceName].total = totals[resourceName].total?totals[resourceName].total+res.getCurrent:res.getCurrent;
                            totals[resourceName].income = totals[resourceName].income?totals[resourceName].income+res.getProduction*3600-res.getConsumption:res.getProduction*3600-res.getConsumption;

                    })
                })

                var r = ''
                var finalSums = {income:0,total:0, day:0, week:0}
                $.each(totals,function(resourceName,data){
                    var day = data.total + data.income*24;
                    var week = data.total + data.income*168;
                    r+=Utils.format('<tr>\n    <td><img src="{0}"></td>\n    <td class="nolf">{1}</td>\n    <td class="lfdash">{2}</td>\n    <td class="lfdash">{3}</td>\n    <td class="lfdash">{4}</td>\n</tr>',
                                  ['skin/resources/icon_'+resourceName+'.png',
                                  FormatNumToStr(data.income,false,0),
                                  FormatNumToStr(data.total,false,0) ,
                                  FormatNumToStr(day,false,0) ,
                                  FormatNumToStr(week,false,0)] )
                    finalSums.income +=data.income; finalSums.total+= data.total; finalSums.day += day; finalSums.week += week
                })
                if (r === ''){return ''}
                else{
                    return Utils.format('<table>\n    <thead>\n    <td></td>\n    <td><b>Income</b></td>\n    <td class="lfdash"><b>Total</b></td>\n    <td class="lfdash"><b>+24hrs</b></td>\n    <td class="lfdash"><b>+7days</b></td>\n    </thead>\n    <tbody>\n    {0}\n    <tfoot>\n    <td></td>\n    <td class="lfdash">{1}</td>\n    <td class="lfdash">{2}</td>\n    <td class="lfdash">{3}</td>\n    <td class="lfdash">{4}</td>\n    </tfoot>\n    </tbody>\n</table>',
                                         [r,
                                         FormatNumToStr(finalSums.income,false,0) ,
                                         FormatNumToStr(finalSums.total,false,0) ,
                                         FormatNumToStr(finalSums.day,false,0) ,
                                         FormatNumToStr(finalSums.week,false,0)] )
                }
            }

        }
        else
            if (a == 'building') {
                // b == building name
                var bName = type[1]; //building name
                var bLevel = parseInt(type[2]); //building level
                var pos = parseInt(type[3]); //position
                return getBuildingTooltip(database.cities[id]._buildings[pos]);
            }
            else
                if (a == 'army') {
                    //b == cell type
                    var unit = type[2]
                    if (b == 'movement'){
                        return 'not yet implemented'
                    }
                    else
                    if (b == 'training'){
                        var table = '<table>\n    <thead>\n        <td><img src="{0}" style="height: 11px;"></td>\n        <td><b>Training</b></td>\n        <td></td>\n    </thead>\n    <tbody>\n{1}\n    <tr class="small">\n        <td></td>\n        <td>{2}</td>\n        <td class="left"><i>«Total</i></td>\n    </tr>\n    </tbody>\n</table>';
                        var rows = ''
                        var total = 0
                        $.each(city.military.getTrainingForUnit(unit), function(index,data){
                            rows += Utils.format('<tr>\n    <td><b>+</b></td>\n    <td class="nolf">{0}</td>\n    <td class="left lfdash"><i>«{1}</i></td>\n</tr>',
                                                  [data.count,
                                                  FormatTimeLengthToStr(data.time - $.now(),3)]);
                            total += data.count;
                        })

                        if (rows === ''){
                            return ''
                        }
                        else{
                            return Utils.format(table,[getImage(unit),rows,total])
                        }
                        return ''
                    }
                }
        function getImage(unitID) { //Todo pull into css
            // /skin/characters/fleet/60x60/ship_submarine_faceright.png
            // /skin/characters/military/x60_y60/y60_medic_faceright.png
            return (Constant.UnitData[unitID].type == 'fleet') ? 'skin/characters/fleet/60x60/' + unitID + '_faceright.png' : 'skin/characters/military/x60_y60/y60_' + unitID + '_faceright.png'
        };
        function getWineUseTooltip(income) {
            //income = income || 0;
            return '<table><thead><td><img src="skin/resources/icon_wine.png" style="height: 11px;"></td><td><b>Hour</b></td><td class="lfdash"><b>Day</b></td><td class="lfdash"><b>Week</b></td><td></td></thead><tbody>' + '<tr><td><b>-</b></td><td class="nolf">' + FormatNumToStr(income, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(income * 24, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(income * 24 * 7, false, 0) + '</td> <td class="left lfdash"><i>«Usage</i></td> </tr>' + '<tr class="small"><td colspan="3"></td><td>' + ikariam.getNextWineTick(2) + '</td><td class="left"><i>«Next Tick</i></td></tr></tbody></table>';
        }

        function getBuildingTooltip(building) {
            if (building.isMaxLevel) return '';
            var uConst = (building.isUpgrading);
            var resourceCost = building.getUpgradeCost;
            var elem = '';
            var time = 0;
            for (var key in resourceCost) {
                if (key == 'time') {
                    time = '<tr class="small"><td><img src="skin/resources/icon_time.png" style="height: 11px; float: left;"></td><td colspan=2 class="left"><i>(' + FormatTimeLengthToStr(resourceCost[key], 3, ' ') + ')</i></td></tr>';
                    continue;
                }
                if (resourceCost[key]) {
                    elem += '<tr><td><img src="skin/resources/icon_' + key + '.png" style="height: 11px; float: left;"></td><td>' + FormatNumToStr(resourceCost[key], false, 0) + '</td>';
                    elem += (building.city().getResource(key).getCurrent < resourceCost[key] ? '<td class="red left">(' + FormatNumToStr(building.city().getResource(key).getCurrent - resourceCost[key], true, 0) + ')</td></tr>' : '<td><img src="skin/interface/check_mark_17px.png" style="height:11px; float:left;"></td></tr>')
                }
            }
            elem = (elem !== '') ? elem = '<table><thead><tr><th colspan=3 align="center"><b>' + (uConst ? 'Next Level' : 'Cost') + '</b></th></tr></thead><tbody>' + elem + '</tbody><tfoot>' + time + '</tfoot></table>' : '';
            if (uConst) {
                elem = '<table><thead><tr><th colspan=2><div class="prog" style="text-shadow:0 1px #FFFFFF"><b>Under Construction</b></div></th></tr></thead>' + '<tbody><tr><td></td><td>' + FormatFullTimeToDateString(building.getCompletionTime, true) + '</td></tr></tbody>' + '<tfoot><tr class="small"><td><img src="skin/resources/icon_time.png" style="height: 11px; float: left;"></td><td colspan=2 class="left"><i>(' + FormatTimeLengthToStr(building.getCompletionTime - $.now(), 3, ' ') + ')</i></td></tr></tfoot></table>' + elem
            }
            return elem
        }

        //Todo: fix perm 'en route'
        function getMovementTip(rMov, cRes, resourceName) {
            //if (rMov) rMov = rMov[0];
            if (rMov.length) {
                var tTip = '<table class=sitr_movements><tbody>';
                var trades = '';
                var transp = '';
                var movTotal = 0;
                for (var movID in rMov) {
                    if (rMov[movID].getResources[resourceName]){
                        var tMov = '';
                        tMov = (rMov[movID].isLoading ? 'Loading: ' + getTime(rMov[movID].getLoadingTime, false) : rMov[movID].getArrivalTime > $.now() ? 'en route' : 'Arrived');
                        tMov = '<tr><td>+</td><td>' + FormatNumToStr(rMov[movID].getResources[resourceName], false, 0) + '</td><td class="origin_city left"><i>«' + getCityNameFromID(rMov[movID].getOriginCityId) + '</i></td><td><i>' + getTime(rMov[movID].getArrivalTime - $.now()) + '</i></td></tr>' + '<tr class=small><td colspan=3></td><td class="left"><i>(' + tMov + ')</i></td></tr>';
                        if (rMov[movID].getMission == "trade")
                            trades += tMov;
                        else
                            if (rMov[movID].getMission == "transport")
                                trades += tMov;
                        movTotal += rMov[movID].getResources[resourceName]
                    }
                }
                if (trades === '' && transp === ''){
                    return ''
                }
                tTip += trades + transp;
                tTip += '</tbody><tfoot><tr><td>=</td><td>' + FormatNumToStr(movTotal, false, 0) + '</td><td colspan=2 class="left"><i>« Total incoming</i></td></tr>' + '<tr><td>S</td><td colspan=3 class="left">' + FormatNumToStr((movTotal + cRes), false, 0) + '</td></tr></tfoot></table>';
            }
            else tTip = '';
            //rMov = null;
            return tTip
        }

        function getProgressTip(storage, netIncome, fulltime, current) {
            try {
                var progTip = '<table>\n    <thead>\n    <tr>\n        <th></th>\n        <th><b>Safe</b></th>\n        <th class="lfdash"><b>Capacity</b></th>\n        <th class="lfdash">\n            <span class="ui-icon ui-icon-arrowthickstop-1-s" style="float:right; position: relative;"></span></th>\n    </tr>\n    </thead>\n    <tbody>{0}\n    </tbody>\n    <tfoot>\n    <tr>\n        <td><b></b></td>\n        <td>{1}</td>\n        <td class="nolf">{2}</td>\n        <td class="left lfdash"><i>«Maximum</i></td>\n    </tr>\n    <tr>\n        <td><b></b></td>\n        <td>{3}</td>\n        <td class="nolf">{4}</td>\n        <td class="left lfdash"><i>«Used</i></td>\n    </tr>\n    <tr>\n        <td><b></b></td>\n        <td>{5}</td>\n        <td class="nolf">{6}</td>\n        <td class="left lfdash"></td>\n    </tr>\n    <tr class="small" style="border-top:3px solid #FDF7DD">\n        <td><b></b></td>\n        <td></td>\n        <td class="nolf">{7}</td>\n        <td class="left lfdash">«To {8}</td>\n    </tr>\n    </tfoot>\n</table>';
                var progTr = '<tr  style="height:26px;display: none">\n    <td class="nolf" \n        style="width:50px; background: url(\'{0}\');background-size: auto 44px;background-position: -3px -10px; \n        background-repeat: no-repeat;">\n    <td class="nolf">{1}</td>\n    <td class="lfdash">{2}</td>\n    <td class="left lfdash">«{3}</td>\n</tr>';
                var rows = ''
                $.each(storage.buildings, function (buildingName, data) {
                    rows += Utils.format(progTr,
                                          [Constant.BuildingData[buildingName].icon,
                                          FormatNumToStr(data.safe, false, 0),
                                          FormatNumToStr(data.storage, false, 0),
                                          database.getGlobalData.getLocalisedString(buildingName)])
                })
                return Utils.format(progTip,
                                     [rows,
                                     FormatNumToStr(storage.safe, false, 0),
                                     FormatNumToStr(storage.capacity, false, 0),
                                     FormatNumToStr(Math.min(storage.safe, current), false, 0),
                                     FormatNumToStr(Math.min(storage.capacity, current), false, 0),
                                     FormatNumToStr(Math.min(1, current / storage.safe) * 100, false, 2) + '%',
                                     FormatNumToStr(Math.min(1, current / storage.capacity) * 100, false, 2) + '%',
                                     FormatTimeLengthToStr(fulltime), fulltime < 0 ? 'empty' : 'full'])

            }
            catch (e) {
                SITR.error('getProgressTip', e);
            }
            finally {
            }

        }
    },
    ToolTips:function (panel) {
        var self = this;
        panel = panel || '';
        $.fn.qtip.zindex = 999999;
        //$.fn.qtip.defaults.style.widget = true;
        $.fn.qtip.defaults.style.tip.corner = false;
        if (!$('#SITRTips').length) {
            $('#SITRBoard').before($('<div id="SITRTips"></div>'));
        }
        var p = $('#SITRBoard ' + panel + ' [sitr_tip]').not('[qtip]');
        if (p.length) {
            p.each(function () {
                $(this).qtip({
                                 overwrite:true,
                                 prerender:false,
                                 content:{text:$(this).attr("sitr_tip")},
                                 position:{
                                     my:'top left',
                                     at:'bottom right',
                                     target:'mouse',
                                     adjust:{mouse:true, method:'shift flip', x:-30, y:10},
                                     container:$('#SITRTips')
                                 },
                                 show:{effect:false},
                                 hide:{effect:false},
                                 events:{
                                     show:function (event, api) {
                                         var type = $(event.originalEvent.target).attr('sitr_tip');
                                         if (!type) {
                                             return false;
                                         }
                                         if (type.split(' ').shift() != 'dynamic') {
                                             if (event.originalEvent.shiftKey) {
                                                 type = type.replace(/display: none/g, '')
                                             }
                                             if (type.indexOf('<table>') === -1) {
                                                 //Todo: this but better :D
                                                 type = '<div style="background: rgba(248, 231, 179, 0.92);"><b>' + type + '</b></div>'
                                             }
                                             api.set('content.text', type);
                                         }
                                         else{
                                             var content = self.dynamicTip(parseInt(
                                                 $(event.originalEvent.target).parents('tr').attr('id') ?
                                                 $(event.originalEvent.target).parents('tr').attr('id').split('_').shift() :
                                                 0), type.split(' ').splice(1).join(' '))
                                             if (content === '') {
                                                 return false;
                                             }
                                             var shift = event.originalEvent.shiftKey
                                             if (shift) {
                                                 content = content.replace(/display: none/g, '')
                                             }
                                             if (api.myInt) {
                                                 clearInterval(api.myInt)
                                             }
                                             api.set('content.text', content);
                                             api.myInt = setInterval(function () {
                                                 var content = self.dynamicTip(parseInt(
                                                     $(event.originalEvent.target).parents('tr').attr('id') ?
                                                     $(event.originalEvent.target).parents('tr').attr('id').split('_').shift() :
                                                     0), type.split(' ').splice(1).join(' '))
                                                 if (shift) {
                                                     content = content.replace(/display: none/g, '')
                                                 }
                                                 api.set('content.text', content);
                                             }, 1000);
                                         }
                                     },
                                     hide:function (event, api) {
                                         if (api.myInt) {
                                             clearInterval(api.myInt);
                                         }
                                     }
                                 }
                             }).attr('qtip', true)
            });
        }
    },
    makeIncomeTooltip:function (income, icon) {
        //income = income || 0;
        switch (icon) {
            case 'wood':
                icon = 'skin/resources/icon_wood.png';
                break;
            case 'wine':
                icon = 'skin/resources/icon_wine.png';
                break;
            case 'marble':
                icon = 'skin/resources/icon_marble.png';
                break;
            case 'glass':
                icon = 'skin/resources/icon_glass.png';
                break;
            case 'sulfur':
                icon = 'skin/resources/icon_sulfur.png';
                break;
            case 'research':
                icon = 'skin/layout/bulb-on.png';
                break;
            case 'gold':
                icon = 'skin/resources/icon_gold.png';
                break;
            default:
                icon = '';
        }
        return '<table><thead><td><img src="' + icon + '" style="height: 11px;"></td><td><b>Hour</b></td><td class="lfdash"><b>Day</b></td><td class="lfdash"><b>Week</b></td><td></td></thead><tbody>' + '<tr><td><b>+</b></td><td class="nolf">' + FormatNumToStr(income, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(income * 24, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(income * 24 * 7, false, 0) + '</td> <td class="left lfdash"><i>«Production</i></td> </tr>' + '</tbody></table>';
    },
    InitCounters:function () {
        this.StopCounters()
        this.resUpd = events.scheduleActionAtInterval(render.updateResourceCounters.bind(render), 5000);
        this.updateResourceCounters(true);
    },
    StopCounters:function () {
        if (this.resUpd) {
            this.resUpd()
              this.resUpd = null;
      }
    },
    getResourceRow: function(city){
        if(!this.cityRows.resource[city.getId])
            this.cityRows.resource[city.getId] = $("#" + city.getId + "_resource");
        return this.cityRows.resource[city.getId]
    },
    getBuildingsRow: function(city){
        if(!this.cityRows.building[city.getId])
            this.cityRows.building[city.getId] = $("#" + city.getId + "_buildings");
        return this.cityRows.building[city.getId]
    },
    getArmyRow: function(city){
        if(!this.cityRows.army[city.getId])
            this.cityRows.army[city.getId] = $("#" + city.getId + "_army");
        return this.cityRows.army[city.getId]
    },
    getAllRowsForCity: function(city){
        return this.getResourceRow(city).add(this.getBuildingsRow(city)).add(this.getArmyRow(city))
    },
    setCityName:function(city) {
        this.getResourceRow(city).add(this.getBuildingsRow(city)).add(this.getArmyRow(city)).find('.city_name').each(function (index, elem) {
                elem.children[0].outerHTML = '<img src="skin/resources/icon_' + city.getTradeGood + '.png"/>';
                elem.children[1].textContent = city.getName;
                elem.children[2].textContent = ' '+(city.getAvailableBuildings || '');
            });
    },
    setActionPoints:function(city) {
        this.getResourceRow(city).add(this.getBuildingsRow(city)).add(this.getArmyRow(city)).find('.sitrap').text(city.getAvailableActions)
    },
    setFinanceData:function(city) {
        this.getResourceRow(city).find('.gold_income > span')
            .eq(0).text(FormatNumToStr(city.getIncome, true, 0))
            .siblings(0).text(FormatNumToStr(city.getExpenses, true, 0))
    },
    setPopulationData :function(city) {
        var populationData = city.populationData;
        var populationTip = '<table>\n    <thead>\n    <td><img src="skin/resources/icon_population.png" style="height: 11px;" alt=""></td>\n    <td><b>Citizens</b></td>\n    <td class="lfdash"><b>Pop</b></td>\n    <td class="lfdash"><b>Max</b></td>\n    </thead>\n    <tbody>\n    <tr>\n        <td><b>\S</b></td>\n        <td class="nolf">{0}</td>\n        <td class="lfdash">{1}</td>\n        <td class="lfdash">{2}</td>\n    </tr>\n</table';
        populationTip = Utils.format(populationTip,
                                      [FormatNumToStr(city._citizens, false, 0),
                                      FormatNumToStr(populationData.currentPop, false, 0),
                                      FormatNumToStr(populationData.maxPop, false, 0)]);
        this.getResourceRow(city).find('td.population').attr('SITR_Tip', populationTip).text(FormatNumToStr(populationData.currentPop, false, 0) + '/' + FormatNumToStr(populationData.maxPop, false, 0));

        var img;
        if (populationData.growth > 1) {
            img = populationData.growth < 6 ? 'happy' : 'ecstatic';
        } else if (populationData.growth < 1) {
            img = populationData.growth < 0 ? populationData.growth < -1 ? 'outraged' : 'sad' : 'neutral';
        }
        img = Utils.format('skin/smilies/{0}_x25.png',[img]);

        var growthTip = '<table>\n    <thead>\n    <tr>\n        <th><span class="ui-icon" \n                  style="background:url(\'{0}\') no-repeat;background-size: 15px auto;"></span></td>\n        <th colspan="2"><b>Satisfaction</b></td>\n        <th><span class="ui-icon ui-icon-arrowthickstop-1-s" style="float:right; position: relative;"></span></td>\n    </tr>\n    </thead>\n    <tbody>{1}</tbody>\n    <tfoot>\n    <tr>\n        <td><b>+</b></td>\n        <td></td>\n        <td class="nolf">{2}</td>\n        <td class="left lfdash"><i>«Gain</i></td>\n    </tr>\n    <tr>\n        <td><b>-</b></td>\n        <td></td>\n        <td class="nolf">{3}</td>\n        <td class="left lfdash"><i>«Loss</i></td>\n    </tr>\n    <tr style="border-top:3px solid #FDF7DD">\n        <td><b>S {4}</b></td>\n        <td></td>\n        <td class="nolf">{5}</td>\n        <td class="left lfdash">«Total</td>\n    </tr>\n    </tfoot>\n</table>';
        var growthTr = '<tr style="display: none">\n    <td class="nolf">+</td>\n    <td></td>\n    <td class="nolf">{0}</td>\n    <td class="left lfdash">«{1}</td>\n</tr>';
        var growthRows = '';
        $.each(populationData.satisfaction, function (key, value) {
            var total = 0;
            if (key === 'total') return true;
            if (typeof value === 'object') {
                for (var type in value) {
                    total += value[type];
                }
            }
            else{
                total += value
            }
            if (total) {
                growthRows += Utils.format(growthTr, [total, key])
            }
        });
        growthTip = Utils.format(growthTip,
                                  [img,
                                  growthRows,
                                  FormatNumToStr(populationData.satisfaction.total, false, 0),
                                  FormatNumToStr(populationData.currentPop, false, 0),
                                  (populationData.happiness >= 0 ? '+' : '-'),
                                  FormatNumToStr(populationData.happiness, false, 0)]
                                  );

        this.getResourceRow(city).find('td.population_growth img').attr('src', img).attr('sitr_tip',growthTip);
        this.getResourceRow(city).find('td.population_happiness')[0].textContent = FormatNumToStr(populationData.growth, true, 2);
    },
    setResearchData : function (city) {
        var total = Math.floor(city.research.getResearch)
        var rows = ''
        var tooltip = '<div align="center" style="background:none repeat scroll 0 0 rgba(248, 231, 179, 0.92);">\n    <img src="skin/layout/bulb-on.png" style="height: 15px; float: left">\n    <b>Research</b>\n</div>\n<table>\n    {0}\n    <tfoot>\n    <tr style="border-top:3px solid #FDF7DD">\n        <td><b>S</b></td>\n        <td class="nolf">{1}</td>\n        <td class="left lfdash">«Total</td>\n    </tr>\n    </tfoot>\n</table>'
        var tr = '<tr>\n    <td class="nolf">+</td>\n    <td class="nolf">{0}</td>\n    <td class="left lfdash">«{1}</td>\n</tr>'
        if (database.getGlobalData.getGovernmentType == Constant.Government.DEMOCRACY){
            rows = Utils.format(tr,[total - city.getCulturalGoods +'('+city.research.getResearchers+')','Scientists']) + Utils.format(tr, [city.getCulturalGoods,'Cultural'])
        } else {
            rows = Utils.format(tr,[total,'Scientists'])
        }
        this.getResourceRow(city).find('.research').text(total).attr("sitr_tip",Utils.format(tooltip,[rows,total]));
    },
    setMovementDataForCity :function(city){
        var totalIncoming = {wood:0,wine:0,marble:0,glass:0,sulfur:0};
        $.each(city.getIncomingResources, function(index,element){
            for (var resourceName in Constant.Resources){
                totalIncoming[Constant.Resources[resourceName]] += element.getResource(Constant.Resources[resourceName]);
            }});
        this.getResourceRow(city).find('span.merchant_wood')[0].textContent =   FormatNumToStr(totalIncoming['wood']   || ' - ');
        this.getResourceRow(city).find('span.merchant_wine')[0].textContent =   FormatNumToStr(totalIncoming['wine']   || ' - ');
        this.getResourceRow(city).find('span.merchant_marble')[0].textContent = FormatNumToStr(totalIncoming['marble'] || ' - ');
        this.getResourceRow(city).find('span.merchant_glass')[0].textContent =  FormatNumToStr(totalIncoming['glass']  || ' - ');
        this.getResourceRow(city).find('span.merchant_sulfur')[0].textContent = FormatNumToStr(totalIncoming['sulfur'] || ' - ');
    },
    SetAllResourceData:function () {
        try {
            this.StopCounters();
            this.InitCounters();
            this.ToolTips('#ResTab');
        }
        catch (e) {
            SITR.error('SetAllResourceData', e)
        }
        finally {
        }
    },

    // TODO: Make hours until wine empty more accurate (full hours - time to next tick)
    updateResourceCounters:function (force) {
        try {
            if ((this.$tabs.tabs('option', 'active') == 0 ) || force) {
                var tot = {wood:0, wine:0, marble:0, glass:0, sulfur:0};
                var inc = {wood:0, wine:0, marble:0, glass:0, sulfur:0};
                var conWine = 0;
                var income = 0;
                var researchCost = 0;
				var research = 0;
                $.each(database.cities, function (cityId, city) {
                    this.setCityName(city);
                    this.setFinanceData(city);
                    this.setActionPoints(city);
                    this.setPopulationData(city);
                    this.setResearchData(city)
                    this.setMovementDataForCity(city)
                    income += Math.floor(city.getIncome)
                    researchCost += Math.floor(city.getExpenses)
					research += city.research.getResearch;
                    var capacities = city.maxResourceCapacities
                    var tradeGood = city.getTradeGood;
                    $.each(Constant.Resources, function (key, resourceName) {
                        var currentResource = city.getResource(resourceName).getCurrent;
                        var production = city.getResource(resourceName).getProduction * 3600;
                        var consumption = city.getResource(resourceName).getConsumption;
                        var $currentSpan = this.getResourceRow(city).find('.current_' + resourceName);
                        var $breakdown = $currentSpan.parent().next('td').children('span');
                        inc[resourceName] += production;
                        tot[resourceName] += currentResource;
                        conWine += (resourceName ==Constant.Resources.WINE?consumption:0)

                        if (currentResource <= capacities.safe) {
                            $currentSpan.prev('img').show()
                        }
                        else{
                            $currentSpan.prev('img').hide()
                        }
                        $currentSpan.text(FormatNumToStr(Math.round(currentResource)), true);

                        if (resourceName == tradeGood || resourceName == Constant.Resources.WOOD || resourceName == Constant.Resources.WINE) {
                            $($breakdown[0]).text((production == 0)
                                                      ? ''
                                                      : FormatNumToStr(production, true, 0));
                        }
                        if (resourceName == Constant.Resources.WINE) {
                            $($breakdown[1]).text(FormatNumToStr(consumption * -1, true));
                            var hrs = city.getResource(resourceName).getEmptyTime;
                            $($breakdown[2]).text(FormatTimeLengthToStr(hrs * 3600000, 2))
                                .addClass((hrs < 0) ? 'green' : ((hrs) <= database.options.wineWarningTime) ? 'red' : 'green');
                        }
                        $currentSpan.siblings(".SITR_Progress").progressbar({max:capacities.capacity, value:currentResource});
                        var percentFull = currentResource / capacities.capacity;
                        var cssClass = '';
                        cssClass = percentFull > 0.99 ? 'full' : percentFull > 0.90 ? 'almostfull' : percentFull > 0.8 ? 'warning' : 'normal';
                        $currentSpan.siblings(".SITR_Progress").children()
                            .removeClass('normal,warning, almostfull, full')
                            .addClass(cssClass)
                    }.bind(render))

                }.bind(render))
                //                console.timeEnd('itterate city')
                $("#t_currentwood").text(FormatNumToStr(Math.round(tot['wood']), false));
                $("#t_currentwine").text(FormatNumToStr(Math.round(tot['wine']), false));
                $("#t_currentmarble").text(FormatNumToStr(Math.round(tot['marble']), false));
                $("#t_currentglass").text(FormatNumToStr(Math.round(tot['glass']), false));
                $("#t_currentsulfur").text(FormatNumToStr(Math.round(tot['sulfur']), false));
                $("#t_woodincome").text(FormatNumToStr(Math.round(inc['wood']), true))
                    .attr('sitr_tip', render.makeIncomeTooltip(inc['wood'], "wood"));
                $("#t_wineincome").text(FormatNumToStr(Math.round(inc['wine']), true));
                $("#t_marbleincome").text(FormatNumToStr(Math.round(inc['marble']), true))
                    .attr('sitr_tip', render.makeIncomeTooltip(inc['marble'], "marble"));
                $("#t_glassincome").text(FormatNumToStr(Math.round(inc['glass']), true))
                    .attr('sitr_tip', render.makeIncomeTooltip(inc['glass'], "glass"));
                $("#t_sulfurincome").text(FormatNumToStr(Math.round(inc['sulfur']), true))
                    .attr('sitr_tip', render.makeIncomeTooltip(inc['sulfur'], "sulfur"));
                var netWine = (inc['wine'] - conWine);
                //Todo: bring onsumption tip into dynamic tips and fix the broken tooltip hover
                $("#t_wineconsumption").text(FormatNumToStr(Math.round(conWine * -1), true))
                    .addClass('red')
                    .attr('sitr_tip', '<table><thead><td><img src="skin/resources/icon_wine.png" style="height: 11px;"> </td><td><b>Hour</b></td><td class="lfdash"><b>Day</b></td><td class="lfdash"><b>Week</b></td><td></td></thead><tbody>' + '<tr><td><b>+</b></td><td class="nolf">' + FormatNumToStr(inc['wine'], false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(inc['wine'] * 24, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(inc['wine'] * 24 * 7, false, 0) + '</td> <td class="left lfdash"><i>«Production</i></td> </tr>' + '<tr><td><b>-</b></td><td class="nolf">' + FormatNumToStr(conWine, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(conWine * 24, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(conWine * 24 * 7, false, 0) + '</td> <td class="left lfdash"><i>«Usage</i></td> </tr>' + '<tr class="small"><td colspan="3"></td><td>' + ikariam.getNextWineTick(2) + '</td><td><i>«Next Tick</i></td></tr>' + '</tbody><tfoot>' + '<tr><td><b>S ' + ((netWine > 0) ? '+' : '-') + '</b></td> <td class="lfdash">' + FormatNumToStr(netWine, false, 0) + '</td><td class="lfdash">' + FormatNumToStr(netWine * 24, false, 0) + '</td><td class="left lfdash">' + FormatNumToStr(netWine * 7 * 24, false, 0) + '</td><td class="lfdash"></td></tr>' + '</tfoot></table>');
                tot = inc = null;

				
				$('#t_research').text(FormatNumToStr(Math.round(research)));
                var expense = database.getGlobalData.finance.armyCost + database.getGlobalData.finance.armySupply + database.getGlobalData.finance.fleetCost + database.getGlobalData.finance.fleetSupply - researchCost;
				var cash = database.getGlobalData.finance.cash;
				var solventTime = '';
				if((income - expense) > 0) {
					solventTime = Infinity;
				} else {
					solventTime = cash / (expense - income);
					$('#t_goldincome').addClass('red');
				}
				$('#t_goldtime').text(FormatTimeLengthToStr(solventTime * 60*60*1000, 2))
					.addClass((solventTime < 0) ? 'green' : ((solventTime) <= database.options.wineWarningTime) ? 'red' : 'green');;
				// $('#t_goldtime').text(cash);
                
                document.getElementById("t_goldincome").textContent = FormatNumToStr(income - expense, true, 0);
                document.getElementById("t_goldincome").setAttribute('sitr_tip', '<table><thead><td><img src="skin/resources/icon_gold.png" style="height: 11px;"></td><td><b>Hour</b></td><td class="lfdash"><b>Day</b></td><td class="lfdash"><b>Week</b></td><td></td></thead><tbody>' + '<tr><td><b>-</b></td><td class="nolf">' + FormatNumToStr(database.getGlobalData.finance.armyCost, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(database.getGlobalData.finance.armyCost * 24, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(database.getGlobalData.finance.armyCost * 24 * 7, false, 0) + '</td> <td class="left lfdash"><i>«Army Cost</i></td> </tr>' + '<tr><td><b>-</b></td><td class="nolf">' + FormatNumToStr(database.getGlobalData.finance.fleetCost, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(database.getGlobalData.finance.fleetCost * 24, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(database.getGlobalData.finance.fleetCost * 24 * 7, false, 0) + '</td> <td class="left lfdash"><i>«Fleet Cost</i></td> </tr>' + '<tr><td><b>-</b></td><td class="nolf">' + FormatNumToStr(database.getGlobalData.finance.armySupply, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(database.getGlobalData.finance.armySupply * 24, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(database.getGlobalData.finance.armySupply * 24 * 7, false, 0) + '</td> <td class="left lfdash"><i>«Army Supply</i></td> </tr>' + '<tr><td><b>-</b></td><td class="nolf">' + FormatNumToStr(database.getGlobalData.finance.fleetSupply, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(database.getGlobalData.finance.fleetSupply * 24, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(database.getGlobalData.finance.fleetSupply * 24 * 7, false, 0) + '</td> <td class="left lfdash"><i>«Fleet Supply</i></td></tr>' + '<tr><td><b>-</b></td><td class="nolf">' + FormatNumToStr(researchCost, false, 0) + '</td><td class="lfdash">' + FormatNumToStr(researchCost * 24, false, 0) + '</td> <td class="lfdash">' + FormatNumToStr(researchCost * 24 * 7, false, 0) + '</td> <td class="left lfdash"><i>«Research</i></td> </tr>' + '</tbody><tfoot>' + '<tr><td><b>+</b></td> <td class="nolf">' + FormatNumToStr(income, false, 0) + '</td><td class="lfdash">' + FormatNumToStr(income * 24, false, 0) + '</td><td class="lfdash">' + FormatNumToStr(income * 7 * 24, false, 0) + '</td><td class="left lfdash"><i>«Income</i></td></tr>' + '<tr><td><b>-</b></td> <td class="nolf">' + FormatNumToStr(expense, false, 0) + '</td><td>' + FormatNumToStr(expense * 24, false, 0) + '</td><td class="lfdash">' + FormatNumToStr(expense * 24 * 7, false, 0) + '</td><td class="left lfdash"><i>«Expenses</i></td></tr>' + '<tr style="border-top:3px solid #FDF7DD"><td><b>S ' + ((income - expense > 0) ? '+' : '-') + '</b></td> <td class="lfdash">' + FormatNumToStr((income - expense), false, 0) + '</td><td class="lfdash">' + FormatNumToStr((income - expense) * 24, false, 0) + '</td><td class="lfdash">' + FormatNumToStr((income - expense) * 7 * 24, false, 0) + '</td><td></td></tr>' + '</tfoot></table>');

            } else if ((this.$tabs.tabs('option', 'active') == 1 ) || force) {

                //Todo: distil down to updating only changed cells
                this.setAllBuildingData()
            }
        }
        catch (e) {
            SITR.error('UpdateResourceCounters', e)
        }
    }
};

function getTime(time, brackets) {
    brackets = brackets || false;
    var arrInTime = FormatTimeLengthToStr(time, 3, ' ');
    return (arrInTime == '') ? '' : (brackets ? '(' : '') + arrInTime + (brackets ? ')' : '');
}

function getCityNameFromID(originCity) {
    var ret = '';
    try {
        ret = database.cities[parseInt(originCity)].getName
    }
    catch (e) {
        ret = originCity;
    }
    return ret;
}

render.LoadCSS = function () {

    GM_addStyle("table.resources {\n\border: 2px solid #ffffff;\n    border-collapse: collapse;\n    \
		text-align: center;\n    width: 100% !important;\n}\n\n\
	table.resources tbody tr {\n    border: 1px solid #dcc082;\n}\n\n\
	table.resources thead {\n    background: #F8E7B3 url(skin/input/button.png) repeat-x scroll 0 bottom;\n}\n\n\
	table.resources tfoot {\n    background: #E7C680 url(skin/input/button.png) repeat-x scroll 0 0;\n    \
		border-top: 2px solid #CB9B6A;\n}\n\n\
	table.resources tbody tr {\n    border-top: 1px solid #ECCF8E;\n}\n\n\
	table.resources tr.odd {\n    background-color: #FDF1D4;\n}\n\n\
	table.resources tbody tr.selected {\n    background-color: #FAE3B8;\n    box-shadow: 0 0 5px #CB9B6A inset;\n   \
		border: 1px solid #CB9B6A;\n    -webkit-transform: translateX(0);\n}\n\n\
	table.resources tbody tr.current {\n    background: rgba(0, 0, 0, 0.09);\n}\n\n\
	table.resources tbody tr:hover {\n    background-color: #fff;\n    border: 1px solid #CB9B6A;\n    \
		box-shadow: 0 0 13px #CB9B6A;\n}\n\n\
	table.resources tfoot tr {\n    border-top: 1px solid #CB9B6A;\n}\n\n\
	table.resources th,\ntable.resources td {\n    border-left: 1px solid #ECCF8E;\n}\n\n\
	table.resources th {\n    height: 22px;\n    width: auto;\n    padding: 1px;\n    padding-bottom: 2px;\n    \
		padding-left: 3px;\n    text-align: center !important;\n    color: #542C0F;\n    font-weight: bold;\n    \
		text-shadow: 0 1px #FFFFFF;\n}\n\n\
	table.resources td {\n    height: auto;\n    line-height: 11px;\n    font-size: 11px;\n    min-width: 10px;\n    \
		padding: 1px;\n    text-align: right;\n    text-shadow: 0 1px #FFFFFF;\n}\n\n\
	table.resources th.lf, table.resources td.lf {\n    border-left: 2px solid #CB9B6A;\n}\n\n\
	table.resources th.nolf, table.resources td.nolf {\n    border-left: none;\n}\n\n\
	table.resources th.city_name, table.resources td.city_name {\n    overflow: hidden;\n}\n\n\
	table.resources th.actions, table.resources td.actions, table.resources th.lfdash, table.resources td.lfdash {\n    \
		border-left: 1px dashed #ECCF8E;\n}\n\n}\
	table.resources th.city_name {\n    width: 95px !important;\n    max-width: 95px;\n}\n\n\
	table.resources th.actions {\n    width: auto !important;\n    max-width: 62px;\n    padding-left: 2px;\n    \
		padding-bottom: 3px;\n    text-align: right !important;\n    vertical-align: bottom;\n}\n\n\
	table.resources td.city_name {\n  max-width: 110px;\n    padding-left: 3px;\n    \
		text-align: left;\n    padding-right: 14px;\n}\n\n\
	table.resources td.city_info {\n    min-width: 0;\n    border: none;\n}\n\n\
	table.army th.unit_name {\n    min-width: 25px;\n    max-width: 35px;\n    overflow: hidden;\n    cursor: default;\n}\n\n\
	table.Army th.upkeep {\n    min-width: 20px;\n    overflow: hidden;\n    cursor: default;\n}\n\n\
	table.resources tfoot td {\n    font-weight: bold;\n}\n\n\
	table.resources .More {\n    clear: both;\n    cursor: default;\n    display: block;\n    \
		font-size: 10px;\n    height: 10px !important;\n    line-height: 10px !important;\n    margin-top: -1px;\n    \
		text-shadow: none;\n}\n\n\
	table.resources .MoreGoods {\n    margin-top: 0;\n}\n\n\
	.SITR_clickable {\n    color: #542C0F;\n    font-weight: 700;\n}\n\n\
	.SITR_clickable:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n\
	table.resources tr td.sigma {\n    font-size: 25px;\n    font-weight: 900;\n    vertical-align: inherit;\n}\n\n\
	.Bold,\n.Brown,\n.DarkRed,\n.Red {\n    font-weight: bold;\n}\n\n\
	.Green {\n    color: green !important;\n}\n\n\
	.Brown {\n    color: #8F1D1A !important;\n}\n\n\
	.DarkRed {\n    color: #CC3300 !important;\n}\n\n\
	.Red {\n    color: red !important;\n}\n\n\
	.Blue {\n    color: blue !important;\n}\n\n\
	table.resources td .SITR_Progress .normal {\n    background: #73443E;\n}\n\n\
	table.resources td .SITR_Progress .warning {\n    background: #8F1D1A;\n}\n\n\
	table.resources td .SITR_Progress .almostfull {\n    background: #B42521;\n}\n\n\
	table.resources td .SITR_Progress .full {\n    background: #ff0000;\n}\n\n\
	#BuildTab table.resources th {\n    width: 30px;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n\
	#BuildTab table.resources tr td, #BuildTab table.resources tr td a {\n    text-align: center;\n    \
		font-size: 11px;\n    white-space: nowrap;\n}\n\n\
	#BuildTab table.resources tr td.city_name, #BuildTab table.resources tr td.city_name a {\n    \
		text-align: left;\n}\n\n\
	#BuildTab table.resources tr td a.upgrading {\n    color: blue;\n    font-style: italic;\n}\n\
	#BuildTab table.resources tr td a.upgrading:after{\n    content: \'+\'\n}\n\n\
	#BuildTab table.resources tr td a.upgradable {\n    color: green;\n    font-style: italic;\n}\n\
	#BuildTab table.resources tr td a.upgradable:after{\n    content: \'+\'\n}\n\n\
	.resources .sitractions table td {\n    background-attachment: scroll;\n    background-clip: border-box;\n    background-color: transparent;\n    background-position: 0 0;\n    background-repeat: repeat;\n    background-size: 24px auto;\n    height: 14px;\n    min-width: 21px;\n    width: 21px;\n}\n\ntable.resources td img.safe {\n    float: left;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEFJREFUeNpi/P//PwMIhOrzQhhAsPriZ0YQzYQugcxnQhaE6YABxhA9HhRdyICJAQ/AayzxOtFdzYRuFLIVAAEGANwqFwuukYKqAAAAAElFTkSuQmCC\");\n    display: block;\n    text-indent: -99999px;\n    overflow: hidden;\n    background-repeat: no-repeat;\n    margin: 0 1px;\n    width: 7px;\n    height: 9px;\n}\n\n.resources .sitractions .transport {\n    background-image: url(\"skin/actions/transport.jpg\");\n}\n\n.resources .selected .sitractions .transport, .resources .current .sitractions .transport {\n    background-image: url(\"skin/actions/transport.jpg\");\n    background-position: 0 16px\n}\n\n.resources .sitractions .deploymentfleet {\n    background-image: url(\"skin/actions/move_fleet.jpg\");\n}\n\n.resources .selected .sitractions .deploymentfleet, .resources .current .sitractions .deploymentfleet {\n    background-image: url(\"skin/actions/move_fleet.jpg\");\n    background-position: 0 16px\n}\n\n.resources .sitractions .deploymentarmy {\n    background-image: url(\"skin/actions/move_army.jpg\");\n}\n\n.resources .selected .sitractions .deploymentarmy, .resources .current .sitractions .deploymentarmy {\n    background-image: url(\"skin/actions/move_army.jpg\");\n    background-position: 0 16px\n}\n\n.resources .sitractions td:hover {\n    background-position: 0 -16px;\n}\n\n#SettingsTab table.options tr td {\n    padding: 0 10px 2px 8px;\n    min-width: 140px;\n}\n\n#SettingsTab table.options {\n    text-align: left;\n}\n\n#SettingsTab {\n    white-space: nowrap;\n    overflow: hidden;\n}\n\ntable.resources tr td.sitrap, table.resources tr th.sitrap {\n    min-width: 15px;\n    background-size: 18px 18px !important;\n}\n\n#SettingsTab .options {\n    float: left;\n    padding: 10px\n}\n\n#SettingsTab .options span:first-child {\n    margin-left: -3px\n}\n\n#SettingsTab .buttons {\n    clear: left;\n    padding: 3px\n}\n\n#SettingsTab .buttons button {\n    margin-right: 5px\n}\n\n.city_name img {\n    margin: 0px 1px 0px -1px;\n    height: 13px;\n    float: left;\n}\n\n.toast {\n    display: none;\n    position: fixed;\n    z-index: 99999;\n    width: 100%;\n    text-align: center;\n    bottom: 5em;\n}\n\n.toast .message {\n    display: inline-block;\n    color: #4C3000;\n    padding: 5px;\n    border-radius: 5px;\n    box-shadow: 3px 0px 15px 0 #542C0F;\n    -webkit-box-shadow: 3px 0px 15px 0 #542C0F;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 11px;\n    background: #faf3d7;\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #faf3d7), color-stop(1, #e1b06d));\n}\n\n.ui-tooltip, .qtip {\n    display: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 99999999;\n    color: #542c0f;\n    border: 1px solid rgba(84, 44, 15, 0.92) !important;\n\n}\n.ui-tooltip-content{\n    position: relative;\n    padding: 0px 0px;\n    overflow: hidden;\n\n    text-align: left;\n    word-wrap: break-word;\n}\n.ui-tooltip table {\n    width: 100%\n}\n.ui-tooltip table td {\n    padding: 2px;\n    height: auto !important;\n    text-align: right;\n}\n\n.ui-tooltip table td.left {\n    text-align: left;\n    white-space: nowrap;\n}\n\n.ui-tooltip table tbody {\n    background-color: rgba(250, 234, 200, 0.92);\n    border-bottom-width: 3px;\n    border-bottom-color: rgba(253, 247, 221, 0.92);\n    border-bottom-style: solid;\n}\n\n.ui-tooltip table tfoot {\n    background-color: rgba(250, 224, 174, 0.92);\n}\n\n.ui-tooltip table th.lf, .ui-tooltip table td.lf {\n    border-left: 2px solid rgba(203, 155, 106, 0.92);\n}\n\n.ui-tooltip table th.nolf, .ui-tooltip table td.nolf {\n    border-left: none;\n}\n\n.ui-tooltip th.lfdash, .ui-tooltip td.lfdash {\n    border-left: 1px dashed rgba(236, 207, 142, 0.92);\n}\n\n.ui-tooltip thead {\n    background: rgba(248, 231, 179, 0.92);\n}\n\n.ui-tooltip table .small td {\n    padding: 2px;\n    height: auto !important;\n}\n\n.ui-tooltip table td.Mission img {\n    max-height: 15px;\n}\n\n.ui-tooltip table tr.small td {\n    padding-top: 0px;\n    font-size: 10px !important;\n    line-height: 10px !important;\n}\n\n/*!\n* jQuery UI CSS Framework 1.8.21\n*\n* Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)\n* Dual licensed under the MIT or GPL Version 2 licenses.\n* http://jquery.org/license\n*\n* http://docs.jquery.com/UI/Theming/API\n*/\n\n/* Layout helpers\n----------------------------------*/\n.ui-helper-hidden {\n    display: none;\n}\n\n.ui-helper-hidden-accessible {\n    position: absolute !important;\n    clip: rect(1px, 1px, 1px, 1px);\n    clip: rect(1px, 1px, 1px, 1px);\n}\n\n.ui-helper-reset {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    line-height: 1.3;\n    text-decoration: none;\n    font-size: 100%;\n    list-style: none;\n}\n\n.ui-helper-clearfix:before, .ui-helper-clearfix:after {\n    content: \"\";\n    display: table;\n}\n\n.ui-helper-clearfix:after {\n    clear: both;\n}\n\n.ui-helper-clearfix {\n    zoom: 1;\n}\n\n.ui-helper-zfix {\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    position: absolute;\n    opacity: 0;\n    filter: Alpha(Opacity = 0);\n}\n\n/* Interaction Cues\n----------------------------------*/\n.ui-state-disabled {\n    cursor: default !important;\n}\n\n/* Icons\n----------------------------------*/\n\n/* states and images */\n.ui-icon {\n    display: block;\n    text-indent: -99999px;\n    overflow: hidden;\n    background-repeat: no-repeat;\n}\n\n/* Misc visuals\n----------------------------------*/\n\n/* Overlays */\n.ui-widget-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n/*!\n* jQuery UI CSS Framework 1.8.21\n*\n* Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)\n* Dual licensed under the MIT or GPL Version 2 licenses.\n* http://jquery.org/license\n*\n* http://docs.jquery.com/UI/Theming/API\n*\n* To view and modify this theme, visit http://jqueryui.com/themeroller/?ffDefault=Verdana,Arial,sans-serif&fwDefault=bold&fsDefault=1em&cornerRadius=4px&bgColorHeader=F8E7B3&bgTextureHeader=03_highlight_soft.png&bgImgOpacityHeader=75&borderColorHeader=ffffff&fcHeader=542c0f&iconColorHeader=542C0F&bgColorContent=f6ebba&bgTextureContent=01_flat.png&bgImgOpacityContent=75&borderColorContent=eccf8e&fcContent=542c0f&iconColorContent=542c0f&bgColorDefault=eccf8e&bgTextureDefault=02_glass.png&bgImgOpacityDefault=75&borderColorDefault=eccf8e&fcDefault=542c0f&iconColorDefault=542c0f&bgColorHover=f6ebba&bgTextureHover=02_glass.png&bgImgOpacityHover=75&borderColorHover=eccf8e&fcHover=542c0f&iconColorHover=542c0f&bgColorActive=f6ebba&bgTextureActive=02_glass.png&bgImgOpacityActive=65&borderColorActive=eccf8e&fcActive=542c0f&iconColorActive=542c0f&bgColorHighlight=f6ebba&bgTextureHighlight=07_diagonals_medium.png&bgImgOpacityHighlight=100&borderColorHighlight=eccf8e&fcHighlight=542c0f&iconColorHighlight=542c0f&bgColorError=f6ebba&bgTextureError=05_inset_soft.png&bgImgOpacityError=95&borderColorError=cd0a0a&fcError=cd0a0a&iconColorError=cd0a0a&bgColorOverlay=aaaaaa&bgTextureOverlay=07_diagonals_medium.png&bgImgOpacityOverlay=75&opacityOverlay=30&bgColorShadow=aaaaaa&bgTextureShadow=01_flat.png&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=8px&offsetTopShadow=-8px&offsetLeftShadow=-8px&cornerRadiusShadow=8px\n*/\n\n/* Component containers\n----------------------------------*/\n.ui-widget {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1em;\n}\n\n.ui-widget .ui-widget {\n    font-size: 1em;\n}\n\n.ui-widget input, .ui-widget select, .ui-widget textarea, .ui-widget button {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1em;\n}\n\n.ui-widget-content {\n    border: 1px solid #eccf8e;\n    background: #f6ebba url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABkCAYAAAD0ZHJ6AAAAfUlEQVRoge3OMQGAIAAAQaR/Iiq5u0oEhht0+Etw13Ovd/zY/DpwUlAVVAVVQVVQFVQFVUFVUBVUBVVBVVAVVAVVQVVQFVQFVUFVUBVUBVVBVVAVVAVVQVVQFVQFVUFVUBVUBVVBVVAVVAVVQVVQFVQFVUFVUBVUBVVBVVBtVtsEYluRKCAAAAAASUVORK5CYII=\") 50% 50% repeat-x;\n    color: #542c0f;\n}\n\n.ui-widget-content a {\n    color: #542c0f;\n}\n\n.ui-widget-header {\n    border: 2px solid #ffffff;\n    background: #f8e7b3 url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkCAYAAAEwK2r2AAAAY0lEQVQYlaWPMQ6DQAwER/v/7+UhQTRH7N00QEESiUAzki17vOb1fEQAR8QDpSaUmhHkYwSAb4LEKD2vAryc3/2JpFC8IDzWfHgg0qcEd47/haT3VEZxbWUKQW89GhFffeEi3kGvSQXcQU8oAAAAAElFTkSuQmCC\") 50% 50% repeat-x;\n    color: #542c0f;\n    font-weight: bold;\n}\n\n.ui-widget-header a {\n    color: #542c0f;\n}\n\n/* Interaction states\n----------------------------------*/\n.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {\n    border: 1px solid #eccf8e;\n    background: #eccf8e url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGQCAYAAABvWArbAAAASklEQVQ4je3Puw2EABAD0fGw9F8KFSFqgJTgCPhEFHBCmzxN4sCs8/QToGmaz7JvC5JgMiAnhbEwjoiFPpXUXda1SPyHM03TvHEAd0QJtjgD5PAAAAAASUVORK5CYII=\") 50% 50% repeat-x;\n    font-weight: bold;\n    color: #542c0f;\n}\n\n.ui-state-default a, .ui-state-default a:link, .ui-state-default a:visited {\n    color: #542c0f;\n    text-decoration: none;\n}\n\n.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus {\n    border: 1px solid #eccf8e;\n    background: #f6ebba url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGQCAYAAABvWArbAAAAR0lEQVQ4je3PMQrAIABD0Z/o/Y/Wk3RwLBSqg0KXHkBKlkeGv4SrHd0AIYTf8twnBmEkDF5IBTMxlupaM1HB0ht7hzMhhC8GEiwJ5YKag9EAAAAASUVORK5CYII=\") 50% 50% repeat-x;\n    font-weight: bold;\n    color: #542c0f;\n}\n\n.ui-state-hover a, .ui-state-hover a:hover {\n    color: #542c0f;\n    text-decoration: none;\n}\n\n.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active {\n    border: 1px solid #eccf8e;\n    background: #f6ebba url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGQCAYAAABvWArbAAAARklEQVQ4je3PsQnAMBBD0S9l/8kyTFIaDDkXBkMgA5ig5iEdXCHafZYBQgi/5ekXrlmFpQNLxmDMTOv2rrU+kHYYE0L4YgB9ewvfYTVHjwAAAABJRU5ErkJggg==\") 50% 50% repeat-x;\n    font-weight: bold;\n    color: #542c0f;\n}\n\n.ui-state-active a, .ui-state-active a:link, .ui-state-active a:visited {\n    color: #542c0f;\n    text-decoration: none;\n}\n\n.ui-widget :active {\n    outline: none;\n}\n\n/* Interaction Cues\n----------------------------------*/\n.ui-state-highlight, .ui-widget-content .ui-state-highlight, .ui-widget-header .ui-state-highlight {\n    border: 1px solid #eccf8e;\n    background: #f6ebba url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAjElEQVRYhe2UOwqAMBAFx2DlMbz/kSS3MIUIWij4aZ/gK952YZohu0y3zNPGOWur3Kcfxsf7D16c5YBD0FUOoDjLAdeKHeXWVi9BRzk4f9BVDqA4y8HrBt3k0sEveDqo8nRQ5emgytNBlaeDKk8HVZ4OqjwdVHk6qPJ0UOXpoMrTQZWngypPB1Vu38EdG7NcOPXFHAMAAAAASUVORK5CYII=\") 50% 50% repeat;\n    color: #542c0f;\n}\n\n.ui-state-highlight a, .ui-widget-content .ui-state-highlight a, .ui-widget-header .ui-state-highlight a {\n    color: #542c0f;\n}\n\n.ui-state-error, .ui-widget-content .ui-state-error, .ui-widget-header .ui-state-error {\n    border: 1px solid #cd0a0a;\n    background: #f6ebba url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkCAYAAABHLFpgAAAASElEQVQYld2PMQ6DUBTDbP/7X4grde/6GACpjN0QS+QkyhC+n20CeI3MQChJJ4GEka7LEtkiRsJF2llw0G02SP5k0oxPOP2P7E3MCpW4kdm7AAAAAElFTkSuQmCC\") 50% bottom repeat-x;\n    color: #cd0a0a;\n}\n\n.ui-state-error a, .ui-widget-content .ui-state-error a, .ui-widget-header .ui-state-error a {\n    color: #cd0a0a;\n}\n\n.ui-state-error-text, .ui-widget-content .ui-state-error-text, .ui-widget-header .ui-state-error-text {\n    color: #cd0a0a;\n}\n\n.ui-priority-primary, .ui-widget-content .ui-priority-primary, .ui-widget-header .ui-priority-primary {\n    font-weight: bold;\n}\n\n.ui-priority-secondary, .ui-widget-content .ui-priority-secondary, .ui-widget-header .ui-priority-secondary {\n    opacity: .7;\n    filter: Alpha(Opacity = 70);\n    font-weight: normal;\n}\n\n.ui-state-disabled, .ui-widget-content .ui-state-disabled, .ui-widget-header .ui-state-disabled {\n    opacity: .35;\n    filter: Alpha(Opacity = 35);\n    background-image: none;\n}\n\n/* Icons\n----------------------------------*/\n\n/* states and images */\n.ui-icon {\n    width: 16px;\n    height: 16px;\n}\n\n.ui-state-error .ui-icon, .ui-state-error-text .ui-icon {\n    background-image: url(\"data:image/png;base64,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\");\n}\n\n.ui-icon, .ui-widget-content .ui-icon, .ui-widget-header .ui-icon, .ui-state-default .ui-icon, .ui-state-hover .ui-icon, .ui-state-focus .ui-icon, .ui-state-active .ui-icon, .ui-state-highlight .ui-icon {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADwCAMAAAGvTnpvAAAA7VBMVEVULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxULgxwjo40AAAATnRSTlMAGBAyBAhQv4OZLiJUcEBmYBoSzQwgPBZCSEoeWiYwUiyFNIeBw2rJz8c4RBy9uXyrtaWNqa2zKP2fJO8KBgKPo2KVoa9s351GPm5+kWho0kj9AAATX0lEQVR4nO1dC2PbthEGyUpaqJii/JgbZ3bTLNmyJns/Oi1bM7vp0q7r/f+fM+JxwOEAkNTTSoxPlqHD83AE7gAQBIUYBHSfQv0XnbsJgH02A3g5ibVzDFNtlkPI1VjIuOUa8eMclOLS1uRSPBETURnOrkbmID9T9fuPyu+cSGYYKya5efeddN9TRS1H8eD4kDjrPutBpptt2apkiqX57A4gfloj7ua9AXMQ3dWvNs8n7NCwZk6bqYSg1CgNsaCBHDAluMQjcihEWBNYSxamUYNMs15KmwMUKhm0S5UBwMQFjcqxelSYskHBtLC26X7/eWQtVB1MaWXzF1OrUyhLgOrFiBwalDwg6+tigfzbnNbM40UlTrrO3clTftcuX7jyY9gkv81RVWI9K0OxNa8Hruw+EFctu6xaqDhCGkjQ2hyMitiXKyR+7xSqx6u6AitlpI3wrBj5OSo5xv8ZShoq5VZE+p/hb/OVzuPHyHGXQLoug9b4af/OzArAqtlvq8PidqZSflOYigVIpTZ33192wQ1jHVXLgjWWeZdAfhn3UteqH43NI9EGSjns7CJ//g8h6o6++UrLBTrOZJUkhy4NxDNAblZld53kJZl34z4jE5cB0HbA5RHnzg9Txud28wwG4aS1pwzKH7t/IyxlEvW2XVQLcf0vyeCWfL9j39vk95iA1alinhtmcHDr34ti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\");\n}\n\n/* positioning */\n.ui-icon-carat-1-n {\n    background-position: 0 0;\n}\n\n.ui-icon-carat-1-ne {\n    background-position: -16px 0;\n}\n\n.ui-icon-carat-1-e {\n    background-position: -32px 0;\n}\n\n.ui-icon-carat-1-se {\n    background-position: -48px 0;\n}\n\n.ui-icon-carat-1-s {\n    background-position: -64px 0;\n}\n\n.ui-icon-carat-1-sw {\n    background-position: -80px 0;\n}\n\n.ui-icon-carat-1-w {\n    background-position: -96px 0;\n}\n\n.ui-icon-carat-1-nw {\n    background-position: -112px 0;\n}\n\n.ui-icon-carat-2-n-s {\n    background-position: -128px 0;\n}\n\n.ui-icon-carat-2-e-w {\n    background-position: -144px 0;\n}\n\n.ui-icon-triangle-1-n {\n    background-position: 0 -16px;\n}\n\n.ui-icon-triangle-1-ne {\n    background-position: -16px -16px;\n}\n\n.ui-icon-triangle-1-e {\n    background-position: -32px -16px;\n}\n\n.ui-icon-triangle-1-se {\n    background-position: -48px -16px;\n}\n\n.ui-icon-triangle-1-s {\n    background-position: -64px -16px;\n}\n\n.ui-icon-triangle-1-sw {\n    background-position: -80px -16px;\n}\n\n.ui-icon-triangle-1-w {\n    background-position: -96px -16px;\n}\n\n.ui-icon-triangle-1-nw {\n    background-position: -112px -16px;\n}\n\n.ui-icon-triangle-2-n-s {\n    background-position: -128px -16px;\n}\n\n.ui-icon-triangle-2-e-w {\n    background-position: -144px -16px;\n}\n\n.ui-icon-arrow-1-n {\n    background-position: 0 -32px;\n}\n\n.ui-icon-arrow-1-ne {\n    background-position: -16px -32px;\n}\n\n.ui-icon-arrow-1-e {\n    background-position: -32px -32px;\n}\n\n.ui-icon-arrow-1-se {\n    background-position: -48px -32px;\n}\n\n.ui-icon-arrow-1-s {\n    background-position: -64px -32px;\n}\n\n.ui-icon-arrow-1-sw {\n    background-position: -80px -32px;\n}\n\n.ui-icon-arrow-1-w {\n    background-position: -96px -32px;\n}\n\n.ui-icon-arrow-1-nw {\n    background-position: -112px -32px;\n}\n\n.ui-icon-arrow-2-n-s {\n    background-position: -128px -32px;\n}\n\n.ui-icon-arrow-2-ne-sw {\n    background-position: -144px -32px;\n}\n\n.ui-icon-arrow-2-e-w {\n    background-position: -160px -32px;\n}\n\n.ui-icon-arrow-2-se-nw {\n    background-position: -176px -32px;\n}\n\n.ui-icon-arrowstop-1-n {\n    background-position: -192px -32px;\n}\n\n.ui-icon-arrowstop-1-e {\n    background-position: -208px -32px;\n}\n\n.ui-icon-arrowstop-1-s {\n    background-position: -224px -32px;\n}\n\n.ui-icon-arrowstop-1-w {\n    background-position: -240px -32px;\n}\n\n.ui-icon-arrowthick-1-n {\n    background-position: 0 -48px;\n}\n\n.ui-icon-arrowthick-1-ne {\n    background-position: -16px -48px;\n}\n\n.ui-icon-arrowthick-1-e {\n    background-position: -32px -48px;\n}\n\n.ui-icon-arrowthick-1-se {\n    background-position: -48px -48px;\n}\n\n.ui-icon-arrowthick-1-s {\n    background-position: -64px -48px;\n}\n\n.ui-icon-arrowthick-1-sw {\n    background-position: -80px -48px;\n}\n\n.ui-icon-arrowthick-1-w {\n    background-position: -96px -48px;\n}\n\n.ui-icon-arrowthick-1-nw {\n    background-position: -112px -48px;\n}\n\n.ui-icon-arrowthick-2-n-s {\n    background-position: -128px -48px;\n}\n\n.ui-icon-arrowthick-2-ne-sw {\n    background-position: -144px -48px;\n}\n\n.ui-icon-arrowthick-2-e-w {\n    background-position: -160px -48px;\n}\n\n.ui-icon-arrowthick-2-se-nw {\n    background-position: -176px -48px;\n}\n\n.ui-icon-arrowthickstop-1-n {\n    background-position: -192px -48px;\n}\n\n.ui-icon-arrowthickstop-1-e {\n    background-position: -208px -48px;\n}\n\n.ui-icon-arrowthickstop-1-s {\n    background-position: -224px -48px;\n}\n\n.ui-icon-arrowthickstop-1-w {\n    background-position: -240px -48px;\n}\n\n.ui-icon-arrowreturnthick-1-w {\n    background-position: 0 -64px;\n}\n\n.ui-icon-arrowreturnthick-1-n {\n    background-position: -16px -64px;\n}\n\n.ui-icon-arrowreturnthick-1-e {\n    background-position: -32px -64px;\n}\n\n.ui-icon-arrowreturnthick-1-s {\n    background-position: -48px -64px;\n}\n\n.ui-icon-arrowreturn-1-w {\n    background-position: -64px -64px;\n}\n\n.ui-icon-arrowreturn-1-n {\n    background-position: -80px -64px;\n}\n\n.ui-icon-arrowreturn-1-e {\n    background-position: -96px -64px;\n}\n\n.ui-icon-arrowreturn-1-s {\n    background-position: -112px -64px;\n}\n\n.ui-icon-arrowrefresh-1-w {\n    background-position: -128px -64px;\n}\n\n.ui-icon-arrowrefresh-1-n {\n    background-position: -144px -64px;\n}\n\n.ui-icon-arrowrefresh-1-e {\n    background-position: -160px -64px;\n}\n\n.ui-icon-arrowrefresh-1-s {\n    background-position: -176px -64px;\n}\n\n.ui-icon-arrow-4 {\n    background-position: 0 -80px;\n}\n\n.ui-icon-arrow-4-diag {\n    background-position: -16px -80px;\n}\n\n.ui-icon-extlink {\n    background-position: -32px -80px;\n}\n\n.ui-icon-newwin {\n    background-position: -48px -80px;\n}\n\n.ui-icon-refresh {\n    background-position: -64px -80px;\n}\n\n.ui-icon-shuffle {\n    background-position: -80px -80px;\n}\n\n.ui-icon-transfer-e-w {\n    background-position: -96px -80px;\n}\n\n.ui-icon-transferthick-e-w {\n    background-position: -112px -80px;\n}\n\n.ui-icon-folder-collapsed {\n    background-position: 0 -96px;\n}\n\n.ui-icon-folder-open {\n    background-position: -16px -96px;\n}\n\n.ui-icon-document {\n    background-position: -32px -96px;\n}\n\n.ui-icon-document-b {\n    background-position: -48px -96px;\n}\n\n.ui-icon-note {\n    background-position: -64px -96px;\n}\n\n.ui-icon-mail-closed {\n    background-position: -80px -96px;\n}\n\n.ui-icon-mail-open {\n    background-position: -96px -96px;\n}\n\n.ui-icon-suitcase {\n    background-position: -112px -96px;\n}\n\n.ui-icon-comment {\n    background-position: -128px -96px;\n}\n\n.ui-icon-person {\n    background-position: -144px -96px;\n}\n\n.ui-icon-print {\n    background-position: -160px -96px;\n}\n\n.ui-icon-trash {\n    background-position: -176px -96px;\n}\n\n.ui-icon-locked {\n    background-position: -192px -96px;\n}\n\n.ui-icon-unlocked {\n    background-position: -208px -96px;\n}\n\n.ui-icon-bookmark {\n    background-position: -224px -96px;\n}\n\n.ui-icon-tag {\n    background-position: -240px -96px;\n}\n\n.ui-icon-home {\n    background-position: 0 -112px;\n}\n\n.ui-icon-flag {\n    background-position: -16px -112px;\n}\n\n.ui-icon-calendar {\n    background-position: -32px -112px;\n}\n\n.ui-icon-cart {\n    background-position: -48px -112px;\n}\n\n.ui-icon-pencil {\n    background-position: -64px -112px;\n}\n\n.ui-icon-clock {\n    background-position: -80px -112px;\n}\n\n.ui-icon-disk {\n    background-position: -96px -112px;\n}\n\n.ui-icon-calculator {\n    background-position: -112px -112px;\n}\n\n.ui-icon-zoomin {\n    background-position: -128px -112px;\n}\n\n.ui-icon-zoomout {\n    background-position: -144px -112px;\n}\n\n.ui-icon-search {\n    background-position: -160px -112px;\n}\n\n.ui-icon-wrench {\n    background-position: -176px -112px;\n}\n\n.ui-icon-gear {\n    background-position: -192px -112px;\n}\n\n.ui-icon-heart {\n    background-position: -208px -112px;\n}\n\n.ui-icon-star {\n    background-position: -224px -112px;\n}\n\n.ui-icon-link {\n    background-position: -240px -112px;\n}\n\n.ui-icon-cancel {\n    background-position: 0 -128px;\n}\n\n.ui-icon-plus {\n    background-position: -16px -128px;\n}\n\n.ui-icon-plusthick {\n    background-position: -32px -128px;\n}\n\n.ui-icon-minus {\n    background-position: -48px -128px;\n}\n\n.ui-icon-minusthick {\n    background-position: -64px -128px;\n}\n\n.ui-icon-close {\n    background-position: -80px -128px;\n}\n\n.ui-icon-closethick {\n    background-position: -96px -128px;\n}\n\n.ui-icon-key {\n    background-position: -112px -128px;\n}\n\n.ui-icon-lightbulb {\n    background-position: -128px -128px;\n}\n\n.ui-icon-scissors {\n    background-position: -144px -128px;\n}\n\n.ui-icon-clipboard {\n    background-position: -160px -128px;\n}\n\n.ui-icon-copy {\n    background-position: -176px -128px;\n}\n\n.ui-icon-contact {\n    background-position: -192px -128px;\n}\n\n.ui-icon-image {\n    background-position: -208px -128px;\n}\n\n.ui-icon-video {\n    background-position: -224px -128px;\n}\n\n.ui-icon-script {\n    background-position: -240px -128px;\n}\n\n.ui-icon-alert {\n    background-position: 0 -144px;\n}\n\n.ui-icon-info {\n    background-position: -16px -144px;\n}\n\n.ui-icon-notice {\n    background-position: -32px -144px;\n}\n\n.ui-icon-help {\n    background-position: -48px -144px;\n}\n\n.ui-icon-check {\n    background-position: -64px -144px;\n}\n\n.ui-icon-bullet {\n    background-position: -80px -144px;\n}\n\n.ui-icon-radio-off {\n    background-position: -96px -144px;\n}\n\n.ui-icon-radio-on {\n    background-position: -112px -144px;\n}\n\n.ui-icon-pin-w {\n    background-position: -128px -144px;\n}\n\n.ui-icon-pin-s {\n    background-position: -144px -144px;\n}\n\n.ui-icon-play {\n    background-position: 0 -160px;\n}\n\n.ui-icon-pause {\n    background-position: -16px -160px;\n}\n\n.ui-icon-seek-next {\n    background-position: -32px -160px;\n}\n\n.ui-icon-seek-prev {\n    background-position: -48px -160px;\n}\n\n.ui-icon-seek-end {\n    background-position: -64px -160px;\n}\n\n.ui-icon-seek-start {\n    background-position: -80px -160px;\n}\n\n/* ui-icon-seek-first is deprecated, use ui-icon-seek-start instead */\n.ui-icon-seek-first {\n    background-position: -80px -160px;\n}\n\n.ui-icon-stop {\n    background-position: -96px -160px;\n}\n\n.ui-icon-eject {\n    background-position: -112px -160px;\n}\n\n.ui-icon-volume-off {\n    background-position: -128px -160px;\n}\n\n.ui-icon-volume-on {\n    background-position: -144px -160px;\n}\n\n.ui-icon-power {\n    background-position: 0 -176px;\n}\n\n.ui-icon-signal-diag {\n    background-position: -16px -176px;\n}\n\n.ui-icon-signal {\n    background-position: -32px -176px;\n}\n\n.ui-icon-battery-0 {\n    background-position: -48px -176px;\n}\n\n.ui-icon-battery-1 {\n    background-position: -64px -176px;\n}\n\n.ui-icon-battery-2 {\n    background-position: -80px -176px;\n}\n\n.ui-icon-battery-3 {\n    background-position: -96px -176px;\n}\n\n.ui-icon-circle-plus {\n    background-position: 0 -192px;\n}\n\n.ui-icon-circle-minus {\n    background-position: -16px -192px;\n}\n\n.ui-icon-circle-close {\n    background-position: -32px -192px;\n}\n\n.ui-icon-circle-triangle-e {\n    background-position: -48px -192px;\n}\n\n.ui-icon-circle-triangle-s {\n    background-position: -64px -192px;\n}\n\n.ui-icon-circle-triangle-w {\n    background-position: -80px -192px;\n}\n\n.ui-icon-circle-triangle-n {\n    background-position: -96px -192px;\n}\n\n.ui-icon-circle-arrow-e {\n    background-position: -112px -192px;\n}\n\n.ui-icon-circle-arrow-s {\n    background-position: -128px -192px;\n}\n\n.ui-icon-circle-arrow-w {\n    background-position: -144px -192px;\n}\n\n.ui-icon-circle-arrow-n {\n    background-position: -160px -192px;\n}\n\n.ui-icon-circle-zoomin {\n    background-position: -176px -192px;\n}\n\n.ui-icon-circle-zoomout {\n    background-position: -192px -192px;\n}\n\n.ui-icon-circle-check {\n    background-position: -208px -192px;\n}\n\n.ui-icon-circlesmall-plus {\n    background-position: 0 -208px;\n}\n\n.ui-icon-circlesmall-minus {\n    background-position: -16px -208px;\n}\n\n.ui-icon-circlesmall-close {\n    background-position: -32px -208px;\n}\n\n.ui-icon-squaresmall-plus {\n    background-position: -48px -208px;\n}\n\n.ui-icon-squaresmall-minus {\n    background-position: -64px -208px;\n}\n\n.ui-icon-squaresmall-close {\n    background-position: -80px -208px;\n}\n\n.ui-icon-grip-dotted-vertical {\n    background-position: 0 -224px;\n}\n\n.ui-icon-grip-dotted-horizontal {\n    background-position: -16px -224px;\n}\n\n.ui-icon-grip-solid-vertical {\n    background-position: -32px -224px;\n}\n\n.ui-icon-grip-solid-horizontal {\n    background-position: -48px -224px;\n}\n\n.ui-icon-gripsmall-diagonal-se {\n    background-position: -64px -224px;\n}\n\n.ui-icon-grip-diagonal-se {\n    background-position: -80px -224px;\n}\n\n/* Misc visuals\n----------------------------------*/\n\n/* Corner radius */\n.ui-corner-all, .ui-corner-top, .ui-corner-left, .ui-corner-tl {\n    -moz-border-radius-topleft: 0px;\n    -webkit-border-top-left-radius: 0px;\n    -khtml-border-top-left-radius: 0px;\n    border-top-left-radius: 0px;\n}\n\n.ui-corner-all, .ui-corner-top, .ui-corner-right, .ui-corner-tr {\n    -moz-border-radius-topright: 0px;\n    -webkit-border-top-right-radius: 0px;\n    -khtml-border-top-right-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.ui-corner-all, .ui-corner-bottom, .ui-corner-left, .ui-corner-bl {\n    -moz-border-radius-bottomleft: 0px;\n    -webkit-border-bottom-left-radius: 0px;\n    -khtml-border-bottom-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\n\n.ui-corner-all, .ui-corner-bottom, .ui-corner-right, .ui-corner-br {\n    -moz-border-radius-bottomright: 0px;\n    -webkit-border-bottom-right-radius: 0px;\n    -khtml-border-bottom-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n\n/* Overlays */\n.ui-widget-overlay {\n    background: #aaaaaa url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYhe2UsQ3AIAwEL0zC/qMwhTdJiiCRpH2kfPHu0DUnbN0xxjiZU1U8p/f+ev/Bm7MccAu6ygE0ZzlgrdhRrqqWoKMczB90lQNoznLwuUE3uXRwB08HVZ4OqjwdVHk6qPJ0UOXpoMrTQZWngypPB1WeDqo8HVR5OqjydFDl6aDK7Tt4AWXCW8vnTP6PAAAAAElFTkSuQmCC\") 50% 50% repeat;\n    opacity: .30;\n    filter: Alpha(Opacity = 30);\n}\n\n.ui-widget-shadow {\n    margin: -8px 0 0 -8px;\n    padding: 8px;\n    background: #aaaaaa url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABkCAYAAAD0ZHJ6AAAAe0lEQVRoge3OMQHAIBAAMcC/kjdZJHTI0A4XBdkz86wfO18H3hRUBVVBVVAVVAVVQVVQFVQFVUFVUBVUBVVBVVAVVAVVQVVQFVQFVUFVUBVUBVVBVVAVVAVVQVVQFVQFVUFVUBVUBVVBVVAVVAVVQVVQFVQFVUFVUBVUF8O8A8WdY6opAAAAAElFTkSuQmCC\") 50% 50% repeat-x;\n    opacity: .30;\n    filter: Alpha(Opacity = 30);\n    -moz-border-radius: 8px;\n    -khtml-border-radius: 8px;\n    -webkit-border-radius: 8px;\n    border-radius: 8px;\n}\n\n/*!\n* jQuery UI Resizable 1.8.21\n*\n* Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)\n* Dual licensed under the MIT or GPL Version 2 licenses.\n* http://jquery.org/license\n*\n* http://docs.jquery.com/UI/Resizable#theming\n*/\n.ui-resizable {\n    position: relative;\n}\n\n.ui-resizable-handle {\n    position: absolute;\n    font-size: 0.1px;\n    display: block;\n}\n\n.ui-resizable-disabled .ui-resizable-handle, .ui-resizable-autohide .ui-resizable-handle {\n    display: none;\n}\n\n.ui-resizable-n {\n    cursor: n-resize;\n    height: 7px;\n    width: 100%;\n    top: -5px;\n    left: 0;\n}\n\n.ui-resizable-s {\n    cursor: s-resize;\n    height: 7px;\n    width: 100%;\n    bottom: -5px;\n    left: 0;\n}\n\n.ui-resizable-e {\n    cursor: e-resize;\n    width: 7px;\n    right: -5px;\n    top: 0;\n    height: 100%;\n}\n\n.ui-resizable-w {\n    cursor: w-resize;\n    width: 7px;\n    left: -5px;\n    top: 0;\n    height: 100%;\n}\n\n.ui-resizable-se {\n    cursor: se-resize;\n    width: 12px;\n    height: 12px;\n    right: 1px;\n    bottom: 1px;\n}\n\n.ui-resizable-sw {\n    cursor: sw-resize;\n    width: 9px;\n    height: 9px;\n    left: -5px;\n    bottom: -5px;\n}\n\n.ui-resizable-nw {\n    cursor: nw-resize;\n    width: 9px;\n    height: 9px;\n    left: -5px;\n    top: -5px;\n}\n\n.ui-resizable-ne {\n    cursor: ne-resize;\n    width: 9px;\n    height: 9px;\n    right: -5px;\n    top: -5px;\n}\n\n/*!\n* jQuery UI Button 1.8.21\n*\n* Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)\n* Dual licensed under the MIT or GPL Version 2 licenses.\n* http://jquery.org/license\n*\n* http://docs.jquery.com/UI/Button#theming\n*/\n.ui-button {\n    display: inline-block;\n    position: relative;\n    padding: 0;\n    margin-right: .1em;\n    text-decoration: none !important;\n    cursor: pointer;\n    text-align: center;\n    zoom: 1;\n    overflow: visible;\n}\n\n/* the overflow property removes extra width in IE */\n.ui-button-icon-only {\n    width: 2.2em;\n}\n\n/* to make room for the icon, a width needs to be set here */\nbutton.ui-button-icon-only {\n    width: 2.4em;\n}\n\n/* button elements seem to need a little more width */\n.ui-button-icons-only {\n    width: 3.4em;\n}\n\nbutton.ui-button-icons-only {\n    width: 3.7em;\n}\n\n/*button text element */\n.ui-button .ui-button-text {\n    display: block;\n    line-height: 1.4;\n}\n\n.ui-button-text-only .ui-button-text {\n    padding: .4em 1em;\n}\n\n.ui-button-icon-only .ui-button-text, .ui-button-icons-only .ui-button-text {\n    padding: .4em;\n    text-indent: -9999999px;\n}\n\n.ui-button-text-icon-primary .ui-button-text, .ui-button-text-icons .ui-button-text {\n    padding: .4em 1em .4em 2.1em;\n}\n\n.ui-button-text-icon-secondary .ui-button-text, .ui-button-text-icons .ui-button-text {\n    padding: .4em 2.1em .4em 1em;\n}\n\n.ui-button-text-icons .ui-button-text {\n    padding-left: 2.1em;\n    padding-right: 2.1em;\n}\n\n/* no icon support for input elements, provide padding by default */\ninput.ui-button {\n    padding: .4em 1em;\n}\n\n/*button icon element(s) */\n.ui-button-icon-only .ui-icon, .ui-button-text-icon-primary .ui-icon, .ui-button-text-icon-secondary .ui-icon, .ui-button-text-icons .ui-icon, .ui-button-icons-only .ui-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -8px;\n}\n\n.ui-button-icon-only .ui-icon {\n    left: 50%;\n    margin-left: -8px;\n}\n\n.ui-button-text-icon-primary .ui-button-icon-primary, .ui-button-text-icons .ui-button-icon-primary, .ui-button-icons-only .ui-button-icon-primary {\n    left: .5em;\n}\n\n.ui-button-text-icon-secondary .ui-button-icon-secondary, .ui-button-text-icons .ui-button-icon-secondary, .ui-button-icons-only .ui-button-icon-secondary {\n    right: .5em;\n}\n\n.ui-button-text-icons .ui-button-icon-secondary, .ui-button-icons-only .ui-button-icon-secondary {\n    right: .5em;\n}\n\n/*button sets*/\n.ui-buttonset {\n    margin-right: 7px;\n}\n\n.ui-buttonset .ui-button {\n    margin-left: 0;\n    margin-right: -.3em;\n}\n\n/* workarounds */\nbutton.ui-button::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/* reset extra padding in Firefox */\n/*!\n * jQuery UI Dialog 1.8.21\n *\n * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)\n * Dual licensed under the MIT or GPL Version 2 licenses.\n * http://jquery.org/license\n *\n * http://docs.jquery.com/UI/Dialog#theming\n */\n.ui-dialog {\n    position: absolute;\n    padding: .2em;\n    width: 300px;\n    overflow: hidden;\n}\n\n.ui-dialog .ui-dialog-titlebar {\n    padding: .4em 1em;\n    position: relative;\n}\n\n.ui-dialog .ui-dialog-title {\n    float: left;\n    margin: .1em 16px .1em 0;\n}\n\n.ui-dialog .ui-dialog-titlebar-close {\n    position: absolute;\n    right: .3em;\n    top: 50%;\n    width: 19px;\n    margin: -10px 0 0 0;\n    padding: 1px;\n    height: 18px;\n}\n\n.ui-dialog .ui-dialog-titlebar-close span {\n    display: block;\n    margin: 1px;\n}\n\n.ui-dialog .ui-dialog-titlebar-close:hover, .ui-dialog .ui-dialog-titlebar-close:focus {\n    padding: 0;\n}\n\n.ui-dialog .ui-dialog-content {\n    position: relative;\n    border: 0;\n    padding: .5em;\n    background: none;\n    overflow: auto;\n    zoom: 1;\n}\n\n.ui-dialog .ui-dialog-buttonpane {\n    text-align: left;\n    border-width: 1px 0 0 0;\n    background-image: none;\n    margin: .5em 0 0 0;\n    padding: .3em 1em .5em .4em;\n}\n\n.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset {\n    float: right;\n}\n\n.ui-dialog .ui-dialog-buttonpane button {\n    margin: .5em .4em .5em 0;\n    cursor: pointer;\n}\n\n.ui-dialog .ui-resizable-se {\n    width: 14px;\n    height: 14px;\n    right: 3px;\n    bottom: 3px;\n}\n\n.ui-draggable .ui-dialog-titlebar {\n    cursor: move;\n}\n\n/*!\n* jQuery UI Tabs 1.8.21\n*\n* Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)\n* Dual licensed under the MIT or GPL Version 2 licenses.\n* http://jquery.org/license\n*\n* http://docs.jquery.com/UI/Tabs#theming\n*/\n.ui-tabs {\n    position: relative;\n    padding: 0em;\n    zoom: 1;\n}\n\n/* position: relative prevents IE scroll bug (element with position: relative inside container with overflow: auto appear as \"fixed\") */\n.ui-tabs .ui-tabs-nav {\n    margin: 0;\n    padding: .2em .2em 0;\n}\n\n.ui-tabs .ui-tabs-nav li {\n    list-style: none;\n    float: left;\n    position: relative;\n    top: 1px;\n    margin: 0 .2em 1px 0;\n    border-bottom: 0 !important;\n    padding: 0;\n    white-space: nowrap;\n}\n\n.ui-tabs .ui-tabs-nav li a {\n    float: left;\n    padding: .2em 1em;\n    text-decoration: none;\n}\n\n.ui-tabs .ui-tabs-nav li.ui-tabs-active {\n    margin-bottom: 0;\n    padding-bottom: 1px;\n}\n\n.ui-tabs .ui-tabs-nav li.ui-tabs-active a, .ui-tabs .ui-tabs-nav li.ui-state-disabled a, .ui-tabs .ui-tabs-nav li.ui-tabs-loading a {\n    cursor: text;\n}\n\n.ui-tabs .ui-tabs-nav li a, .ui-tabs.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-active a {\n    cursor: pointer;\n}\n\n/* first selector in group seems obsolete, but required to overcome bug in Opera applying cursor: text overall if defined elsewhere... */\n.ui-tabs .ui-tabs-panel {\n    display: block;\n    border-width: 0;\n    padding: 0em 0.1em;\n    background: none;\n}\n\n/*!\n* jQuery UI Progressbar 1.8.21\n*\n* Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)\n* Dual licensed under the MIT or GPL Version 2 licenses.\n* http://jquery.org/license\n*\n* http://docs.jquery.com/UI/Progressbar#theming\n*/\n.ui-progressbar {\n    height: 5px;\n    text-align: left;\n    overflow: hidden;\n}\n\n.ui-progressbar .ui-progressbar-value {\n    margin: -1px;\n    height: 100%;\n}\n\ndiv.prog:after {\n    -webkit-animation: move 2s linear infinite;\n    -moz-animation: move 2s linear infinite;\n}\n.prog {\n    display: block;\n    width: 100%;\n    height: 100%;\n    background: rgb(252, 249, 56) -moz-linear-gradient(center bottom, rgb(252, 249, 56) 37%, rgb(252, 249, 56) 69%);\n    position: relative;\n    overflow: hidden;\n}\n\n.prog:after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: -moz-linear-gradient(-45deg, rgba(10, 10, 10, .6) 25%, transparent 25%, transparent 50%, rgba(10, 10, 10, .6) 50%, rgba(10, 10, 10, .6) 75%, transparent 75%, transparent);\n    z-index: 1;\n    -webkit-background-size: 50px 50px;\n    -moz-background-size: 50px 50px;\n    background-size: 50px 50px;\n    -webkit-animation: move 5s linear infinite;\n    -moz-animation: move 5s linear infinite;\n    overflow: hidden;\n}\n\n.animate > .prog:after {\n    display: none;\n}\n\n@-webkit-keyframes move {\n\t\t    0% {\n\t\t       background-position: 0 0;\n\t\t    }\n\t\t    100% {\n\t\t       background-position: 50px 50px;\n\t\t    }\n\t\t}\n\n@-moz-keyframes move {\n\t\t    0% {\n\t\t       background-position: 0 0;\n\t\t    }\n\t\t    100% {\n\t\t       background-position: 50px 50px;\n\t\t    }\n\t\t}");
    var LF = "table.resources td {\n    font-size: 12px;\n    line-height: 12px;\n}\n\ntable.resources .More {\n    font-size: 11px;\n    height: 11px ! important;\n    line-height: 11px ! important;\n}\n\n#BuildTab table.resources tr td, #BuildTab table.resources tr td a {\n    font-size: 12px;\n    padding: 0 2px;\n}\n\n.toast .message {\n    font-size: 12px;\n}\n\n.ui-tooltip table tr.small td {\n    font-size: 11px ! important;\n    line-height: 11px ! important;\n}";
    if (database.options.largeFont) GM_addStyle(LF);
};
/***********************************************************************************************************************
 * ikariam
 **********************************************************************************************************************/

var ikariam = {
    _View:null,
    _Host:null,
    _Server:null,
    _ActionRequest:null,
    _Units:null,
    _BuildingsList:null,
    _AltBuildingsList:null,
    _Nationality:null,
    _GameVersion:null,
    _TemplateView:null,
    _currentCity:null,
    url : function(){
        return 'http://' + this.Host() + '/index.php'
    },
    Host:function () {
        if (this._Host == null) {
            this._Host = '';
            this._Host = document.location.host;
        }
        return this._Host;
    },
    Server:function (host) {
        if (this._Server == null) {
            if (host == undefined) {
                host = this.Host();
            }
            this._Server = '';
            var parts = host.split(".");
            var idx = 0;
            if (parts[0] == 'www') {
                idx++;
            }
            this._Server = parts[idx];
        }
        return this._Server;
    },
    Nationality:function (host) {
        if (this._Nationality == null) {
            if (host == undefined) {
                host = this.Host();
            }
            this._Nationality = '';
            var parts = host.split(".");
            var idx = (parts[0] == 'www') ? 2 : 1;
            this._Nationality = parts[idx];
        }
        return this._Nationality;
    },
    getNextWineTick:function (precision) {
        precision = precision || 1; // 1 for Mins, 2 for mins:secs
        if (precision == 1) {
            return 60 - new Date().getMinutes();
        }
        else{
            var secs = 3600 - (new Date().getMinutes() * 60) - new Date().getSeconds();
            var ret = Math.floor(secs / 60) + database.getGlobalData.getLocalisedString('minute') + ' ';
            ret += secs - (Math.floor(secs / 60) * 60) + database.getGlobalData.getLocalisedString('second');
            return ret;
        }
    },
    GameVersion:function () {
        if (this._GameVersion == null) {
            this._GameVersion = $('.version a span').text().split("v ")[1];
        }
        return this._GameVersion
    },
    get CurrentCityId() {
        return unsafeWindow.ikariam.backgroundView.id === 'city' ?
               ikariam._currentCity || unsafeWindow.ikariam.model.relatedCityData[unsafeWindow.ikariam.model.relatedCityData.selectedCity].id :
               unsafeWindow.ikariam.model.relatedCityData[unsafeWindow.ikariam.model.relatedCityData.selectedCity].id
    },
    get viewIsCity(){return unsafeWindow.ikariam.backgroundView.id === 'city'},
    get getCurrentCity() {
        return database.cities[ikariam.CurrentCityId];
    },
    get CurrentTemplateView() {
        try {
            this._CurrentTemplateView = unsafeWindow.ikariam.templateView.id;
        }
        catch (e) {
            this._CurrentTemplateView = null
        }
        return this._CurrentTemplateView;
    },
    getLocalizationStrings :function() {
        var localStrings = unsafeWindow.LocalizationStrings;
        if (!localStrings){
                $('script').each(function (index, script) {
                    var match = /LocalizationStrings = JSON.parse\('(.*)'\);/.exec(script.innerHTML);
                    if (match) {
                        localStrings = JSON.parse(match[1]);
                        return false;
                    }
                });
        }
        var local = $.extend({}, localStrings);
        //merge ikariams time units
        $.extend(local, local['timeunits']['short']);
        //remove extra objects
        delete local['warnings'];
        delete local['timeunits'];
        $.each(local,function(name,value){database.getGlobalData.addLocalisedString(name.toLowerCase(),value)});
        local = null;
    },
    setupEventHandlers:function () {
        events('ajaxResponse').sub(function (response) {
            var view, html, data, template;
            var len = response.length;
            console.log(response)
            var oldCity = this._currentCity
            while (len) {
                len--;
                switch (response[len][0]) {
                    case 'updateGlobalData':
                        this._currentCity = parseInt(response[len][1][11].id);
                        var cityData = $.extend({}, response[len][1][11], response[len][1][10]);
                        events('updateBuildingData').pub(this.CurrentCityId, cityData.position);
                        events('updateCityData').pub(this.CurrentCityId, $.extend({}, cityData));
                        break;
                    case 'changeView':
                        view = response[len][1][0];
                        html = response[len][1][1];
                        break;
                    case 'updateTemplateData':
                        template = response[len][1];
                        if (unsafeWindow.ikariam.templateView){
                            if (unsafeWindow.ikariam.templateView.id == 'researchAdvisor'){
                                view = unsafeWindow.ikariam.templateView.id
                            }
                        }
                        break;
                    case 'updateBackgroundData':
                        oldCity = this.CurrentCityId
                        this._currentCity = parseInt(response[len][1].id);
                        events('updateBuildingData').pub(response[len][1].id, response[len][1].position);
                        events('updateCityData').pub(response[len][1].id, $.extend(true, {}, unsafeWindow.dataSetForView, response[len][1]));
                        break;
                }
            }

            this.parseViewData(view, html, template);
            this.RestoreTemplateBox();


                if (oldCity !== this.CurrentCityId) {
                    events('cityChanged').pub(this.CurrentCityId)
            }
        }.bind(ikariam));
        //parse data on form submit and add it when submit success
        events('formSubmit').sub(function (form) {
            var formID = form.getAttribute('id');
            if (!ikariam[formID + 'Submitted'])return false;
            var formSubmission = (function formSubmit() {
                var data = ikariam[formID + 'Submitted']();
                return function formSubmitID(response) {
                    var len = response.length;
                    var feedback = 0;
                    while (len) {
                        len--;
                        if (response[len][0] == 'provideFeedback')
                            feedback = response[len][1][0].type;
                    }
                    if (feedback == 10) //success
                        ikariam[formID + 'Submitted'](data);
                    events('ajaxResponse').unsub(formSubmission);
                }
            })();
            events('ajaxResponse').sub(formSubmission)
        }.bind(ikariam));
    },
    Init:function () {
        this.setupEventHandlers();
    },
    parseViewData:function (view, html, tData) {
        if (this.getCurrentCity) {
            switch (view) {
                case 'finances':
                    this.parseFinances($('#finances .table01 tr').slice(2).children('td'));
                    break;
                case Constant.Buildings.TOWN_HALL:
                    this.parseTownHall(tData);
                    break;
                case 'militaryAdvisor':
                    this.parseMilitaryAdvisor(html, tData);
                    break;
                case 'cityMilitary':
                    this.parseCityMilitary();
                    this.parseMilitaryLocalization();
                    break;
                case 'researchAdvisor':
                    this.parseResearchAdvisor(tData);
                    break;
                case Constant.Buildings.PALACE:
                    this.parsePalace();
                    break;
                case Constant.Buildings.ACADEMY:
                    this.parseAcademy(tData);
                    break;
                case 'culturalPossessions_assign':
                    this.parseCulturalPossessions(html);
                    break;
                case Constant.Buildings.MUSEUM:
                    this.parseMuseum();
                    break;
                case Constant.Buildings.TAVERN:
                    this.parseTavern();
                    break;
                case 'transport':
                    //this.transportFormSubmitted();
                    break;
                case Constant.Buildings.TEMPLE:
                    this.parseTemple(tData);
                    break;
                case Constant.Buildings.BARRACKS:
                case Constant.Buildings.SHIPYARD:
                    this.parseBarracks(view, html, tData);
                    break;
                case 'deployment':
                    this.parseMilitaryTransport();
                    break;
            }
			database.getGlobalData.finance.cash = $('#globalResources').find('.gold a').text().replace('.', '');
			events('globalData').pub({finances:true});
        }
    },
    parsePalace:function () {
        var governmentType = $('.government_pic img').attr('src').slice(16, -8);
        var changed = (database.getGlobalData.getGovernmentType != governmentType);
        database.getGlobalData.governmentType = governmentType
        if (changed) events('globalDataUpdated').pub({type:'government'})
    },
    parseCulturalPossessions:function (html) {
        var allCulturalGoods = html.match(/iniValue\s:\s(\d*)/g);
        var changes = [];
        $.each(html.match(/goodscity_(\d*)/g), function (i) {
            var cityID = this.split('_')[1];
            var culturalGoods = parseInt(allCulturalGoods[i].split(' ').pop());
            var changed = (database.cities[cityID]._culturalGoods != culturalGoods);
            if (changed) {
                database.cities[cityID]._culturalGoods = culturalGoods;
                changes.push(cityID)
            }
        });
        if (changes.length) $.each(changes, function (idx, cityID) {events('cityData').pub(cityID, {culturalGoods:true})})
    },
    parseMuseum:function () {
        var regText = $('#val_culturalGoodsDeposit').parent().text().match(/(\d+)/g);
        if (regText.length == 2) {
        var changed = ikariam.getCurrentCity.updateCulturalGoods(parseInt(regText[0]))
        }
        if (changed) events('cityData').pub(ikariam.CurrentCityId, {culturalGoods:true})
    },
    parseTavern:function () {
    },
    resTransportObject:function () {
        return {id:null,
            wood:0,
            wine:0,
            marble:0,
            glass:0,
            sulfur:0,
            targetCityId:0,
            arrivalTime:0,
            originCityId:0,
            loadedTime:0,
            mission:''};
    },
    troopTransportObject:function () {
        return {id:null,
            troops:{},
            targetCityId:0,
            arrivalTime:0,
            originCityId:0,
            returnTime:0,
            mission:''};
    },
    parseBarracks:function (view, html, tData) {
        //Todo:add change logger
        var type = view == Constant.Buildings.BARRACKS ? 'army' :
                   view == Constant.Buildings.SHIPYARD ? 'fleet' : false;
        var city = ikariam.getCurrentCity;
        var currentUnits = {};
        var i = 14
        while (i--) {
            if (tData['js_barracksUnitUnitsAvailable' + (i - 1)]) {
                currentUnits[tData['js_barracksUnitClass' + (i - 1)]['class'].split(' ').pop()] = parseInt(tData['js_barracksUnitUnitsAvailable' + (i - 1)].text)
            }
        }
        var changes = city.military.updateUnits(currentUnits)

        var elem = $('#unitConstructionList');
        if (elem.length) {
            var tasks = [];
            tasks.push({
                           units:parseUnits(elem.find('> .army_wrapper .army')),
                           completionTime:parseTime($('#buildCountDown').text()),
                           type:type
                       });
            elem.find('.constructionBlock').each(function () {
                tasks.push({
                               units:parseUnits($(this).find('> .army_wrapper .army')),
                               completionTime:parseTime($(this).find('h4 > span').text()),
                               type:type
                           })
            });
            changes = changes.concat(city.military.setTraining(tasks))
        }

        elem = null;
        if (changes.length) {
            events('militaryUpdated').pub(city.getId, $.exclusive(changes))
        }

        function parseUnits(element) {
            var units = {};
            element.each(function () {
                units[Constant.unitIds[this.classList.toString().match(/(\d+)/g)]] = parseInt(this.nextElementSibling.textContent.match(/(\d+)/g))
            });
            return units;
        }

        function parseTime(timeText) {
            var completionTime = new Date();
            completionTime.setSeconds(completionTime.getSeconds() + (
                timeText.match(/(\d+)s/) ? parseInt(timeText.match(/(\d+)s/)[1]) : 0));
            completionTime.setMinutes(completionTime.getMinutes() + (
                timeText.match(/(\d+)m/) ? parseInt(timeText.match(/(\d+)m/)[1]) : 0));
            completionTime.setHours(completionTime.getHours() + (
                timeText.match(/(\d+)h/) ? parseInt(timeText.match(/(\d+)h/)[1]) : 0));
            completionTime.setDate(completionTime.getDate() + (
                timeText.match(/(\d+)D/) ? parseInt(timeText.match(/(\d+)D/)[1]) : 0));
            return completionTime.getTime();
        }
    },
    //TODO: Cleanup
    /**
     * First call without data will parse the transportform, seccond call will add the forms data to the database
     */
    transportFormSubmitted:function (data) {
        if (!data) {
            var journeyTime = $('#journeyTime').text();
            var loadingTime = $('#loadingTime').text();
            var wood = parseInt($('#textfield_wood').val());
            var wine = parseInt($('#textfield_wine').val());
            var marble = parseInt($('#textfield_marble').val());
            var glass = parseInt($('#textfield_glass').val());
            var sulfur = parseInt($('#textfield_sulfur').val());
            var targetID = $('input[name=destinationCityId]').val();
            var ships = $('#transporterCount').val();
            var arrTime = new Date();
            var loadedTime = new Date();

            arrTime.setSeconds(arrTime.getSeconds() + (journeyTime.match(/(\d+)s/) ? parseInt(journeyTime.match(/(\d+)s/)[1]) : 0));
            arrTime.setMinutes(arrTime.getMinutes() + (journeyTime.match(/(\d+)m/) ? parseInt(journeyTime.match(/(\d+)m/)[1]) : 0));
            arrTime.setHours(arrTime.getHours() + (journeyTime.match(/(\d+)h/) ? parseInt(journeyTime.match(/(\d+)h/)[1]) : 0));
            arrTime.setDate(arrTime.getDate() + (journeyTime.match(/(\d+)D/) ? parseInt(journeyTime.match(/(\d+)D/)[1]) : 0));

            loadedTime.setSeconds(loadedTime.getSeconds() + (loadingTime.match(/(\d+)s/) ? parseInt(loadingTime.match(/(\d+)s/)[1]) : 0));
            loadedTime.setMinutes(loadedTime.getMinutes() + (loadingTime.match(/(\d+)m/) ? parseInt(loadingTime.match(/(\d+)m/)[1]) : 0));
            loadedTime.setHours(loadedTime.getHours() + (loadingTime.match(/(\d+)h/) ? parseInt(loadingTime.match(/(\d+)h/)[1]) : 0));
            loadedTime.setDate(loadedTime.getDate() + (loadingTime.match(/(\d+)D/) ? parseInt(loadingTime.match(/(\d+)D/)[1]) : 0));


            //SITR.log(transport);
            return new Movement('XXX-' + arrTime.getTime(),
                                         this.CurrentCityId,
                                         targetID,
                                         arrTime.getTime(),
                                         'transport',
                                         loadedTime.getTime(),
                                         { wood:wood||0, wine:wine||0, marble:marble||0, glass:glass||0, sulfur:sulfur||0},
                                         undefined,
                                         ships)
        }
        else {
            database.getGlobalData.addFleetMovement(data);
            events('movementsUpdated').pub([data.getTargetCityId]);
            //events('resourcesUpdated').pub(data.getOriginCityId)
        };
    },
    parseMilitaryTransport:function (submit) {
        //$('ul.assignUnits li input.textfield')
        submit = submit || false;
        var that = this;
        if (submit) {
            var journeyTime = $('#journeyTime').text();
            var returnTime = $('#returnTime').text();
            var targetID = $('input:[name=destinationCityId]').val();
            var troops = {};
            var mission = '';
            $('ul.assignUnits li input.textfield').each(function () {
                if (this.value !== 0) {
                    troops[this.getAttribute('name').split('_').pop()] = parseInt(this.value)
                }
                if (mission === '') {
                    mission = 'deploy' + this.getAttribute('name').match(/_(.*)_/)[1]
                }
            });
            var arrTime = new Date();
            var transport = this.troopTransportObject();
            transport.id = 'XXX-' + arrTime.getTime();
            transport.targetCityId = targetID;
            transport.originCityId = this.CurrentCityId;
            transport.mission = mission;
            transport.troops = troops;
            arrTime.setSeconds(arrTime.getSeconds() + (journeyTime.match(/(\d+)s/) ? parseInt(journeyTime.match(/(\d+)s/)[1]) : 0));
            arrTime.setMinutes(arrTime.getMinutes() + (journeyTime.match(/(\d+)m/) ? parseInt(journeyTime.match(/(\d+)m/)[1]) : 0));
            arrTime.setHours(arrTime.getHours() + (journeyTime.match(/(\d+)h/) ? parseInt(journeyTime.match(/(\d+)h/)[1]) : 0));
            arrTime.setDate(arrTime.getDate() + (journeyTime.match(/(\d+)D/) ? parseInt(journeyTime.match(/(\d+)D/)[1]) : 0));
            transport.arrivalTime = arrTime.getTime();
            arrTime = new Date();
            arrTime.setSeconds(arrTime.getSeconds() + (returnTime.match(/(\d+)s/) ? parseInt(returnTime.match(/(\d+)s/)[1]) : 0));
            arrTime.setMinutes(arrTime.getMinutes() + (returnTime.match(/(\d+)m/) ? parseInt(returnTime.match(/(\d+)m/)[1]) : 0));
            arrTime.setHours(arrTime.getHours() + (returnTime.match(/(\d+)h/) ? parseInt(returnTime.match(/(\d+)h/)[1]) : 0));
            arrTime.setDate(arrTime.getDate() + (returnTime.match(/(\d+)D/) ? parseInt(returnTime.match(/(\d+)D/)[1]) : 0));
            transport.returnTime = arrTime.getTime();
            database.getGlobalData.addFleetMovement(transport);
            render.toast('Updated: Movement added');
        }
        else {
            return true
        }
    },
    parseFinances:function ($elem) {
        //todo: add change logger
        //database.getGlobalData.finance.lastUpdated = $.now();
        var updateTime = $.now()

        for (var i = 1; i < Object.keys(database.cities).length + 1; i++) {
            var city = database.cities[Object.keys(database.cities)[i - 1]];
            if (city != false) {
                var changed = city.updateIncome(parseInt($elem[(i * 4) - 3].textContent.split(database.getGlobalData.getLocalisedString('thousandSeperator')).join('')));
                changed = city.updateExpenses(parseInt($elem[(i * 4) - 2].textContent.split(database.getGlobalData.getLocalisedString('thousandSeperator')).join(''))) || changed;
            }
            if (changed) events('cityData').pub(city.getId, {finances:true});
            //database.getGlobalData.SigmaIncome = parseInt($elem[(Object.keys(database.cities).length * 4) + 1].textContent.split(database.getGlobalData.getLocalisedString('thousandSeperator')).join(''));
            //database.getGlobalData.SigmaExpenses = -1 * parseInt($elem[(Object.keys(database.cities).length * 4) + 2].textContent.split(database.getGlobalData.getLocalisedString('thousandSeperator')).join(''));
        }
        var $breakdown = $('#finances').find('tbody tr.bottomLine td:last-child');
        database.getGlobalData.finance.armyCost = parseInt($breakdown[0].textContent.split(database.getGlobalData.getLocalisedString('thousandSeperator')).join(''));
        database.getGlobalData.finance.fleetCost = parseInt($breakdown[1].textContent.split(database.getGlobalData.getLocalisedString('thousandSeperator')).join(''));
        database.getGlobalData.finance.armySupply = parseInt($breakdown[2].textContent.split(database.getGlobalData.getLocalisedString('thousandSeperator')).join(''));
        database.getGlobalData.finance.fleetSupply = parseInt($breakdown[3].textContent.split(database.getGlobalData.getLocalisedString('thousandSeperator')).join(''));
        events('globalData').pub({finances:true});
    },
    parseResearchAdvisor:function (data) {
        var changes = [];
        var research = JSON.parse(data['new_js_params'] || data['load_js'].params).currResearchType;
        $.each(research, function (name, Data) {
            var id = parseInt(Data.aHref.match(/researchId=([0-9]+)/i)[1]);
            var level = name.match(/\((\d+)\)/);
            var explored = level? parseInt(level[1])-1: (Data.liClass === 'explored' ? 1 : 0)
            var changed = database.getGlobalData.updateResearchTopic(id, explored);
            if (changed) changes.push({type:'research_topic',subType:id});
            database.getGlobalData.addLocalisedString('research_' + id, name.split('(').shift())
        });
        //        if (Object.keys(database.getGlobalData.research.topics).length > 66) {
        //            database.getGlobalData.research.lastUpdate = $.now();
        //        }
        if (changes.length) events('globalDataUpdated').pub(changes);
        database.getGlobalData.addLocalisedString('researchpoints', $('li.points').text().split(':')[0]);
    },
    parseAcademy:function (data) {
        var city = ikariam.getCurrentCity;
        var changed = city.updateResearchers(parseInt(data.js_AcademySlider.slider.ini_value))
        if (changed)
        events('cityData').pub(city.getId, {research:changed})
    },
    parseTownHall:function (data) {
        var changes = {};
        var city = ikariam.getCurrentCity;
        var cultBon = parseInt(data['js_TownHallSatisfactionOverviewCultureBoniTreatyBonusValue'].text) || 0;
        var priests = parseInt(data['js_TownHallPopulationGraphPriestCount'].text) || 0;
        var researchers = parseInt(data['js_TownHallPopulationGraphScientistCount'].text) || 0;
        changes['culturalGoods'] = city.updateCulturalGoods(cultBon / 50);
        changes['priests'] = city.updatePriests(priests);
        changes['research'] = city.updateResearchers(researchers);

        events('cityData').pub(ikariam.CurrentCityId, changes);
        //parseInt(data.js_TownHallSatisfactionOverviewWineBoniServeBonusValue.text)/60
    },
    parseTemple:function (data) {
        var priests = parseInt(data['js_TempleSlider.slider']['ini_value']) || 0;
        var changed = ikariam.getCurrentCity.updatePriests(priests);
        events('cityData').pub(ikariam.CurrentCityId, {priests:changed})
    },
    parseMilitaryAdvisor:function (html, data) {
        console.log(html, data)
        try {
            var ownMovementIds = [];
            var move;
            for (var key in data) {
                var match = key.match(/^js_MilitaryMovementsEventRow(\d+)$/);
                if (match && Utils.existsIn(data[key]['class'], 'own')) {
                    ownMovementIds.push(match[1])
                }
            }
            var changes = database.getGlobalData.clearFleetMovements();
            if (ownMovementIds.length) {
                $.each(ownMovementIds, function (idx, value) {
                    var transport = new Movement(value);
                    transport._id = parseInt(value);
                    transport._arrivalTime = parseInt(data['js_MilitaryMovementsEventRow' + value + 'ArrivalTime'].countdown.enddate * 1000);
                    console.log(transport._arrivalTime)
                    transport._loadingTime = 0;
                    transport._originCityId = parseInt(data['js_MilitaryMovementsEventRow' + value + 'OriginLink'].href.match(/cityId=(\d+)/)[1]);
                    transport._targetCityId = parseInt(data['js_MilitaryMovementsEventRow' + value + 'TargetLink'].href.match(/cityId=(\d+)/)[1]);
                    transport._mission = data['js_MilitaryMovementsEventRow' + value + 'MissionIcon']['class'].split(' ')[1];
                    var status = data['js_MilitaryMovementsEventRow' + value + 'Mission']['class'];
                    if (status) {
                        if (Utils.existsIn(status, 'arrow_left_green')) {
                            var t = transport._originCityId;
                            transport._originCityId = transport._targetCityId;
                            transport._targetCityId = t;
                        }
                    }
                    else{
                        transport._loadingTime = transport._arrivalTime;
                        if (database.getCityFromId(transport._originCityId) && database.getCityFromId(transport._targetCityId)) {
                            transport._arrivalTime += Utils.estimateTravelTime(database.getCityFromId(transport._originCityId).getCoordinates,
                                                                               database.getCityFromId(transport._targetCityId).getCoordinates);
                        }
                    }
                    switch (transport._mission) {
                        case 'trade':
                        case 'transport':
                            $.each(data['js_MilitaryMovementsEventRow' + value + 'UnitDetails']['appendElement'],
                                   function (index, item) {
                                       if (Utils.existsIn(item['class'], 'wood')) {
                                           transport._resources.wood = parseInt(item.text);
                                       }
                                       else if (Utils.existsIn(item['class'], 'wine')) {
                                           transport._resources.wine = parseInt(item.text);
                                       }
                                       else if (Utils.existsIn(item['class'], 'marble')) {
                                           transport._resources.marble = parseInt(item.text);
                                       }
                                       else if (Utils.existsIn(item['class'], 'glass')) {
                                           transport._resources.glass = parseInt(item.text);
                                       }
                                       else if (Utils.existsIn(item['class'], 'sulfur')) {
                                           transport._resources.sulfur = parseInt(item.text);
                                       }
                                   });
                            break;
                        case 'deployarmy':
                        case 'deployfleet':
                            transport.military = {};
                            $.each(data['js_MilitaryMovementsEventRow' + value + 'UnitDetails'].appendElement,
                                   function (index, item) {
                                       $.each(Constant.Military, function findIsUnit(i, val) {
                                           if (Utils.existsIn(item['class'], ' ' + val)) {
                                               transport.military[val] = parseInt(item.text);
                                               return false;
                                           }
                                       });
                                   });
                            break;
                        //TODO: other military movements
                        default:
                            return true
                    }
                    database.getGlobalData.addFleetMovement(transport);
                    changes.push(transport._targetCityId);
                });
            }
            //console.log(changes)
            if (changes.length) events('movementsUpdated').pub($.exclusive(changes))
        }
        catch (e) {
            SITR.error('parseMilitaryAdvisor', e);
        }
        finally {
        }


    },
    parseCityMilitary:function () {
        //TODO: add changes logger
        try {
            var $elemArmy = $('#tabUnits > .contentBox01h td');
            var $elemShips = $('#tabShips > .contentBox01h td');

            var city = ikariam.getCurrentCity;
            var cityArmy = {};

            cityArmy[Constant.Military.SLINGER] = parseInt($elemArmy[4].innerHTML);
            cityArmy[Constant.Military.SWORDSMAN] = parseInt($elemArmy[3].innerHTML);
            cityArmy[Constant.Military.HOPLITE] = parseInt($elemArmy[0].innerHTML);
            cityArmy[Constant.Military.MARKSMAN] = parseInt($elemArmy[6].innerHTML);
            cityArmy[Constant.Military.MORTAR] = parseInt($elemArmy[9].innerHTML);
            cityArmy[Constant.Military.CATAPULT] = parseInt($elemArmy[8].innerHTML);
            cityArmy[Constant.Military.RAM] = parseInt($elemArmy[7].innerHTML);
            cityArmy[Constant.Military.STEAM_GIANT] = parseInt($elemArmy[1].innerHTML);
            cityArmy[Constant.Military.BALLOON_BOMBADIER] = parseInt($elemArmy[11].innerHTML);
            cityArmy[Constant.Military.COOK] = parseInt($elemArmy[12].innerHTML);
            cityArmy[Constant.Military.DOCTOR] = parseInt($elemArmy[13].innerHTML);
            cityArmy[Constant.Military.GYROCOPTER] = parseInt($elemArmy[10].innerHTML);
            cityArmy[Constant.Military.ARCHER] = parseInt($elemArmy[5].innerHTML);
            cityArmy[Constant.Military.SPEARMAN] = parseInt($elemArmy[2].innerHTML);

            cityArmy[Constant.Military.RAM_SHIP] = parseInt($elemShips[2].innerHTML);
            cityArmy[Constant.Military.FLAME_THROWER] = parseInt($elemShips[0].innerHTML);
            cityArmy[Constant.Military.SUBMARINE] = parseInt($elemShips[7].innerHTML);
            cityArmy[Constant.Military.BALLISTA_SHIP] = parseInt($elemShips[4].innerHTML);
            cityArmy[Constant.Military.CATAPULT_SHIP] = parseInt($elemShips[3].innerHTML);
            cityArmy[Constant.Military.MORTAR_SHIP] = parseInt($elemShips[5].innerHTML);
            cityArmy[Constant.Military.STEAM_RAM] = parseInt($elemShips[1].innerHTML);
            cityArmy[Constant.Military.ROCKET_SHIP] = parseInt($elemShips[6].innerHTML);
            cityArmy[Constant.Military.PADDLE_SPEEDBOAT] = parseInt($elemShips[8].innerHTML);
            cityArmy[Constant.Military.BALLOON_CARRIER] = parseInt($elemShips[9].innerHTML);
            cityArmy[Constant.Military.TENDER] = parseInt($elemShips[10].innerHTML);
            var changes = city.military.updateUnits(cityArmy)
            //events('dataUpdated').pub(ikariam.CurrentCityId, 'cityMilitary');
            $elemArmy = $elemShips = null;
            events('militaryUpdated').pub(city.getId, changes)

        }
        catch (e) {
            SITR.error('parseCityMilitary', e);
        }
        finally {
        }
    },
    parseMilitaryLocalization:function () {
        var $elemA = $('#tabUnits > .contentBox01h th');
        var $elemS = $('#tabShips > .contentBox01h th');
        if (($elemA.length == 0) || ($elemS.length == 0)) {
            return false;
        }
        database.getGlobalData.addLocalisedString('phalanx', $elemA[0].getAttribute('title'));
        database.getGlobalData.addLocalisedString('steamgiant', $elemA[1].getAttribute('title'));
        database.getGlobalData.addLocalisedString('spearman', $elemA[2].getAttribute('title'));
        database.getGlobalData.addLocalisedString('swordsman', $elemA[3].getAttribute('title'));
        database.getGlobalData.addLocalisedString('slinger', $elemA[4].getAttribute('title'));
        database.getGlobalData.addLocalisedString('archer', $elemA[5].getAttribute('title'));
        database.getGlobalData.addLocalisedString('marksman', $elemA[6].getAttribute('title'));
        database.getGlobalData.addLocalisedString('ram', $elemA[7].getAttribute('title'));
        database.getGlobalData.addLocalisedString('catapult', $elemA[8].getAttribute('title'));
        database.getGlobalData.addLocalisedString('mortar', $elemA[9].getAttribute('title'));
        database.getGlobalData.addLocalisedString('gyrocopter', $elemA[10].getAttribute('title'));
        database.getGlobalData.addLocalisedString('bombardier', $elemA[11].getAttribute('title'));
        database.getGlobalData.addLocalisedString('cook', $elemA[12].getAttribute('title'));
        database.getGlobalData.addLocalisedString('medic', $elemA[13].getAttribute('title'));
        database.getGlobalData.addLocalisedString('ship_ram', $elemS[2].getAttribute('title'));
        database.getGlobalData.addLocalisedString('ship_flamethrower', $elemS[0].getAttribute('title'));
        database.getGlobalData.addLocalisedString('ship_steamboat', $elemS[1].getAttribute('title'));
        database.getGlobalData.addLocalisedString('ship_ballista', $elemS[4].getAttribute('title'));
        database.getGlobalData.addLocalisedString('ship_catapult', $elemS[3].getAttribute('title'));
        database.getGlobalData.addLocalisedString('ship_mortar', $elemS[5].getAttribute('title'));
        database.getGlobalData.addLocalisedString('ship_submarine', $elemS[7].getAttribute('title'));
        database.getGlobalData.addLocalisedString('ship_paddlespeedship', $elemS[8].getAttribute('title'));
        database.getGlobalData.addLocalisedString('ship_ballooncarrier', $elemS[9].getAttribute('title'));
        database.getGlobalData.addLocalisedString('ship_tender', $elemS[10].getAttribute('title'));
        database.getGlobalData.addLocalisedString('ship_rocketship', $elemS[6].getAttribute('title'));
        $elemA = $elemS = null
    },
    FetchAllTowns:function () {
        var _relatedCityData = unsafeWindow.ikariam.model.relatedCityData;
        var _cityId = null;
        var city = null;
        database.options.cityOrder = []; //temporary
        if (_relatedCityData) {
            for (_cityId in _relatedCityData) {
                if (_cityId != 'selectedCity' && _cityId != 'additionalInfo') {
                    var own = (_relatedCityData[_cityId]['relationship'] == 'ownCity')
                    if (own) {
                        if (database.cities[_relatedCityData[_cityId]['id']] == undefined) {
                            database.cities[_relatedCityData[_cityId]['id']] = database.addCity(_relatedCityData[_cityId]['id']);
                            city = database.cities[_relatedCityData[_cityId]['id']];
                            city.updateTradeGoodID(parseInt(_relatedCityData[_cityId]['tradegood']));
                            city.isOwn = own;
                        }
                        city = database.cities[_relatedCityData[_cityId]['id']];
                        city.updateName(_relatedCityData[_cityId]['name']);
                        var coords = _relatedCityData[_cityId]['coords'].match(/(\d+)/);
                        city.updateCoordinates(coords[0], coords[1]);
                        if ($.inArray(database.options.cityOrder, city.getId) === -1) {
                            database.options.cityOrder.push(city.getId)
                        }
                    }
                }
            }
            //remove deleted cities
                        for (var cID in database.cities) {
                            var ghost = true;
                            for (_cityId in _relatedCityData) {
                                if (_relatedCityData[_cityId]['id'] == cID || !database.cities[cID].isOwn) {
                                    ghost = false;
                                }
                            }
                            if (ghost) {
                                delete database.cities[cID]
                            }
                        }
        }
    },
    RestoreTemplateBox:function () {
        var city = ikariam.getCurrentCity;
        if (city){
        switch (database.options.restoreRes) {
            case -1:
                if (database.options.openBuilding != -1)
                    $('#js_CityPosition' + database.options.openBuilding + 'Link').click();
                break;
            case 1:
                render.AddIslandCSS();
                document.location = 'javascript:void(ajaxHandlerCall(' + JSON.stringify("?view=resource&type=resource&islandId=" + city.getIslandID) + '));';
                break;
            case 2:
                render.AddIslandCSS();
                document.location = 'javascript:void(ajaxHandlerCall(' + JSON.stringify("?view=tradegood&type=" + city.getTradeGoodID + "&islandId=" + city.getIslandID) + '));';
                break;
            default:
                break;
        }
        database.options.restoreRes = -1;
        database.options.openBuilding = -1;
        }
    },
    get currentShips() {
        if (this.$freeTransporters == undefined) {
            this.$freeTransporters = $('#js_GlobalMenu_freeTransporters');
        }
        return parseInt(this.$freeTransporters.text())
    }
};

/***********************************************************************************************************************
 * General Util functions //Todo: integrate into Utils
 **********************************************************************************************************************/

function FormatNumToStr(iStr, addSign, precision) {
    precision = (isNaN(precision) ? 1 : precision);
    precision = '10e' + (precision - 1);
    addSign = addSign || false
    var nStr = iStr;
    //SITR.log(nStr);
    var tho = database.getGlobalData.getLocalisedString('thousandSeperator');
    var dec = database.getGlobalData.getLocalisedString('decimalPoint');
    //if ((isNaN(nStr))) nStr = nStr.replace(database.getGlobalData.getLocalisedString('thousandSeperator'), '');
    if (isNaN(nStr)) {
        return iStr;
    }
    if (!(isFinite(nStr))) {
        return '\u221E';
    }
    nStr = Math.floor(nStr * precision) / precision;
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? dec + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + tho + '$2');
    }
    return addSign ? nStr >= 0 ? '+' + x1 + x2 : x1 + x2 : nStr >= 0 ? x1 + x2 : x1.split('-')[1] + x2;
}

function FormatTimeLengthToStr(timeString, precision, spacer) {
    timeString = timeString || 0;
    precision = precision || 2;
    spacer = spacer || " ";
    if (!isFinite(timeString)) {
        return ' \u221E ';
    }
    var factors = [];
    var locStr = [];
    factors.day = 86400;
    factors.hour = 3600;
    factors.minute = 60;
    factors.second = 1;
    locStr.day = database.getGlobalData.getLocalisedString('day');
    locStr.hour = database.getGlobalData.getLocalisedString('hour');
    locStr.minute = database.getGlobalData.getLocalisedString('minute');
    locStr.second = database.getGlobalData.getLocalisedString('second');
    timeString = Math.ceil(timeString / 1000);
    var retString = "";
    for (var fact in factors) {
        var timeInSecs = Math.floor(timeString / factors[fact]);
        if (isNaN(timeInSecs)) {
            return retString;
        }
        if (precision > 0 && (timeInSecs > 0 || retString != "")) {
            timeString = timeString - timeInSecs * factors[fact];
            if (retString != "") {
                retString += spacer;
            }
            retString += timeInSecs + locStr[fact];
            precision--;
        }
    }
    return retString;
}

function FormatFullTimeToDateString(timeString, precise) {
    precise = precise || true;
    timeString = timeString || 0;
    var sInDay = 86400000;
    var day = '';
    var compDate = new Date(timeString);
    if (precise) {
        switch (Math.floor(compDate.getTime() / sInDay) - Math.floor($.now() / sInDay)) {
            case 0  :
                day = database.getGlobalData.getLocalisedString('Today');
                break;
            case 1  :
                day = database.getGlobalData.getLocalisedString('Tomorrow');
                break;
            case -1 :
                day = database.getGlobalData.getLocalisedString('Yesterday');
                break;
            default :
                day = (!isChrome ? compDate.toLocaleFormat('%a %d %b') : compDate.toString().split(' ').splice(0, 5).join(' '))
        }
    }
    if (day != '') {
        day += ', '
    }
    return day + compDate.toLocaleTimeString();
}

SITR.setVar = function (varname, varvalue) {
    GM_setValue(ikariam.Host() + varname, varvalue);
};
SITR.deleteVar = function (varname) {
    GM_deleteValue(ikariam.Host() + varname);
};
SITR.getVar = function (varname, vardefault) {
    var ret = GM_getValue(ikariam.Host() + varname);
    if (ret == undefined) {
        return vardefault;
    }
    return ret;
};


function tradeGoodFromID(id) {
    switch (id) {
        case 1 :
            return 'wine';
            break;
        case 2 :
            return 'marble';
            break;
        case 3 :
            return 'glass';
            break;
        case 4 :
            return 'sulfur';
            break;
        default :
            return 'wood';
            break;
    }
}

/***********************************************************************************************************************
 * Classes
 **********************************************************************************************************************/
    function Movement(id, originCityId, targetCityId, arrivalTime, mission, loadingTime, resources, military, ships) {
        this._id = id || null;
        this._originCityId = originCityId || null;
        this._targetCityId = targetCityId || null;
        this._arrivalTime = arrivalTime || null;
        this._mission = mission || null;
        this._loadingTime = loadingTime || null;
        this._resources = resources || {wood:0, wine:0, marble:0, glass:0, sulfur:0};
        this._military = military || new MilitaryUnits()
        this._ships = ships || null;
        this._updatedCity = false;
        this._complete = false
        this._updateTimer = null;

    }
    Movement.prototype = {
        startUpdateTimer: function() {
            this.clearUpdateTimer();
            if (this.isCompleted) {
                this.updateTransportComplete()
            }
            else{
                this._updateTimer = events.scheduleActionAtTime(this.updateTransportComplete.bind(this),
                                                                this._arrivalTime)
            }
        },
        clearUpdateTimer : function(){
            var ret =  !this._updateTimer || this._updateTimer();
            this._updateTimer = null;
            return ret
        },
        get getId (){return this._id},
        get getOriginCityId (){return this._originCityId},
        get getTargetCityId (){return this._targetCityId},
        get getArrivalTime (){return this._arrivalTime},
        get getMission (){return this._mission},
        get getLoadingTime (){return this._loadingTime - $.now()},
        get getResources (){return this._resources},
        getResource : function(resourceName){return this._resources[resourceName]},
        get getMilitary (){return this._military},
        get getShips (){return this._ships},
        get isCompleted (){return this._arrivalTime < $.now()},
        get isLoading (){return this._loadingTime > $.now()},
        get getRemainingTime (){return this._arrivalTime - $.now()},
        updateTransportComplete:function() {
            if (this.isCompleted && !this._updatedCity) {
                var city = database.getCityFromId(this._targetCityId);
                var changes = [];
                if (city) {
                    for (var resource in Constant.Resources) {
                        if (this.getResource(Constant.Resources[resource])) {
                            changes.push(Constant.Resources[resource])
                        }
                        city.getResource(Constant.Resources[resource]).increment(this.getResource(Constant.Resources[resource]));
                    }
                    city = database.getCityFromId(this.originCityId)
                    if (city){
                        city.updateActionPoints(city.getAvailableActions +1)
                    }
                    //TODO: Military
                    database.getGlobalData.removeFleetMovement(this._id)
                    if (changes.length){
                        events('movementsUpdated').pub([this.getTargetCityId])
                    events('resourcesUpdated').pub(this.getTargetCityId, changes);
                    }
                    return true
                }
            }
            return false;
        }
    }

    function GlobalData(){
        this._version ={
            lastUpdateCheck:0,
            latestVersion:null,
            installedVersion:0
        };
        this._research ={
            topics:{},
            lastUpdate:0
        };
        this.governmentType ='';
        this.fleetMovements= [];
        this.militaryMovements=[];
        this.finance={
            armyCost:0,
            armySupply:0,
            fleetCost:0,
            fleetSupply:0,
            sigmaExpenses:function(){return this.armyCost+this.armySupply+this.fleetCost+this.fleetSupply},
            sigmaIncome: 0,
            lastUpdated:0,
			cash:0
        };
        this.localStrings = {};
    }

    GlobalData.prototype = {
        init :function(){
            $.each(this.fleetMovements,function(key, movement){
                this.fleetMovements[key] = $.mergeValues(new Movement(),movement);
                this.fleetMovements[key]._updateTimer = null;
                this.fleetMovements[key].startUpdateTimer();
            }.bind(this));
        },
        removeFleetMovement : function(id) {
            var index = -1;
            $.each(this.fleetMovements, function (i, movement) {
                if (movement.getId == id) {
                    this.fleetMovements.splice(i,1)
                    return false;
                }
            }.bind(this))
        },
        addFleetMovement:function (transport) {
            try {
                this.fleetMovements.push(transport);
                transport.startUpdateTimer()
                this.fleetMovements.sort(function (a, b) {return a.getArrivalTime - b.getArrivalTime})
                var changes = [];

                $.each(transport.getResources, function(resourceName, value){changes.push(resourceName)})
                //Todo: implement drilled down resource changes
                return changes
            }
            catch (e) {
                SITR.error('addFleetMovement', e);
            }
        },
        getMovementById : function(id){
            for (var i in this.fleetMovements) {
                if (this.fleetMovements[i].getId == id) {
                    return this.fleetMovements[i]
                }
            }
            return false;
        },
        clearFleetMovements :function(){
            var changes = [];
            //console.log(this.fleetMovements)
            $.each(this.fleetMovements,function(index,item){
                changes.push(item.getTargetCityId);
                item.clearUpdateTimer();
            });
            this.fleetMovements.length = 0;
            return $.exclusive(changes)
        },
        getResourceMovementsToCity :function(cityID) {
            return this.fleetMovements.filter(function(el){
                if(el.getTargetCityId == cityID){
                    return (el.getMission == 'trade' || el.getMission == 'transport')
                }
            });
        },
        getMilitaryMovementsForCity:function (cityID) {
            return this.fleetMovements.filter(function(el){
                if(el.getTargetCityId == cityID){
                    return (el.getMission != 'trade' && el.getMission != 'transport')
                }
            });
        },
        getResearchTopicLevel:function (research) {
            return this._research.topics[research] || 0;
        },
        updateResearchTopic:function(topic,level){
            var changed = this.getResearchTopicLevel(topic) != level;
            this._research.topics[topic] = level;
            return changed;
        },
        get getGovernmentType (){return this.governmentType},
        getLocalisedString:function (string) {
            var tString = string;
            var lString;
            //normal building var names "townHall"
            lString = this.localStrings[tString.replace(/([A-Z])/g, "_$1").toLowerCase()];
            //space in name "town Hall"
            if (lString == undefined)
                lString = this.localStrings[tString.toLowerCase().split(' ').join('_')];
            return (lString == undefined) ? tString : lString;
        },
        addLocalisedString:function (string, value) {
            if (this.getLocalisedString(string) == string)
                this.localStrings[string.toLowerCase().split(' ').join('_')] = value;
        },
        isOldVersion:function () {
            return this._version.latestVersion < this._version.installedVersion;

        }
    }

    function Resource(city) {
        this._current = 0;
        this._production = 0;
        this._consumption = 0;
        this._currentChangedDate = 0;
        this.city = Utils.wrapInClosure(city);
        return this
    }

    Resource.prototype = {
        update:function (current, production, consumption) {
            var changed = (current % this._current > 10) || (production != this._production) || (consumption != this._consumption);
            this._current = current;
            this._production = production;
            this._consumption = consumption;
            this._currentChangedDate = $.now();
            return changed;
        },
        increment:function(amount){
            if (amount !== 0)
            {
                this._current += amount;
                return true;
            }
            return false;
        },
        get getEmptyTime() {
            var net = this.getProduction * 3600 - this.getConsumption;
            return (net < 0)? this.getCurrent / net * -1 : Infinity //no consumption == never empty
        },
        get getFullTime() {
            var net = this.getProduction * 3600 - this.getConsumption;
            return (net > 0)?(this.city().maxResourceCapacities.capacity - this.getCurrent) / net : Infinity//no production == never full ?
        },
        get getCurrent() {
            //if (time > 3) {
            //var current = this._current + (($.now() - this._currentChangedDate)/36000*this.getProduction)
            //                            - ((Math.floor($.now()/3600000) - Math.floor(this._currentChangedDate/3600000)) * this._consumption)
            //this._currentChangedDate = now;
            //this._current = current
            //}
            return this._current
                + (($.now() - this._currentChangedDate)/1000*this.getProduction)
                - ((Math.floor($.now()/3600000) - Math.floor(this._currentChangedDate/3600000)) * this._consumption)
        },
        get getProduction() {return this._production || 0}, //per hour
        get getConsumption() {return this._consumption || 0} //per hour
    }

    function Military(city){
        this.city = Utils.wrapInClosure(city);
        this._units = new MilitaryUnits()
        this._advisorLastUpdate = 0;

        //Todo: write army training functions
        this.armyTraining = [];
        this._trainingTimer = null;
    }
    Military.prototype = {
        init :function(){
            this._trainingTimer = null;
            this._startTrainingTimer()
        },
        get getTrainingTotals (){
            var ret = {}
            $.each(this.armyTraining, function(index, training){
                $.each(Constant.Military,function(key, unitId){
                    if (!ret[unitId]) {ret[unitId] = 0}
                    ret[unitId] += training.units[unitId] || 0
                })
            })
            return ret
        },
        getTrainingForUnit :function(unit){
            var ret = []
            $.each(this.armyTraining, function(index, training){
                $.each(training.units, function(unitId, count){
                    if (unitId === unit) {
                        ret.push({count:count,time:training.completionTime})
                    }
                })
            })
            return ret
        },
        setTraining:function(trainingQueue){
            if (!trainingQueue.length) return false;

            this._stopTrainingTimer();

            var type = trainingQueue[0].type
            var changes = this._clearTrainingForType(type);
            $.each(trainingQueue, function(index,training){
                this.armyTraining.push(training);
                $.each(training.units, function(unitId, count){
                    changes.push(unitId)
                })
            }.bind(this))
            this.armyTraining.sort(function(a,b){return a.completionTime - b.completionTime})
            this._startTrainingTimer();
            return $.exclusive(changes)
        },
        _clearTrainingForType:function(type){
            var oldTraining = this.armyTraining.filter(function(item){ return item.type === type});
            this.armyTraining = this.armyTraining.filter(function(item){ return item.type !== type});
            var  changes = [];
            $.each(oldTraining, function(index, training){
                $.each(training.units, function(unitId, count){
                    changes.push(unitId)
                })
            })
            return changes
        },
        _completeTraining :function(){
            if (this.armyTraining.length){
                if (this.armyTraining[0].completionTime < $.now() +5000){
                    var changes = [];
                    var training = this.armyTraining.shift()
                    $.each(training.units, function(id, count){
                        this.getUnits.addUnit(id, count)
                        changes.push(id)
                    }.bind(this))
                    if (changes.length)events('militaryUpdated').pub(this.city().getId,changes)
                }
            }
            this._startTrainingTimer()
        },
        _startTrainingTimer :function(){
            this._stopTrainingTimer()
            if (this.armyTraining.length){
                this._trainingTimer = events.scheduleActionAtTime(this._completeTraining.bind(this),
                                                                  this.armyTraining[0].completionTime)

            }
        },
        _stopTrainingTimer :function(){
            if (this._trainingTimer){
                this._trainingTimer()
            }
            this._trainingTimer = null
        },
        updateUnits:function(counts) {
            var changes = []
            $.each(counts, function (unitId, count) {
                if(this._units.setUnit(unitId, count)){
                    changes.push(unitId)
                }
            }.bind(this))
            return changes;
        },
        get getUnits() {
            return this._units
        },
    }
    function MilitaryUnits() {
        this._units = {}
    }
    MilitaryUnits.prototype = {
        getUnit :function(unitId){return this._units[unitId]||0},
        setUnit :function(unitId, count) {
            var changed = this._units[unitId] != count
            this._units[unitId] = count
            return changed
        },
        get totals() {
            return this._units
        },
        addUnit:function (unitId, count) {
            return this.setUnit(unitId, this.getUnit(unitId)+count)
        },
        removeUnit :function(unitId, count){
            count = Math.max(0, this.getUnit[unitId] - count)
            return this.setUnit(unitId, count)
        },

    }
    function Building(city, pos) {
        this._position = pos;
        this._level = 0;
        this._name =null;
        this.city = Utils.wrapInClosure(city);
        this._updateTimer = null
    };

    Building.prototype = {
        startUpgradeTimer :function () {
            if (this._updateTimer) {
                this._updateTimer()
                delete this._updateTimer
            }
            if (this._completionTime) {
                if (this._completionTime - $.now() < 5000) {
                    this.completeUpgrade()
                }
                else{
                    this._updateTimer = events.scheduleActionAtTime(this.completeUpgrade.bind(this),
                                                                    this._completionTime - 4000)
                }
            }
        },
        update:function (data) {
            var changes;
            var name = data.building.split(' ')[0];
            var level = parseInt(data.level) || 0;
            database.getGlobalData.addLocalisedString(name, data.name) //Todo: snip for translation
            var completion = ('undefined' !== typeof data['completed']) ? parseInt(data['completed']) : 0;
            var changed = (name !== this._name || level !== this._level || !!completion != this.isUpgrading);
            if (changed) {
                changes = {position:this._position, name:this.getName, upgraded:this.isUpgrading != !completion};
            }
            if (completion) {
                this._completionTime = completion * 1000;
                this.startUpgradeTimer()
            }
            else if (this._completionTime) {
                delete this._completionTime
            }
            this._name = name;
            this._level = level;
            if (changed) {
                return changes;
            }
            return false;
        },
        get getHref () {
            return '?'
                + 'view=' + this.getName
                + '&cityId=' + this.city().getId
                + '&position=' + this.getPosition
                + 'backgroundView=city'
            //+'&currentCityId=351633'
        },
        get getUpgradeCost() {
            var carpenter, architect, vineyard, fireworker, optician;
            var level = this._level + this.isUpgrading;
            if (this.isEmpty) {
                return {
                    wood:Infinity,
                    glass:0,
                    marble:0,
                    sulfur:0,
                    wine:0,
                    time:0,
                }
            }
            var time = Constant.BuildingData[this._name].time;
            var bon = 1;
            bon -= database.getGlobalData.getResearchTopicLevel(Constant.Research.Economy.PULLEY) ? .02 : 0;
            bon -= database.getGlobalData.getResearchTopicLevel(Constant.Research.Economy.GEOMETRY) ? .04 : 0;
            bon -= database.getGlobalData.getResearchTopicLevel(Constant.Research.Economy.SPIRIT_LEVEL) ? .08 : 0;
            return{
                wood:(Constant.BuildingData[this._name].wood[level] || 0) * (bon - (carpenter = this.city().getBuildingFromName(Constant.Buildings.CARPENTER), carpenter ? carpenter.getLevel / 100 : 0)),
                glass:(Constant.BuildingData[this._name].glass[level] || 0) * (bon - (optician = this.city().getBuildingFromName(Constant.Buildings.OPTICIAN), optician ? optician.getLevel / 100 : 0)),
                marble:(Constant.BuildingData[this._name].marble[level] || 0) * (bon - (architect = this.city().getBuildingFromName(Constant.Buildings.ARCHITECT), architect ? architect.getLevel / 100 : 0)),
                sulfur:(Constant.BuildingData[this._name].sulfur[level] || 0) * (bon - (fireworker = this.city().getBuildingFromName(Constant.Buildings.FIREWORK_TEST_AREA), fireworker ? fireworker.getLevel / 100 : 0)),
                wine:(Constant.BuildingData[this._name].wine[level] || 0) * (bon - (vineyard = this.city().getBuildingFromName(Constant.Buildings.VINEYARD), vineyard ? vineyard.getLevel / 100 : 0)),
                time:Math.round(time.a / time.b * Math.pow(time.c, level + 1) - time.d) * 1000
            }
        },
        get getName() {return this._name},
        get getType() {return Constant.BuildingData[this.getName].type},
        get getLevel() {return this._level},
        get isEmpty() {return this._name == 'buildingGround' || this._name == null},
        get isUpgrading() {return (this._completionTime > $.now())},
        subtractUpgradeResourcesFromCity :function(){
            var cost = this.getUpgradeCost;
            $.each(Constant.Resources,function(key, resourceName){
                this.city().getResource(resourceName).increment(cost[resourceName]*-1)
            }.bind(this))
            this._completionTime = $.now()+cost.time;
            //this.startUpgradeTimer()

        },
        get isUpgradable(){
            if (this.isEmpty || this.isMaxLevel) {
                return false
            }
            var cost = this.getUpgradeCost;
            var upgradable = true;
            $.each(Constant.Resources,function(key, value){
                upgradable = upgradable && (!cost[value] || cost[value] <= this.city().getResource(value).getCurrent);
            }.bind(this))
            return upgradable;
        },
        get getCompletionTime() {return this._completionTime},
        get getCompletionDate() {},
        get isMaxLevel() {return Constant.BuildingData[this.getName].maxLevel === (this.getLevel + this.isUpgrading)},
        get getPosition() {return this._position},
        completeUpgrade :function() {
            this._level++
            delete this._completionTime
            delete this._updateTimer                                                                               //todo: look at this completed field
            events('buildingsUpdated').pub(this.city().getId,
                                           [
                                               {position:this._position, name:this.getName, upgraded:true}
                                           ]
            )
        },
    }
    function CityResearch(city) {
        this._researchersLastUpdate = 0;
        this._researchers = 0;
        this._researchCostLastUpdate = 0;
        this._researchCost = 0;
        this.city = Utils.wrapInClosure(city);
    }

    CityResearch.prototype = {
        updateResearchers:function (researchers) { //TODO: tidy up
            var changed = this._researchers != researchers;
            this._researchers = researchers;
            this._researchersLastUpdate = $.now()
            this._researchCost = this.getResearchCost
            //if (changed) events('cityData').pub(this.city().id, {research:changed});
            return changed;
        },
        updateCost:function (cost) { //TODO: tidy up
            var changed = this._researchCost != cost;
            this._researchCost = cost;
            this._researchCostLastUpdate = $.now()
            this._researchers = this.getResearchers
            //if (changed) events('cityData').pub(this.city().id, {research:changed});
            return changed;
        },
        get getResearchers() {
            if (this._researchersLastUpdate < this._researchCostLastUpdate)
            {
                return Math.floor(this._researchCost / this._researchCostModifier);
            }
            else {
                return this._researchers
            }
        },
        get getResearch() {
            var research = this.getResearchers * (
                1 +
                    ((database.getGlobalData.getGovernmentType == Constant.Government.TECHNOCRACY) * 0.05)
                    + (database.getGlobalData.getResearchTopicLevel(Constant.Research.Science.PAPER) * 0.02)
                    + (database.getGlobalData.getResearchTopicLevel(Constant.Research.Science.INK) * 0.04)
                    + (database.getGlobalData.getResearchTopicLevel(Constant.Research.Science.MECHANICAL_PEN) * 0.08)
                    + (database.getGlobalData.getResearchTopicLevel(Constant.Research.Science.SCIENTIFIC_FUTURE) * 0.02)
                    - ((database.getGlobalData.getGovernmentType == Constant.Government.THEOCRACY) * 0.05));

            if (database.getGlobalData.getGovernmentType == Constant.Government.DEMOCRACY) {
                research += this.city()._culturalGoods;
            }
            return research;
        },
        get _researchCostModifier() {
            return 6 - ((database.getGlobalData.getGovernmentType == Constant.Government.TECHNOCRACY) * -1) - (database.getGlobalData.getResearchTopicLevel(Constant.Research.Science.LETTER_CHUTE) * 3)
        },
        get getResearchCost() {
			return this.getResearchers * this._researchCostModifier;
            // return this._researchCost;
        }
    }

function Changes(city, type, changes){
    this.city = city || null;
    this.type = type || null;
    this.changes = changes || [];
};

function Population(city){
    this._population = 0;
    this._citizens = 0;
    this._resourceWorkers = 0;
    this._tradeWorkers = 0;
    this._priests = 0;
    this._culturalGoods = 0;

    this._popChanged = $.now()
    this._citizensChanged = $.now()
    this._culturalGoodsChanged = $.now()
    this._priestsChanged = $.now()
    this.city = Utils.wrapInClosure(city)
}
Population.prototype = {
    updatePopulationData : function(population, citizens, priests, culturalGoods){
        var changes = [];
        if (population && population != this._population){
            changes.push({population:true});
            this.population = population;
        }
        if (citizens && citizens != this._priests){
            changes.push({citizens:true})
            this.citizens = citizens;
        }
        if (priests && priests != this._priests){
            changes.push({priests:true})
            this.priests = priests;
        }
    },
    updateWorkerData : function(resourceName, workers){},
    updatePriests : function(newCount){

    },
    updateCulturalGoods :function(newCount){},
    get population (){return this._population},
    set population(newVal){
        this._population = newVal
        this._popChanged = $.now()
    },
    get citizens (){return this._citizens},
    set citizens(newVal){
        this._citizens = newVal
        this._citizensChanged = $.now()
    },
    get priests (){return this._priests},
    set priests(newVal){
        this._priests = newVal
        this._priestsChanged = $.now()
    }
}

    function City(id) {
        this._id = id || 0;
        this._name = '';
        this._resources = {
            wood:new Resource(this),
            wine:new Resource(this),
            marble:new Resource(this),
            glass:new Resource(this),
            sulfur:new Resource(this)
        };
        this._tradeGoodID = 0;
        this.knownTime = $.now();
        this._lastPopUpdate = $.now();
        this._buildings = new Array(18);
        var i = this._buildings.length;
        while (i--) {
            this._buildings[i] = new Building(this, i)
        }
        this._research = new CityResearch(this);
        this.maxCapacity = 0;
        this._actionPoints = 0;
        this._coordinates = {x:0,y:0};
        this._islandID = null;

        this.population = new Population(this)
        //Todo: make population class
        this._population = 0;
        this._citizens = 0;
        this._resourceWorkers = 0;
        this._tradeWorkers = 0;
        this._priests = 0;
        this._culturalGoods = 0;

        this._military = new Military(this);
        //Todo: move this into a military section
        this.army = [];
        this.fleetMovements = {};
        this.militaryMovements = {};
        this.unitBuildList = [];
        //TODO: Finances
        this.goldIncome = 0;
        this.goldExpend = 0;
        events('updateCityData').sub(this.updateCityDataFromAjax.bind(this));
        events('updateBuildingData').sub(this.updateBuildingsDataFromAjax.bind(this));
    }

    City.prototype = {
        init :function(){
            $.each(this._buildings, function(idx, building){building.startUpgradeTimer()})
            this.military.init()
        },
        updateBuildingsDataFromAjax:function (id, position) {
            var changes = [];
            if (id == this.getId && ikariam.viewIsCity) {
                if (position) {
                    $.each(position, function (i, item) {
                        var change = this.getBuildingFromPosition(i).update(item);
                        if (change) changes.push(change);
                    }.bind(this));
                    if (changes.length) events('buildingsUpdated').pub(id, changes)
                }
            }
        },
        updateCityDataFromAjax:function (id, cityData) {
            var resourcesChanged = false;
            var changes = {};
            if (id == this.getId) {
                try {
                    var baseWineConsumption = 0, wineConsumption = 0;
                    if ($.inArray(cityData.wineSpendings, Constant.BuildingData[Constant.Buildings.TAVERN].wineUse) > -1) {
                        baseWineConsumption = cityData.wineSpendings;
                        wineConsumption = (this.getBuildingFromName(Constant.Buildings.VINEYARD)) ? baseWineConsumption * ((100 - this.getBuildingFromName(Constant.Buildings.VINEYARD).getLevel) / 100) : baseWineConsumption;
                    }
                    else{
                        wineConsumption = cityData.wineSpendings
                    }
                    this.updateTradeGoodID(parseInt(cityData.producedTradegood));
                    resourcesChanged = this.updateResource(Constant.Resources.WOOD, cityData.currentResources[Constant.ResourceIDs.WOOD], cityData.resourceProduction, 0) || resourcesChanged;
                    resourcesChanged = this.updateResource(Constant.Resources.WINE, cityData.currentResources[Constant.ResourceIDs.WINE], this.getTradeGoodID == Constant.ResourceIDs.WINE ? cityData.tradegoodProduction : 0, wineConsumption) || resourcesChanged;
                    resourcesChanged = this.updateResource(Constant.Resources.MARBLE, cityData.currentResources[Constant.ResourceIDs.MARBLE], this.getTradeGoodID == Constant.ResourceIDs.MARBLE ? cityData.tradegoodProduction : 0, 0) || resourcesChanged;
                    resourcesChanged = this.updateResource(Constant.Resources.GLASS, cityData.currentResources[Constant.ResourceIDs.GLASS], this.getTradeGoodID == Constant.ResourceIDs.GLASS ? cityData.tradegoodProduction : 0, 0) || resourcesChanged;
                    resourcesChanged = this.updateResource(Constant.Resources.SULFUR, cityData.currentResources[Constant.ResourceIDs.SULFUR], this.getTradeGoodID == Constant.ResourceIDs.SULFUR ? cityData.tradegoodProduction : 0, 0) || resourcesChanged;
                    this.knownTime = $.now();
                    //this.maxCapacity = cityData.maxResources['resource'];
                    if (cityData.maxActionPoints) {
                        changes['actionPoints'] = this.updateActionPoints(cityData.maxActionPoints)
                    } //max available

                    changes['islandId'] = this.updateIslandID(parseInt(cityData.islandId));
                    changes['coordinates'] = this.updateCoordinates(parseInt(cityData.islandXCoord), parseInt(cityData.islandYCoord));
                    if (ikariam.viewIsCity) changes['name'] = this.updateName(cityData.name);
                    if (ikariam.viewIsCity) changes['population'] = this.updatePopulation(cityData.currentResources['population']);
                    changes['citizens'] = this.updateCitizens(cityData.currentResources['citizens']);
                    database.getGlobalData.addLocalisedString('cities', $('#js_GlobalMenu_cities > span').text());
                    database.getGlobalData.addLocalisedString('ActionPoints', $('#js_GlobalMenu_maxActionPoints').attr('title'));
                }
                catch (e) {
                    SITR.error('fetchCurrentCityData', e)
                }
                finally {
                    cityData = null
                }
                events('cityData').pub(this.getId, changes);
                if (resourcesChanged){
                    events('resourcesUpdated').pub(this.getId, resourcesChanged)
                }
            }
        },
        get isCurrentCity() {
            return this.getId == ikariam.CurrentCityId
        },
        getResource:function (name) {
            return this._resources[name]
        },
        updateResource:function (resourceName, current, production, consumption) {
            return this.getResource(resourceName).update(current, production, consumption)
        },
        get getIncome (){return this._citizens*3},
        updateIncome :function(value) {
            if (Math.abs(this._citizens - value/3) > 2) {
                return this.updateCitizens((value / 3))
            }
            return false

        },
        get getExpenses (){return -1 *this._research.getResearchCost},
        updateExpenses :function(value){
            return this._research.updateCost(Math.abs(value))
        },
        get getBuildings() {return this._buildings},
        getBuildingsFromName:function (name) {
            var ret = [];
            var i = this._buildings.length;
            while (i--) {
                if (this._buildings[i].getName == name) ret.push(this._buildings[i])
            }
            return ret
        },
        getBuildingFromName:function (name) {
            var i = this._buildings.length;
            while (i--) {
                if (this._buildings[i].getName == name)
                    return this._buildings[i];
            }
            return null
        },
        getBuildingFromPosition:function (position) {
            return this._buildings[position]
        },
        get getTradeGood() {
            for (var resourceName in Constant.ResourceIDs) {
                if (this._tradeGoodID == Constant.ResourceIDs[resourceName]) {
                    return Constant.Resources[resourceName]
                }
            }
            return null;
        },
        get getTradeGoodID() {return this._tradeGoodID},
        updateTradeGoodID:function (value) {
            var changed = this._tradeGoodID != value;
            if (changed) {
                this._tradeGoodID = value;
            }
            return changed
        },
        updatePriests:function (priests) { //TODO: tidy up
            var changed = this._priests != priests;
            this._priests = priests;
            return changed;
        },
        get getName() {return this._name},
        updateName:function (value) {
            var changed = this._name != value;
            if (changed) {
                this._name = value;
            }
            return changed
        },
        get getId() {return this._id},
        get research(){return this._research},
        updateResearchers:function (value) {
            return this._research.updateResearchers(value)
        },
        updateResearchCost:function (value) {
            return this._research.updateCost(value)
        },
        get storageCapacity() {return null},
        get getAvailableActions() {return this._actionPoints},
        updateActionPoints:function (value) {
            var changed = this._actionPoints != value;
            if (changed) {
                this._actionPoints = value;
            }
            return changed
        },
        get getCoordinates() {return (this._coordinates ? [this._coordinates.x, this._coordinates.y] : null)},
        updateCoordinates:function (x, y) {
            this._coordinates = {x:x, y:y};
            return false;
        },
        get getIslandID() {return this._islandID},
        updateIslandID:function (id) {
            this._islandID = id;
            return false;
        },
        get getCulturalGoods() {return this._culturalGoods},
        updateCulturalGoods:function (value) {
            var changed = this._culturalGoods != value;
            //if (changed) {     //Todo :remove in next version, quick fix for bad type on goods
                this._culturalGoods = value;
            //}
            return changed
        },
        get getIncomingResources (){
            return database.getGlobalData.getResourceMovementsToCity(this.getId)
        },
        get _getMaxPopulation() {
            var mPop = 0;
            if (this.getBuildingFromName(Constant.Buildings.TOWN_HALL)) {
                mPop = Math.floor((10 * Math.pow(this.getBuildingFromName(Constant.Buildings.TOWN_HALL).getLevel, 1.5))) * 2 + 40;
            }
            // Government bonus
            if (database.getGlobalData.getResearchTopicLevel(Constant.Research.Science.WELL_CONSTRUCTION) && this.getBuildingFromName(Constant.Buildings.PALACE)) {
                mPop += 50;
            }
            if (database.getGlobalData.getResearchTopicLevel(Constant.Research.Economy.UTOPIA) && this.getBuildingFromName(Constant.Buildings.PALACE)) {
                mPop += 200
            }
            if (database.getGlobalData.getResearchTopicLevel(Constant.Research.Economy.HOLIDAY)) {
                mPop += 50;
            }
            mPop += database.getGlobalData.getResearchTopicLevel(Constant.Research.Economy.ECONOMIC_FUTURE) * 20;
            return mPop;
        },
        get military (){return this._military},
        get getAvailableBuildings() {
            var i = 16 + database.getGlobalData.getResearchTopicLevel(Constant.Research.Economy.BUREACRACY) + database.getGlobalData.getResearchTopicLevel(Constant.Research.Seafaring.PIRACY);
            $.each(this.getBuildings, function (idx, building) {i -= !building.isEmpty}); //dec per populated spot
            return i
        },
		get isUpgrading() {
            var res = false;
            $.each(this.getBuildings, function (idx, building) {
				res = res || building.isUpgrading;
			});
            return res
        },
        get maxResourceCapacities() {
            var ret = {}
            ret[Constant.Buildings.DUMP] = {storage:0, safe:0}
            ret[Constant.Buildings.WAREHOUSE] = {storage:0, safe:0}
            ret[Constant.Buildings.TOWN_HALL] = {storage:1500, safe:100}
            $.each(this.getBuildingsFromName(Constant.Buildings.WAREHOUSE), function (i, building) {
                ret[Constant.Buildings.WAREHOUSE].storage += building.getLevel * 8000;
                ret[Constant.Buildings.WAREHOUSE].safe += building.getLevel * 480;
            });
            $.each(this.getBuildingsFromName(Constant.Buildings.DUMP),
                   function (i, building) {ret[Constant.Buildings.DUMP].storage += building.getLevel * 32000});

            //TODO: Premium storage safety;
            return {
                get capacity() {
                    var capacity = 0;
                    for (var key in this.buildings) {
                        capacity += this.buildings[key].storage;

                    }
                    return capacity
                },
                get safe() {
                    var safe = 0;
                    for (var key in this.buildings) {
                        safe += this.buildings[key].safe;
                    }
                    return safe
                },
                buildings:ret,
            };
        },
        get _getSatisfactionData() {
            var r = {
                base:196,
                museum:{
                    culturalGoods:0,
                    level:0
                },
                government:0,
                tavern:{
                    wineConsumption:0,
                    level:0
                },
                research:0,
                priests:0,
                total:0
            };
            if (this.getBuildingFromName(Constant.Buildings.MUSEUM)) {
                r.museum.culturalGoods = this.getCulturalGoods * 50;
                r.museum.level = this.getBuildingFromName(Constant.Buildings.MUSEUM).getLevel * 20;
            }
            r.government = database.getGlobalData.getGovernmentType == Constant.Government.DEMOCRACY ? 75 : database.getGlobalData.getGovernmentType == Constant.Government.DICTATORSHIP ? -75 : (database.getGlobalData.getGovernmentType == Constant.Government.THEOCRACY && this.getBuildingFromName(Constant.Buildings.TEMPLE) == undefined) ? -20 : 0;
            if (this.getBuildingFromName(Constant.Buildings.TAVERN)) {
                r.tavern.level = this.getBuildingFromName(Constant.Buildings.TAVERN).getLevel * 12;
                var consumption = Math.floor(
					this.getResource(Constant.Resources.WINE).getConsumption * 100 
					/ ( 100 - (this.getBuildingFromName(Constant.Buildings.VINEYARD)?this.getBuildingFromName(Constant.Buildings.VINEYARD).getLevel:0))
				);
				for (var i = 0; i < Constant.BuildingData[Constant.Buildings.TAVERN].wineUse.length; i++) {
                    if (Constant.BuildingData[Constant.Buildings.TAVERN].wineUse[i] == consumption) {
                        r.tavern.wineConsumption = 60 * i;
                        break
                    }
                }
            }
            r.research = (25 * database.getGlobalData.getResearchTopicLevel(2080))
                + (database.getGlobalData.getResearchTopicLevel(2999) * 10)
                + (this.getBuildingFromName(Constant.Buildings.PALACE) ? 50 * database.getGlobalData.getResearchTopicLevel(3010) : 0)
                + (this.getBuildingFromName(Constant.Buildings.PALACE) ? 200 * database.getGlobalData.getResearchTopicLevel(2120) : 0);

            if (database.getGlobalData.getGovernmentType == Constant.Government.THEOCRACY) {
                if (this._priests) {
                    r.priests = ((this._priests * 5) / this._getMaxPopulation * 10000) / 50;
                    r.priests = (r.priests <= 150 ? r.priests : 150);
                }
            }
            r.base = 196;
            var total = 0;
            for (var n in r) {
                if (typeof r[n] === 'object') {
                    for (var o in r[n]) {
                        total += r[n][o];
                    }
                }
                else{
                    total += r[n];
                }
            }
			
            r.total = total;
            return r
        },
        updatePopulation :function(population){
            var changed = this._population != population;
            this._population = population;
            this._lastPopUpdate = $.now()
            return changed;
        },
        updateCitizens :function(citizens){
            var changed = this._citizens != citizens;
            this._citizens = citizens
            this._lastPopUpdate = $.now()
            return changed;
        },
        get populationData () {
            var corruption = 0;
            var plus = this._getSatisfactionData;
            var maxPopulation = this._getMaxPopulation;
            var govLevel = this.getBuildingFromName(Constant.Buildings.GOVERNORS_RESIDENCE) ? this.getBuildingFromName(Constant.Buildings.GOVERNORS_RESIDENCE).getLevel : this.getBuildingFromName(Constant.Buildings.PALACE) != undefined ? this.getBuildingFromName(Constant.Buildings.PALACE).getLevel : 0;
            corruption += (1 - (govLevel + 1) / (Object.keys(database.cities).length)) + ((database.getGlobalData.getGovernmentType == Constant.Government.ARISTOCRACY || database.getGlobalData.getGovernmentType == Constant.Government.OLIGARCHY) ? 0.03 : database.getGlobalData.getGovernmentType == Constant.Government.ANARCHY ? 0.25 : 0);
            corruption = (corruption < 0) ? 0 : corruption;
            var happiness = (1 - corruption) * plus.total - this._population;
         	var hours = (($.now() - this._lastPopUpdate) / 3600000);
            var pop = this._population + happiness * (1 - Math.pow(Math.E, -(hours / 50)));
            pop = (pop > maxPopulation) ? maxPopulation : pop;
            happiness = (1 - corruption) * plus.total - pop;
            this.updateCitizens(this._citizens + pop-this._population)
            this.updatePopulation(pop)
            return {currentPop:pop, maxPop:maxPopulation, satisfaction:plus, happiness:happiness, growth:happiness * 0.02}
        },
        processUnitBuildList:function () {
            var newList = [];
            for (var i = 0; i < this.unitBuildList.length; i++) {
                var list = this.unitBuildList[i];
                if (list.completionTime <= $.now()) {
                    for (var uID in list.units) {
                        var j = this.army.length;
                    }
                    while (j) {
                        j--;
                        if (uID == this.army[j].id) {
                            this.army[uID] += list.units[uID]
                        }
                    }
                }
                else {
                    newList.push(list);
                }
            }
            this.unitBuildList = newList;
        },
        clearUnitBuildList:function (type) {
            if (type) {
                var newList = [];
                for (var i = 0; i < this.unitBuildList.length; i++) {
                    if (this.unitBuildList[i].type != type) {
                        newList.push(this.unitBuildList[i]);
                    }
                }
            }
            this.unitBuildList = newList;
        },
        getUnitBuildsByUnit:function () {
            var ret = {};
            for (var i = 0; i < this.unitBuildList.length; i++) {
                for (var uID in this.unitBuildList[i].units) {
                    ret[uID] = ret[uID] || [];
                    ret[uID].push({
                                      count:this.unitBuildList[i].units[uID],
                                      completionTime:this.unitBuildList[i].completionTime})
                }
            }
            return ret;
        },
        getUnitTransportsByUnit:function () {
            var ret = {};
            var data = database.getGlobalData.militaryMovements[this.getId];
            if (data) {
                for (var row in data) {
                    for (var uID in data[row].troops) {
                        ret[uID] = ret[uID] || [];
                        ret[uID].push({
                                          count:data[row].troops[uID],
                                          arrivalTime:data[row].arrivalTime,
                                          origin:data[row].originCityId})
                    }
                }
            }
            return ret;
        }
    }

/***********************************************************************************************************************
 * Constants
 **********************************************************************************************************************/
var Constant = {
    Events : {

        },
    Resources:{
        WOOD:'wood',
        WINE:'wine',
        MARBLE:'marble',
        GLASS:'glass',
        SULFUR:'sulfur'
    },
    ResourceIDs:{
        WOOD:'resource',
        WINE:1,
        MARBLE:2,
        GLASS:3,
        SULFUR:4
    },
    Research:{
        Seafaring:{
            CARPENTRY:2150,
            DECK_WEAPONS:1010,
            PIRACY: 1170,
            SHIP_MAINTENANCE:1020,
            DRAFT:1130,
            EXPANSION:1030,
            FOREIGN_CULTURES:1040,
            PITCH:1050,
            MARKET:2070,
            GREEK_FIRE:1060,
            COUNTERWEIGHT:1070,
            DIPLOMACY:1080,
            SEA_MAPS:1090,
            PADDLE_WHEEL_ENGINE:1100,
            CAULKING:1140,
            MORTAR_ATTACHMENT:1110,
            MASSIVE_RAM:1150,
            OFFSHORE_BASE:1160,
            SEAFARING_FUTURE:1999
        },
        Economy:{
            CONSERVATION:2010,
            PULLEY:2020,
            WEALTH:2030,
            WINE_CULTURE:2040,
            IMPROVED_RESOURCE_GATHERING:2130,
            GEOMETRY:2060,
            ARCHITECTURE:1120,
            HOLIDAY:2080,
            LEGISLATION:2170,
            CULINARY_SPECIALITIES:2050,
            HELPING_HANDS:2090,
            SPIRIT_LEVEL:2100,
            WINE_PRESS:2140,
            DEPOT:2160,
            BUREACRACY:2110,
            UTOPIA:2120,
            ECONOMIC_FUTURE:2999
        },
        Science:{
            WELL_CONSTRUCTION:3010,
            PAPER:3020,
            ESPIONAGE:3030,
            POLYTHEISM:3040,
            INK:3050,
            GOVERNMENT_FORMATION:3150,
            INVENTION:3140,
            CULTURAL_EXCHANGE:3060,
            ANATOMY:3070,
            OPTICS:3080,
            EXPERIMENTS:3081,
            MECHANICAL_PEN:3090,
            BIRDS_FLIGHT:3100,
            LETTER_CHUTE:3110,
            STATE_RELIGION:3160,
            PRESSURE_CHAMBER:3120,
            ARCHIMEDEAN_PRINCIPLE:3130,
            SCIENTIFIC_FUTURE:3999
        },
        Military:{
            DRY_DOCKS:4010,
            MAPS:4020,
            PROFESSIONAL_ARMY:4030,
            SEIGE:4040,
            CODE_OF_HONOR:4050,
            BALLISTICS:4060,
            LAW_OF_THE_LEVEL:4070,
            GOVERNOR:4080,
            PYROTECHNICS:4130,
            LOGISTICS:4090,
            GUNPOWDER:4100,
            ROBOTICS:4110,
            CANNON_CASTING:4120,
            MILITARISTIC_FUTURE:4999
        }
    },
    Military: {
        // Army
        HOPLITE: 'phalanx',
        STEAM_GIANT: 'steamgiant',
        SPEARMAN: 'spearman',
        SWORDSMAN: 'swordsman',
        SLINGER: 'slinger',
        ARCHER: 'archer',
        MARKSMAN: 'marksman',
        RAM: 'ram',
        CATAPULT: 'catapult',
        MORTAR: 'mortar',
        GYROCOPTER: 'gyrocopter',
        BALLOON_BOMBADIER: 'bombardier',
        COOK: 'cook',
        DOCTOR: 'medic',
        ARMY: 'army',

        // Navy
        RAM_SHIP: 'ship_ram',
        FLAME_THROWER: 'ship_flamethrower',
        STEAM_RAM: 'ship_steamboat',
        BALLISTA_SHIP: 'ship_ballista',
        CATAPULT_SHIP: 'ship_catapult',
        MORTAR_SHIP: 'ship_mortar',
        SUBMARINE: 'ship_submarine',
        PADDLE_SPEEDBOAT: 'ship_paddlespeedship',
        BALLOON_CARRIER: 'ship_ballooncarrier',
        TENDER: 'ship_tender',
        ROCKET_SHIP: 'ship_rocketship',
        NAVY: 'navy'
    },
    unitIds: {
        301: 'slinger',
        302: 'swordsman',
        303: 'phalanx',
        304: 'marksman',
        305: 'mortar',
        306: 'catapult',
        307: 'ram',
        308: 'steamgiant',
        309: 'bombardier',
        310: 'cook',
        311: 'medic',
        312: 'gyrocopter',
        313: 'archer',
        315: 'spearman',
        316: 'barbarian',
        210: 'ship_ram',
        211: 'ship_flamethrower',
        212: 'ship_submarine',
        213: 'ship_ballista',
        214: 'ship_catapult',
        215: 'ship_mortar',
        216: 'ship_steamboat',
        217: 'ship_rocketship',
        218: 'ship_paddlespeedship',
        219: 'ship_ballooncarrier',
        220: 'ship_tender',
    },
    UnitData: {
        slinger:{id:301, type:'army', position:'army_ranged', minlevel:2, baseTime:90},
        swordsman:{id:302, type:'army', position:'army_flank', minlevel:6, baseTime:180},
        phalanx:{id:303, type:'army', position:'army_front_line', minlevel:4, baseTime:300},
        marksman:{id:304, type:'army', position:'army_ranged', minlevel:13, baseTime:600},
        mortar:{id:305, type:'army', position:'army_seige', minlevel:14, baseTime:2400},
        catapult:{id:306, type:'army', position:'army_seige', minlevel:8, baseTime:1800},
        ram:{id:307, type:'army', position:'army_seige', minlevel:2, baseTime:600},
        steamgiant:{id:308, type:'army', position:'army_front_line', minlevel:12, baseTime:900},
        bombardier:{id:309, type:'army', position:'army_air', minlevel:11, baseTime:1800},
        cook:{id:310, type:'army', position:'army_support', minlevel:5, baseTime:1200},
        medic:{id:311, type:'army', position:'army_support', minlevel:9, baseTime:1200},
        gyrocopter:{id:312, type:'army', position:'army_air', minlevel:10, baseTime:900},
        archer:{id:313, type:'army', position:'army_ranged', minlevel:7, baseTime:240},
        spearman:{id:315, type:'army', position:'army_flank', minLevel:1, baseTime:60},
        ship_ram:{id:210, type:'fleet', position:'navy_flank', minlevel:1, baseTime:2400},
        ship_flamethrower:{id:211, type:'fleet', position:'navy_front_line', minlevel:4, baseTime:1800},
        ship_submarine:{id:212, type:'fleet', position:'navy_seige', minlevel:19, baseTime:3600},
        ship_ballista:{id:213, type:'fleet', position:'navy_ranged', minlevel:3, baseTime:3000},
        ship_catapult:{id:214, type:'fleet', position:'navy_ranged', minlevel:3, baseTime:3000},
        ship_mortar:{id:215, type:'fleet', position:'navy_ranged', minlevel:17, baseTime:3000},
        ship_steamboat:{id:216, type:'fleet', position:'navy_front_line', minlevel:15, baseTime:2400},
        ship_rocketship:{id:217, type:'fleet', position:'navy_seige', minlevel:11, baseTime:3600},
        ship_paddlespeedship:{id:218, type:'fleet', position:'navy_air', minlevel:13, baseTime:1800},
        ship_ballooncarrier:{id:219, type:'fleet', position:'navy_air', minlevel:7, baseTime:3900},
        ship_tender:{id:220, type:'fleet', position:'navy_support', minlevel:9, baseTime:2400},
    },
    Government:{
        ANARCHY:'anarchie',
        IKACRACY:'ikakratie',
        ARISTOCRACY:'aristokratie',
        DICTATORSHIP:'diktatur',
        DEMOCRACY:'demokratie',
        NOMOCRACY:'nomokratie',
        OLIGARCHY:'oligarchie',
        TECHNOCRACY:'technokratie',
        THEOCRACY:'theokratie'
    },
    Buildings:{
        TOWN_HALL:'townHall',
        PALACE:'palace',
        GOVERNORS_RESIDENCE:'palaceColony',
        TAVERN:'tavern',
        MUSEUM:'museum',
        ACADEMY:'academy',
        WORKSHOP:'workshop',
        TEMPLE:'temple',
        EMBASSY:'embassy',
        WAREHOUSE:'warehouse',
        DUMP:'dump',
        TRADING_PORT:'port',
        TRADING_POST:'branchOffice',
        WALL:'wall',
        HIDEOUT:'safehouse',
        BARRACKS:'barracks',
        SHIPYARD:'shipyard',
        FORESTER:'forester',
        CARPENTER:'carpentering',
        WINERY:'winegrower',
        VINEYARD:'vineyard',
        STONEMASON:'stonemason',
        ARCHITECT:'architect',
        GLASSBLOWER:'glassblowing',
        OPTICIAN:'optician',
        ALCHEMISTS_TOWER:'alchemist',
        FIREWORK_TEST_AREA:'fireworker',
        PIRATE_FORTRESS:'pirateFortress'
    },
    BuildingData:{
        academy:{
			buildingId:4,
            maxLevel:32,
            wood:[64, 68, 115, 263, 382, 626, 982, 1330, 2004, 2665, 3916, 5156, 7446, 9753, 12751, 18163, 23691, 33451, 43571, 56729, 73832, 103459, 144203, 175058, 243930, 317208, 439967, 536310, 743789, 1027469, 1257244, 1736681],
            glass:[0, 0, 0, 0, 225, 428, 744, 1089, 1748, 2454, 3786, 5216, 7862, 10729, 14599, 21627, 29321, 43020, 58213, 78724, 106414, 154857, 224146, 282571, 408877, 552141, 795252, 1006647, 1449741, 2079650, 2642546, 3790581],
            marble:0,
            sulfur:0,
            wine:0,
            time:{a:1440, b:1, c:1.2, d:720},
            icon:'skin/img/city/academy_l.png',
            maxScientists:[0, 8, 12, 16, 22, 28, 35, 43, 51, 60, 69, 79, 89, 100, 111, 122, 134, 146, 159, 172, 185, 198, 212, 227, 241, 256, 271, 287, 302, 318, 335, 351, 368 ]
        },
        alchemist:{
			buildingId:22,
            maxLevel:32,
            wood:[274, 467, 718, 1045, 1469, 2021, 2738, 3671, 4883, 6459, 8508, 11172, 14634, 19135, 24987, 32594, 42483, 55339, 72050, 93778, 122021, 158740, 206471, 268524, 349194, 454063, 590393, 767620, 998018, 1297535, 1686906, 2193088],
            glass:0,
            marble:[0, 116, 255, 436, 671, 977, 1375, 1892, 2564, 3437, 4572, 6049, 7968, 10462, 13705, 17921, 23402, 30527, 39790, 51830, 67485, 87835, 114289, 148680, 193389, 251512, 327069, 425294, 552986, 718987, 934789, 1215329],
            sulfur:0,
            wine:0,
            time:{a:72000, b:11, c:1.1, d:6120},
            icon:'skin/img/city/alchemist_l.png'
        },
        architect:{
			buildingId:24,
            maxLevel:32,
            wood:[185, 291, 413, 555, 720, 911, 1133, 1390, 1689, 2035, 2437, 2902, 3443, 4070, 4797, 5640, 6618, 7754, 9070, 10598, 12369, 14424, 16807, 19573, 22780, 26501, 30817, 35826, 41631, 48371, 56185, 65251],
            glass:0,
            marble:[106, 160, 222, 295, 379, 475, 587, 716, 865, 1036, 1233, 1460, 1722, 2023, 2369, 2767, 3226, 3752, 4358, 5056, 5857, 6778, 7836, 9052, 10448, 12054, 13899, 16289, 18450, 21246, 24455, 28141],
            sulfur:0,
            wine:0,
            time:{a:125660, b:37, c:1.06, d:2628},
            icon:'skin/img/city/architect_l.png'
        },
        barracks:{
			buildingId:6,
            maxLevel:49,
            wood:[48, 114, 195, 296, 420, 574, 766, 1003, 1297, 1662, 2115, 2676, 3371, 4234, 5304, 6630, 8275, 10314, 12843, 15979, 19868, 24690, 30669, 38083, 47277, 58676, 72812, 90341, 112076, 139028, 172448, 213889, 265276, 328996, 408008, 505984],
            glass:0,
            marble:[0, 0, 0, 0, 0, 0, 0, 0, 178, 431, 745, 1134, 1616, 2214, 2956, 3875, 5015, 6429, 8183, 10357, 13052, 16395, 20540, 25680, 32054, 39957, 49757, 61909, 76977, 95661, 118830, 147560, 183185, 227359, 282136, 350059],
            sulfur:0,
            wine:0,
            time:{a:25200, b:11, c:1.1, d:1728},
            icon:'skin/img/city/barracks_l.png'
        },
        branchOffice:{
			buildingId:13,
            maxLevel:32,
            wood:[48, 173, 346, 581, 896, 1314, 1863, 2580, 3509, 4706, 6241, 8203, 10699, 13866, 17872, 22926, 29286, 37272, 47283, 59806, 75447, 94954, 119245, 149453, 186977, 233530, 291225, 362658, 451015, 560208, 695038, 861391],
            glass:0,
            marble:[0, 0, 0, 0, 540, 792, 1123, 1555, 2115, 2837, 3762, 4945, 6450, 8359, 10774, 13820, 17654, 22469, 28503, 36051, 45482, 57240, 71883, 90092, 112712, 121067, 175556, 218617, 271878, 337705, 418983, 446564],
            sulfur:0,
            wine:0,
            time:{a:108000, b:11, c:1.1, d:9360},
            icon:'skin/img/city/branchoffice_l.png'
        },
        carpentering:{
			buildingId:23,
            maxLevel:32,
            wood:[63, 122, 191, 274, 372, 486, 620, 777, 962, 1178, 1432, 1730, 2078, 2486, 2964, 3524, 4178, 4945, 5841, 6890, 8117, 9550, 11229, 13190, 15484, 18166, 21299, 24963, 29245, 34247, 40096, 46930],
            glass:0,
            marble:[0, 0, 0, 0, 0, 0, 0, 359, 444, 546, 669, 816, 993, 1205, 1459, 1765, 2131, 2571, 3097, 3731, 4490, 5402, 6496, 7809, 9383, 11274, 13543, 16265, 19531, 23450, 28154, 33798],
            sulfur:0,
            wine:0,
            time:{a:125660, b:37, c:1.06, d:2808},
            icon:'skin/img/city/carpentering_l.png'
        },
        dump:{
			buildingId:29,
            maxLevel:40,
            wood:[640, 1152, 1766, 2504, 3388, 4450, 5724, 7253, 9088, 11289, 13931, 17101, 20905, 25470, 30948, 37522, 45410, 54876, 66236, 79867, 96223, 115852, 139407, 167672, 201592, 242293, 291136, 349749, 420081, 504483, 605763, 727300, 873143, 1048157, 1258171, 1510191, 1812613, 2175519, 2611007, 3133592],
            glass:[701, 1146, 1668, 2278, 2991, 3526, 4803, 5946, 7283, 8847, 10678, 12819, 15324, 18257, 21687, 25700, 30395, 35889, 42316, 49837, 58635, 68929, 80973, 95065, 111553, 130843, 153414, 179821, 201716, 246864, 289157, 338642, 396536, 464274, 543528, 636253, 744742, 871676, 1020187, 1193945],
            marble:[497, 932, 1445, 2051, 2762, 3609, 4604, 5778, 7164, 8799, 10728, 13005, 15691, 18862, 22602, 27016, 32225, 38371, 45623, 54181, 64278, 76194, 90256, 106847, 126424, 149528, 176787, 208956, 246913, 291702, 344555, 406921, 480512, 567350, 669817, 790730, 933408, 1101767, 1300431, 1534855],
            sulfur:[384, 845, 1398, 2061, 2858, 3813, 4960, 6336, 7987, 9968, 12346, 15199, 18623, 22731, 27661, 33578, 40677, 49197, 59420, 71688, 86409, 104076, 125274, 150714, 181241, 217872, 261830, 314581, 377881, 453842, 544994, 654378, 785637, 943149, 1132163, 1358979, 1631159, 1957774, 2349714, 2820041],
            wine:0,
            time:{a:32000, b:13, c:1.17, d:2160},
            icon:'skin/img/city/dump_l.png'
        },
        embassy:{
			buildingId:12,
            maxLevel:32,
            wood:[242, 415, 623, 873, 1173, 1532, 1964, 2482, 3103, 3849, 4743, 5817, 7105, 8651, 10507, 12733, 15610, 18498, 22457, 27074, 32290, 33764, 47240, 56812, 70157, 84318, 101310, 121979, 146503, 175932, 222202, 266778],
            glass:0,
            marble:[155, 342, 571, 850, 1190, 1606, 2112, 2730, 3484, 4404, 5527, 6896, 8566, 10604, 13090, 16123, 19824, 24339, 29846, 36564, 45216, 47097, 66967, 81859, 104537, 129580, 158759, 193849, 236659, 288888, 358869, 437985 ],
            sulfur:0,
            wine:0,
            time:{a:96000, b:7, c:1.05, d:10080},
            icon:'skin/img/city/embassy_l.png'
        },
        fireworker:{
			buildingId:27,
            maxLevel:32,
            wood:[272, 353, 445, 551, 673, 813, 974, 1159, 1373, 1618, 1899, 2223, 2596, 3025, 3517, 4084, 4736, 5485, 6346, 7338, 8478, 9790, 11297, 13030, 14990, 17317, 19954, 22986, 26472, 30484, 35096, 40398],
            glass:0,
            marble:[135, 212, 302, 405, 526, 665, 827, 1015, 1233, 1486, 1779, 2120, 2514, 2972, 3503, 4119, 4834, 5662, 6623, 7738, 9032, 10534, 12275, 13355, 16636, 19354, 22507, 26163, 30404, 35325, 41033, 47652],
            sulfur:0,
            wine:0,
            time:{a:125660, b:37, c:1.06, d:2628},
            icon:'skin/img/city/fireworker_l.png'
        },
        forester:{
			buildingId:18,
            maxLevel:32,
            wood:[250, 430, 664, 968, 1364, 1878, 2546, 3415, 4544, 6013, 7922, 10403, 13629, 17823, 23274, 30362, 39574, 51552, 67123, 87363, 113680, 147889, 192360, 250173, 325258, 423034, 550049, 715169, 929826, 1208878, 1571646, 2043246],
            glass:0,
            marble:[0, 104, 237, 410, 635, 928, 1309, 1803, 2446, 3282, 4368, 5781, 7617, 10422, 13108, 17142, 22386, 29204, 38068, 49589, 64569, 84041, 109356, 142266, 185046, 240663, 312965, 406956, 529144, 687989, 894489, 1162937],
            sulfur:0,
            wine:0,
            time:{a:72000, b:11, c:1.1, d:6120},
            icon:'skin/img/city/forester_l.png'
        },
        glassblowing:{
			buildingId:20,
            maxLevel:32,
            wood:[274, 467, 718, 1045, 1469, 2021, 2738, 3671, 4883, 6459, 8508, 11172, 14634, 19135, 24987, 32594, 42483, 55339, 72050, 93778, 122021, 158740, 206471, 268524, 349194, 454063, 590393, 767620, 998018, 1297535, 1686906, 2193088],
            glass:0,
            marble:[0, 116, 255, 436, 671, 977, 1375, 1892, 2564, 3437, 4572, 6049, 7968, 10462, 13705, 17921, 23402, 30527, 39790, 51830, 67485, 87835, 114289, 148680, 193389, 251512, 327069, 425294, 552986, 718987, 934789, 1215329],
            sulfur:0,
            wine:0,
            time:{a:72000, b:11, c:1.1, d:6120},
            icon:'skin/img/city/glassblowing_l.png'
        },
        museum:{
			buildingId:10,
            maxLevel:21,
            wood:[560, 1435, 2748, 4716, 7669, 12099, 18744, 28710, 43661, 66086, 99724, 150181, 225866, 339394, 509686, 765124, 1148280, 1723016, 2585120, 3878276],
            glass:0,
            marble:[280, 1190, 2573, 4676, 7871, 12729, 20112, 31335, 48394, 74323, 113736, 173643, 264701, 403110, 613492, 933272, 1419338, 2158157, 3281164, 4988135],
            sulfur:0,
            wine:0,
            time:{a:18000, b:1, c:1.1, d:14040},
            icon:'skin/img/city/museum_r.png'
        },
        optician:{
			buildingId:25,
            maxLevel:32,
            wood:[119, 188, 269, 362, 471, 597, 742, 912, 1108, 1335, 1600, 1906, 2261, 2673, 3152, 3706, 4348, 5096, 5962, 6966, 8131, 9482, 11050, 12868, 14978, 17424, 20262, 23553, 27373, 31804, 36943, 42904],
            glass:0,
            marble:[0, 35, 96, 167, 249, 345, 455, 584, 733, 905, 1106, 1338, 1608, 1921, 2283, 2704, 3191, 3759, 4416, 5178, 6062, 7087, 8276, 9656, 11257, 13113, 15267, 17762, 20662, 24024, 27922, 32447],
            sulfur:0,
            wine:0,
            time:{a:125660, b:37, c:1.06, d:2772},
            icon:'skin/img/city/optician_l.png'
        },
        palace:{
			buildingId:11,
            maxLevel:11,
            wood:[712, 5823, 16048, 36496, 77392, 159184, 322768, 649936, 1304272, 2612944, 4743517],
            glass:[0, 0, 0, 0, 21188, 42400, 84824, 169672, 339368, 678760, 1357543],
            marble:[0, 1433, 4546, 10770, 23218, 48114, 97906, 197490, 396658, 794994, 1591666],
            sulfur:[0, 0, 3088, 10300, 24725, 53573, 111269, 226661, 457445, 919013, 1842149],
            wine:[0, 0, 0, 10898, 22110, 44534, 89382, 179078, 358470, 717254, 1434821],
            time:{a:11520, b:1, c:1.4, d:0},
            icon:'skin/img/city/palace_l.png'
        },
        palaceColony:{
			buildingId:17,
            maxLevel:11,
            wood:[712, 5823, 16048, 36496, 77392, 159184, 322768, 649936, 1304272, 2612944, 4743517],
            glass:[0, 0, 0, 0, 21188, 42400, 84824, 169672, 339368, 678760, 1357543],
            marble:[0, 1433, 4546, 10770, 23218, 48114, 97906, 197490, 396658, 794994, 1591666],
            sulfur:[0, 0, 3088, 10300, 24725, 53573, 111269, 226661, 457445, 919013, 1842149],
            wine:[0, 0, 0, 10898, 22110, 44534, 89382, 179078, 358470, 717254, 1434821],
            time:{a:11520, b:1, c:1.4, d:0},
            icon:'skin/img/city/palaceColony_l.png'
        },
        port:{
			buildingId:3,
            maxLevel:47,
            wood:[60, 150, 274, 429, 637, 894, 1207, 1645, 2106, 2735, 3537, 4492, 5689, 7103, 8850, 11094, 13731, 17062, 21097, 25965, 31810, 39190, 47998, 58713, 71955, 87627, 107102, 130776, 159019, 193938, 235849, 286514, 348718, 423990, 513947, 625160, 758178, 919693, 1116013, 1353517, 1642274, 1990223, 2411061],
            glass:0,
            marble:[0, 0, 0, 0, 0, 176, 326, 540, 791, 1138, 1598, 2176, 2928, 3859, 5051, 6628, 8566, 11089, 14265, 18241, 23197, 29642, 37636, 47703, 60556, 76367, 96639, 122156, 153753, 194089, 244300, 307174, 386955, 486969, 610992, 769302, 965792, 1212790, 1523570, 1913072, 2403313, 3015688, 3782992],
            sulfur:0,
            wine:0,
            time:{a:50400, b:23, c:1.15, d:1512},
            loadingSpeed:[10, 30, 60, 93, 129, 169, 213, 261, 315, 373, 437, 508, 586, 672, 766, 869, 983, 1108, 1246, 1398, 1565, 1748, 1950, 2172, 2416, 2685, 2980, 3305, 3663, 4056, 4489, 4965, 5488, 6064, 6698, 7394, 8161, 9004, 9931, 10951, 12073, 13308, 14666, 16159, 17803, 19616, 21613, 23813, 26237],
            icon:'skin/img/city/port_l.png'
        },
        safehouse:{
			buildingId:1,
            maxLevel:32,
            wood:[113, 248, 402, 578, 779, 1007, 1267, 1564, 1903, 2288, 2728, 3230, 3801, 4453, 5195, 6042, 7008, 8108, 9363, 10793, 12423, 14282, 16401, 18816, 21570, 24709, 28288, 32368, 37019, 42321, 48365, 55255],
            glass:0,
            marble:[0, 0, 0, 129, 197, 275, 366, 471, 593, 735, 900, 1090, 1312, 1569, 1866, 2212, 2613, 3078, 3617, 4243, 4968, 5810, 6787, 7919, 9233, 10758, 12526, 14577, 16956, 19716, 22917, 26631],
            sulfur:0,
            wine:0,
            time:{a:96000, b:7, c:1.05, d:12960},
            icon:'skin/img/city/safehouse_l.png'
        },
        shipyard:{
			buildingId:5,
            maxLevel:32,
            wood:[98, 202, 324, 477, 671, 914, 1222, 1609, 2096, 2711, 3485, 4459, 5688, 7238, 9190, 11648, 14746, 18650, 23568, 29765, 37573, 47412, 59808, 75428, 95108, 119906, 151151, 190520, 240124, 302626, 381378, 480605],
            glass:0,
            marble:[0, 0, 0, 0, 0, 778, 1052, 1397, 1832, 2381, 3070, 3941, 5037, 6420, 8161, 10354, 13118, 16601, 20989, 26517, 33484, 42261, 53321, 67256, 84814, 106938, 134814, 169937, 214192, 269954, 340214, 428741],
            sulfur:0,
            wine:0,
            time:{a:64800, b:7, c:1.05, d:7128},
            icon:'skin/img/city/shipyard_l.png'
        },
        stonemason:{
			buildingId:19,
            maxLevel:32,
            wood:[274, 467, 718, 1045, 1469, 2021, 2738, 3671, 4883, 6459, 8508, 11172, 14634, 19135, 24987, 32594, 42483, 55339, 72050, 93778, 122021, 158740, 206471, 268524, 349194, 454063, 590393, 767620, 998018, 1297535, 1686906, 2193088],
            glass:0,
            marble:[0, 116, 255, 436, 671, 977, 1375, 1892, 2564, 3437, 4572, 6049, 7968, 10462, 13705, 17921, 23402, 30527, 39790, 51830, 67485, 87835, 114289, 148680, 193389, 251512, 327069, 425294, 552986, 718987, 934789, 1215329],
            sulfur:0,
            wine:0,
            time:{a:72000, b:11, c:1.1, d:6120},
            icon:'skin/img/city/stonemason_l.png'
        },
        temple:{
			buildingId:28,
            maxLevel:32,
            wood:[216, 228, 333, 465, 598, 760, 958, 1197, 1432, 1773, 2112, 2512, 3082, 3655, 4458, 5126, 6232, 7167, 8687, 10247, 11784, 14228, 16752, 19265, 23156, 26663, 32026, 36830, 43256, 50782, 59591, 68528],
            glass:[173, 190, 290, 423, 567, 752, 989, 1290, 1610, 2080, 2586, 3210, 4109, 5084, 6471, 7765, 9851, 11821, 14952, 18402, 22082, 27824, 34184, 41020, 51514, 61817, 77477, 92972, 113941, 139577, 170910, 205093],
            marble:0,
            sulfur:0,
            wine:0,
            time:{a:2160, b:1, c:1.1, d:0},
            icon:'skin/img/city/temple_l.png'
        },
        tavern:{
			buildingId:9,
            maxLevel:47,
            wood:[101, 222, 367, 541, 750, 1001, 1302, 1663, 2097, 2617, 3241, 3990, 4888, 5967, 7261, 8814, 10678, 12914, 15598, 18818, 22683, 27320, 32885, 39562, 47576, 57192, 68731, 82578, 99194, 119134, 143061, 171774, 206230, 247577, 297193, 356732, 428179, 513916, 616800, 740261, 888413, 1066196, 1279537, 1535545, 1842756, 2211407, 2653789 ],
            glass:0,
            marble:[0, 0, 0, 94, 122, 158, 206, 267, 348, 452, 587, 764, 993, 1290, 1677, 2181, 2835, 3685, 4791, 6228, 8097, 10526, 13684, 17789, 23125, 30063, 39082, 50806, 66048, 85862, 111621, 145107, 188640, 245232, 318801, 414441, 538774, 700406, 910528, 1183686, 1538791, 2000427, 2600557, 3380725, 4394943, 5713425, 7427454],
            sulfur:0,
            wine:0,
            time:{a:10800, b:1, c:1.06, d:10440},
            icon:'skin/img/city/taverne_r.png',
            wineUse:[0, 4, 8, 13, 18, 24, 30, 37, 44, 51, 60, 68, 78, 88, 99, 110, 122, 136, 150, 165, 180, 197, 216, 235, 255, 277, 300, 325, 351, 378, 408, 439, 472, 507, 544, 584, 626, 670, 717, 766, 818, 874, 933, 995, 1060, 1129, 1202, 1280, 1362]
        },
        townHall:{
			buildingId:0,
            maxLevel:40,
            wood:[0, 158, 335, 623, 923, 1390, 2015, 2706, 3661, 4776, 6173, 8074, 10281, 13023, 16424, 20986, 25423, 32285, 40232, 49286, 61207, 74804, 93956, 113035, 141594, 170213, 210011, 258875, 314902, 387656, 471194, 572580, 695615, 854728, 1037814, 1274043, 1714396, 1876185, 2276285, 2761291],
            glass:0,
            marble:[0, 0, 0, 0, 285, 551, 936, 1411, 2091, 2945, 4072, 5664, 7637, 10214, 13575, 18254, 23250, 31022, 40599, 52216, 68069, 87316, 115101, 145326, 191053, 241039, 312128, 403825, 515593, 666228, 850031, 1084292, 1382826, 1783721, 2273685, 2930330, 3692589, 4756439, 6058680, 7716365],
            sulfur:0,
            wine:0,
            time:{a:1800, b:1, c:1.17, d:-1080},
            icon:'skin/img/city/townhall_l.png'
        },
        vineyard:{
			buildingId:26,
            maxLevel:32,
            wood:[339, 423, 520, 631, 758, 905, 1074, 1269, 1492, 1749, 2045, 2384, 2775, 3225, 3741, 4336, 5019, 5813, 6875, 7941, 8944, 10319, 11900, 13718, 15809, 18215, 20978, 24159, 27816, 32021, 36857, 42419],
            glass:0,
            marble:[123, 198, 285, 387, 504, 640, 798, 981, 1194, 1440, 1726, 2058, 2443, 2889, 3407, 4008, 4705, 5513, 6450, 7537, 8800, 10263, 11961, 13930, 16214, 18864, 21938, 25503, 29639, 34437, 40002, 46457],
            sulfur:0,
            wine:0,
            time:{a:125660, b:37, c:1.06, d:2232},
            icon:'skin/img/city/vineyard_l.png'
        },
        wall:{
			buildingId:8,
            maxLevel:48,
            wood:[114, 361, 657, 1012, 1439, 1951, 2565, 3302, 4186, 5247, 6521, 8049, 9882, 12083, 14724, 17892, 21695, 26258, 31733, 38304, 46189, 55650, 67004, 80629, 96979, 116599, 140143, 168395, 202298, 242982, 291802, 350387, 420689, 505049, 606284, 727765, 873541, 1048473, 1258393, 1510294, 1812577, 2175317, 2610603, 3132948, 3759764],
            glass:0,
            marble:[0, 203, 516, 892, 1344, 1885, 2535, 3315, 4251, 5374, 6721, 8338, 10279, 12608, 15402, 18755, 22779, 27607, 33402, 40355, 48699, 58711, 70726, 85144, 102446, 123208, 148122, 178019, 213896, 256948, 308610, 370605, 444998, 534270, 641397, 769949, 924213, 1109328, 1331467, 1598031, 1917913, 2301767, 2762392, 3315144, 3978446],
            sulfur:0,
            wine:0,
            time:{a:57600, b:11, c:1.1, d:3240},
            icon:'skin/img/city/wall.png'
        },
        warehouse:{
			buildingId:7,
            maxLevel:40,
            wood:[160, 288, 442, 626, 847, 1113, 1431, 1813, 2272, 2822, 3483, 4275, 5226, 6368, 7737, 9380, 11353, 13719, 16559, 19967, 24056, 28963, 34852, 41918, 50398, 60574, 72784, 87437, 105021, 126121, 151441, 181825, 218286, 262039, 314543, 377548, 453153, 543880, 652752, 783398],
            glass:0,
            marble:[0, 0, 0, 96, 211, 349, 515, 714, 953, 1240, 1584, 1997, 2492, 3086, 3800, 4656, 5683, 6915, 8394, 10169, 12299, 14855, 17922, 21602, 26019, 31319, 37678, 45310, 54468, 65458, 78645, 94471, 113461, 136249, 163595, 196409, 235787, 283041, 339745, 407790 ],
            sulfur:0,
            wine:0,
            time:{a:2880, b:1, c:1.14, d:2160},
            icon:'skin/img/city/warehouse_l.png'
        },
        winegrower:{
			buildingId:21,
            maxLevel:32,
            wood:[274, 467, 718, 1045, 1469, 2021, 2738, 3671, 4883, 6459, 8508, 11172, 14634, 19135, 24987, 32594, 42483, 55339, 72050, 93778, 122021, 158740, 206471, 268524, 349194, 454063, 590393, 767620, 998018, 1297535, 1686906, 2193088],
            glass:0,
            marble:[0, 116, 255, 436, 671, 977, 1375, 1892, 2564, 3437, 4572, 6049, 7968, 10462, 13705, 17921, 23402, 30527, 39790, 51830, 67485, 87835, 114289, 148680, 193389, 251512, 327069, 425294, 552986, 718987, 934789, 1215329],
            sulfur:0,
            wine:0,
            time:{a:72000, b:11, c:1.1, d:6120},
            icon:'skin/img/city/winegrower_l.png'
        },
        workshop:{
			buildingId:15,
            maxLevel:32,
            wood:[206, 383, 569, 781, 1023, 1299, 1613, 1972, 2380, 2846, 3377, 3982, 4672, 5458, 6355, 7377, 8542, 9870, 11385, 13111, 15078, 17714, 19481, 22796, 26119, 29909, 34228, 39153, 44766, 51166, 58462, 66778],
            glass:0,
            marble:[89, 167, 251, 349, 461, 592, 744, 920, 1125, 1362, 1637, 1956, 2326, 2755, 3253, 3831, 4500, 5279, 6180, 7226, 8439, 9776, 11477, 13373, 15570, 18118, 21074, 24503, 28481, 33095, 38447, 44656],
            sulfur:0,
            wine:0,
            time:{a:96000, b:7, c:1.05, d:11880},
            icon:'skin/img/city/workshop_l.png'
        },
        pirateFortress:{
			buildingId:30,
            maxLevel: 30,
            wood:[450,906,1389,1935,2593,3427,4516,5950,7834,10284,13430,17415,22394,28534,36015,45029,55779,68482,83366,100671,120648,143562,169686,199309,232729.270255,312210,358926,410748,468032],
            glass:0,
            marble:[250,505,783,1112,1534,2103,2883,3949,5388,7296,9782,12964,16970,21938,28019,35370,44162,54573,66793,81020,97463,116341,137883,162325,189915,220912,255580,294197,337048,384429],
            sulfur:0,
            wine:0,
            time:{a:1550, b:1, c:1.2, d:1800},
            icon:'skin/img/city/pirateFortress_l.png'
        }
    }
};
Constant.buildingOrder = {
    growth:[Constant.Buildings.TOWN_HALL, Constant.Buildings.PALACE, Constant.Buildings.GOVERNORS_RESIDENCE, Constant.Buildings.TAVERN, Constant.Buildings.MUSEUM],
    research:[Constant.Buildings.ACADEMY, Constant.Buildings.WORKSHOP, Constant.Buildings.TEMPLE],
    diplomacy:[Constant.Buildings.EMBASSY],
    trading:[Constant.Buildings.WAREHOUSE, Constant.Buildings.DUMP, Constant.Buildings.TRADING_PORT, Constant.Buildings.TRADING_POST],
    military:[Constant.Buildings.WALL, Constant.Buildings.HIDEOUT, Constant.Buildings.BARRACKS, Constant.Buildings.SHIPYARD, Constant.Buildings.PIRATE_FORTRESS],
    wood:[Constant.Buildings.FORESTER, Constant.Buildings.CARPENTER],
    wine:[Constant.Buildings.WINERY, Constant.Buildings.VINEYARD],
    marble:[Constant.Buildings.STONEMASON, Constant.Buildings.ARCHITECT],
    crystal:[Constant.Buildings.GLASSBLOWER, Constant.Buildings.OPTICIAN],
    sulfur:[Constant.Buildings.ALCHEMISTS_TOWER, Constant.Buildings.FIREWORK_TEST_AREA],
};
Constant.altBuildingOrder = {
    growth:[Constant.Buildings.TOWN_HALL, Constant.Buildings.PALACE, Constant.Buildings.GOVERNORS_RESIDENCE, Constant.Buildings.TAVERN, Constant.Buildings.MUSEUM],
    research:[Constant.Buildings.ACADEMY, Constant.Buildings.WORKSHOP, Constant.Buildings.TEMPLE],
    diplomacy:[Constant.Buildings.EMBASSY],
    trading:[Constant.Buildings.WAREHOUSE, Constant.Buildings.DUMP, Constant.Buildings.TRADING_PORT, Constant.Buildings.TRADING_POST],
    military:[Constant.Buildings.WALL, Constant.Buildings.HIDEOUT, Constant.Buildings.BARRACKS, Constant.Buildings.SHIPYARD, Constant.Buildings.PIRATE_FORTRESS],
    production:[Constant.Buildings.FORESTER, Constant.Buildings.WINERY, Constant.Buildings.STONEMASON, Constant.Buildings.GLASSBLOWER, Constant.Buildings.ALCHEMISTS_TOWER],
    reducton:[Constant.Buildings.CARPENTER, Constant.Buildings.VINEYARD, Constant.Buildings.ARCHITECT, Constant.Buildings.OPTICIAN, Constant.Buildings.FIREWORK_TEST_AREA],
};
Constant.unitOrder = {
    army_front_line:[Constant.Military.HOPLITE, Constant.Military.STEAM_GIANT],
    army_flank:[Constant.Military.SPEARMAN, Constant.Military.SWORDSMAN],
    army_ranged:[Constant.Military.SLINGER, Constant.Military.ARCHER, Constant.Military.MARKSMAN],
    army_seige:[Constant.Military.RAM, Constant.Military.CATAPULT, Constant.Military.MORTAR],
    army_air:[Constant.Military.GYROCOPTER, Constant.Military.BALLOON_BOMBADIER],
    army_support:[Constant.Military.COOK, Constant.Military.DOCTOR],
    navy_front_line:[Constant.Military.FLAME_THROWER, Constant.Military.STEAM_RAM],
    navy_flank:[Constant.Military.RAM_SHIP],
    navy_ranged:[Constant.Military.BALLISTA_SHIP, Constant.Military.CATAPULT_SHIP, Constant.Military.MORTAR_SHIP],
    navy_seige:[Constant.Military.SUBMARINE, Constant.Military.ROCKET_SHIP],
    navy_air:[Constant.Military.PADDLE_SPEEDBOAT, Constant.Military.BALLOON_CARRIER],
    navy_support:[Constant.Military.TENDER]
};

/***********************************************************************************************************************
 * Main Init
 **********************************************************************************************************************/
    //TODO: Stuff that needs to load AFTER the full page load

$(function () {
    (function initBoard() {
        if (invalidPage()){
            return false
        }
        function invalidPage(){
            var bgViewId = $('body').attr('id');
            return !(bgViewId === 'city' || bgViewId === 'island' || bgViewId === 'worldmap_iso' || !$('backupLockTimer').length);
        }
        if (!unsafeWindow.ikariam || !unsafeWindow.ikariam.model || !unsafeWindow.ikariam.model.relatedCityData || !unsafeWindow.LocalizationStrings) {
            setTimeout(function () {
                initBoard()
            }, 100);
            return false;
        }
        SITR.Init();
        ikariam.FetchAllTowns();
        database.Save();
        ikariam.RestoreTemplateBox();
        var initialAjax = [];
        $('script').each(function (index, script) {
            var match = /ikariam.getClass\(ajax.Responder, (.*)\);/.exec(script.innerHTML);
            if (match) {
                initialAjax = JSON.parse(match[1]);
                return false;
            }
        });
        events('ajaxResponse').pub(initialAjax);
        render.startDrawing();

            (function initAjax() {
                if (!unsafeWindow.ikariam.controller || !unsafeWindow.ikariam.controller.executeAjaxRequest || !unsafeWindow.ajaxHandlerCallFromForm) {
                    setTimeout(function () {
                        initAjax()
                    }, 100);
                    return false;
                }

                unsafeWindow.ajaxHandlerCallFromForm = function (ajaxHandlerCallFromForm) {
                    return function cAjaxHandlerCallFromForm(form) {
                        events('formSubmit').pub(form);
                        return ajaxHandlerCallFromForm.apply(this, arguments);
                    };
                }(unsafeWindow.ajaxHandlerCallFromForm);

                unsafeWindow.ikariam.controller.executeAjaxRequest = function (execAjaxRequest) {
                    return function cExecuteAjaxRequest() {
                        var args = $.makeArray(arguments);
                        args.push(undefined);
                        if (!args[1]) {
                            args[1] = function customAjaxCallback(responseText) {
                                var responder = unsafeWindow.ikariam.getClass(unsafeWindow.ajax.Responder,
                                                                              responseText);
                                unsafeWindow.ikariam.controller.ajaxResponder = responder;
                                events('ajaxResponse').pub(responder.responseArray);
                            }
                        }
                        var ret = execAjaxRequest.apply(this, args)
                    };
                }(unsafeWindow.ikariam.controller.executeAjaxRequest);
            })()
    })()

})

if (debug) {
    delete unsafeWindow.console;
    unsafeWindow.SITR = {
        s:SITR,
        db:database,
        ikariam:ikariam,
        render:render,
        events:events,
        utils:Utils,
        Constant:Constant
    }
}