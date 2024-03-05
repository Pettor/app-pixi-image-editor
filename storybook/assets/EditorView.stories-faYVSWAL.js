import{j as t}from"./jsx-runtime-5BUNAZ9W.js";import{e as M,c as k}from"./card-image-sXcsDwx_.js";import{B as y}from"./BasicLayout-eTEYz3SQ.js";import{F as V}from"./FullSizeDecorator-iRenWh6T.js";import{M as _,a as C,b as D}from"./MockWindowDecorator-dDuH9j0W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./AppDrawer-_bMC5P3c.js";import"./ThemeSwitch-nkAPJMzx.js";import"./Logo320-SruUjmkH.js";import"./useOnClickOutside-PpctMmkJ.js";import"./FilterDrawer-wi5G2SWr.js";import"./XMarkIcon-O8nD9AeD.js";import"./index-tvtfaFq4.js";import"./clsx-Zbgk8kpT.js";function n(c){return t(y,{children:t(M,{...c})})}try{n.displayName="EditorView",n.__docgenInfo={description:"",displayName:"EditorView",props:{url:{defaultValue:null,description:"",name:"url",required:!0,type:{name:"string"}},appdrawerProps:{defaultValue:null,description:"",name:"appdrawerProps",required:!0,type:{name:'Omit<AppDrawerProps, "open" | "onClose">'}},LoaderComponent:{defaultValue:null,description:"",name:"LoaderComponent",required:!0,type:{name:"FC"}},ErrorComponent:{defaultValue:null,description:"",name:"ErrorComponent",required:!0,type:{name:"FC"}}}}}catch{}const U={component:n,title:"Views/Editor"},s={url:k,appdrawerProps:{themeSwitchProps:{mode:"light",onSwitch:()=>console.log("Switched")},onNewImage:()=>console.log("onNewImage"),onSaveImage:()=>console.log("onSaveImage")},ErrorComponent:()=>t("div",{children:"Error"}),LoaderComponent:()=>t("div",{children:"Loading"})},r={args:s,decorators:[V]},o={args:s,decorators:[_]},e={args:s,decorators:[C],parameters:{viewport:{defaultViewport:"iphonex"}}},a={args:s,decorators:[D]};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: commonProps,
  decorators: [FullSizeDecorator]
} satisfies Story`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,l,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: commonProps,
  decorators: [MockBrowserDecorator]
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,w,f;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: commonProps,
  decorators: [MockPhoneDecorator],
  parameters: {
    viewport: {
      defaultViewport: "iphonex"
    }
  }
} satisfies Story`,...(f=(w=e.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var h,P,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: commonProps,
  decorators: [MockWindowDecorator]
} satisfies Story`,...(S=(P=a.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const G=["Fullscreen","MockBrowser","MockPhone","MockWindow"];export{r as Fullscreen,o as MockBrowser,e as MockPhone,a as MockWindow,G as __namedExportsOrder,U as default};
