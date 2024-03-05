import{j as e,F as i,a as d}from"./jsx-runtime-5BUNAZ9W.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";function t({open:o,onUpdate:l}){return e(i,{children:o&&e("div",{className:"toast toast-center toast-bottom z-50",children:e("div",{className:"alert alert-info shadow-lg",children:d("div",{className:"flex flex-1 flex-row items-center gap-4",children:[e("span",{children:"A new version is available"}),e("button",{className:"btn btn-accent",onClick:l,children:"Update"})]})})})})}try{t.displayName="PwaUpdateDialog",t.__docgenInfo={description:"",displayName:"PwaUpdateDialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onUpdate:{defaultValue:null,description:"",name:"onUpdate",required:!0,type:{name:"() => void"}}}}}catch{}const u={component:t,title:"Library/Pwa"},a={args:{open:!0,onUpdate:()=>{console.log("Refresh")}}};var r,n,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    open: true,
    onUpdate: () => {
      console.log("Refresh");
    }
  }
} satisfies Story`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const g=["UpdateDialog"];export{a as UpdateDialog,g as __namedExportsOrder,u as default};
