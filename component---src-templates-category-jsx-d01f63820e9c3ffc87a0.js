(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m}),n.d(t,"pageQuery",function(){return p});var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(158),l=n.n(s),c=n(204),d=(n(203),n(154)),u=n.n(d),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pathContext.category,t=this.props.data.allMarkdownRemark.edges;return o.a.createElement("div",{className:"category-container"},o.a.createElement(l.a,null,o.a.createElement("title",null,'Posts in category "'+e+'" | '+u.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:u.a.siteUrl+"/categories/"+e})),o.a.createElement(c.a,{postEdges:t}))},t}(o.a.Component),p="4191571131"},169:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(198),o=n.n(i),s=n(0),l=n.n(s),c=n(10),d=n.n(c),u=n(219),m=n.n(u),p=(n(170),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return l.a.createElement("div",{className:"post-tag-container"},e&&e.map(function(e){return l.a.createElement(d.a,{key:e,style:{textDecoration:"none"},to:"/tags/"+o()(e)},l.a.createElement(m.a,{label:e,className:"post-preview-tags"}))}))},t}(s.Component));t.a=p},170:function(e,t,n){},201:function(e,t,n){"use strict";t.__esModule=!0,t.MediaOverlay=t.Media=void 0;var a=i(n(208)),r=i(n(209));function i(e){return e&&e.__esModule?e:{default:e}}t.default=a.default,t.Media=a.default,t.MediaOverlay=r.default},202:function(e,t,n){},204:function(e,t,n){"use strict";n(72);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(220),n(34)),l=n.n(s),c=n(165),d=n.n(c),u=n(161),m=n.n(u),p=n(192),f=n.n(p),h=(n(180),n(162),n(163),n(10)),v=n.n(h),g=n(201),E=n.n(g),y=(n(169),n(202),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={mobile:!0},n.handleResize=n.handleResize.bind(l()(l()(n))),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},n.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},n.render=function(){var e=this.props.postInfo,t=this.state.mobile,n=e.cover.startsWith("/")?""+e.cover:e.cover,a=t?162:225;return o.a.createElement(d.a,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--6"},o.a.createElement(v.a,{style:{textDecoration:"none"},to:e.path},o.a.createElement(E.a,{style:{backgroundImage:"url("+n+")",height:a+"px"},className:"post-preview-cover"},o.a.createElement(g.MediaOverlay,null,o.a.createElement(m.a,{title:e.title},o.a.createElement(f.a,{raised:!0,secondary:!0,className:"md-cell--right"},"Read"))))))},t}(i.Component)),w=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){var e=this.getPostList();return o.a.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},o.a.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},e.map(function(e){return o.a.createElement(y,{key:e.title,postInfo:e})})))},t}(o.a.Component);t.a=w}}]);
//# sourceMappingURL=component---src-templates-category-jsx-d01f63820e9c3ffc87a0.js.map