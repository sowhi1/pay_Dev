import{r as s,I as L,_ as M,u as O,j as e,S as V,ak as S,aX as F,ai as C,d7 as K,al as G,dK as H,B as m,dN as q,a7 as U,U as X,hk as Y,x as Z,s as y,hl as J,b5 as Q,T as c,b1 as ee,aj as te,b0 as ne,aq as oe,K as ie,R as _,aZ as I,ba as se}from"./index-PLddp1k3.js";import{D as re}from"./DataTable-BknUMN0e.js";import{R as N}from"./FileProtectOutlined-DEi-irY_.js";import{T as ae}from"./index-DRwsD63U.js";import{A as ce}from"./index-BD_F5ZFL.js";import{R as T}from"./SafetyCertificateOutlined-CA0Gob8I.js";import{R as le}from"./FileSearchOutlined-ciPX4OD5.js";import{R}from"./SyncOutlined-CAxeazOJ.js";import"./EditOutlined-Uzmnr2bi.js";import"./toList-CER2sblB.js";var de={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"warning",theme:"filled"},fe=function(r,o){return s.createElement(L,M({},r,{ref:o,icon:de}))},ue=s.forwardRef(fe);const{Title:he,Text:A,Paragraph:ge}=ae,P="#1d4ed8",D="#0f172a",W="#15803d",E="#d97706",pe=({onSuccess:n,leave_id:r,policy_name:o,is_modified:l})=>{const[x,g]=s.useState(!1),[p,f]=s.useState(!1),[u,k]=s.useState(!1),{ipAddress:b,browserInfo:h}=O(),w=async()=>{try{f(!0),g(!0);const a={status:!0,accept_modification:!!l,date_accepted:new Date().toISOString(),date_accepted_modification:l?new Date().toISOString():null},d={process_id:"Acknowledge Policy "+o,user_id:X,company:U,change_id:r,current_changes:a,browser:`${h.name} - Version ${h.version} - Language ${h.language} - Platform - ${h.platform}`,ip_address:b};await Y(r,a),await Z(d),y.success("Policy acknowledged successfully"),n()}catch(a){a.errorFields?y.error("Please complete required fields"):(y.error("Error accepting policy"),console.error(a))}finally{f(!1),g(!1)}};return e.jsx(V,{spinning:x,tip:"Acknowledging Policy...",children:e.jsxs(S,{bordered:!1,style:{borderRadius:16,overflow:"hidden",boxShadow:"0 8px 28px rgba(15,23,42,0.06)"},bodyStyle:{padding:0},children:[e.jsxs("div",{style:{background:`linear-gradient(135deg, ${D}, ${P})`,color:"#fff",padding:"22px 24px",display:"flex",alignItems:"center",gap:14},children:[e.jsx(F,{size:52,icon:e.jsx(N,{}),style:{background:"rgba(255,255,255,0.15)",color:"#fff"}}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx(he,{level:4,style:{color:"#fff",margin:0},children:o||"Company Policy"}),e.jsx(A,{style:{color:"rgba(255,255,255,0.78)",fontSize:13},children:"Please review the policy document before acknowledging."})]})]}),e.jsxs("div",{style:{padding:24},children:[l&&e.jsx(ce,{type:"warning",showIcon:!0,icon:e.jsx(ue,{style:{color:E}}),message:e.jsx("span",{style:{fontWeight:700},children:"Policy has been modified"}),description:"This policy was recently updated. Please re-read the latest version of the policy document before acknowledging.",style:{borderRadius:10,marginBottom:16}}),e.jsx(S,{size:"small",style:{borderRadius:12,background:"#f8fafc",border:"1px solid #e2e8f0",marginBottom:16},children:e.jsxs(C,{align:"start",size:12,children:[e.jsx(T,{style:{fontSize:22,color:P,marginTop:2}}),e.jsx(ge,{style:{marginBottom:0,color:"#334155"},children:"By acknowledging this policy, you confirm that you have read, understood, and agree to comply with the content of the policy document."})]})}),e.jsx("div",{style:{border:"1px solid #e2e8f0",borderRadius:12,padding:"14px 16px",background:"#fff",marginBottom:16},children:e.jsx(K,{checked:u,onChange:a=>k(a.target.checked),children:e.jsxs("span",{style:{fontWeight:600,color:D},children:["I have read and understood the ",o||"policy"," document",l?" (latest version)":"","."]})})}),e.jsx(G,{style:{margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:12},children:[e.jsxs(C,{size:6,children:[e.jsx(H,{style:{color:E}}),e.jsx(A,{type:"secondary",style:{fontSize:12},children:"Acknowledgement is binding and cannot be undone."})]}),e.jsx(m,{type:"primary",size:"large",icon:e.jsx(q,{}),loading:p,disabled:!u,onClick:w,style:{background:u?W:void 0,borderColor:u?W:void 0,fontWeight:700,borderRadius:10,minWidth:200},children:p?"Acknowledging…":"I Acknowledge"})]})]})]})})},$="#0f172a",z="#1d4ed8",j="#15803d",me="#d97706",ye="#dc2626",xe=n=>e.jsx("div",{style:{whiteSpace:"normal",wordWrap:"break-word",lineHeight:"1.25em",marginTop:"0.7em",maxHeight:"2.5em",overflow:"hidden",fontSize:12},children:n||"N/A"}),be=n=>{const r=n.is_modified&&!n.accept_modification;return n.status&&!r?e.jsx(c,{icon:e.jsx(_,{}),color:"success",style:{fontWeight:600},children:"Accepted"}):r?e.jsx(c,{icon:e.jsx(R,{spin:!0}),color:"warning",style:{fontWeight:600},children:"Modified"}):e.jsx(c,{icon:e.jsx(R,{spin:!0}),color:"processing",style:{fontWeight:600},children:"Awaiting Acceptance"})},we=n=>{if(!n.description){y.warning("No policy document is attached to this record.");return}const r=window.open("",n.policy_name,"width=900,height=900");if(!r){y.warning("Please allow pop-ups to view this policy document.");return}r.document.write(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>${n.policy_name}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body {
          width: 100%;
          height: 100%;
          overflow: auto;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        iframe {
          display: block;
          width: 100vw;
          height: 100vh;
          border: none;
        }
        .blocker {
          position: fixed;
          top: 0;
          left: 0;
          width: calc(100% - 20px);
          height: 100%;
          background: transparent;
          z-index: 9999;
          cursor: not-allowed;
        }
      </style>
    </head>
    <body>
      <div class="blocker" id="contentBlocker"></div>
      <iframe
        src="${n.description}#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
        width="100%"
        height="100%">
      </iframe>
      <script>
        const blocker = document.getElementById('contentBlocker');

        function blockContentInteractions(e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

        blocker.addEventListener('contextmenu', blockContentInteractions);
        blocker.addEventListener('mousedown', blockContentInteractions);
        blocker.addEventListener('mouseup', blockContentInteractions);
        blocker.addEventListener('click', blockContentInteractions);
        blocker.addEventListener('dblclick', blockContentInteractions);

        function isScrollbarClick(e) {
          const scrollbarWidth = 20;
          return e.clientX > window.innerWidth - scrollbarWidth;
        }

        document.addEventListener('mousedown', function(e) {
          if (isScrollbarClick(e)) return true;
          e.preventDefault();
          return false;
        });

        document.addEventListener('mouseup', function(e) {
          if (isScrollbarClick(e)) return true;
          e.preventDefault();
          return false;
        });

        document.addEventListener('wheel', function() {}, { passive: true });
        document.addEventListener('touchmove', function() {}, { passive: true });

        document.addEventListener('copy', function(e) {
          e.preventDefault();
          return false;
        });
        document.addEventListener('cut', function(e) {
          e.preventDefault();
          return false;
        });
        document.addEventListener('paste', function(e) {
          e.preventDefault();
          return false;
        });

        document.addEventListener('keydown', function(e) {
          if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            alert('Printing, downloading and copying is disabled for this document.');
            return false;
          }

          if (e.ctrlKey || e.metaKey) {
            if (
              e.key === 'c' || e.key === 'C' ||
              e.key === 'x' || e.key === 'X' ||
              e.key === 'v' || e.key === 'V' ||
              e.key === 'a' || e.key === 'A' ||
              e.key === 's' || e.key === 'S'
            ) {
              e.preventDefault();
              alert('This action is disabled.');
              return false;
            }
          }

          if (e.key === 'F12') {
            e.preventDefault();
            return false;
          }

          return true;
        });

        window.print = function() {
          alert('Printing is disabled.');
          return false;
        };

        window.getSelection().removeAllRanges();
      <\/script>
    </body>
  </html>
`)},De=()=>{const[n,r]=s.useState([]),[o,l]=s.useState(null),[x,g]=s.useState(!1),[p,f]=s.useState(!1),u=t=>{l(t),we(t)},k=t=>{l(t),f(!0)},b=()=>{f(!1),l(null)},h=[{field:"id",headerName:"#",width:50},{field:"category",headerName:"Category",width:115,renderCell:t=>e.jsx(c,{color:t.value==="SOP"?"geekblue":"blue",style:{fontWeight:600},children:t.value})},{field:"policy_name",headerName:"Policy/SOP",width:240,renderCell:t=>xe(t.value)},{field:"policy_number",headerName:"Document No.",width:140},{field:"department_name",headerName:"Department",width:190},{field:"date_published",headerName:"Published",width:130},{field:"status",headerName:"Status",width:190,headerAlign:"center",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:be(t.row)})},{field:"actions",headerName:"Actions",width:275,sortable:!1,renderCell:t=>{const v=!t.row.status||t.row.is_modified&&!t.row.accept_modification;return e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:8},children:[e.jsx(I,{title:"View document",children:e.jsx(m,{type:"primary",size:"small",icon:e.jsx(se,{}),onClick:()=>u(t.row),style:{background:z,border:"none",borderRadius:6,fontWeight:600},children:"Document"},"view")}),v&&e.jsx(I,{title:"Acknowledge policy",children:e.jsx(m,{type:"primary",size:"small",icon:e.jsx(_,{}),onClick:()=>k(t.row),style:{background:j,border:"none",borderRadius:6,fontWeight:600},children:"Acknowledge"},"modify")})]})}}],w=s.useCallback(async()=>{try{const t=await J();if(t.results&&Array.isArray(t.results)){const v=t.results.map((i,B)=>({id:B+1,no:i.id,category:i.is_sop?"SOP":"Policy",policy_name:i.policy_name,policy_number:i.policy_number,department_name:i.department_name,status:i.status,accept_modification:i.accept_modification,is_modified:i.is_modified,assigned_by:i.assigned_by,description:i.description,date:i.date,date_published:i.date_published?Q(i.date_published):"N/A",status_date:i.status_date||"N/A"}));r(v)}else console.log("Invalid response structure")}catch(t){console.log(t)}},[]),a=s.useCallback(async()=>{g(!0);try{await w()}catch(t){console.log(t)}finally{g(!1)}},[w]);s.useEffect(()=>{a()},[a]);const d=s.useMemo(()=>({total:n.length,accepted:n.filter(t=>t.status&&!(t.is_modified&&!t.accept_modification)).length,pending:n.filter(t=>!t.status).length,modified:n.filter(t=>t.is_modified&&!t.accept_modification).length,sop:n.filter(t=>t.category==="SOP").length}),[n]);return e.jsxs("div",{style:{padding:24,background:"#f8fafc",minHeight:"100vh"},children:[e.jsxs("div",{style:{background:`linear-gradient(135deg,${$},${z})`,borderRadius:16,padding:"22px 28px",marginBottom:24,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:20,fontWeight:800,color:"#fff",marginBottom:4},children:"Company Policy/SOP"}),e.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,0.75)"},children:"Read assigned policy documents and acknowledge compliance requirements."})]}),e.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"},children:[e.jsxs(c,{color:"blue",style:{fontWeight:700,fontSize:12},children:["TOTAL ",d.total]}),e.jsxs(c,{color:"green",style:{fontWeight:700,fontSize:12},children:["ACCEPTED ",d.accepted]}),e.jsxs(c,{color:"orange",style:{fontWeight:700,fontSize:12},children:["PENDING ",d.pending]}),e.jsx(ee,{count:`${d.modified} MODIFIED`,style:{background:me,fontWeight:700}}),e.jsx(m,{icon:e.jsx(te,{}),onClick:a,loading:x,ghost:!0,style:{borderColor:"rgba(255,255,255,0.4)",color:"#fff"}})]})]}),e.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",marginBottom:18},children:[e.jsx(c,{icon:e.jsx(N,{}),color:"processing",style:{fontWeight:600},children:"Assigned documents"}),e.jsx(c,{icon:e.jsx(T,{}),color:j,children:"Acknowledgement tracked"}),e.jsxs(c,{icon:e.jsx(ne,{}),color:"geekblue",children:[d.sop," SOP records"]}),e.jsx(c,{icon:e.jsx(le,{}),color:ye,children:"Review before accepting"})]}),e.jsx(S,{style:{borderRadius:14,border:"1px solid #e2e8f0",boxShadow:"0 2px 12px rgba(0,0,0,0.04)"},styles:{body:{padding:12}},children:x?e.jsx(oe,{active:!0,paragraph:{rows:10}}):e.jsx(re,{rows:n,columns:h})}),e.jsx(ie,{title:e.jsxs("span",{style:{fontWeight:700,color:$},children:[e.jsx(_,{style:{color:j,marginRight:8}}),"Acknowledge ",o==null?void 0:o.policy_name]}),open:p,onCancel:b,width:480,footer:[e.jsx(m,{onClick:b,children:"Close"},"back")],children:o&&e.jsx(pe,{onSuccess:()=>{a(),f(!1),l(null)},isModalOpen:p,leave_id:o==null?void 0:o.no,is_modified:o==null?void 0:o.is_modified,policy_name:o==null?void 0:o.policy_name})})]})};export{De as default};
