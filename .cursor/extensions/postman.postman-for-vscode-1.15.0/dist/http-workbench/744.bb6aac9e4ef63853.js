"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[744],{30744:(e,t,a)=>{a.r(t),a.d(t,{EditorToolbar:()=>ha,ScriptEditor:()=>U,addExternalPackage:()=>j,addPackagesToEditor:()=>v,fetchExternalPackageList:()=>w,fetchPackmanAuthToken:()=>O,fetchScriptContent:()=>P,getExternalPackageName:()=>A,getExternalPackageTooltipText:()=>D,getExternalPackageUrl:()=>Z,getLocalExternalPackageData:()=>L,isExternalPackageValid:()=>_,mergeUniqueExternalPackages:()=>M,parseRequiredPackage:()=>N,trackPackageSearch:()=>xt,trackPackageSelect:()=>St,trackPackagesOnSend:()=>Nt,trackPackagesSaved:()=>Rt,trackUpdatePackageVersion:()=>bt,trackViewInRegistry:()=>ft});var r=a(40540),n=a.n(r),i=a(7560),s=a(35736),o=a(1590),c=a(52322);const l=(0,r.lazy)((0,o.loadRemoteModule)("code-editor/CodeEditor")),d=n().forwardRef(((e,t)=>(0,c.jsx)(r.Suspense,{fallback:(0,c.jsx)(s.Z,{}),children:(0,c.jsx)(l,(0,i.Z)({},e,{ref:t}))})));var g=a(34583),p=a(38053);const u={"pre-script":async()=>(await a.e(1394).then(a.t.bind(a,11394,17))).default,"tests-script":async()=>(await a.e(6773).then(a.t.bind(a,16773,17))).default};var h=a(98276);const y=e=>e.charAt(0).toUpperCase()+e.slice(1),k=e=>"string"==typeof e?e:"object"==typeof e?JSON.stringify(e):String(e);var m=a(97201);const v=async(e,t,a)=>{const r=`const ${(0,g.camelCase)(e)} = pm.require('${t}');\n`;a.executeEdits("execute-edits",[{range:{startLineNumber:1,startColumn:1,endLineNumber:1,endColumn:1},text:r,forceMoveMarkers:!0}]);const n={lineNumber:1,column:r.length+1};a.setPosition(n),a.pushUndoStop()},P=async(e,t)=>{try{return await m.cacheClient.fetchQuery((0,p.getScriptQuery)(e,t))}catch(e){throw console.error("Error fetching script content:",e),e}};var E=a(97699),x=a.n(E);const f=e=>{const t=(e.includes(":")?e.split(":")[1]:e).lastIndexOf("@");return-1===t||0===t},b=e=>{const t=e.lastIndexOf("@");return{name:t>0?e.slice(0,Math.max(0,t)):e,version:t>0?e.slice(Math.max(0,t+1)):void 0}},S=Object.values(p.PackageRegistry),R=256;function N(e){const[t,a]=e.split(":");if(!a||e.length>R||!S.includes(t))return null;const{version:r}=b(a);return void 0===r||x().valid(r)?{packageRegistry:t,packageIdentifier:a}:null}const _=e=>!!N(e),A=e=>f(e)?e:e.slice(0,Math.max(0,e.lastIndexOf("@")));var T=a(21466);const I="https://www.npmjs.com/package",C="https://jsr.io";async function O(){try{return await T.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"FETCH_PACKMAN_AUTH_TOKEN",payload:void 0})}catch(e){throw console.error("Error fetching Packman auth token:",e),e}}async function j(e,t,a=!1,r=!1){try{return await T.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"ADD_PACKAGE",payload:{packageName:e,updateToLatest:t,isSaveDisabled:a,forceSave:r}})}catch(e){throw console.error("Error Adding package:",e),e}}async function L(){try{return await T.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"GET_LOCAL_EXTERNAL_PACKAGE_DATA",payload:void 0})}catch(e){throw console.error("Error fetching external package local data:",e),e}}async function w(e){try{return await m.cacheClient.ensureQueryData((0,p.searchExternalPackagesQuery)(e))}catch(e){throw console.error("Error fetching external package list:",e),e}}function D(e){return e===p.PackageRegistry.NPM?"View in NPM":"View in JSR"}function M(e){const t=new Map;for(const a of e){const e=`${a.registry}:${a.name}`;t.has(e)||t.set(e,a)}return[...t.values()]}function Z({registry:e,name:t,version:a}){return e===p.PackageRegistry.NPM?`${I}/${t}/v/${a}`:`${C}/${t}@${a}`}const G=["jsLib","node","postman-collection","chai"],U=(0,r.forwardRef)((({content:e,onChange:t,onSetPackages:n,isInternalPackagesEnabled:i,isExternalPackagesEnabled:s,type:o="pre-script",nativeEditorProps:l},m)=>{const[v,E]=(0,r.useState)([]),[x,f]=(0,r.useState)(null),[b,S]=(0,r.useState)([]),R=(0,r.useRef)(null),N=i||s,{data:A,globalNameToIdMap:I}=(0,p.usePackagesWithGlobalName)(),C=(()=>{const{data:e}=(0,h.useActiveAndDynamicVariables)();return(0,r.useCallback)(((t,a)=>{const r=new RegExp(/pm.(environment|globals|collectionVariables|variables).(((get|set|unset|has)\(('|").*))$/),n=t.getWordBeforePosition(a);let i=t.getLineContent(a.lineNumber);i&&(i=i.slice(0,Math.max(0,a.column-1)));let s=[];const o=r.exec(i);if(!o||o.length<6)return[];const c=o[1],l=e;let d=[];if(!l)return[];const g={globals:"globals",environment:"environment",collectionVariables:"collection"};if("variables"===c)d=l.filter((e=>k(e.key).toLowerCase().includes(n.word.toLowerCase())));else if(g[c]){const e=g[c];d=l.filter((t=>t.scope===e&&"dynamic"!==t.type&&k(t.key).toLowerCase().includes(n.word.toLowerCase())))}return p=d,u={startLineNumber:a.lineNumber,endLineNumber:a.lineNumber,startColumn:n.startColumn,endColumn:n.endColumn},s=p.map((e=>{let t={environment:"a",collection:"b",global:"c"}[e.scope]||"y";return"dynamic"===e.type?(t="z",{label:e.key,detail:`Details: ${k(e.description)}`,documentation:`Scope: ${y(e.scope)}\n\n`,insertText:e.key,range:u,sortText:`${t}-${e.key}`}):{label:e.key,detail:`Current: ${e.sessionValue}`,documentation:`Initial: ${k(e.value)} \nScope: ${y(e.scope)}\n\n`,insertText:e.key,range:u,sortText:`${t}-${e.key}`}})),s;var p,u}),[e])})(),{isNativeEditorSupported:O,initialize:L,dispose:w,editorState:D,focusDocument:M}=(0,T.useNativeScriptEditor)({onContentChange:e=>{null==$||$(e)},content:e,fileName:l.fileName,isPreRequestScript:"pre-script"===o,analyticsMetaData:{entityId:null==l?void 0:l.entityId,entityType:(null==l?void 0:l.entityType)||"request"},instructionsData:l.instructionsData}),Z=async(e,t=!0)=>{const{parsedRequireStatements:r,validationErrors:o,parseError:c}=await async function(e){let t;const r=await async function(){return a.e(8511).then(a.t.bind(a,78511,23))}(),n=[],i=[];try{t=r.createSourceFile("code.js",e,r.ScriptTarget.Latest)}catch(e){return{parseError:!0}}return function e(t){if(r.isCallExpression(t)){const{expression:e}=t;if(r.isPropertyAccessExpression(e)&&r.isIdentifier(e.expression)&&"pm"===e.expression.text&&r.isIdentifier(e.name)&&"require"===e.name.text){const e=t.arguments[0];if(e&&r.isStringLiteral(e))n.push(e.text);else{const a=e&&r.getLineAndCharacterOfPosition(t.getSourceFile(),e.pos);i.push({message:"pm.require accepts only string literal as argument",startLineNumber:null==a?void 0:a.line,endLineNumber:null==a?void 0:a.line,startColumn:(null==a?void 0:a.character)+1,endColumn:(null==a?void 0:a.character)+1,severity:3})}}}r.forEachChild(t,e)}(t),{parsedRequireStatements:n,validationErrors:i}}(e);if(c||!r)return;o&&E(o);const l={};for(const e of r){if(i&&I){const t=I.get(e);t&&(l[e]={id:t})}s&&_(e)&&(l[e]={id:e},j(e,!1))}t&&n(l),(async e=>{try{const t=Object.entries(e).filter((([e])=>I.get(e))).map((([e,{id:t}])=>(async(e,t)=>{if(!R.current)throw new Error("Worker pool not initialized");const a=A.find((t=>t.id===e)),r=null==a?void 0:a.indexScript.id;if(!r)throw new Error(`Script ID not found for package: ${t}`);const n=await P(e,r),i=await R.current.execute({jsCode:n.contents.src,packageName:a.name});return{id:`${t}-${new Date(n.lastRetrievedAt).getTime()}`,content:i.result||""}})(t,e))),a=((e,t)=>{if(!x)return e;let a="";const r=new Set(Object.values(t).map((({id:e})=>e)));return a=`\n      ${a}\n      declare interface Postman { ${A.filter((e=>r.has(e.id))).map((e=>`require(name: '${null==e?void 0:e.globalName}'): typeof import('${null==e?void 0:e.name}');`)).join("\n")} }\n    `,[{id:`${x.id}-${Math.random()}`,content:`${x.content}\n      ${a}\n      `},...e]})((await Promise.all(t)).filter((e=>e.content)),e);S(a)}catch(e){console.error("Error adding package libraries:",e)}})(l)},U=(0,g.useDebouncedCallback)(Z,1e3,{trailing:!0}),$=e=>{t(e),N&&U(e)};return(0,r.useEffect)((()=>(N&&e&&Z(e,!1),i&&((async()=>{try{const e=await(0,g.createWorker)("script-parser-worker"),t=(0,g.createWorkerPool)((()=>e),3,1e4);R.current=t}catch(e){console.error("Failed to set up script parser worker pool:",e)}})(),(async e=>{try{const t={id:e,content:await u[e]()};return f(t),t}catch(e){return""}})(o)),()=>{var e;null==(e=R.current)||e.terminateWorkers()})),[i,s,o]),(0,c.jsxs)(c.Fragment,{children:[O?(0,c.jsx)(T.NativeScriptEditorButtons,{onInitialize:L,onClose:w,editorState:D,onFocus:M}):null,(0,c.jsx)(d,{ref:m,showNonPrintableCharacters:!0,fontSize:12,language:"javascript",codeCompletionProviders:[{provider:C}],wordWrap:!0,autoFormat:!0,value:e,onChange:$,typeDefinitionTypes:[...G,...b],validationErrors:v,isPreRequestScript:"pre-script"===o})]})}));var $=a(59530),F=a.n($),K=a(50297),V=a(80605),J=a(58560),z=a(20856),B=a(81397),X=a(93715),W=a(20684),q=a(43294),Q=a(56880),Y=a(39245),H=a(10099),ee=a(63622),te=a(45374),ae=a(53018),re=a(69325);let ne,ie,se,oe,ce=e=>e;const le=F()(J.Z)(ne||(ne=ce`
  border-radius: var(--border-radius-max);
  background-color: var(--background-color-tertiary);
  padding: var(--spacing-l);

  & > i > svg {
    width: var(--size-s);
    height: var(--size-s);
  }
