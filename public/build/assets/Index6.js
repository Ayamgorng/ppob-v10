import{j as e,d as o}from"./app.js";import{A as i}from"./AuthenticatedLayout.js";import{C as m}from"./Card.js";import{P as n}from"./PaginateDataTable.js";import{P as l}from"./PrimaryButton.js";import{c}from"./clsx.js";import{r as d,l as u,f as x}from"./BaseHelper.js";import"./ApplicationLogo.js";import"./transition.js";function D({data:a}){const s=[{name:"Name",selector:t=>t.product_name},{name:"Price",selector:t=>d(t.total)},{name:"Customer Number",selector:t=>t.mtrpln?t.mtrpln:t.target},{name:"Status",selector:t=>{const r=u[t.status];return e.jsx("div",{className:c("px-3 py-2 rounded-xl text-white",r.color),children:r.label})}},{name:"Date",selector:t=>x(t.created_at)},{name:"",selector:t=>e.jsx(o,{href:`/admin/transaction/${t.id}`,children:e.jsx(l,{children:"View"})})}];return e.jsxs(i,{data:a,title:"History",children:[e.jsx("div",{className:"text-3xl dark:text-white",children:"History"}),e.jsx(m,{children:e.jsx(n,{url:"/admin/transaction/list",columns:s})})]})}export{D as default};
