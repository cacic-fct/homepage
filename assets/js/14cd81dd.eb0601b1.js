"use strict";(self.webpackChunkcacic_fct=self.webpackChunkcacic_fct||[]).push([[2252],{4297:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>W,contentTitle:()=>I,default:()=>T,frontMatter:()=>B,metadata:()=>D,toc:()=>O});var o=r(4848),n=r(8453),a=r(6540),i=r(7156),s=r(5292),l=r(2453),c=r(4164),d=r(406),p=r(5659),u=r(4899),v=r(8466),h=r(1848),m=r(4675),g=r(2637),x=r(8660),y=r(5669),b=r(8413),f=r(1609);function S(e){return(0,f.Ay)("MuiLink",e)}const A=(0,b.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var j=r(2423);const w=({theme:e,ownerState:t})=>{const r=t.color,o=(0,j.Yn)(e,`palette.${r}`,!1)||t.color,n=(0,j.Yn)(e,`palette.${r}Channel`);return"vars"in e&&n?`rgba(${n} / 0.4)`:(0,d.X4)(o,.4)},C={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},k=(0,h.Ay)(l.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`underline${(0,v.A)(r.underline)}`],"button"===r.component&&t.button]}})((0,g.A)((({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:e,ownerState:t})=>"always"===e&&"inherit"!==t.color,style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter((0,x.A)()).map((([t])=>({props:{underline:"always",color:t},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[t].mainChannel} / 0.4)`:(0,d.X4)(e.palette[t].main,.4)}}))),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,d.X4)(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:(0,d.X4)(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${A.focusVisible}`]:{outline:"auto"}}}]})))),z=a.forwardRef((function(e,t){const r=(0,y.b)({props:e,name:"MuiLink"}),n=(0,m.A)(),{className:i,color:s="primary",component:l="a",onBlur:d,onFocus:h,TypographyClasses:g,underline:x="always",variant:b="inherit",sx:f,...A}=r,[j,z]=a.useState(!1),R={...r,color:s,component:l,focusVisible:j,underline:x,variant:b},$=(e=>{const{classes:t,component:r,focusVisible:o,underline:n}=e,a={root:["root",`underline${(0,v.A)(n)}`,"button"===r&&"button",o&&"focusVisible"]};return(0,p.A)(a,S,t)})(R);return(0,o.jsx)(k,{color:s,className:(0,c.A)($.root,i),classes:g,component:l,onBlur:e=>{(0,u.A)(e.target)||z(!1),d&&d(e)},onFocus:e=>{(0,u.A)(e.target)&&z(!0),h&&h(e)},ref:t,ownerState:R,variant:b,...A,sx:[...void 0===C[s]?[{color:s}]:[],...Array.isArray(f)?f:[f]],style:{...A.style,..."always"===x&&"inherit"!==s&&!C[s]&&{"--Link-underlineColor":w({theme:n,ownerState:R})}}})}));var R=r(7512);const $=()=>{const[e,t]=(0,a.useState)(null),[r,n]=(0,a.useState)(null),[c,d]=(0,a.useState)(null),[p,u]=(0,a.useState)(null),[v,h]=(0,a.useState)(!1),m=(e,r)=>{switch(e){case"statusPageAccessible":t(r);break;case"sshAccessible":n(r);break;case"pingServerWorks":d(r);break;case"pingDtiServersWorks":u(r)}};(0,a.useEffect)((()=>{h(!!(r||c||p||!1===p))}),[r,c,p]);const g=()=>{t(null),n(null),d(null),u(null),h(!1)};return(0,o.jsx)(i.A,{variant:"outlined",style:{marginBottom:"10px"},children:(0,o.jsxs)(s.A,{children:[null===e&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l.A,{variant:"h6",children:["A"," ",(0,o.jsx)(z,{href:"https://status.cacic.dev.br",target:"_blank",children:"p\xe1gina de estado dos servi\xe7os"})," ","est\xe1 acess\xedvel?"]}),(0,o.jsx)("br",{}),(0,o.jsx)(R.A,{variant:"contained",onClick:()=>m("statusPageAccessible",!0),children:"Sim"}),(0,o.jsx)(R.A,{variant:"contained",onClick:()=>m("statusPageAccessible",!1),children:"N\xe3o"})]}),null!==e&&null===r&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.A,{variant:"body1",children:e?"A p\xe1gina de estado dos servi\xe7os do servidor est\xe1 acess\xedvel.":"A p\xe1gina de estado dos servi\xe7os do servidor n\xe3o est\xe1 acess\xedvel."}),(0,o.jsx)(l.A,{variant:"h6",children:"O servidor responde ao acesso SSH?"}),"Conecte-se diretamente ao servidor, sem passar pelo proxy.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("code",{children:" ssh <user>@<dom\xednio/ip> "}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(R.A,{variant:"contained",onClick:()=>m("sshAccessible",!0),children:"Sim"}),(0,o.jsx)(R.A,{variant:"contained",onClick:()=>m("sshAccessible",!1),children:"N\xe3o"}),(0,o.jsx)(R.A,{variant:"contained",onClick:g,children:"Reiniciar"})]}),null!==e&&!1===r&&null===c&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l.A,{variant:"body1",children:[e?"A p\xe1gina de estado dos servi\xe7os do servidor est\xe1 acess\xedvel.":"A p\xe1gina de estado dos servi\xe7os do servidor n\xe3o est\xe1 acess\xedvel.",(0,o.jsx)("br",{}),"O servidor n\xe3o est\xe1 acess\xedvel por SSH."]}),(0,o.jsx)(l.A,{variant:"h6",children:"O servidor responde a pings?"}),(0,o.jsx)("code",{children:" ping <dom\xednio/ip> "}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(R.A,{variant:"contained",onClick:()=>m("pingServerWorks",!0),children:"Sim"}),(0,o.jsx)(R.A,{variant:"contained",onClick:()=>m("pingServerWorks",!1),children:"N\xe3o"}),(0,o.jsx)(R.A,{variant:"contained",onClick:g,children:"Reiniciar"})]}),null!==e&&!1===r&&!1===c&&null===p&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l.A,{variant:"body1",children:[e?"A p\xe1gina de estado dos servi\xe7os do servidor est\xe1 acess\xedvel.":"A p\xe1gina de estado dos servi\xe7os do servidor n\xe3o est\xe1 acess\xedvel.",(0,o.jsx)("br",{}),"O servidor n\xe3o est\xe1 acess\xedvel por SSH.",(0,o.jsx)("br",{}),"O servidor n\xe3o responde a pings."]}),(0,o.jsxs)(l.A,{variant:"h6",children:[(0,o.jsx)("i",{children:"Toda"})," a infraestrutura de rede da DTI responde a pings?"]}),(0,o.jsx)("code",{children:"ping fct1-pp.net.unesp.br"}),(0,o.jsx)("br",{}),(0,o.jsx)("code",{children:"ping pprudente.fct.unesp.br"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(R.A,{variant:"contained",onClick:()=>m("pingDtiServersWorks",!0),children:"Sim"}),(0,o.jsx)(R.A,{variant:"contained",onClick:()=>m("pingDtiServersWorks",!1),children:"N\xe3o"}),(0,o.jsx)(R.A,{variant:"contained",onClick:g,children:"Reiniciar"})]}),v&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l.A,{variant:"body1",children:[null!==e&&(0,o.jsx)("p",{children:e?"A p\xe1gina de estado dos servi\xe7os do servidor est\xe1 acess\xedvel.":"A p\xe1gina de estado dos servi\xe7os do servidor n\xe3o est\xe1 acess\xedvel."}),null!==r&&(0,o.jsx)("p",{children:r?"O servidor est\xe1 acess\xedvel por SSH.":"O servidor n\xe3o est\xe1 acess\xedvel por SSH."}),null!==c&&(0,o.jsx)("p",{children:c?"O servidor responde a pings.":"O servidor n\xe3o responde a pings."}),null!==p&&(0,o.jsx)("p",{children:p?"A infraestrutura da DTI responde a pings.":"A infraestrutura da DTI n\xe3o responde a pings."})]}),(0,o.jsx)(l.A,{variant:"h6",children:"Recomenda\xe7\xe3o"}),(0,o.jsx)(l.A,{variant:"body1",children:r?e?"Fa\xe7a login por SSH e reinicie os servi\xe7os afetados. N\xe3o entre em contato com a DTI.":"Fa\xe7a login por SSH e inicie o authentik e o uptime-kuma - ele auxiliar\xe1 a identificar outros servi\xe7os que est\xe3o off-line, para que voc\xea possa reinici\xe1-los. N\xe3o entre em contato com a DTI.":c?"O servidor responde a pings. Pode ser que o servidor esteja reiniciando. Aguarde at\xe9 30 minutos e tente o acesso SSH novamente. Se o problema persistir, pode ser que o OpenSSH esteja configurado incorretamente ou que a porta 22 tenha sido bloqueada. Entre em contato com a DTI.":p?"Pode ser que o servidor esteja reiniciando. Aguarde at\xe9 30 minutos e tente o acesso SSH novamente. Se o problema persistir, entre em contato com a DTI.":!1===p?"Aguarde a solu\xe7\xe3o do problema pela DTI. Entre em contato caso esteja demorando muito.":"Ocorreu um erro na l\xf3gica do resultado."}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(R.A,{variant:"contained",onClick:g,children:"Reiniciar"})]})]})})},B={title:"Downtime"},I=void 0,D={id:"Recursos/Servidores/Downtime",title:"Downtime",description:"Intencional",source:"@site/docs/Recursos/Servidores/Downtime.mdx",sourceDirName:"Recursos/Servidores",slug:"/Recursos/Servidores/Downtime",permalink:"/docs/Recursos/Servidores/Downtime",draft:!1,unlisted:!1,editUrl:"https://github.com/cacic-fct/cacic-fct.github.io/tree/main/docs/Recursos/Servidores/Downtime.mdx",tags:[],version:"current",lastUpdatedBy:"Yudi",lastUpdatedAt:1721664811e3,frontMatter:{title:"Downtime"},sidebar:"docs",previous:{title:"Conven\xe7\xe3o de nomenclatura",permalink:"/docs/Recursos/Servidores/Conven\xe7\xe3o de nomenclatura"},next:{title:"Especifica\xe7\xf5es comuns",permalink:"/docs/Recursos/Servidores/Especifica\xe7\xf5es comuns"}},W={},O=[{value:"Intencional",id:"intencional",level:2},{value:"N\xe3o intencional",id:"n\xe3o-intencional",level:2}];function M(e){const t={a:"a",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"intencional",children:"Intencional"}),"\n",(0,o.jsx)(t.p,{children:"Downtimes prolongados dever\xe3o ser notificados na p\xe1gina de estado dos servi\xe7os."}),"\n",(0,o.jsxs)(t.p,{children:["Acesse o ",(0,o.jsx)(t.a,{href:"https://status.cacic.dev.br/dashboard",children:"painel da p\xe1gina de estado dos servi\xe7os"})," e clique no avatar no canto superior direito para acessar o menu de manuten\xe7\xe3o."]}),"\n",(0,o.jsx)(t.h2,{id:"n\xe3o-intencional",children:"N\xe3o intencional"}),"\n",(0,o.jsx)(t.p,{children:"Responda \xe0s perguntas abaixo para descobrir o que fazer."}),"\n",(0,o.jsx)($,{})]})}function T(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(M,{...e})}):M(e)}},7512:(e,t,r)=>{r.d(t,{A:()=>k});var o=r(6540),n=r(4164),a=r(7379),i=r(5659),s=r(406),l=r(3169),c=r(1848),d=r(2637),p=r(5669),u=r(2228),v=r(8466),h=r(8660),m=r(8413),g=r(1609);function x(e){return(0,g.Ay)("MuiButton",e)}const y=(0,m.A)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const b=o.createContext({});const f=o.createContext(void 0);var S=r(4848);const A=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],j=(0,c.Ay)(u.A,{shouldForwardProp:e=>(0,l.A)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,v.A)(r.color)}`],t[`size${(0,v.A)(r.size)}`],t[`${r.variant}Size${(0,v.A)(r.size)}`],"inherit"===r.color&&t.colorInherit,r.disableElevation&&t.disableElevation,r.fullWidth&&t.fullWidth]}})((0,d.A)((({theme:e})=>{const t="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],r="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return{...e.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${y.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(e.vars||e).shadows[2],"&:hover":{boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2]}},"&:active":{boxShadow:(e.vars||e).shadows[8]},[`&.${y.focusVisible}`]:{boxShadow:(e.vars||e).shadows[6]},[`&.${y.disabled}`]:{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${y.disabled}`]:{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(e.palette).filter((0,h.A)(["dark","contrastText"])).map((([t])=>({props:{color:t},style:{"--variant-textColor":(e.vars||e).palette[t].main,"--variant-outlinedColor":(e.vars||e).palette[t].main,"--variant-outlinedBorder":e.vars?`rgba(${e.vars.palette[t].mainChannel} / 0.5)`:(0,s.X4)(e.palette[t].main,.5),"--variant-containedColor":(e.vars||e).palette[t].contrastText,"--variant-containedBg":(e.vars||e).palette[t].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(e.vars||e).palette[t].dark,"--variant-textBg":e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.X4)(e.palette[t].main,e.palette.action.hoverOpacity),"--variant-outlinedBorder":(e.vars||e).palette[t].main,"--variant-outlinedBg":e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.X4)(e.palette[t].main,e.palette.action.hoverOpacity)}}}}))),{props:{color:"inherit"},style:{"--variant-containedColor":e.vars?e.vars.palette.text.primary:e.palette.getContrastText?.(t),"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,"--variant-textBg":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.X4)(e.palette.text.primary,e.palette.action.hoverOpacity),"--variant-outlinedBg":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.X4)(e.palette.text.primary,e.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${y.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${y.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}}))),w=(0,c.Ay)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.startIcon,t[`iconSize${(0,v.A)(r.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...A]}),C=(0,c.Ay)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.endIcon,t[`iconSize${(0,v.A)(r.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...A]}),k=o.forwardRef((function(e,t){const r=o.useContext(b),s=o.useContext(f),l=(0,a.A)(r,e),c=(0,p.b)({props:l,name:"MuiButton"}),{children:d,color:u="primary",component:h="button",className:m,disabled:g=!1,disableElevation:y=!1,disableFocusRipple:A=!1,endIcon:k,focusVisibleClassName:z,fullWidth:R=!1,size:$="medium",startIcon:B,type:I,variant:D="text",...W}=c,O={...c,color:u,component:h,disabled:g,disableElevation:y,disableFocusRipple:A,fullWidth:R,size:$,type:I,variant:D},M=(e=>{const{color:t,disableElevation:r,fullWidth:o,size:n,variant:a,classes:s}=e,l={root:["root",a,`${a}${(0,v.A)(t)}`,`size${(0,v.A)(n)}`,`${a}Size${(0,v.A)(n)}`,`color${(0,v.A)(t)}`,r&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,v.A)(n)}`],endIcon:["icon","endIcon",`iconSize${(0,v.A)(n)}`]},c=(0,i.A)(l,x,s);return{...s,...c}})(O),T=B&&(0,S.jsx)(w,{className:M.startIcon,ownerState:O,children:B}),E=k&&(0,S.jsx)(C,{className:M.endIcon,ownerState:O,children:k}),N=s||"";return(0,S.jsxs)(j,{ownerState:O,className:(0,n.A)(r.className,M.root,m,N),component:h,disabled:g,focusRipple:!A,focusVisibleClassName:(0,n.A)(M.focusVisible,z),ref:t,type:I,...W,classes:M,children:[T,d,E]})}))},5669:(e,t,r)=>{r.d(t,{b:()=>n});r(6540);var o=r(257);r(4848);function n(e){return(0,o.b)(e)}},2453:(e,t,r)=>{r.d(t,{A:()=>y});var o=r(6540),n=r(4164),a=r(5659),i=r(7955),s=r(4848);var l=r(1848),c=r(2637),d=r(5669),p=r(8466),u=r(8660),v=r(8651);const h={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},m=i.A,g=(0,l.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,p.A)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((0,c.A)((({theme:e})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter((([e,t])=>"inherit"!==e&&t&&"object"==typeof t)).map((([e,t])=>({props:{variant:e},style:t}))),...Object.entries(e.palette).filter((0,u.A)()).map((([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))),...Object.entries(e.palette?.text||{}).filter((([,e])=>"string"==typeof e)).map((([t])=>({props:{color:`text${(0,p.A)(t)}`},style:{color:(e.vars||e).palette.text[t]}}))),{props:({ownerState:e})=>"inherit"!==e.align,style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:e})=>e.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:e})=>e.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:e})=>e.paragraph,style:{marginBottom:16}}]})))),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y=o.forwardRef((function(e,t){const{color:r,...o}=(0,d.b)({props:e,name:"MuiTypography"}),i=m({...o,...!h[r]&&{color:r}}),{align:l="inherit",className:c,component:u,gutterBottom:y=!1,noWrap:b=!1,paragraph:f=!1,variant:S="body1",variantMapping:A=x,...j}=i,w={...i,align:l,color:r,className:c,component:u,gutterBottom:y,noWrap:b,paragraph:f,variant:S,variantMapping:A},C=u||(f?"p":A[S]||x[S])||"span",k=(e=>{const{align:t,gutterBottom:r,noWrap:o,paragraph:n,variant:i,classes:s}=e,l={root:["root",i,"inherit"!==e.align&&`align${(0,p.A)(t)}`,r&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return(0,a.A)(l,v.y,s)})(w);return(0,s.jsx)(g,{as:C,ref:t,className:(0,n.A)(k.root,c),...j,ownerState:w,style:{..."inherit"!==l&&{"--Typography-textAlign":l},...j.style}})}))},8651:(e,t,r)=>{r.d(t,{A:()=>i,y:()=>a});var o=r(8413),n=r(1609);function a(e){return(0,n.Ay)("MuiTypography",e)}const i=(0,o.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"])},8660:(e,t,r)=>{function o(e=[]){return([,t])=>t&&function(e,t=[]){if(!function(e){return"string"==typeof e.main}(e))return!1;for(const r of t)if(!e.hasOwnProperty(r)||"string"!=typeof e[r])return!1;return!0}(t,e)}r.d(t,{A:()=>o})},2637:(e,t,r)=>{r.d(t,{A:()=>n});const o={theme:void 0};function n(e){let t,r;return n=>{let a=t;return void 0!==a&&n.theme===r||(o.theme=n.theme,a=e(o),t=a,r=n.theme),a}}},7955:(e,t,r)=>{r.d(t,{A:()=>i});var o=r(1317),n=r(5081);const a=e=>{const t={systemProps:{},otherProps:{}},r=e?.theme?.unstable_sxConfig??n.A;return Object.keys(e).forEach((o=>{r[o]?t.systemProps[o]=e[o]:t.otherProps[o]=e[o]})),t};function i(e){const{sx:t,...r}=e,{systemProps:n,otherProps:i}=a(r);let s;return s=Array.isArray(t)?[n,...t]:"function"==typeof t?(...e)=>{const r=t(...e);return(0,o.Q)(r)?{...n,...r}:n}:{...n,...t},{...i,sx:s}}},8413:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(1609);function n(e,t,r="Mui"){const n={};return t.forEach((t=>{n[t]=(0,o.Ay)(e,t,r)})),n}},3910:(e,t,r)=>{r.d(t,{A:()=>n});var o=r(6540);function n(...e){return o.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{!function(e,t){"function"==typeof e?e(t):e&&(e.current=t)}(e,t)}))}),e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var o=r(6540);const n={},a=o.createContext(n);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);