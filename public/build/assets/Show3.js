import{r as j,j as e,a as b,y as N}from"./app.js";import{A as v}from"./AuthenticatedLayout.js";import{C as n}from"./Card.js";import{T as f}from"./transaction.js";import{c as a}from"./clsx.js";import{l as h,f as w,r as x}from"./BaseHelper.js";import"./react-toastify.esm.js";import"./ApplicationLogo.js";import"./transition.js";const t=({label:i,value:s,align:r="text-left"})=>e.jsxs("div",{className:a("p-2",r),children:[e.jsx("div",{className:"dark:text-white leading-8",children:i}),e.jsx("div",{className:"text-xl font-semibold dark:text-white inline-flex",children:s})]}),u=({label:i,loading:s,className:r="",...l})=>e.jsx("button",{disabled:s,...l,className:a("w-full p-2 rounded-xl text-center text-white transition-all duration-300",r),children:s?"Loading...":i});function _({data:i,transaction:s,category:r}){const[l,c]=j.useState(!1),m=h[s.status],o=async d=>{c(!0),await b.put(`/transaction/postpaid/${s.id}`,{type:d}),N.reload(),c(!1)};return e.jsxs(v,{data:i,children:[e.jsx("div",{className:"text-3xl dark:text-white",children:"History"}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-x-10 gap-y-5",children:[e.jsxs(n,{className:"px-4 py-3",children:[e.jsx(t,{label:r.name,value:s.product_name}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(t,{label:"Order ID",value:s.id}),e.jsxs("div",{className:"p-3 text-right",children:[e.jsx("div",{className:"dark:text-white",children:"Date"}),e.jsx("div",{className:"dark:text-white",children:w(s.created_at)})]})]}),e.jsx(t,{label:"Number/ID Customer",value:s.mtrpln?s.mtrpln:s.target}),e.jsx(t,{label:"Serial Number / Token / Security Code",value:s.token||"-"}),e.jsx(t,{label:"Price",value:x(s.price)}),e.jsx(t,{label:"Commission",value:x(s.commission)}),e.jsx(t,{label:"Selling Price",value:x(s.total)}),e.jsx(t,{label:"Status",value:e.jsx("div",{className:a("px-4 py-2 rounded-xl text-white",m.color),children:m.label})}),e.jsxs("div",{className:"p-3",children:[e.jsx("div",{className:"dark:text-white",children:"Note"}),e.jsx("div",{className:"dark:text-white",children:s.note})]}),s.status===f.waiting_payment&&e.jsxs("div",{className:"p-3 mt-5 flex gap-x-8 justify-between",children:[e.jsx(u,{label:"Cancel",loading:l,onClick:()=>o(0),className:a("bg-red-500",!l&&"hover:bg-red-600")}),e.jsx(u,{label:"Pay Now",loading:l,onClick:()=>o(1),className:a("bg-blue-500",!l&&"hover:bg-blue-600")})]})]}),e.jsxs(n,{className:"px-4 py-3",children:[e.jsx("div",{className:"dark:text-white mb-10 text-xl",children:"Transaction Status Note"}),e.jsx("table",{children:e.jsx("tbody",{children:h.map((d,p)=>e.jsxs("tr",{children:[e.jsx("td",{className:"pb-3",children:e.jsx("div",{className:a("px-4 py-2 rounded-xl text-white text-center",d.color),children:d.label})}),e.jsx("td",{className:"pb-3 pl-10 dark:text-white",children:d.desc})]},p))})})]})]})]})}export{_ as default};