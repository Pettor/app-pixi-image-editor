import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./react-DEECRbw-.js";import{n as i,t as a}from"./HydrateAtoms-DQQnBHtS.js";import{n as o,t as s}from"./FilterMenuAtoms-zU7ztz7n.js";import{a as c,n as l,o as u,t as d}from"./FilterDrawerController-Rz_r8Ij2.js";function f(){return(0,p.jsx)(r,{children:(0,p.jsx)(a,{atomValues:[[s,!0]],children:(0,p.jsx)(d,{})})})}var p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),o(),u(),l(),i(),p=t(),{expect:m,fn:h}=__STORYBOOK_MODULE_TEST__,g={component:c,title:`Editor/Filter Drawer`},_={open:!0,blur:0,brightness:1,contrast:1,saturation:1,pixelate:0,red:1,green:1,blue:1,onFilterChange:h(),onClose:h()},v={args:_},y={args:{..._,open:!1}},b={args:_,play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`button`,{name:/close filters/i})),await m(_.onClose).toHaveBeenCalled()}},x={args:_,play:async({canvas:e,userEvent:t})=>{await t.click(e.getByTestId(`filter-drawer__rgb-reset`)),await m(_.onFilterChange).toHaveBeenCalledWith({red:1,green:1,blue:1})}},S={args:{..._,onFilterChange:h()},play:async({canvas:e,userEvent:t})=>{let n=e.getAllByTestId(`filter-slider__reset`);for(let e of n)await t.click(e);for(let n of[/brightness/i,/contrast/i,/saturation/i,/blur/i,/pixelate/i]){let r=e.getByRole(`slider`,{name:n});await t.click(r),await t.keyboard(`{ArrowRight}`)}for(let n of[/red/i,/green/i,/blue/i]){let r=e.getByRole(`slider`,{name:n});await t.click(r),await t.keyboard(`{ArrowLeft}`)}}},C={render:()=>(0,p.jsx)(f,{}),play:async({canvas:e,userEvent:t})=>{await m(e.getByRole(`button`,{name:/close filters/i})).toBeInTheDocument(),await t.click(e.getByRole(`button`,{name:/close filters/i}))}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    await userEvent.click(canvas.getByRole("button", {
      name: /close filters/i
    }));
    await expect(defaultArgs.onClose).toHaveBeenCalled();
  }
} satisfies Story`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId("filter-drawer__rgb-reset"));
    await expect(defaultArgs.onFilterChange).toHaveBeenCalledWith({
      red: 1,
      green: 1,
      blue: 1
    });
  }
} satisfies Story`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    onFilterChange: fn()
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    // Click each FilterSlider reset button to cover onReset inline callbacks
    const resetButtons = canvas.getAllByTestId("filter-slider__reset");
    for (const button of resetButtons) {
      await userEvent.click(button);
    }
    // Use arrow keys on each FilterSlider's range input to cover onChange inline callbacks
    const sliderNames = [/brightness/i, /contrast/i, /saturation/i, /blur/i, /pixelate/i];
    for (const name of sliderNames) {
      const slider = canvas.getByRole("slider", {
        name
      });
      await userEvent.click(slider);
      await userEvent.keyboard("{ArrowRight}");
    }
    // Use arrow keys on raw RGB range inputs to cover their inline onChange callbacks
    for (const name of [/red/i, /green/i, /blue/i]) {
      const slider = canvas.getByRole("slider", {
        name
      });
      await userEvent.click(slider);
      await userEvent.keyboard("{ArrowLeft}");
    }
  }
} satisfies Story`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <FilterDrawerControllerOpen />,
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByRole("button", {
      name: /close filters/i
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: /close filters/i
    }));
  }
} satisfies StoryObj<typeof FilterDrawerControllerOpen>`,...C.parameters?.docs?.source}}},w=[`Open`,`Closed`,`WithInteractions`,`WithRgbReset`,`WithAllFilterSliderResets`,`ControllerOpen`]})))()}T();export{y as Closed,C as ControllerOpen,v as Open,S as WithAllFilterSliderResets,b as WithInteractions,x as WithRgbReset,w as __namedExportsOrder,g as default};