import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./react-DEECRbw-.js";import{i,n as a,r as o,t as s}from"./ToolbarMenuController-CsGy0PN8.js";function c(){return(0,l.jsx)(r,{children:(0,l.jsx)(s,{})})}var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i(),a(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,{expect:d}=__STORYBOOK_MODULE_TEST__,f={component:o,title:`Editor/Toolbar/Menu`,tags:[`autodocs`]},p={args:{onToggle:u()}},m={args:{onToggle:u()},play:async({canvas:e,userEvent:t})=>{let n=e.getByTestId(`editor__menu-button`);await t.click(n),await d(p.args?.onToggle).not.toHaveBeenCalled(),await d(n).toBeInTheDocument()}},h={render:()=>(0,l.jsx)(c,{}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByTestId(`editor__menu-button`)),await t.click(e.getByTestId(`editor__menu-button`))}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onToggle: fn()
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    onToggle: fn()
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const button = canvas.getByTestId("editor__menu-button");
    await userEvent.click(button);
    await expect(Default.args?.onToggle).not.toHaveBeenCalled();
    await expect(button).toBeInTheDocument();
  }
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ToolbarMenuControllerWrapper />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId("editor__menu-button"));
    await userEvent.click(canvas.getByTestId("editor__menu-button"));
  }
} satisfies StoryObj<typeof ToolbarMenuControllerWrapper>`,...h.parameters?.docs?.source}}},g=[`Default`,`WithInteraction`,`ControllerDefault`]})))()}_();export{h as ControllerDefault,p as Default,m as WithInteraction,g as __namedExportsOrder,f as default};