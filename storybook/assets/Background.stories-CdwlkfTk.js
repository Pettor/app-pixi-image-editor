import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i,t as a}from"./GridBackground-0PQ0uwg-.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),r(),o=t(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={component:i,title:`Shared/Layout/Background/Blue Fade`,tags:[`autodocs`],parameters:{layout:`fullscreen`}},l={play:async({canvas:e})=>{let t=e.getByRole(`generic`);await s(t).toBeInTheDocument()}},u={name:`Grid Background`,render:()=>(0,o.jsx)(a,{}),play:async({canvas:e})=>{let t=e.getByRole(`generic`);await s(t).toBeInTheDocument()}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const el = canvas.getByRole("generic");
    await expect(el).toBeInTheDocument();
  }
} satisfies Story`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Grid Background",
  render: () => <GridBackground />,
  play: async ({
    canvas
  }) => {
    const el = canvas.getByRole("generic");
    await expect(el).toBeInTheDocument();
  }
} satisfies StoryObj<typeof GridBackground>`,...u.parameters?.docs?.source}}},d=[`Default`,`GridBackgroundStory`]})))()}f();export{l as Default,u as GridBackgroundStory,d as __namedExportsOrder,c as default};