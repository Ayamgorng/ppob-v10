import{r as o,j as e,a as v,y as E}from"./app.js";import{A,B as b}from"./AuthenticatedLayout.js";import{C as M}from"./Card.js";import{I as T,T as V}from"./TextInput.js";import{P as k}from"./PrimaryButton.js";import{S as B}from"./SelectInput.js";import{a as D}from"./BaseHelper.js";import"./clsx.js";import"./ApplicationLogo.js";import"./transition.js";import"./keyboard.js";function Q({data:C,category:j,products:l,isPln:x}){const[d,c]=o.useState(0),[u,f]=o.useState(""),[N,S]=o.useState(!1),[w,y]=o.useState(""),[i,h]=o.useState(!1);new AbortController().signal;const I=async()=>{var t,m,s,r,n,g;if(!i){h(!0);const a=await v.post("/transaction/postpaid",{id_customer:u,id_product:d});if((m=(t=a==null?void 0:a.data)==null?void 0:t.data)!=null&&m.id){b.success(a.data.message),c(0),f(""),E.get(`/history/${(r=(s=a==null?void 0:a.data)==null?void 0:s.data)==null?void 0:r.id}`);return}else(n=a.data)!=null&&n.message&&b.error((g=a.data)==null?void 0:g.message);h(!1)}};o.useEffect(()=>{l.length===1&&c(l[0].id)},[]);const p=(t,m)=>{let s=t,r=5;x&&(s=D(t),r=12);const n=s.length>=r;y(n?"":`Number too short, minimim ${r} number`),S(n&&m>0),f(s)},P=t=>{c(t),p(u,t)};return e.jsx(A,{data:C,title:"Transaction",children:e.jsxs(M,{className:"flex flex-col md:px-10 p-6 gap-y-3",children:[e.jsx("h3",{className:"text-3xl font-medium mb-5 dark:text-white",children:j.name}),l.length>1&&e.jsxs(e.Fragment,{children:[e.jsx(T,{children:"Provider/Operator"}),e.jsx(B,{widthClass:"max-w-xl",data:l,value:d,onChange:P})]}),e.jsx(V,{title:x?"Meter Number":"ID Customer",value:u,loading:i,errorMessage:w,isFocused:!0,disabled:i,onChange:t=>p(t.target.value,d),className:"max-w-xl"}),e.jsx("div",{className:"w-full text-right my-5",children:e.jsx(k,{loading:i,disabled:!N||i,onClick:()=>I(),children:"Process"})})]})})}export{Q as default};
