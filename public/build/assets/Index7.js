import{j as t,y as r,d as o}from"./app.js";import{A as i,F as n}from"./AuthenticatedLayout.js";import{C as m}from"./Card.js";import{P as l}from"./PaginateDataTable.js";import{P as s}from"./PrimaryButton.js";import{c}from"./clsx.js";import{r as d,l as p,f as u}from"./BaseHelper.js";import{D as x}from"./deposit.js";import"./ApplicationLogo.js";import"./transition.js";const f=[{name:"Bank",selector:e=>e.bank},{name:"Nominal",selector:e=>d(e.nominal)},{name:"Account Number",selector:e=>e.account_number},{name:"Status",selector:e=>{const a=p[e.status];return t.jsx("div",{className:c("px-3 py-2 rounded-xl text-white",a.color),children:x[e.status]})}},{name:"Date",selector:e=>u(e.created_at)},{name:"",selector:e=>t.jsx(o,{href:`/deposit/${e.id}`,children:t.jsx(s,{children:"View"})})}];function A({data:e}){return t.jsxs(i,{data:e,title:"Deposit",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("div",{className:"text-3xl dark:text-white",children:"Deposit"}),t.jsxs(s,{className:"py-3",onClick:()=>r.get("/deposit/create"),children:[t.jsx(n,{})," Topup"]})]}),t.jsx(m,{className:"p-4",children:t.jsx(l,{url:"/deposit/list",columns:f})})]})}export{A as default};
