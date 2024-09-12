"use strict";(self.webpackChunkcacic_fct=self.webpackChunkcacic_fct||[]).push([[1555],{93032:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(74848),t=a(28453);const s={title:"Firewall"},i=void 0,o={id:"Recursos/Servidores/FCTDTIWEBXP01/Rede/Firewall",title:"Firewall",description:"Portas abertas",source:"@site/docs/Recursos/Servidores/FCTDTIWEBXP01/Rede/Firewall.md",sourceDirName:"Recursos/Servidores/FCTDTIWEBXP01/Rede",slug:"/Recursos/Servidores/FCTDTIWEBXP01/Rede/Firewall",permalink:"/docs/Recursos/Servidores/FCTDTIWEBXP01/Rede/Firewall",draft:!1,unlisted:!1,editUrl:"https://github.com/cacic-fct/cacic-fct.github.io/tree/main/docs/Recursos/Servidores/FCTDTIWEBXP01/Rede/Firewall.md",tags:[],version:"current",lastUpdatedBy:"Yudi",lastUpdatedAt:1723729674e3,frontMatter:{title:"Firewall"},sidebar:"docs",previous:{title:"DNS",permalink:"/docs/Recursos/Servidores/FCTDTIWEBXP01/Rede/DNS"},next:{title:"Traefik",permalink:"/docs/Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/Traefik"}},d={},c=[{value:"Portas abertas",id:"portas-abertas",level:2},{value:"Tabela de regras",id:"tabela-de-regras",level:2},{value:"Peculiaridades",id:"peculiaridades",level:2}];function l(e){const r={admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"portas-abertas",children:"Portas abertas"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"80 (HTTP) - TCP e UDP"}),"\n",(0,n.jsx)(r.li,{children:"443 (HTTPS) - TCP e UDP"}),"\n",(0,n.jsx)(r.li,{children:"22 (SSH) - TCP - Responde apenas a IPs da Unesp"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"A m\xe1quina n\xe3o deve expor mais nenhuma porta para a internet."}),"\n",(0,n.jsx)(r.h2,{id:"tabela-de-regras",children:"Tabela de regras"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"Chain INPUT (policy DROP)\ntarget     prot opt source               destination\nACCEPT     all  --  anywhere             anywhere\nACCEPT     tcp  --  200.145.0.0/16       anywhere             tcp dpt:ssh\nACCEPT     tcp  --  186.217.0.0/16       anywhere             tcp dpt:ssh\nACCEPT     tcp  --  anywhere             anywhere             tcp dpt:http\nACCEPT     udp  --  anywhere             anywhere             udp dpt:80\nACCEPT     tcp  --  anywhere             anywhere             tcp dpt:https\nACCEPT     udp  --  anywhere             anywhere             udp dpt:https\nACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED\nACCEPT     icmp --  200.145.0.0/16       anywhere             icmp echo-request\nACCEPT     icmp --  186.217.0.0/16       anywhere             icmp echo-request\n"})}),"\n",(0,n.jsxs)(r.admonition,{type:"note",children:[(0,n.jsx)(r.p,{children:"O servidor apenas responde a requisi\xe7\xf5es ICMP (ping) de dentro da Unesp."}),(0,n.jsx)(r.p,{children:"Liberar uma porta no firewall n\xe3o significa que ela estar\xe1 exposta para a internet."})]}),"\n",(0,n.jsx)(r.h2,{id:"peculiaridades",children:"Peculiaridades"}),"\n",(0,n.jsxs)(r.p,{children:["O servidor comunica-se com os dispositivos da intranet da FCT de maneira irrestrita.",(0,n.jsx)(r.br,{}),"\n","Dessa forma, ele pode ser utilizado como load balancer, para redirecionar requisi\xe7\xf5es para servidores sem acesso direto \xe0 internet."]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>i,x:()=>o});var n=a(96540);const t={},s=n.createContext(t);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);