`)),de=F()(J.Z)(ie||(ie=ce`
  margin: auto;
  text-align: center;
`)),ge=F()(ee.ZP)(se||(se=ce`
  font-weight: var(--text-font-weight-bold);
`)),pe=F()(J.Z)(oe||(oe=ce`
  height: var(--size-s);
  width: var(--size-s);
  background-color: var(--background-color-secondary);
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-default);

  & > i {
    display: inline-flex;
  }
`)),ue=({isExternalPackagesEnabled:e,isPostmanPackagesEnabled:t})=>(0,c.jsxs)(de,{height:"100",width:"100%",direction:"column",gap:"spacing-l",alignItems:"center",justifyContent:"center",children:[(0,c.jsx)(le,{alignItems:"center",justifyContent:"center",children:(0,c.jsx)(X.Z,{})}),(0,c.jsxs)(J.Z,{gap:"spacing-s",direction:"column",alignItems:"center",width:"100%",children:[(0,c.jsx)(ge,{color:"content-color-primary",children:"Script faster with packages"}),(0,c.jsx)(ee.ZP,{children:e?"Search and add packages from":"Reuse scripts across your team with package library."}),e&&(0,c.jsxs)(J.Z,{alignItems:"center",gap:"spacing-s",children:[t&&(0,c.jsx)(pe,{children:(0,c.jsx)(te.Z,{color:"base-color-brand"})}),(0,c.jsx)(pe,{children:(0,c.jsx)(ae.Z,{})}),(0,c.jsx)(pe,{children:(0,c.jsx)(re.Z,{})})]})]})]});var he=a(38171),ye=a.n(he);let ke,me,ve,Pe=e=>e;const Ee=F().div(ke||(ke=Pe`
  background-color: var(--border-color-default);

  ${0}
`),(({isVertical:e})=>e?(0,$.css)(me||(me=Pe`
          width: 1px;
          height: 100%;
        `)):(0,$.css)(ve||(ve=Pe`
          height: 1px;
          width: 100%;
        `))));var xe=a(74962),fe=a(98530),be=a(34520);let Se,Re,Ne,_e,Ae,Te,Ie=function(e){return e.POSTMAN_PACKAGE="postman-package",e.SELECTED_POSTMAN_PACKAGE="selected-postman-package",e.NPM_PACKAGE="npm-package",e.SELECTED_NPM_PACKAGE="selected-npm-package",e.JSR_PACKAGE="jsr-package",e.SELECTED_JSR_PACKAGE="selected-jsr-package",e.NPM_LOADING="npm-loading",e.JSR_LOADING="jsr-loading",e.NPM_ERROR="npm-error",e.JSR_ERROR="jsr-error",e}({}),Ce=function(e){return e.Packages="packages",e.Snippets="snippets",e}({}),Oe=e=>e;const je=F()(ae.Z)(Se||(Se=Oe`
  & > svg {
    path {
      fill: revert-layer !important;
    }
  }
`)),Le=F()(re.Z)(Re||(Re=Oe`
  & > svg {
    path {
      fill: revert-layer !important;
    }
  }
`)),we=F()(J.Z)(Ne||(Ne=Oe`
  position: relative;
  margin-top: 3px;
  margin-right: 6px;
