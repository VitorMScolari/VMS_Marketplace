(this["webpackJsonpvms-marketplace"]=this["webpackJsonpvms-marketplace"]||[]).push([[0],{217:function(e){e.exports=JSON.parse('{"a":"0xBF33670F760a937932ED5D485b2B157C3be4183f"}')},218:function(e){e.exports=JSON.parse('{"a":"0xe983D22acE41A4bbb6d354bDc2D3587dc3338318"}')},224:function(e,t,n){},314:function(e,t){},476:function(e,t){},499:function(e,t){},510:function(e,t,n){},527:function(e,t,n){},531:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(62),i=n.n(s),c=n(89),o=n(25),u=n(4),l=n(33),p=n(546),d=n(26),b=n(61),y=n(66),j=n(3),m=function(e){var t=e.text;return Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(j.jsx)("span",{className:"text-secondary mx-1",children:t})]})},O=function(e){var t=e.text;return Object(j.jsxs)("div",{children:[Object(j.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(j.jsx)("span",{className:"text-secondary mx-1",children:t})]})},f={text:""};m.defaultProps=f,O.defaultProps=f;var x=n(542),v=n(544),h=n(236),T=n(226),g=n(127),w=n.n(g),N=n(217),k=n(218),S=[{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"AlreadyListed",type:"error"},{inputs:[],name:"NoProceeds",type:"error"},{inputs:[],name:"NotApprovedForMarketplace",type:"error"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"NotListed",type:"error"},{inputs:[],name:"NotOwner",type:"error"},{inputs:[],name:"PriceMustBeAboveZero",type:"error"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"}],name:"PriceNotMet",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"buyer",type:"address"},{indexed:!0,internalType:"address",name:"nftAddress",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"}],name:"ItemBought",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!0,internalType:"address",name:"nftAddress",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ItemCanceled",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"seller",type:"address"},{indexed:!0,internalType:"address",name:"nftAddress",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"}],name:"ItemListed",type:"event"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"buyItem",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"cancelListing",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getListing",outputs:[{components:[{internalType:"uint256",name:"price",type:"uint256"},{internalType:"address",name:"seller",type:"address"}],internalType:"struct NftMarketplace.Listing",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"seller",type:"address"}],name:"getProceeds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"}],name:"listItem",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"nftAddress",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"newPrice",type:"uint256"}],name:"updateListing",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawProceeds",outputs:[],stateMutability:"nonpayable",type:"function"}],I=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"TOTAL_SUPPLY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseTokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"dest",type:"address"}],name:"payments",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"uri",type:"string"}],name:"safeMint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_baseTokenURI",type:"string"}],name:"setBaseTokenURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"payee",type:"address"}],name:"withdrawPayments",outputs:[],stateMutability:"nonpayable",type:"function"}],_=Object(T.create)("https://ipfs.infura.io:5001/api/v0"),C=function(){var e=Object(l.a)(Object(u.a)().mark((function e(t,n,a,r){var s,i,c,o,p;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r.name,i=r.description,c=r.exteralUrl,o=r.ipfsImage,p=r.ownerAddress,e.next=3,Object(l.a)(Object(u.a)().mark((function e(){var r,l,d,b,y,j,m;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s&&i&&o){e.next=2;break}return e.abrupt("return");case 2:return r=JSON.stringify({name:s,description:i,exteralUrl:c,image:o,owner:p}),e.prev=3,e.next=6,_.add(r);case 6:return l=e.sent,d="https://ipfs.infura.io/ipfs/".concat(l.path),e.next=10,A(n);case 10:return b=e.sent,console.log(b),console.log(p),e.next=15,n.listItem(k.a,1,1);case 15:return e.next=17,t.safeMint(p,d);case 17:return e.next=19,E(t);case 19:return y=e.sent,j=(j=y.filter((function(e){return e.owner.toLowerCase()===p.toLowerCase()})))[j.length-1],m=j.index,console.log(m),e.next=26,R(t,n,a,m);case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(3),console.log("Error listing NFT: ",e.t0);case 31:case"end":return e.stop()}}),e,null,[[3,28]])})))();case 3:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(Object(u.a)().mark((function e(t){var n,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.files[0]){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,_.add(n,{progress:function(e){return console.log("received: ".concat(e))}});case 6:return a=e.sent,e.abrupt("return","https://ipfs.infura.io/ipfs/".concat(a.path));case 10:e.prev=10,e.t0=e.catch(3),console.log("Error uploading file: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(Object(u.a)().mark((function e(t){var n,a,r,s;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=[],e.next=4,t.totalSupply();case 4:for(a=e.sent,r=function(e){var a=new Promise(function(){var n=Object(l.a)(Object(u.a)().mark((function n(a){var r,s,i;return Object(u.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.tokenURI(e);case 2:return r=n.sent,n.next=5,M(r);case 5:return s=n.sent,n.next=8,A(t,e);case 8:i=n.sent,a({index:e,owner:i,name:s.data.name,image:s.data.image,description:s.data.description});case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());n.push(a)},s=0;s<Number(a);s++)r(s);return e.abrupt("return",Promise.all(n));case 10:e.prev=10,e.t0=e.catch(0),console.log({e:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(Object(u.a)().mark((function e(t){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,w.a.get(t);case 5:return n=e.sent,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log({e:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(Object(u.a)().mark((function e(t,n){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.ownerOf(n);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log({e:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(Object(u.a)().mark((function e(t,n,a,r){var s;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(a),console.log(r),e.next=5,t.setApprovalForAll(N.a,!0);case 5:return e.next=7,n.listItem(k.a,r,1);case 7:return s=e.sent,e.abrupt("return",s);case 11:e.prev=11,e.t0=e.catch(0),console.log({e:e.t0});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),P=n(90),L=n(96),D=function(e,t,n,a){var r=e.getSigner(t).connectUnchecked();return new L.b(n,a,r)},U=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),i=Object(d.a)(s,2),c=i[0],f=i[1],T=Object(a.useState)(""),g=Object(d.a)(T,2),w=g[0],_=g[1],E=Object(a.useState)(""),M=Object(d.a)(E,2),A=M[0],R=M[1],L=Object(a.useState)(!1),U=Object(d.a)(L,2),H=U[0],B=U[1],W=Object(a.useState)(0),K=Object(d.a)(W,2),V=K[0],z=K[1],J=Object(o.f)(),Y=Object(b.b)(),q=function(){B(!1)},G=function(){var e=Object(l.a)(Object(u.a)().mark((function e(t){var n,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Y.account||alert("Please connect wallet."),V||alert("Your NFT must have a price."),n=D(Y.library,Y.account,k.a,I),a=D(Y.library,Y.account,N.a,S),e.next=7,C(n,a,V,t);case 7:Object(y.b)(Object(j.jsx)(m,{text:"Updating NFT list...."})),J("/profile"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log({error:e.t0}),Object(y.b)(Object(j.jsx)(O,{text:"Failed to create an NFT."}));case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p.a,{onClick:function(){return B(!0)},variant:"outline-dark",className:"rounded-pill px-5 m-2",children:"Create NFT"}),Object(j.jsxs)(x.a,{show:H,onHide:q,centered:!0,children:[Object(j.jsx)(x.a.Header,{closeButton:!0,children:Object(j.jsx)(x.a.Title,{children:"Create NFT"})}),Object(j.jsx)(x.a.Body,{children:Object(j.jsxs)(v.a,{onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsx)(h.a,{controlId:"inputLocation",label:"Name",className:"mb-3",children:Object(j.jsx)(v.a.Control,{type:"text",placeholder:"Name of NFT",onChange:function(e){R(e.target.value)}})}),Object(j.jsx)(h.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(j.jsx)(v.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){r(e.target.value)}})}),Object(j.jsx)(h.a,{controlId:"InputExternalUrl",label:"ExternalUrl",className:"mb-3",children:Object(j.jsx)(v.a.Control,{as:"textarea",placeholder:"external url to your NFT (optional)",style:{height:"80px"},onChange:function(e){f(e.target.value)}})}),Object(j.jsx)(v.a.Control,{type:"file",className:"mb-3",onChange:function(){var e=Object(l.a)(Object(u.a)().mark((function e(t){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:if(n=e.sent){e.next=6;break}return alert("failed to upload image"),e.abrupt("return");case 6:_(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),placeholder:"Product name"}),Object(j.jsxs)(h.a,{controlId:"InputPrice",label:"Price",className:"mb-3",children:[Object(j.jsx)(v.a.Control,{as:"textarea",placeholder:"Listing Price for your NFT",style:{height:"80px"},onChange:function(e){!function(e){try{var t=P.a.utils.parseEther(e.toString());z(t)}catch(n){console.log({error:n}),Object(y.b)(Object(j.jsx)(O,{text:"Price must be a Number."}))}}(e.target.value)}}),Object(j.jsx)("select",{children:Object(j.jsx)("option",{value:"MATIC",children:"MATIC"})})]})]})}),Object(j.jsxs)(x.a.Footer,{children:[Object(j.jsx)(p.a,{variant:"outline-secondary",onClick:q,children:"Close"}),Object(j.jsx)(p.a,{variant:"dark",disabled:!(A&&w&&n&&V),onClick:function(){G({name:A,description:n,exteralUrl:c,ipfsImage:w,ownerAddress:Y.account}),q()},children:"Create NFT"})]})]})]})},H=(n(510),n(237)),B=n(156),W=n(238);n(511).config({path:".env"});var K={1:"https://mainnet.infura.io/v3/".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/VMS_Marketplace_polygon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).INFURA_ID),3:"https://ropsten.infura.io/v3/".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/VMS_Marketplace_polygon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).INFURA_ID),4:"https://rinkeby.infura.io/v3/".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/VMS_Marketplace_polygon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).INFURA_ID),5:"https://goerli.infura.io/v3/".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/VMS_Marketplace_polygon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).INFURA_ID),42:"https://kovan.infura.io/v3/".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/VMS_Marketplace_polygon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).INFURA_ID),137:"https://polygon-mainnet.infura.io/v3/".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/VMS_Marketplace_polygon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).INFURA_ID),80001:Object({NODE_ENV:"production",PUBLIC_URL:"/VMS_Marketplace_polygon",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).ALCHEMY_URL},V=new H.a({supportedChainIds:[1,3,4,5,42,137,80001]});new B.a({rpc:{1:K[1],4:K[4]},qrcode:!0,pollingInterval:15e3});new W.a({url:K[4],appName:"demo-app",supportedChainIds:[1,3,4,5,42,137,80001]});var z=function(){var e=Object(b.b)(),t=function(){var t=Object(l.a)(Object(u.a)().mark((function t(){return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.activate(V);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{className:"navbar-main p-2 border-b-2",children:[Object(j.jsx)("h1",{className:"py-4 px-4 font-bold text-3xl",children:"VMS Marketplace"}),Object(j.jsxs)("div",{className:"div-links",children:[Object(j.jsx)(c.b,{to:"/explore",className:"navbar-links rounded-pill py-3 m-1",children:"Explore"}),Object(j.jsx)(c.b,{to:"/profile",className:"navbar-links rounded-pill py-3 m-1",children:"My NFTs"}),Object(j.jsx)(U,{}),e.account?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p.a,{type:"button",onClick:function(){try{e.deactivate()}catch(t){console.log(t)}},variant:"outline-dark",className:"navbar-btn rounded-pill px-5 m-1",children:"LOGOUT"})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p.a,{type:"button",onClick:t,variant:"outline-dark",className:"navbar-btn rounded-pill px-5 m-1",children:"Connect Wallet"})})]})]})})},J=n(9),Y=n(235),q=n(545),G=n(547),Z=n(539),Q=function(e){if(e)return e.slice(0,5)+"..."+e.slice(e.length-4,e.length)},X=n(16),$=n(240),ee=n.n($),te=["address","size"];function ne(e){var t=e.address,n=e.size,r=Object(X.a)(e,te),s=Object(a.useRef)();return Object(a.useEffect)((function(){t&&s.current&&(s.current.innerHTML="",s.current.appendChild(ee()(n,parseInt(t.slice(2,10),16))))}),[t,n]),Object(j.jsx)("div",Object(J.a)(Object(J.a)({},r),{},{children:Object(j.jsx)("div",{ref:s,style:{width:"".concat(n,"px"),height:"".concat(n,"px")}})}))}var ae=function(e){var t=e.nft,n=Object(b.b)(),r=Object(o.f)(),s=Object(a.useState)(!1),i=Object(d.a)(s,2),c=i[0],f=i[1],T=Object(a.useState)(0),g=Object(d.a)(T,2),w=g[0],k=g[1],I=D(n.library,n.account,N.a,S),_=function(){f(!1)},C=function(){var e=Object(l.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(w),e.next=3,I.methods.relistItem(t.itemId,w).send({from:n.account});case 3:e.sent||alert("Failed to Re-List NFT."),Object(y.b)(Object(j.jsx)(m,{text:"Updating NFT list...."})),r("/explore");case 7:case"end":return e.stop()}}),e)})));case 3:e.next=10;break;case 5:e.prev=5,e.t0=e.catch(0),console.log({error:e.t0}),alert("Failed to Re-List NFT."),Object(y.b)(Object(j.jsx)(O,{text:"Failed to Re-List NFT."}));case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(Object(u.a)().mark((function e(){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=parseInt(t.itemId),e.next=4,function(){var e=Object(l.a)(Object(u.a)().mark((function e(a){var s,i,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.defaultAccount,1,i=101*t.price/100,c=P.a.utils.parseUnits(i.toString(),"ether").toString(),console.log(c),e.next=7,I.methods.purchaseItem(n).send({from:s,value:c});case 7:alert("You have successfully purchased this NFT!"),r("/profile");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 4:t.remove=!0,e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.log({error:e.t0}),alert("Failed to Buy NFT."),Object(y.b)(Object(j.jsx)(O,{text:"Failed to Buy NFT."}));case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)(Y.a,{xs:5,sm:3,lg:3,xl:2,className:"p-1 m-5",children:Object(j.jsxs)(q.a,{className:"h-100",children:[Object(j.jsx)(q.a.Header,{children:Object(j.jsxs)(G.a,{direction:"horizontal",className:"w-5",gap:3,children:[Object(j.jsx)(ne,{address:t.seller,size:22}),Object(j.jsx)("span",{className:"font-monospace text-secondary",children:Q(t.seller)}),Object(j.jsxs)(Z.a,{bg:"secondary",className:"ms-auto",children:[t.tokenId," ID"]})]})}),Object(j.jsx)("div",{className:" ratio ratio-4x3",children:Object(j.jsx)("img",{src:t.image,alt:t.description})}),Object(j.jsxs)(q.a.Body,{className:"d-flex  flex-column text-center",children:[Object(j.jsx)(q.a.Title,{children:t.name}),Object(j.jsx)(q.a.Text,{className:"flex-grow-1",children:t.description}),Object(j.jsx)(q.a.Text,{className:"flex-grow-1",children:"".concat(t.price," USD")}),Object(j.jsx)(q.a.Text,{className:"flex-grow-1",children:t.exteralUrl})]}),Object(j.jsxs)(q.a.Footer,{className:"d-flex  flex-row justify-content-center text-center",children:[!t.relist&&Object(j.jsx)(p.a,{variant:"outline-dark",className:"rounded-pill px-4 mx-2 card-btn",onClick:F,children:"Buy"}),t.relist&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p.a,{onClick:function(){return f(!0)},variant:"dark",className:"rounded-pill px-4 card-btn",children:"Change price"}),Object(j.jsxs)(x.a,{show:c,onHide:_,centered:!0,children:[Object(j.jsx)(x.a.Header,{closeButton:!0,children:Object(j.jsx)(x.a.Title,{children:"Re-List NFT"})}),Object(j.jsx)(x.a.Body,{children:Object(j.jsx)(v.a,{children:Object(j.jsxs)(h.a,{controlId:"InputPrice",label:"Price",className:"mb-3",children:[Object(j.jsx)(v.a.Control,{as:"textarea",placeholder:"Listing Price for your NFT",style:{height:"80px"},onChange:function(e){!function(e){try{var t=P.a.utils.parseEther(e.toString());k(t)}catch(n){console.log({error:n}),Object(y.b)(Object(j.jsx)(O,{text:"Price must be a Number."}))}}(e.target.value)}}),Object(j.jsx)("select",{children:Object(j.jsx)("option",{value:"CELO",children:"CELO"})})]})})}),Object(j.jsxs)(x.a.Footer,{children:[Object(j.jsx)(p.a,{variant:"outline-secondary",onClick:_,children:"Close"}),Object(j.jsx)(p.a,{variant:"dark",disabled:!(t&&w),onClick:function(){C(),_()},children:"Re-List NFT"})]})]})]})]})]})},t.tokenId)},re=n(540),se=function(){return Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)(re.a,{animation:"border",role:"status",className:"opacity-25",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},ie=n(541),ce=n(543),oe=(n(224),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),i=Object(d.a)(s,2),c=i[0],o=i[1],p=Object(a.useRef)(),y=Object(a.useRef)(),m=Object(b.b)(),O=Object(a.useCallback)(Object(l.a)(Object(u.a)().mark((function e(){var t,n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,p.getListing();case 4:return t=e.sent,e.next=7,Promise.all(t.map(function(){var e=Object(l.a)(Object(u.a)().mark((function e(t){var n,a,r,s,i;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Number(t.tokenId),e.next=3,y.methods.tokenURI(n).call();case 3:return a=e.sent,r=t.seller,e.next=7,w.a.get(a);case 7:return s=e.sent,i=P.a.utils.formatUnits(t.price,"ether"),e.abrupt("return",{image:s.data.image,description:s.data.description,externalUrl:s.data.externalUrl,seller:r,name:s.data.name,price:i,tokenURI:a,tokenId:n,itemId:t.itemId});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:if(n=e.sent){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,n.map((function(e){return e.remove=!0,console.log(e),m.account.toLowerCase()===e.seller.toLowerCase()?e.relist=!0:e.relist=!1}));case 12:r(n),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log({error:e.t0});case 18:return e.prev=18,o(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])}))),[y,p,m.account]);return Object(a.useEffect)((function(){try{if(!m.account)return Object(j.jsxs)("div",{className:"nonfts-div",children:[Object(j.jsx)(ce.a,{color:"green",size:150}),Object(j.jsxs)("span",{className:"nonfts-text",children:["No NFTs yet ",Object(j.jsx)("br",{})," Create one to display"]})]});p.current=D(m.library,m.account,N.a,S),y.current=D(m.library,m.account,k.a,I),p&&O()}catch(e){console.log({error:e})}}),[m,O]),Object(j.jsx)(j.Fragment,{children:c?Object(j.jsx)(se,{}):Object(j.jsx)("div",{className:"explore-section",children:n.length>=1?Object(j.jsx)(ie.a,{xs:1,sm:1,lg:1,className:"w-100",children:n.map((function(e){return Object(j.jsx)(ae,{nft:Object(J.a)({},e)},e.tokenId)}))}):Object(j.jsxs)("div",{className:"nonfts-div",children:[Object(j.jsx)(ce.a,{color:"green",size:150}),Object(j.jsxs)("span",{className:"nonfts-text",children:["No NFTs yet ",Object(j.jsx)("br",{})," Create one to display"]})]})})})});oe.defaultProps={minterContract:null};var ue=oe,le=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),i=Object(d.a)(s,2),c=i[0],o=i[1],p=Object(b.b)(),y=Object(a.useCallback)(Object(l.a)(Object(u.a)().mark((function e(){var t,n,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,p.account){e.next=3;break}return e.abrupt("return");case 3:return t=D(p.library,p.account,k.a,I),o(!0),e.next=7,E(t);case 7:if(n=e.sent,a=n.filter((function(e){return e.owner.toLowerCase()===p.account.toLowerCase()}))){e.next=11;break}return e.abrupt("return");case 11:r(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log({error:e.t0});case 17:return e.prev=17,o(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,14,17,20]])}))),[p.account,p.library]);return Object(a.useEffect)((function(){try{y()}catch(e){console.log({error:e})}}),[y,undefined]),Object(j.jsx)("div",{className:"explore-section",children:c?Object(j.jsx)(se,{}):Object(j.jsx)(j.Fragment,{children:n.length>=1?Object(j.jsx)(ie.a,{xs:1,sm:1,lg:1,className:"w-100",children:n.map((function(e){return Object(j.jsx)(ae,{nft:Object(J.a)({},e)},e.index)}))}):Object(j.jsxs)("div",{className:"nonfts-div",children:[Object(j.jsx)(ce.a,{color:"green",size:150}),Object(j.jsxs)("span",{className:"nonfts-text",children:["No NFTs yet ",Object(j.jsx)("br",{})," Create one to display"]})]})})})};le.defaultProps={minterContract:null};var pe=le,de=(n(527),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(c.a,{basename:"/VMS_Marketplace_polygon",children:[Object(j.jsx)(z,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",exact:!0,element:Object(j.jsx)(ue,{})}),Object(j.jsx)(o.a,{path:"/explore",element:Object(j.jsx)(ue,{})}),Object(j.jsx)(o.a,{path:"/profile",element:Object(j.jsx)(pe,{})})]})]})})}),be=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,838)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))},ye=(n(528),n(529),n(530),n(154));window.onload=function(){localStorage.clear()},i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(b.a,{getLibrary:function(e){var t=new ye.a(e,"any");return t.pollingInterval=15e3,t},children:Object(j.jsx)(de,{})})}),document.getElementById("root")),be()}},[[531,1,2]]]);
//# sourceMappingURL=main.ce71da72.chunk.js.map