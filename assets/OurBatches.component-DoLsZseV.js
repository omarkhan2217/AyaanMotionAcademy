var g=Object.defineProperty,x=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var o=(a,e,i)=>e in a?g(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i,d=(a,e)=>{for(var i in e||(e={}))p.call(e,i)&&o(a,i,e[i]);if(s)for(var i of s(e))N.call(e,i)&&o(a,i,e[i]);return a},c=(a,e)=>x(a,u(e));import{j as n}from"./index-D_H1y8ot.js";import{B as l}from"./desktopNav.layout-DPMxpPjV.js";import{A as v}from"./arrow.icon-DxB71SWK.js";const z=a=>n.jsx("svg",c(d({xmlns:"http://www.w3.org/2000/svg",width:11,height:10,fill:"none"},a),{children:n.jsx("path",{stroke:"#333",strokeLinecap:"round",strokeWidth:1.5,d:"M1 5.667 3.864 8 10 1"})})),B="_mainContainer_j8dzd_1",w="_mainBorderContainer_j8dzd_1",b="_innerContainer_j8dzd_25",f="_BatchName_j8dzd_34",k="_grade_j8dzd_40",D="_imageContairner_j8dzd_47",A="_guide_j8dzd_55",M="_buttonContainer_j8dzd_59",P="_detailsContainer_j8dzd_64",R="_innerDetails_j8dzd_76",q="_topCard_j8dzd_88",t={mainContainer:B,mainBorderContainer:w,innerContainer:b,BatchName:f,grade:k,imageContairner:D,guide:A,buttonContainer:M,detailsContainer:P,innerDetails:R,topCard:q},y="/AyaanMotionAcademy/assets/faculty%20icons-B0LwlRPz.png",T=a=>{const{BatchName:e,grade:i,guide:m,image:_,isScholar:r,onClick:j,details:C}=a;return n.jsxs("div",{className:r?t.mainBorderContainer:t.mainContainer,children:[r?n.jsx("div",{className:t.topCard,children:"Most Popular"}):null,n.jsxs("div",{className:t.innerContainer,children:[n.jsx("div",{className:t.BatchName,children:e}),n.jsx("div",{className:t.grade,children:i}),n.jsxs("div",{className:t.imageContairner,children:[n.jsx("img",{src:y}),n.jsx("img",{src:_}),n.jsx("div",{className:t.guide,children:m})]}),n.jsx("a",{target:" _blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSfX8qDYv_rTh0dq6U9x6Z-DTHNR9FZ2H8ptPObGTFPmKYvmrw/viewform",className:t.buttonContainer,children:n.jsx(l,{label:r?"Register Now":"Inquire Now",size:"md"})})]}),n.jsx("div",{className:t.detailsContainer,children:C.map(h=>n.jsxs("div",{className:t.innerDetails,children:[n.jsx(z,{}),h.detail]}))}),n.jsx("div",{className:t.button2,children:n.jsx(l,{label:"Know More",variant:"outline",icon:n.jsx(v,{}),onClick:j})})]})};export{T as O};
