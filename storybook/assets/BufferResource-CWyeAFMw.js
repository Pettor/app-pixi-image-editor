import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{$t as t,T as n,Ut as r,Wt as i,a,bt as o,en as s,i as c,o as l,r as u,w as d,yt as f}from"./Geometry-D39HTxSi.js";import{B as p,V as m,X as h,Z as g}from"./RenderTargetSystem--Rc-y4nc.js";var _,v,y;function b(){return(b=e((()=>{_={name:`local-uniform-bit`,vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},v={..._,vertex:{..._.vertex,header:_.vertex.header.replace(`group(1)`,`group(2)`)}},y={name:`local-uniform-bit`,vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}}})))()}var x,S;function C(){return(C=e((()=>{x={name:`texture-bit`,vertex:{header:`

        struct TextureUniforms {
            uTextureMatrix:mat3x3<f32>,
        }

        @group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
        `,main:`
            uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
            @group(2) @binding(0) var uTexture: texture_2d<f32>;
            @group(2) @binding(1) var uSampler: sampler;


        `,main:`
            outColor = textureSample(uTexture, uSampler, vUV);
        `}},S={name:`texture-bit`,vertex:{header:`
            uniform mat3 uTextureMatrix;
        `,main:`
            uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
        `},fragment:{header:`
        uniform sampler2D uTexture;


        `,main:`
            outColor = texture(uTexture, vUV);
        `}}})))()}function w(e,t){for(let n in e.attributes){let r=e.attributes[n],i=t[n];i?(r.format??=i.format,r.offset??=i.offset,r.instance??=i.instance):o(`Attribute ${n} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`)}T(e)}function T(e){let{buffers:t,attributes:n}=e,r={},i={};for(let e in t){let n=t[e];r[n.uid]=0,i[n.uid]=0}for(let e in n){let t=n[e];r[t.buffer.uid]+=d(t.format).stride}for(let e in n){let t=n[e];t.stride??=r[t.buffer.uid],t.start??=i[t.buffer.uid],i[t.buffer.uid]+=d(t.format).stride}}function E(){return(E=e((()=>{f(),n()})))()}var D;function O(){return(O=e((()=>{m(),D=[],D[p.NONE]=void 0,D[p.DISABLED]={stencilWriteMask:0,stencilReadMask:0},D[p.RENDERING_MASK_ADD]={stencilFront:{compare:`equal`,passOp:`increment-clamp`},stencilBack:{compare:`equal`,passOp:`increment-clamp`}},D[p.RENDERING_MASK_REMOVE]={stencilFront:{compare:`equal`,passOp:`decrement-clamp`},stencilBack:{compare:`equal`,passOp:`decrement-clamp`}},D[p.MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:`equal`,passOp:`keep`},stencilBack:{compare:`equal`,passOp:`keep`}},D[p.INVERSE_MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:`not-equal`,passOp:`keep`},stencilBack:{compare:`not-equal`,passOp:`keep`}}})))()}var k;function A(){return(A=e((()=>{h(),c(),l(),k=class{constructor(e){this._syncFunctionHash=Object.create(null),this._adaptor=e,this._systemCheck()}_systemCheck(){if(!g())throw Error(`Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.`)}ensureUniformGroup(e){let t=this.getUniformGroupData(e);e.buffer||=new u({data:new Float32Array(t.layout.size/4),usage:a.UNIFORM|a.COPY_DST})}getUniformGroupData(e){return this._syncFunctionHash[e._signature]||this._initUniformGroup(e)}_initUniformGroup(e){let t=e._signature,n=this._syncFunctionHash[t];if(!n){let r=Object.keys(e.uniformStructures).map(t=>e.uniformStructures[t]),i=this._adaptor.createUboElements(r),a=this._generateUboSync(i.uboElements);n=this._syncFunctionHash[t]={layout:i,syncFunction:a}}return this._syncFunctionHash[t]}_generateUboSync(e){return this._adaptor.generateUboSync(e)}syncUniformGroup(e,t,n){let r=this.getUniformGroupData(e);e.buffer||=new u({data:new Float32Array(r.layout.size/4),usage:a.UNIFORM|a.COPY_DST});let i=null;return t||(t=e.buffer.data,i=e.buffer.dataInt32),n||=0,r.syncFunction(e.uniforms,t,i,n),!0}updateUniformGroup(e){if(e.isStatic&&!e._dirtyId)return!1;e._dirtyId=0;let t=this.syncUniformGroup(e);return e.buffer.update(),t}destroy(){this._syncFunctionHash=null}}})))()}var j;function M(){return(M=e((()=>{j=[{type:`mat3x3<f32>`,test:e=>e.value.a!==void 0,ubo:`
            var matrix = uv[name].toArray(true);
            data[offset] = matrix[0];
            data[offset + 1] = matrix[1];
            data[offset + 2] = matrix[2];
            data[offset + 4] = matrix[3];
            data[offset + 5] = matrix[4];
            data[offset + 6] = matrix[5];
            data[offset + 8] = matrix[6];
            data[offset + 9] = matrix[7];
            data[offset + 10] = matrix[8];
        `,uniform:`
            gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
        `},{type:`vec4<f32>`,test:e=>e.type===`vec4<f32>`&&e.size===1&&e.value.width!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
            data[offset + 2] = v.width;
            data[offset + 3] = v.height;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
                cv[0] = v.x;
                cv[1] = v.y;
                cv[2] = v.width;
                cv[3] = v.height;
                gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
            }
        `},{type:`vec2<f32>`,test:e=>e.type===`vec2<f32>`&&e.size===1&&e.value.x!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.x;
            data[offset + 1] = v.y;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.x || cv[1] !== v.y) {
                cv[0] = v.x;
                cv[1] = v.y;
                gl.uniform2f(ud[name].location, v.x, v.y);
            }
        `},{type:`vec4<f32>`,test:e=>e.type===`vec4<f32>`&&e.size===1&&e.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
            data[offset + 3] = v.alpha;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                cv[3] = v.alpha;
                gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
            }
        `},{type:`vec3<f32>`,test:e=>e.type===`vec3<f32>`&&e.size===1&&e.value.red!==void 0,ubo:`
            v = uv[name];
            data[offset] = v.red;
            data[offset + 1] = v.green;
            data[offset + 2] = v.blue;
        `,uniform:`
            cv = ud[name].value;
            v = uv[name];
            if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
                cv[0] = v.red;
                cv[1] = v.green;
                cv[2] = v.blue;
                gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
            }
        `}]})))()}function N(e,t,n){let r=[`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
        var name = null;
        var arrayOffset = null;
    `],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=o.data.name,c=!1,l=0;for(let e=0;e<j.length;e++)if(j[e].test(o.data)){l=o.offset/4,r.push(`name = "${s}";`,`offset += ${l-i};`,j[e].ubo),c=!0;break}if(!c){if(o.data.size>1)l=o.offset/4,r.push(n(o,l-i));else{let e=t[o.data.type];l=o.offset/4,r.push(`
                    v = uv.${s};
                    offset += ${l-i};
                    ${e};
                `)}}i=l}let a=r.join(`
`);return Function(`uv`,`data`,`dataInt32`,`offset`,a)}function P(){return(P=e((()=>{M()})))()}function F(e,t){return`
        for (let i = 0; i < ${e*t}; i++) {
            data[offset + (((i / ${e})|0) * 4) + (i % ${e})] = v[i];
        }
    `}var I,L;function R(){return(R=e((()=>{I={f32:`
        data[offset] = v;`,i32:`
        dataInt32[offset] = v;`,u32:`
        dataInt32[offset] = v;`,"vec2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];`,"vec3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];`,"vec4<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];`,"vec2<i32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];`,"vec3<i32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];`,"vec4<i32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];
        dataInt32[offset + 3] = v[3];`,"vec2<u32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];`,"vec3<u32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];`,"vec4<u32>":`
        dataInt32[offset] = v[0];
        dataInt32[offset + 1] = v[1];
        dataInt32[offset + 2] = v[2];
        dataInt32[offset + 3] = v[3];`,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 4] = v[2];
        data[offset + 5] = v[3];`,"mat3x3<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];
        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];`,"mat4x4<f32>":`
        for (let i = 0; i < 16; i++) {
            data[offset + i] = v[i];
        }`,"mat3x2<f32>":F(3,2),"mat4x2<f32>":F(4,2),"mat2x3<f32>":F(2,3),"mat4x3<f32>":F(4,3),"mat2x4<f32>":F(2,4),"mat3x4<f32>":F(3,4)},L={...I,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset + 1] = v[1];
        data[offset + 2] = v[2];
        data[offset + 3] = v[3];
    `}})))()}var z;function B(){return(B=e((()=>{s(),r(),z=class extends t{constructor({buffer:e,offset:t,size:n}){super(),this.uid=i(`buffer`),this._resourceType=`bufferResource`,this._touched=0,this._resourceId=i(`resource`),this._bufferResource=!0,this.destroyed=!1,this.buffer=e,this.offset=t|0,this.size=n,this.buffer.on(`change`,this.onBufferChange,this)}get _gcLastUsed(){return this.buffer?._gcLastUsed??-1}set _gcLastUsed(e){this.buffer&&(this.buffer._gcLastUsed=e)}onBufferChange(){this._resourceId=i(`resource`),this.emit(`change`,this)}destroy(e=!1){this.destroyed=!0,e&&this.buffer.destroy(),this.emit(`change`,this),this.buffer=null,this.removeAllListeners()}}})))()}export{v as S,x as _,L as a,_ as b,M as c,A as d,D as f,C as g,E as h,I as i,j as l,w as m,B as n,N as o,O as p,R as r,P as s,z as t,k as u,S as v,y as x,b as y};