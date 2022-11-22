"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[2998],{55390:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));a(16758);const i={},r="ink!/pallet/solidity performance benchmarking",o={unversionedId:"rfps/Open/implementation-benchmarking",id:"rfps/Open/implementation-benchmarking",title:"ink!/pallet/solidity performance benchmarking",description:"Status:* Open",source:"@site/docs/rfps/Open/implementation-benchmarking.md",sourceDirName:"rfps/Open",slug:"/rfps/Open/implementation-benchmarking",permalink:"/Grants-Program/rfps/Open/implementation-benchmarking",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Formal Guarantees for GRANDPA Finality Gadget",permalink:"/Grants-Program/rfps/Open/formal_guarantees_for_grandpa"},next:{title:"Move Smart Contract Pallet",permalink:"/Grants-Program/rfps/Open/move_smart_contract_pallet"}},s={},m=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1 - Basic benchmarking",id:"milestone-1---basic-benchmarking",level:3},{value:"Milestone 2 - Integrate native solidity &amp; <code>solang</code>-compiled solidity",id:"milestone-2---integrate-native-solidity--solang-compiled-solidity",level:3},{value:"Milestone 3 - More complex application logic",id:"milestone-3---more-complex-application-logic",level:3}],p={toc:m};function c(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"inkpalletsolidity-performance-benchmarking"},"ink!/pallet/solidity performance benchmarking"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Status:")," Open"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/mmagician"},"mmagician"))),(0,l.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,l.kt)("p",null,"When a new team comes to the ecosystem, they are faced with a decision on how to best implement the logic that they need.\nTraditionally in substrate, this has been a choice between a smart contract vs. runtime module (a.k.a. pallet) and elaborated on ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/56040779/when-should-i-build-a-substrate-runtime-module-versus-a-substrate-smart-contract"},"in this StackOverflow question")," or ",(0,l.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/smart-contracts/#smart-contracts-vs-runtime-development"},"this entry in Substrate Developer Hub"),". The choice has since been augmented by the possibility to deploy solidity contracts to an EVM-compatible chain, or even writing solidity code and compiling it to WASM with the help of a ",(0,l.kt)("a",{parentName:"p",href:"https://solang.readthedocs.io/en/latest"},"solang")," compiler."),(0,l.kt)("p",null,"As substrate is gaining traction, more and more tools will enable developers to write their logic in their language of choice and deploy on-chain, such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Move: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.pontem.network"},"diem on polkadot"),", PoC finished"),(0,l.kt)("li",{parentName:"ul"},"Yatima: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/w3f/Open-Grants-Program/pull/463"},"pure functional language for web3"),", application in progress")),(0,l.kt)("p",null,"This RFP calls for a benchmarking effort to help inform newcomers about the choice of the best tool for writing application logic.\nApart from quantifiable metrics, we would like the outcome of this work to be a guide for developers, perhaps expanding on the aforementioned StackOverflow post. Depending on the outcome, the work might get integrated into our READMEs/wikis."),(0,l.kt)("p",null,"Before starting this effort, it might make sense to take a look at the official ",(0,l.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/benchmarking"},"runtime benchmarking docs")," to assess whether it can be leveraged in some way."),(0,l.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 4 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 10,000 DAI")),(0,l.kt)("h3",{id:"milestone-1---basic-benchmarking"},"Milestone 1 - Basic benchmarking"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 5000 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Devise performance metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"List the quantifiable metrics that can be compared across different implementations, such as storage footprint and execution speed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Pallets: basic read & write"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a pallet which exposes simple methods for writing to storage and reading from on-chain storage. Should be implemented for basic types.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ink!"),": basic read & write"),(0,l.kt)("td",{parentName:"tr",align:null},"As above, but for smart contracts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Benchmarking framework"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a set of tools that allows calling both the pallet's extrinsics and contract's public methods multiple times, measuring the execution time, impact on on-chain storage etc., to enable extraction of statistically meaningful data for performance comparison")))),(0,l.kt)("h3",{id:"milestone-2---integrate-native-solidity--solang-compiled-solidity"},"Milestone 2 - Integrate native solidity & ",(0,l.kt)("inlineCode",{parentName:"h3"},"solang"),"-compiled solidity"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 5000 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},'"native" solidity: basic read & write'),(0,l.kt)("td",{parentName:"tr",align:null},"As per previous milestone"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"WASM-compiled solidity"),(0,l.kt)("td",{parentName:"tr",align:null},"As per previous milestone"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Adapt the benchmarking framework"),(0,l.kt)("td",{parentName:"tr",align:null},"Include both flavours of solidity into the tools"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"milestone-3---more-complex-application-logic"},"Milestone 3 - More complex application logic"),(0,l.kt)("p",null,"Apart from just reading & writing basic types, all the above implementations should be extended to include more complex logic. The scope is up to the implementers, but here are some ideas:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cross-contract calls"),(0,l.kt)("li",{parentName:"ul"},"emitting events"),(0,l.kt)("li",{parentName:"ul"},"storage-agnostic logic (self-contained methods performing e.g. some heavy computation)")),(0,l.kt)("p",null,"The cost is scope dependent."))}c.isMDXComponent=!0}}]);