`)),De=F().i(_e||(_e=Oe`
  position: absolute;
  top: var(--spacing-s);
  left: 10px;

  & > svg {
    path {
      fill: revert-layer !important;
    }
  }
`)),Me=F()(J.Z)(Ae||(Ae=Oe`
  height: 8px;
  width: 8px;
  position: absolute;
  top: 11px;
  left: 11px;
  background-color: var(--content-color-secondary);
  animation: loader 1s infinite;
  border-radius: 50%;

  @keyframes loader {
    0% {
      background-color: var(--content-color-secondary);
    }

    100% {
      background-color: var(--content-color-tertiary);
    }
  }
`)),Ze=F()(X.Z)(Te||(Te=Oe`
  & > svg {
    color: var(--content-color-primary);
  }
`)),Ge=(0,c.jsx)(De,{children:(0,c.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsxs)("g",{clipPath:"url(#clip0_652_12651)",children:[(0,c.jsx)("path",{d:"M9.5 5C9.5 7.48528 7.48528 9.5 5 9.5C2.51472 9.5 0.5 7.48528 0.5 5C0.5 2.51472 2.51472 0.5 5 0.5C7.48528 0.5 9.5 2.51472 9.5 5Z",fill:"#0265D2",stroke:"var(--background-color-primary)"}),(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.85359 3.6869L4.1667 7.37379L2.14648 5.35357L2.85359 4.64646L4.1667 5.95958L7.14648 2.9798L7.85359 3.6869Z",fill:"white"})]}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0_652_12651",children:(0,c.jsx)("rect",{width:"10",height:"10",fill:"var(--background-color-primary)"})})})]})}),Ue=(0,c.jsx)(De,{children:(0,c.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsxs)("g",{clipPath:"url(#clip0_652_13929)",children:[(0,c.jsx)("path",{d:"M9.5 5C9.5 7.48528 7.48528 9.5 5 9.5C2.51472 9.5 0.5 7.48528 0.5 5C0.5 2.51472 2.51472 0.5 5 0.5C7.48528 0.5 9.5 2.51472 9.5 5Z",fill:"#EB2013",stroke:"var(--background-color-primary)"}),(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 6V2H5.5V6H4.5ZM4.5 8V7H5.5V8H4.5Z",fill:"var(--background-color-primary)"})]}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0_652_13929",children:(0,c.jsx)("rect",{width:"10",height:"10",fill:"var(--background-color-primary)"})})})]})}),$e=({children:e,icon:t})=>(0,c.jsxs)(we,{children:[e,t]}),Fe={[Ie.POSTMAN_PACKAGE]:(0,c.jsx)(X.Z,{}),[Ie.SELECTED_POSTMAN_PACKAGE]:(0,c.jsx)($e,{icon:Ge,children:(0,c.jsx)(Ze,{})}),[Ie.NPM_PACKAGE]:(0,c.jsx)(je,{}),[Ie.SELECTED_NPM_PACKAGE]:(0,c.jsx)($e,{icon:Ge,children:(0,c.jsx)(je,{})}),[Ie.JSR_PACKAGE]:(0,c.jsx)(Le,{}),[Ie.SELECTED_JSR_PACKAGE]:(0,c.jsx)($e,{icon:Ge,children:(0,c.jsx)(Le,{})}),[Ie.NPM_LOADING]:(0,c.jsx)($e,{icon:(0,c.jsx)(Me,{}),children:(0,c.jsx)(je,{})}),[Ie.JSR_LOADING]:(0,c.jsx)($e,{icon:(0,c.jsx)(Me,{}),children:(0,c.jsx)(Le,{})}),[Ie.NPM_ERROR]:(0,c.jsx)($e,{icon:Ue,children:(0,c.jsx)(je,{})}),[Ie.JSR_ERROR]:(0,c.jsx)($e,{icon:Ue,children:(0,c.jsx)(Le,{})})};var Ke=a(78476);class Ve{constructor(){this.packages=[],this.isLoadingPackages=!1,this.packagesState=Ke.observable.map(),this.packageRegistrySearchFilter={[p.PackageRegistry.NPM]:!1,[p.PackageRegistry.JSR]:!1,[p.PackageRegistry.POSTMAN]:!1},(0,Ke.makeObservable)(this,{packages:Ke.observable,isLoadingPackages:Ke.observable,setPackages:Ke.action,setIsLoadingPackages:Ke.action,packageRegistrySearchFilter:Ke.observable,packagesState:Ke.observable})}setPackages(e){this.packages=e}setIsLoadingPackages(e){this.isLoadingPackages=e}setPackageRegistrySearchFilter(e){this.packageRegistrySearchFilter=e}updatePackageState(e,t){this.packagesState.set(e,(0,i.Z)({},this.packagesState.get(e),t))}clearPackageState(){this.packagesState.clear()}}class Je{constructor(){this.activeToolbarAction=null,this.searchQuery="",this.setActiveToolbarAction=e=>{this.activeToolbarAction=e},(0,Ke.makeObservable)(this,{activeToolbarAction:Ke.observable,setActiveToolbarAction:Ke.action,setSearchQuery:Ke.action,searchQuery:Ke.observable})}setSearchQuery(e){this.searchQuery=e}}const ze=(0,r.createContext)({}),Be=({children:e})=>{const t=(0,r.useMemo)((()=>({packageListStore:new Ve,editorToolbarStore:new Je})),[]);return(0,c.jsx)(ze.Provider,{value:t,children:e})};function Xe(){const e=(0,r.useContext)(ze);if(!e)throw new Error("useEditorToolbarStore must be used within a EditorToolbarContextProvider");return e}function We(){const e=Xe().packageListStore;return{packages:e.packages,isLoadingPackages:e.isLoadingPackages,setIsLoadingPackages:t=>e.setIsLoadingPackages(t),setPackages:t=>e.setPackages(t),updatePackageState:(t,a)=>{e.updatePackageState(t,a)},clearPackageState:()=>e.clearPackageState(),packagesState:e.packagesState}}let qe,Qe,Ye,He,et=e=>e;const tt=F()(V.Z)(qe||(qe=et`
  align-items: center;
  height: 20px;
  width: 20px;
  display: none;

  & > i > svg {
    path {
      fill: ${0};
    }
  }

  ${0}

  ${0}
`),(({isDisabled:e})=>e?"var(--content-color-tertiary) !important":"var(--button-tertiary-content-color) !important"),(({isDisabled:e})=>!e&&"\n      &:hover {\n        i > svg {\n          path {\n            fill: var(--button-tertiary-hover-content-color) !important;\n          }\n        }\n      }\n    "),(({hoverBackgroundColor:e})=>e&&`\n      &:hover {\n        background-color: var(--${e});\n      }\n    `)),at=F()(V.Z)(Qe||(Qe=et`
  align-items: flex-start;
  height: auto;
  justify-content: flex-start;
  padding: 6px var(--spacing-s);

  ${0}

  &:hover ${0}, &:focus-visible ${0} {
    display: flex;
  }

  &:focus-visible {
    background-color: var(--highlight-background-color-secondary);
    color: var(--content-color-primary);
    box-shadow: unset;
  }

  & > span {
    ${0}
    text-align: left;
    line-height: 0;
  }

  & > i {
    width: var(--size-xs);
    height: var(--size-xs);
    margin: 3px 6px var(--spacing-zero) var(--spacing-zero);
  }

  ${0}
