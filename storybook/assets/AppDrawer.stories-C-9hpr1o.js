import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./react-DEECRbw-.js";import{a as i,n as a,o,t as s}from"./AppDrawerController-BB5F1dsA.js";import{n as c,t as l}from"./AppMenuAtoms-zU7ztz7n.js";import{n as u,t as d}from"./HydrateAtoms-DQQnBHtS.js";function f(){return(0,p.jsx)(r,{children:(0,p.jsx)(d,{atomValues:[[l,!0]],children:(0,p.jsx)(s,{themeSwitchProps:{mode:`light`,onSwitch:m()},onNewImage:m(),onSaveImage:m()})})})}var p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),c(),o(),a(),u(),p=t(),{fn:m}=__STORYBOOK_MODULE_TEST__,{expect:h}=__STORYBOOK_MODULE_TEST__,g={component:i,title:`Editor/App Drawer`},_={open:!0,themeSwitchProps:{mode:`light`,onSwitch:m()},onClose:m(),onNewImage:m(),onSaveImage:m()},v={args:_},y={args:{..._,open:!1}},b={args:_,play:async({canvas:e,userEvent:t})=>{await t.click(e.getByTestId(`editor__drawer-new-image`)),await t.click(e.getByTestId(`editor__drawer-save-image`))}},x={render:()=>(0,p.jsx)(f,{}),play:async({canvas:e,userEvent:t})=>{await h(e.getByTestId(`editor__drawer-new-image`)).toBeInTheDocument(),await t.click(e.getByTestId(`editor__drawer-new-image`))}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    open: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId("editor__drawer-new-image"));
    await userEvent.click(canvas.getByTestId("editor__drawer-save-image"));
  }
} satisfies Story`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <AppDrawerControllerOpen />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByTestId("editor__drawer-new-image")).toBeInTheDocument();
    await userEvent.click(canvas.getByTestId("editor__drawer-new-image"));
  }
} satisfies StoryObj<typeof AppDrawerControllerOpen>`,...x.parameters?.docs?.source}}},S=[`Open`,`Closed`,`WithInteractions`,`ControllerOpen`]})))()}C();export{y as Closed,x as ControllerOpen,v as Open,b as WithInteractions,S as __namedExportsOrder,g as default};