"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23168],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33126:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"basics",title:"Learn the Basics"},p=void 0,s={unversionedId:"getting-started/basics",id:"getting-started/basics",isDocsHomePage:!1,title:"Learn the Basics",description:"This guide will help you learn and get information of basic refine concepts. To learn more about refine features, we recommend that you read the Overview and this guide before starting development.",source:"@site/docs/getting-started/learn-basics.md",sourceDirName:"getting-started",slug:"/getting-started/basics",permalink:"/docs/next/getting-started/basics",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/getting-started/learn-basics.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1645533926,formattedLastUpdatedAt:"2/22/2022",frontMatter:{id:"basics",title:"Learn the Basics"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/next/getting-started/overview"},next:{title:"Comparison | Refine vs React-Admin vs AdminBro vs Retool",permalink:"/docs/next/comparison"}},u=[{value:"Getting Help",id:"getting-help",children:[],level:2},{value:"Refine Packages",id:"refine-packages",children:[],level:2},{value:"Refine 3rd Party Integration Examples",id:"refine-3rd-party-integration-examples",children:[{value:"Roadmap",id:"roadmap",children:[],level:3}],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will help you learn and get information of basic ",(0,i.kt)("strong",{parentName:"p"},"refine")," concepts. To learn more about ",(0,i.kt)("strong",{parentName:"p"},"refine")," features, we recommend that you read the ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/getting-started/overview/"},(0,i.kt)("inlineCode",{parentName:"a"},"Overview"))," and this guide before starting development."),(0,i.kt)("h2",{id:"getting-help"},"Getting Help"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," has a very friendly community, we are always happy to help you get started:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.com/invite/UuU3XCc3J5"},"Join the Discord Community")," \u2013 it is the easiest way to get help, all questions are usually answered in about 30 minutes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/discussions"},"GitHub Discussions")," \u2013 ask anything about the project or give feedback.")),(0,i.kt)("h2",{id:"refine-packages"},"Refine Packages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-core")," - collection of 20+ React hooks for State, Networking, Authentication, Authorization, i18n and Live/Realtime Management.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UI Framework Packages:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-antd")," - a fully featured ",(0,i.kt)("a",{parentName:"li",href:"https://ant.design/"},"Ant Design")," System UI Framework. Includes +20 Table, Form, Select, Menu, Layout, Notification and CRUD components and hooks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-mui")," (Coming soon!) - a fully featured ",(0,i.kt)("a",{parentName:"li",href:"https://mui.com/"},"Material UI")," Framework.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://refine.dev/docs/core/providers/data-provider/"},"Data Provider")," Packages:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-simple-rest")," - a fully featured REST API Data Provider"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-graphql")," - a fully featured GraphQL Data Provider"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-nestjsx-crud")," - a fully featured ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nestjsx/crud"},"NestJs Crud")," Data Provider"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-strapi")," - a fully featured ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/strapi/strapi"},"Strapi")," Data Provider"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-strapi-v4")," - a fully featured ",(0,i.kt)("a",{parentName:"li",href:"https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html"},"Strapi-v4")," Data Provider"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-strapi-graphql")," - a fully featured ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/strapi/strapi/tree/master/packages/plugins/graphql"},"Strapi-GraphQL")," Data Provider"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-supabase")," - a fully featured ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/supabase/supabase"},"Supabase")," Data Provider. Also supported Supabase Realtime feature."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-hasura")," - a fully featured ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hasura/graphql-engine"},"Hasura GraphQL")," Data Provider"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-appwrite")," - a fully featured ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/appwrite/appwrite"},"Appwrite")," Data Provider. Also supported Appwrite Realtime feature."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-airtable")," - a fully featured ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Airtable/airtable.js"},"Airtable")," Data Provider"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-altogic")," - a fully featured ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/altogic/altogic-js"},"Altogic")," Data Provider")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://refine.dev/docs/core/providers/router-provider/"},"Router Provider")," Packages")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-react-router")," - Router Provider for ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/remix-run/react-router"},"React Router(v5)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-nextjs-router")," - Router Provider for ",(0,i.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/api-reference/next/router#userouter"},"Next.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-react-location")," - Router Provider for ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tannerlinsley/react-location"},"React Location"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://refine.dev/docs/core/providers/live-provider/"},"Live Provider")," Packages")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pankod/refine-ably")," - ",(0,i.kt)("a",{parentName:"li",href:"https://ably.com/"},"Ably")," Live/Realtime Provider")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u2764\ufe0f Community  Packages:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rturan29/refine-firebase"},(0,i.kt)("inlineCode",{parentName:"a"},"refine-firebase"))," - a fully featured ",(0,i.kt)("a",{parentName:"li",href:"https://firebase.google.com/"},"Firebase")," Data Provider by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rturan29"},"rturan29")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tspvivek/refine-directus"},(0,i.kt)("inlineCode",{parentName:"a"},"@tspvivek/refine-directus"))," - a fully featured ",(0,i.kt)("a",{parentName:"li",href:"https://directus.io/"},"Directus")," Data Provider by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tspvivek"},"tspvivek")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/miyavsu-limited/data-provider-customizer"},(0,i.kt)("inlineCode",{parentName:"a"},"data-provider-customizer"))," - Customize your data provider by mixing it with different data providers/data methods by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/miyavsu-limited"},"miyavsu-limited"))),(0,i.kt)("h2",{id:"refine-3rd-party-integration-examples"},"Refine 3rd Party Integration Examples"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://refine.dev/docs/core/providers/i18n-provider/"},"i18n Provider"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"React - i18next")," - ",(0,i.kt)("a",{parentName:"li",href:"https://refine.dev/docs/examples/i18n/i18n-react/"},"Example")," - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/blob/master/examples/i18n/react/src/App.tsx#L17"},"Source Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Next.js - next-i18next")," - ",(0,i.kt)("a",{parentName:"li",href:"https://refine.dev/docs/examples/i18n/i18n-nextjs/"},"Example")," - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/blob/master/examples/i18n/nextjs/pages/_app.tsx#L20"},"Source Code"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://refine.dev/docs/api-references/providers/accessControl-provider/"},"Access Control Provider"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Casbin")," - ",(0,i.kt)("a",{parentName:"li",href:"https://refine.dev/docs/examples/access-control/casbin/"},"Example")," - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/blob/master/examples/accessControl/casbin/src/App.tsx#L27"},"Source Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Cerbos")," - ",(0,i.kt)("a",{parentName:"li",href:"https://refine.dev/docs/examples/access-control/cerbos/"},"Example")," - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/blob/master/examples/accessControl/cerbos/src/App.tsx#L37"},"Source Code"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://refine.dev/docs/api-references/providers/auth-provider/"},"Auth Provider"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Auth0")," - ",(0,i.kt)("a",{parentName:"li",href:"https://refine.dev/docs/examples/auth-provider/auth0/"},"Example")," - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/blob/master/examples/authProvider/auth0/src/App.tsx#L23"},"Source Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Google Auth")," - ",(0,i.kt)("a",{parentName:"li",href:"https://refine.dev/docs/examples/auth-provider/google-auth/"},"Example")," - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/blob/master/examples/authProvider/googleLogin/src/App.tsx#L23"},"Source Code"))),(0,i.kt)("h3",{id:"roadmap"},"Roadmap"),(0,i.kt)("p",null,"You can find Refine's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/projects/1"},"Public Roadmap here!")),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/next/comparison"},"Comparison | Refine vs React-Admin vs AdminBro vs Retool ","\u2192"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/next/ui-frameworks/antd/tutorial"},"Create React App + Ant Design Tutorial ","\u2192"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/next/core/tutorial"},"Next.js + Tailwind Tutorial ","\u2192"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/next/guides-and-concepts/upload/multipart-upload"},"Check the Guides & Concept section to learn generic solutions to common problems ","\u2192"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/next/examples/tutorial"},"Check example section for code snippets ","\u2192")))))}m.isMDXComponent=!0}}]);