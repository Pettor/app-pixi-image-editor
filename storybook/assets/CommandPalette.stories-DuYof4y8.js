import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{C as n,D as r,E as i,O as a,S as o,T as s,_ as c,a as l,b as ee,c as u,d,f,g as p,h as m,i as h,l as g,m as _,n as v,o as y,p as b,r as x,s as S,t as C,u as w,v as T,w as E,x as D,y as te}from"./CommandPalette-bXejO6vs.js";function O(e){return e}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{a(),i(),E(),o(),ee(),T(),p(),_(),u(),f(),w(),y(),h(),v(),k=t(),{expect:A,fn:j,userEvent:M,within:N}=__STORYBOOK_MODULE_TEST__,P={component:C,title:`Actions/Command Palette`,parameters:{layout:`fullscreen`}},F=[{id:`new-image`,label:`New Image`,description:`Open a new image in the editor`,group:`File`,keywords:[`new`,`open`,`create`],icon:O((0,k.jsx)(m,{className:`h-4 w-4`})),shortcut:{mod:!0,key:`n`},perform:()=>console.log(`new image`)},{id:`save-image`,label:`Save Image`,description:`Download the current image as PNG`,group:`File`,keywords:[`save`,`download`,`export`],icon:O((0,k.jsx)(r,{className:`h-4 w-4`})),shortcut:{mod:!0,key:`s`},perform:()=>console.log(`save image`)},{id:`zoom-in`,label:`Zoom In`,group:`View`,keywords:[`zoom`,`in`,`bigger`],icon:O((0,k.jsx)(g,{className:`h-4 w-4`})),shortcut:{mod:!0,key:`=`},perform:()=>console.log(`zoom in`)},{id:`zoom-out`,label:`Zoom Out`,group:`View`,keywords:[`zoom`,`out`,`smaller`],icon:O((0,k.jsx)(d,{className:`h-4 w-4`})),shortcut:{mod:!0,key:`-`},perform:()=>console.log(`zoom out`)},{id:`fit-to-window`,label:`Fit to Window`,description:`Scale the image to fit the viewport`,group:`View`,keywords:[`fit`,`window`,`screen`,`auto`],icon:O((0,k.jsx)(D,{className:`h-4 w-4`})),perform:()=>console.log(`fit to window`)},{id:`actual-size`,label:`Actual Size`,description:`Reset zoom to 100%`,group:`View`,keywords:[`actual`,`size`,`100`,`reset`],icon:O((0,k.jsx)(S,{className:`h-4 w-4`})),shortcut:{mod:!0,key:`0`},perform:()=>console.log(`actual size`)},{id:`lock`,label:`Toggle Lock`,description:`Lock or unlock viewport panning and zooming`,group:`View`,keywords:[`lock`,`unlock`,`pan`],icon:O((0,k.jsx)(b,{className:`h-4 w-4`})),perform:()=>console.log(`toggle lock`)},{id:`rotate-left`,label:`Rotate Left`,description:`Rotate the image 90° counter-clockwise`,group:`Transform`,keywords:[`rotate`,`left`,`ccw`,`90`],icon:O((0,k.jsx)(s,{className:`h-4 w-4`})),perform:()=>console.log(`rotate left`)},{id:`rotate-right`,label:`Rotate Right`,description:`Rotate the image 90° clockwise`,group:`Transform`,keywords:[`rotate`,`right`,`cw`,`90`],icon:O((0,k.jsx)(n,{className:`h-4 w-4`})),perform:()=>console.log(`rotate right`)},{id:`flip-horizontal`,label:`Flip Horizontal`,description:`Mirror the image along the vertical axis`,group:`Transform`,keywords:[`flip`,`horizontal`,`mirror`],icon:O((0,k.jsx)(te,{className:`h-4 w-4`})),perform:()=>console.log(`flip horizontal`)},{id:`flip-vertical`,label:`Flip Vertical`,description:`Mirror the image along the horizontal axis`,group:`Transform`,keywords:[`flip`,`vertical`,`mirror`],icon:O((0,k.jsx)(c,{className:`h-4 w-4`})),perform:()=>console.log(`flip vertical`)},{id:`theme-light`,label:`Theme: Light`,group:`Appearance`,icon:O((0,k.jsx)(x,{className:`h-4 w-4`})),shortcut:{mod:!0,shift:!0,key:`l`},perform:()=>console.log(`theme light`)},{id:`theme-dark`,label:`Theme: Dark`,group:`Appearance`,icon:O((0,k.jsx)(l,{className:`h-4 w-4`})),shortcut:{mod:!0,shift:!0,key:`k`},perform:()=>console.log(`theme dark`)}],I={isOpen:!0,commands:F,onClose:()=>console.log(`onClose`)},L={args:I,play:async({canvasElement:e})=>{let t=N(e),n=await t.findByTestId(`command-palette__search`);A(n).toBeTruthy(),A(t.getByText(`File`)).toBeTruthy(),A(t.getByText(`View`)).toBeTruthy(),A(t.getByText(`Transform`)).toBeTruthy(),A(t.getByText(`Appearance`)).toBeTruthy(),A(t.getByTestId(`command-palette__item-new-image`).getAttribute(`aria-selected`)).toBe(`true`)}},R={args:{...I,commands:[]}},z={args:I,globals:{viewport:{value:`iphonex`}}},B={args:I,play:async({canvasElement:e})=>{let t=N(e),n=await t.findByTestId(`command-palette__search`);await M.type(n,`zoom`),A(t.getByTestId(`command-palette__item-zoom-in`)).toBeTruthy(),A(t.getByTestId(`command-palette__item-zoom-out`)).toBeTruthy(),A(t.getByTestId(`command-palette__item-actual-size`)).toBeTruthy(),A(t.queryByTestId(`command-palette__item-rotate-left`)).toBeNull(),A(t.queryByTestId(`command-palette__item-flip-horizontal`)).toBeNull(),A(t.queryByTestId(`command-palette__item-theme-light`)).toBeNull()}},V={args:I,play:async({canvasElement:e})=>{let t=N(e),n=await t.findByTestId(`command-palette__search`);await M.type(n,`xyznotfound`),A(t.getByText(`No commands found`)).toBeTruthy(),A(t.queryByTestId(`command-palette__item-new-image`)).toBeNull()}},H={args:I,play:async({canvasElement:e})=>{let t=N(e),n=await t.findByTestId(`command-palette__search`);A(t.getByTestId(`command-palette__item-new-image`).getAttribute(`aria-selected`)).toBe(`true`),await M.click(n),await M.keyboard(`{ArrowDown}`),A(t.getByTestId(`command-palette__item-save-image`).getAttribute(`aria-selected`)).toBe(`true`),A(t.getByTestId(`command-palette__item-new-image`).getAttribute(`aria-selected`)).not.toBe(`true`),await M.keyboard(`{ArrowUp}`),A(t.getByTestId(`command-palette__item-new-image`).getAttribute(`aria-selected`)).toBe(`true`)}},U={args:{...I,onClose:j()},play:async({canvasElement:e,args:t})=>{let n=await N(e).findByTestId(`command-palette__item-new-image`);await M.click(n),A(t.onClose).toHaveBeenCalledOnce()}},W={args:{...I,onClose:j()},play:async({canvasElement:e,args:t})=>{await N(e).findByTestId(`command-palette__search`),await M.keyboard(`{Escape}`),A(t.onClose).toHaveBeenCalled()}},G={args:{...I,onClose:j()},play:async({canvasElement:e,args:t})=>{let n=await N(e).findByTestId(`command-palette__search`);await M.click(n),await M.keyboard(`{Enter}`),A(t.onClose).toHaveBeenCalledOnce()}},K={args:I,play:async({canvasElement:e})=>{let t=N(e),n=await t.findByTestId(`command-palette__search`);await M.click(n),await M.keyboard(`{ArrowDown}{ArrowDown}{Home}`),A(t.getByTestId(`command-palette__item-new-image`).getAttribute(`aria-selected`)).toBe(`true`)}},q={args:I,play:async({canvasElement:e})=>{let t=N(e),n=await t.findByTestId(`command-palette__search`);await M.click(n),await M.keyboard(`{End}`),A(t.getByTestId(`command-palette__item-theme-dark`).getAttribute(`aria-selected`)).toBe(`true`)}},J={args:I,play:async({canvasElement:e})=>{let t=N(e);await t.findByTestId(`command-palette__search`),await M.hover(t.getByTestId(`command-palette__item-zoom-in`)),A(t.getByTestId(`command-palette__item-zoom-in`).getAttribute(`aria-selected`)).toBe(`true`)}},Y={args:I,play:async({canvasElement:e})=>{let t=await N(e).findByTestId(`command-palette__search`);await M.type(t,`xyznotfound`),await M.keyboard(`{ArrowDown}`),await M.keyboard(`{ArrowUp}`),await M.keyboard(`{Home}`),await M.keyboard(`{End}`),await M.keyboard(`{Enter}`)}},X={args:{...I,commands:[...F,{id:`no-icon`,label:`No Icon Command`,group:`Test`,keywords:[],perform:()=>{}}]}},Z={args:{...I,commands:[{id:`ungrouped`,label:`Ungrouped Command`,keywords:[],perform:()=>{}}]}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByTestId("command-palette__search");
    expect(input).toBeTruthy();
    expect(canvas.getByText("File")).toBeTruthy();
    expect(canvas.getByText("View")).toBeTruthy();
    expect(canvas.getByText("Transform")).toBeTruthy();
    expect(canvas.getByText("Appearance")).toBeTruthy();
    expect(canvas.getByTestId("command-palette__item-new-image").getAttribute("aria-selected")).toBe("true");
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    commands: []
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  globals: {
    viewport: {
      value: "iphonex"
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByTestId("command-palette__search");
    await userEvent.type(input, "zoom");
    expect(canvas.getByTestId("command-palette__item-zoom-in")).toBeTruthy();
    expect(canvas.getByTestId("command-palette__item-zoom-out")).toBeTruthy();
    expect(canvas.getByTestId("command-palette__item-actual-size")).toBeTruthy();
    expect(canvas.queryByTestId("command-palette__item-rotate-left")).toBeNull();
    expect(canvas.queryByTestId("command-palette__item-flip-horizontal")).toBeNull();
    expect(canvas.queryByTestId("command-palette__item-theme-light")).toBeNull();
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByTestId("command-palette__search");
    await userEvent.type(input, "xyznotfound");
    expect(canvas.getByText("No commands found")).toBeTruthy();
    expect(canvas.queryByTestId("command-palette__item-new-image")).toBeNull();
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByTestId("command-palette__search");
    expect(canvas.getByTestId("command-palette__item-new-image").getAttribute("aria-selected")).toBe("true");
    await userEvent.click(input);
    await userEvent.keyboard("{ArrowDown}");
    expect(canvas.getByTestId("command-palette__item-save-image").getAttribute("aria-selected")).toBe("true");
    expect(canvas.getByTestId("command-palette__item-new-image").getAttribute("aria-selected")).not.toBe("true");
    await userEvent.keyboard("{ArrowUp}");
    expect(canvas.getByTestId("command-palette__item-new-image").getAttribute("aria-selected")).toBe("true");
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onClose: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const item = await canvas.findByTestId("command-palette__item-new-image");
    await userEvent.click(item);
    expect(args.onClose).toHaveBeenCalledOnce();
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onClose: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByTestId("command-palette__search");
    await userEvent.keyboard("{Escape}");
    expect(args.onClose).toHaveBeenCalled();
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onClose: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByTestId("command-palette__search");
    await userEvent.click(input);
    await userEvent.keyboard("{Enter}");
    expect(args.onClose).toHaveBeenCalledOnce();
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByTestId("command-palette__search");
    await userEvent.click(input);
    await userEvent.keyboard("{ArrowDown}{ArrowDown}{Home}");
    expect(canvas.getByTestId("command-palette__item-new-image").getAttribute("aria-selected")).toBe("true");
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByTestId("command-palette__search");
    await userEvent.click(input);
    await userEvent.keyboard("{End}");
    expect(canvas.getByTestId("command-palette__item-theme-dark").getAttribute("aria-selected")).toBe("true");
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByTestId("command-palette__search");
    await userEvent.hover(canvas.getByTestId("command-palette__item-zoom-in"));
    expect(canvas.getByTestId("command-palette__item-zoom-in").getAttribute("aria-selected")).toBe("true");
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.findByTestId("command-palette__search");
    await userEvent.type(input, "xyznotfound");
    await userEvent.keyboard("{ArrowDown}");
    await userEvent.keyboard("{ArrowUp}");
    await userEvent.keyboard("{Home}");
    await userEvent.keyboard("{End}");
    await userEvent.keyboard("{Enter}");
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    commands: [...commands, {
      id: "no-icon",
      label: "No Icon Command",
      group: "Test",
      keywords: [],
      perform: () => {}
    }]
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    commands: [{
      id: "ungrouped",
      label: "Ungrouped Command",
      keywords: [],
      perform: () => {}
    }]
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`Empty`,`Phone`,`SearchFilters`,`SearchNoResults`,`KeyboardNavigation`,`CommandExecution`,`EscapeClose`,`EnterExecute`,`HomeKey`,`EndKey`,`MouseHoverActivates`,`KeyboardOnEmptyResults`,`WithCommandWithoutIcon`,`WithDefaultGroup`]})))()}$();export{U as CommandExecution,L as Default,R as Empty,q as EndKey,G as EnterExecute,W as EscapeClose,K as HomeKey,H as KeyboardNavigation,Y as KeyboardOnEmptyResults,J as MouseHoverActivates,z as Phone,B as SearchFilters,V as SearchNoResults,X as WithCommandWithoutIcon,Z as WithDefaultGroup,Q as __namedExportsOrder,P as default};