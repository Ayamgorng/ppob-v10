import{W as p,r as f,j as e,d as x}from"./app.js";import{G as g}from"./GuestLayout.js";import{I as m,T as i,a as l}from"./TextInput.js";import{P as w}from"./PrimaryButton.js";import"./ApplicationLogo.js";import"./clsx.js";import"./transition.js";function _(n){const{data:r,setData:t,post:d,processing:a,errors:o,reset:u}=p({name:"",email:"",password:"",password_confirmation:""});f.useEffect(()=>()=>{u("password","password_confirmation")},[]);const c=s=>{s.preventDefault(),d(route("register"))};return e.jsx(g,{data:n.data,title:"Register",children:e.jsxs("form",{onSubmit:c,children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"name",value:"Name"}),e.jsx(i,{id:"name",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,disabled:a,onChange:s=>t("name",s.target.value),required:!0}),e.jsx(l,{message:o.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"email",value:"Email"}),e.jsx(i,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",disabled:a,onChange:s=>t("email",s.target.value),required:!0}),e.jsx(l,{message:o.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"password",value:"Password"}),e.jsx(i,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",disabled:a,onChange:s=>t("password",s.target.value),required:!0}),e.jsx(l,{message:o.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(m,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(i,{id:"password_confirmation",type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",disabled:a,onChange:s=>t("password_confirmation",s.target.value),required:!0}),e.jsx(l,{message:o.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(x,{href:route("login"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Already registered?"}),e.jsx(w,{className:"ms-4",disabled:a,children:"Register"})]})]})})}export{_ as default};