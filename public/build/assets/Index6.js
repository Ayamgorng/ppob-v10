import{j as r,d as o}from"./app.js";import{A as i}from"./AuthenticatedLayout.js";import{C as m}from"./Card.js";import{P as n}from"./PaginateDataTable.js";import{P as l}from"./PrimaryButton.js";import{c}from"./clsx.js";import{r as d,l as p,f as u}from"./BaseHelper.js";import"./react-toastify.esm.js";import"./ApplicationLogo.js";import"./transition.js";import"./Api.js";function v({data:a}){const s=[{name:"Name",selector:t=>t.product_name},{name:"Price",selector:t=>d(t.total)},{name:"Customer Number",selector:t=>t.mtrpln?t.mtrpln:t.target},{name:"Status",selector:t=>{const e=p[t.status];return r.jsx("div",{className:c("px-3 py-2 rounded-xl text-white",e.color),children:e.label})}},{name:"Date",selector:t=>u(t.created_at)},{name:"",selector:t=>r.jsx(o,{href:`/admin/transaction/${t.id}`,children:r.jsx(l,{children:"View"})})}];return r.jsxs(i,{data:a,title:"History",children:[r.jsx("div",{className:"text-3xl dark:text-white",children:"History"}),r.jsx(m,{children:r.jsx(n,{url:"/admin/transaction/list",columns:s})})]})}export{v as default};