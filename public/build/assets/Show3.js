import{r as p,j as e,a as b,y as N}from"./app.js";import{A as v}from"./AuthenticatedLayout.js";import{C as o}from"./Card.js";import{c as a}from"./clsx.js";import{l as u,f,r as x}from"./BaseHelper.js";import"./ApplicationLogo.js";import"./transition.js";const l=({label:i,value:s,align:r="text-left"})=>e.jsxs("div",{className:a("p-2",r),children:[e.jsx("div",{className:"dark:text-white leading-8",children:i}),e.jsx("div",{className:"text-xl font-semibold dark:text-white inline-flex",children:s})]}),h=({label:i,loading:s,className:r="",...t})=>e.jsx("button",{disabled:s,...t,className:a("w-full p-2 rounded-xl text-center text-white transition-all duration-300",r),children:s?"Loading...":i});function I({data:i,transaction:s,category:r}){const[t,c]=p.useState(!1),m=u[s.status],n=async d=>{c(!0),await b.put(`/transaction/postpaid/${s.id}`,{type:d}),N.reload(),c(!1)};return e.jsxs(v,{data:i,children:[e.jsx("div",{className:"text-3xl dark:text-white",children:"History"}),e.jsxs("div",{className:"flex justify-between gap-x-10",children:[e.jsxs(o,{className:"px-4 py-3 w-full md:w-1/2",children:[e.jsx(l,{label:r.name,value:s.product_name}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(l,{label:"Order ID",value:s.id}),e.jsxs("div",{className:"p-3 text-right",children:[e.jsx("div",{className:"dark:text-white",children:"Date"}),e.jsx("div",{className:"dark:text-white",children:f(s.created_at)})]})]}),e.jsx(l,{label:"Number/ID Customer",value:s.mtrpln?s.mtrpln:s.target}),e.jsx(l,{label:"Serial Number / Token / Security Code",value:s.token||"-"}),e.jsx(l,{label:"Price",value:x(s.price)}),e.jsx(l,{label:"Commission",value:x(s.commission)}),e.jsx(l,{label:"Selling Price",value:x(s.total)}),e.jsx(l,{label:"Status",value:e.jsx("div",{className:a("px-4 py-2 rounded-xl text-white",m.color),children:m.label})}),e.jsxs("div",{className:"p-3",children:[e.jsx("div",{className:"dark:text-white",children:"Note"}),e.jsx("div",{className:"dark:text-white",children:s.note})]}),s.status===3&&e.jsxs("div",{className:"p-3 mt-5 flex gap-x-8 justify-between",children:[e.jsx(h,{label:"Cancel",loading:t,onClick:()=>n(0),className:a("bg-red-500",!t&&"hover:bg-red-600")}),e.jsx(h,{label:"Pay Now",loading:t,onClick:()=>n(1),className:a("bg-blue-500",!t&&"hover:bg-blue-600")})]})]}),e.jsxs(o,{className:"px-4 py-3 w-full md:w-1/2",children:[e.jsx("div",{className:"dark:text-white mb-10 text-xl",children:"Transaction Status Note"}),e.jsx("table",{children:e.jsx("tbody",{children:u.map((d,j)=>e.jsxs("tr",{children:[e.jsx("td",{className:"pb-3",children:e.jsx("div",{className:a("px-4 py-2 rounded-xl text-white text-center",d.color),children:d.label})}),e.jsx("td",{className:"pb-3 pl-10 dark:text-white",children:d.desc})]},j))})})]})]})]})}export{I as default};
