import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r}from"./CommandShortcut-CHpXnDcv.js";import{n as i,t as a}from"./UseCommandShortcuts-Cbn1Pvuh.js";function o({onCommand:e}){let t=(0,s.useMemo)(()=>[{id:`mod-cmd`,label:`Mod Command`,shortcut:{mod:!0,key:`j`},perform:e},{id:`bare-cmd`,label:`Bare Command`,shortcut:{key:`q`},perform:e}],[e]);return i(t),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`label`,{htmlFor:`test-input`,children:`Test input`}),(0,c.jsx)(`input`,{id:`test-input`,"data-testid":`input`}),(0,c.jsx)(`button`,{"data-testid":`btn`,children:`Button`})]})}var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s=t(),a(),c=n(),{expect:l,fn:u}=__STORYBOOK_MODULE_TEST__,d={component:o,title:`Actions/Command Palette/Use Command Shortcuts`,tags:[`autodocs`],args:{onCommand:u()}},f={},p={play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByTestId(`btn`)),await t.keyboard(r()?`{Meta>}j{/Meta}`:`{Control>}j{/Control}`),l(n.onCommand).toHaveBeenCalledOnce()}},m={play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByTestId(`input`)),await t.keyboard(`q`),l(n.onCommand).not.toHaveBeenCalled()}},h={play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByTestId(`btn`)),await t.keyboard(`q`),l(n.onCommand).toHaveBeenCalledOnce()}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{} satisfies Story`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByTestId("btn"));
    await userEvent.keyboard(isMac() ? "{Meta>}j{/Meta}" : "{Control>}j{/Control}");
    expect(args.onCommand).toHaveBeenCalledOnce();
  }
} satisfies Story`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByTestId("input"));
    await userEvent.keyboard("q");
    expect(args.onCommand).not.toHaveBeenCalled();
  }
} satisfies Story`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByTestId("btn"));
    await userEvent.keyboard("q");
    expect(args.onCommand).toHaveBeenCalledOnce();
  }
} satisfies Story`,...h.parameters?.docs?.source}}},g=[`Default`,`ModShortcutFires`,`BareShortcutBlockedInInput`,`BareShortcutFiresOutsideInput`]})))()}_();export{m as BareShortcutBlockedInInput,h as BareShortcutFiresOutsideInput,f as Default,p as ModShortcutFires,g as __namedExportsOrder,d as default};