import{j as r,a as i}from"./jsx-runtime-5BUNAZ9W.js";import{B as x}from"./BasicLayout-eTEYz3SQ.js";import{F as _}from"./FullSizeDecorator-iRenWh6T.js";import{M as B,a as P,b as D}from"./MockWindowDecorator-dDuH9j0W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./clsx-Zbgk8kpT.js";function c({message:n,onBack:S}){return r(x,{children:i("div",{className:"flex flex-col gap-4",children:[i("article",{className:"prose lg:prose-xl",children:[r("h3",{className:"text-center",children:"Ops! 😅 "}),r("strong",{children:n??"Something went wrong! 😱"})]}),r("button",{className:"btn btn-primary mt-4",onClick:S,children:"Start over 🦖"})]})})}try{c.displayName="ErrorView",c.__docgenInfo={description:"",displayName:"ErrorView",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},onBack:{defaultValue:null,description:"",name:"onBack",required:!0,type:{name:"() => void"}}}}}catch{}const j={component:c,title:"Views/Error"},t={onBack:()=>console.log("onHome")},o={args:t,decorators:[_]},e={args:t,decorators:[B]},s={args:t,decorators:[P],parameters:{viewport:{defaultViewport:"iphonex"}}},a={args:t,decorators:[D]};var m,p,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: commonProps,
  decorators: [FullSizeDecorator]
} satisfies Story`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,u,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: commonProps,
  decorators: [MockBrowserDecorator]
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,f,k;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: commonProps,
  decorators: [MockPhoneDecorator],
  parameters: {
    viewport: {
      defaultViewport: "iphonex"
    }
  }
} satisfies Story`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var h,M,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: commonProps,
  decorators: [MockWindowDecorator]
} satisfies Story`,...(y=(M=a.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};const q=["Fullscreen","MockBrowser","MockPhone","MockWindow"];export{o as Fullscreen,e as MockBrowser,s as MockPhone,a as MockWindow,q as __namedExportsOrder,j as default};
