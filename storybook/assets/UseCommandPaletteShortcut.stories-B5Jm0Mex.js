import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./react-DEECRbw-.js";import{n as i,t as a}from"./UseCommandPalette-FC7uM8ps.js";import{n as o,t as s}from"./UseCommandPaletteShortcut-Dq1xCy7r.js";function c(){let{isOpen:e}=i();return o(),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`span`,{"data-testid":`is-open`,children:String(e)}),(0,u.jsx)(`button`,{"data-testid":`btn`,children:`Focusable`})]})}function l(){return(0,u.jsx)(r,{children:(0,u.jsx)(c,{})})}var u,d,f,p,m,h;function g(){return(g=e((()=>{n(),a(),s(),u=t(),{expect:d}=__STORYBOOK_MODULE_TEST__,f={component:l,title:`Actions/Command Palette/Use Command Palette Shortcut`,tags:[`autodocs`]},p={play:async({canvas:e})=>{await d(e.getByTestId(`is-open`)).toHaveTextContent(`false`)}},m={play:async({canvas:e,userEvent:t})=>{await d(e.getByTestId(`is-open`)).toHaveTextContent(`false`),await t.click(e.getByTestId(`btn`)),await t.keyboard(`{Control>}k{/Control}`),await d(e.getByTestId(`is-open`)).toHaveTextContent(`true`),await t.keyboard(`{Control>}k{/Control}`),await d(e.getByTestId(`is-open`)).toHaveTextContent(`false`)}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId("is-open")).toHaveTextContent("false");
  }
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByTestId("is-open")).toHaveTextContent("false");
    await userEvent.click(canvas.getByTestId("btn"));
    await userEvent.keyboard("{Control>}k{/Control}");
    await expect(canvas.getByTestId("is-open")).toHaveTextContent("true");
    await userEvent.keyboard("{Control>}k{/Control}");
    await expect(canvas.getByTestId("is-open")).toHaveTextContent("false");
  }
} satisfies Story`,...m.parameters?.docs?.source}}},h=[`Default`,`CtrlKToggles`]})))()}g();export{m as CtrlKToggles,p as Default,h as __namedExportsOrder,f as default};