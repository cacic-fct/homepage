"use strict";(self.webpackChunkcacic_fct=self.webpackChunkcacic_fct||[]).push([[2655],{29235:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>t,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=a(74848),n=a(28453);const i={title:"Sistema operacional"},r=void 0,d={id:"Recursos/Servidores/FCTDTIWEBXP01/HW e SW/Sistema operacional",title:"Sistema operacional",description:"Especifica\xe7\xf5es gerais",source:"@site/docs/Recursos/Servidores/FCTDTIWEBXP01/HW e SW/Sistema operacional.md",sourceDirName:"Recursos/Servidores/FCTDTIWEBXP01/HW e SW",slug:"/Recursos/Servidores/FCTDTIWEBXP01/HW e SW/Sistema operacional",permalink:"/docs/Recursos/Servidores/FCTDTIWEBXP01/HW e SW/Sistema operacional",draft:!1,unlisted:!1,editUrl:"https://github.com/cacic-fct/cacic-fct.github.io/tree/main/docs/Recursos/Servidores/FCTDTIWEBXP01/HW e SW/Sistema operacional.md",tags:[],version:"current",lastUpdatedBy:"Yudi",lastUpdatedAt:1721664811e3,frontMatter:{title:"Sistema operacional"},sidebar:"docs",previous:{title:"Pacotes",permalink:"/docs/Recursos/Servidores/FCTDTIWEBXP01/HW e SW/Pacotes"},next:{title:"Organiza\xe7\xe3o de arquivos",permalink:"/docs/Recursos/Servidores/FCTDTIWEBXP01/Organiza\xe7\xe3o de arquivos"}},t={},c=[{value:"Especifica\xe7\xf5es gerais",id:"especifica\xe7\xf5es-gerais",level:2},{value:"Usu\xe1rios",id:"usu\xe1rios",level:3},{value:"Pacote Docker",id:"pacote-docker",level:3},{value:"Backup",id:"backup",level:3},{value:"Configura\xe7\xf5es",id:"configura\xe7\xf5es",level:2},{value:"Agendamento de tarefas",id:"agendamento-de-tarefas",level:3},{value:"ZRam",id:"zram",level:3},{value:"/etc/default/zramswap",id:"etcdefaultzramswap",level:4},{value:"Unattended upgrades",id:"unattended-upgrades",level:3},{value:"/etc/apt/apt.conf.d/50unattended-upgrades",id:"etcaptaptconfd50unattended-upgrades",level:4},{value:"<code>sudo systemctl edit apt-daily.timer</code>",id:"sudo-systemctl-edit-apt-dailytimer",level:4},{value:"<code>sudo systemctl edit apt-daily-upgrade.timer</code>",id:"sudo-systemctl-edit-apt-daily-upgradetimer",level:4}];function l(e){const s={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"especifica\xe7\xf5es-gerais",children:"Especifica\xe7\xf5es gerais"}),"\n",(0,o.jsxs)(s.p,{children:["Debian Stable, conforme ",(0,o.jsx)(s.a,{href:"/docs/Recursos/Servidores/Especifica%C3%A7%C3%B5es%20comuns",children:"especifica\xe7\xf5es comuns"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"usu\xe1rios",children:"Usu\xe1rios"}),"\n",(0,o.jsx)(s.p,{children:"Conforme norma da Unesp, cada pessoa possui seu pr\xf3prio usu\xe1rio.*"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"dti (1000)"}),"\n",(0,o.jsx)(s.li,{children:"fernando (1001)"}),"\n",(0,o.jsx)(s.li,{children:"guibatalhoti (1002)"}),"\n",(0,o.jsx)(s.li,{children:"willshobwish (1003)"}),"\n",(0,o.jsx)(s.li,{children:"danielserezane (1004)"}),"\n",(0,o.jsx)(s.li,{children:"renanyudi (1005)"}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"*Configurado pela DTI."}),"\n",(0,o.jsxs)(s.p,{children:["Todos os usu\xe1rios possuem a senha ",(0,o.jsx)(s.code,{children:"unesp#2024"}),", que n\xe3o deve ser alterada."]}),"\n",(0,o.jsxs)(s.p,{children:["Conforme ",(0,o.jsx)(s.a,{href:"https://www2.unesp.br/portal#!/ai/regulamentos-e-normas16359/",children:"normas da Unesp"}),", se o acesso \xe9 remoto, n\xe3o \xe9 permitido login com ",(0,o.jsx)(s.code,{children:"root"}),", nem execu\xe7\xe3o de comandos com ",(0,o.jsx)(s.code,{children:"sudo"})," (permiss\xe3o de root). No entanto, os usu\xe1rios dos estudantes foram adicionados ao grupo ",(0,o.jsx)(s.code,{children:"sudo"})," pela DTI."]}),"\n",(0,o.jsxs)(s.p,{children:["Os usu\xe1rios tamb\xe9m foram adicionados ao grupo ",(0,o.jsx)(s.code,{children:"docker"}),", para n\xe3o ser necess\xe1rio executar os comandos com ",(0,o.jsx)(s.code,{children:"sudo"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"pacote-docker",children:"Pacote Docker"}),"\n",(0,o.jsx)(s.p,{children:"Enquanto n\xe3o for disponibilizado um pacote Docker com o Compose v2 no reposit\xf3rio do Debian, deve-se instala-lo diretamente do reposit\xf3rio oficial do Docker."}),"\n",(0,o.jsx)(s.h3,{id:"backup",children:"Backup"}),"\n",(0,o.jsx)(s.p,{children:"Enquanto uma solu\xe7\xe3o de backup permanente n\xe3o \xe9 implementada, o backup \xe9 feito manualmente."}),"\n",(0,o.jsxs)(s.p,{children:["No diret\xf3rio ",(0,o.jsx)(s.code,{children:"/home/shared"}),", os arquivos ",(0,o.jsx)(s.code,{children:"*-backup.zpaq"})," s\xe3o incrementados com os comandos:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:'sudo zpaqfranz a "/home/shared/docker-compose-backup.???.zpaq" /home/shared/docker-compose -index "/home/shared/docker-compose-backup.000.zpaq" -filelist\n\nsudo zpaqfranz a "/home/shared/docker-data-backup.???.zpaq" /home/shared/docker-data -index "/home/shared/docker-data-backup.000.zpaq" -filelist\n'})}),"\n",(0,o.jsx)(s.p,{children:"Estes comandos deve ser executados com permiss\xf5es elevadas, por conta das permiss\xf5es dos arquivos do Docker."}),"\n",(0,o.jsx)(s.p,{children:"N\xe3o delete os arquivos de n\xfameros inferiores (antigos), pois eles s\xe3o necess\xe1rios para a restaura\xe7\xe3o."}),"\n",(0,o.jsxs)(s.p,{children:["Os arquivo s\xe3o, ent\xe3o, movidos para o servidor de ",(0,o.jsx)(s.a,{href:"https://github.com/Yudi",children:"Yudi"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"configura\xe7\xf5es",children:"Configura\xe7\xf5es"}),"\n",(0,o.jsx)(s.h3,{id:"agendamento-de-tarefas",children:"Agendamento de tarefas"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"23:00"})," - In\xedcio do backup"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"02:00\u201302:15"})," - Atualiza\xe7\xe3o da lista de pacotes"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"03:00"})," - Atualiza\xe7\xe3o dos pacotes"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"05:00"})," - Reinicializa\xe7\xe3o do sistema, se necess\xe1rio"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Os intervalos consideram que o servidor demora bastante para executar as tarefas."}),"\n",(0,o.jsx)(s.h3,{id:"zram",children:"ZRam"}),"\n",(0,o.jsxs)(s.p,{children:["Para que o sistema utilize o ZRam corretamente, a parti\xe7\xe3o de swap deve possuir a op\xe7\xe3o ",(0,o.jsx)(s.code,{children:"pri=2"})," no lugar do ",(0,o.jsx)(s.code,{children:"sw"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Refer\xeancia:",(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"https://makedebianfunagainandlearnhowtodoothercoolstufftoo.computer/doku.php?id=start:zramswap",children:"https://makedebianfunagainandlearnhowtodoothercoolstufftoo.computer/doku.php?id=start:zramswap"}),(0,o.jsx)(s.br,{}),"\n","Acesso em 2024-07-14."]}),"\n",(0,o.jsx)(s.h4,{id:"etcdefaultzramswap",children:"/etc/default/zramswap"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"# Compression algorithm selection\n# speed: lz4 > zstd > lzo\n# compression: zstd > lzo > lz4\n# This is not inclusive of all that is available in latest kernels\n# See /sys/block/zram0/comp_algorithm (when zram module is loaded) to see\n# what is currently set and available for your kernel[1]\n# [1]  https://github.com/torvalds/linux/blob/master/Documentation/blockdev/zram.txt#L86\nALGO=lz4\n\n# Specifies the amount of RAM that should be used for zram\n# based on a percentage the total amount of available memory\n# This takes precedence and overrides SIZE below\n#PERCENT=50\n\n# Specifies a static amount of RAM that should be used for\n# the ZRAM devices, this is in MiB\nSIZE=4096\n\n# Specifies the priority for the swap devices, see swapon(2)\n# for more details. Higher number = higher priority\n# This should probably be higher than hdd/ssd swaps.\nPRIORITY=100\n"})}),"\n",(0,o.jsx)(s.h3,{id:"unattended-upgrades",children:"Unattended upgrades"}),"\n",(0,o.jsx)(s.h4,{id:"etcaptaptconfd50unattended-upgrades",children:"/etc/apt/apt.conf.d/50unattended-upgrades"}),"\n",(0,o.jsx)(s.p,{children:"Al\xe9m das configura\xe7\xf5es padr\xe3o, foi adicionado o reposit\xf3rio do Docker e configurado o hor\xe1rio de reinicializa\xe7\xe3o."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'Unattended-Upgrade::Origins-Pattern {\n  ...\n        "origin=Debian,codename=${distro_codename},label=Debian";\n        "origin=Debian,codename=${distro_codename},label=Debian-Security";\n        "origin=Debian,codename=${distro_codename}-security,label=Debian-Security";\n        "origin=Docker,codename=${distro_codename}/stable,archive=${distro_codename},label=Docker,component=stable";\n  ...\n}\n\nUnattended-Upgrade::Automatic-Reboot-Time "05:00";\n'})}),"\n",(0,o.jsx)(s.h4,{id:"sudo-systemctl-edit-apt-dailytimer",children:(0,o.jsx)(s.code,{children:"sudo systemctl edit apt-daily.timer"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"[Timer]\nOnCalendar=\nOnCalendar=02:00\nRandomizedDelaySec=15m\n"})}),"\n",(0,o.jsx)(s.h4,{id:"sudo-systemctl-edit-apt-daily-upgradetimer",children:(0,o.jsx)(s.code,{children:"sudo systemctl edit apt-daily-upgrade.timer"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"[Timer]\nOnCalendar=\nOnCalendar=03:00\nRandomizedDelaySec=0\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Refer\xeancia:",(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"https://unix.stackexchange.com/a/541431",children:"https://unix.stackexchange.com/a/541431"}),(0,o.jsx)(s.br,{}),"\n","Acesso em 2024-07-16."]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>d});var o=a(96540);const n={},i=o.createContext(n);function r(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);