`),(({isExternal:e})=>e&&"\n      &:hover > i > svg {\n        path {\n          fill: revert-layer;\n        }\n      }\n    "),tt,tt,(({spanWidth:e})=>e&&`width: ${e};`),(({isSelected:e})=>e&&"\n      cursor: default;\n      & > i > svg {\n        path {\n          fill: var(--button-primary-content-color) !important;\n        }\n      }\n\n       &:hover, &:active, &:focus-visible {\n       background-color: transparent;\n      }\n      &:focus-visible {\n        background-color: var(--highlight-background-color-secondary);\n      }\n    ")),rt=F()(J.Z)(Ye||(Ye=et`
  flex: 1;
`)),nt=F()(ee.ZP)(He||(He=et`
  color: var(--content-color-secondary);
  border: 1px solid var(--border-color-default);
  border-radius: var(--border-radius-default);
  padding: var(--spacing-zero) var(--spacing-xs);
`)),it=e=>{if(!e.description||!e.showDescription)return null;const{description:t,isTruncated:a}=function(e,t=80){if(e.length<=t)return{description:e,isTruncated:!1};const a=t-3;return{description:e.slice(0,a)+"...",isTruncated:!0}}(e.description);return a?(0,c.jsx)(ee.ZP,{type:"body-small",maxLines:2,color:"content-color-secondary",children:(0,c.jsx)(B.Z,{content:e.description,openDelay:1e3,placement:"left-start",children:(0,c.jsx)("span",{children:t})})}):(0,c.jsx)(ee.ZP,{type:"body-small",color:"content-color-secondary",children:t})},st=(0,K.observer)((({option:e,onSelect:t,onRefCallback:a})=>{var n;const{packagesState:i}=We(),{id:s,iconName:o,version:l,showDescription:d,isExternal:g,openItem:p,openItemTooltipText:u}=e,{iconName:h=o,isSelected:y=!1,iconTooltipText:k,refreshItem:m,refreshItemTooltipText:v,version:P}=null!=(n=i.get(s))?n:{};return(0,c.jsx)(at,{ref:a,"data-testid":"script-toolbar-list-item",type:"tertiary",icon:h?Fe[h]:null,isExternal:g,tooltip:k&&(0,c.jsx)(B.Z,{isInteractive:(0,r.isValidElement)(k),content:k,placement:"left-start",openDelay:1e3}),text:(0,c.jsxs)(J.Z,{direction:"column",width:"100%",alignItems:"flex-start",children:[(0,c.jsxs)(J.Z,{gap:"spacing-xs",minWidth:"0",alignItems:"flex-start",width:"100%",justifyContent:"space-between",children:[l||P?(0,c.jsxs)(rt,{alignItems:"center",minWidth:"0",gap:"spacing-s",children:[(0,c.jsx)(ee.ZP,{color:"content-color-primary",isTruncated:d,type:"body-medium",children:e.name}),(0,c.jsx)(nt,{type:"body-small",isTruncated:d,children:null!=l?l:P})]}):(0,c.jsx)(ee.ZP,{color:"content-color-primary",isTruncated:d,type:"body-medium",children:e.name}),(0,c.jsxs)(J.Z,{gap:"spacing-xs",children:[g&&y&&(0,c.jsx)(tt,{isDisabled:!m,size:"small",tooltip:(0,c.jsx)(B.Z,{content:v,openDelay:1e3}),onClick:e=>{e.stopPropagation(),null==m||m(s)},icon:(0,c.jsx)(fe.Z,{}),type:"tertiary"}),p?(0,c.jsx)(tt,{tooltip:(0,c.jsx)(B.Z,{content:null!=u?u:"View in package library",openDelay:1e3}),onClick:t=>{t.stopPropagation(),null==e.openItem||e.openItem(s)},icon:(0,c.jsx)(be.Z,{}),type:"tertiary",hoverBackgroundColor:"highlight-background-color-tertiary"}):null]})]}),it(e)]}),isSelected:y,onClick:y?void 0:()=>t(e),spanWidth:p?"90%":"100%"},s)}));let ot,ct,lt=e=>e;const dt=F()(xe.Z)(ot||(ot=lt`
  margin: var(--spacing-s) var(--spacing-zero) 6px var(--spacing-s) !important; /** override default margin for heading */
`)),gt=F()(J.Z)(ct||(ct=lt`
  margin-bottom: var(
    --spacing-xs
  ) !important; /** override default aether Flex margin in list */
