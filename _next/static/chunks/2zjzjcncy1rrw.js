(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[88653,e=>{var t=e.i(43476),r=e.i(71645),o=e.i(31178),a=e.i(47414),n=e.i(74008),i=e.i(21476),l=e.i(60140),u=e.i(72846),s=r,c=e.i(37806);function f(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}let d=e=>{let{width:t,height:r}=e?.getBoundingClientRect()||{};return[t/e?.offsetWidth||1,r/e?.offsetHeight||1]},m=e=>{let{left:t,top:r}=e.getBoundingClientRect(),o=e;for(;o=o.parentElement||o.parentNode?.host;){let{scrollLeft:e,scrollTop:a}=o;if(e||a){let[n,i]=d(o);t+=e*n,r+=a*i}if("fixed"===getComputedStyle(o).position)break}let[a,n]=d(e.offsetParent);return[t/a,r/n]};class h extends s.Component{getSnapshotBeforeUpdate(e){let t=this.props.getElement();if((0,u.f)(t)&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let e=t.offsetParent,r=(0,u.f)(e)&&e.offsetWidth||0,o=(0,u.f)(e)&&e.offsetHeight||0,a=getComputedStyle(t),n=this.props.sizeRef.current;n.height=parseFloat(a.height),n.width=parseFloat(a.width),n.top=t.offsetTop,n.left=t.offsetLeft,n.right=r-n.width-n.left,n.bottom=o-n.height-n.top,n.direction=a.direction,n.point=m(t)}return null}componentDidUpdate(){}render(){return this.props.children}}function p({children:e,isPresent:o,anchorX:a,anchorY:n,root:i,pop:u,popNode:d}){let v=(0,s.useId)(),x=(0,s.useRef)(null),g=(0,s.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:w}=(0,s.useContext)(c.f),b=function(...e){return r.useCallback(function(...e){return t=>{let r=!1,o=e.map(e=>{let o=f(e,t);return r||"function"!=typeof o||(r=!0),o});if(r)return()=>{for(let t=0;t<o.length;t++){let r=o[t];"function"==typeof r?r():f(e[t],null)}}}}(...e),e)}(x,!1!==u?e.props?.ref??e?.ref:void 0),y=()=>x.current||d?.current?.current,E=e=>{let{width:t,height:r,top:o,left:i,right:l,bottom:u,direction:s}=g.current,c="rtl"===s,f="left"===a?c?`right:${l}`:`left:${i}`:c?`left:${i}`:`right:${l}`,d="bottom"===n?`bottom:${u}`:`top:${o}`;e?.insertRule(`[data-motion-pop-id="${v}"]{position:absolute!important;width:${t}px!important;height:${r}px!important;${f}px!important;${d}px!important}`)};return(0,s.useInsertionEffect)(()=>{let{width:e,height:t}=g.current,r=y();if(o||!1===u||!r||!e||!t)return;r.dataset.motionPopId=v;let a=r.ownerDocument,n=a.createElement("style");w&&(n.nonce=w);let s=i??a.head;s.appendChild(n),E(n.sheet);let c=0,f=0;return l.t.setup(()=>{let[e,t]=m(r);c=g.current.point[0]-e,f=g.current.point[1]-t}),l.t.read(()=>{let{sheet:e}=n;if(!e||!c&&!f)return;let t=g.current;t.left+=c,t.right-=c,t.top+=f,t.bottom-=f,e.deleteRule(0),E(e)}),()=>{r.removeAttribute("data-motion-pop-id"),s.contains(n)&&s.removeChild(n)}},[o]),(0,t.jsx)(h,{isPresent:o,getElement:y,sizeRef:g,pop:u,children:!1===u?e:s.cloneElement(e,{ref:b})})}let v=({children:e,initial:o,isPresent:l,onExitComplete:u,custom:s,presenceAffectsLayout:c,mode:f,anchorX:d,anchorY:m,root:h})=>{let v=(0,a.f)(x),g=(0,r.useId)(),w=(0,r.useRef)(),b=(0,r.useRef)(l),y=(0,r.useRef)(u);(0,n.f)(()=>{b.current=l,y.current=u});let E=!0,T=(0,r.useMemo)(()=>(E=!1,{id:g,initial:o,isPresent:l,custom:s,onExitComplete:e=>{for(let t of(v.set(e,!0),v.values()))if(!t)return;u&&u()},register:(e,t)=>(v.set(e,!1),t&&t.parent?.presenceContext?.id!==g&&(w.current=t),()=>{v.delete(e),b.current||v.size||y.current?.()})}),[l,v,u]);return c&&E&&(T={...T}),(0,r.useMemo)(()=>{v.forEach((e,t)=>v.set(t,!1))},[l]),r.useEffect(()=>{l||v.size||!u||u()},[l]),e=(0,t.jsx)(p,{pop:"popLayout"===f,isPresent:l,anchorX:d,anchorY:m,root:h,popNode:w,children:e}),(0,t.jsx)(i.f.Provider,{value:T,children:e})};function x(){return new Map}var g=e.i(64978);let w=e=>e.key||"";function b(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}e.s(["f",0,({children:e,custom:i,initial:l=!0,onExitComplete:u,presenceAffectsLayout:s=!0,mode:c="sync",propagate:f=!1,anchorX:d="left",anchorY:m="top",root:h})=>{let[p,x]=(0,g.f)(f),y=(0,r.useMemo)(()=>b(e),[e]),E=f&&!p?[]:y.map(w),T=(0,r.useRef)(!0),S=(0,a.f)(()=>new Map),R=(0,r.useRef)(new Set),[M,F]=(0,r.useState)(y),[C,L]=(0,r.useState)(y);(0,n.f)(()=>{!f||p||C.length||x?.()},[p,f,C.length,x]);let k=(0,r.useRef)();(0,r.useEffect)(()=>()=>{let e=k.current;k.current=void 0,e?.()},[C]),(0,n.f)(()=>{T.current=!1;for(let e=0;e<C.length;e++){let t=w(C[e]);E.includes(t)?(S.delete(t),R.current.delete(t)):!0!==S.get(t)&&S.set(t,!1)}},[C,E.length,E.join("-")]);let P=[];if(y!==M){let e=[...y],t=0;for(let r of C){let o=E.indexOf(w(r));-1===o?(e.splice(t++,0,r),P.push(r)):t=o+P.length+1}return P.every(e=>S.get(w(e)))?e=y:"wait"===c&&(e=P),L(b(e)),F(y),null}let{forceRender:_}=(0,r.useContext)(o.f);return(0,t.jsx)(t.Fragment,{children:C.map(e=>{let r=w(e),o=(!f||!!p)&&(y===C||E.includes(r));return(0,t.jsx)(v,{isPresent:o,initial:(!T.current||!!l)&&void 0,custom:i,presenceAffectsLayout:s,mode:c,root:h,onExitComplete:o?void 0:()=>{if(R.current.has(r)||!S.has(r))return;R.current.add(r),S.set(r,!0);let e=!0;S.forEach(t=>{t||(e=!1)}),e&&(_?.(),F([]),f&&x?.(),k.current=u)},anchorX:d,anchorY:m,children:e},r)})})}],88653)},18060,e=>{var t=e.i(43476),r=e.i(71645),o=e.i(60817);let a={focus:0,part:1,none:2},n={dots:0,dashes:.45,lines:1},i={depth:0,along:1,across:2},l=[0,.75,.35],u=[[0,0,0,0],[1.9,-4.6,-.08,2.4],[-1.05,2,.12,4.1]],s=[1,.5,.55],c=Math.PI/180,f=1/(2*Math.tan(.28)),d=`#version 300 es
precision highp float;
`,m=`
uniform float uTime;
uniform float uTwist;
uniform float uRoll;
uniform float uWaves;
uniform float uWidth;
uniform float uRibbon;
uniform mat3 uOrient;
uniform float uScale;
uniform vec4 uPlace;
uniform float uVolume;

float hash11(float n) {
  return fract(sin(n * 91.3458) * 47453.5453);
}

vec3 centerLocal(float s) {
  float t = uTime;
  float ph = uPlace.w;
  float x = s * 24.0;
  float y = uWaves * (0.52 * sin(x * 0.43 + t * 0.31 + ph) + 0.26 * sin(x * 0.79 - t * 0.23 + 1.3 + ph * 0.7)) + uPlace.x + x * uPlace.z;
  float z = uWaves * 0.65 * sin(x * 0.33 + t * 0.19 + 0.7 + ph * 1.3) + uPlace.y;
  return vec3(x, y, z);
}

float twistAt(float s, float layer) {
  float x = s * 24.0;
  return uTwist * 0.483 * x + uRoll + uPlace.w * 0.6 + layer * uVolume * 0.42 + 0.5 * sin(x * 0.26 + uTime * 0.27 + uPlace.w);
}

vec3 ribbonPoint(float s, float v, float n, float layer, out vec3 normal) {
  vec3 c0 = centerLocal(s);
  vec3 c1 = centerLocal(s + 0.004);
  vec3 tangent = normalize(c1 - c0);
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 n0 = normalize(up - tangent * dot(up, tangent));
  vec3 b0 = cross(tangent, n0);
  float th = twistAt(s, layer);
  vec3 across = cos(th) * n0 + sin(th) * b0;
  vec3 sheet = -sin(th) * n0 + cos(th) * b0;
  float halfWidth = uWidth * (0.78 + 0.22 * cos(s * 3.14159));
  vec3 local = c0 + across * v * halfWidth + sheet * (n + layer * uVolume * 0.16) * halfWidth;
  normal = uOrient * sheet;
  return uOrient * (local * uScale);
}
`,h=`${d}
${m}
uniform mat4 uViewProj;
uniform vec3 uEye;
uniform vec2 uViewport;
uniform float uDpr;
uniform float uFibers;
uniform float uDots;
uniform float uFlow;
uniform float uSize;
uniform float uFocus;
uniform float uDof;
uniform float uMaxCoc;
uniform float uFocal;
uniform float uIntro;
uniform vec4 uPulse;
uniform vec4 uHover;
uniform float uPart;
uniform float uDotLength;
uniform float uSparkle;
uniform float uDepthSpread;
uniform float uGain;
uniform float uTips;
uniform float uTint;
uniform float uGradient;
uniform float uFold;

out vec2 vLocal;
out float vRadius;
out float vSegment;
out vec3 vLight;
out float vTint;

vec3 project(vec3 world, out float depth) {
  vec4 clip = uViewProj * vec4(world, 1.0);
  depth = clip.w;
  vec2 ndc = clip.xy / clip.w;
  return vec3((ndc * 0.5 + 0.5) * uViewport, clip.w);
}

vec2 part(vec2 px) {
  if (uPart <= 0.0 || uHover.w <= 0.0) return px;
  vec2 away = px - uHover.xy;
  float dist = length(away);
  float radius = uHover.z;
  float push = uPart * uHover.w * radius * 0.55 * exp(-dist * dist / (radius * radius));
  return px + away / max(dist, 1e-3) * push * smoothstep(0.0, radius * 0.25, dist);
}

void main() {
  int perFiber = int(uDots);
  int fiber = gl_InstanceID / perFiber;
  int bead = gl_InstanceID - fiber * perFiber;
  float fi = float(fiber);
  float fk = float(bead);

  float seed = hash11(fi * 1.731 + uRibbon * 17.0);
  float s = fract((fk + uFlow + seed * uDots) / uDots) - 0.5;
  float sNext = s + 1.0 / uDots;
  float layer = mod(fi, 3.0) - 1.0;
  float slot = floor(fi / 3.0);
  float perLayer = max(floor(uFibers / 3.0), 1.0);
  float v = ((slot + 0.5) / perLayer) * 2.0 - 1.0 + (hash11(fi * 3.113 + 4.0) - 0.5) * (1.6 / perLayer) + layer * 0.12 / perLayer;
  float depthOffset = (hash11(fi * 7.919 + 2.0) - 0.5) * uDepthSpread * (0.35 + 6.0 * s * s);

  vec3 normal;
  vec3 world = ribbonPoint(s, v, depthOffset, layer, normal);
  vec3 nextNormal;
  vec3 nextWorld = ribbonPoint(sNext, v, depthOffset, layer, nextNormal);

  float depth;
  vec3 p0 = project(world, depth);
  float nextDepth;
  vec3 p1 = project(nextWorld, nextDepth);
  vec2 px = part(p0.xy);
  vec2 pxNext = part(p1.xy);

  float baseRadius = max(0.5 * uSize * uDpr * uFocal / max(depth, 0.1), 0.45);
  float coc = min(uDof * abs(1.0 - uFocus / max(depth, 0.1)) * uViewport.y * 0.035, uMaxCoc * uDpr);
  float radius = baseRadius + coc;
  float spill = max(10.0 * uDpr, baseRadius);
  float energy = pow(baseRadius / min(radius, spill), 1.25) * pow(min(1.0, spill / radius), 2.0);

  vec3 toEye = normalize(uEye - world);
  float facing = abs(dot(normalize(normal), toEye));
  float focalPx = uViewport.y * ${f.toFixed(5)} / max(depth, 0.1);
  float widthPx = 2.0 * uWidth * uScale * focalPx;
  float stack = (widthPx * facing + 2.0 * baseRadius) / (widthPx + 2.0 * baseRadius);
  float spacingFace = length(nextWorld - world) * focalPx;
  float trail = (length(p1.xy - p0.xy) + 2.0 * baseRadius) / (spacingFace + 2.0 * baseRadius);
  float crowd = sqrt(clamp(stack * trail, 0.002, 1.0));
  float fold = pow(1.0 - facing, 6.0) * uFold;
  float endFade = smoothstep(0.5, 0.4, abs(s)) * smoothstep(1.6, 4.2, depth);
  float tipEnd = mix(0.6, 0.06 + 0.26 * hash11(fi * 9.137 + uPlace.w * 3.0), uTips);
  float tip = exp(-pow((s - tipEnd) / 0.0065, 2.0)) * uTips;
  endFade *= smoothstep(tipEnd + 0.003, tipEnd - 0.001, s);
  float appear = smoothstep(0.0, 0.12, uIntro * 1.3 - (s + 0.5) - seed * 0.12);
  float twinklePhase = hash11(fi * 13.7 + fk * 0.917 + uRibbon * 3.0);
  float twinkle = pow(max(sin(uTime * (1.2 + 2.6 * twinklePhase) * 3.0 + twinklePhase * 61.0), 0.0), 36.0) * uSparkle * (1.0 - 0.85 * uDotLength);
  float pulseGap = abs(s - uPulse.x) - uPulse.y * 0.42;
  float pulse = uPulse.z * exp(-pulseGap * pulseGap / 0.0018) * (abs(uPulse.w - uRibbon) < 0.5 ? 1.0 : 0.35);
  float strength = mix(0.45, 1.0, hash11(fi * 5.37 + 1.0)) * mix(1.0, 0.72, abs(layer) * uVolume);
  float intensity = energy * crowd * strength * endFade * appear * 0.8 * uGain * (1.0 + fold * 7.0 + twinkle * 5.0 + pulse * 4.0 + tip * 7.0);
  float highlight = clamp(fold * 0.55 + twinkle + pulse + tip, 0.0, 1.0);

  vec2 segment = (pxNext - px) * uDotLength;
  float segmentLength = length(segment);
  intensity *= mix(1.0, (2.0 * radius) / (segmentLength + 2.0 * radius) * 1.6, uDotLength);
  vec2 axis = segmentLength > 1e-3 ? segment / segmentLength : vec2(1.0, 0.0);
  vec2 perp = vec2(-axis.y, axis.x);
  vec2 corner = vec2(gl_VertexID == 1 || gl_VertexID == 3 ? 1.0 : 0.0, gl_VertexID >= 2 ? 1.0 : 0.0);
  float along = mix(-radius, segmentLength + radius, corner.x);
  float across = mix(-radius, radius, corner.y);
  vec2 position = px + axis * along + perp * across;

  vLocal = vec2(along, across);
  vRadius = radius;
  vSegment = segmentLength;
  vLight = vec3(intensity, highlight, coc / max(radius, 1e-3));
  float depthTint = clamp(uTint + smoothstep(uFocus, uFocus + 5.0, depth) * 0.5, 0.0, 1.0);
  vTint = uGradient < 0.5 ? depthTint : uGradient < 1.5 ? smoothstep(-0.42, 0.42, s) : clamp(v * 0.5 + 0.5, 0.0, 1.0);
  if (intensity < 0.0005) position = vec2(-1e4);
  gl_Position = vec4(position / uViewport * 2.0 - 1.0, 0.0, 1.0);
}`,p=`${d}
uniform mat4 uViewProj;
uniform vec2 uViewport;
uniform float uDpr;
uniform float uTime;
uniform float uSize;
uniform float uFocus;
uniform float uDof;
uniform float uMaxCoc;
uniform float uFocal;
uniform float uIntro;
uniform float uSparkle;
uniform float uScale;
uniform float uGradient;
uniform float uGain;

out vec2 vLocal;
out float vRadius;
out float vSegment;
out vec3 vLight;
out float vTint;

float hash11(float n) {
  return fract(sin(n * 91.3458) * 47453.5453);
}

void main() {
  float id = float(gl_InstanceID);
  vec3 seed = vec3(hash11(id * 1.37 + 0.3), hash11(id * 2.91 + 1.7), hash11(id * 4.17 + 2.9));
  vec3 box = vec3(9.0, 5.4, 6.0);
  vec3 p = (seed - 0.5) * box;
  p.z -= 0.6;
  p += 0.18 * vec3(sin(uTime * 0.21 + seed.x * 40.0), sin(uTime * 0.17 + seed.y * 40.0), sin(uTime * 0.13 + seed.z * 40.0));
  p *= mix(1.0, uScale, 0.5);
  vec4 clip = uViewProj * vec4(p, 1.0);
  float depth = clip.w;
  vec2 px = (clip.xy / clip.w * 0.5 + 0.5) * uViewport;
  float size = uSize * mix(0.5, 1.4, hash11(id * 7.7));
  float baseRadius = max(0.5 * size * uDpr * uFocal / max(depth, 0.1), 0.45);
  float coc = min(uDof * abs(1.0 - uFocus / max(depth, 0.1)) * uViewport.y * 0.035, uMaxCoc * uDpr * 1.6);
  float radius = baseRadius + coc;
  float spill = max(10.0 * uDpr, baseRadius);
  float energy = pow(baseRadius / min(radius, spill), 0.9) * pow(min(1.0, spill / radius), 2.0);
  float twinkle = pow(max(sin(uTime * (0.8 + 1.6 * seed.y) * 2.0 + seed.z * 50.0), 0.0), 8.0);
  float intensity = energy * (0.35 + 0.65 * twinkle) * mix(0.4, 1.0, seed.x) * smoothstep(0.3, 1.0, uIntro) * (depth > 0.2 ? 1.0 : 0.0);
  vec2 corner = vec2(gl_VertexID == 1 || gl_VertexID == 3 ? 1.0 : 0.0, gl_VertexID >= 2 ? 1.0 : 0.0) * 2.0 - 1.0;
  vec2 position = px + corner * radius;
  vLocal = corner * radius;
  vRadius = radius;
  vSegment = 0.0;
  vLight = vec3(intensity * 0.8 * uGain, 0.3 + 0.6 * twinkle * uSparkle, coc / max(radius, 1e-3));
  vTint = uGradient < 0.5 ? 0.45 + 0.55 * seed.y : seed.y;
  gl_Position = vec4(position / uViewport * 2.0 - 1.0, 0.0, 1.0);
}`,v=`${d}
uniform vec3 uGlowColor;
uniform vec3 uLineColor;
uniform vec3 uSecondaryColor;
in vec2 vLocal;
in float vRadius;
in float vSegment;
in vec3 vLight;
in float vTint;
out vec4 outColor;
void main() {
  float along = clamp(vLocal.x, 0.0, vSegment);
  float d = length(vec2(vLocal.x - along, vLocal.y));
  float rho = d / max(vRadius, 1e-3);
  if (rho > 1.0) discard;
  float soft = clamp(2.6 / max(vRadius, 1e-3), 0.14, 1.0);
  float disk = 1.0 - smoothstep(1.0 - soft, 1.0, rho);
  float bokeh = disk * (0.94 + 0.08 * smoothstep(0.55, 0.95, rho));
  float core = exp(-rho * rho * 3.2);
  float shape = mix(core, bokeh, smoothstep(0.25, 0.7, vLight.z));
  vec3 color = mix(mix(uGlowColor, uSecondaryColor, vTint), uLineColor, vLight.y);
  outColor = vec4(color * shape * vLight.x, shape * vLight.x);
}`,x=`${d}
out vec2 vUv;
void main() {
  vec2 p = vec2(gl_VertexID == 1 ? 3.0 : -1.0, gl_VertexID == 2 ? 3.0 : -1.0);
  vUv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 0.0, 1.0);
}`,g=`${d}
uniform sampler2D uSource;
uniform vec2 uTexel;
in vec2 vUv;
out vec4 outColor;
vec3 pick(vec2 uv) {
  vec3 c = texture(uSource, uv).rgb;
  float peak = max(max(c.r, c.g), c.b);
  return c * smoothstep(0.35, 1.2, peak);
}
void main() {
  vec2 o = uTexel;
  vec3 c = pick(vUv + vec2(-o.x, -o.y)) + pick(vUv + vec2(o.x, -o.y)) + pick(vUv + vec2(-o.x, o.y)) + pick(vUv + vec2(o.x, o.y));
  outColor = vec4(c * 0.25, 1.0);
}`,w=`${d}
uniform sampler2D uSource;
uniform vec2 uTexel;
in vec2 vUv;
out vec4 outColor;
void main() {
  vec2 o = uTexel;
  vec3 c = texture(uSource, vUv).rgb * 4.0;
  c += texture(uSource, vUv + vec2(-o.x, -o.y)).rgb;
  c += texture(uSource, vUv + vec2(o.x, -o.y)).rgb;
  c += texture(uSource, vUv + vec2(-o.x, o.y)).rgb;
  c += texture(uSource, vUv + vec2(o.x, o.y)).rgb;
  outColor = vec4(c / 8.0, 1.0);
}`,b=`${d}
uniform sampler2D uSource;
uniform vec2 uTexel;
in vec2 vUv;
out vec4 outColor;
void main() {
  vec2 o = uTexel;
  vec3 c = texture(uSource, vUv + vec2(-o.x * 2.0, 0.0)).rgb;
  c += texture(uSource, vUv + vec2(-o.x, o.y)).rgb * 2.0;
  c += texture(uSource, vUv + vec2(0.0, o.y * 2.0)).rgb;
  c += texture(uSource, vUv + vec2(o.x, o.y)).rgb * 2.0;
  c += texture(uSource, vUv + vec2(o.x * 2.0, 0.0)).rgb;
  c += texture(uSource, vUv + vec2(o.x, -o.y)).rgb * 2.0;
  c += texture(uSource, vUv + vec2(0.0, -o.y * 2.0)).rgb;
  c += texture(uSource, vUv + vec2(-o.x, -o.y)).rgb * 2.0;
  outColor = vec4(c / 12.0, 1.0);
}`,y=`${d}
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform float uGlow;
uniform float uBrightness;
uniform float uLightMode;
uniform float uGrain;
uniform float uVignette;
uniform float uFrame;
uniform vec2 uView;
uniform float uDpr;
in vec2 vUv;
out vec4 outColor;

float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float smoother(float x) {
  x = clamp(x, 0.0, 1.0);
  return x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
}

void main() {
  vec4 scene = texture(uScene, vUv);
  vec3 bloom = texture(uBloom, vUv).rgb;
  vec3 light = (scene.rgb + bloom * uGlow) * uBrightness;
  float reach = max(uVignette * 0.3, 1e-4);
  float mask = uVignette > 0.0 ? smoother(vUv.x / reach) * smoother((1.0 - vUv.x) / reach) * smoother(vUv.y / reach) * smoother((1.0 - vUv.y) / reach) : 1.0;
  vec2 cell = floor(vUv * uView / max(uDpr, 1.0));
  float grain = hash(cell + uFrame * 17.31) + hash(cell * 1.31 + uFrame * 3.7 + 9.1) - 1.0;
  if (uLightMode > 0.5) {
    float amount = scene.a * uBrightness;
    float ink = (1.0 - exp(-amount * 1.5)) * mask;
    ink = clamp(ink * (1.0 + grain * uGrain * 2.0), 0.0, 1.0);
    vec3 hue = clamp(scene.rgb / max(scene.a, 1e-4), 0.0, 1.0);
    vec3 tone = hue * mix(1.0, 0.72, clamp(amount * 0.35, 0.0, 1.0));
    outColor = vec4(tone * ink, ink);
    return;
  }
  vec3 color = (1.0 - exp(-light * 1.25)) * mask;
  float peak = max(color.r, max(color.g, color.b));
  color = max(color + grain * uGrain * (0.25 + 0.75 * sqrt(peak)), 0.0);
  outColor = vec4(color, max(color.r, max(color.g, color.b)));
}`,E=["uTime","uTwist","uRoll","uWaves","uWidth","uRibbon","uOrient","uScale","uPlace","uVolume","uViewProj","uEye","uViewport","uDpr","uFibers","uDots","uFlow","uSize","uFocus","uDof","uMaxCoc","uFocal","uIntro","uPulse","uHover","uPart","uDotLength","uSparkle","uDepthSpread","uGain","uTips","uTint","uGradient","uFold","uGlowColor","uLineColor","uSecondaryColor"],T=["uViewProj","uViewport","uDpr","uTime","uSize","uFocus","uDof","uMaxCoc","uFocal","uIntro","uSparkle","uScale","uGradient","uGain","uGlowColor","uLineColor","uSecondaryColor"],S=["uSource","uTexel"],R=["uScene","uBloom","uGlow","uBrightness","uLightMode","uGrain","uVignette","uFrame","uView","uDpr"],M=(e,t,r)=>Math.min(r,Math.max(t,e)),F=(e,t,r)=>{let o=e.createShader(t);return o?(e.shaderSource(o,r),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS))?o:(e.deleteShader(o),null):null},C=(e,t,r,o)=>{let a=F(e,e.VERTEX_SHADER,t),n=F(e,e.FRAGMENT_SHADER,r),i=e.createProgram();if(!a||!n||!i)return null;if(e.attachShader(i,a),e.attachShader(i,n),e.linkProgram(i),e.deleteShader(a),e.deleteShader(n),!e.getProgramParameter(i,e.LINK_STATUS))return e.deleteProgram(i),null;let l={};for(let t of o)l[t]=e.getUniformLocation(i,t);return{program:i,uniforms:l}},L=(e,t)=>[e[0]*t[0]+e[3]*t[1]+e[6]*t[2],e[1]*t[0]+e[4]*t[1]+e[7]*t[2],e[2]*t[0]+e[5]*t[1]+e[8]*t[2]];function k({glowColor:e="#8b5cf6",lineColor:f,secondaryColor:d,gradient:m="depth",speed:F=.5,scale:P=1,rotation:_=18,rollSpeed:D=.15,layers:j=3,waves:N=1,twist:V=1.2,threads:W=72,volume:U=.7,spread:G=1,density:I=1,thickness:A=1,flow:z=.4,fiberStyle:$="dots",tips:B=0,foldGlow:O=1,perspective:q=.65,depthOfField:X=.85,focusDepth:Q=0,particles:H=.5,sparkle:J=.5,glow:K=.8,brightness:Y=1,vignette:Z=.3,grain:ee=.06,mouseInteraction:et=!0,hoverEffect:er="focus",mouseStrength:eo=1,pulseOnClick:ea=!0,intro:en=!0,lightMode:ei=!1,paused:el=!1,dpr:eu,...es}){let ec=(0,r.useRef)(null),ef=(0,r.useRef)(null),ed=(0,r.useRef)(null),em={glowColor:String(e),lineColor:f?String(f):"",secondaryColor:d?String(d):"",gradient:i[m]??0,speed:Math.max(0,F),scale:M(P,.3,3),rotation:_*c,rollSpeed:D,layers:M(Math.round(j),1,3),waves:Math.max(0,N),twist:Math.max(0,V),threads:M(Math.round(W),6,180),volume:M(U,0,2),spread:M(G,.2,3),density:M(I,.2,3),thickness:M(A,.2,4),flow:z,dotLength:n[$]??0,tips:M(B,0,1),foldGlow:M(O,0,3),perspective:M(q,0,1),depthOfField:M(X,0,2),focusDepth:M(Q,-1,1),particles:M(H,0,2),sparkle:M(J,0,2),glow:Math.max(0,K),brightness:Math.max(0,Y),vignette:M(Z,0,1),grain:Math.max(0,ee),mouseInteraction:et,hover:a[er]??0,mouseStrength:Math.max(0,eo),pulseOnClick:ea,intro:en,lightMode:ei,paused:el,dpr:eu},eh=(0,r.useRef)(em);eh.current=em,(0,r.useEffect)(()=>{let e=ec.current,t=ef.current,r=t?.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!e||!t||!r)return;let o=!!r.getExtension("EXT_color_buffer_float"),a=C(r,h,v,E),n=C(r,p,v,T),i=C(r,x,g,S),c=C(r,x,w,S),f=C(r,x,b,S),d=C(r,x,y,R);if(!a||!n||!i||!c||!f||!d)return;let m=o?r.RGBA16F:r.RGBA8,F=()=>({texture:null,framebuffer:r.createFramebuffer(),width:0,height:0}),k=(e,t,o)=>{if(e.texture&&e.width===t&&e.height===o)return;e.texture&&r.deleteTexture(e.texture);let a=r.createTexture();r.bindTexture(r.TEXTURE_2D,a),r.texStorage2D(r.TEXTURE_2D,1,m,t,o),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.bindFramebuffer(r.FRAMEBUFFER,e.framebuffer),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,a,0),e.texture=a,e.width=t,e.height=o},P=F(),_=Array.from({length:5},F),D=r.createVertexArray(),j=document.createElement("canvas");j.width=1,j.height=1;let N=j.getContext("2d",{willReadFrequently:!0}),V=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,W={time:0,roll:0,flow:0,frame:0,intro:eh.current.intro&&!V?0:2.6,width:1,height:1,fit:1,colorKey:"",glow:[.55,.36,.96],line:[1,.85,.98],secondary:[.44,.29,.77],pointer:{x:0,y:0,inside:!1},hover:{x:0,y:0,presence:0,placed:!1},look:{x:0,y:0,vx:0,vy:0},focus:7.5+3*eh.current.focusDepth,pulse:{s:0,age:9,strength:0,ribbon:0},camera:null},U=0,G=0,I=!0,A=!0,z=(e,t)=>{if(!N||!e)return t;let r=/^[0-9a-f]{3,8}$/i.test(e)?`#${e}`:e;N.clearRect(0,0,1,1),N.fillStyle="#000000",N.fillStyle=r,N.fillRect(0,0,1,1);let[o,a,n]=N.getImageData(0,0,1,1).data;return[o/255,a/255,n/255]},$=(e,t,r,o)=>{let a=u[r],n=a[3],i=24*e,l=o*(.52*Math.sin(.43*i+.31*t+n)+.26*Math.sin(.79*i-.23*t+1.3+.7*n))+a[0]+i*a[2],s=.65*o*Math.sin(.33*i+.19*t+.7+1.3*n)+a[1];return[i,l,s]},B=(e,t)=>{let r=e.viewProj,o=r[0]*t[0]+r[4]*t[1]+r[8]*t[2]+r[12],a=r[1]*t[0]+r[5]*t[1]+r[9]*t[2]+r[13],n=r[3]*t[0]+r[7]*t[1]+r[11]*t[2]+r[15];return{x:(o/n*.5+.5)*W.width,y:(.5-a/n*.5)*W.height,depth:n}},O=(e,t,r)=>{let o=W.camera;if(!o)return null;let a=null;for(let n=0;n<e.layers;n+=1)for(let i=0;i<=96;i+=1){let l=i/96-.5,u=$(l,W.time,n,e.waves).map(t=>t*e.scale*W.fit),s=L(o.orient,u),c=B(o,s),f=Math.hypot(c.x-t,c.y-r);(!a||f<a.gap)&&(a={gap:f,s:l,ribbon:n,depth:c.depth})}return a},q=()=>{let r=eh.current,o=Math.max(1,e.clientWidth),a=Math.max(1,e.clientHeight),n=Math.min(r.dpr||window.devicePixelRatio||1,2),i=Math.max(o,a)*n,l=i>2400?2400*n/i:n,u=Math.max(1,Math.round(o*l)),s=Math.max(1,Math.round(a*l));(t.width!==u||t.height!==s)&&(t.width=u,t.height=s),W.width=o,W.height=a,W.fit=M(o/a/1.5,.6,1),Q()},X=(e,t,o,a)=>{r.bindFramebuffer(r.FRAMEBUFFER,t.framebuffer),r.viewport(0,0,t.width,t.height),r.useProgram(e.program),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,o.texture),r.uniform1i(e.uniforms.uSource,0),r.uniform2f(e.uniforms.uTexel,a[0],a[1]),r.drawArrays(r.TRIANGLES,0,3)},Q=()=>{var e,o,m;let h,p,v,x,g,w,b,y,E,T,S,R,F,C,L,j=eh.current;(h=`${j.glowColor}|${j.lineColor}|${j.secondaryColor}|${j.lightMode}`)!==W.colorKey&&(W.colorKey=h,W.glow=z(j.glowColor,[.55,.36,.96]),W.secondary=j.secondaryColor?z(j.secondaryColor,W.glow):W.glow.map(e=>.8*e),j.lineColor?W.line=z(j.lineColor,W.glow):W.line=j.lightMode?W.glow:W.glow.map(e=>e+(1-e)*.72));let N=(p=W.width/Math.max(W.height,1),v=[0,0,7.5],g=-1/59.9,w=[(x=1/Math.tan(.28))/p,0,0,0,0,x,0,0,0,0,60.1*g,-1,0,0,12*g,0],b=[1,0,0,0,0,1,0,0,0,0,1,0,-v[0],-v[1],-v[2],1],e=.85*j.perspective+.22*W.look.x,o=.12-.14*W.look.y,m=j.rotation,y=Math.cos(e),E=Math.sin(e),T=Math.cos(o),S=Math.sin(o),R=Math.cos(m),F=Math.sin(m),L=(C=(e,t)=>{let r=Array(9);for(let o=0;o<3;o+=1)for(let a=0;a<3;a+=1)r[3*o+a]=e[a]*t[3*o]+e[3+a]*t[3*o+1]+e[6+a]*t[3*o+2];return r})([R,F,0,-F,R,0,0,0,1],C([1,0,0,0,T,S,0,-S,T],[y,0,-E,0,1,0,E,0,y])),{eye:v,viewProj:((e,t)=>{let r=Array(16);for(let o=0;o<4;o+=1)for(let a=0;a<4;a+=1)r[4*o+a]=e[a]*t[4*o]+e[4+a]*t[4*o+1]+e[8+a]*t[4*o+2]+e[12+a]*t[4*o+3];return r})(w,b),orient:L});W.camera=N;let U=t.height/Math.max(W.height,1),G=j.paused||V?1:M(W.intro/2.6,0,1),I=1-(1-G)*(1-G)*(1-G);k(P,t.width,t.height),r.bindVertexArray(D),r.bindFramebuffer(r.FRAMEBUFFER,P.framebuffer),r.viewport(0,0,t.width,t.height),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE);let A=Math.round(260*j.density),$=22*M(Math.sqrt(56e3/(j.threads*A*j.layers)),.45,1),B=Math.max(.8*j.thickness,.45)**2/.64,O=Math.pow(j.threads/72*j.density*B,-.75);r.useProgram(a.program);let q=a.uniforms;r.uniform1f(q.uTime,W.time),r.uniform1f(q.uTwist,j.twist),r.uniform1f(q.uRoll,W.roll),r.uniform1f(q.uWaves,j.waves),r.uniform1f(q.uWidth,.62*j.spread),r.uniformMatrix3fv(q.uOrient,!1,N.orient),r.uniform1f(q.uScale,j.scale*W.fit),r.uniformMatrix4fv(q.uViewProj,!1,N.viewProj),r.uniform3f(q.uEye,N.eye[0],N.eye[1],N.eye[2]),r.uniform2f(q.uViewport,t.width,t.height),r.uniform1f(q.uDpr,U),r.uniform1f(q.uFibers,j.threads),r.uniform1f(q.uDots,A),r.uniform1f(q.uFlow,W.flow),r.uniform1f(q.uSize,1.6*j.thickness),r.uniform1f(q.uFocus,W.focus),r.uniform1f(q.uDof,j.depthOfField),r.uniform1f(q.uMaxCoc,$),r.uniform1f(q.uFocal,7.5),r.uniform1f(q.uIntro,I),r.uniform4f(q.uPulse,W.pulse.s,W.pulse.age,W.pulse.strength,W.pulse.ribbon),r.uniform4f(q.uHover,W.hover.x*U,(W.height-W.hover.y)*U,140*U,W.hover.presence*j.mouseStrength),r.uniform1f(q.uPart,+(1===j.hover)),r.uniform1f(q.uDotLength,j.dotLength),r.uniform1f(q.uSparkle,j.sparkle),r.uniform1f(q.uDepthSpread,.12),r.uniform1f(q.uVolume,j.volume),r.uniform3f(q.uGlowColor,W.glow[0],W.glow[1],W.glow[2]),r.uniform3f(q.uLineColor,W.line[0],W.line[1],W.line[2]),r.uniform3f(q.uSecondaryColor,W.secondary[0],W.secondary[1],W.secondary[2]),r.uniform1f(q.uTips,j.tips),r.uniform1f(q.uGradient,j.gradient),r.uniform1f(q.uFold,j.foldGlow);for(let e=0;e<j.layers;e+=1){let t=u[e];r.uniform1f(q.uRibbon,e),r.uniform4f(q.uPlace,t[0],t[1],t[2],t[3]),r.uniform1f(q.uGain,s[e]*O),r.uniform1f(q.uTint,l[e]),r.drawArraysInstanced(r.TRIANGLE_STRIP,0,4,j.threads*A)}let Q=Math.round(420*j.particles);if(Q>0){r.useProgram(n.program);let e=n.uniforms;r.uniformMatrix4fv(e.uViewProj,!1,N.viewProj),r.uniform2f(e.uViewport,t.width,t.height),r.uniform1f(e.uDpr,U),r.uniform1f(e.uTime,W.time),r.uniform1f(e.uSize,2.2*j.thickness),r.uniform1f(e.uFocus,W.focus),r.uniform1f(e.uDof,j.depthOfField),r.uniform1f(e.uMaxCoc,22),r.uniform1f(e.uFocal,7.5),r.uniform1f(e.uIntro,I),r.uniform1f(e.uSparkle,j.sparkle),r.uniform1f(e.uScale,j.scale*W.fit),r.uniform1f(e.uGradient,j.gradient),r.uniform1f(e.uGain,1/j.thickness),r.uniform3f(e.uGlowColor,W.glow[0],W.glow[1],W.glow[2]),r.uniform3f(e.uLineColor,W.line[0],W.line[1],W.line[2]),r.uniform3f(e.uSecondaryColor,W.secondary[0],W.secondary[1],W.secondary[2]),r.drawArraysInstanced(r.TRIANGLE_STRIP,0,4,Q)}r.disable(r.BLEND);let H=j.glow>.001&&!j.lightMode;if(r.bindVertexArray(D),H){_.forEach((e,r)=>{k(e,Math.max(1,Math.round(t.width/2**(r+1))),Math.max(1,Math.round(t.height/2**(r+1))))}),X(i,_[0],P,[.5/P.width,.5/P.height]);for(let e=1;e<5;e+=1)X(c,_[e],_[e-1],[1/_[e-1].width,1/_[e-1].height]);r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE);for(let e=4;e>0;e-=1)X(f,_[e-1],_[e],[.5/_[e].width,.5/_[e].height]);r.disable(r.BLEND)}r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,t.width,t.height),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.useProgram(d.program);let J=d.uniforms;r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,P.texture),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,H?_[0].texture:P.texture),r.uniform1i(J.uScene,0),r.uniform1i(J.uBloom,1),r.uniform1f(J.uGlow,H?j.glow:0),r.uniform1f(J.uBrightness,j.brightness),r.uniform1f(J.uLightMode,+!!j.lightMode),r.uniform1f(J.uGrain,j.grain),r.uniform1f(J.uVignette,j.vignette),r.uniform1f(J.uFrame,W.frame%977),r.uniform2f(J.uView,t.width,t.height),r.uniform1f(J.uDpr,U),r.drawArrays(r.TRIANGLES,0,3),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,null),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,null),r.bindVertexArray(null)},H=e=>{if(U=0,!A||!I||document.hidden)return;let t=eh.current,r=G?(e-G)/1e3:1/60,o=Math.min(.05,r);G=e;let a=!t.paused&&!V;a?(W.frame+=1,W.time+=o*t.speed,W.roll+=o*t.speed*t.rollSpeed,W.flow+=o*t.flow*12,W.intro+=Math.min(r,1)):W.intro<2.6&&(W.intro=2.6),W.pulse.age+=o,W.pulse.strength=Math.max(0,1-W.pulse.age/1.8)**2;let{pointer:n,hover:i,look:l}=W,u=t.mouseInteraction&&n.inside&&!V;u&&!i.placed&&(i.x=n.x,i.y=n.y,i.placed=!0),i.x+=(n.x-i.x)*(1-Math.exp(-o/.08)),i.y+=(n.y-i.y)*(1-Math.exp(-o/.08));let s=+!!u;i.presence+=(s-i.presence)*(1-Math.exp(-o/(s>i.presence?.3:.6))),!u&&i.presence<.001&&(i.placed=!1);let c=u?(n.x/W.width-.5)*.5:0,f=u?(.5-n.y/W.height)*.5:0;l.vx+=(30*(c-l.x)-11*l.vx)*o,l.vy+=(30*(f-l.y)-11*l.vy)*o,l.x+=l.vx*o,l.y+=l.vy*o;let d=7.5+3*t.focusDepth,m=d;if(u&&0===t.hover){let e=O(t,i.x,i.y);e&&(m=d+(e.depth-d)*i.presence*Math.min(1,t.mouseStrength))}W.focus+=(m-W.focus)*(1-Math.exp(-o/.35)),Q();let h=Math.abs(s-i.presence)>.002||Math.abs(c-l.x)>2e-4||Math.abs(f-l.y)>2e-4||Math.abs(m-W.focus)>.001||W.pulse.strength>.001;a||h?U=requestAnimationFrame(H):G=0},J=()=>{!U&&A&&I&&!document.hidden&&(U=requestAnimationFrame(H))},K=t=>{let r=e.getBoundingClientRect(),o=t.clientX-r.left,a=t.clientY-r.top;W.pointer.x=o,W.pointer.y=a,W.pointer.inside=o>=0&&a>=0&&o<=r.width&&a<=r.height,J()},Y=t=>{let r=eh.current;if(!r.mouseInteraction||!r.pulseOnClick||0!==t.button||V||t.target instanceof Element&&t.target.closest('a, button, input, textarea, select, label, [role="button"]'))return;let o=e.getBoundingClientRect(),a=t.clientX-o.left,n=t.clientY-o.top;if(a<0||n<0||a>o.width||n>o.height)return;let i=O(r,a,n);i&&(W.pulse={s:i.s,age:0,strength:1,ribbon:i.ribbon}),J()},Z=()=>{W.pointer.inside=!1,J()},ee=()=>{G=0,J()},et=new ResizeObserver(q);et.observe(e);let er=new IntersectionObserver(e=>{(I=e.some(e=>e.isIntersecting))&&(G=0,J())});return er.observe(e),window.addEventListener("pointermove",K,{passive:!0}),window.addEventListener("pointerdown",Y),document.documentElement.addEventListener("pointerleave",Z),document.addEventListener("visibilitychange",ee),q(),J(),ed.current=()=>{U||Q(),J()},()=>{A=!1,cancelAnimationFrame(U),ed.current=null,et.disconnect(),er.disconnect(),window.removeEventListener("pointermove",K),window.removeEventListener("pointerdown",Y),document.documentElement.removeEventListener("pointerleave",Z),document.removeEventListener("visibilitychange",ee),r.deleteVertexArray(D),[P,..._].forEach(e=>{e.texture&&r.deleteTexture(e.texture),r.deleteFramebuffer(e.framebuffer)}),[a,n,i,c,f,d].forEach(e=>r.deleteProgram(e.program))}},[]),(0,r.useEffect)(()=>{ed.current?.()});let{className:ep="",...ev}=es;return(0,t.jsx)("div",{ref:ec,className:`${o.default.container}${ep?` ${ep}`:""}`,...ev,children:(0,t.jsx)("canvas",{ref:ef,className:o.default.canvas,"aria-hidden":"true"})})}var P=e.i(67898);e.s(["SiteFibers",0,function(){let e=(0,P.i)(),o=(0,P.k)(),[a,n]=(0,r.useState)("dark"),[i,l]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{l(!0);let e=()=>{n("light"===document.documentElement.dataset.theme?"light":"dark")};e();let t=new MutationObserver(e);return t.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>t.disconnect()},[]),i&&"low"!==e)?(0,t.jsx)(k,{glowColor:"#8b5cf6",layers:3,twist:1.2,threads:59,fiberStyle:"dots",depthOfField:.85,hoverEffect:"focus",intro:!0,mouseInteraction:!0,lineColor:"#dfd1fc",secondaryColor:"#6f4ac5",gradient:"depth",waves:1,volume:.7,spread:1,scale:1,rotation:18,perspective:.65,density:1,thickness:1,tips:0,foldGlow:1,speed:.5,flow:.4,rollSpeed:.15,focusDepth:0,particles:.5,sparkle:.5,glow:.8,brightness:1,vignette:.3,grain:.06,mouseStrength:1,pulseOnClick:!0,lightMode:"light"===a,paused:o}):null}],18060)},50309,e=>{var t=e.i(43476),r=e.i(22016),o=e.i(18566),a=e.i(71645),n=e.i(88653),i=e.i(46932),l=e.i(70326),u=e.i(98902),s=e.i(56480);function c(){let[e,r]=(0,a.useState)("dark"),[o,n]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{r(document.documentElement.dataset.theme||"dark"),n(!0)},[]),(0,t.jsxs)("button",{type:"button",className:s.default.toggle,onClick:()=>{let t="dark"===e?"light":"dark";r(t),document.documentElement.dataset.theme=t;try{localStorage.setItem("btf-theme",t)}catch{}},"aria-label":"dark"===e?"切换到浅色模式":"切换到深色模式",title:"dark"===e?"切换到浅色模式":"切换到深色模式",children:[(0,t.jsx)("span",{className:s.default.track,"data-light":"light"===e,children:(0,t.jsx)("span",{className:s.default.knob})}),(0,t.jsx)("span",{className:s.default.label,children:o?"dark"===e?"深":"浅":"—"})]})}var f=e.i(30747),d=e.i(16807);e.s(["SiteHeader",0,function(){let e=(0,o.usePathname)(),[s,m]=(0,a.useState)(!1),[h,p]=(0,a.useState)(!1),[v,x]=(0,a.useState)(!1),[g,w]=(0,a.useState)(!1),b=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=0,t=()=>{e||(e=requestAnimationFrame(()=>{e=0;let t=window.scrollY;m(t>24);let r=document.documentElement.scrollHeight-window.innerHeight;b.current&&b.current.style.setProperty("--p",String(r>0?t/r:0))}))};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t),e&&cancelAnimationFrame(e)}},[]),(0,a.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,t=0,r=()=>{x(!1),t&&window.clearTimeout(t),e||(t=window.setTimeout(()=>x(!0),3e3))},o=["scroll","pointermove","pointerdown","touchstart","keydown"];return o.forEach(e=>window.addEventListener(e,r,{passive:!0})),r(),()=>{o.forEach(e=>window.removeEventListener(e,r)),t&&window.clearTimeout(t)}},[]),(0,a.useEffect)(()=>{p(!1)},[e]),(0,a.useEffect)(()=>(document.body.style.overflow=h?"hidden":"",()=>{document.body.style.overflow=""}),[h]),(0,a.useEffect)(()=>{let e=e=>"Escape"===e.key&&p(!1);return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);let y=t=>"/"===t?"/"===e:e.startsWith(t);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("header",{className:d.default.header,"data-scrolled":s,"data-idle":!v||h||g?"false":"true",onPointerEnter:()=>w(!0),onPointerLeave:()=>w(!1),children:[(0,t.jsxs)("div",{className:`wrap ${d.default.inner}`,children:[(0,t.jsx)(r.default,{href:"/",className:d.default.brand,"aria-label":`${l.f.nameCn} 首页`,children:(0,t.jsx)(u.BrandLockup,{size:32,nameCn:l.f.nameCn,nameEn:l.f.nameEn})}),(0,t.jsx)("nav",{className:d.default.nav,"aria-label":"主导航",children:l.f.nav.map(e=>(0,t.jsxs)(r.default,{href:e.href,className:d.default.link,"aria-current":y(e.href)?"page":void 0,children:[(0,t.jsx)("span",{className:d.default.linkCn,children:e.cn}),(0,t.jsx)("span",{className:d.default.linkEn,children:e.en})]},e.href))}),(0,t.jsxs)("div",{className:d.default.right,children:[(0,t.jsx)(c,{}),(0,t.jsxs)(r.default,{href:"/contact",className:`btn btn--sm ${d.default.cta}`,children:[(0,t.jsx)("span",{children:"联系我"}),(0,t.jsx)("span",{"aria-hidden":"true",children:"↗"})]}),(0,t.jsx)("button",{type:"button",className:d.default.burger,"data-open":h,"aria-expanded":h,"aria-controls":"mobile-menu","aria-label":h?"关闭菜单":"打开菜单",onClick:()=>p(e=>!e),children:(0,t.jsxs)("span",{className:d.default.burgerLines,children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})})]})]}),(0,t.jsx)("span",{ref:b,className:d.default.progress,"aria-hidden":"true"})]}),(0,t.jsx)(n.f,{children:h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.f.div,{className:d.default.scrim,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:f.p.tap},onClick:()=>p(!1)}),(0,t.jsxs)(i.f.div,{id:"mobile-menu",className:d.default.sheet,initial:{clipPath:"inset(0 0 100% 0)"},animate:{clipPath:"inset(0 0 0% 0)"},exit:{clipPath:"inset(0 0 100% 0)"},transition:{duration:f.p.page,ease:f.L.outExpo},children:[(0,t.jsx)("div",{className:d.default.sheetList,children:l.f.nav.map((e,o)=>(0,t.jsx)(i.f.div,{initial:{opacity:0,y:26},animate:{opacity:1,y:0},transition:{delay:.12+.07*o,duration:.5,ease:f.L.outExpo},children:(0,t.jsxs)(r.default,{href:e.href,className:d.default.sheetItem,"aria-current":y(e.href)?"page":void 0,children:[(0,t.jsx)("span",{className:d.default.sheetNo,children:String(o+1).padStart(2,"0")}),(0,t.jsx)("span",{className:d.default.sheetCn,children:e.cn}),(0,t.jsx)("span",{className:d.default.sheetEn,children:e.en})]})},e.href))}),(0,t.jsxs)("div",{className:d.default.sheetFoot,children:[(0,t.jsx)("span",{className:"en-label",children:l.f.nameEn}),(0,t.jsx)("p",{style:{maxWidth:"32ch"},children:l.f.tagline}),(0,t.jsx)("a",{className:"link-sweep",href:`mailto:${l.f.contact.items[0].value}`,children:l.f.contact.items[0].value})]})]})]})})]})}],50309)},14637,e=>{var t=e.i(43476),r=e.i(15446);e.s(["BackToTop",0,function({className:e}){return(0,t.jsxs)("button",{type:"button",className:e,onClick:()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:0,behavior:e?"auto":"smooth"})},children:[(0,t.jsx)("span",{children:"回到顶部"}),(0,t.jsx)("span",{"aria-hidden":"true",className:r.default.arrow,children:"↑"})]})}])},40242,e=>{var t=e.i(43476),r=e.i(71645),o=e.i(67898),a=e.i(75157),n=e.i(11422);e.s(["CustomCursor",0,function(){let e=(0,r.useRef)(null),i=(0,r.useRef)(null),[l,u]=(0,r.useState)(!1),[s,c]=(0,r.useState)(""),[f,d]=(0,r.useState)(!1),[m,h]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{let e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches,e)return u(!0),document.documentElement.dataset.cursor="custom",()=>{delete document.documentElement.dataset.cursor}},[]),(0,r.useEffect)(()=>{if(!l)return;let t=i.current,r=e.current;if(!t||!r)return;let n=(0,o.P)(),u=0,s=window.innerWidth/2,f=window.innerHeight/2,m=s,p=f,v=performance.now(),x=e=>{let n=Math.min((e-v)/1e3,1/30);v=e;let i=(o.r.tx+1)/2*window.innerWidth,l=(o.r.ty+1)/2*window.innerHeight;m=i,p=l,s=(0,a.w)(s,i,22,n),f=(0,a.w)(f,l,22,n),r.style.transform=`translate3d(${m}px, ${p}px, 0) translate(-50%, -50%)`,t.style.transform=`translate3d(${s}px, ${f}px, 0) translate(-50%, -50%)`,u=requestAnimationFrame(x)};u=requestAnimationFrame(x);let g=e=>{let t=e.target?.closest?.("a, button, [role='button'], input, select, textarea, [data-cursor]");t?(d(!0),c(t.dataset.cursorLabel??"")):(d(!1),c(""))},w=()=>h(!0),b=()=>h(!1);return window.addEventListener("mouseover",g,{passive:!0}),window.addEventListener("mousedown",w),window.addEventListener("mouseup",b),()=>{cancelAnimationFrame(u),n(),window.removeEventListener("mouseover",g),window.removeEventListener("mousedown",w),window.removeEventListener("mouseup",b)}},[l]),l)?(0,t.jsxs)("div",{className:n.default.layer,"aria-hidden":"true",children:[(0,t.jsx)("div",{ref:i,className:n.default.ring,"data-hover":f,"data-down":m,"data-label":!!s,children:s&&(0,t.jsx)("span",{className:n.default.label,children:s})}),(0,t.jsx)("div",{ref:e,className:n.default.dot,"data-hover":f})]}):null}])},33447,e=>{var t=e.i(43476),r=e.i(71645),o=e.i(88653),a=e.i(46932),n=e.i(98902),i=e.i(70326),l=e.i(30747),u=e.i(67898),s=e.i(9470);let c="btf-intro-seen";e.s(["Preloader",0,function(){let[e,f]=(0,r.useState)(!0),[d,m]=(0,r.useState)(0),h=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,t=!1;try{t="1"===sessionStorage.getItem(c)}catch{t=!1}if(t||e){f(!1),u.q.finish();return}document.body.style.overflow="hidden";let r=performance.now(),o=0,a=e=>{let t=Math.min((e-r)/1150,1);m(Math.round((1-Math.pow(1-t,2.2))*100)),t<1?o=requestAnimationFrame(a):i()};o=requestAnimationFrame(a);let n=window.setTimeout(i,2600);function i(){if(!h.current){h.current=!0,window.clearTimeout(n);try{sessionStorage.setItem(c,"1")}catch{}document.body.style.overflow="",m(100),f(!1),u.q.finish()}}return()=>{cancelAnimationFrame(o),window.clearTimeout(n),document.body.style.overflow="",u.q.finish()}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("noscript",{children:(0,t.jsx)("style",{children:".btfPreloader{display:none !important}"})}),(0,t.jsx)(o.f,{children:e&&(0,t.jsxs)(a.f.div,{className:`btfPreloader ${s.default.shell}`,initial:{clipPath:"inset(0 0 0% 0)"},exit:{clipPath:"inset(0 0 100% 0)"},transition:{duration:.7,ease:l.L.inOutQuart},"aria-hidden":"true",children:[(0,t.jsxs)("div",{className:s.default.center,children:[(0,t.jsx)(n.BrandMark,{size:72,animated:!0,accent:"var(--color-orange)"}),(0,t.jsxs)("div",{className:s.default.names,children:[(0,t.jsx)("span",{className:s.default.cn,children:i.f.nameCn}),(0,t.jsx)("span",{className:s.default.en,children:i.f.nameEn})]})]}),(0,t.jsxs)("div",{className:s.default.bottom,children:[(0,t.jsx)("div",{className:s.default.bar,children:(0,t.jsx)(a.f.span,{className:s.default.barFill,initial:{scaleX:0},animate:{scaleX:d/100},transition:{ease:"linear",duration:.08}})}),(0,t.jsxs)("div",{className:s.default.meta,children:[(0,t.jsx)("span",{className:"en-label",children:i.f.roleEn}),(0,t.jsxs)("span",{className:s.default.pct,children:[String(d).padStart(3,"0"),"%"]})]})]})]})})]})}])}],60817,e=>{e.v({canvas:"dvCeAG_canvas",container:"dvCeAG_container"})},16807,e=>{e.v({brand:"azVQWW_brand",burger:"azVQWW_burger",burgerLines:"azVQWW_burgerLines",cta:"azVQWW_cta",header:"azVQWW_header",inner:"azVQWW_inner",link:"azVQWW_link",linkCn:"azVQWW_linkCn",linkEn:"azVQWW_linkEn",nav:"azVQWW_nav",progress:"azVQWW_progress",right:"azVQWW_right",scrim:"azVQWW_scrim",sheet:"azVQWW_sheet",sheetCn:"azVQWW_sheetCn",sheetEn:"azVQWW_sheetEn",sheetFoot:"azVQWW_sheetFoot",sheetItem:"azVQWW_sheetItem",sheetList:"azVQWW_sheetList",sheetNo:"azVQWW_sheetNo"})},15446,e=>{e.v({arrow:"lxbnwW_arrow"})},11422,e=>{e.v({dot:"n3IuUW_dot",label:"n3IuUW_label",layer:"n3IuUW_layer",ring:"n3IuUW_ring"})},9470,e=>{e.v({bar:"mhuJGq_bar",barFill:"mhuJGq_barFill",bottom:"mhuJGq_bottom",center:"mhuJGq_center",cn:"mhuJGq_cn",en:"mhuJGq_en",meta:"mhuJGq_meta",names:"mhuJGq_names",pct:"mhuJGq_pct",shell:"mhuJGq_shell"})},56480,e=>{e.v({knob:"BDCMra_knob",label:"BDCMra_label",toggle:"BDCMra_toggle",track:"BDCMra_track"})}]);