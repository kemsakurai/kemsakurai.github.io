(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return h});var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(158),c=n.n(l),s=n(203),p=n(204),m=n(264),u=n(154),d=n.n(u),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(s.a,{location:this.props.location,title:"Home"},o.a.createElement("div",{className:"index-container"},o.a.createElement(c.a,null,o.a.createElement("title",null,d.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:""+d.a.siteUrl})),o.a.createElement(m.a,{postEdges:e}),o.a.createElement(p.a,{postEdges:e})))},t}(o.a.Component);t.default=f;var h="1014838814"},169:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(198),o=n.n(i),l=n(0),c=n.n(l),s=n(10),p=n.n(s),m=n(219),u=n.n(m),d=(n(170),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return c.a.createElement("div",{className:"post-tag-container"},e&&e.map(function(e){return c.a.createElement(p.a,{key:e,style:{textDecoration:"none"},to:"/tags/"+o()(e)},c.a.createElement(u.a,{label:e,className:"post-preview-tags"}))}))},t}(l.Component));t.a=d},170:function(e,t,n){},197:function(e,t,n){var a,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var a=0;a<e.length;a++){var r=e[a];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(a>0&&(r=r.replace(/^[\/]+/,"")),r=a<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(a=i)?a.call(t,n,t,e):a)||(e.exports=r)},201:function(e,t,n){"use strict";t.__esModule=!0,t.MediaOverlay=t.Media=void 0;var a=i(n(208)),r=i(n(209));function i(e){return e&&e.__esModule?e:{default:e}}t.default=a.default,t.Media=a.default,t.MediaOverlay=r.default},202:function(e,t,n){},204:function(e,t,n){"use strict";n(72);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=(n(220),n(34)),c=n.n(l),s=n(165),p=n.n(s),m=n(161),u=n.n(m),d=n(192),f=n.n(d),h=(n(180),n(162),n(163),n(10)),g=n.n(h),v=n(201),E=n.n(v),y=(n(169),n(202),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mobile:!0},n.handleResize=n.handleResize.bind(c()(c()(n))),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},n.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},n.render=function(){var e=this.props.postInfo,t=this.state.mobile,n=e.cover.startsWith("/")?""+e.cover:e.cover,a=t?162:225;return o.a.createElement(p.a,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--6"},o.a.createElement(g.a,{style:{textDecoration:"none"},to:e.path},o.a.createElement(E.a,{style:{backgroundImage:"url("+n+")",height:a+"px"},className:"post-preview-cover"},o.a.createElement(v.MediaOverlay,null,o.a.createElement(u.a,{title:e.title},o.a.createElement(f.a,{raised:!0,secondary:!0,className:"md-cell--right"},"Read"))))))},t}(i.Component)),w=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){var e=this.getPostList();return o.a.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},o.a.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},e.map(function(e){return o.a.createElement(y,{key:e.title,postInfo:e})})))},t}(o.a.Component);t.a=w},264:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),l=n(158),c=n.n(l),s=n(197),p=n.n(s),m=n(154),u=n.n(m),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,i=r.postNode,l=r.postPath,s=r.postSEO;if(s){var m=i.frontmatter;e=m.title,t=m.description?m.description:i.excerpt,n=m.cover,a=p()(u.a.siteUrl,u.a.pathPrefix,l)}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;n=p()(u.a.siteUrl,u.a.pathPrefix,n);var d=p()(u.a.siteUrl,u.a.pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return s&&f.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),o.a.createElement("meta",{property:"og:url",content:s?a:d}),s?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-jsx-a448c7d2400a2ee53c81.js.map