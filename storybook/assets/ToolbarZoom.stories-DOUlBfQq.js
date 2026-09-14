import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./react-DEECRbw-.js";import{i,n as a,r as o,t as s}from"./ToolbarZoomController-DD9c1O9f.js";function c(){return(0,l.jsx)(r,{children:(0,l.jsx)(s,{})})}var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i(),a(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,{expect:d}=__STORYBOOK_MODULE_TEST__,f={component:o,title:`Editor/Toolbar/Zoom`,tags:[`autodocs`]},p={zoom:100,onZoomIn:u(),onZoomOut:u(),onResetZoom:u()},m={args:p},h={args:{...p,zoom:200}},g={args:p,play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/zoom in/i})),await d(p.onZoomIn).toHaveBeenCalled(),await t.click(e.getByRole(`button`,{name:/zoom out/i})),await d(p.onZoomOut).toHaveBeenCalled(),await t.click(e.getByTestId(`toolbar-zoom__reset`)),await d(p.onResetZoom).toHaveBeenCalled()}},_={render:()=>(0,l.jsx)(c,{}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/zoom in/i})),await t.click(e.getByRole(`button`,{name:/zoom out/i})),await t.click(e.getByTestId(`toolbar-zoom__reset`))}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    zoom: 200
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /zoom in/i
    }));
    await expect(defaultArgs.onZoomIn).toHaveBeenCalled();
    await userEvent.click(canvas.getByRole("button", {
      name: /zoom out/i
    }));
    await expect(defaultArgs.onZoomOut).toHaveBeenCalled();
    await userEvent.click(canvas.getByTestId("toolbar-zoom__reset"));
    await expect(defaultArgs.onResetZoom).toHaveBeenCalled();
  }
} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ToolbarZoomControllerWrapper />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /zoom in/i
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: /zoom out/i
    }));
    await userEvent.click(canvas.getByTestId("toolbar-zoom__reset"));
  }
} satisfies StoryObj<typeof ToolbarZoomControllerWrapper>`,..._.parameters?.docs?.source}}},v=[`Default`,`ZoomedIn`,`WithInteractions`,`ControllerDefault`]})))()}y();export{_ as ControllerDefault,m as Default,g as WithInteractions,h as ZoomedIn,v as __namedExportsOrder,f as default};