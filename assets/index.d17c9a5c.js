import{d as n,c as e,a as t,w as o,b as s,p as a,e as r,f as l,r as i,o as d,g as c,F as u,h as g,i as p,t as h,j as m,l as x,k as b,m as f,n as y,q as w,s as v,u as k,v as I,x as _,y as z,z as C,A as D,B as T,C as j,D as S,E as O,G as A,H as M,I as L,J as U,K as B,L as E}from"./vendor.43ea136f.js";const N=()=>{const n=document.getElementById("download");n&&window.scrollTo({top:n.offsetTop-100,behavior:"smooth"})},W={urls:{baseUrl:"/yukino-app/",guides:"/yukino-app/guides/index.html",discord:"/yukino-app/discord.html"}};var G=n({data:()=>({guidesUrl:W.urls.guides,discordInvite:W.urls.discord}),mounted(){document.addEventListener("scroll",(()=>{const n=document.getElementById("nav");document.body.scrollTop>600||document.documentElement.scrollTop>600?null==n||n.classList.add("active"):null==n||n.classList.remove("active")}))},methods:{scrollToDownloads:N}});const H=s();a("data-v-157122ee");const P={class:"fixed top-0 left-0 right-0 bg-white shadow-md z-50",id:"nav"},Y={class:"\n                flex flex-col\n                md:flex-row\n                justify-around\n                items-center\n                gap-4\n                px-5\n                py-3\n            "},q=t("div",null,[t("img",{class:"w-10",src:"/yukino-app/icon.png",alt:"Logo"})],-1),F={class:"\n                    flex flex-row\n                    justify-center\n                    items-center\n                    gap-2\n                    flex-wrap\n                "},R=r(" Download "),$={class:"\n                        bg-black\n                        hover:bg-gray-800\n                        text-white\n                        px-4\n                        py-1.5\n                        rounded\n                        transition\n                        duration-200\n                    ",href:"https://github.com/zyrouge/yukino-app/",target:"_blank"},V={class:"mr-1"},J=r(" GitHub"),K={class:"mr-1"},Z=r(" Guide"),Q={class:"\n                        bg-orange-600\n                        hover:bg-orange-700\n                        text-white\n                        px-4\n                        py-1.5\n                        rounded\n                        transition\n                        duration-200\n                    ",href:"https://patreon.com/zyrouge",target:"_blank"},X={class:"mr-1"},nn=r(" Patreon"),en={class:"mr-1"},tn=r(" Discord");l();const on=H(((n,s,a,r,l,c)=>{const u=i("Icon");return d(),e("div",P,[t("div",Y,[q,t("div",F,[t("button",{class:"\n                        focus:outline-none\n                        bg-indigo-500\n                        hover:bg-indigo-600\n                        text-white\n                        px-4\n                        py-1.5\n                        rounded\n                        transition\n                        duration-200\n                    ",onClick:s[1]||(s[1]=o((e=>n.scrollToDownloads()),["prevent"]))},[t(u,{class:"mr-1",icon:"save"}),R]),t("a",$,[t("span",V,[t(u,{icon:["fab","github"]})]),J]),t("a",{class:"\n                        bg-yellow-500\n                        hover:bg-yellow-600\n                        text-white\n                        px-4\n                        py-1.5\n                        rounded\n                        transition\n                        duration-200\n                    ",href:n.guidesUrl,target:"_blank"},[t("span",K,[t(u,{icon:"book-open"})]),Z],8,["href"]),t("a",Q,[t("span",X,[t(u,{icon:["fab","patreon"]})]),nn]),t("a",{class:"\n                        bg-blue-700\n                        hover:bg-blue-800\n                        text-white\n                        px-5\n                        py-2\n                        rounded-lg\n                        shadow-lg\n                        transition\n                        duration-300\n                    ",href:n.discordInvite,target:"_blank"},[t("span",en,[t(u,{icon:["fab","discord"]})]),tn],8,["href"])])])])}));G.render=on,G.__scopeId="data-v-157122ee";var sn=n({props:{images:{type:Array,required:!0},imgClassNames:{type:Array,required:!0}},data:()=>({currentIndex:0,currentImage:null}),mounted(){this.updateImage(),c((()=>this.currentIndex),(()=>this.updateImage()))},methods:{updateImage(){var n;this.currentImage=(null==(n=this.images)?void 0:n[this.currentIndex])||null},changeIndex(n){const e=this.currentIndex+n;this.currentIndex=this.images[e]?e:n>0?0:this.images.length-1}}});const an={class:"flex flex-row justify-center items-center gap-6 relative"},rn={class:"mt-8 flex flex-row justify-center items-center flex-wrap gap-2"};sn.render=function(n,s,a,r,l,c){const p=i("Icon");return d(),e(u,null,[t("div",an,[t("button",{class:"\n                focus:outline-none\n                text-3xl\n                md:text-5xl\n                opacity-50\n                hover:opacity-100\n                transition\n                duration-200\n                absolute\n                md:block\n                left-0\n                bg-gray-100 bg-opacity-75\n                md:bg-opacity-0\n                pl-2\n                pr-3\n                py-2\n                rounded-r\n            ",onClick:s[1]||(s[1]=o((e=>n.changeIndex(-1)),["prevent"]))},[t(p,{icon:"chevron-left"})]),(d(!0),e(u,null,g(n.images,((t,o)=>(d(),e("img",{class:["flex-none",o!==n.currentIndex&&"hidden",...n.imgClassNames],src:t,alt:`Image ${o+1}`},null,10,["src","alt"])))),256)),t("button",{class:"\n                focus:outline-none\n                text-3xl\n                md:text-5xl\n                opacity-50\n                hover:opacity-100\n                transition\n                duration-200\n                absolute\n                md:block\n                right-0\n                bg-gray-100 bg-opacity-75\n                md:bg-opacity-0\n                pl-3\n                pr-2\n                py-2\n                rounded-l\n            ",onClick:s[2]||(s[2]=o((e=>n.changeIndex(1)),["prevent"]))},[t(p,{icon:"chevron-right"})])]),t("div",rn,[(d(!0),e(u,null,g(Array(n.images.length),((t,o)=>(d(),e("button",{class:["focus:outline-none w-2 h-2 rounded-full",o===n.currentIndex?"bg-gray-800":"bg-gray-400"],onClick:e=>n.currentIndex=o},null,10,["onClick"])))),256))])],64)};var ln=n({name:"App",components:{NavBar:G,SlideShow:sn},data:()=>({screenshots:["https://github.com/zyrouge/yukino-app/raw/next/screenshots/home.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/search.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/anime.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/episodes.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/sources.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/player.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/manga.png"],features:[{icon:"compact-disc",headline:"Ad-free",text:"No more pop-ups! Watch anime with no ad interruption.",bgcolor:"bg-red-500",textcolor:"text-red-500"},{icon:"map-marker-alt",headline:"Source",text:"Scrapes data from multiple sites including 4Anime, GogoAnime, MangaFox, MangaDex, etc.",bgcolor:"bg-purple-500",textcolor:"text-purple-500"},{icon:"book-open",headline:"Manga",text:"Search up your favorite manga and start reading it right away!",bgcolor:"bg-green-500",textcolor:"text-green-500"},{icon:"heart",headline:"Open-sourced",text:"Source code available publicly, licensed under MIT.",bgcolor:"bg-pink-500",textcolor:"text-pink-500"},{icon:"stream",headline:"UI",text:"Simple, consistent and user-friendly interface!",bgcolor:"bg-yellow-500",textcolor:"text-yellow-500"},{icon:"moon",headline:"Theme",text:"Has Light and Dark mode to protect your eyes!",bgcolor:"bg-gray-900",textcolor:"text-gray-500"},{icon:["fab","discord"],headline:"Discord RPC",text:"Let your friends know what you are watching!",bgcolor:"bg-blue-700",textcolor:"text-blue-700"},{icon:"bolt",headline:"Cross Platform",text:"Available for Windows, MacOS, Linux and Android! Built on top of Vue, Electron and Capacitor.",bgcolor:"bg-blue-400",textcolor:"text-blue-400"}],releases:{web:"https://github.com/zyrouge/yukino-app/releases",all:"https://api.github.com/repos/zyrouge/yukino-app/releases"},downloads:[],guidesUrl:W.urls.guides,discordInvite:W.urls.discord,isOpenedIndex:0}),mounted(){this.getReleases()},methods:{async getReleases(){try{const n=await fetch(this.releases.all).then((n=>n.json()));n.filter((n=>!n.draft)).sort(((n,e)=>new Date(n.updated_at).getTime()-new Date(e.updated_at).getTime())).slice(0,5).forEach((n=>{const e=n.tag_name,t=n.assets.find((n=>n.browser_download_url.endsWith(".exe"))),o=n.assets.find((n=>n.browser_download_url.endsWith(".AppImage"))),s=n.assets.find((n=>n.browser_download_url.endsWith(".dmg"))),a=n.assets.find((n=>n.browser_download_url.endsWith(".apk")));if(e){const n={version:e,platforms:{}};t&&(n.platforms.windows={url:t.browser_download_url,size:t.size}),o&&(n.platforms.linux={url:o.browser_download_url,size:o.size}),s&&(n.platforms.mac={url:s.browser_download_url,size:s.size}),a&&(n.platforms.android={url:a.browser_download_url,size:a.size}),this.downloads.push(n)}}))}catch(n){console.error(n)}},setOpened(n){if(this.isOpenedIndex===n)return this.isOpenedIndex=null;this.isOpenedIndex=n},getMb:n=>(n/1e6).toFixed(2),getIcon(n){switch(n){case"windows":return["fab","windows"];case"linux":return["fab","linux"];case"mac":return["fab","apple"];case"android":return["fab","android"];default:return""}},scrollToDownloads:N}});const dn={class:"font-sans text-white"},cn={class:"\n                    bg-gradient-to-b\n                    from-purple-500\n                    to-indigo-500\n                    text-center\n                    px-10\n                    md:px-20\n                    py-20\n                    md:py-40\n                "},un=t("div",{class:"text-5xl md:text-7xl font-bold"},"Yukino",-1),gn=t("p",{class:"mt-8"}," Stream anime or read manga ad-free from multiple sources. ",-1),pn={class:"\n                        mt-8\n                        flex flex-row flex-wrap\n                        justify-center\n                        items-center\n                        gap-2\n                    "},hn={class:"mr-1"},mn=r(" Download "),xn={class:"\n                            bg-black\n                            hover:bg-gray-800\n                            px-5\n                            py-2\n                            rounded-lg\n                            shadow-lg\n                            transition\n                            duration-300\n                        ",href:"https://github.com/zyrouge/yukino-app/",target:"_blank"},bn={class:"mr-1"},fn=r(" GitHub"),yn={class:"mr-1"},wn=r(" Guide"),vn={class:"\n                            bg-orange-600\n                            hover:bg-orange-700\n                            px-5\n                            py-2\n                            rounded-lg\n                            shadow-lg\n                            transition\n                            duration-300\n                        ",href:"https://patreon.com/zyrouge",target:"_blank"},kn={class:"mr-1"},In=r(" Patreon"),_n={class:"mr-1"},zn=r(" Discord"),Cn={class:"text-gray-700 text-center mx-8 md:mx-20 my-16"},Dn=t("p",{class:"text-lg"},[r(" The project's name "),t("strong",null,"Yukino"),r(" meaning "),t("strong",null,"Snow"),r(" named after the character "),t("strong",null,"Yukino Yukinoshita"),r(" from the anime "),t("strong",null,"Yahari Ore no Seishun Love Comedy wa Machigatteiru"),r(". ")],-1),Tn=t("p",{class:"mt-10 text-red-500 font-bold"}," We do not support piracy nor run/serve any illegal or copyrighted contents, everything is acquired from third-party sources. The developer of this application does not have any affiliation with any of the third-party sources. ",-1),jn=t("hr",{class:"my-10"},null,-1),Sn=t("h1",{class:"text-2xl font-bold"},"Highlights",-1),On={class:"\n                        mt-4\n                        grid grid-cols-1\n                        md:grid-cols-2\n                        items-center\n                        gap-4\n                    "},An={class:"col-span-1"},Mn={class:"\n                                bg-gray-100\n                                rounded\n                                text-lg\n                                flex flex-col\n                                md:flex-row\n                                justify-center\n                                items-center\n                                gap-2\n                                md:gap-5\n                                px-5\n                                py-4\n                            "},Ln={class:"\n                                    flex-grow\n                                    text-center\n                                    md:text-left\n                                    font-bold\n                                    md:leading-snug\n                                "},Un=t("hr",{class:"my-10"},null,-1),Bn=t("h1",{class:"text-2xl font-bold"},"Preview",-1),En={class:"mt-4"},Nn=t("hr",{class:"my-10"},null,-1),Wn=t("h1",{class:"text-2xl font-bold",id:"download"},"Download",-1),Gn={class:"mt-4"},Hn={class:"mr-1.5 text-xs opacity-75"},Pn={key:0,class:"\n                            flex flex-col\n                            lg:flex-row\n                            justify-center\n                            items-center\n                            gap-3\n                            mt-2\n                        "},Yn={class:"mr-1"},qn=r(" Download for "),Fn={class:"capitalize"},Rn={class:"text-xs opacity-75"},$n={class:"mt-4"},Vn={class:"mt-1"},Jn=r(" Having trouble installing the app? Checkout our "),Kn=r(" page! "),Zn=p('<hr class="my-10"><div><h1 class="text-2xl font-bold">Contributing</h1><p class="mt-4"> Please read the <a class="\n                            text-indigo-500\n                            hover:text-indigo-600\n                            font-bold\n                            transition\n                            duration-300\n                        " href="https://github.com/zyrouge/yukino-app/#readme" target="_blank">readme</a> for information about contributing! </p></div><hr class="my-10">',3),Qn=t("h1",{class:"text-2xl font-bold"},"Need help?",-1),Xn={class:"mt-4"},ne=r(" Use our "),ee=r(" or join our "),te=r(" for support! "),oe={class:"bg-indigo-500 text-center text-white px-10 py-10"},se=t("p",null,[t("strong",null,"Yukino"),r(" is licensed under "),t("strong",null,"MIT"),r(". ")],-1),ae={class:"mt-1"},re=r(" Made with "),le=r(" by "),ie=t("a",{class:"font-bold",href:"https://zyrouge.is-a.dev",target:"_blank"},"Zyrouge",-1),de=r(". ");ln.render=function(n,s,a,l,c,p){const x=i("NavBar"),b=i("Icon"),f=i("SlideShow");return d(),e("main",null,[t(x),t("article",dn,[t("div",cn,[un,gn,t("div",pn,[t("button",{class:"\n                            focus:outline-none\n                            bg-white\n                            hover:bg-gray-200\n                            text-black\n                            px-5\n                            py-2\n                            rounded-lg\n                            shadow-lg\n                            transition\n                            duration-300\n                        ",onClick:s[1]||(s[1]=o((e=>n.scrollToDownloads()),["prevent"]))},[t("span",hn,[t(b,{icon:"save"})]),mn]),t("a",xn,[t("span",bn,[t(b,{icon:["fab","github"]})]),fn]),t("a",{class:"\n                            bg-yellow-500\n                            hover:bg-yellow-600\n                            px-5\n                            py-2\n                            rounded-lg\n                            shadow-lg\n                            transition\n                            duration-300\n                        ",href:n.guidesUrl,target:"_blank"},[t("span",yn,[t(b,{icon:"book-open"})]),wn],8,["href"]),t("a",vn,[t("span",kn,[t(b,{icon:["fab","patreon"]})]),In]),t("a",{class:"\n                            bg-blue-700\n                            hover:bg-blue-800\n                            px-5\n                            py-2\n                            rounded-lg\n                            shadow-lg\n                            transition\n                            duration-300\n                        ",href:n.discordInvite,target:"_blank"},[t("span",_n,[t(b,{icon:["fab","discord"]})]),zn],8,["href"])])])]),t("div",Cn,[Dn,Tn,jn,t("div",null,[Sn,t("div",On,[(d(!0),e(u,null,g(n.features,(n=>(d(),e("div",An,[t("div",Mn,[t("div",{class:`flex-none rounded text-white w-12 h-10 flex justify-center items-center ${n.bgcolor}`},[t(b,{icon:n.icon},null,8,["icon"])],2),t("div",Ln,[t("p",{class:`text-xs ${n.textcolor}`},h(n.headline),3),t("p",null,h(n.text),1)])])])))),256))])]),Un,t("div",null,[Bn,t("div",En,[t(f,{images:n.screenshots,imgClassNames:["rounded","w-full","md:w-5/6","shadow-md"]},null,8,["images"])])]),Nn,t("div",null,[Wn,(d(!0),e(u,null,g(n.downloads,((o,s)=>(d(),e("div",Gn,[t("p",{class:"font-bold cursor-pointer",onClick:e=>n.setOpened(s)},[t("span",Hn,[n.isOpenedIndex===s?(d(),e(b,{key:0,icon:"angle-double-down"})):(d(),e(b,{key:1,icon:"angle-double-right"}))]),r(h(o.version),1)],8,["onClick"]),n.isOpenedIndex===s?(d(),e("div",Pn,[(d(!0),e(u,null,g(Object.entries(o.platforms),(([o,s])=>(d(),e("a",{class:"\n                                bg-indigo-500\n                                hover:bg-indigo-600\n                                text-white\n                                px-5\n                                py-2\n                                rounded-lg\n                                shadow-lg\n                                transition\n                                duration-300\n                            ",href:s.url,target:"_blank"},[t("p",null,[t("span",Yn,[t(b,{icon:n.getIcon(o)},null,8,["icon"])]),qn,t("span",Fn,h(o),1)]),t("p",Rn,h(n.getMb(s.size))+" MB ",1)],8,["href"])))),256))])):m("",!0)])))),256)),t("div",$n,[t("a",{class:"\n                            text-indigo-500\n                            hover:text-indigo-600\n                            font-bold\n                            transition\n                            duration-300\n                        ",href:n.releases.web,target:"_blank"},"View all releases",8,["href"]),t("p",Vn,[Jn,t("a",{class:"\n                                text-indigo-500\n                                hover:text-indigo-600\n                                font-bold\n                                transition\n                                duration-300\n                            ",href:n.guidesUrl,target:"_blank"},"guides",8,["href"]),Kn])])]),Zn,t("div",null,[Qn,t("p",Xn,[ne,t("a",{class:"\n                            text-indigo-500\n                            hover:text-indigo-600\n                            font-bold\n                            transition\n                            duration-300\n                        ",href:n.guidesUrl},"guides",8,["href"]),ee,t("a",{class:"\n                            text-indigo-500\n                            hover:text-indigo-600\n                            font-bold\n                            transition\n                            duration-300\n                        ",href:n.discordInvite,target:"_blank"},"discord ",8,["href"]),te])])]),t("div",oe,[se,t("p",ae,[re,t(b,{icon:"heart"}),le,ie,de])])])};x.add(b,f,y,w,v,k,I,_,z,C,D,T,j,S,O,A,M,L,U),B(ln).component("Icon",E).mount("#app");
