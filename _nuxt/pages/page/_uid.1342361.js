(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{170:function(t,e,n){var content=n(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("7fdc477a",content,!0,{sourceMap:!1})},171:function(t,e,n){var content=n(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("22fd2ece",content,!0,{sourceMap:!1})},172:function(t,e,n){var content=n(185);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("6d7785b1",content,!0,{sourceMap:!1})},173:function(t,e,n){var content=n(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("5fbb587b",content,!0,{sourceMap:!1})},174:function(t,e,n){"use strict";n.r(e);var r=n(175),c=n(176),o=n(177),l=n(178),f={name:"SliceZone",components:{RichText:r.default,Quote:c.default,ImageWithCaption:o.default,Embed:l.default},props:{SliceZone:Array}},d=n(16),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.SliceZone,(function(e,r){return n("div",{key:r},["text"===e.slice_type?n("div",[n("RichText",{attrs:{slice:e}})],1):t._e(),t._v(" "),"quote"===e.slice_type?n("div",[n("Quote",{attrs:{slice:e}})],1):t._e(),t._v(" "),"image_with_caption"===e.slice_type?n("div",[n("ImageWithCaption",{attrs:{slice:e}})],1):t._e(),t._v(" "),"embed"===e.slice_type?n("div",[n("Embed",{attrs:{slice:e}})],1):t._e()])})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RichText:n(175).default,Quote:n(176).default,ImageWithCaption:n(177).default,Embed:n(178).default})},175:function(t,e,n){"use strict";n.r(e);var r={name:"RichText",props:{Slice:Object}},c=(n(180),n(16)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rich-text"},[e("prismic-rich-text",{attrs:{field:this.Slice.primary.text}})],1)}),[],!1,null,"ae215d22",null);e.default=component.exports},176:function(t,e,n){"use strict";n.r(e);var r={name:"Quote",props:{Slice:Object}},c=(n(182),n(16)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"quote"},[e("q",[this._v("\n    "+this._s(this.$prismic.asText(this.Slice.primary.quote))+"\n  ")])])}),[],!1,null,"1f5998fb",null);e.default=component.exports},177:function(t,e,n){"use strict";n.r(e);var r={name:"ImageWithCaption",props:{Slice:Object}},c=(n(184),n(16)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"image-with-caption",style:{backgroundImage:"url("+this.Slice.primary.image.url+")"}},[e("div",{staticClass:"caption"},[e("prismic-rich-text",{attrs:{field:this.Slice.primary.caption}})],1)])}),[],!1,null,"3485877c",null);e.default=component.exports},178:function(t,e,n){"use strict";n.r(e);var r={name:"Embed",props:{Slice:Object}},c=(n(186),n(16)),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"embed",domProps:{innerHTML:this._s(this.Slice.primary.embed.html)}})}),[],!1,null,"a3854a16",null);e.default=component.exports},180:function(t,e,n){"use strict";var r=n(170);n.n(r).a},181:function(t,e,n){(e=n(30)(!1)).push([t.i,".rich-text[data-v-ae215d22]{margin:20px 0;line-height:1.6em}",""]),t.exports=e},182:function(t,e,n){"use strict";var r=n(171);n.n(r).a},183:function(t,e,n){(e=n(30)(!1)).push([t.i,'@media only screen and (min-width:500px){.quote[data-v-1f5998fb]{width:140%;margin:50px 0 50px -50px}}q[data-v-1f5998fb]{line-height:2em;font-size:1.6em;font-style:italic;font-family:"Lora",serif;margin:20px 0 20px -1ch;quotes:"“" "”"}q[data-v-1f5998fb]:before{content:open-quote}q[data-v-1f5998fb]:after{content:close-quote}',""]),t.exports=e},184:function(t,e,n){"use strict";var r=n(172);n.n(r).a},185:function(t,e,n){(e=n(30)(!1)).push([t.i,".image-with-caption[data-v-3485877c]{height:400px;background-size:cover;background-position:50%;margin:40px 0;display:flex;align-items:flex-end;border-radius:4px;overflow:hidden}.image-with-caption .caption[data-v-3485877c]{color:#fff;font-weight:700;opacity:0;transition:all .2s;padding:30px;text-shadow:0 0 70px #505050}.image-with-caption .caption[data-v-3485877c]:not(:hover){transition:all .4s}.image-with-caption:hover .caption[data-v-3485877c]{opacity:1;transition-delay:none}",""]),t.exports=e},186:function(t,e,n){"use strict";var r=n(173);n.n(r).a},187:function(t,e,n){(e=n(30)(!1)).push([t.i,".rich-text[data-v-a3854a16]{border:1px solid #000}",""]),t.exports=e},188:function(t,e,n){var content=n(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("60922e5e",content,!0,{sourceMap:!1})},195:function(t,e,n){"use strict";var r=n(188);n.n(r).a},196:function(t,e,n){(e=n(30)(!1)).push([t.i,".page[data-v-0ce95078]{margin:20px 0 100px}.page h2[data-v-0ce95078]{font-size:2.2em;line-height:2em;font-weight:700}",""]),t.exports=e},204:function(t,e,n){"use strict";n.r(e);n(17);var r=n(2),c=n(50),o=n(174),l={name:"page",components:{Nav:c.default,SliceZone:o.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$prismic,r=t.params,c=t.error,e.prev=1,e.next=4,n.api.getByUID("page",r.uid);case 4:return o=e.sent.data,e.abrupt("return",{pageContent:o});case 8:e.prev=8,e.t0=e.catch(1),c({statsCode:404,message:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},head:function(){return this.$seo(this.pageContent,this.$route.path)}},f=(n(195),n(16)),component=Object(f.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("h2",[this._v("\n    "+this._s(this.$prismic.asText(this.pageContent.title))+"\n  ")]),this._v(" "),e("div",{staticClass:"post__content"},[e("SliceZone",{attrs:{SliceZone:this.pageContent.body}})],1)])}),[],!1,null,"0ce95078",null);e.default=component.exports;installComponents(component,{SliceZone:n(174).default})}}]);