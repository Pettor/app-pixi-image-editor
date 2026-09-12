import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i,t as a}from"./StorybookNavbarContentComponent-Cixa2ld0.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),n(),o=t(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={component:i,title:`Shared/Navigation/Navbar`,parameters:{a11y:{config:{rules:[{id:`color-contrast`,enabled:!1},{id:`list`,enabled:!1},{id:`th-has-data-cells`,enabled:!1}]}},layout:`fullscreen`}},l={title:`This is a Header`},u={args:l},d={args:{...l,endElement:(0,o.jsx)(a,{})},parameters:{viewport:{value:`full`}}},f={args:l,play:async({canvas:e})=>{await s(e.getByRole(`banner`)).toBeInTheDocument(),window.scrollY=100,window.dispatchEvent(new Event(`scroll`)),window.scrollY=0,window.dispatchEvent(new Event(`scroll`))}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: defaultArgs
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    endElement: <StorybookNavbarContentComponent />
  },
  parameters: {
    viewport: {
      value: "full"
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("banner")).toBeInTheDocument();
    // Simulate scroll down then up to exercise the scroll handler branches
    window.scrollY = 100;
    window.dispatchEvent(new Event("scroll"));
    window.scrollY = 0;
    window.dispatchEvent(new Event("scroll"));
  }
} satisfies Story`,...f.parameters?.docs?.source}}},p=[`Standard`,`WithComponents`,`WithScrollInteraction`]})))()}m();export{u as Standard,d as WithComponents,f as WithScrollInteraction,p as __namedExportsOrder,c as default};