`)),pt=({options:e,onSelect:t,buttonRefs:a})=>{const i=(0,r.useMemo)((()=>{const t=new Map;for(const a of e){const e=a.category||"NA";t.has(e)||t.set(e,[]),t.get(e).push(a)}return t}),[e]),s=(e,t)=>{a.current[t]=e};return(0,c.jsx)(c.Fragment,{children:[...i.entries()].map((([e,a])=>(0,c.jsx)(n().Fragment,{children:"NA"===e?(0,c.jsx)(c.Fragment,{children:a.map(((e,a)=>(0,c.jsx)(st,{option:e,onSelect:t,onRefCallback:e=>s(e,a)},e.id)))}):(0,c.jsxs)(gt,{direction:"column",children:[(0,c.jsx)(dt,{color:"content-color-tertiary",type:"h6",text:e}),a.map(((e,a)=>(0,c.jsx)(st,{option:e,onSelect:t,onRefCallback:e=>s(e,a)},e.id)))]})},e)))})};var ut=a(68206),ht=a(99078);function yt(e){const t=e[p.PackageRegistry.NPM],a=e[p.PackageRegistry.JSR],r=e[p.PackageRegistry.POSTMAN];return t&&a?p.SearchExternalPackageRegistryFilter.ALL:t||a||r?t?p.SearchExternalPackageRegistryFilter.NPM:a?p.SearchExternalPackageRegistryFilter.JSR:null:p.SearchExternalPackageRegistryFilter.ALL}function kt(e){const t=e.lastIndexOf("@");if(-1===t)return!0;if(0===t)return!0;const a=e.slice(t+1).trim();return""===a||!!x().valid(a)}var mt=a(19578);function vt(e,t){switch(e){case p.PackageRegistry.NPM:return t?Ie.SELECTED_NPM_PACKAGE:Ie.NPM_PACKAGE;case p.PackageRegistry.JSR:return t?Ie.SELECTED_JSR_PACKAGE:Ie.JSR_PACKAGE;default:return t?Ie.SELECTED_POSTMAN_PACKAGE:Ie.POSTMAN_PACKAGE}}function Pt(e){return e===p.PackageRegistry.NPM?Ie.NPM_LOADING:Ie.JSR_LOADING}const Et=e=>{let t=!1,a=!1;for(const r of e)if((r.includes(p.PackageRegistry.NPM)||r.includes(p.PackageRegistry.JSR))&&(t=!0),r.includes(p.PackageRegistry.POSTMAN)&&(a=!0),t&&a)break;return t&&a?"both":t?"public":"postman"},xt=async(e,t,a,r)=>{const{eventLabel:n,metaRegistry:i}=(e=>{const t=[];for(const[a,r]of Object.entries(e))r&&t.push(a);return 0===t.length||t.includes(p.PackageRegistry.NPM)&&t.includes(p.PackageRegistry.JSR)&&t.includes(p.PackageRegistry.POSTMAN)?{eventLabel:"all",metaRegistry:"npm,jsr,postman"}:t.includes(p.PackageRegistry.NPM)&&t.includes(p.PackageRegistry.JSR)?{eventLabel:"public",metaRegistry:"npm,jsr"}:t.includes(p.PackageRegistry.NPM)?{eventLabel:"public",metaRegistry:"npm"}:t.includes(p.PackageRegistry.JSR)?{eventLabel:"public",metaRegistry:"jsr"}:{eventLabel:"postman",metaRegistry:"postman"}})(e);Q.AnalyticsService.addEventV2({category:"package_library",action:"search_package",label:n,value:1,entityType:r,meta:JSON.stringify({search_term:a,editor_mode:t,registry:i}),variantId:"ide"})},ft=async(e,t,a,r)=>{Q.AnalyticsService.addEventV2({category:"package_library",action:"view_in_registry",label:e,value:1,entityType:r,meta:JSON.stringify({package_name:t,package_id:a}),variantId:"ide"})},bt=async(e,t)=>{const[a,r]=e.split(":");Q.AnalyticsService.addEventV2({category:"package_library",action:"update_package_version",label:a,value:1,entityType:t,meta:JSON.stringify({package_name:r}),variantId:"ide"})},St=async(e,t)=>{Q.AnalyticsService.addEventV2({category:"package_library",action:"select_package_from_search",label:e.isExternal?"public":"postman",value:1,entityType:t,meta:JSON.stringify({package_id:e.id,package_name:e.name,registry:e.registry}),variantId:"ide"})},Rt=async(e,t,a)=>{const r=(0,i.Z)({},e,t),n=Object.keys(r);if(0!==n.length)for(const e of n){var s;const t=e.includes(p.PackageRegistry.NPM)||e.includes(p.PackageRegistry.JSR),[n,i]=e.split(":"),o=t?i:e,c=t?n:p.PackageRegistry.POSTMAN;Q.AnalyticsService.addEventV2({category:"package_library",action:"save_package_to_request",label:c,value:1,entityType:a,meta:JSON.stringify({package_name:o,package_id:t||null==(s=r[e])?void 0:s.id}),variantId:"ide"})}},Nt=async e=>{if(null!=e&&e.events)for(const r of e.events){var t,a;const n=Object.keys(null!=(t=null==r||null==(a=r.script)?void 0:a.packages)?t:{});if(0===n.length)continue;const i=Et(n),s=n.join(",");"prerequest"===r.listen?Q.AnalyticsService.addEventV2({action:"history_with_package",label:"pre_request",value:1,category:"package_library",entityType:"history",entityId:e.id,meta:JSON.stringify({packages:s,package_type:i}),variantId:"ide"}):"test"===r.listen&&Q.AnalyticsService.addEventV2({action:"history_with_package",label:"post_request",value:1,category:"package_library",entityType:"history",entityId:e.id,meta:JSON.stringify({packages:s,package_type:i}),variantId:"ide"})}},_t=({entityType:e})=>{const t=mt.Toast.getToasts(),a=Xe().packageListStore,{packages:r,setPackages:n,setIsLoadingPackages:s,packagesState:o,updatePackageState:c}=We(),l=(0,g.useDebouncedCallback)((async t=>{const c=yt(a.packageRegistrySearchFilter);if(c&&t&&kt(t))try{const a=await O();if(!a)return[];const s=(await w({query:t,registry:c,authToken:a})).map((t=>{const{registry:a,scope:r,name:n,version:i,description:s}=t,c=`${r?`@${r}/`:""}${n}`,l=`${a}:${c}@${i}`,d=o.get(l),g=(null==d?void 0:d.isSelected)||!1;return{id:l,name:c,version:i,registry:a,globalName:l,description:s,showDescription:!0,isSelected:g,isExternal:!0,openItemTooltipText:D(a),openItem:()=>{const t=Z({registry:a,name:c,version:i});ft(a,c,l,e),(0,Y.openExternalLink)(t)},iconName:vt(a,!1)}})),l=r.filter((e=>e.isExternal&&e.isSelected)).map((e=>{const t=s.find((({registry:t,name:a})=>t===e.registry&&a===e.name));return null!=t&&t.description?(0,i.Z)({},e,{description:t.description}):e})),d=M([...l,...s]);return n([...r.filter((e=>!e.isExternal)),...d]),d}catch(e){return[]}finally{s(!1)}}),1e3,{trailing:!0}),d=(e,t)=>{var r,n;const i=null==(r=a.packagesState.get(e.id))?void 0:r.isSelected;return i===(null==(n=a.packagesState.get(t.id))?void 0:n.isSelected)?0:i?-1:1},u=(r,s,o,l,d)=>{const{allowUpdate:g,tooltipText:p}=function(e,t,a){return t?{allowUpdate:!1,tooltipText:"Package loading"}:a?{allowUpdate:!1,tooltipText:"Failed to load package"}:f(e)?{allowUpdate:!0,tooltipText:"Update to latest version"}:{allowUpdate:!1,tooltipText:"Version specified in script"}}(r,l,d);c(r,{refreshItemTooltipText:p,refreshItem:g?()=>((r,s,o)=>{c(r,{iconName:Pt(o),iconTooltipText:void 0}),u(r,s,o,!0),j(r,!0).then((async({error:e})=>{if(e){const{packageIdentifier:e}=N(r)||{},{name:a}=e?b(e):{name:r};return t.addToast({title:"Package update failed",description:`Couldn't update ${a} to it's latest version`,status:"error"}),void u(r,s,o,!1)}const l=(await L())[r],d=l?N(l):null;if(!d)return;const{packageRegistry:g,packageIdentifier:p}=d;if(!g||!p||!l)return;const{version:h}=b(p);n(a.packages.map((e=>e.id===r?(0,i.Z)({},e,{version:h}):e))),c(r,{iconName:vt(g,!0)}),u(r,s,o,!1,!!e)})).finally((()=>{c(r,{iconName:vt(o,!0)})})),bt(r,e)})(r,s,o):void 0})};return{searchExternalPackages:e=>{kt(e)&&(s(!0),l(e))},clearExternalPackageSearch:()=>{n([...r.filter((e=>{var t;return!e.isExternal||e.isExternal&&(null==(t=o.get(e.id))?void 0:t.isSelected)})).sort(d)]),s(!1)},setExternalPackageIconState:(e,t,r)=>{if(!e)return;const n=a.packages.find((t=>t.id===e));var i;n&&c(e,{iconName:t?(i=n.registry,i===p.PackageRegistry.NPM?Ie.NPM_ERROR:Ie.JSR_ERROR):vt(n.registry,!0),iconTooltipText:r})},sortPackages:d,setExternalPackageRefreshState:u}};function At({entityType:e}){const t=Xe().packageListStore,{searchExternalPackages:a}=_t({entityType:e});return[t.packageRegistrySearchFilter,(e,r)=>{var n,i,s,o;const c=null!=(n=null==(i=yt(t.packageRegistrySearchFilter))?void 0:i.split(",").length)?n:0,l=null!=(s=null==(o=yt(e))?void 0:o.split(",").length)?s:0;r&&kt(r)&&c+1===l&&(t.setIsLoadingPackages(!0),a(r)),t.setPackageRegistrySearchFilter(e)}]}let Tt,It,Ct,Ot=e=>e;const jt=F()(J.Z)(Tt||(Tt=Ot`
  position: absolute;
  top: var(--spacing-zero);
  left: var(--spacing-zero);
  width: 100%;
  z-index: 1;

  & > div > div {
    box-shadow: unset !important;
    border: unset !important;
    border-radius: unset !important;
    border-bottom: var(--border-width-default) var(--border-style-solid)
      var(--border-color-default) !important;

    input {
      caret-color: var(--content-color-tertiary);
    }

    & > div {
      /* Added to override the default black background of input prefix */
      background: transparent;
      padding-right: var(--spacing-s);
      margin-left: var(--spacing-xs);
    }

    &:focus-within &:hover {
      border: unset !important;
      box-shadow: unset !important;
    }
  }
