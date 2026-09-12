import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./react-DEECRbw-.js";import{n as i,t as a,v as o,y as s}from"./ToolbarToolsController-aiCHwJs3.js";function c(){return(0,l.jsx)(r,{children:(0,l.jsx)(a,{})})}var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),s(),i(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={component:o,title:`Editor/Toolbar/Tools`,tags:[`autodocs`]},f={lock:!1,showFitScreen:!0,onToggleFilterMenu:u(),onSwapLock:u(),onRotate:u(),onFlip:u(),onAdjustZoom:u()},p={args:f},m={args:{...f,lock:!0}},h={args:{...f,showFitScreen:!1}},g={args:f,play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/lock image to center/i})),await t.click(e.getByRole(`button`,{name:/actual size/i})),await t.click(e.getByRole(`button`,{name:/rotate 90° left/i})),await t.click(e.getByRole(`button`,{name:/rotate 90° right/i})),await t.click(e.getByRole(`button`,{name:/flip vertical/i})),await t.click(e.getByRole(`button`,{name:/flip horizontal/i})),await t.click(e.getByRole(`button`,{name:/filters/i}))}},_={args:{...f,lock:!0},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/unlock image/i}))}},v={args:{...f,showFitScreen:!1},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/fit to window/i}))}},y={render:()=>(0,l.jsx)(c,{}),play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/rotate 90° left/i})),await t.click(e.getByRole(`button`,{name:/rotate 90° right/i})),await t.click(e.getByRole(`button`,{name:/flip vertical/i})),await t.click(e.getByRole(`button`,{name:/flip horizontal/i})),await t.click(e.getByRole(`button`,{name:/filters/i})),await t.click(e.getByRole(`button`,{name:/unlock image|lock image to center/i})),await t.click(e.getByRole(`button`,{name:/fit to window|actual size/i}))}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    lock: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    showFitScreen: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /lock image to center/i
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: /actual size/i
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: /rotate 90° left/i
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: /rotate 90° right/i
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: /flip vertical/i
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: /flip horizontal/i
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: /filters/i
    }));
  }
} satisfies Story`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    lock: true
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /unlock image/i
    }));
  }
} satisfies Story`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    showFitScreen: false
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /fit to window/i
    }));
  }
} satisfies Story`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ToolbarToolsControllerWrapper />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole("button", {
      name: /rotate 90° left/i
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: /rotate 90° right/i
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: /flip vertical/i
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: /flip horizontal/i
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: /filters/i
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: /unlock image|lock image to center/i
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: /fit to window|actual size/i
    }));
  }
} satisfies StoryObj<typeof ToolbarToolsControllerWrapper>`,...y.parameters?.docs?.source}}},b=[`Default`,`Locked`,`WithFitToWindow`,`WithAllInteractions`,`WithLockedInteractions`,`WithFitToWindowInteraction`,`ControllerDefault`]})))()}x();export{y as ControllerDefault,p as Default,m as Locked,g as WithAllInteractions,h as WithFitToWindow,v as WithFitToWindowInteraction,_ as WithLockedInteractions,b as __namedExportsOrder,d as default};