(this["webpackJsonpimc-app-react"]=this["webpackJsonpimc-app-react"]||[]).push([[0],{22:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(16),s=c.n(a),j=(c(22),c(8)),i=c(9),l=c(11),o=c(10),u=c(33),b=c(1),d=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(u.a.Header,{children:Object(b.jsx)("p",{children:"Calculador"})})})},h=c(29);var O=function(e){var t=e.bascula;return Object(b.jsx)("article",{children:Object(b.jsx)(h.a,{style:{width:"150px"},src:t,alt:"imagen corporal"})})},x=c(32),p=c(34),m=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).state={peso:0,altura:0},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this;return Object(b.jsx)("article",{children:Object(b.jsxs)(x.a,{children:[Object(b.jsxs)(x.a.Group,{children:[Object(b.jsxs)(x.a.Label,{htmlFor:"",children:["Peso ",Object(b.jsx)("small",{children:"(kilos)"})]}),Object(b.jsx)(x.a.Control,{type:"number",name:"peso",id:"peso",onKeyUp:function(t){return e.setState({peso:t.target.value})}})]}),Object(b.jsxs)(x.a.Group,{children:[Object(b.jsxs)(x.a.Label,{htmlFor:"",children:["Altura ",Object(b.jsx)("small",{children:"(mt)"})]}),Object(b.jsx)(x.a.Control,{type:"number",name:"altura",id:"altura",onKeyUp:function(t){return e.setState({altura:t.target.value})}})]}),Object(b.jsx)("div",{className:"d-grid gap-2",children:Object(b.jsx)(p.a,{type:"button",className:"mt-4 bg-success",onClick:function(){return e.props.guardarPesoAltura(parseFloat(e.state.peso),parseFloat(e.state.altura))},children:"Enviar"})})]})})}}]),c}(r.Component),f=function(e){var t=e.estatura,c=e.peso;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("article",{className:"text-center",children:[Object(b.jsx)("h3",{children:"IMC"}),t>0&&c>0?Object(b.jsx)("span",{children:Object(b.jsx)("b",{children:(c/Math.pow(t,2)).toFixed(2)})}):Object(b.jsx)("span",{children:Object(b.jsx)("b",{children:"Ingresa un valor"})})]})})},g=c(30),v=c(17),C=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).guardarPesoAltura=function(t,c){e.setState({peso:t,altura:c})},e.state={peso:null,altura:null},e}return Object(i.a)(c,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(u.a.Body,{children:Object(b.jsxs)(g.a,{children:[Object(b.jsx)(v.a,{children:Object(b.jsx)(m,{guardarPesoAltura:this.guardarPesoAltura})}),Object(b.jsx)(v.a,{children:Object(b.jsx)(f,{peso:this.state.peso,estatura:this.state.altura})}),Object(b.jsx)(v.a,{children:Object(b.jsx)(O,{color:"blue",bascula:"https://es.conair.com/assets/images/database/products/preview/WW346-Weight-Watchers-Scales-by-Conair-Digital-Precision-BMI-Scale.png"})})]})})})}}]),c}(r.Component),F=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;return Object(j.a)(this,c),(e=t.call(this)).state={paciente:"pedro"},e}return Object(i.a)(c,[{key:"obtenerNombre",value:function(){return this.nombre}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(C,{})]})})}}]),c}(r.Component);var y=function(e){var t=e.children;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("footer",{children:t})})},k=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("header",{children:Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("a",{children:"Inico"}),Object(b.jsx)("a",{children:"Calculo IMC"}),Object(b.jsx)("a",{children:"Paciente"})]})})})})},P=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){e.children;return Object(j.a)(this,c),t.call(this)}return Object(i.a)(c,[{key:"render",value:function(){return Object(b.jsx)("section",{className:"App",children:this.props.children})}}]),c}(r.Component),w=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("article",{children:Object(b.jsx)("p",{children:"Copyright @ 2021"})})})},I=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("article",{className:"redes_sociales",children:Object(b.jsx)("a",{href:"www.facebook.com",children:"Facebook"})})})},S=(c(27),c(31));var A=function(){return Object(b.jsxs)(S.a,{children:[Object(b.jsx)(k,{title:"Calculo de Indie de Masa Corporal"}),Object(b.jsx)(P,{children:Object(b.jsx)(F,{})}),Object(b.jsxs)(y,{children:[Object(b.jsx)(I,{}),Object(b.jsx)(w,{})]})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root")),M()}},[[28,1,2]]]);
//# sourceMappingURL=main.8cff76c7.chunk.js.map