`)),Lt=F()(J.Z)(It||(It=Ot`
  position: absolute;
  top: var(--spacing-xxl);
  z-index: 1;
  padding: var(--spacing-s) var(--spacing-zero) var(--spacing-xs)
    var(--spacing-l);
  width: 100%;
  background: var(--background-color-primary);
`)),wt=F()(V.Z)(Ct||(Ct=Ot`
  background-color: transparent;
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);

  ${0}
`),(({isSelected:e})=>e?"\n          background: var(--highlight-background-color-primary);\n          &,\n          &:hover {\n            border: var(--border-width-default) var(--border-style-solid) var(--content-color-secondary);\n          }\n\n          &:hover {\n            background: var(--highlight-background-color-tertiary);\n          }\n        ":"\n          &:hover {\n            background: var(--background-color-tertiary);\n            border: var(--border-width-default) var(--border-style-solid) var(--border-color-default);\n          }\n        ")),Dt=(0,K.observer)((({isInternalPackagesFilterEnabled:e,isFilterEnabled:t,searchPlaceholder:a,searchText:r,onSearchTextChange:n,entityType:s})=>{const[o,l]=At({entityType:s}),d=e=>{l((0,i.Z)({},o,{[e]:!o[e]}),r)};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(jt,{children:(0,c.jsx)(ut.Z,{autoFocus:!0,prefix:(0,c.jsx)(ht.Z,{}),placeholder:a,value:r,onChange:e=>{n(e.target.value)}})}),t&&(0,c.jsxs)(Lt,{gap:"spacing-s",alignItems:"center",justifyContent:"flex-start",children:[e&&(0,c.jsx)(wt,{isActive:o[p.PackageRegistry.POSTMAN],size:"small",isSelected:o[p.PackageRegistry.POSTMAN],onClick:()=>d(p.PackageRegistry.POSTMAN),text:(0,c.jsx)(ee.ZP,{color:o[p.PackageRegistry.POSTMAN]?"content-color-primary":"content-color-secondary",type:"body-small",children:"Postman packages"}),type:"outline"}),(0,c.jsx)(wt,{isActive:o[p.PackageRegistry.NPM],size:"small",isSelected:o[p.PackageRegistry.NPM],onClick:()=>d(p.PackageRegistry.NPM),text:(0,c.jsx)(ee.ZP,{color:o[p.PackageRegistry.NPM]?"content-color-primary":"content-color-secondary",type:"body-small",children:"npm"}),type:"outline"}),(0,c.jsx)(wt,{isActive:o[p.PackageRegistry.JSR],size:"small",isSelected:o[p.PackageRegistry.JSR],onClick:()=>d(p.PackageRegistry.JSR),text:(0,c.jsx)(ee.ZP,{color:o[p.PackageRegistry.JSR]?"content-color-primary":"content-color-secondary",type:"body-small",children:"JSR"}),type:"outline"})]})]})}));function Mt(){const e=Xe().editorToolbarStore;return[e.searchQuery,t=>e.setSearchQuery(t)]}let Zt,Gt,Ut,$t=e=>e;const Ft=F()(J.Z)(Zt||(Zt=$t`
  overflow: hidden;
  width: 270px;
  padding: var(--spacing-xs) var(--spacing-s) var(--spacing-zero)
    var(--spacing-s);
  margin-top: ${0};
  margin-bottom: ${0};
  scrollbar-gutter: stable;
`),(({isFilterEnabled:e})=>e?"70px":"var(--spacing-xxl)"),(({hasFooter:e})=>e?"var(--spacing-xxl)":"var(--spacing-xs)")),Kt=F()(J.Z)(Gt||(Gt=$t`
  position: relative;
  height: 316px;
  &:hover ${0} {
    overflow-y: auto;
  }
`),Ft),Vt=F()(J.Z)(Ut||(Ut=$t`
  position: absolute;
  bottom: var(--spacing-xs);
  width: 100%;
  padding: 2px var(--spacing-zero);
  background-color: var(--background-color-primary);

  & > button {
    margin-top: var(--spacing-xs);
    padding-left: var(--spacing-l);
  }
`)),Jt=({options:e,footer:t,searchPlaceholder:a,noResultsText:n,searchBy:i,onSelect:o,onSearch:l,isLoading:d=!1,noOptionsComponent:g,isInternalPackagesEnabled:p=!1,isFilterEnabled:u=!1,shouldSkipSearch:h=(()=>!1),entityType:y})=>{const[k,m]=Mt(),v=(0,r.useRef)([]),P=(0,r.useRef)(null),E=(0,r.useMemo)((()=>{const t=[],a=[];for(const r of e)h(r)?t.push(r):a.push(r);const r=((e,t,a=["name"])=>new(ye())(t,a,{sort:!0}).search(e))(k,a,i);return!k&&P.current&&P.current.scrollTo({top:0}),[...r,...t]}),[k,e,h,i]);return(0,r.useEffect)((()=>{const e=e=>{const t=v.current.filter(Boolean);if(0===t.length)return;const a=t.indexOf(document.activeElement);if("ArrowDown"===e.key)if(e.preventDefault(),-1===a){var r;null==(r=t[0])||r.focus()}else{var n;null==(n=t[(a+1)%t.length])||n.focus()}else if("ArrowUp"===e.key)if(e.preventDefault(),-1===a){var i;null==(i=t[t.length-1])||i.focus()}else{var s;null==(s=t[(a-1+t.length)%t.length])||s.focus()}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[E]),(0,r.useEffect)((()=>{const e=P.current;if(!e)return;const t=()=>{e.contains(document.activeElement)&&document.activeElement.blur()};return e.addEventListener("mouseenter",t),e.addEventListener("mousemove",t),()=>{e.removeEventListener("mouseenter",t),e.removeEventListener("mousemove",t)}}),[]),(0,c.jsxs)(Kt,{children:[(0,c.jsx)(Dt,{searchPlaceholder:a,searchText:k,onSearchTextChange:e=>{m(e),null==l||l(e)},isFilterEnabled:u,isInternalPackagesFilterEnabled:p,entityType:y}),(0,c.jsx)(Ft,{ref:P,"data-testid":"script-toolbar-list",direction:"column",hasFooter:!!t,isFilterEnabled:u,children:d?(0,c.jsx)(J.Z,{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",children:(0,c.jsx)(s.Z,{})}):E.length>0?(0,c.jsx)(pt,{options:E,onSelect:o,buttonRefs:v}):0===E.length&&!k&&g?(0,c.jsx)(c.Fragment,{children:g}):(0,c.jsx)(J.Z,{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",children:(0,c.jsx)(ee.ZP,{type:"body-medium",color:"content-color-secondary",children:n})})}),t&&(0,c.jsxs)(Vt,{alignItems:"flex-start",direction:"column",children:[(0,c.jsx)(Ee,{}),t]})]})};function zt(){const e=Xe().editorToolbarStore;return[e.activeToolbarAction,t=>e.setActiveToolbarAction(t)]}var Bt=a(26663),Xt=a.n(Bt);let Wt;const qt=F()(J.Z)(Wt||(Wt=(e=>e)`
  margin-bottom: 2px;
