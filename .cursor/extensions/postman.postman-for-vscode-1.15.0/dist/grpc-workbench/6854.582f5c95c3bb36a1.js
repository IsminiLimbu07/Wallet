"use strict";(self.webpackChunkgrpc_workbench=self.webpackChunkgrpc_workbench||[]).push([[6854],{26854:(e,n,l)=>{l.r(n),l.d(n,{FileUploader:()=>ze,KeyValueEditor:()=>yl});var t=l(7560),i=l(40540),o=l.n(i),s=l(59530),r=l.n(s),a=l(78476),d=l(50297),c=l(98283),u=l(81410),h=l(69356),p=l.n(h),b=l(22833),g=l.n(b),v=l(65848),f=l(52322);let m,x,y=e=>e;const C=r().div(m||(m=y`
  position: relative;
  display: flex;

  /* TODO: non-uniform spacing because of inconsistencies with design tokens */
  width: 40px;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4px;
  border-left: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  background-color: ${0};
`),(e=>e.disabled?"var(--background-color-secondary);":"inherit")),w=r()(v.Z)(x||(x=y`
  > span > div {
    height: 16px;
    width: 16px;
    background-color: ${0};
  }

  &.disabled {
    opacity: 0.4;
  }
`),(e=>e.isChecked?"dark"===e.theme.name?"#ffffff":"#262626":"inherit"));function k(e){return(0,f.jsx)(C,{disabled:e.disabled,children:e.shouldShowCheckbox&&(0,f.jsx)(w,{className:g()({disabled:e.isCheckboxDisabled}),isChecked:e.isRowEnabled,onChange:e.onToggleEnabledState,isDisabled:e.isCheckboxDisabled})})}const j=["content"];let V;const E=r().div(V||(V=(e=>e)`
  display: flex;
  flex: ${0};
  overflow-y: visible;
  min-width: 0;

  /* Commenting this out as it is clipping the rendering of aether dropdown in the variable-type column. */

  /* overflow-x: clip; */
  margin: var(--spacing-zero);
  position: relative;
  height: 32px;
  box-sizing: border-box;
  border-right: ${0};
  background-color: ${0};

  .key-value-cell {
    color: ${0};
  }
`),(e=>e.isLastColumn?`0 1 ${e.columnWidth}%`:`0 0 ${e.columnWidth}%`),(({isLastColumn:e})=>e?"unset":"var(--border-width-default) var(--border-style-solid)\n    var(--border-color-default)"),(e=>e.isNonEditable?"var(--background-color-secondary)":"inherit"),(e=>e.isNonEditable?"var(--content-color-secondary)":"inherit"));function S(e){let{content:n}=e,l=(0,c.Z)(e,j);return(0,f.jsx)(E,(0,t.Z)({},l,{children:n}))}const T=e=>e?e.charAt(0).toUpperCase()+e.slice(1):"";function D(e,n){if(typeof e!=typeof n)return!1;const l=typeof e;return["string","number","boolean","undefined"].includes(typeof e)?e===n:Array.isArray(e)&&Array.isArray(n)?e.length===n.length&&e.every(((e,l)=>D(e,n[l]))):"object"===l&&(null===e&&null===n||null!==e&&null!==n&&!Array.isArray(e)&&!Array.isArray(n)&&Object.keys(e).length===Object.keys(n).length&&Object.keys(e).every((l=>D(e[l],n[l]))))}var R=l(59713);let Z;const M=r().div(Z||(Z=(e=>e)`
  align-items: center;
  height: 24px;
  display: inline-flex;
  padding: 0 var(--spacing-s);
  border-radius: var(--border-radius-default);

  &:hover {
    background-color: var(--highlight-background-color-primary);
    cursor: pointer;
  }
`));function A({onClick:e}){return(0,f.jsx)(M,{className:"delete-button",onClick:e,role:"button","aria-label":"delete-row",children:(0,f.jsx)(R.Z,{})})}function W(e,n,l){let t,i,o,s,r,a,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");if(n=+n||0,l&&function(e){const n=typeof e;return null!=e&&("object"===n||"function"===n)}(l)){if(c=!(null==l||!l.leading),u="maxWait"in l,u){const e=(null==l?void 0:l.maxWait)||0;o=Math.max(+e,n)}h="trailing"in l?!(null==l||!l.trailing):h}function p(n){const l=t,o=i;return t=i=void 0,d=n,s=e.apply(o,l),s}function b(e,n){return setTimeout(e,n)}function g(e){const l=e-a;return void 0===a||l>=n||l<0||u&&e-d>=o}function v(){const e=Date.now();if(g(e))return f(e);r=b(v,function(e){const l=e-d,t=n-(e-a);return u?Math.min(t,o-l):t}(e))}function f(e){return r=void 0,h&&t?p(e):(t=i=void 0,s)}function m(...e){const l=Date.now(),o=g(l);if(t=e,i=this,a=l,o){if(void 0===r)return function(e){return d=e,r=b(v,n),c?p(e):s}(a);if(u)return r=b(v,n),p(a)}return void 0===r&&(r=b(v,n)),s}return m.cancel=function(){void 0!==r&&clearTimeout(r),d=0,t=a=i=r=void 0},m.flush=function(){return void 0===r?s:f(Date.now())},m.pending=function(){return void 0!==r},m}const O=["indicators","isDuplicated"];let P,F,z=e=>e;const B=r().textarea(P||(P=z`
  width: 100%;
  color: var(--content-color-primary);
  font-size: inherit;
  font-family: inherit;
  outline: transparent;
  resize: none;
  font-weight: inherit;
  background: var(--background-color-primary);
  margin: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-zero) var(--spacing-xs)
    var(--spacing-xs);
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  z-index: 1;

  ${0}
`),(({isDuplicated:e})=>e&&"padding-right: var(--spacing-l)")),$=r().div(F||(F=z`
  display: flex;
  align-items: flex-start;
  max-height: var(--size-m);
  height: 100%;
  width: 100%;
`)),N=W(((e,n,l)=>{var t,i;const o=null!=(t=(null==e?void 0:e.scrollHeight)/(null==e||null==(i=e.parentNode)?void 0:i.clientHeight))?t:0;o!==n&&l(Math.ceil(o))}),100);function L(e){let{indicators:n,isDuplicated:l}=e,t=(0,c.Z)(e,O);const o=(0,i.useRef)(null),[s,r]=(0,i.useState)(1);return(0,i.useEffect)((()=>(setTimeout((()=>{if(o.current){const e=o.current.value.length;o.current.selectionStart=e,o.current.selectionEnd=e,o.current.scrollTop=o.current.scrollHeight}})),N(o.current,s,r),()=>{N.cancel()})),[s]),(0,f.jsxs)($,{children:[(0,f.jsx)(B,{isDuplicated:l,role:"cell","aria-label":`${t.type} input`,ref:o,value:t.value,rows:s,onChange:e=>{t.onChange(e.target.value),N(o.current,s,r)},autoFocus:t.shouldFocusOnMount,placeholder:t.placeholder||"",readOnly:t.readOnly,onBlur:t.onBlur,onKeyDown:e=>{t.preventEnter&&13===e.keyCode&&e.preventDefault()}}),n]})}let H,I,K=e=>e;function _(e){return"string"==typeof e?e:e?e&&e.toString?String(e):Object.prototype.toString.call(e):""}function U(e,n={}){return e?("string"!=typeof e&&(e=_(e)),e.split("\n").map(((e,l)=>(0,f.jsx)("span",{children:Y(e,n)},l)))):e}function X(e,n={}){return e?("string"!=typeof e&&(e=_(e)),Y(e.split("\n")[0],n)):e}function Y(e,n={}){const l=n.maxLength||100;return e?("string"!=typeof e&&(e=_(e)),e.length<=l?e:e.slice(0,l+1)):""}const q=r().div(H||(H=K`
  width: 100%;

  /* TODO: non-uniform spacing because of inconsistencies with design tokens */
  padding: var(--spacing-zero) var(--spacing-xs) var(--spacing-zero) 9px;
  align-items: center;
  cursor: text;
  font-size: var(--text-size-m);
  user-select: none;
  display: flex;
  height: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  color: var(--content-color-primary);
  ${0}
`),(({isDuplicated:e})=>e&&"padding-right: var(--spacing-xl)")),G=r().div(I||(I=K`
  white-space: pre;
  overflow: hidden;
  text-overflow: ellipsis;

  &:empty:not(:focus)::before {
    content: attr(data-placeholder);
    color: var(--content-color-tertiary);
  }
`));function J(e){const n=(0,i.useRef)(null),{value:l,placeholder:t,onBlur:o,preventEnter:s,onFocus:r,type:a,currentWidth:d,actions:c,indicators:u,isDuplicated:h}=e,p=!s,b=(0,i.useCallback)((()=>{null==r||r()}),[r]),g=!l&&t,v=g?`${a} empty cell`:`${a} cell`;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(q,{onBlur:o,onClick:b,ref:n,tabIndex:"0",onFocus:b,isDuplicated:h,children:(0,f.jsx)(G,{role:"cell","aria-label":v,"data-placeholder":g?t:null,children:p?X(l,{maxLength:Math.ceil(2*d)}):U(l,{maxLength:Math.ceil(2*d)})})}),u,c]})}q.displayName="KeyValueCellContainer";const Q=[{value:"text",label:"Text"},{value:"file",label:"File"}],ee="secret",ne="default";let le;const te=r().div(le||(le=(e=>e)`
  padding-inline-start: var(--spacing-xs);
  display: flex;
  flex: 1;

  input {
    border: var(--border-width-default) var(--border-style-solid) transparent;
    color: var(--content-color-primary);
    width: 100%;
    font-size: var(--text-size-m);
    line-height: var(--line-height-m);
    font-family: var(--text-family-default);
    height: var(--controls-size-default);
    box-sizing: border-box;
    background-color: transparent;
    padding: var(--spacing-zero);
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    padding-left: var(--spacing-xs);

    &:hover,
    &:focus,
    &:active {
      outline: none;
    }

    ${0};
  }
`),(({isFocused:e})=>e&&"\n        border: var(--border-width-default) var(--border-style-solid) var(--border-color-default);\n        background: var(--background-color-primary);\n        height: var(--size-s);\n        padding-left: var(--spacing-xs);\n        margin-top: var(--spacing-xs);\n        margin-right: var(--spacing-s);\n    "));function ie(e){const{value:n,isEditable:l,onBlur:t,onChange:i,onFocus:o,type:s}=e,r=`${s} masked cell`;return(0,f.jsx)(te,{isFocused:Boolean(l),onBlur:t,onClick:o,onFocus:o,children:(0,f.jsx)("input",{role:"cell","aria-label":r,value:n||"",spellCheck:!1,type:"password",onChange:e=>{i(e.currentTarget.value)}},"text")})}var oe=l(16913),se=l(81397),re=l(88131);const ae=["hidden","value","isEditable","currentWidth","readOnly","shouldFocusOnMount","onBlur","onChange","onFocus","actions","editorType","maskState","enableVariableSuggestions","placeholder","isDuplicated"];let de;const ce=r()(oe.Z)(de||(de=(e=>e)`
  position: absolute;
  align-self: center;
  right: var(--spacing-s);
  z-index: 10;
`));function ue(e){const{hidden:n,value:l,isEditable:i,currentWidth:o,readOnly:s,shouldFocusOnMount:r,onBlur:a,onChange:d,onFocus:u,actions:h,editorType:p,maskState:b,enableVariableSuggestions:g,placeholder:v,isDuplicated:m}=e,x=(0,c.Z)(e,ae),y={readOnly:s,shouldFocusOnMount:r,onBlur:a,onChange:d},C=e=>{null==d||d(x.type,e)},w=(0,re.usePostmanInputFeatureFlag)();if(n)return null;if(g&&w){let n=!l&&v?`${x.type} empty cell`:`${x.type} cell`;return i&&(n=`${x.type} input`),(0,f.jsx)(re.KVEditorInput,{value:l||"",onChange:C,suggestions:[],placeholder:"key"===x.type?"Key":"Value",ariaLabel:n,onFocus:u,onBlur:a,shouldFocusOnMount:r,actions:h,indicators:e.indicators,isEditable:!y.readOnly})}return p===ee&&b.isMasked?(0,f.jsx)(ie,(0,t.Z)({onChange:C,onFocus:u,onBlur:a,isEditable:i,value:l,placeholder:v},x)):(0,f.jsxs)(f.Fragment,{children:[i?(0,f.jsx)(L,(0,t.Z)({},y,{onChange:C,onFocus:u,value:l,placeholder:v,isDuplicated:m},x)):(0,f.jsx)(J,(0,t.Z)({},x,{value:l,onFocus:u,actions:h,onChange:C,placeholder:v,currentWidth:o,isDuplicated:m})),m&&(0,f.jsx)(se.Z,{content:"This variable has been overwritten by a duplicate key.",placement:"bottom",children:(0,f.jsx)(ce,{color:"content-color-warning",className:"duplicate-warning-icon"})})]})}var he=l(74962),pe=l(63622),be=l(84591);let ge;const ve=r().div(ge||(ge=(e=>e)`
  position: absolute;
  right: var(--spacing-m);
  display: flex;
  height: 100%;
  align-items: center;
  cursor: default;
  z-index: 1;
  background: transparent !important;
`)),fe=({infoTitle:e,info:n})=>(0,f.jsxs)(f.Fragment,{children:[e&&(0,f.jsx)(he.Z,{type:"h3",styleAs:"h4",text:e}),n&&(0,f.jsx)(pe.ZP,{type:"small",color:"content-color-primary",children:n})]}),me=e=>{const{info:n,infoTitle:l,placement:i}=e;return n||l?(0,f.jsx)(ve,{children:(0,f.jsx)(se.Z,{content:(0,f.jsx)(fe,(0,t.Z)({},e)),placement:i,children:(0,f.jsx)(be.Z,{})})}):null};let xe;const ye=r()(u.Z)(xe||(xe=(e=>e)`
  margin: var(--spacing-xs);
  min-width: 80px;
`));function Ce(e){const{hidden:n,options:l,defaultOption:t,onChange:o}=e,[s,r]=(0,i.useState)(t),[a,d]=(0,i.useState)(!1);return!a&&n?null:(0,f.jsx)(ye,{viaPortal:!0,className:"single-type-select","aria-label":"KV Type Select",triggerWidth:"auto",triggerSize:"small",triggerType:"tertiary",menuMinWidth:100,menuMaxWidth:165,isSearchable:!1,isClearable:!1,options:l,value:s,onOpen:()=>d(!0),onClose:()=>d(!1),onChange:e=>{r(e),null==o||o(e)}})}var we=l(58560),ke=l(69019),je=l(23180);const Ve=r().button.withConfig({displayName:"CustomChipInputComponents__StyledCloseIconContainer",componentId:"sc-1y84ug7-0"})(["border:",";display:flex;justify-content:center;align-items:center;cursor:pointer;height:",";width:",";border-top-right-radius:",";border-bottom-right-radius:",";background-color:transparent;svg path{fill:",";}&:hover{svg path{fill:",";}}&:is(:focus,:active){svg path{fill:",";}outline:none;}&:disabled{cursor:not-allowed;svg path{fill:",";}}"],(e=>e.theme["spacing-zero"]),(e=>e.theme["size-s"]),(e=>e.theme["size-s"]),(e=>e.theme["border-radius-default"]),(e=>e.theme["border-radius-default"]),(e=>e.theme["content-color-secondary"]),(e=>e.theme["content-color-primary"]),(e=>e.theme["content-color-primary"]),(e=>e.theme["content-color-tertiary"])),Ee=o().forwardRef(((e,n)=>{let{onClick:l,isDisabled:t,onKeyDown:i}=e;return o().createElement(Ve,{onKeyDown:i,ref:n,disabled:t,onClick:l},o().createElement(je.Z,null))}));Ee.name="CloseIcon";const Se=r().div.withConfig({displayName:"CustomChipInputComponents__StyledChip",componentId:"sc-1y84ug7-1"})(["box-sizing:border-box;display:flex;justify-content:center;align-items:center;height:",";padding:",";color:",";background-color:",";border-radius:",";&:hover{background-color:",";}&:is(:active,:focus-within){background-color:",";}"],(e=>e.theme["size-s"]),(e=>`2px ${e.theme["spacing-zero"]} 2px ${e.theme["spacing-s"]}`),(e=>e.theme["content-color-primary"]),(e=>e.isDisabled?e.theme["highlight-background-color-tertiary"]:e.theme["background-color-tertiary"]),(e=>e.theme["border-radius-default"]),(e=>!e.isDisabled&&e.theme["highlight-background-color-primary"]),(e=>e.theme["highlight-background-color-tertiary"]));function Te(e){const n=(0,i.useRef)(),{label:l,onClick:t,isDisabled:s}=e;return o().createElement(Se,{onClick:()=>{n.current.focus()},isDisabled:s},o().createElement(De,{isDisabled:s},l),o().createElement(Ee,{onKeyDown:e=>{"Backspace"===e.key&&t()},ref:n,isDisabled:s,onClick:e=>{t(),e.stopPropagation()}}))}function De(e){const{children:n,isDisabled:l}=e;return o().createElement(pe.ZP,{type:"body-medium",color:l&&"content-color-secondary"},n)}var Re=l(19578);let Ze,Me,Ae=e=>e;const We="Couldn't upload file",Oe={small:"s",medium:"m"},Pe=r()(we.Z)(Ze||(Ze=Ae`
  max-width: 100%;
`)),Fe=r().div(Me||(Me=Ae`
  width: 100%;
  height: ${0};

  div {
    height: inherit;
  }

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`),(({size:e})=>`var(--size-${Oe[e]})`));function ze(e){return(0,f.jsx)(ke.VW,{children:(0,f.jsx)(Re.Toast.Ui.ToastEventEmitter,{children:(0,f.jsx)(Be,(0,t.Z)({},e))})})}function Be(e){const{value:n,onReset:l,id:t,label:o,name:s,multiple:r,isDisabled:a,loading:d,error:c,accept:u,autoFocus:h,onChange:p,size:b="small",alignSelf:g="center"}=e;let v;if((0,i.useEffect)((()=>{c&&Re.Toast.getToasts().addToast({status:"error",title:We,description:c})}),[c]),null!=n&&n.length){const e=n.length,t=n[0],i=n.join(", "),o=e>1?`${e} files selected`:`${t}`;v=(0,f.jsx)(se.Z,{content:i,children:(0,f.jsx)(Fe,{size:b,children:(0,f.jsx)(Te,{label:o,onClick:l})})})}else v=(0,f.jsx)(Re.FileUploader,{id:t,onChange:e=>{!a&&e&&(null==p||p(e))},multiple:r,isDisabled:a,accept:u,name:s,actionLabel:o,autoFocus:h,size:b,loading:d});return(0,f.jsx)(Pe,{direction:"column",alignItems:"center",alignSelf:g,children:v})}const $e=()=>{const e=(0,i.useRef)(!0);return(0,i.useEffect)((()=>()=>{e.current=!1}),[]),e};let Ne;const Le="Select Files",He=r()(we.Z)(Ne||(Ne=(e=>e)`
  padding: var(--spacing-xs);
`));function Ie(e){const{id:n,type:l,value:t,hidden:o,error:s,onFilesSelect:r,onChange:a}=e,[d,c]=(0,i.useState)(!1),u=$e(),h=(0,i.useMemo)((()=>Array.isArray(t)?t:t?[t]:[]),[t]);return o?null:(0,f.jsx)(He,{height:"100%",width:"100%",children:(0,f.jsx)(ze,{label:Le,id:String(n),multiple:!0,error:s,value:h,loading:d,onChange:e=>{r&&(c(!0),r(n,e).finally((()=>{u.current&&c(!1)})))},onReset:()=>null==a?void 0:a(l,"")})})}const Ke=e=>e.disableEdit,_e=(e,n)=>n||e.system&&!e.allowedToToggle,Ue=(e,n)=>!e.disableEdit&&!(null!=n&&n.disableToggle)||e.system;var Xe=l(95362),Ye=l(70262);let qe;const Ge=r().div(qe||(qe=(e=>e)`
  padding: var(--spacing-xs) var(--spacing-s);
  border-radius: var(--border-radius-default);
  opacity: ${0};

  &:hover {
    cursor: pointer;
  }
`),(({alwaysPresent:e})=>e?"1":"0"));function Je({onClick:e,maskState:n,isVisible:l}){const t=!1===n.isMasked;return(0,f.jsx)(Ge,{role:"button",className:"toggle-mask","aria-label":"toggle-mask-row",onClick:e,alwaysPresent:t||l,children:n.isMasked?(0,f.jsx)(Xe.Z,{}):(0,f.jsx)(Ye.Z,{})})}var Qe=l(64691),en=l(48263),nn=l(80605),ln=l(59824),tn=l(17282),on=l(29225);const sn=e=>{const{onPersist:n,onReset:l,disableVariablePersistAction:t,disablePersistActionTooltip:i,disableResetActionTooltip:o,disableVariableResetAction:s}=e,r=(e=!1,n)=>{if(e){let e;switch(n){case"persist":e=i;break;case"reset":e=o}return e||"You do not have permissions to perform this action."}return null};return(0,f.jsxs)(Qe.Z,{children:[(0,f.jsx)(en.Z,{children:(0,f.jsx)(nn.Z,{icon:(0,f.jsx)(on.Z,{size:"small"}),type:"tertiary",tooltip:"View more actions",size:"small","data-testid":"more-options-button"})}),(0,f.jsxs)(ln.Z,{placement:"bottom-end",children:[(0,f.jsx)(tn.Z,{onClick:n,isDisabled:t,tooltip:r(t,"persist"),children:"Persist"}),(0,f.jsx)(tn.Z,{onClick:l,isDisabled:s,tooltip:r(s,"reset"),children:"Reset"})]})]})};let rn;const an=r().div(rn||(rn=(e=>e)`
  display: flex;
  flex-direction: row;
  opacity: ${0};
  margin-right: var(--spacing-xs);
`),(({isVisible:e})=>e?"1":"0")),dn=({isHidden:e=!1,children:n,isVisible:l})=>e||!n?null:(0,f.jsx)(an,{isVisible:l,children:n});var cn=l(26246);const un=["warning"],hn=["prevValue","prevCurrentWidth"],pn=["nextValue","nextCurrentWidth"];let bn,gn,vn,fn,mn=e=>e;const xn=r().div(bn||(bn=mn`
  display: flex;
  flex-direction: row;
  position: relative;
  flex: 0;
  height: 32px;
  border-bottom: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  background-color: ${0};
  color: ${0};
`),(e=>e.isRowFocused?"var(--background-color-secondary) !important":e.isRowSelected||e.disabled?"var(--background-color-secondary)":"inherit"),(e=>e.disabled?"var(--content-color-tertiary)":"inherit")),yn=r().div(gn||(gn=mn`
  position: relative;
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: row;
  color: ${0};
`),(e=>e.isBlocked?"var(--content-color-tertiary)":"inherit")),Cn=r().div(vn||(vn=mn`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
`)),wn=r()(u.Z)(fn||(fn=mn`
  /* Overriding the styles of Aether dropdown control element. */
  .aether-dropdown__control,
  .aether-dropdown__control--is-focused:hover {
    border: none;
    width: 100%;
    box-shadow: none;
    background-color: unset !important;
  }
`)),kn=new Map;kn.set("default",{value:ne,label:"default"}),kn.set("secret",{value:ee,label:"secret"});const jn=[kn.get("default"),kn.get("secret")];function Vn(e){const{index:n,value:l,onChange:o,onRemove:s,currentWidth:r,showColumns:a,allowedColumns:d,enableFiles:u,onFilesSelect:h,maskState:p,toggleMaskValue:b,hideVariableTypeDropdown:g,onPersist:v,onReset:m,onBlur:x,enableVariableSuggestions:y,optionsDropdownValues:C,isDuplicated:w}=e,j=(0,i.useRef)(o);j.current=o;let{key:V,value:E,sessionValue:D="",options:R,type:Z,enabled:M=!0,description:W="",fileUploadError:O}=l;const P=Z===ee?ee:ne,F=a.includes("variableType")?P:Z||"text",[z,B]=(0,i.useState)(null),[$,N]=(0,i.useState)(null),L=null!==z,H=(0,i.useMemo)((()=>{var e;return null!=(e=Q.find((e=>e.value===l.type)))?e:Q[0]}),[l.type]),I=(0,i.useCallback)(((e,n)=>{"sessionValue"===e&&void 0!==n&&l.isSessionValueDeleted&&(null==j.current||j.current((0,t.Z)({},l,{[e]:n,isSessionValueDeleted:!1})));const i="type"===e&&["text","file"].includes(n);null==j.current||j.current((0,t.Z)({},l,i&&{value:""},{[e]:n}))}),[l]),K=(0,i.useCallback)((e=>{(0,c.Z)(l,un),I("enabled",e)}),[l,I]),_=(0,i.useCallback)((()=>{s&&s()}),[s]),U=(0,i.useCallback)((n=>e[`nonEditable${T(n)}s`]),[e]);function X(e){return Number(r[null==a?void 0:a.indexOf(e)])}return(0,f.jsxs)(xn,{role:"row","aria-rowindex":n,disabled:Ke(l),isRowSelected:e.isRowSelected,isRowFocused:null!==z,onMouseEnter:()=>N(!0),onMouseLeave:()=>N(!1),children:[(0,f.jsx)(k,{disabled:e.disableSorting&&e.nonEditableToggles,shouldShowCheckbox:Ue(l,e),isRowEnabled:M,onToggleEnabledState:K,isCheckboxDisabled:_e(l,e.nonEditableToggles)}),(0,f.jsxs)(yn,{isBlocked:l.disableEdit,children:[(0,f.jsx)(S,{columnWidth:X("key"),isNonEditable:U("key"),isLastColumn:a&&"key"===a[a.length-1],content:(0,f.jsx)(ue,{type:"key",value:V,currentWidth:X("key"),onFocus:()=>B("key"),onChange:I,isEditable:"key"===z,placeholder:e.keyPlaceholder,preventEnter:e.disableMultilineKey||!1,readOnly:l.disableEdit||e.nonEditableKeys,shouldFocusOnMount:!0,onBlur:()=>B(null),isDuplicated:w,actions:(0,f.jsx)(Ce,{hidden:!$||!u,options:Q,defaultOption:H,onChange:e=>I("type",e.value)}),indicators:(0,f.jsx)(me,{infoTitle:l.infoTitle,info:l.info,placement:"right"}),enableVariableSuggestions:y})}),a.includes("variableType")&&(0,f.jsx)(S,{columnWidth:X("variableType"),isNonEditable:U("variableType"),isLastColumn:a&&"variableType"===a[a.length-1],content:(!g||e.nonEditableVariableTypes)&&(0,f.jsx)(wn,{isRowFocused:L,tabIndex:-1,isDisabled:e.nonEditableVariableTypes,onChange:async l=>{const{disableAllVariablesSync:t=!1,disableSecretVariablesSync:i}=e;if(Z===l.value)return;if(t||!i&&l.value===ee||i&&l.value===ee&&!E)return I("type",l.value),void(b&&b(n));const o=cn.Modals.getModals(),s=await o.showWarningDialog({uid:"kv-editor-variable-type-change-confirmation",subject:`Change ${V}'s type to ${l.value}?`,message:"This will reveal the hidden values in plain text everywhere in the app for all team members",options:[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Change type",isPrimary:!0}]});return s&&"Change type"===s.title?(I("type",l.value),void(b&&b(n))):void 0},options:jn,value:kn.get(F),isClearable:!1,isSearchable:!1,menuWidth:100,viaPortal:!0})}),a.includes("value")&&(0,f.jsx)(S,{columnWidth:X("value"),isNonEditable:U("value"),isLastColumn:a&&"value"===a[a.length-1],content:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(ue,{hidden:"file"===Z,type:"value",value:E,currentWidth:X("value"),onFocus:()=>B("value"),onChange:I,isEditable:"value"===z,placeholder:e.valuePlaceholder,preventEnter:e.disableMultilineValue||!1,readOnly:l.disableEdit||e.nonEditableValues,shouldFocusOnMount:!0,onBlur:()=>("value",B(null),void(x&&x("value",l))),editorType:Z,maskState:p,enableVariableSuggestions:y}),(0,f.jsx)(Ie,{hidden:"file"!==Z,id:n,type:"value",value:E,error:O,onChange:I,onFilesSelect:h})]})}),a.includes("description")&&(0,f.jsx)(S,{columnWidth:X("description"),isNonEditable:U("description"),isLastColumn:a&&"description"===a[a.length-1],content:(0,f.jsx)(ue,{type:"description",value:W,onChange:I,placeholder:e.descriptionPlaceholder,isEditable:"description"===z,currentWidth:X("description"),onFocus:()=>B("description"),readOnly:l.disableEdit||e.nonEditableDescriptions,shouldFocusOnMount:!0,onBlur:()=>B(null)})}),a.includes("sessionValue")&&(0,f.jsx)(S,{columnWidth:X("sessionValue"),isNonEditable:U("sessionValue"),isLastColumn:a&&"sessionValue"===a[a.length-1],content:(0,f.jsx)(ue,{type:"sessionValue",value:D,onChange:I,isEditable:"sessionValue"===z,placeholder:l.isSessionValueDeleted?"[Deleted]":e.sessionValuePlaceholder,preventEnter:e.disableMultilineValue||!1,currentWidth:X("sessionValue"),onFocus:()=>B("sessionValue"),readOnly:l.disableEdit||e.nonEditableSessionValue,shouldFocusOnMount:!0,onBlur:()=>B(null),editorType:Z,maskState:p,enableVariableSuggestions:y})}),a.includes("options")&&(0,f.jsx)(S,{columnWidth:X("options"),isNonEditable:U("options"),isLastColumn:a&&"options"===a[a.length-1],content:(0,f.jsx)(wn,{isRowFocused:L,tabIndex:-1,onChange:e=>I("options",e),options:C,value:R,isClearable:!1,isSearchable:!1,menuWidth:100})}),(0,f.jsx)(Cn,{children:((null==a?void 0:a.includes("value"))||(null==a?void 0:a.includes("description"))||(null==a?void 0:a.includes("sessionValue")))&&!e.isRowSelected&&!e.value.disableEdit&&(0,f.jsxs)(f.Fragment,{children:[F===ee&&(0,f.jsx)(Je,{isVisible:$,maskState:p,onClick:()=>b(n)}),(0,f.jsxs)(dn,{isHidden:L,isVisible:$,children:[!e.disableDelete&&(0,f.jsx)(A,{onClick:_}),!e.disableVariableRowDropdown&&d.includes("sessionValue")&&(0,f.jsx)(sn,{onPersist:v,onReset:m,disableVariablePersistAction:e.disableVariablePersistAction||e.disableSecretVariablesSync&&F===ee,disablePersistActionTooltip:e.disablePersistActionTooltip,disableVariableResetAction:e.disableVariableResetAction||e.disableSecretVariablesSync&&F===ee,disableResetActionTooltip:e.disableResetActionTooltip})]})]})})]})]})}const En=(0,i.memo)(Vn,((e,n)=>{const{prevValue:l,prevCurrentWidth:t}=e,i=(0,c.Z)(e,hn),{nextValue:o,nextCurrentWidth:s}=n,r=(0,c.Z)(n,pn);return!!p()(l,o)&&(!!p()(i,r)&&!!D(t,s))}));var Sn=l(49437),Tn=l(80047);const Dn=["values","disableSorting","onChange","onRemove","disableDelete","disableCreate","disableToggle","keyPlaceholder","valuePlaceholder","descriptionPlaceholder","disableVariableRowDropdown","currentWidth","maskStatesMap","toggleMaskValue","onPersist","onReset","onBlur","filteredIndices","searchValue","enableScroll","duplicateWarningsMap"];let Rn;const Zn=r().div(Rn||(Rn=(e=>e)`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${0};

  .key-value-form-editor-sortable__selectable {
    display: flex;
    flex-direction: column;
  }
`),(({enableScroll:e})=>e&&"overflow: overlay;"));function Mn(e){let{values:n,disableSorting:l,onChange:o,onRemove:s,disableDelete:r,disableCreate:a,disableToggle:d,keyPlaceholder:u,valuePlaceholder:h,descriptionPlaceholder:p,disableVariableRowDropdown:b,currentWidth:g,maskStatesMap:v,toggleMaskValue:m,onPersist:x,onReset:y,onBlur:C,filteredIndices:w,searchValue:k,enableScroll:j,duplicateWarningsMap:V}=e,E=(0,c.Z)(e,Dn);const S=(0,i.useCallback)(((e,n)=>{o&&o(e,n)}),[o]),T=(0,i.useCallback)((e=>{s&&s(e)}),[s]),D=k&&w?w.map((e=>n[e])):n;return(0,f.jsx)(Zn,{enableScroll:j,children:k&&0===D.length?(0,f.jsx)("div",{className:"key-value-form-editor-sortable",children:(0,f.jsx)(Sn.Z,{title:"No results found",children:(0,f.jsx)(Tn.Z,{name:"illustration-search"})})}):D&&D.map(((e,i)=>{var o,s;const c=e.id===(null==n?void 0:n.length)-1;return(0,f.jsx)(En,(0,t.Z)({index:i,selectableKey:e.id,value:e,onChange:n=>S(e.id,n),onRemove:()=>T(e.id),onPersist:()=>{return n=e.id,void(x&&x(n));var n},onReset:()=>{return n=e.id,void(y&&y(n));var n},onBlur:(n,l)=>((e,n,l)=>{C&&C(e,n,l)})(e.id,n,l),disableSorting:l||c,disableToggle:d||c&&!a,disableDelete:r||c&&!a,disableVariableRowDropdown:b||c&&!a,keyPlaceholder:c&&u,valuePlaceholder:c&&h,descriptionPlaceholder:c&&p,hideVariableTypeDropdown:!a&&c,currentWidth:g,maskState:!(!a&&c)&&(v&&v[e.id]||{isMasked:e.type===ee}),isDuplicated:V&&V[e.id].isOverridden,toggleMaskValue:m},E),null!=(o=null==(s=e.id)?void 0:s.toString())?o:i)}))})}var An=l(70355);function Wn(e,n=100){return e/n*100}function On(e,n=2){return Math.round(e*Math.pow(10,n))/Math.pow(10,n)}let Pn;const Fn=500,zn=r().div(Pn||(Pn=(e=>e)`
  height: 32px;
  width: 16px;
  margin-left: -8px;
  background-color: transparent;
  position: absolute;
  left: ${0}%;
  cursor: col-resize;
  z-index: 1;
`),(e=>e.left)),Bn=e=>{const{showColumns:n,currentWidth:l,prevColumn:t,nextColumn:o,parentWidth:s=Fn,handleResize:r}=e,a=(0,i.useCallback)((e=>{const t=null==n?void 0:n.indexOf(e);if(-1===t)return 0;let i=0;for(let e=0;e<=t;e++)i+=l[e];return On(i)}),[n,l]),d=(0,i.useMemo)((()=>{const e=a(n[(null==n?void 0:n.indexOf(t))-1])+Wn(100,s),l=a(o)-Wn(100,s);return{min:On(e),max:On(l)}}),[t,o,n,s,a]),c=(0,i.useCallback)((e=>Number.isNaN(d.min)||Number.isNaN(d.max)?e:On(Math.min(Math.max(e,d.min),d.max))),[d]),u=(0,i.useCallback)(((e,i)=>{const a=c(Wn(i.x,s));if(a==d.min||a==d.max)return;const u=[...l],h=l[n.indexOf(t)]+i.deltaX/s*100,p=l[n.indexOf(o)]-i.deltaX/s*100;u[null==n?void 0:n.indexOf(t)]=On(h,2),u[null==n?void 0:n.indexOf(o)]=On(p,2),null==r||r(u)}),[s,l,n,d]);return(0,f.jsx)(An.DraggableCore,{onDrag:u,children:(0,f.jsx)(zn,{left:c(a(t))})})};let $n,Nn,Ln,Hn,In,Kn,_n,Un,Xn=e=>e;const Yn=r().div($n||($n=Xn`
  font-size: var(--text-size-m);
  font-family: var(--font-family-default);
`)),qn=r().div(Nn||(Nn=Xn`
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 var(--spacing-xs);
`)),Gn=r().div(Ln||(Ln=Xn`
  display: flex;
  flex-direction: row;
  height: 32px;
  position: relative;
  flex: 1 1 auto;
  margin-bottom: var(--spacing-zero);
  border-bottom: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);

  &:hover,
  &.is-hovered {
    background-color: transparent;
  }

  &__is-highlighted {
    background-color: var(--background-color-info);
    animation: fadeOut 1.2s linear 1;

    .key-value-form-row__modification-options {
      background-color: var(--background-color-info);
      animation: fadeOut 1.2s linear 1;
    }
  }
`)),Jn=r().div(Hn||(Hn=Xn`
  position: relative;
  display: flex;
  border-top-width: 0;

  /* TODO: non-uniform spacing because of inconsistencies with design tokens */
  width: 44px;
  justify-content: flex-end;
  border-left: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  background-color: ${0};
`),(e=>e.nonEditableToggles?"var(--background-color-secondary);":"inherit")),Qn=r().div(In||(In=Xn`
  height: 30px;
  width: 0;
  position: absolute;
  background-color: var(--border-color-default);
`)),el=r().div(Kn||(Kn=Xn`
  flex: 1;
  flex-direction: row;
  position: relative;
  min-width: 0;
  display: flex;
`)),nl=r().div(_n||(_n=Xn`
  padding: var(--spacing-s);
  color: var(--content-color-secondary);
  font-size: var(--text-size-m);
  line-height: var(--line-height-m);
  font-weight: var(--text-weight-medium);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: default;
  user-select: none;
`)),ll=r().div(Un||(Un=Xn`
  align-items: center;
  flex: ${0};
  overflow: hidden;
  display: flex;
  position: relative;
  box-sizing: border-box;
  border-right: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  margin: var(--spacing-zero);
  background-color: ${0};
`),(e=>e.isLastColumn?`0 1 ${e.columnWidth}%`:`0 0 ${e.columnWidth}%`),(e=>e.isNonEditable?"var(--background-color-secondary)":"inherit")),tl=new Map;tl.set("persistAll",{disabled:"You do not have permissions to perform this action.",default:"Persisting all values will replace all initial values with the current values of the variables."}),tl.set("resetAll",{default:"Resetting all values will replace all current values with the initial values of the variables."});const il=(e,n,l)=>{let t;var i,o;return n&&(t=l||(null==(i=tl.get(e))?void 0:i.disabled)),t||(t=null==(o=tl.get(e))?void 0:o.default),t},ol=({allowedColumns:e,persistAll:n,disableVariablePersistAction:l,disablePersistActionTooltip:t,resetAll:i,disableVariableResetAction:o,disableResetActionTooltip:s})=>e.includes("sessionValue")?(0,f.jsx)(qn,{children:(0,f.jsxs)(Qe.Z,{closeOnSelect:!1,children:[(0,f.jsx)(en.Z,{"data-testid":"key-value-editor-more-actions-button",children:(0,f.jsx)(nn.Z,{size:"small",icon:(0,f.jsx)(on.Z,{size:"small"}),type:"tertiary",tooltip:"View more actions","data-testid":"more-options-button-column-header"})}),(0,f.jsxs)(ln.Z,{children:[(0,f.jsx)(tn.Z,{onClick:n,isDisabled:l,tooltip:il("persistAll",l,t),children:"Persist all"}),(0,f.jsx)(tn.Z,{onClick:i,isDisabled:o,tooltip:il("resetAll",o,s),children:"Reset all"})]})]})}):null;function sl(e){const{showColumns:n,currentWidth:l,handleWidthChange:t,keyHeading:o,valueHeading:s,descriptionHeading:r,sessionHeading:a,typeHeading:d,optionsHeading:c,allowedColumns:u,persistAll:h,resetAll:p,disableVariablePersistAction:b,disablePersistActionTooltip:g,disableVariableResetAction:v,disableResetActionTooltip:m}=e,x=(0,i.useRef)(null),[y,C]=(0,i.useState)(null);(0,i.useEffect)((()=>{const e=new ResizeObserver((e=>{C(e[0].contentRect.width)})),n=x.current;return e.observe(n),()=>{e.unobserve(n)}}),[]);const w=(0,i.useCallback)((n=>e[`nonEditable${T(n)}s`]),[e]),k=(0,i.useCallback)((e=>Number(l[null==n?void 0:n.indexOf(e)])),[n,l]);return(0,f.jsx)(Yn,{role:"rowgroup",children:(0,f.jsxs)(Gn,{role:"row",children:[(0,f.jsx)(Jn,{children:(0,f.jsx)(Qn,{})}),(0,f.jsxs)(el,{ref:x,children:[(0,f.jsx)(ll,{type:"key",role:"columnheader",columnWidth:k("key"),isNonEditable:w("key"),isLastColumn:n&&"key"===n[n.length-1],children:(0,f.jsx)(nl,{children:o||"Key"})}),(null==n?void 0:n.includes("variableType"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Bn,{handleResize:t,showColumns:n,currentWidth:l,prevColumn:"key",nextColumn:"variableType",parentWidth:y}),(0,f.jsx)(ll,{type:"variableType",role:"columnheader",columnWidth:k("variableType"),isNonEditable:w("variableType"),isLastColumn:n&&"variableType"===n[n.length-1],children:(0,f.jsx)(nl,{children:d||"Type"})})]}),(null==n?void 0:n.includes("value"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Bn,{handleResize:t,showColumns:n,currentWidth:l,prevColumn:n.includes("variableType")?"variableType":"key",nextColumn:"value",parentWidth:y}),(0,f.jsx)(ll,{type:"value",role:"columnheader",columnWidth:k("value"),isNonEditable:w("value"),isLastColumn:n&&"value"===n[n.length-1],children:(0,f.jsx)(nl,{children:s||"Value"})})]}),(null==n?void 0:n.includes("description"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Bn,{handleResize:t,showColumns:n,currentWidth:l,prevColumn:"value",nextColumn:"description",parentWidth:y}),(0,f.jsx)(ll,{type:"description",role:"columnheader",columnWidth:k("description"),isNonEditable:w("description"),isLastColumn:n&&"description"===n[n.length-1],children:(0,f.jsx)(nl,{children:r||"Description"})})]}),(null==n?void 0:n.includes("sessionValue"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Bn,{handleResize:t,showColumns:n,currentWidth:l,prevColumn:"value",nextColumn:"sessionValue",parentWidth:y}),(0,f.jsx)(ll,{type:"sessionValue",role:"columnheader",columnWidth:k("sessionValue"),isNonEditable:w("sessionValue"),isLastColumn:n&&"sessionValue"===n[n.length-1],children:(0,f.jsx)(nl,{children:a||"Current value"})})]}),u.includes("sessionValue")&&(0,f.jsx)(ol,{allowedColumns:u,persistAll:h,resetAll:p,disablePersistActionTooltip:g,disableResetActionTooltip:m,disableVariablePersistAction:b,disableVariableResetAction:v}),(null==n?void 0:n.includes("options"))&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Bn,{handleResize:t,showColumns:n,currentWidth:l,prevColumn:"value",nextColumn:"options",parentWidth:y}),(0,f.jsx)(ll,{type:"options",role:"columnheader",columnWidth:k("options"),isNonEditable:w("options"),isLastColumn:n&&"options"===n[n.length-1],children:(0,f.jsx)(nl,{children:c||"Options"})})]})]})]})})}const rl=["defaultValue","entityType","values","onChange","showColumns","nonEditableKeys","nonEditableValues","nonEditableDescriptions","nonEditableToggles","nonEditableOptions","keyHeading","valueHeading","sessionHeading","optionsHeading","optionsTooltip","nonEditableVariableTypes","hideBulkOptions","maskStatesMap","toggleMaskValue","initialColumnWidths","disableVariablePersistAction","disableVariableResetAction","disableSecretVariablesSync","disablePersistActionTooltip","disableResetActionTooltip","onDeleteRow","disallowDuplicates"];let al;const dl=r().div(al||(al=(e=>e)`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-top: thin solid var(--border-color-default);
  min-height: 0;
`));function cl(e){let{defaultValue:n="",entityType:l,values:o,onChange:s,showColumns:r,nonEditableKeys:a,nonEditableValues:d,nonEditableDescriptions:u,nonEditableToggles:h,nonEditableOptions:p,keyHeading:b,valueHeading:g,sessionHeading:v,optionsHeading:m,optionsTooltip:x,nonEditableVariableTypes:y,hideBulkOptions:C,maskStatesMap:w,toggleMaskValue:k,initialColumnWidths:j,disableVariablePersistAction:V,disableVariableResetAction:E,disableSecretVariablesSync:S,disablePersistActionTooltip:T,disableResetActionTooltip:D,onDeleteRow:R,disallowDuplicates:Z}=e,M=(0,c.Z)(e,rl);const A={showColumns:r,allowedColumns:M.allowedColumns,nonEditableKeys:a,nonEditableValues:d,nonEditableDescriptions:u,nonEditableToggles:h,nonEditableOptions:p,hideBulkOptions:C},W=(0,i.useRef)(s);W.current=s;const[O,P]=(0,i.useState)(function(e,n){let l;return n?l=n:(l=new Array(e.length).fill(Math.floor(100/e.length)),l[l.length-1]=l.at(-1)+(100-l.reduce(((e,n)=>e+n)))),l}(r,j)),F=(0,i.useCallback)(((e,t={})=>{let i="text";"environment"!==l&&"globals"!==l||(i="default"),"collection"===l&&(i="string");const o={key:t.key||n,value:t.value||n,description:t.description||n,type:t.type||i,id:e};return M.allowedColumns.includes("sessionValue")&&(o.sessionValue=t.sessionValue||null),M.disableToggle||(o.enabled=!0),o}),[n,M.disableToggle,l,M.allowedColumns]),z=(0,i.useCallback)((()=>{if(o.length>0){var e=null==o?void 0:o.reduce((function(e,n){return e.id>=n.id?e:n}),{});return n=e,[Object,Array].includes((n||{}).constructor)&&0===Object.entries(n||{}).length?0:e.id+1}var n;return 0}),[o]),B=(0,i.useCallback)(((e,n)=>{const l=[...o],i=l.length===e?[...l,F(z(),n)]:l.map((l=>l.id===e?(0,t.Z)({},l,n):(0,t.Z)({},l)));null==W.current||W.current(i)}),[o,F,z]),$=(0,i.useCallback)((e=>{const n=[...o],l=null==n?void 0:n.filter(((n={})=>n.id!==e));R&&R(e),null==W.current||W.current(l)}),[o,R]),N=(0,f.jsx)(sl,(0,t.Z)({},A,{keyHeading:b||"Key",valueHeading:g||"Value",sessionHeading:v||"Current value",optionsHeading:m||"Options",optionsTooltip:x,nonEditableVariableTypes:y,handleWidthChange:P,currentWidth:O,persistAll:()=>{if(V)return;let e=!1;const n=o.reduce(((n,l)=>{const i=l.enabled?l.sessionValue:l.value;return l.isSessionValueDeleted?(e=!0,n):(!e&&(e=!(S&&l.type===ee)),S&&l.type===ee?n.push(l):n.push((0,t.Z)({},l,{value:i})),n)}),[]);e&&(null==W.current||W.current(n))},resetAll:()=>{if(E)return;let e=!1;const n=o.map((n=>{const l=n.enabled?n.value:n.sessionValue;return S&&n.type===ee?n:(e=!0,(0,t.Z)({},n,{sessionValue:l,isSessionValueDeleted:!1}))}));e&&(null==W.current||W.current(n))},disableVariablePersistAction:V,disableVariableResetAction:E,disablePersistActionTooltip:T,disableResetActionTooltip:D})),L=(0,i.useMemo)((()=>M.disableCreate?o:[...o,F(z())]),[o,M.disableCreate,F,z]),H=(0,i.useMemo)((()=>Z?L.map(((e,n)=>{if(e.enabled&&""!==e.key)for(let l=n+1;l<L.length;l++){const n=L[l];if(e.key===n.key&&n.enabled&&""!==n.key)return(0,t.Z)({},e,{isOverridden:!0})}return(0,t.Z)({},e,{isOverridden:!1})})):null),[L,Z]);return(0,f.jsxs)(dl,{children:[o.length>0||!M.disableCreate?N:null,(0,f.jsx)(Mn,(0,t.Z)({},A,M,{nonEditableVariableTypes:y,values:L,onChange:B,onRemove:$,currentWidth:O,maskStatesMap:w,toggleMaskValue:k,onPersist:e=>{if(V)return;let n=!1;const l=o.reduce(((l,i)=>{if(i.id===e){if(i.isSessionValueDeleted)return n=!0,l;S&&i.type===ee?l.push(i):(n=!0,l.push((0,t.Z)({},i,{value:i.sessionValue})))}else l.push(i);return l}),[]);n&&(null==W.current||W.current(l))},onReset:e=>{if(E)return;let n=!1;const l=o.map((l=>l.id!==e||S&&l.type===ee?l:(n=!0,(0,t.Z)({},l,{sessionValue:l.value,isSessionValueDeleted:!1}))));n&&(null==W.current||W.current(l))},onBlur:(e,n,l)=>{const i=o.findIndex((n=>n.id===e)),s=-1!==i&&o[i].sessionValue;let r;"value"===n&&-1!==i&&null===s&&l.value&&(r=[...o],r[i]=(0,t.Z)({},l,{sessionValue:l.value}),null==W.current||W.current(r))},disableVariablePersistAction:V,disableVariableResetAction:E,disableSecretVariablesSync:S,disablePersistActionTooltip:T,disableResetActionTooltip:D,duplicateWarningsMap:H}))]})}var ul=l(68206);const hl=W(((e,...n)=>e(...n)),100),pl=({onSearchValueChange:e})=>{const[n,l]=(0,i.useState)("");return(0,f.jsx)("div",{className:"search-variable",children:(0,f.jsx)(ul.Z,{placeholder:"Filter variables",value:n,type:"search",onChange:n=>{l(n.target.value),hl(e,n.target.value)},onClear:()=>{l(""),e("")},prefix:!0,name:"filter-values"})})};function bl(e,n){try{const l=(0,re.castNonStringTypesToString)(e),t=(0,re.castNonStringTypesToString)(n),i=l.toLowerCase(),o=t.toLowerCase();return i.indexOf(o)}catch(l){return console.error("PatterSearch~caseInsensitiveIndexof: Failed with error",l,e,n),-1}}let gl;const vl=r().div(gl||(gl=(e=>e)`
  padding-bottom: var(--spacing-s);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${0};

  &.is-filterable {
    display: flex;
    flex-direction: column;
  }

  .search-variable {
    width: 240px;
    padding-top: var(--spacing-xs);
    padding-bottom: var(--spacing-s);
  }
`),(({enableScroll:e})=>e&&"height: 100%;")),fl=(e,n)=>!n||!(!e.key||-1===bl(e.key,n))||"secret"!==e.type&&(!(!e.value||-1===bl(e.value,n))||!(!e.sessionValue||-1===bl(e.sessionValue,n))||void 0),ml=(e,n)=>{if(!n)return null;const l=[];for(const[t,i]of e.entries())fl(i,n)&&l.push(t);return l},xl=(0,d.observer)((function(e){const{values:n,onChange:l,tableName:o,disallowDuplicates:s,allowedColumns:r,showColumns:d,onColumnToggle:c,keyPlaceholder:u,valuePlaceholder:h,maskStatesMap:p,toggleMaskValue:b,initialColumnWidths:g,enableFiltering:v=!1,enableScroll:m,isDirty:x=!1}=e,[y,C]=(0,i.useState)([]),[w,k]=(0,i.useState)(""),[j,V]=(0,i.useState)(null),E=(0,i.useRef)(x),S=(0,i.useCallback)((e=>{if(0===y.length)return!0;e.preventDefault();const t=null==n?void 0:n.filter(((e,n)=>!(null!=y&&y.includes(n))));y.sort(),0!==y[0]&&(y.length,n.length),C([]),l(t)}),[n,l,y]),T=(0,i.useCallback)((()=>{y.length>0&&C([])}),[y]),D=(0,i.useMemo)((()=>{let e=0;return(0,a.computed)((()=>null==n?void 0:n.map((n=>(0,t.Z)({},n,{id:e++})))))}),[n]).get();return(0,i.useEffect)((()=>{const e=ml(D,w);V(e)}),[w]),(0,i.useEffect)((()=>{if(E.current&&!x){const e=ml(D,w);V(e)}E.current=x}),[x]),(0,f.jsxs)(vl,{role:"table","aria-label":o,enableScroll:m,children:[v&&(0,f.jsx)(pl,{onSearchValueChange:k}),(0,f.jsx)(cl,(0,t.Z)({},e,{disallowDuplicates:s,onChange:l,values:D,selectedRows:y,deleteSelectedRows:S,onBeforeInput:T,allowedColumns:r,showColumns:d,onColumnToggle:c,keyPlaceholder:void 0===u?"Key":u,valuePlaceholder:void 0===h?"Value":h,descriptionPlaceholder:"Description",maskStatesMap:p,toggleMaskValue:b,initialColumnWidths:g,filteredIndices:j,searchValue:w,onDeleteRow:e=>{if(!w)return;const n=((e,n)=>{const l=[],t=new Set(n);let i=0;for(const n of e)t.has(n)?i++:l.push(n-i);return l})(j,[e]);V(n)}})),(0,f.jsx)(cn.Modals.Ui.ModalDialog,{uid:"kv-editor-variable-type-change-confirmation"})]})})),yl=e=>(0,f.jsx)(xl,(0,t.Z)({},e))},23180:(e,n,l)=>{l.d(n,{Z:()=>d});var t=l(7560),i=l(40540),o=l.n(i),s=l(207),r=o().createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o().createElement("g",{clipPath:"url(#clip0)"},o().createElement("path",{d:"M6.56065 5.85356L9.70711 2.70711L9 2L5.85355 5.14645L2.70711 2.00002L2 2.70712L5.14644 5.85356L2 9L2.70711 9.70711L5.85355 6.56067L9 9.70712L9.70711 9.00002L6.56065 5.85356Z",fill:"#6B6B6B"})),o().createElement("defs",null,o().createElement("clipPath",{id:"clip0"},o().createElement("rect",{width:"12",height:"12",fill:"white"})))),a=o().forwardRef((function(e,n){return o().createElement(s.Z,(0,t.Z)({},e,{svg:r,ref:n}))}));a.getName=function(){return"icon-action-close-stroke-small"};const d=a},29225:(e,n,l)=>{l.d(n,{Z:()=>d});var t=l(7560),i=l(40540),o=l.n(i),s=l(207),r=o().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 8C1 6.89543 1.89543 6 3 6C4.10457 6 5 6.89543 5 8C5 9.10457 4.10457 10 3 10C1.89543 10 1 9.10457 1 8ZM3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8C4 7.44772 3.55228 7 3 7Z",fill:"#6B6B6B"}),o().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z",fill:"#6B6B6B"}),o().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 6C11.8954 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 14.1046 6 13 6ZM12 8C12 7.44772 12.4477 7 13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8Z",fill:"#6B6B6B"})),a=o().forwardRef((function(e,n){return o().createElement(s.Z,(0,t.Z)({},e,{svg:r,ref:n}))}));a.getName=function(){return"icon-action-options-stroke"};const d=a}}]);
//# sourceMappingURL=6854.582f5c95c3bb36a1.js.map