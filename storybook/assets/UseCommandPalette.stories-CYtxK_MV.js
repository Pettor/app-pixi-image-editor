import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./react-DEECRbw-.js";import{n as i,t as a}from"./UseCommandPalette-FC7uM8ps.js";function o(){let{isOpen:e,open:t,close:n,toggle:r}=i();return(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`span`,{"data-testid":`is-open`,children:String(e)}),(0,c.jsx)(`button`,{"data-testid":`btn-open`,onClick:t,children:`Open`}),(0,c.jsx)(`button`,{"data-testid":`btn-close`,onClick:n,children:`Close`}),(0,c.jsx)(`button`,{"data-testid":`btn-toggle`,onClick:r,children:`Toggle`})]})}function s(){return(0,c.jsx)(r,{children:(0,c.jsx)(o,{})})}var c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),a(),c=t(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={component:s,title:`Actions/Command Palette/Use Command Palette`,tags:[`autodocs`]},d={play:async({canvas:e})=>{await l(e.getByTestId(`is-open`)).toHaveTextContent(`false`)}},f={play:async({canvas:e,userEvent:t})=>{await t.click(e.getByTestId(`btn-open`)),await l(e.getByTestId(`is-open`)).toHaveTextContent(`true`),await t.click(e.getByTestId(`btn-close`)),await l(e.getByTestId(`is-open`)).toHaveTextContent(`false`)}},p={play:async({canvas:e,userEvent:t})=>{await l(e.getByTestId(`is-open`)).toHaveTextContent(`false`),await t.click(e.getByTestId(`btn-toggle`)),await l(e.getByTestId(`is-open`)).toHaveTextContent(`true`),await t.click(e.getByTestId(`btn-toggle`)),await l(e.getByTestId(`is-open`)).toHaveTextContent(`false`)}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId("is-open")).toHaveTextContent("false");
  }
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId("btn-open"));
    await expect(canvas.getByTestId("is-open")).toHaveTextContent("true");
    await userEvent.click(canvas.getByTestId("btn-close"));
    await expect(canvas.getByTestId("is-open")).toHaveTextContent("false");
  }
} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByTestId("is-open")).toHaveTextContent("false");
    await userEvent.click(canvas.getByTestId("btn-toggle"));
    await expect(canvas.getByTestId("is-open")).toHaveTextContent("true");
    await userEvent.click(canvas.getByTestId("btn-toggle"));
    await expect(canvas.getByTestId("is-open")).toHaveTextContent("false");
  }
} satisfies Story`,...p.parameters?.docs?.source}}},m=[`Default`,`OpenAndClose`,`ToggleState`]})))()}h();export{d as Default,f as OpenAndClose,p as ToggleState,m as __namedExportsOrder,u as default};