`)),Qt=()=>{(0,Y.openExternalLink)(Xt().ARTEMIS_URL+"/settings/team/team-resources/external-packages")},Yt=({message:e,buttonText:t})=>(0,c.jsxs)(qt,{width:"auto",gap:"spacing-xs",direction:"column",alignItems:"flex-start",children:[(0,c.jsx)(ee.ZP,{type:"small",children:e}),(0,c.jsx)(V.Z,{text:(0,c.jsx)(ee.ZP,{type:"small",children:t}),type:"monochrome-plain",onClick:Qt})]});var Ht=function(e){return e.ENTRY_POINT_NOT_FOUND="ENTRY_POINT_NOT_FOUND",e.PACKAGE_JSON_NOT_FOUND="PACKAGE_JSON_NOT_FOUND",e.BUNDLING_FAILURE="BUNDLING_FAILURE",e.INSTALL_MEMORY_LIMIT_EXCEEDED="INSTALL_MEMORY_LIMIT_EXCEEDED",e.INSTALL_DISK_LIMIT_EXCEEDED="INSTALL_DISK_LIMIT_EXCEEDED",e.INSTALL_TIMEOUT="INSTALL_TIMEOUT",e.INSTALL_DISK_MONITOR_ERROR="INSTALL_DISK_MONITOR_ERROR",e.INSTALL_MEMORY_MONITOR_ERROR="INSTALL_MEMORY_MONITOR_ERROR",e.INSTALL_ERROR="INSTALL_ERROR",e.UNSUPPORTED_REGISTRY="UNSUPPORTED_REGISTRY",e.INVALID_PACKAGE_SCOPE="INVALID_PACKAGE_SCOPE",e.INVALID_PACKAGE_NAME="INVALID_PACKAGE_NAME",e.INVALID_PACKAGE_VERSION="INVALID_PACKAGE_VERSION",e.INVALID_FILENAME="INVALID_FILENAME",e.PACKAGE_DENIED="PACKAGE_DENIED",e.PACKAGE_NOT_FOUND="PACKAGE_NOT_FOUND",e.PACKAGE_VERSION_NOT_FOUND="PACKAGE_VERSION_NOT_FOUND",e.UNEXPECTED_ERROR="UNEXPECTED_ERROR",e.RATE_LIMIT_EXCEEDED="RATE_LIMIT_EXCEEDED",e.SANDBOX_UNSUPPORTED_PACKAGE="SANDBOX_UNSUPPORTED_PACKAGE",e.URI_TOO_LONG="URI_TOO_LONG",e.PACKAGE_ACCESS_DENIED="PACKAGE_ACCESS_DENIED",e.UNEXPECTED_APP_ERROR="UNEXPECTED_APP_ERROR",e}(Ht||{});const ea="Package not allowed. View allowed packages";function ta(e){if([Ht.ENTRY_POINT_NOT_FOUND,Ht.PACKAGE_JSON_NOT_FOUND,Ht.BUNDLING_FAILURE,Ht.INSTALL_ERROR,Ht.INSTALL_MEMORY_LIMIT_EXCEEDED,Ht.INSTALL_DISK_LIMIT_EXCEEDED,Ht.INSTALL_TIMEOUT,Ht.INSTALL_DISK_MONITOR_ERROR,Ht.INSTALL_MEMORY_MONITOR_ERROR,Ht.SANDBOX_UNSUPPORTED_PACKAGE,Ht.PACKAGE_DENIED].includes(e))return"This package cannot be used in Postman.";switch(e){case Ht.UNSUPPORTED_REGISTRY:return"The package registry is not supported.";case Ht.PACKAGE_NOT_FOUND:return"Couldn't find the package.";case Ht.RATE_LIMIT_EXCEEDED:return"Package usage limit reached. Contact Postman support.";case Ht.INVALID_PACKAGE_SCOPE:return"Package scope invalid.";case Ht.INVALID_PACKAGE_NAME:case Ht.URI_TOO_LONG:return"Package name invalid.";case Ht.INVALID_PACKAGE_VERSION:case Ht.PACKAGE_VERSION_NOT_FOUND:return"Package version invalid.";case Ht.INVALID_FILENAME:return"Package filename invalid.";case Ht.PACKAGE_ACCESS_DENIED:return ea;case Ht.UNEXPECTED_ERROR:case Ht.UNEXPECTED_APP_ERROR:default:return"Something went wrong. Try again."}}function aa(e){return e===ea?(0,c.jsx)(Yt,{message:"Package access not allowed.",buttonText:"View allowed packages"}):e}const ra=(0,K.observer)((({handleAddPackages:e,selectedPackages:t,mode:a,entityType:n})=>{const i=(0,H.useActiveWorkspaceId)(),s=(0,Y.useNavigate)(),{data:o,isLoading:l}=(0,p.usePackagesWithGlobalName)(),[,d]=zt(),[u]=At({entityType:n}),[h]=Mt(),{packages:y,isLoadingPackages:k,setIsLoadingPackages:m,packagesState:v}=We(),{isEnabled:P}=(0,p.useIsPackageEnabled)(),{isEnabled:E}=(0,p.useIsExternalPackageEnabled)(),{fetchPackages:x,selectPackage:f,onPackageSearch:S}=(({entityType:e})=>{const t=(0,H.useActiveWorkspaceId)(),a=(0,Y.useNavigate)(),[,r]=zt(),[n]=At({entityType:e}),{packages:i,setPackages:s,setIsLoadingPackages:o,updatePackageState:c,clearPackageState:l}=We(),{searchExternalPackages:d,clearExternalPackageSearch:g,setExternalPackageIconState:u,sortPackages:h,setExternalPackageRefreshState:y}=_t({entityType:e}),k=(n,i,s)=>{if(!s)return{postmanPackages:[],externalPackageIds:i};const o=[...i];return{postmanPackages:n.map((n=>{const s=i.includes(n.id);return s&&o.splice(o.indexOf(n.id),1),c(n.id,{iconName:vt(p.PackageRegistry.POSTMAN,s),isSelected:s}),{id:n.id,name:n.name,globalName:n.globalName,description:n.description,registry:p.PackageRegistry.POSTMAN,showDescription:!0,openItem:i=>{r(null),ft(p.PackageRegistry.POSTMAN,n.name,n.id,e),a(`/workspace/${t}/package-library/${i}`,{},{customNavEvent:"COLLECTION_RUNNER_NAV_EVENT"})},isSelected:s,iconName:vt(p.PackageRegistry.POSTMAN,s)}})),externalPackageIds:o}};return{fetchPackages:async(e,t,a,r)=>{l();const{postmanPackages:n,externalPackageIds:d}=k(e,t,a);if(!r||0===d.length)return s(n);const g=await L(),p=d.map((e=>((e,t)=>{var a;const r=t[e]||e,n=r?N(r):null;if(!n)return null;const{packageRegistry:s,packageIdentifier:o}=n;if(!s||!o)return null;const{name:l,version:d}=b(o);c(e,{iconName:Pt(s),iconTooltipText:void 0,isSelected:!0}),y(e,r,s,!0),j(e,!1).then((t=>{if(null!=t&&t.error)u(e,!0,aa(ta(t.error)));else if(null!=t&&t.packageId){u(e);const{version:a}=b(t.packageId);a&&c(e,{version:a}),y(e,r,s,!1,!(null==t||!t.error))}}));const g=(null==(a=i.find((t=>t.id===e)))?void 0:a.description)||"";return{id:e,name:l,globalName:r,version:d,description:g,showDescription:!0,registry:s,openItem:()=>{const e=A(o),t=Z({registry:s,name:e,version:d||""});(0,Y.openExternalLink)(t)},openItemTooltipText:D(s),isSelected:!0,isExternal:!0,iconName:Pt(s)}})(e,g))),m=p.filter((e=>null!==e));0===m.length&&l();const v=[...m,...n].sort(h);s(v),o(!1)},fetchPostmanPackages:k,selectPackage:async e=>{const t=i.find((t=>t.id===e));if(!t)return;if(c(e,{iconName:t.registry===p.PackageRegistry.POSTMAN?vt(p.PackageRegistry.POSTMAN,!0):Pt(t.registry),isSelected:!0,iconTooltipText:void 0}),!t.isExternal)return;y(e,t.globalName,t.registry,!0);const a=await j(t.globalName,!1);null!=a&&a.error?u(e,!0,aa(ta(a.error))):null!=a&&a.packageId&&u(e),y(e,t.globalName,t.registry,!1,!(null==a||!a.error))},onPackageSearch:(e,t)=>{t&&(e?yt(n)&&d(e):g())}}})({entityType:n}),R=Object.values(t).map((e=>e.id)),_=(0,r.useMemo)((()=>!!h&&!!(u[p.PackageRegistry.JSR]||u[p.PackageRegistry.NPM]||u[p.PackageRegistry.POSTMAN]||h)),[h,u]),T=(0,g.useDebouncedCallback)((e=>{xt(u,a,e,n)}),800);(0,r.useEffect)((()=>{l&&m(!0),o&&!l&&x(o,R,P,E)}),[o,l,R.join(",")]);const I=(0,r.useMemo)((()=>_?function(e,t){const a=[];return t[p.PackageRegistry.POSTMAN]&&a.push(p.PackageRegistry.POSTMAN),t[p.PackageRegistry.NPM]&&a.push(p.PackageRegistry.NPM),t[p.PackageRegistry.JSR]&&a.push(p.PackageRegistry.JSR),0===a.length||3===a.length?e:e.filter((e=>a.includes(e.registry)))}(y,u):y),[u,y,_]);return(0,c.jsx)(Jt,{searchPlaceholder:P&&E?"Search Postman, NPM, and JSR":E?"Search NPM and JSR":"Search packages",isFilterEnabled:_&&E,isInternalPackagesEnabled:P,options:I,onSelect:t=>{St(t,n),f(t.id),e(t.name,t.globalName)},onSearch:e=>{S(e,E),T(e)},isLoading:k,noOptionsComponent:(0,c.jsx)(ue,{isExternalPackagesEnabled:E,isPostmanPackagesEnabled:P}),searchBy:["name","description","globalName"],noResultsText:"No package found",shouldSkipSearch:e=>{var t;return!(null!=(t=v.get(e.id))&&t.isSelected||!e.isExternal)},entityType:n,footer:P?(0,c.jsx)(V.Z,{size:"small",type:"plain",text:"Open package library",onClick:()=>{Q.AnalyticsService.addEventV2({category:"package_library",action:"open_package_library",variantId:"ide"}),s(`/workspace/${i}/package-library`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"}),d(null)}}):void 0})}));let na,ia,sa,oa,ca=e=>e;const la=F()(V.Z)(na||(na=ca`
  & i {
    margin-right: ${0};
  }
