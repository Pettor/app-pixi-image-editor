import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,r}from"./CommandShortcut-CHpXnDcv.js";function i(){return(0,a.jsx)(`div`,{"data-testid":`harness`})}var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{a=t(),{expect:o}=__STORYBOOK_MODULE_TEST__,s={component:i,title:`Actions/Command Palette/Command Shortcut`,tags:[`autodocs`]},c={play:async()=>{let e=n();o(typeof e).toBe(`boolean`)}},l={play:async()=>{let e=n(),t=new KeyboardEvent(`keydown`,{key:`s`,ctrlKey:!e,metaKey:e});o(r(t,{mod:!0,key:`s`})).toBe(!0),o(r(t,{mod:!0,key:`k`})).toBe(!1)}},u={play:async()=>{let e=new KeyboardEvent(`keydown`,{key:`a`,shiftKey:!0}),t=new KeyboardEvent(`keydown`,{key:`a`});o(r(e,{shift:!0,key:`a`})).toBe(!0),o(r(t,{shift:!0,key:`a`})).toBe(!1),o(r(e,{key:`a`})).toBe(!1)}},d={play:async()=>{let e=new KeyboardEvent(`keydown`,{key:`d`,altKey:!0}),t=new KeyboardEvent(`keydown`,{key:`d`});o(r(e,{alt:!0,key:`d`})).toBe(!0),o(r(t,{alt:!0,key:`d`})).toBe(!1)}},f={play:async()=>{let e=new KeyboardEvent(`keydown`,{key:`K`});o(r(e,{key:`k`})).toBe(!0),o(r(e,{key:`K`})).toBe(!0)}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async () => {
    const result = isMac();
    expect(typeof result).toBe("boolean");
  }
} satisfies Story`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async () => {
    const mac = isMac();
    const event = new KeyboardEvent("keydown", {
      key: "s",
      ctrlKey: !mac,
      metaKey: mac
    });
    expect(matchesShortcut(event, {
      mod: true,
      key: "s"
    })).toBe(true);
    expect(matchesShortcut(event, {
      mod: true,
      key: "k"
    })).toBe(false);
  }
} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async () => {
    const withShift = new KeyboardEvent("keydown", {
      key: "a",
      shiftKey: true
    });
    const noShift = new KeyboardEvent("keydown", {
      key: "a"
    });
    expect(matchesShortcut(withShift, {
      shift: true,
      key: "a"
    })).toBe(true);
    expect(matchesShortcut(noShift, {
      shift: true,
      key: "a"
    })).toBe(false);
    expect(matchesShortcut(withShift, {
      key: "a"
    })).toBe(false);
  }
} satisfies Story`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  play: async () => {
    const withAlt = new KeyboardEvent("keydown", {
      key: "d",
      altKey: true
    });
    const noAlt = new KeyboardEvent("keydown", {
      key: "d"
    });
    expect(matchesShortcut(withAlt, {
      alt: true,
      key: "d"
    })).toBe(true);
    expect(matchesShortcut(noAlt, {
      alt: true,
      key: "d"
    })).toBe(false);
  }
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  play: async () => {
    const event = new KeyboardEvent("keydown", {
      key: "K"
    });
    expect(matchesShortcut(event, {
      key: "k"
    })).toBe(true);
    expect(matchesShortcut(event, {
      key: "K"
    })).toBe(true);
  }
} satisfies Story`,...f.parameters?.docs?.source}}},p=[`IsMacReturnsBool`,`MatchesModKey`,`MatchesShiftKey`,`MatchesAltKey`,`KeyCaseInsensitive`]})))()}m();export{c as IsMacReturnsBool,f as KeyCaseInsensitive,d as MatchesAltKey,l as MatchesModKey,u as MatchesShiftKey,p as __namedExportsOrder,s as default};