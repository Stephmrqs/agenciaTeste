(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[373],{4119:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adm/add-cli",function(){return s(5175)}])},5175:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return m}});var l=s(5893),c=s(7294),n=s(5121),i=s(1163),o=s(4999),r=s.n(o),d=s(9008),t=s.n(d);function m(){let[e,a]=(0,c.useState)({nome:"",cpf:"",dataNascimento:"",sexo:"",telefone:"",email:"",senha:""}),s=(0,i.useRouter)(),o=s=>{a({...e,[s.target.name]:s.target.value})},d=e=>{let a=e.target;a.value=m(a.value)},m=e=>e?e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2"):"",h=e=>e?e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{2})(\d)/,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2"):"";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t(),{children:(0,l.jsx)("title",{children:"ADM - Cadastro de clientes"})}),(0,l.jsxs)("main",{className:r().body,children:[(0,l.jsx)("h1",{className:"".concat(r().h1),children:"Cadastro de Cliente"}),(0,l.jsx)("div",{className:"".concat(r().conteudo," row py-5 container"),children:(0,l.jsx)("div",{className:"col-sm-12",children:(0,l.jsx)("div",{className:"card",children:(0,l.jsxs)("form",{method:"post",action:"/adm",children:[(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsxs)("fieldset",{children:[(0,l.jsx)("legend",{children:"Dados Pessoais"}),(0,l.jsxs)("div",{className:"row my-2",children:[(0,l.jsx)("div",{className:"col-md-6 col-sm-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"nome",children:"Nome"}),(0,l.jsx)("input",{id:"nome",type:"text",className:"form-control",placeholder:"Nome do cliente",required:"true",name:"nome",value:e.nome,onChange:o})]})}),(0,l.jsx)("div",{className:"col-md-6 col-sm-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"inputCpf",children:"CPF"}),(0,l.jsx)("input",{type:"text",className:"form-control",placeholder:"999.999.999-99",id:"inputCpf",name:"cpf",minLength:14,maxLength:14,required:!0,value:e.cpf,onKeyUp:d,onChange:e=>{o(e),d(e)}})]})})]}),(0,l.jsx)("p",{children:"Sexo: "}),(0,l.jsxs)("div",{className:"col-sm-12 d-flex ",children:[(0,l.jsxs)("div",{className:"form-check px-3",children:[(0,l.jsx)("input",{className:"form-check-input",type:"radio",name:"sexo",id:"gridRadios1",value:"Masculino",required:"true",checked:"Masculino"===e.sexo,onChange:o}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"gridRadios1",children:"Masculino"})]}),(0,l.jsxs)("div",{className:"form-check px-3",children:[(0,l.jsx)("input",{className:"form-check-input",type:"radio",name:"sexo",id:"gridRadios2",value:"Feminino",required:"true",checked:"Feminino"===e.sexo,onChange:o}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"gridRadios2",children:"Feminino"})]}),(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)("input",{className:"form-check-input",type:"radio",name:"sexo",id:"gridRadios3",value:"Outro",required:"true",checked:"Outro"===e.sexo,onChange:o}),(0,l.jsx)("label",{className:"form-check-label",htmlFor:"gridRadios3",children:"Outro"})]})]}),(0,l.jsxs)("div",{className:"row my-2",children:[(0,l.jsx)("div",{className:"col-md-6 col-sm-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"telefone",children:"Telefone"}),(0,l.jsx)("input",{type:"text",className:"form-control",placeholder:"(11) 99999-9999",id:"inputTel",onKeyUp:e=>{let a=e.target;a.value=h(a.value)},minLength:14,maxLength:15,required:!0,name:"telefone",value:e.telefone,onChange:o})]})}),(0,l.jsx)("div",{className:"col-md-6 col-sm-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"email",children:"E-mail"}),(0,l.jsx)("input",{type:"email",className:"form-control",placeholder:"email@exemplo.com",required:"true",name:"email",value:e.email,onChange:o})]})})]}),(0,l.jsxs)("div",{className:"row my-2",children:[(0,l.jsx)("div",{className:"col-md-6 col-sm-12",children:(0,l.jsxs)("div",{className:"form-group",children:[(0,l.jsx)("label",{htmlFor:"dataNascimento",children:"Data de Nascimento"}),(0,l.jsx)("input",{type:"date",className:"form-control",required:"true",name:"dataNascimento",value:e.dataNascimento,onChange:o})]})}),(0,l.jsxs)("div",{className:"col-md-6 col-sm-12",children:[(0,l.jsxs)("div",{className:"form-group ",children:[(0,l.jsx)("label",{htmlFor:"senha",children:"Senha"}),(0,l.jsx)("input",{type:"password",className:"form-control",id:"inputSenha",required:"true",name:"senha",value:e.senha,onChange:o})]}),(0,l.jsxs)("div",{className:"col-md-6",children:[(0,l.jsx)("input",{className:"col-1 form-check-input",type:"checkbox",id:"verSenha",placeholder:"Digite a senha",onClick:function(){var e=document.querySelector("#inputSenha");"password"===e.type?e.type="text":e.type="password"}}),(0,l.jsx)("label",{className:"col form-check-label",htmlFor:"verSenha",children:"Mostrar senha"})]})]})]})]}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-sm-12"})})]}),(0,l.jsx)("div",{className:"mx-3 py-2",children:(0,l.jsx)("button",{onClick:()=>{n.Z.post("https://localhost:7240/api/Clientes",e).then(e=>{s.push("/adm")}).catch(e=>{alert("Erro ao inserir cliente:"+e)})},type:"submit",className:"btn btn-primary",children:"Salvar"})})]})})})})]})]})}},4999:function(e){e.exports={actions:"Cliente_actions__VYZc3",h1:"Cliente_h1__xLJxc",body:"Cliente_body__Ga3L7",tabela:"Cliente_tabela__GQ2pJ",conteudo:"Cliente_conteudo__2uib2"}}},function(e){e.O(0,[121,774,888,179],function(){return e(e.s=4119)}),_N_E=e.O()}]);