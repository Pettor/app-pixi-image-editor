import{j as c}from"./jsx-runtime-5BUNAZ9W.js";import{B as k}from"./BasicLayout-eTEYz3SQ.js";import{F as D}from"./FullSizeDecorator-iRenWh6T.js";import{M as h,a as P,b as S}from"./MockWindowDecorator-dDuH9j0W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./clsx-Zbgk8kpT.js";function x(){return c(k,{container:!0,children:c("div",{className:"flex h-full w-full items-center justify-center",children:c("span",{className:"loading loading-ring loading-lg"})})})}const L={component:x,title:"Views/Loading"},a={onDrop:()=>console.log("Dropped")},o={args:a,decorators:[D]},r={args:a,decorators:[h]},e={args:a,decorators:[P],parameters:{viewport:{defaultViewport:"iphonex"}}},s={args:a,decorators:[S]};var t,n,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: commonProps,
  decorators: [FullSizeDecorator]
} satisfies Story`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: commonProps,
  decorators: [MockBrowserDecorator]
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,u,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: commonProps,
  decorators: [MockPhoneDecorator],
  parameters: {
    viewport: {
      defaultViewport: "iphonex"
    }
  }
} satisfies Story`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,w,M;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: commonProps,
  decorators: [MockWindowDecorator]
} satisfies Story`,...(M=(w=s.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const z=["Fullscreen","MockBrowser","MockPhone","MockWindow"];export{o as Fullscreen,r as MockBrowser,e as MockPhone,s as MockWindow,z as __namedExportsOrder,L as default};
