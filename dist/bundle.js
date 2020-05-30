/*! For license information please see bundle.js.LICENSE.txt */
!function(t){function e(e){for(var a,i,n=e[0],r=e[1],l=0,h=[];l<n.length;l++)i=n[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);for(o&&o(e);h.length;)h.shift()()}var a={},s={0:0};function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,i){a=s[t]=[e,i]}));e.push(a[2]=n);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(t){return i.p+""+t+".bundle.js"}(t);var o=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(h);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",o.name="ChunkLoadError",o.type=i,o.request=n,a[1](o)}s[t]=void 0}};var h=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var n=window.webpackJsonp=window.webpackJsonp||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var o=r;i(i.s=0)}([function(t,e,a){"use strict";a.r(e);var s=function(t){return t=t||Object.create(null),{on:function(e,a){(t[e]||(t[e]=[])).push(a)},off:function(e,a){t[e]&&t[e].splice(t[e].indexOf(a)>>>0,1)},emit:function(e,a){(t[e]||[]).slice().map((function(t){t(a)})),(t["*"]||[]).slice().map((function(t){t(e,a)}))}}};const i=t=>"[object Object]"===Object.prototype.toString.call(t),n=(t,e)=>{const a=document.createElement(t);if(e&&"object"==typeof e)for(const t in e)"html"===t?a.innerHTML=e[t]:a.setAttribute(t,e[t]);return a},r=t=>{t instanceof NodeList?t.forEach(t=>r(t)):t.innerHTML=""},l=(t,e,a)=>n("li",{class:t,html:`<a href="#" data-page="${e}">${a}</a>`}),o=(t,e)=>{let a,s;1===e?(a=0,s=t.length):-1===e&&(a=t.length-1,s=-1);for(let i=!0;i;){i=!1;for(let n=a;n!=s;n+=e)if(t[n+e]&&t[n].value>t[n+e].value){const a=t[n],s=t[n+e],r=a;t[n]=s,t[n+e]=r,i=!0}}return t};class h{constructor(t,e){return this.dt=t,this.rows=e,this}build(t){const e=n("tr");let a=this.dt.headings;return a.length||(a=t.map(()=>"")),a.forEach((a,s)=>{const i=n("td");t[s]&&t[s].length||(t[s]=""),i.innerHTML=t[s],i.data=t[s],e.appendChild(i)}),e}render(t){return t}add(t){if(Array.isArray(t)){const e=this.dt;Array.isArray(t[0])?t.forEach(t=>{e.data.push(this.build(t))}):e.data.push(this.build(t)),e.data.length&&(e.hasRows=!0),this.update(),e.columns().rebuild()}}remove(t){const e=this.dt;Array.isArray(t)?(t.sort((t,e)=>e-t),t.forEach(t=>{e.data.splice(t,1)})):"all"==t?e.data=[]:e.data.splice(t,1),e.data.length||(e.hasRows=!1),this.update(),e.columns().rebuild()}update(){this.dt.data.forEach((t,e)=>{t.dataIndex=e})}}class d{constructor(t){return this.dt=t,this}swap(t){if(t.length&&2===t.length){const e=[];this.dt.headings.forEach((t,a)=>{e.push(a)});const a=t[0],s=t[1],i=e[s];e[s]=e[a],e[a]=i,this.order(e)}}order(t){let e,a,s,i,n,r,l;const o=[[],[],[],[]],h=this.dt;t.forEach((t,s)=>{n=h.headings[t],r="false"!==n.getAttribute("data-sortable"),e=n.cloneNode(!0),e.originalCellIndex=s,e.sortable=r,o[0].push(e),h.hiddenColumns.includes(t)||(a=n.cloneNode(!0),a.originalCellIndex=s,a.sortable=r,o[1].push(a))}),h.data.forEach((e,a)=>{s=e.cloneNode(!1),i=e.cloneNode(!1),s.dataIndex=i.dataIndex=a,null!==e.searchIndex&&void 0!==e.searchIndex&&(s.searchIndex=i.searchIndex=e.searchIndex),t.forEach(t=>{l=e.cells[t].cloneNode(!0),l.data=e.cells[t].data,s.appendChild(l),h.hiddenColumns.includes(t)||(l=e.cells[t].cloneNode(!0),l.data=e.cells[t].data,i.appendChild(l))}),o[2].push(s),o[3].push(i)}),h.headings=o[0],h.activeHeadings=o[1],h.data=o[2],h.activeRows=o[3],h.update()}hide(t){if(t.length){const e=this.dt;t.forEach(t=>{e.hiddenColumns.includes(t)||e.hiddenColumns.push(t)}),this.rebuild()}}show(t){if(t.length){let e;const a=this.dt;t.forEach(t=>{e=a.hiddenColumns.indexOf(t),e>-1&&a.hiddenColumns.splice(e,1)}),this.rebuild()}}visible(t){let e;const a=this.dt;return t=t||a.headings.map(t=>t.originalCellIndex),isNaN(t)?Array.isArray(t)&&(e=[],t.forEach(t=>{e.push(!a.hiddenColumns.includes(t))})):e=!a.hiddenColumns.includes(t),e}add(t){let e;const a=document.createElement("th");if(!this.dt.headings.length)return this.dt.insert({headings:[t.heading],data:t.data.map(t=>[t])}),void this.rebuild();this.dt.hiddenHeader?a.innerHTML="":t.heading.nodeName?a.appendChild(t.heading):a.innerHTML=t.heading,this.dt.headings.push(a),this.dt.data.forEach((a,s)=>{t.data[s]&&(e=document.createElement("td"),t.data[s].nodeName?e.appendChild(t.data[s]):e.innerHTML=t.data[s],e.data=e.innerHTML,t.render&&(e.innerHTML=t.render.call(this,e.data,e,a)),a.appendChild(e))}),t.type&&a.setAttribute("data-type",t.type),t.format&&a.setAttribute("data-format",t.format),t.hasOwnProperty("sortable")&&(a.sortable=t.sortable,a.setAttribute("data-sortable",!0===t.sortable?"true":"false")),this.rebuild(),this.dt.renderHeader()}remove(t){Array.isArray(t)?(t.sort((t,e)=>e-t),t.forEach(t=>this.remove(t))):(this.dt.headings.splice(t,1),this.dt.data.forEach(e=>{e.removeChild(e.cells[t])})),this.rebuild()}filter(t,e,a,s){const i=this.dt;if(Array.isArray(s)&&!i.filterState||i.filterState&&i.filterState.filterTerms.every(t=>s.includes(t))){const t=[...s,""];i.filterState={originalData:i.data,filterTerms:t,nextTerm:function(){let e=0;return()=>t[e++%(s.length+1)]}()}}const n=i.filterState.nextTerm();let r;return r=""===n?i.filterState.originalData:Array.from(i.filterState.originalData).filter(e=>{const a=e.cells[t];return(a.hasAttribute("data-content")?a.getAttribute("data-content"):a.innerText)===n}),i.data=r,this.rebuild(),i.update(),a||i.emit("datatable.sort",t,e),n}sort(t,e,s){const i=this.dt;if(i.hasHeadings&&(t<0||t>i.headings.length))return!1;const n=i.options.filters&&i.options.filters[i.headings[t].textContent];if(n&&0!==n.length)return void this.filter(t,e,s,n);i.sorting=!0;let r=i.data;const l=[],h=[];let d=0,c=0;const p=i.headings[t];let u=t=>t;const g=[];if("date"===p.getAttribute("data-type")){let t=!1;p.hasAttribute("data-format")&&(t=p.getAttribute("data-format")),g.push(a.e(1).then(a.bind(null,2)).then(({parseDate:e})=>{u=a=>e(a,t)}))}Promise.all(g).then(()=>{let a,n;Array.from(r).forEach(e=>{const a=e.cells[t],s=a.hasAttribute("data-content")?a.getAttribute("data-content"):a.innerText,i=u("string"==typeof s?s.replace(/(\$|,|\s|%)/g,""):s);parseFloat(i)==i?h[c++]={value:Number(i),row:e}:l[d++]={value:s,row:e}}),e||(e=p.classList.contains("asc")?"desc":"asc"),"desc"==e?(a=o(l,-1),n=o(h,-1),p.classList.remove("asc"),p.classList.add("desc")):(a=o(h,1),n=o(l,1),p.classList.remove("desc"),p.classList.add("asc")),i.lastTh&&p!=i.lastTh&&(i.lastTh.classList.remove("desc"),i.lastTh.classList.remove("asc")),i.lastTh=p,r=a.concat(n),i.data=[];const g=[];r.forEach((t,e)=>{i.data.push(t.row),null!==t.row.searchIndex&&void 0!==t.row.searchIndex&&g.push(e)}),i.searchData=g,this.rebuild(),i.update(),s||i.emit("datatable.sort",t,e)})}rebuild(){let t,e,a,s;const i=this.dt,n=[];i.activeRows=[],i.activeHeadings=[],i.headings.forEach((t,e)=>{t.originalCellIndex=e,t.sortable="false"!==t.getAttribute("data-sortable"),i.hiddenColumns.includes(e)||i.activeHeadings.push(t)}),i.data.forEach((r,l)=>{t=r.cloneNode(!1),e=r.cloneNode(!1),t.dataIndex=e.dataIndex=l,null!==r.searchIndex&&void 0!==r.searchIndex&&(t.searchIndex=e.searchIndex=r.searchIndex),Array.from(r.cells).forEach(n=>{a=n.cloneNode(!0),a.data=n.data,t.appendChild(a),i.hiddenColumns.includes(a.cellIndex)||(s=a.cloneNode(!0),s.data=a.data,e.appendChild(s))}),n.push(t),i.activeRows.push(e)}),i.data=n,i.update()}}const c=function(t){let e=!1,a=!1;if((t=t||this.options.data).headings){e=n("thead");const a=n("tr");t.headings.forEach(t=>{const e=n("th",{html:t});a.appendChild(e)}),e.appendChild(a)}t.data&&t.data.length&&(a=n("tbody"),t.data.forEach(e=>{if(t.headings&&t.headings.length!==e.length)throw new Error("The number of rows do not match the number of headings.");const s=n("tr");e.forEach(t=>{const e=n("td",{html:t});s.appendChild(e)}),a.appendChild(s)})),e&&(null!==this.table.tHead&&this.table.removeChild(this.table.tHead),this.table.appendChild(e)),a&&(this.table.tBodies.length&&this.table.removeChild(this.table.tBodies[0]),this.table.appendChild(a))},p={sortable:!0,searchable:!0,paging:!0,perPage:10,perPageSelect:[5,10,15,20,25],nextPrev:!0,firstLast:!1,prevText:"&lsaquo;",nextText:"&rsaquo;",firstText:"&laquo;",lastText:"&raquo;",ellipsisText:"&hellip;",ascText:"▴",descText:"▾",truncatePager:!0,pagerDelta:2,scrollY:"",fixedColumns:!0,fixedHeight:!1,header:!0,footer:!1,labels:{placeholder:"Search...",perPage:"{select} entries per page",noRows:"No entries found",info:"Showing {start} to {end} of {rows} entries"},layout:{top:"{select}{search}",bottom:"{info}{pager}"}};class u{constructor(t,e={}){if(this.initialized=!1,this.options={...p,...e,layout:{...p.layout,...e.layout},labels:{...p.labels,...e.labels}},"string"==typeof t&&(t=document.querySelector(t)),this.initialLayout=t.innerHTML,this.initialSortable=this.options.sortable,this.options.header||(this.options.sortable=!1),null===t.tHead&&(!this.options.data||this.options.data&&!this.options.data.headings)&&(this.options.sortable=!1),t.tBodies.length&&!t.tBodies[0].rows.length&&this.options.data&&!this.options.data.data)throw new Error("You seem to be using the data option, but you've not defined any rows.");this.table=t,this.init()}static extend(t,e){"function"==typeof e?u.prototype[t]=e:u[t]=e}init(t){if(this.initialized||this.table.classList.contains("dataTable-table"))return!1;Object.assign(this.options,t||{}),this.currentPage=1,this.onFirstPage=!0,this.hiddenColumns=[],this.columnRenderers=[],this.selectedColumns=[],this.render(),setTimeout(()=>{this.emit("datatable.init"),this.initialized=!0,this.options.plugins&&Object.entries(this.options.plugins).forEach(([t,e])=>{this[t]&&"function"==typeof this[t]&&(this[t]=this[t](e,{createElement:n}),e.enabled&&this[t].init&&"function"==typeof this[t].init&&this[t].init())})},10)}render(t){if(t){switch(t){case"page":this.renderPage();break;case"pager":this.renderPager();break;case"header":this.renderHeader()}return!1}const e=this.options;let a="";if(e.data&&c.call(this),e.ajax){const t=e.ajax,a=new XMLHttpRequest,s=t=>{this.emit("datatable.ajax.progress",t,a)},i=e=>{if(4===a.readyState)if(this.emit("datatable.ajax.loaded",e,a),200===a.status){const s={};s.data=t.load?t.load.call(this,a):a.responseText,s.type="json",t.content&&t.content.type&&(s.type=t.content.type,Object.assign(s,t.content)),this.import(s),this.setColumns(!0),this.emit("datatable.ajax.success",e,a)}else this.emit("datatable.ajax.error",e,a)},n=t=>{this.emit("datatable.ajax.error",t,a)},r=t=>{this.emit("datatable.ajax.abort",t,a)};a.addEventListener("progress",s,!1),a.addEventListener("load",i,!1),a.addEventListener("error",n,!1),a.addEventListener("abort",r,!1),this.emit("datatable.ajax.loading",a),a.open("GET","string"==typeof t?e.ajax:e.ajax.url),a.send()}if(this.body=this.table.tBodies[0],this.head=this.table.tHead,this.foot=this.table.tFoot,this.body||(this.body=n("tbody"),this.table.appendChild(this.body)),this.hasRows=this.body.rows.length>0,!this.head){const t=n("thead"),a=n("tr");this.hasRows&&(Array.from(this.body.rows[0].cells).forEach(()=>{a.appendChild(n("th"))}),t.appendChild(a)),this.head=t,this.table.insertBefore(this.head,this.body),this.hiddenHeader=!e.ajax}if(this.headings=[],this.hasHeadings=this.head.rows.length>0,this.hasHeadings&&(this.header=this.head.rows[0],this.headings=[].slice.call(this.header.cells)),e.header||this.head&&this.table.removeChild(this.table.tHead),e.footer?this.head&&!this.foot&&(this.foot=n("tfoot",{html:this.head.innerHTML}),this.table.appendChild(this.foot)):this.foot&&this.table.removeChild(this.table.tFoot),this.wrapper=n("div",{class:"dataTable-wrapper dataTable-loading"}),a+="<div class='dataTable-top'>",a+=e.layout.top,a+="</div>",e.scrollY.length?a+=`<div class='dataTable-container' style='height: ${e.scrollY}; overflow-Y: auto;'></div>`:a+="<div class='dataTable-container'></div>",a+="<div class='dataTable-bottom'>",a+=e.layout.bottom,a+="</div>",a=a.replace("{info}",e.paging?"<div class='dataTable-info'></div>":""),e.paging&&e.perPageSelect){let t="<div class='dataTable-dropdown'><label>";t+=e.labels.perPage,t+="</label></div>";const s=n("select",{class:"dataTable-selector"});e.perPageSelect.forEach(t=>{const a=t===e.perPage,i=new Option(t,t,a,a);s.add(i)}),t=t.replace("{select}",s.outerHTML),a=a.replace("{select}",t)}else a=a.replace("{select}","");if(e.searchable){const t=`<div class='dataTable-search'><input class='dataTable-input' placeholder='${e.labels.placeholder}' type='text'></div>`;a=a.replace("{search}",t)}else a=a.replace("{search}","");this.hasHeadings&&this.render("header"),this.table.classList.add("dataTable-table");const s=n("div",{class:"dataTable-pagination"}),i=n("ul");s.appendChild(i),a=a.replace(/\{pager\}/g,s.outerHTML),this.wrapper.innerHTML=a,this.container=this.wrapper.querySelector(".dataTable-container"),this.pagers=this.wrapper.querySelectorAll(".dataTable-pagination"),this.label=this.wrapper.querySelector(".dataTable-info"),this.table.parentNode.replaceChild(this.wrapper,this.table),this.container.appendChild(this.table),this.rect=this.table.getBoundingClientRect(),this.data=Array.from(this.body.rows),this.activeRows=this.data.slice(),this.activeHeadings=this.headings.slice(),this.update(),e.ajax||this.setColumns(),this.fixHeight(),this.fixColumns(),e.header||this.wrapper.classList.add("no-header"),e.footer||this.wrapper.classList.add("no-footer"),e.sortable&&this.wrapper.classList.add("sortable"),e.searchable&&this.wrapper.classList.add("searchable"),e.fixedHeight&&this.wrapper.classList.add("fixed-height"),e.fixedColumns&&this.wrapper.classList.add("fixed-columns"),this.bindEvents()}renderPage(){if(this.hasHeadings&&(r(this.header),this.activeHeadings.forEach(t=>this.header.appendChild(t))),this.hasRows&&this.totalPages){this.currentPage>this.totalPages&&(this.currentPage=1);const t=this.currentPage-1,e=document.createDocumentFragment();this.pages[t].forEach(t=>e.appendChild(this.rows().render(t))),this.clear(e),this.onFirstPage=1===this.currentPage,this.onLastPage=this.currentPage===this.lastPage}else this.setMessage(this.options.labels.noRows);let t,e=0,a=0,s=0;if(this.totalPages&&(e=this.currentPage-1,a=e*this.options.perPage,s=a+this.pages[e].length,a+=1,t=this.searching?this.searchData.length:this.data.length),this.label&&this.options.labels.info.length){const e=this.options.labels.info.replace("{start}",a).replace("{end}",s).replace("{page}",this.currentPage).replace("{pages}",this.totalPages).replace("{rows}",t);this.label.innerHTML=t?e:""}1==this.currentPage&&this.fixHeight()}renderPager(){if(r(this.pagers),this.totalPages>1){const t="pager",e=document.createDocumentFragment(),a=this.onFirstPage?1:this.currentPage-1,s=this.onLastPage?this.totalPages:this.currentPage+1;this.options.firstLast&&e.appendChild(l(t,1,this.options.firstText)),this.options.nextPrev&&e.appendChild(l(t,a,this.options.prevText));let i=this.links;this.options.truncatePager&&(i=((t,e,a,s,i)=>{let r;const l=2*(s=s||2);let o=e-s,h=e+s;const d=[],c=[];e<4-s+l?h=3+l:e>a-(3-s+l)&&(o=a-(2+l));for(let e=1;e<=a;e++)if(1==e||e==a||e>=o&&e<=h){const a=t[e-1];a.classList.remove("active"),d.push(a)}return d.forEach(e=>{const a=e.children[0].getAttribute("data-page");if(r){const e=r.children[0].getAttribute("data-page");if(a-e==2)c.push(t[e]);else if(a-e!=1){const t=n("li",{class:"ellipsis",html:`<a href="#">${i}</a>`});c.push(t)}}c.push(e),r=e}),c})(this.links,this.currentPage,this.pages.length,this.options.pagerDelta,this.options.ellipsisText)),this.links[this.currentPage-1].classList.add("active"),i.forEach(t=>{t.classList.remove("active"),e.appendChild(t)}),this.links[this.currentPage-1].classList.add("active"),this.options.nextPrev&&e.appendChild(l(t,s,this.options.nextText)),this.options.firstLast&&e.appendChild(l(t,this.totalPages,this.options.lastText)),this.pagers.forEach(t=>{t.appendChild(e.cloneNode(!0))})}}renderHeader(){this.labels=[],this.headings&&this.headings.length&&this.headings.forEach((t,e)=>{if(this.labels[e]=t.textContent,t.firstElementChild&&t.firstElementChild.classList.contains("dataTable-sorter")&&(t.innerHTML=t.firstElementChild.innerHTML),t.sortable="false"!==t.getAttribute("data-sortable"),t.originalCellIndex=e,this.options.sortable&&t.sortable){const e=n("a",{href:"#",class:"dataTable-sorter",html:t.innerHTML});t.innerHTML="",t.setAttribute("data-sortable",""),t.appendChild(e)}}),this.fixColumns()}bindEvents(){const t=this.options;if(t.perPageSelect){const e=this.wrapper.querySelector(".dataTable-selector");e&&e.addEventListener("change",()=>{t.perPage=parseInt(e.value,10),this.update(),this.fixHeight(),this.emit("datatable.perpage",t.perPage)},!1)}t.searchable&&(this.input=this.wrapper.querySelector(".dataTable-input"),this.input&&this.input.addEventListener("keyup",()=>this.search(this.input.value),!1)),this.wrapper.addEventListener("click",e=>{const a=e.target;"a"===a.nodeName.toLowerCase()&&(a.hasAttribute("data-page")?(this.page(a.getAttribute("data-page")),e.preventDefault()):t.sortable&&a.classList.contains("dataTable-sorter")&&"false"!=a.parentNode.getAttribute("data-sortable")&&(this.columns().sort(this.headings.indexOf(a.parentNode)),e.preventDefault()))},!1),window.addEventListener("resize",()=>{this.rect=this.container.getBoundingClientRect(),this.fixColumns()})}setColumns(t){t||this.data.forEach(t=>{Array.from(t.cells).forEach(t=>{t.data=t.innerHTML})}),this.options.columns&&this.headings.length&&this.options.columns.forEach(t=>{Array.isArray(t.select)||(t.select=[t.select]),t.hasOwnProperty("render")&&"function"==typeof t.render&&(this.selectedColumns=this.selectedColumns.concat(t.select),this.columnRenderers.push({columns:t.select,renderer:t.render})),t.select.forEach(e=>{const a=this.headings[e];t.type&&a.setAttribute("data-type",t.type),t.format&&a.setAttribute("data-format",t.format),t.hasOwnProperty("sortable")&&a.setAttribute("data-sortable",t.sortable),t.hasOwnProperty("hidden")&&!1!==t.hidden&&this.columns().hide([e]),t.hasOwnProperty("sort")&&1===t.select.length&&this.columns().sort(t.select[0],t.sort,!0)})}),this.hasRows&&(this.data.forEach((t,e)=>{t.dataIndex=e,Array.from(t.cells).forEach(t=>{t.data=t.innerHTML})}),this.selectedColumns.length&&this.data.forEach(t=>{Array.from(t.cells).forEach((e,a)=>{this.selectedColumns.includes(a)&&this.columnRenderers.forEach(s=>{s.columns.includes(a)&&(e.innerHTML=s.renderer.call(this,e.data,e,t))})})}),this.columns().rebuild()),this.render("header")}destroy(){this.table.innerHTML=this.initialLayout,this.table.classList.remove("dataTable-table"),this.wrapper.parentNode.replaceChild(this.table,this.wrapper),this.initialized=!1}update(){this.wrapper.classList.remove("dataTable-empty"),this.paginate(this),this.render("page"),this.links=[];let t=this.pages.length;for(;t--;){const e=t+1;this.links[t]=l(0===t?"active":"",e,e)}this.sorting=!1,this.render("pager"),this.rows().update(),this.emit("datatable.update")}paginate(){const t=this.options.perPage;let e=this.activeRows;return this.searching&&(e=[],this.searchData.forEach(t=>e.push(this.activeRows[t]))),this.options.paging?this.pages=e.map((a,s)=>s%t==0?e.slice(s,s+t):null).filter(t=>t):this.pages=[e],this.totalPages=this.lastPage=this.pages.length,this.totalPages}fixColumns(){if((this.options.scrollY.length||this.options.fixedColumns)&&this.activeHeadings&&this.activeHeadings.length){let t,e=!1;if(this.columnWidths=[],this.table.tHead){if(this.options.scrollY.length&&(e=n("thead"),e.appendChild(n("tr")),e.style.height="0px",this.headerTable&&(this.table.tHead=this.headerTable.tHead)),this.activeHeadings.forEach(t=>{t.style.width=""}),this.activeHeadings.forEach((t,a)=>{const s=t.offsetWidth,i=s/this.rect.width*100;if(t.style.width=i+"%",this.columnWidths[a]=s,this.options.scrollY.length){const t=n("th");e.firstElementChild.appendChild(t),t.style.width=i+"%",t.style.paddingTop="0",t.style.paddingBottom="0",t.style.border="0"}}),this.options.scrollY.length){const t=this.table.parentElement;if(!this.headerTable){this.headerTable=n("table",{class:"dataTable-table"});const e=n("div",{class:"dataTable-headercontainer"});e.appendChild(this.headerTable),t.parentElement.insertBefore(e,t)}const a=this.table.tHead;this.table.replaceChild(e,a),this.headerTable.tHead=a,this.headerTable.parentElement.style.paddingRight=this.headerTable.clientWidth-this.table.clientWidth+parseInt(this.headerTable.parentElement.style.paddingRight||"0",10)+"px",t.scrollHeight>t.clientHeight&&(t.style.overflowY="scroll")}}else{t=[],e=n("thead");const a=n("tr");Array.from(this.table.tBodies[0].rows[0].cells).forEach(()=>{const e=n("th");a.appendChild(e),t.push(e)}),e.appendChild(a),this.table.insertBefore(e,this.body);const s=[];t.forEach((t,e)=>{const a=t.offsetWidth,i=a/this.rect.width*100;s.push(i),this.columnWidths[e]=a}),this.data.forEach(t=>{Array.from(t.cells).forEach((t,e)=>{this.columns(t.cellIndex).visible()&&(t.style.width=s[e]+"%")})}),this.table.removeChild(e)}}}fixHeight(){this.options.fixedHeight&&(this.container.style.height=null,this.rect=this.container.getBoundingClientRect(),this.container.style.height=this.rect.height+"px")}search(t){return!!this.hasRows&&(t=t.toLowerCase(),this.currentPage=1,this.searching=!0,this.searchData=[],t.length?(this.clear(),this.data.forEach((e,a)=>{const s=this.searchData.includes(e);t.split(" ").reduce((t,a)=>{let s=!1,i=null,n=null;for(let t=0;t<e.cells.length;t++)if(i=e.cells[t],n=i.hasAttribute("data-content")?i.getAttribute("data-content"):i.textContent,n.toLowerCase().includes(a)&&this.columns(i.cellIndex).visible()){s=!0;break}return t&&s},!0)&&!s?(e.searchIndex=a,this.searchData.push(a)):e.searchIndex=null}),this.wrapper.classList.add("search-results"),this.searchData.length?this.update():(this.wrapper.classList.remove("search-results"),this.setMessage(this.options.labels.noRows)),void this.emit("datatable.search",t,this.searchData)):(this.searching=!1,this.update(),this.emit("datatable.search",t,this.searchData),this.wrapper.classList.remove("search-results"),!1))}page(t){return t!=this.currentPage&&(isNaN(t)||(this.currentPage=parseInt(t,10)),!(t>this.pages.length||t<0)&&(this.render("page"),this.render("pager"),void this.emit("datatable.page",t)))}sortColumn(t,e){this.columns().sort(t,e)}insert(t){let e=[];if(i(t)){if(t.headings&&!this.hasHeadings&&!this.hasRows){const e=n("tr");t.headings.forEach(t=>{const a=n("th",{html:t});e.appendChild(a)}),this.head.appendChild(e),this.header=e,this.headings=[].slice.call(e.cells),this.hasHeadings=!0,this.options.sortable=this.initialSortable,this.render("header"),this.activeHeadings=this.headings.slice()}t.data&&Array.isArray(t.data)&&(e=t.data)}else Array.isArray(t)&&t.forEach(t=>{const a=[];Object.entries(t).forEach(([t,e])=>{const s=this.labels.indexOf(t);s>-1&&(a[s]=e)}),e.push(a)});e.length&&(this.rows().add(e),this.hasRows=!0),this.update(),this.setColumns(),this.fixColumns()}refresh(){this.options.searchable&&(this.input.value="",this.searching=!1),this.currentPage=1,this.onFirstPage=!0,this.update(),this.emit("datatable.refresh")}clear(t){this.body&&r(this.body);let e=this.body;if(this.body||(e=this.table),t){if("string"==typeof t){document.createDocumentFragment().innerHTML=t}e.appendChild(t)}}export(t){if(!this.hasHeadings&&!this.hasRows)return!1;const e=this.activeHeadings;let a=[];const s=[];let n,r,l,o;if(!i(t))return!1;const h={download:!0,skipColumn:[],lineDelimiter:"\n",columnDelimiter:",",tableName:"myTable",replacer:null,space:4,...t};if(h.type){if("txt"!==h.type&&"csv"!==h.type||(a[0]=this.header),h.selection)if(isNaN(h.selection)){if(Array.isArray(h.selection))for(n=0;n<h.selection.length;n++)a=a.concat(this.pages[h.selection[n]-1])}else a=a.concat(this.pages[h.selection-1]);else a=a.concat(this.activeRows);if(a.length){if("txt"===h.type||"csv"===h.type){for(l="",n=0;n<a.length;n++){for(r=0;r<a[n].cells.length;r++)if(!h.skipColumn.includes(e[r].originalCellIndex)&&this.columns(e[r].originalCellIndex).visible()){let t=a[n].cells[r].textContent;t=t.trim(),t=t.replace(/\s{2,}/g," "),t=t.replace(/\n/g,"  "),t=t.replace(/"/g,'""'),t=t.replace(/#/g,"%23"),t.includes(",")&&(t=`"${t}"`),l+=t+h.columnDelimiter}l=l.trim().substring(0,l.length-1),l+=h.lineDelimiter}l=l.trim().substring(0,l.length-1),h.download&&(l="data:text/csv;charset=utf-8,"+l)}else if("sql"===h.type){for(l=`INSERT INTO \`${h.tableName}\` (`,n=0;n<e.length;n++)!h.skipColumn.includes(e[n].originalCellIndex)&&this.columns(e[n].originalCellIndex).visible()&&(l+=`\`${e[n].textContent}\`,`);for(l=l.trim().substring(0,l.length-1),l+=") VALUES ",n=0;n<a.length;n++){for(l+="(",r=0;r<a[n].cells.length;r++)!h.skipColumn.includes(e[r].originalCellIndex)&&this.columns(e[r].originalCellIndex).visible()&&(l+=`"${a[n].cells[r].textContent}",`);l=l.trim().substring(0,l.length-1),l+="),"}l=l.trim().substring(0,l.length-1),l+=";",h.download&&(l="data:application/sql;charset=utf-8,"+l)}else if("json"===h.type){for(r=0;r<a.length;r++)for(s[r]=s[r]||{},n=0;n<e.length;n++)!h.skipColumn.includes(e[n].originalCellIndex)&&this.columns(e[n].originalCellIndex).visible()&&(s[r][e[n].textContent]=a[r].cells[n].textContent);l=JSON.stringify(s,h.replacer,h.space),h.download&&(l="data:application/json;charset=utf-8,"+l)}return h.download&&(h.filename=h.filename||"datatable_export",h.filename+="."+h.type,l=encodeURI(l),o=document.createElement("a"),o.href=l,o.download=h.filename,document.body.appendChild(o),o.click(),document.body.removeChild(o)),l}}return!1}import(t){let e=!1;if(!i(t))return!1;const a={lineDelimiter:"\n",columnDelimiter:",",...t};if(a.data.length||i(a.data)){if("csv"===a.type){e={data:[]};const t=a.data.split(a.lineDelimiter);t.length&&(a.headings&&(e.headings=t[0].split(a.columnDelimiter),t.shift()),t.forEach((t,s)=>{e.data[s]=[];const i=t.split(a.columnDelimiter);i.length&&i.forEach(t=>{e.data[s].push(t)})}))}else if("json"===a.type){const t=(t=>{let e=!1;try{e=JSON.parse(t)}catch(t){return!1}return!(null===e||!Array.isArray(e)&&!i(e))&&e})(a.data);t&&(e={headings:[],data:[]},t.forEach((t,a)=>{e.data[a]=[],Object.entries(t).forEach(([t,s])=>{e.headings.includes(t)||e.headings.push(t),e.data[a].push(s)})}))}i(a.data)&&(e=a.data),e&&this.insert(e)}return!1}print(){const t=this.activeHeadings,e=this.activeRows,a=n("table"),s=n("thead"),i=n("tbody"),r=n("tr");t.forEach(t=>{r.appendChild(n("th",{html:t.textContent}))}),s.appendChild(r),e.forEach(t=>{const e=n("tr");Array.from(t.cells).forEach(t=>{e.appendChild(n("td",{html:t.textContent}))}),i.appendChild(e)}),a.appendChild(s),a.appendChild(i);const l=window.open();l.document.body.appendChild(a),l.print()}setMessage(t){let e=1;this.hasRows?e=this.data[0].cells.length:this.activeHeadings.length&&(e=this.activeHeadings.length),this.wrapper.classList.add("dataTable-empty"),this.label&&(this.label.innerHTML=""),this.totalPages=0,this.render("pager"),this.clear(n("tr",{html:`<td class="dataTables-empty" colspan="${e}">${t}</td>`}))}columns(t){return new d(this,t)}rows(t){return new h(this,t)}on(t,e){this.events=this.events||{},this.events[t]=this.events[t]||[],this.events[t].push(e)}off(t,e){this.events=this.events||{},t in this.events!=!1&&this.events[t].splice(this.events[t].indexOf(e),1)}emit(t){if(this.events=this.events||{},t in this.events!=!1)for(let e=0;e<this.events[t].length;e++)this.events[t][e].apply(this,Array.prototype.slice.call(arguments,1))}}var g=function(t){const e=["geometry","lat","long","cvDataId","created","archived","correctionalFacilityDataId","countyDataId"],a=Object.keys(t[0]).filter(t=>{if(-1==e.indexOf(t))return t});let s=[];for(let e=0;e<t.length;e++){let i=[];for(let s=0;s<a.length;s++)i.push(""+t[e][a[s]]);s.push(i)}return{headings:a,data:s}};var f=class{constructor(){this.elem=document.querySelector(".js-table"),this.dataTable=new u(this.elem,{paging:!1}),this.update=this.update.bind(this)}update(t){this.dataTable.destroy(),this.dataTable=new u(this.elem,{paging:!1});const e=g(t);this.dataTable.insert(e)}};var b=class{constructor(t){this.emitter=t,this.baseURL="https://e7p503ngy5.execute-api.us-west-2.amazonaws.com/prod/",this.getCounties=this.getCounties.bind(this),this.getStateData=this.getStateData.bind(this),this.getZipCodeData=this.getZipCodeData.bind(this),this.getCorrectionalData=this.getCorrectionalData.bind(this)}async getCounties(){console.log("fetching county data");const t=await fetch(this.baseURL+"GetCounties"),e=await t.json();this.emitter.emit("county-data",e.data),this.emitter.emit("set-name","nmdoh_covid_county_data")}async getCountyHistorical(t){console.log("fetching county data");const e=await fetch(`${this.baseURL}GetCountyDataByDay?countyId=${t}`);return await e.json()}async getStateData(){console.log("fetching state data");const t=await fetch(this.baseURL+"GetPublicStatewideData"),e=await t.json();e.data.updated=new Date(e.data.updated).toLocaleDateString(),this.emitter.emit("state-data",[e.data]),this.emitter.emit("set-name","nmdoh_covid_state_data")}async getZipCodeData(){console.log("fetching zip code data");const t=await fetch(this.baseURL+"GetPublicZipsData"),e=await t.json();this.emitter.emit("zip-code-data",e.data),this.emitter.emit("set-name","nmdoh_covid_zip_code_data")}async getCorrectionalData(){console.log("fetching correctional facility data");const t=await fetch(this.baseURL+"GetCorrectionalFacilities"),e=await t.json();this.emitter.emit("correctional-data",e.data),this.emitter.emit("set-name","nmdoh_covid_correctional_facility_data")}};var m=class{constructor(){this.elem=document.querySelector(".js-download-btn"),this.name="",this.rows=[],this.addEventListeners=this.addEventListeners.bind(this),this.onClick=this.onClick.bind(this),this.setContent=this.setContent.bind(this),this.setName=this.setName.bind(this),this.addEventListeners()}addEventListeners(){this.elem.addEventListener("click",this.onClick)}setName(t){this.name=t+".csv"}setContent(t){const e=g(t),a=[e.headings,...e.data];this.rows=a}onClick(){let t=this.rows.map(t=>t.join(",")).join("\n");const e=encodeURI("data:text/csv;charset=utf-8,"+t),a=document.createElement("a");a.setAttribute("href",e),a.setAttribute("download",this.name),a.classList.add("hidden"),document.body.appendChild(a),a.click()}};{const t=s(),e=new b(t),a=new f,i=new m;t.on("state-data",a.update),t.on("state-data",i.setContent),t.on("county-data",a.update),t.on("county-data",i.setContent),t.on("set-name",i.setName),t.on("zip-code-data",a.update),t.on("correctional-data",a.update),document.querySelector(".js-county-btn").addEventListener("click",()=>e.getCounties()),document.querySelector(".js-state-btn").addEventListener("click",()=>e.getStateData()),document.querySelector(".js-zip-code-btn").addEventListener("click",()=>e.getZipCodeData()),document.querySelector(".js-correctional-btn").addEventListener("click",()=>e.getCorrectionalData()),e.getCounties()}}]);