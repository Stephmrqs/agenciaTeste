(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{8017:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/adm/reserva",function(){return a(3525)}])},3525:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var s=a(5893),n=a(7294),r=a(5121),c=a(1664),d=a.n(c),i=a(4999),l=a.n(i),o=a(9008),h=a.n(o),x=a(3500),u=a(6424);function j(){let[e,t]=(0,n.useState)([]);(0,n.useEffect)(()=>{r.Z.get("https://localhost:7240/api/Reservas").then(e=>{t(e.data),console.log(e.data)}).catch(e=>{console.error("Erro ao buscar a lista de reservas:",e)})},[]);let a=e=>{window.confirm("Tem certeza que deseja excluir esta reserva n\xba "+e+"?")&&r.Z.delete("https://localhost:7240/api/Reservas/".concat(e)).then(()=>{r.Z.get("https://localhost:7240/api/Reservas").then(e=>{t(e.data),router.push("/adm")}).catch(e=>{console.error("Erro ao buscar a lista de reservas:",e)})}).catch(e=>{alert("Erro ao excluir reserva: "+e)})};return(0,s.jsxs)("div",{className:l().body,children:[(0,s.jsx)(h(),{children:(0,s.jsx)("title",{children:"ADM - Reservas"})}),(0,s.jsx)("h1",{className:l().h1,children:"Lista de Reservas"}),(0,s.jsx)("div",{className:"".concat(l().conteudo," container table-hover table-responsive"),children:(0,s.jsxs)("table",{className:"mx-3 m-auto table table-striped text-nowrap",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"".concat(l().tabela," text-center"),children:[(0,s.jsx)("th",{children:"Id"}),(0,s.jsx)("th",{children:"Data da Reserva"}),(0,s.jsx)("th",{children:"ID do Cliente"}),(0,s.jsx)("th",{children:"ID da Viagem"}),(0,s.jsx)("th",{children:"ID do Pagamento"}),(0,s.jsx)("th",{children:"A\xe7\xf5es"})]})}),e.map(e=>(0,s.jsx)("tbody",{className:"text-nowrap text-center",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.id}),(0,s.jsx)("td",{children:(0,x.WU)(e.dataReserva,"dd 'de' MMMM 'de' yyyy",{locale:u.F})}),(0,s.jsx)("td",{children:e.clienteId}),(0,s.jsx)("td",{children:e.viagemId}),(0,s.jsx)("td",{children:e.pagamentoId}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(d(),{href:"/adm/update-reserva/".concat(e.id),className:"btn btn-warning",children:[" ",(0,s.jsx)("i",{class:"bi bi-pencil-square"})]}),(0,s.jsx)(d(),{href:"/adm/reserva",className:"btn btn btn-danger",onClick:()=>a(e.id),children:(0,s.jsx)("i",{class:"bi bi-trash"})})]})]})},e.id))]})})]})}},4999:function(e){e.exports={actions:"Cliente_actions__VYZc3",h1:"Cliente_h1__xLJxc",body:"Cliente_body__Ga3L7",tabela:"Cliente_tabela__GQ2pJ",conteudo:"Cliente_conteudo__2uib2"}}},function(e){e.O(0,[121,163,774,888,179],function(){return e(e.s=8017)}),_N_E=e.O()}]);