import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./FilterSlider-BGPt9a59.js";var r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{t(),{expect:r,fn:i}=__STORYBOOK_MODULE_TEST__,a={component:n,title:`Editor/Filter Drawer/Filter Slider`,tags:[`autodocs`]},o={label:`Brightness`,resetLabel:`Reset`,value:1,min:0,max:2,step:.1,rangeClassName:`range-primary`,ariaLabel:`Brightness`,onReset:i(),onChange:i()},s={args:o,play:async({canvas:e,userEvent:t})=>{await t.click(e.getByTestId(`filter-slider__reset`)),await r(o.onReset).toHaveBeenCalled()}},c={args:{...o,value:0}},l={args:{...o,value:2}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByTestId("filter-slider__reset"));
    await expect(defaultArgs.onReset).toHaveBeenCalled();
  }
} satisfies Story`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    value: 0
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    value: 2
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`AtMinimum`,`AtMaximum`]})))()}d();export{l as AtMaximum,c as AtMinimum,s as Default,u as __namedExportsOrder,a as default};