import{r as l,F as u,u as ae,j as e,al as ue,b as W,C as m,bj as V,c as Q,S as H,bU as ve,bf as K,iU as pe,bg as fe,a_ as he,ai as me,bn as ge,B as D,aR as we,c2 as Se,c0 as Ce,b$ as be,bZ as je,c3 as ke,c4 as _e,c7 as Le,s as f,iV as ye,U as J,a7 as X,iW as De,x as re,iX as Pe,b5 as Ae,T,b1 as Ie,aj as Oe,b0 as Ne,ak as Be,aq as Te,K as ie,ba as Re,aZ as oe,b8 as Fe,R as Ee,iY as We}from"./index-PLddp1k3.js";import{D as Ue}from"./DataTable-BknUMN0e.js";import{R as Me}from"./index-Ca-rmgGT.js";import{R as $e}from"./FileAddOutlined-CirZ8Cqz.js";import{R as ze}from"./FileProtectOutlined-DEi-irY_.js";import{R as qe}from"./EditOutlined-Uzmnr2bi.js";import{R as Ve}from"./SyncOutlined-CAxeazOJ.js";const{Dragger:Ke}=K,{Option:Y}=V,Ge={padding:20,width:200,borderRadius:4},se=[{value:"",label:"Select Disburment Type",disabled:!0},{value:"Individual",label:"Individual"},{value:"All Staff",label:"All Staff"},{value:"Pay Group",label:"Pay Group"},{value:"JOb Title",label:"Job Title"},{value:"Division",label:"First Level"},{value:"Department",label:"Second Level"},{value:"Unit",label:"Third Level"},{value:"Branch",label:"Fourth Level"},{value:"Salary Grade",label:"Salary Grade"}],ce=e.jsx("div",{style:Ge}),Ye=({onSuccess:c})=>{const[_,r]=l.useState(!1),[S,C]=l.useState(!1),[d]=u.useForm(),[R,P]=l.useState(null),[U,b]=l.useState(0),[p,y]=l.useState(!1),[g,j]=l.useState(null),[F,A]=l.useState(!1),[h,I]=l.useState(se[0]),[k,x]=l.useState(!1),[O,M]=l.useState(!1),[E,v]=l.useState([]),[$,G]=l.useState(""),[z,w]=l.useState(!1),{ipAddress:N,browserInfo:t}=ae(),q=n=>{if(n.type!=="application/pdf")return f.error("You can only upload PDF files!"),K.LIST_IGNORE;if(n.size>5*1024*1024)return f.error("File must be smaller than 5MB!"),K.LIST_IGNORE;y(!0),b(0),j(n);const s=new FileReader;return s.readAsDataURL(n),s.onprogress=i=>{if(i.lengthComputable){const a=Math.round(i.loaded/i.total*100);b(a)}},s.onload=()=>{P(s.result),b(100),setTimeout(()=>{y(!1)},500)},s.onerror=i=>{console.error("Error: ",i),f.error("File conversion failed. Please try again."),y(!1),j(null)},!1};l.useEffect(()=>{},[R]),l.useEffect(()=>{(async()=>{try{A(!0),x(!0);const s=h.value;if(s==="Individual"){const a=(await we({status:"ACTIVE"})).results.filter(L=>L.status==="ACTIVE");v(a.map(L=>({value:L.id,label:`${L.code} - ${L.fullname}`})))}else if(s==="Pay Group"){const i=await Se();v(i.results.map(a=>({value:a.id,label:`${a.description}`})))}else if(s==="JOb Title"){const i=await Ce();v(i.results.map(a=>({value:a.id,label:`${a.code} - ${a.description}`})))}else if(s==="Department"){const i=await be();v(i.results.map(a=>({value:a.id,label:a.name})))}else if(s==="Division"){const i=await je();v(i.results.map(a=>({value:a.id,label:a.name})))}else if(s==="Unit"){const i=await ke();v(i.results.map(a=>({value:a.id,label:a.department_name+" - "+a.name})))}else if(s==="Branch"){const i=await _e();v(i.results.map(a=>({value:a.id,label:a.unit_name+" - "+a.name})))}else if(s==="Salary Grade"){const i=await Le();v(i.results.map(a=>({value:a.id,label:a.payroll_structure_name+" - "+a.code})))}}catch(s){console.log(s)}finally{A(!1),x(!1)}})()},[h]);const o=n=>{I(se.find(s=>s.value===n)),G(null),M(n==="All Staff")},B=n=>{G(E.find(s=>s.value===n))},ee=(n,s)=>((s==null?void 0:s.label)??"").toLowerCase().includes(n.toLowerCase()),te=n=>{d.setFieldsValue({is_published:n}),w(n)},Z=async()=>{try{const n=await d.validateFields();if(C(!0),r(!0),(await ye({policy_no:n.policy_no.toUpperCase()})).results.length>0){f.error("Policy with this Policy No. already exists."),C(!1),r(!1);return}const i={department:n.department,name:n.name,policy_no:n.policy_no.toUpperCase(),disbursement_type:n.disburse_by,global_id:h.value==="All Staff"?X:n.global_id,is_sop:n.policy_type==="SOP",is_published:n.is_published||!1,date_published:n.is_published?new Date().toISOString().split("T")[0]:null,description:R,company:X,user_id:J},L={process_id:n.policy_type==="SOP"?"Add SOP":"Add Policy",user_id:J,company:X,current_changes:i,browser:t.name+" - Version "+t.version+" - Language "+t.language+" - Platform - "+t.platform,ip_address:N};await De(i),await re(L),f.success("Document added successfully"),c(),d.resetFields(),P(null),b(0),y(!1),j(null),w(!1)}catch(n){n.errorFields?f.error("Please complete required fields"):(f.error("Error submitting  request"),console.error(n))}finally{C(!1),r(!1)}};return e.jsxs("div",{children:[e.jsx(ue,{orientation:"left"}),e.jsxs(u,{layout:"vertical",autoComplete:"off",form:d,children:[e.jsxs(W,{gutter:{xs:8,sm:16,md:24,lg:32},children:[e.jsx(m,{className:"gutter-row",span:6,children:e.jsx(u.Item,{name:"policy_type",label:"Category",rules:[{required:!0,message:"Field is required"}],children:e.jsxs(V,{placeholder:"Select",children:[e.jsx(Y,{value:"SOP",children:"SOP"}),e.jsx(Y,{value:"COP",children:"Policy"})]})})}),e.jsx(m,{className:"gutter-row",span:10,children:e.jsx(u.Item,{name:"name",label:"Description",rules:[{required:!0,message:"Field is required"}],children:e.jsx(Q.TextArea,{showCount:!0})})}),e.jsx(m,{className:"gutter-row",span:8,children:e.jsx(u.Item,{name:"policy_no",label:"Document No.",rules:[{required:!0,message:"Field is required"}],children:e.jsx(Q,{})})})]}),e.jsxs(W,{gutter:{xs:8,sm:16,md:24,lg:32},children:[e.jsx(m,{className:"gutter-row",span:12,children:e.jsx(u.Item,{name:"disburse_by",label:"Beneficiary Group",rules:[{required:!0,message:"Field is required!"}],children:e.jsx(V,{placeholder:"select disbursement type",onChange:n=>{o(n),d.setFieldsValue({disburse_by:n})},children:se.map(n=>e.jsx(Y,{value:n.value,disabled:n.disabled,children:n.label},n.value))})})}),e.jsx(m,{className:"gutter-row",span:12,children:e.jsxs(u.Item,{name:"global_id",label:"Beneficiary",rules:[{required:(h==null?void 0:h.value)!=="All Staff",message:"Field is required!"}],children:[e.jsx(H,{spinning:k,children:e.jsxs(V,{placeholder:F?"Loading beneficiary...":"Select Beneficiary",loading:F,showSearch:!0,filterOption:ee,onChange:n=>{B(n),d.setFieldsValue({global_id:n})},disabled:O,children:[E.length===0&&e.jsx(Y,{value:"",children:"No disbursement Type Selected"}),E.map(n=>e.jsx(Y,{value:n.value,label:n.label,children:n.label},n.value))]})}),k&&e.jsx(ve,{align:"left",children:e.jsx(H,{spinning:k,tip:"Loading beneficiary...",size:"small",children:ce})})]})})]}),e.jsxs(W,{gutter:{xs:8,sm:16,md:24,lg:32},children:[e.jsx(m,{className:"gutter-row",span:12,children:e.jsxs(u.Item,{name:"description",label:"Document",rules:[{required:!0,message:"Attach document"}],children:[e.jsx(Ke,{name:"file",multiple:!1,accept:".pdf",beforeUpload:q,onRemove:()=>{j(null),b(0),y(!1)},fileList:g?[{uid:g.uid,name:g.name,status:"done"}]:[],style:{padding:"20px"},children:g?e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(pe,{style:{fontSize:"32px",color:"#52c41a"}}),e.jsx("p",{style:{marginTop:"10px",fontWeight:500},children:g.name})]}):e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(fe,{style:{fontSize:"32px",color:"#1890ff"}}),e.jsx("p",{className:"ant-upload-text",style:{marginTop:"10px"},children:"Add Policy Document (PDF, max 5MB)"}),e.jsx("p",{className:"ant-upload-hint",children:"PDF only. Max 1 file."})]})}),p&&e.jsx(he,{percent:U,size:"small",status:U===100?"success":"active",style:{marginTop:"10px"}})]})}),e.jsx(m,{className:"gutter-row",span:8,children:e.jsx(u.Item,{name:"is_published",label:"Publish",children:e.jsx(me,{direction:"vertical",children:e.jsx(ge,{checkedChildren:"Yes",unCheckedChildren:"No",checked:z,onChange:te})})})})]}),e.jsxs(W,{gutter:{xs:8,sm:16,md:24,lg:32},style:{position:"absolute",bottom:10,right:90,padding:"10px"},children:[e.jsx(m,{className:"gutter-row",span:24,children:e.jsx(D,{type:"primary",loading:S,onClick:Z,children:S?"Save...":"Save "},"patch")}),e.jsx(H,{spinning:_,tip:"Saving...",size:"large",fullscreen:!0,children:ce})]})]})]})},{Dragger:He}=K,{Option:de}=V,Xe={padding:20,width:200,borderRadius:4},Je=e.jsx("div",{style:Xe}),Ze=({onSuccess:c,description:_,name:r,policy_no:S,department:C,is_published:d,is_sop:R,leave_id:P})=>{const[U,b]=l.useState(!1),[p,y]=l.useState(!1),[g]=u.useForm(),[j,F]=l.useState(null),[A,h]=l.useState(0),[I,k]=l.useState(!1),[x,O]=l.useState(null),[M,E]=l.useState(!1),[v,$]=l.useState(!0),[G,z]=l.useState(null),[w,N]=l.useState([]),[t,q]=l.useState(!1),{ipAddress:o,browserInfo:B}=ae(),ee=async()=>{try{const i=(await be()).results;N(i.map(a=>({value:a.id,label:a.name}))),E(!0)}catch(s){console.log(s)}};l.useEffect(()=>{$(!0),ee().finally(()=>$(!1))},[]),l.useEffect(()=>{if(M){g.setFieldsValue({description:_,name:r,policy_no:S,department:C,is_published:d,policy_type:R?"SOP":"COP"});const s=w.find(i=>i.value===C);s&&z(s),Z(d===!0)}},[g,_,r,S,C,d,w,M]);const te=s=>{if(s.type!=="application/pdf")return f.error("You can only upload PDF files!"),K.LIST_IGNORE;if(s.size>5*1024*1024)return f.error("File must be smaller than 5MB!"),K.LIST_IGNORE;k(!0),h(0),O(s);const i=new FileReader;return i.readAsDataURL(s),i.onprogress=a=>{if(a.lengthComputable){const L=Math.round(a.loaded/a.total*100);h(L)}},i.onload=()=>{F(i.result),h(100),setTimeout(()=>{k(!1)},500)},i.onerror=a=>{console.error("Error: ",a),f.error("File conversion failed. Please try again."),k(!1),O(null)},!1};l.useEffect(()=>{},[j]);const Z=s=>{g.setFieldsValue({is_published:s}),q(s)},n=async()=>{try{const s=await g.validateFields();y(!0),b(!0);const i={name:s.name,policy_no:s.policy_no,is_sop:s.policy_type==="SOP",is_published:s.is_published||!1,date_modified:new Date().toISOString().split("T")[0],date_published:s.is_published?new Date().toISOString():null,description:j||_,is_modified:!0,modified_id:J},a={name:r,policy_no:S,is_published:d,description:_},xe={process_id:(s.policy_type==="SOP"?"Modify SOP":"Modify Policy")+" - "+r,user_id:J,company:X,previous_changes:a,current_changes:i,browser:B.name+" - Version "+B.version+" - Language "+B.language+" - Platform - "+B.platform,ip_address:o};await Pe(P,i),await re(xe),f.success("Document updated successfully"),c(),F(null),h(0),k(!1),O(null)}catch(s){s.errorFields?f.error("Please complete required fields"):(f.error("Error updating documnet"),console.error(s))}finally{y(!1),b(!1)}};return e.jsxs("div",{children:[e.jsx(ue,{orientation:"left"}),v?e.jsx(H,{tip:"Loading data...",children:e.jsx("div",{style:{height:"200px"}})}):e.jsxs(u,{layout:"vertical",autoComplete:"off",form:g,children:[e.jsxs(W,{gutter:{xs:8,sm:16,md:24,lg:32},children:[e.jsx(m,{className:"gutter-row",span:6,children:e.jsx(u.Item,{name:"policy_type",label:"Category",rules:[{required:!0,message:"Field is required"}],children:e.jsxs(V,{placeholder:"Select",children:[e.jsx(de,{value:"SOP",children:"SOP"}),e.jsx(de,{value:"COP",children:"Company Policy"})]})})}),e.jsx(m,{className:"gutter-row",span:10,children:e.jsx(u.Item,{name:"name",label:"Description",rules:[{required:!0,message:"Field is required"}],children:e.jsx(Q.TextArea,{showCount:!0})})}),e.jsx(m,{className:"gutter-row",span:8,children:e.jsx(u.Item,{name:"policy_no",label:"Document No.",rules:[{required:!0,message:"Field is required"}],children:e.jsx(Q,{})})})]}),e.jsxs(W,{gutter:{xs:8,sm:16,md:24,lg:32},children:[e.jsx(m,{className:"gutter-row",span:12,children:e.jsxs(u.Item,{name:"description",label:" Document",children:[e.jsx(He,{name:"file",multiple:!1,accept:".pdf",beforeUpload:te,onRemove:()=>{O(null),h(0),k(!1)},fileList:x?[{uid:x.uid,name:x.name,status:"done"}]:[],style:{padding:"20px",marginBottom:"10px"},children:x?e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(pe,{style:{fontSize:"32px",color:"#52c41a"}}),e.jsx("p",{style:{marginTop:"10px",fontWeight:500},children:x.name})]}):e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(fe,{style:{fontSize:"32px",color:"#1890ff"}}),e.jsx("p",{className:"ant-upload-text",style:{marginTop:"10px"},children:"Add Policy Document (PDF, max 5MB)"}),e.jsx("p",{className:"ant-upload-hint",children:"PDF only. Max 1 file."})]})}),I&&e.jsx(he,{percent:A,size:"small",status:A===100?"success":"active",style:{marginTop:"10px"}}),_!==null&&e.jsx("a",{href:"#",onClick:s=>{s.preventDefault(),window.open("",r,"width=900,height=900").document.write(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>${r}</title>
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
        /* Overlay that blocks content but NOT scrollbar */
        .blocker {
          position: fixed;
          top: 0;
          left: 0;
          width: calc(100% - 20px); /* Leave space for scrollbar */
          height: 100%;
          background: transparent;
          z-index: 9999;
          cursor: not-allowed;
        }
      </style>
    </head>
    <body>
      <!-- Overlay blocks content area only -->
      <div class="blocker" id="contentBlocker"></div>
      
      <iframe
        src="${_}#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
        width="100%"
        height="100%">
      </iframe>
      <script>
        const blocker = document.getElementById('contentBlocker');
        
        // ===== BLOCK ALL INTERACTIONS ON CONTENT =====
        function blockContentInteractions(e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
        
        // Block everything on the content area
        blocker.addEventListener('contextmenu', blockContentInteractions);
        blocker.addEventListener('mousedown', blockContentInteractions);
        blocker.addEventListener('mouseup', blockContentInteractions);
        blocker.addEventListener('click', blockContentInteractions);
        blocker.addEventListener('dblclick', blockContentInteractions);
        
        // ===== ALLOW SCROLLBAR INTERACTIONS =====
        // Check if click is on scrollbar area (right side)
        function isScrollbarClick(e) {
          const scrollbarWidth = 20; // Approximate scrollbar width
          return e.clientX > window.innerWidth - scrollbarWidth;
        }
        
        // Allow scrollbar interactions on document
        document.addEventListener('mousedown', function(e) {
          if (isScrollbarClick(e)) {
            return true; // Allow scrollbar clicks
          }
          e.preventDefault();
          return false;
        });
        
        document.addEventListener('mouseup', function(e) {
          if (isScrollbarClick(e)) {
            return true; // Allow scrollbar clicks
          }
          e.preventDefault();
          return false;
        });
        
        // ===== ALLOW ALL SCROLLING =====
        // Allow wheel/touchpad scrolling
        document.addEventListener('wheel', function(e) {
          // Allow all wheel events for scrolling
        }, { passive: true });
        
        // Allow touch scrolling
        document.addEventListener('touchmove', function(e) {
          // Allow all touch move events for scrolling
        }, { passive: true });
        
        // ===== BLOCK COPY/PASTE =====
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
        
        // ===== BLOCK KEYBOARD SHORTCUTS =====
        document.addEventListener('keydown', function(e) {
          // BLOCK Ctrl+P / Cmd+P ALWAYS - even without other modifiers
          if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            alert('Printing, downloading and copying is disabled for this document.');
            return false;
          }
          
          // Block Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+A, Ctrl+S
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
          
          // Block F12
          if (e.key === 'F12') {
            e.preventDefault();
            return false;
          }
          
          return true;
        });
        
        // Disable print function
        window.print = function() {
          alert('Printing is disabled.');
          return false;
        };
        
        // Clear any text selection
        window.getSelection().removeAllRanges();
        
        console.log('Security: Content blocked, scrolling & scrollbar enabled, Ctrl+P disabled');
      <\/script>
    </body>
  </html>
`)},children:"View Current Document"})]})}),e.jsx(m,{className:"gutter-row",span:8,children:e.jsx(u.Item,{name:"is_published",label:"Publish",children:e.jsx(me,{direction:"vertical",children:e.jsx(ge,{checkedChildren:"Yes",unCheckedChildren:"No",checked:t,onChange:Z})})})})]}),e.jsxs(W,{gutter:{xs:8,sm:16,md:24,lg:32},style:{position:"absolute",bottom:10,right:90,padding:"10px"},children:[e.jsx(m,{className:"gutter-row",span:24,children:e.jsx(D,{type:"primary",loading:p,onClick:n,children:p?"Modifying ...":"Modify "},"patch")}),e.jsx(H,{spinning:U,tip:"Modifying ...",size:"large",fullscreen:!0,children:Je})]})]})]})},Qe="#0f172a",ne="#1d4ed8",et="#15803d",tt="#d97706",st="#dc2626",le=c=>e.jsx("div",{style:{whiteSpace:"normal",wordWrap:"break-word",lineHeight:"1.25em",marginTop:"0.7em",maxHeight:"2.5em",overflow:"hidden",fontSize:12},children:c||"N/A"}),nt=c=>e.jsx(T,{icon:c?e.jsx(Ee,{}):e.jsx(Ve,{spin:!0}),color:c?"success":"processing",style:{fontWeight:600},children:c?"Published":"Pending"}),ut=()=>{const[c,_]=l.useState([]),[r,S]=l.useState(null),[C,d]=l.useState(!1),[R,P]=l.useState(!1),[U,b]=l.useState(!1),[p,y]=l.useState(null),[g,j]=l.useState(!1),[F,A]=l.useState(!1),{ipAddress:h,browserInfo:I}=ae(),k=()=>{b(!0)},x=()=>{b(!1),j(!1),y(null)},O=t=>{y(t),j(!0)},M=async()=>{A(!0);try{await We(p.no),await w();const t={process_id:"Delete Policy/SOP "+(p==null?void 0:p.policy_name),user_id:J,company:X,browser:I.name+" - Version "+I.version+" - Language "+I.language+" - Platform - "+I.platform,ip_address:h};await re(t),f.success("Successfully Removed"),j(!1)}catch(t){f.error("Error removing data "+JSON.stringify(t.response.data)+" "+t.message)}finally{A(!1),y(null)}},E=t=>{d(!0),S(t),t.description&&window.open("",t.policy_name,"width=900,height=900").document.write(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>${t.policy_name}</title>
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
        /* Overlay that blocks content but NOT scrollbar */
        .blocker {
          position: fixed;
          top: 0;
          left: 0;
          width: calc(100% - 20px); /* Leave space for scrollbar */
          height: 100%;
          background: transparent;
          z-index: 9999;
          cursor: not-allowed;
        }
      </style>
    </head>
    <body>
      <!-- Overlay blocks content area only -->
      <div class="blocker" id="contentBlocker"></div>
      
      <iframe
        src="${t.description}#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
        width="100%"
        height="100%">
      </iframe>
      <script>
        const blocker = document.getElementById('contentBlocker');
        
        // ===== BLOCK ALL INTERACTIONS ON CONTENT =====
        function blockContentInteractions(e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
        
        // Block everything on the content area
        blocker.addEventListener('contextmenu', blockContentInteractions);
        blocker.addEventListener('mousedown', blockContentInteractions);
        blocker.addEventListener('mouseup', blockContentInteractions);
        blocker.addEventListener('click', blockContentInteractions);
        blocker.addEventListener('dblclick', blockContentInteractions);
        
        // ===== ALLOW SCROLLBAR INTERACTIONS =====
        // Check if click is on scrollbar area (right side)
        function isScrollbarClick(e) {
          const scrollbarWidth = 20; // Approximate scrollbar width
          return e.clientX > window.innerWidth - scrollbarWidth;
        }
        
        // Allow scrollbar interactions on document
        document.addEventListener('mousedown', function(e) {
          if (isScrollbarClick(e)) {
            return true; // Allow scrollbar clicks
          }
          e.preventDefault();
          return false;
        });
        
        document.addEventListener('mouseup', function(e) {
          if (isScrollbarClick(e)) {
            return true; // Allow scrollbar clicks
          }
          e.preventDefault();
          return false;
        });
        
        // ===== ALLOW ALL SCROLLING =====
        // Allow wheel/touchpad scrolling
        document.addEventListener('wheel', function(e) {
          // Allow all wheel events for scrolling
        }, { passive: true });
        
        // Allow touch scrolling
        document.addEventListener('touchmove', function(e) {
          // Allow all touch move events for scrolling
        }, { passive: true });
        
        // ===== BLOCK COPY/PASTE =====
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
        
        // ===== BLOCK KEYBOARD SHORTCUTS =====
        document.addEventListener('keydown', function(e) {
          // BLOCK Ctrl+P / Cmd+P ALWAYS - even without other modifiers
          if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            alert('Printing, downloading and copying is disabled for this document.');
            return false;
          }
          
          // Block Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+A, Ctrl+S
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
          
          // Block F12
          if (e.key === 'F12') {
            e.preventDefault();
            return false;
          }
          
          return true;
        });
        
        // Disable print function
        window.print = function() {
          alert('Printing is disabled.');
          return false;
        };
        
        // Clear any text selection
        window.getSelection().removeAllRanges();
        
        console.log('Security: Content blocked, scrolling & scrollbar enabled, Ctrl+P disabled');
      <\/script>
    </body>
  </html>
`),d(!1)},v=t=>{S(t),P(!0)},$=()=>{P(!1),S(null)},G=[{field:"id",headerName:"#",width:60},{field:"category",headerName:"Category",width:115,renderCell:t=>e.jsx(T,{color:t.value==="SOP"?"geekblue":"blue",style:{fontWeight:600},children:t.value})},{field:"policy_name",headerName:"Description",width:240,renderCell:t=>le(t.value)},{field:"policy_number",headerName:"Document No.",width:140},{field:"disbursement_type",headerName:"Beneficiary",width:100,renderCell:t=>le(t.value)},{field:"global_name",headerName:"Beneficiary Name",width:210,renderCell:t=>le(t.value)},{field:"is_published",headerName:"Status",width:145,headerAlign:"center",renderCell:t=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:nt(t.value)})},{field:"date_published",headerName:"Date Published",width:170},{field:"actions",headerName:"Actions",width:275,sortable:!1,renderCell:t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:8},children:[e.jsx(D,{type:"primary",size:"small",icon:e.jsx(Re,{}),onClick:()=>E(t.row),loading:C&&(r==null?void 0:r.no)===t.row.no,style:{background:ne,border:"none",borderRadius:6,fontWeight:600},children:"Document"},"view"),e.jsx(oe,{title:"Modify",children:e.jsx(D,{type:"primary",shape:"circle",icon:e.jsx(qe,{}),onClick:()=>v(t.row),style:{backgroundColor:"#034694"}},"modify")}),!t.row.is_published&&e.jsx(e.Fragment,{children:e.jsx(Fe,{title:"Delete ",description:"Are you sure you want to remove this ? "+(p==null?void 0:p.policy_name),open:g&&(p==null?void 0:p.no)===t.row.no,onConfirm:M,okButtonProps:{loading:F},onCancel:x,children:e.jsx(oe,{title:"Delete",children:e.jsx(D,{type:"primary",shape:"circle",danger:!0,icon:e.jsx(Me,{}),onClick:()=>O(t.row)},"delete")})})})]})}],z=l.useCallback(async()=>{try{const t=await ye();if(t.results&&Array.isArray(t.results)){const q=t.results.map((o,B)=>({id:B+1,no:o.id,category:o.is_sop?"SOP":"Policy",policy_name:o.name,policy_number:o.policy_no,is_sop:o.is_sop,department_name:o.department_name,global_name:o.disburse_by==="All Staff"?o.company_name:o.global_name,disbursement_type:o.disbursement_type,department:o.department,is_published:o.is_published,assigned_by:o.assigned_by,description:o.description,date:o.date,date_published:o.date_published?Ae(o.date_published):"N/A",status_date:o.status_date||"N/A"}));_(q)}else console.log("Invalid response structure")}catch(t){console.log(t)}},[]),w=l.useCallback(async()=>{d(!0);try{await z()}catch(t){console.log(t)}finally{d(!1)}},[z]);l.useEffect(()=>{w()},[w]);const N=l.useMemo(()=>({total:c.length,published:c.filter(t=>t.is_published).length,pending:c.filter(t=>!t.is_published).length,sop:c.filter(t=>t.is_sop).length}),[c]);return e.jsxs("div",{style:{padding:24,background:"#f8fafc",minHeight:"100vh"},children:[e.jsxs("div",{style:{background:`linear-gradient(135deg,${Qe},${ne})`,borderRadius:16,padding:"22px 28px",marginBottom:24,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:20,fontWeight:800,color:"#fff",marginBottom:4},children:"Company Policy/SOP"}),e.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,0.75)"},children:"Manage policy documents, publication status, and assigned beneficiaries."})]}),e.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"},children:[e.jsxs(T,{color:"blue",style:{fontWeight:700,fontSize:12},children:["TOTAL ",N.total]}),e.jsxs(T,{color:"green",style:{fontWeight:700,fontSize:12},children:["PUBLISHED ",N.published]}),e.jsxs(T,{color:"orange",style:{fontWeight:700,fontSize:12},children:["PENDING ",N.pending]}),e.jsx(Ie,{count:`${N.sop} SOP`,style:{background:tt,fontWeight:700}}),e.jsx(D,{icon:e.jsx(Oe,{}),onClick:w,loading:C,ghost:!0,style:{borderColor:"rgba(255,255,255,0.4)",color:"#fff"}}),e.jsx(D,{type:"primary",icon:e.jsx($e,{}),onClick:k,style:{background:"#fff",border:"none",color:ne,fontWeight:700},children:"Add New"})]})]}),e.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",marginBottom:18},children:[e.jsx(T,{icon:e.jsx(ze,{}),color:"processing",style:{fontWeight:600},children:"Policy documents"}),e.jsx(T,{icon:e.jsx(Ne,{}),color:et,children:"Published records"}),e.jsx(T,{color:st,children:"Pending removal allowed"})]}),e.jsx(Be,{style:{borderRadius:14,border:"1px solid #e2e8f0",boxShadow:"0 2px 12px rgba(0,0,0,0.04)"},styles:{body:{padding:12}},children:C?e.jsx(Te,{active:!0,paragraph:{rows:10}}):e.jsx(Ue,{rows:c,columns:G})}),e.jsx(ie,{open:U,title:"Add New Policy/SOP",onCancel:x,width:800,footer:[e.jsx(D,{onClick:x,children:"Close"},"back")],children:e.jsx(Ye,{onSuccess:()=>{w(),b(!1)}})}),e.jsx(ie,{title:"Modify "+(r==null?void 0:r.policy_name),open:R,onCancel:$,width:800,footer:[e.jsx(D,{onClick:$,children:"Close"},"back")],children:r&&e.jsx(Ze,{onSuccess:()=>{w(),P(!1),S(null)},isModalOpen:R,leave_id:r==null?void 0:r.no,description:r==null?void 0:r.description,name:r==null?void 0:r.policy_name,policy_no:r==null?void 0:r.policy_number,department:r==null?void 0:r.department,is_published:r==null?void 0:r.is_published,is_sop:r==null?void 0:r.is_sop})})]})};export{ut as default};
