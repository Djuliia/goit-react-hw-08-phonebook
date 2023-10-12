"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[937],{8787:function(n,e,o){o.d(e,{Z:function(){return i}});var r,t=o(168),a=o(5867),i=(o(7021),(0,a.vJ)(r||(r=(0,t.Z)(["\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  padding: 40px;\n  background-color: #111111;\n  color: white;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"]))))},291:function(n,e,o){o.r(e),o.d(e,{default:function(){return H}});var r,t,a,i,s,d,c,l,u,p,x=o(168),f=o(5867),m=f.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  color: #fff;\n  padding: 24px;\n"]))),b=o(5705),h=o(6727),g=o(5984),j=(0,f.zo)(b.l0)(t||(t=(0,x.Z)(["\n  border-radius: 4px;\n  border: 1px solid #fff;\n  padding: 48px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 40px;\n"]))),y=(0,f.zo)(b.gN)(a||(a=(0,x.Z)(["\n  display: block;\n  width: 100%;\n  padding: 8px 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  border-radius: 4px;\n"]))),v=f.zo.button(i||(i=(0,x.Z)(["\n  padding: 12px 24px;\n  margin-top: 16px;\n  background-color: #e6b333;\n  border-radius: 4px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  &:hover {\n    color: #d3d3d3;\n    box-shadow: -5px -5px 20px rgba(230, 179, 51, 0.5),\n      5px 5px 20px rgba(201, 196, 196, 0.5);\n  }\n"]))),Z=(0,f.zo)(b.Bc)(s||(s=(0,x.Z)(["\n  font-size: 12px;\n  color: #b86161;\n"]))),w=o(9434),k=o(6916),C=function(n){return n.contacts.items},z=function(n){return n.contacts.error},F=function(n){return n.contacts.isLoading},P=(0,k.P1)([C,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),A=o(3634),N=o(8174),_=o(184),L=h.Ry().shape({name:h.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'").max(22).required("Required"),number:h.Z_().matches(/^\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").max(12).required("Required")}),S=function(){var n=(0,g.x0)(),e=(0,g.x0)(),o=(0,w.I0)(),r=(0,w.v9)(C);return(0,_.jsx)(b.J9,{initialValues:{name:"",number:""},validationSchema:L,onSubmit:function(n,e){var t=e.resetForm;r.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?(0,N.Am)("Contact with name ".concat(n.name," already exists!")):(o((0,A.uK)(n)),t())},children:(0,_.jsxs)(j,{children:[(0,_.jsx)("label",{htmlFor:n,children:"Name"}),(0,_.jsx)(y,{type:"text",name:"name",id:n,autoComplete:"off"}),(0,_.jsx)(Z,{name:"name",component:"div"}),(0,_.jsx)("label",{htmlFor:e,children:"Number"}),(0,_.jsx)(y,{type:"tel",name:"number",id:e,autoComplete:"off"}),(0,_.jsx)(Z,{name:"number",component:"div"}),(0,_.jsx)(v,{type:"submit",children:"Add contact"})]})})},q=f.ZP.ul(d||(d=(0,x.Z)(["\n  padding: 0;\n"]))),I=f.ZP.li(c||(c=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 16px;\n  background-color: #f5f5f5;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: #000;\n"]))),M=f.ZP.button(l||(l=(0,x.Z)(["\n  background-color: #e6b333;\n  color: #000;\n  border: none;\n  border-radius: 4px;\n  padding: 6px 12px;\n  margin-left: 24px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  &:hover {\n    color: #d3d3d3;\n    box-shadow: -5px -5px 20px rgba(230, 179, 51, 0.5),\n      5px 5px 20px rgba(201, 196, 196, 0.5);\n  }\n"]))),R=o(2791),B=o(9067),J=function(){var n=(0,w.v9)(C),e=(0,w.v9)(z),o=(0,w.v9)(F),r=(0,w.I0)(),t=(0,w.v9)(P);return(0,R.useEffect)((function(){r((0,A.yF)())}),[r]),(0,_.jsxs)(_.Fragment,{children:[o&&(0,_.jsx)(B.a,{}),e&&(0,_.jsx)("p",{children:e}),n&&(0,_.jsx)(q,{children:t.map((function(n){var e=n.id,o=n.name,t=n.number;return(0,_.jsxs)(I,{children:[o,": ",t,(0,_.jsx)(M,{onClick:function(){return r((0,A.GK)(e))},children:"Delete"})]},e)}))})]})},D=f.ZP.label(u||(u=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),E=f.ZP.input(p||(p=(0,x.Z)(["\n  display: block;\n  background-color: transparent;\n  min-width: 340px;\n  padding: 12px 24px;\n  border-radius: 4px;\n  color: #fff;\n  border: 2px solid #fff;\n"]))),K=o(4808),$=function(){var n=(0,w.I0)();return(0,_.jsxs)(D,{children:["Find contacts by name",(0,_.jsx)(E,{type:"text",name:"filter",onChange:function(e){return n((0,K.T)(e.target.value))}})]})},G=o(8787),H=function(){var n=(0,w.I0)(),e=(0,w.v9)(F),o=(0,w.v9)(z);return(0,R.useEffect)((function(){n((0,A.yF)())}),[n]),(0,_.jsxs)(m,{children:[(0,_.jsx)("h1",{children:"Phonebook"}),(0,_.jsx)(S,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)($,{}),e&&!o&&(0,_.jsx)(B.a,{}),(0,_.jsx)(J,{}),(0,_.jsx)(G.Z,{})]})}}}]);
//# sourceMappingURL=937.81a4e199.chunk.js.map