`),(({isScriptWidthNarrow:e})=>e?"0":"6px")),da=F()(V.Z)(ia||(ia=ca`
  width: var(--size-s);
  height: var(--size-s);
`)),ga=F()(J.Z)(sa||(sa=ca`
  height: var(--size-m);
  width: auto;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs);
  margin-right: var(--spacing-m);
  border-radius: var(--border-radius-l);
  position: absolute;
  bottom: var(--spacing-s);
  right: 22px; /** Adjusted to align with the editor ruler */
  border: var(--border-width-default) var(--border-style-solid)
    var(--border-color-default);
  background-color: var(--background-color-primary);
  z-index: 1;
`)),pa=F()(z.ZP)(oa||(oa=ca`
  .tippy-content {
    margin-bottom: var(--spacing-xs);
    padding: var(--spacing-xs) var(--spacing-zero) var(--spacing-zero);
    background-color: var(--background-color-primary);
  }
`)),ua=(0,K.observer)((({snippets:e,isPackageLibraryEnabled:t,handleSnippetSelect:a,selectedPackages:n,mode:s,handleAddPackages:o,isScriptWidthNarrow:l,handleBeautifyContent:d,entityType:g})=>{const[p,u]=zt(),h=(0,r.useRef)(null),y=(0,r.useRef)(null),[,k]=Mt(),{clearExternalPackageSearch:m}=_t({entityType:g}),v=(0,r.useMemo)((()=>e.map((e=>(0,i.Z)({},e,{name:e.name,description:e.description,category:e.category})))),[e]),P=e=>{u(e===p?null:e)};return(0,c.jsxs)(ga,{alignItems:"center",justifyContent:"center",children:[(0,c.jsxs)(J.Z,{gap:"spacing-xs",children:[t&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(la,{ref:h,"data-testid":"script-toolbar-packages-button",size:"small",type:"tertiary",isActive:p===Ce.Packages,onClick:()=>P(Ce.Packages),icon:(0,c.jsx)(X.Z,{}),tooltip:l?(0,c.jsx)(B.Z,{openDelay:1e3,content:"Packages"}):void 0,isScriptWidthNarrow:l,text:l?void 0:"Packages"}),p===Ce.Packages&&(0,c.jsx)(pa,{isOpen:p===Ce.Packages,triggerRef:h,placement:"top-end",onClickOutside:()=>{u(null),k(""),m()},children:(0,c.jsx)(ra,{handleAddPackages:o,selectedPackages:n,mode:s,entityType:g})})]}),(0,c.jsx)(V.Z,{ref:y,"data-testid":"script-toolbar-snippets-button",size:"small",type:"tertiary",onClick:()=>P(Ce.Snippets),icon:(0,c.jsx)(W.Z,{}),text:l?void 0:"Snippets",isActive:p===Ce.Snippets,tooltip:l?(0,c.jsx)(B.Z,{openDelay:1e3,content:"Snippets"}):void 0}),p===Ce.Snippets&&(0,c.jsx)(pa,{isOpen:p===Ce.Snippets,triggerRef:y,triggerEvent:"click",placement:"top-end",onClickOutside:()=>u(null),children:(0,c.jsx)(Jt,{searchPlaceholder:"Search snippets",options:v,onSelect:e=>{s&&Q.AnalyticsService.addEventV2({category:`${s}-script-snippets`,action:"click",label:e.name}),a(e)},searchBy:["name","category"],noResultsText:"No snippet found",entityType:g})})]}),(0,c.jsx)(Ee,{isVertical:!0}),(0,c.jsx)(da,{"data-testid":"script-toolbar-beautify-button",tooltip:(0,c.jsx)(B.Z,{openDelay:1e3,content:"Beautify"}),size:"small",type:"tertiary",onClick:d,shortcutLabel:"⌘ + B",icon:(0,c.jsx)(q.Z,{})})]})})),ha=e=>(0,c.jsx)(Be,{children:(0,c.jsx)(ua,(0,i.Z)({},e))})}}]);
//# sourceMappingURL=744.bb6aac9e4ef63853.js.map