(this["webpackJsonpfundamentos-react"]=this["webpackJsonpfundamentos-react"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),o=n.n(l);n(16),n(17);function c(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Primeiro componente"),"Seja bem vindo")}function u(e){var t=e.titulo,n=e.aluno,a=e.nota,l=a>=7?"Aprovado":"Reprovado";return r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,r.a.createElement("strong",null," ",n," "),"tem nota",r.a.createElement("strong",null," ",a," "),"e est\xe1",r.a.createElement("strong",null," ",l," ")))}function m(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Fragmento"),r.a.createElement("p",null,"Opa"))}var i=function(e){var t=e.min,n=e.max,a=Math.floor(Math.random()*(n-t)+t);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Valor Aleat\xf3rio"),r.a.createElement("p",null,"Min: ",t," "),r.a.createElement("p",null,"Max: ",n,"  "),r.a.createElement("p",null,"Resultado: ",a))},s=function(e){return r.a.createElement("div",null,r.a.Children.map(e.children,(function(t){return Object(a.cloneElement)(t,e)})))},E=function(e){var t=e.nome,n=e.sobrenome;return(r.a.createElement("div",null,t," ",r.a.createElement("strong",null,n)))},d=[{id:1,nome:"Ana",nota:6.2},{id:2,nome:"Bia",nota:7.6},{id:3,nome:"Carlos",nota:8.1},{id:4,nome:"Daniel",nota:5.7},{id:5,nome:"Eduardo",nota:10},{id:6,nome:"Fabio",nota:9.5},{id:7,nome:"Gabriel",nota:7.7},{id:8,nome:"Leonardo",nota:6.9},{id:9,nome:"Wagner",nota:8.8}],p=function(){var e=d.map((function(e){return r.a.createElement("li",{key:e.id},e.id,") ",e.nome," -> ",e.nota)}));return(r.a.createElement("div",null,r.a.createElement("ul",{style:{listStyle:"none"}}," ",e," ")))},f=[{id:1,nome:"L\xe1pis",preco:2.49},{id:2,nome:"Caneta",preco:3.8},{id:3,nome:"Notebook Lenovo",preco:1999.9},{id:4,nome:"Samsumg S20",preco:5.7},{id:5,nome:"Mochila",preco:59.9},{id:6,nome:"iPhone X",preco:3590},{id:7,nome:"Bon\xe9",preco:19.9},{id:8,nome:"PlayStation 5",preco:4999.99},{id:9,nome:"XBox 360",preco:2129.99}],v=(n(18),function(){var e=f.map((function(e,t){return r.a.createElement("tr",{key:e.id,className:t%2===0?"par":""},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.nome),r.a.createElement("td",null,"R$ ",e.preco.toFixed(2).replace(".",",")))}));return(r.a.createElement("div",{className:"tabela-produtos"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Nome"),r.a.createElement("th",null,"Pre\xe7o"))),r.a.createElement("tbody",null,e))))}),h=function(e){var t=e.numero%2===0;return r.a.createElement("div",null,t?r.a.createElement("span",null,"Par"):r.a.createElement("span",null,"Impar"))},b=function(e){var t=e.children.filter((function(e){return e.type&&"Else"===e.type.name}))[0],n=e.children.filter((function(e){return e!==t}));return e.test?n:t||!1},C=function(e){return e.children},g=function(e){var t=e.usuario;return(r.a.createElement("div",null,r.a.createElement(b,{test:t&&t.nome},"Seja bem vindo ",r.a.createElement("strong",null," ",t.nome),"!",r.a.createElement(C,null,"Seja bem vindo ",r.a.createElement("strong",null,"Amig\xe3o"),"!"))))},F=function(e){return r.a.createElement("div",null,r.a.createElement("span",null," ",e.nome),r.a.createElement("strong",null," ",e.idade),r.a.createElement("span",null," ",e.nerd?"Verdadeiro":"Falso","!"))},j=function(e){return r.a.createElement("div",null,r.a.createElement(F,{nome:"Gabriel",idade:16,nerd:!1}),r.a.createElement(F,{nome:"Jo\xe3o",idade:18,nerd:!0}))},O=n(1),S=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,"Filho"),r.a.createElement("button",{onClick:function(){return e.quandoClicar("Jo\xe3o",parseInt(20*Math.random())+50,Math.random()>.5)}},"Fornecer Informa\xe7\xf5es"))},A=function(e){var t=Object(a.useState)("?"),n=Object(O.a)(t,2),l=n[0],o=n[1],c=Object(a.useState)(0),u=Object(O.a)(c,2),m=u[0],i=u[1],s=Object(a.useState)(!1),E=Object(O.a)(s,2),d=E[0],p=E[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,l," "),r.a.createElement("span",null,r.a.createElement("strong",null,m)," "),r.a.createElement("span",null,d?"Verdadeiro":"Falso"," ")),r.a.createElement(S,{quandoClicar:function(e,t,n){o(e),i(t),p(n)}}))},N=(n(19),function(){var e=Object(a.useState)("Inicial"),t=Object(O.a)(e,2),n=t[0],l=t[1];return(r.a.createElement("div",{className:"Input"},r.a.createElement("h2",null,n),r.a.createElement("input",{value:n,onChange:function(e){return l(e.target.value)}})))}),y=n(6),I=n(7),k=n(10),P=n(8),M=function(e){return r.a.createElement("h3",null,e.numero)},x=function(e){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"passoInput"},"Passo: "),r.a.createElement("input",{id:"passoInput",type:"number",value:e.passo,onChange:function(t){return e.setPasso(+t.target.value)}}))},B=function(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onInc},"+"),r.a.createElement("button",{onClick:e.onDec},"-"))},D=(n(20),function(e){Object(k.a)(n,e);var t=Object(P.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={numero:e.props.numeroInicial,passo:e.props.passoInicial||5},e}return Object(I.a)(n,[{key:"inc",value:function(){this.setState({numero:this.state.numero+this.state.passo})}},{key:"dec",value:function(){this.setState({numero:this.state.numero-this.state.passo})}},{key:"render",value:function(){var e=this;return(r.a.createElement("div",{className:"Contador"},r.a.createElement(M,{numero:this.state.numero}),r.a.createElement(x,{passo:this.state.passo,setPasso:function(t){return e.setState({passo:t})}}),r.a.createElement(B,{onInc:function(){return e.inc()},onDec:function(){return e.dec()}})))}}]),n}(a.Component)),R=n(9);n(21);function w(e){var t=Object(a.useState)(e.qtde||6),n=Object(O.a)(t,2),l=n[0],o=n[1],c=E(l),u=Object(a.useState)(c),m=Object(O.a)(u,2),i=m[0],s=m[1];function E(e){e<6&&(e=6),e>15&&(e=15);for(var t=new Set;t.size<e;)t.add(parseInt(60*Math.random()));return Object(R.a)(t).sort((function(e,t){return e-t}))}return r.a.createElement("div",{className:"Mega"},r.a.createElement("h2",null,"Mega Sena"),r.a.createElement("div",{className:"numeros"},i.map((function(e){return r.a.createElement("span",{className:"bolaNumero"},e<10?"0".concat(e):e)}))),r.a.createElement("div",null,r.a.createElement("label",null,"Qtde de N\xfameros (min:6, max:15):  "),r.a.createElement("input",{type:"number",min:"6",max:"15",value:l,onChange:function(e){return o(e.target.value)}})),r.a.createElement("button",{onClick:function(){return s(E(l))}},"Gerar N\xfameros"))}n(22);var J=function(e){var t={backgroundColor:e.color||"#F00",borderColor:e.color||"#F00"};return(r.a.createElement("div",{className:"Card",style:t},r.a.createElement("div",{className:"title"}," ",e.titulo," "),r.a.createElement("div",{className:"content"},e.children)))};function q(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Fundamentos React"),r.a.createElement("div",{className:"cards"},r.a.createElement(J,{titulo:"Contador",color:"#003300"},r.a.createElement(w,null)),r.a.createElement(J,{titulo:"Contador",color:"#AAA"},r.a.createElement(D,{numeroInicial:10})),r.a.createElement(J,{titulo:"Componente Controlado",color:"#6BE400"},r.a.createElement(N,null)),r.a.createElement(J,{titulo:"Comunica\xe7\xe3o Indireta",color:"#000"},r.a.createElement(A,null)),r.a.createElement(J,{titulo:"Comunica\xe7\xe3o Direta",color:"#A64B00"},r.a.createElement(j,null)),r.a.createElement(J,{titulo:"Renderiza\xe7\xe3o Condicional",color:"#5CCCCC"},r.a.createElement(h,{numero:20}),r.a.createElement(g,{usuario:{nome:"Fernando"}}),r.a.createElement(g,{usuario:{email:"Fernando@gmail.com"}})),r.a.createElement(J,{titulo:"Desafio Repeti\xe7\xe3o Produtos",color:"#7109AA"},r.a.createElement(v,null)),r.a.createElement(J,{titulo:"Repeti\xe7\xe3o - Alunos",color:"#FF4C65"},r.a.createElement(p,null)),r.a.createElement(J,{titulo:"Componente com filhos",color:"#FFFF00"},r.a.createElement(s,{sobrenome:"Ferreira"},r.a.createElement(E,{nome:"Pedro"}),r.a.createElement(E,{nome:"Ana"}),r.a.createElement(E,{nome:"Bia"}))),r.a.createElement(J,{titulo:"Desafio N\xfamero Aleat\xf3rio",color:"#080"},r.a.createElement(i,{min:100,max:200})),r.a.createElement(J,{titulo:"Fragmento",color:"#FF2C00"},r.a.createElement(m,null)),r.a.createElement(J,{titulo:"Com Parametro",color:"#9303A7"},r.a.createElement(u,{titulo:"Situa\xe7\xe3o do Aluno",aluno:"Felipe",nota:10})),r.a.createElement(J,{titulo:"Primeiro Componente",color:"#0966A3"},r.a.createElement(c,null))))}o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.3d2faea3.chunk.js.map