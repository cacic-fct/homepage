"use strict";(self.webpackChunkcacic_fct=self.webpackChunkcacic_fct||[]).push([[583,286],{6132:(e,t,s)=>{s.d(t,{A:()=>b});var r=s(8587),a=s(8168),o=s(6540),n=s(4164),i=s(7245),d=s(4111),c=s(8659),l=s(8610),u=s(9369),h=s(1264),m=s(4848);const p=["className","component","disableGutters","fixed","maxWidth","classes"],A=(0,h.A)(),x=(0,u.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[`maxWidth${(0,c.A)(String(s.maxWidth))}`],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),f=e=>(0,l.A)({props:e,name:"MuiContainer",defaultTheme:A});var v=s(8466),y=s(1848),j=s(3541);const g=function(e={}){const{createStyledComponent:t=x,useThemeProps:s=f,componentName:l="MuiContainer"}=e,u=t((({theme:e,ownerState:t})=>(0,a.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,s)=>{const r=s,a=e.breakpoints.values[r];return 0!==a&&(t[e.breakpoints.up(r)]={maxWidth:`${a}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,a.A)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),h=o.forwardRef((function(e,t){const o=s(e),{className:h,component:A="div",disableGutters:x=!1,fixed:f=!1,maxWidth:v="lg"}=o,y=(0,r.A)(o,p),j=(0,a.A)({},o,{component:A,disableGutters:x,fixed:f,maxWidth:v}),g=((e,t)=>{const{classes:s,fixed:r,disableGutters:a,maxWidth:o}=e,n={root:["root",o&&`maxWidth${(0,c.A)(String(o))}`,r&&"fixed",a&&"disableGutters"]};return(0,d.A)(n,(e=>(0,i.Ay)(t,e)),s)})(j,l);return(0,m.jsx)(u,(0,a.A)({as:A,ownerState:j,className:(0,n.A)(g.root,h),ref:t},y))}));return h}({createStyledComponent:(0,y.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[`maxWidth${(0,v.A)(String(s.maxWidth))}`],s.fixed&&t.fixed,s.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,j.A)({props:e,name:"MuiContainer"})}),b=g},9369:(e,t,s)=>{s.d(t,{A:()=>v});var r=s(8168),a=s(8587),o=s(1311),n=s(4521),i=s(1264),d=s(3571);const c=["ownerState"],l=["variants"],u=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function h(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const m=(0,i.A)(),p=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function A({defaultTheme:e,theme:t,themeId:s}){return r=t,0===Object.keys(r).length?e:t[s]||t;var r}function x(e){return e?(t,s)=>s[e]:null}function f(e,t){let{ownerState:s}=t,o=(0,a.A)(t,c);const n="function"==typeof e?e((0,r.A)({ownerState:s},o)):e;if(Array.isArray(n))return n.flatMap((e=>f(e,(0,r.A)({ownerState:s},o))));if(n&&"object"==typeof n&&Array.isArray(n.variants)){const{variants:e=[]}=n;let t=(0,a.A)(n,l);return e.forEach((e=>{let a=!0;"function"==typeof e.props?a=e.props((0,r.A)({ownerState:s},o,s)):Object.keys(e.props).forEach((t=>{(null==s?void 0:s[t])!==e.props[t]&&o[t]!==e.props[t]&&(a=!1)})),a&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,r.A)({ownerState:s},o,s)):e.style))})),t}return n}const v=function(e={}){const{themeId:t,defaultTheme:s=m,rootShouldForwardProp:i=h,slotShouldForwardProp:c=h}=e,l=e=>(0,d.A)((0,r.A)({},e,{theme:A((0,r.A)({},e,{defaultTheme:s,themeId:t}))}));return l.__mui_systemSx=!0,(e,d={})=>{(0,o.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:m,slot:v,skipVariantsResolver:y,skipSx:j,overridesResolver:g=x(p(v))}=d,b=(0,a.A)(d,u),C=void 0!==y?y:v&&"Root"!==v&&"root"!==v||!1,w=j||!1;let S=h;"Root"===v||"root"===v?S=i:v?S=c:function(e){return"string"==typeof e&&e.charCodeAt(0)>96}(e)&&(S=void 0);const k=(0,o.default)(e,(0,r.A)({shouldForwardProp:S,label:undefined},b)),W=e=>"function"==typeof e&&e.__emotion_real!==e||(0,n.Q)(e)?a=>f(e,(0,r.A)({},a,{theme:A({theme:a.theme,defaultTheme:s,themeId:t})})):e,R=(a,...o)=>{let n=W(a);const i=o?o.map(W):[];m&&g&&i.push((e=>{const a=A((0,r.A)({},e,{defaultTheme:s,themeId:t}));if(!a.components||!a.components[m]||!a.components[m].styleOverrides)return null;const o=a.components[m].styleOverrides,n={};return Object.entries(o).forEach((([t,s])=>{n[t]=f(s,(0,r.A)({},e,{theme:a}))})),g(e,n)})),m&&!C&&i.push((e=>{var a;const o=A((0,r.A)({},e,{defaultTheme:s,themeId:t}));return f({variants:null==o||null==(a=o.components)||null==(a=a[m])?void 0:a.variants},(0,r.A)({},e,{theme:o}))})),w||i.push(l);const d=i.length-o.length;if(Array.isArray(a)&&d>0){const e=new Array(d).fill("");n=[...a,...e],n.raw=[...a.raw,...e]}const c=k(n,...i);return e.muiName&&(c.muiName=e.muiName),c};return k.withConfig&&(R.withConfig=k.withConfig),R}}()},4150:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var r=s(7156),a=s(5292),o=s(8820),n=s(6870),i=s(7211),d=s(9039),c=s(3258),l=s(7859),u=s(8329),h=s(221),m=s(9858),p=s(8979),A=s(4848);function x(){return(0,A.jsx)(r.A,{children:(0,A.jsxs)(a.A,{children:[(0,A.jsx)(l.A,{variant:"h5",component:"div",children:"Acesso r\xe1pido"}),(0,A.jsxs)(o.A,{children:[(0,A.jsx)(n.Ay,{disablePadding:!0,children:(0,A.jsxs)(i.A,{href:"https://www.fct.unesp.br/#!/administracao/graduacao/espaco-do-aluno/",children:[(0,A.jsx)(d.A,{children:(0,A.jsx)(u.A,{})}),(0,A.jsx)(c.A,{primary:"Calend\xe1rio do c\xe2mpus"})]})}),(0,A.jsx)(n.Ay,{disablePadding:!0,children:(0,A.jsxs)(i.A,{href:"https://fct-pp.web.app/",children:[(0,A.jsx)(d.A,{children:(0,A.jsx)(h.A,{})}),(0,A.jsx)(c.A,{primary:"FCT App"})]})}),(0,A.jsx)(n.Ay,{disablePadding:!0,children:(0,A.jsxs)(i.A,{href:"https://cacic-fct.github.io/manual-do-calouro/pagina-do-calouro",children:[(0,A.jsx)(d.A,{children:(0,A.jsx)(m.A,{})}),(0,A.jsx)(c.A,{primary:"P\xe1gina do calouro"})]})}),(0,A.jsx)(n.Ay,{disablePadding:!0,children:(0,A.jsxs)(i.A,{href:"https://drive.google.com/file/d/1IkP7qYwvtdDc9CRiKueyjZ8bESRsDUS5/view",children:[(0,A.jsx)(d.A,{children:(0,A.jsx)(p.A,{})}),(0,A.jsx)(c.A,{primary:"Estatuto do CACiC"})]})})]})]})})}},78:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var r=s(1809),a=s(7859),o=s(6132),n=s(8168),i=s(8587),d=s(6540),c=s(4164),l=s(1311),u=s(3571),h=s(9599),m=s(2858),p=s(4848);const A=["className","component"];var x=s(2067),f=s(8594),v=s(8312);const y=(0,s(7553).A)("MuiBox",["root"]),j=(0,f.A)(),g=function(e={}){const{themeId:t,defaultTheme:s,defaultClassName:r="MuiBox-root",generateClassName:a}=e,o=(0,l.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(u.A);return d.forwardRef((function(e,d){const l=(0,m.A)(s),u=(0,h.A)(e),{className:x,component:f="div"}=u,v=(0,i.A)(u,A);return(0,p.jsx)(o,(0,n.A)({as:f,ref:d,className:(0,c.A)(x,a?a(r):r),theme:t&&l[t]||l},v))}))}({themeId:v.A,defaultTheme:j,defaultClassName:y.root,generateClassName:x.A.generate}),b=g;var C=s(4150);function w(){return(0,p.jsxs)(r.A,{description:"Homepage do CACiC",children:[(0,p.jsxs)("main",{children:[(0,p.jsx)(o.A,{sx:{p:4},maxWidth:"sm",children:(0,p.jsx)(C.default,{})}),(0,p.jsxs)(o.A,{sx:{p:2},maxWidth:"sm",children:[(0,p.jsx)(a.A,{variant:"h5",sx:{py:1},children:"O CACiC"}),(0,p.jsx)("p",{children:"O Centro Acad\xeamico de Ci\xeancia da Computa\xe7\xe3o \xe9 o \xf3rg\xe3o de representa\xe7\xe3o estudantil do curso de Bacharelado em Ci\xeancia da Computa\xe7\xe3o da FCT-Unesp. A organiza\xe7\xe3o defende os interesses e direitos dos alunos. A dire\xe7\xe3o do Centro Acad\xeamico (CA) \xe9 escolhida por meio de elei\xe7\xf5es peri\xf3dicas, entre chapas de alunos do curso."})]}),(0,p.jsx)(o.A,{sx:{p:2},maxWidth:"sm",children:(0,p.jsx)(a.A,{variant:"h5",sx:{py:1},children:"Chapa Ada Lovelace"})})]}),(0,p.jsx)(b,{sx:{py:4}})]})}}}]);