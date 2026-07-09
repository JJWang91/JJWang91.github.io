import{b5 as e}from"./index-CZGb7Fdp.js";const a="meshUboDeclaration",s=`struct Mesh {world : mat4x4<f32>,
visibility : f32,};var<uniform> mesh : Mesh;
#define WORLD_UBO
`;e.IncludesShadersStoreWGSL[a]||(e.IncludesShadersStoreWGSL[a]=s);const c={name:a,shader:s},n="mainUVVaryingDeclaration",t=`#ifdef MAINUV{X}
varying vMainUV{X}: vec2f;
#endif
`;e.IncludesShadersStoreWGSL[n]||(e.IncludesShadersStoreWGSL[n]=t);const d={name:n,shader:t},r="logDepthDeclaration",o=`#ifdef LOGARITHMICDEPTH
uniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;
#endif
`;e.IncludesShadersStoreWGSL[r]||(e.IncludesShadersStoreWGSL[r]=o);const S={name:r,shader:o};export{c as a,S as l,d as m};
