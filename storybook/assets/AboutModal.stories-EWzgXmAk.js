import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./AboutModal-DwrXsvRX.js";var r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),{expect:r,fn:i,userEvent:a,within:o}=__STORYBOOK_MODULE_TEST__,s={component:n,title:`Actions/About Modal`,parameters:{layout:`fullscreen`}},c={isOpen:!0,onClose:()=>{}},l={args:c,play:async({canvasElement:e})=>{let t=o(e.ownerDocument.body);r(await t.findByText(`Pixi Image Editor`)).toBeTruthy(),r(t.getByTestId(`about-modal__version`)).toBeTruthy()}},u={args:{...c,isOpen:!1}},d={args:{...c,onClose:i()},play:async({canvasElement:e,args:t})=>{let n=await o(e.ownerDocument.body).findByRole(`button`,{name:`Close`});await a.click(n),r(t.onClose).toHaveBeenCalledOnce()}},f={args:c,globals:{viewport:{value:`iphonex`}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    expect(await canvas.findByText("Pixi Image Editor")).toBeTruthy();
    expect(canvas.getByTestId("about-modal__version")).toBeTruthy();
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    isOpen: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onClose: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const closeBtn = await canvas.findByRole("button", {
      name: "Close"
    });
    await userEvent.click(closeBtn);
    expect(args.onClose).toHaveBeenCalledOnce();
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  globals: {
    viewport: {
      value: "iphonex"
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Open`,`Closed`,`CloseButton`,`Phone`]})))()}m();export{d as CloseButton,u as Closed,l as Open,f as Phone,p as __namedExportsOrder,s as default};