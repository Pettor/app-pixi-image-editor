import{j as r,a as g}from"./jsx-runtime-5BUNAZ9W.js";import{B as x}from"./BasicLayout-eTEYz3SQ.js";import{F as y}from"./FullSizeDecorator-iRenWh6T.js";import{M as S,a as _,b as F}from"./MockWindowDecorator-dDuH9j0W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./clsx-Zbgk8kpT.js";function s({onBack:c}){return r(x,{container:!0,children:g("div",{className:"flex flex-col items-center gap-4",children:[r("article",{className:"prose max-w-64 text-pretty p-4 lg:prose-xl lg:max-w-full",children:r("strong",{children:"Could not find the page you were looking for! 🕵️"})}),r("button",{className:"btn btn-primary mt-4 w-48",onClick:c,children:"Start over 🦖"})]})})}try{s.displayName="NotFoundView",s.__docgenInfo={description:"",displayName:"NotFoundView",props:{onBack:{defaultValue:null,description:"",name:"onBack",required:!0,type:{name:"() => void"}}}}}catch{}const W={component:s,title:"Views/Not Found"},o={decorators:[y]},e={decorators:[S]},a={decorators:[_],parameters:{viewport:{defaultViewport:"iphonex"}}},t={decorators:[F]};var n,i,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [FullSizeDecorator]
} satisfies Story`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [MockBrowserDecorator]
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,w,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [MockPhoneDecorator],
  parameters: {
    viewport: {
      defaultViewport: "iphonex"
    }
  }
} satisfies Story`,...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var k,h,M;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [MockWindowDecorator]
} satisfies Story`,...(M=(h=t.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};const j=["Fullscreen","MockBrowser","MockPhone","MockWindow"];export{o as Fullscreen,e as MockBrowser,a as MockPhone,t as MockWindow,j as __namedExportsOrder,W as default};
