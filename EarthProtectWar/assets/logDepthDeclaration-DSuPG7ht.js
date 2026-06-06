import{b5 as e}from"./index-B993nObd.js";const a="meshUboDeclaration",r=`#ifdef WEBGL2
uniform mat4 world;uniform float visibility;
#else
layout(std140,column_major) uniform;uniform Mesh
{mat4 world;float visibility;};
#endif
#define WORLD_UBO
`;e.IncludesShadersStore[a]||(e.IncludesShadersStore[a]=r);const d={name:a,shader:r},n="mainUVVaryingDeclaration",t=`#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;e.IncludesShadersStore[n]||(e.IncludesShadersStore[n]=t);const l={name:n,shader:t},o="logDepthDeclaration",i=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;varying float vFragmentDepth;
#endif
`;e.IncludesShadersStore[o]||(e.IncludesShadersStore[o]=i);const c={name:o,shader:i};export{d as a,c as l,l as m};
