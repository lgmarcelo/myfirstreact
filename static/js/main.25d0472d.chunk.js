(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(15),a=n.n(s),o=(n(25),n.p+"static/media/logo.6ce24c58.svg"),i=(n(26),n(0)),j=function(e){return Object(i.jsxs)("div",{children:[e.children,Object(i.jsxs)("h1",{children:["Hello ",e.name," aka ",e.heroName]})]})},l=function(){return Object(i.jsx)("p",{children:"this is a children props"})},d=n(16),h=n(17),u=n(20),b=n(19),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{onClick:this.addCounter,children:"Click me!!!!!"}),Object(i.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),n}(r.a.Component),p=n(5),f=n(18),x=n.n(f).a.create({baseURL:"http://localhost:8080",headers:{"content-type":"application/json"}}),m=function(){return x.get("/hello")},g=function(){var e=Object(c.useState)("sensya lods down server, chat para gumana"),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){m().then((function(e){r(e.data)})).catch((function(e){console.log("something went worng")}))})),n},v=function(){return x.get("/employees")},y=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){v().then((function(e){return r(e.data)})).catch((function(){return console.log("sorry </3")}))})),Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"List of employees"}),Object(i.jsx)("div",{children:Object(i.jsxs)("table",{border:"1",children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:"Name"}),Object(i.jsx)("td",{children:"Location"}),Object(i.jsx)("td",{children:"Department"})]}),n.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.name}),Object(i.jsx)("td",{children:e.location}),Object(i.jsx)("td",{children:e.department})]})}))]})})]})};var N=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(i.jsx)("p",{children:"lauren"}),Object(i.jsx)("p",{children:g()}),Object(i.jsx)(y,{}),Object(i.jsx)(j,{name:"Peter",heroName:"Spiderman",children:Object(i.jsx)(l,{})}),Object(i.jsx)(j,{name:"Tony",heroName:"Iron Man",children:Object(i.jsx)(O,{})}),Object(i.jsx)(j,{name:"Thor",heroName:"Thor"}),Object(i.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),k()}},[[46,1,2]]]);
//# sourceMappingURL=main.25d0472d.chunk.js.map