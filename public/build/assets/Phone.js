import{r as a,j as e,b as V,a as S,y as _}from"./app.js";import{A as F,B as w}from"./AuthenticatedLayout.js";import{C as R}from"./Card.js";import{T as q}from"./TextInput.js";import{P as z}from"./PrimaryButton.js";import G from"./Product.js";import H from"./ProductSelectedDesc.js";import{a as J}from"./BaseHelper.js";import{c as K}from"./clsx.js";import"./ApplicationLogo.js";import"./transition.js";function ot({data:y,category:n}){const[o,v]=a.useState(""),[C,k]=a.useState(!1),[T,E]=a.useState(""),[c,d]=a.useState(!1),[r,l]=a.useState(!1),[i,m]=a.useState(0),[A,u]=a.useState(""),[g,$]=a.useState([]),x=new AbortController,B=x.signal,D=async()=>{d(!0),u("");const t=await S.get(`/transaction/list-product?id_category=${n.id}&phone=${o}`,{signal:B});$(t.data),d(!1)},I=async()=>{var s,p,f,P,b,j,N;l(!0);const t=await S.post("/transaction/prepaid",{id_product:i,target:o});if((p=(s=t==null?void 0:t.data)==null?void 0:s.data)!=null&&p.id){w.success((f=t.data)==null?void 0:f.message),m(0),_.get(`/history/${(b=(P=t==null?void 0:t.data)==null?void 0:P.data)==null?void 0:b.id}`);return}else(j=t.data)!=null&&j.message&&w.error((N=t.data)==null?void 0:N.message);l(!1)};a.useEffect(()=>{const t=setTimeout(()=>{o.length>=4&&D()},1e3);return()=>{clearTimeout(t),x.abort()}},[o]);const h=(t,s)=>{m(s),v(t),k(t.length>=10&&s>0)},L=t=>{const s=J(t);E(s.length<10?"Number too short, minimim 10 number":""),h(s,i)},M=t=>{u(t.desc),h(o,t.id)};return e.jsxs(F,{data:y,children:[e.jsx(V,{title:"Transaction"}),e.jsxs(R,{className:"flex flex-col md:px-10 p-6 gap-y-3",children:[e.jsx("h3",{className:"text-3xl font-medium mb-5 dark:text-white",children:n.name}),e.jsx(q,{title:"Phone Number",disabled:r,errorMessage:T,value:o,isFocused:!0,onChange:t=>L(t.target.value),className:"w-full max-w-xl"}),g.length>0&&e.jsx("label",{className:"dark:text-white",children:"Nominal"}),e.jsx("div",{className:K(!c&&"grid lg:grid-cols-5 md:grid-cols-3","gap-8 max-h-96 overflow-y-auto pr-5 rounded-sm"),children:c?e.jsx("div",{className:"w-full text-center dark:text-white",children:"Processing..."}):g.map((t,s)=>e.jsx(G,{data:t,idProduct:i,onClick:()=>t.status&&M(t)},s))}),e.jsx(H,{description:A}),e.jsx("div",{className:"w-full text-right my-5",children:e.jsx(z,{loading:r,disabled:!C||r,onClick:()=>I(),children:"Process"})})]})]})}export{ot as default};
