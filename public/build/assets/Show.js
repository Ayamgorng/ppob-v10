import{r as j,j as e,a as y,y as k}from"./app.js";import{A as D,B as o}from"./AuthenticatedLayout.js";import{C as b}from"./Card.js";import{c as n}from"./clsx.js";import{l as S,f as C,r as I}from"./BaseHelper.js";import{D as L,a as r}from"./deposit.js";import{T as _}from"./TextInput.js";import{I as A}from"./ImagePreview.js";import"./ApplicationLogo.js";import"./transition.js";const m=({label:t,value:a,align:s="text-left"})=>e.jsxs("div",{className:n("p-2",s),children:[e.jsx("div",{className:"dark:text-white leading-8",children:t}),e.jsx("div",{className:"text-xl font-semibold dark:text-white inline-flex",children:a})]}),g=({label:t,loading:a,className:s="",...c})=>e.jsx("button",{disabled:a,...c,className:n("w-full p-2 rounded-xl text-center text-white transition-all duration-300 disabled:opacity-50",s),children:a?"Loading...":t});function z({data:t,deposit:a}){const[s,c]=j.useState(!1),[u,w]=j.useState(""),v=x=>{w(x.target.files[0])},h=async x=>{c(!0),y.put(`/admin/deposit/${a.id}`,{stat:x}).then(l=>{var i,f,p;if((i=l.data)!=null&&i.success){o.success((f=l.data)==null?void 0:f.message),k.get("/admin/deposit");return}else o.error((p=l.data)==null?void 0:p.message)}).catch(l=>{var i;o.error((i=l.response.data)==null?void 0:i.message)}).finally(()=>{c(!1)})};let d="";switch(typeof u){case"object":d=URL.createObjectURL(u);break;case"string":a.image&&(d=`/images/deposit/${a.image}`);break}const N=S[a.status];return e.jsxs(D,{data:t,children:[e.jsxs("div",{className:"text-3xl dark:text-white",children:["Deposit : ",a.id]}),e.jsxs("div",{className:"flex justify-between gap-x-10",children:[e.jsxs(b,{className:"px-4 py-3 w-full md:w-2/4",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(m,{label:"Bank",value:a.bank}),e.jsxs("div",{className:"p-3 text-right",children:[e.jsx("div",{className:"dark:text-white",children:"Date"}),e.jsx("div",{className:"dark:text-white",children:C(a.created_at)})]})]}),e.jsx(m,{label:"Account Number",value:a.account_number}),e.jsx(m,{label:"Nominal",value:I(a.nominal)}),e.jsx(m,{label:"Status",value:e.jsx("div",{className:n("px-4 py-2 rounded-xl text-white",N.color),children:L[a.status]})}),[r.waiting_payment,r.waiting_approval].includes(a.status)&&e.jsxs("div",{className:"p-3 mt-5 flex gap-x-8 justify-between",children:[e.jsx(g,{label:"Cancel",loading:s,onClick:()=>h(r.failed),className:n("bg-red-500",!s&&"hover:bg-red-600")}),e.jsx(g,{label:"Approve",loading:s,onClick:()=>h(r.success),className:n("bg-green-500",!s&&"hover:bg-green-600")})]})]}),e.jsx(b,{className:"px-4 py-3 w-full md:w-1/2 flex flex-col justify-between",children:e.jsxs("div",{children:[e.jsx("div",{className:"dark:text-white mb-10 text-xl",children:"Upload Transfer Evidence"}),a.status==r.waiting_payment&&e.jsx(_,{type:"file",accept:"image/*",onChange:v,className:"w-full md:w-1/2 mb-2"}),e.jsx("div",{id:"galleryID",children:d&&e.jsx(A,{src:d,height:210})})]})})]})]})}export{z as default};
