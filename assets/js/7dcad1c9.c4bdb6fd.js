"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4508],{68379:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(16758);const l={},o="ZeroPool Phase 2",i={unversionedId:"Applications/ZeroPool",id:"Applications/ZeroPool",title:"ZeroPool Phase 2",description:"- Proposer: snjax",source:"@site/docs/Applications/ZeroPool.md",sourceDirName:"Applications",slug:"/Applications/ZeroPool",permalink:"/Grants-Program/Applications/ZeroPool",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ZeroDAO Network",permalink:"/Grants-Program/Applications/ZeroDAO_Network"},next:{title:"Zondax Support & Maintenance",permalink:"/Grants-Program/Applications/Zondax-Support"}},s={},p=[{value:"<strong>Project Description</strong>",id:"project-description",level:2},{value:"<strong>Team members</strong>",id:"team-members",level:2},{value:"<strong>Team Website</strong>",id:"team-website",level:2},{value:"<strong>Team&#39;s experience</strong>",id:"teams-experience",level:2},{value:"<strong>Team Code Repos</strong>",id:"team-code-repos",level:2},{value:"<strong>Team LinkedIn Profiles</strong>",id:"team-linkedin-profiles",level:2},{value:"<strong>Development Roadmap</strong>",id:"development-roadmap",level:2},{value:"Milestone 1 \u2014 Implement zkSNARK circuit and cryptography for private transaction",id:"milestone-1--implement-zksnark-circuit-and-cryptography-for-private-transaction",level:3},{value:"Milestone 2 \u2014 Implement private transactions contract for substrate pallet and client library",id:"milestone-2--implement-private-transactions-contract-for-substrate-pallet-and-client-library",level:3},{value:"<strong>Future Plans</strong>",id:"future-plans",level:2}],m={toc:p};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zeropool-phase-2"},"ZeroPool Phase 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," snjax"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," DAI ERC20: 0xb6F9F891497C0B72a8A817f3D3E3C721fca6f9CC")),(0,r.kt)("h2",{id:"project-description"},(0,r.kt)("strong",{parentName:"h2"},"Project Description")),(0,r.kt)("p",null,"ZeroPool is the first fully anonymous solution for the Ethereum. One can deposit, withdraw, and make transactions inside the project. ZeroPool supports ERC20 and ERC721. We hide the whole graph of the transaction. Gas cost is pretty attractive in our solution (15-40k per transaction), because we are using optimistic rollup."),(0,r.kt)("p",null,"All these points explain benefits for the community. True anonymity on the blockchain becomes possible with ZeroPool."),(0,r.kt)("p",null,"We are interested in cooperation with Web3 because we will be able to make zkSNARK and privacy technologies more attractive and clear for developers. Also, we will be able to attract more users and attention to our project."),(0,r.kt)("p",null,"Private transactions are a rather atypical development for blockchain. There are two differences from common dApps: our dApp needs to manage local client/browser-side database and zkSNARK prover requires heavy computational complexity. We need to optimize the solutions not only at the opcodes level and algorithms but also at a more high level, like interactions between all components (UI, cryptography, local database, blockchain)."),(0,r.kt)("p",null,"Here is a tech description, how our solution works: ",(0,r.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/state-of-zeropool-scaling-anonymous-transactions-for-ethereum/6946"},"State of Zeropool - scaling anonymous transactions for Ethereum"),"."),(0,r.kt)("h2",{id:""}),(0,r.kt)("h2",{id:"team-members"},(0,r.kt)("strong",{parentName:"h2"},"Team members")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Igor Gulamov / Applied cryptography, architecture, rust")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/snjax"},"https://github.com/snjax")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"mailto:igor.gulamov@gmail.com"},"igor.gulamov@gmail.com")),(0,r.kt)("p",null,"Igor is responsible for cryptography, architecture, coordination, and team management. Also, Igor is responsible for research and finding out the best way of adapting ZeroPool for Web3."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alexandra Gulamova / Business development, community, UX, administrative")),(0,r.kt)("p",null,"Non-technical tasks for our interaction requires a separate person. All applications,  reports, coordination questions. Also, it is needed to follow up with the community to adopt and support this project."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dmitry Vdovin Rust/wasm developer")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/voidxnull"},"https://github.com/voidxnull")),(0,r.kt)("p",null,"Dmitry has experience in the development of wasm and rust applications, backend and microservices, interacting with the blockchain."),(0,r.kt)("p",null,"Rust/wasm developer is full-time, he is responsible for developing wasm part of the client-side application and also there are client-side bases among the tasks. It takes a lot of time and affords."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Samuele Landi Rust/blockchain developer")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/samuelelandi"},"https://github.com/samuelelandi")),(0,r.kt)("p",null,"Samuele has experience in rust, blockchain, and polkadot development."),(0,r.kt)("p",null,"Rust/blockchain developer builds relayer and maybe some parts of the pallet, which is needed for cryptography adapting for the final product."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Anton Pegov Frontend developer")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/antonpegov"},"https://github.com/antonpegov")),(0,r.kt)("p",null,"Anton has experience in fronted (including fronted for Ethereum DApps)."),(0,r.kt)("p",null,"We need a separate position for the frontend developer because the scope of skills of other team members does not imply strong frontend skills. Anton covers this scope giving time for others to work hard on the codebase."),(0,r.kt)("h2",{id:"team-website"},(0,r.kt)("strong",{parentName:"h2"},"Team Website")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zeropool.network"},"https://zeropool.network"))),(0,r.kt)("h2",{id:"teams-experience"},(0,r.kt)("strong",{parentName:"h2"},"Team's experience")),(0,r.kt)("p",null,"Igor is the tech lead of the team. Igor is responsible for core parts such as ZeroPool architecture and SNARKs."),(0,r.kt)("p",null,"Igor has great experience in research and product creations. He started as a researcher in physics at the same time he created some IT products for the b2b sector. Igor came to the blockchain as VP Eng in BANKEX Foundation and then became CTO there. Also, Igor has great experience in blockchain research (",(0,r.kt)("a",{parentName:"p",href:"https://ethresear.ch/u/snjax/"},"https://ethresear.ch/u/snjax/"),") and built ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeropoolnetwork/fawkes-crypto"},"Fawkes-Crypto library"),", providing development zkSNARKs as native applications in pure Rust."),(0,r.kt)("p",null,"Dmitry has a strong experience in rust. He worked on different IT projects before."),(0,r.kt)("p",null,"Anton is responsible for the frontend. He has perfect experience and skills in UX/UI. He worked for international IT companies. Also, he has experience in blockchain. He created a frontend for several dApps."),(0,r.kt)("p",null,"Samuel has great experience in IT. He worked in application-directed cryptography. So he has deep knowledge of encryption, communication protocols, and coder of original communication protocols for encrypted communications. Also, Samuel worked on several blockchain projects with Polkadot (Substrate), Ethereum, and Bitcoin."),(0,r.kt)("p",null,"Alexandra is responsible for product development and cooperation with other teams and companies.  Alexandra has great experience in IT projects and business development. Also, she is responsible for non-coding questions in the project."),(0,r.kt)("h2",{id:"team-code-repos"},(0,r.kt)("strong",{parentName:"h2"},"Team Code Repos")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zeropoolnetwork"},"https://github.com/zeropoolnetwork")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/snjax"},"https://github.com/snjax")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/voidxnull"},"https://github.com/voidxnull")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/samuelelandi"},"https://github.com/samuelelandi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/antonpegov"},"https://github.com/antonpegov"))),(0,r.kt)("h2",{id:"team-linkedin-profiles"},(0,r.kt)("strong",{parentName:"h2"},"Team LinkedIn Profiles")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/igorgulamov/"},"https://www.linkedin.com/in/igorgulamov/")," (Igor Gulamov)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/alexandra-gulamova-a4102a57/"},"https://www.linkedin.com/in/alexandra-gulamova/")," (Alexandra Gulamova)")),(0,r.kt)("h2",{id:"development-roadmap"},(0,r.kt)("strong",{parentName:"h2"},"Development Roadmap")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 4 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  3 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 63000 DAI")),(0,r.kt)("h3",{id:"milestone-1--implement-zksnark-circuit-and-cryptography-for-private-transaction"},"Milestone 1 \u2014 Implement zkSNARK circuit and cryptography for private transaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 36000 DAI")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 and MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can sign, proof and verify the transactions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"We will build a testing environment to demonstrate functionality. Proved transactions could be verified in substrate pallet application (1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,r.kt)("td",{parentName:"tr",align:null},"We will write an article or tutorial that explains the work done as part of the grant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"zkSNARK circuit and cryptography library"),(0,r.kt)("td",{parentName:"tr",align:null},"We will create a library for proving and verifying private transactions, compatible with the substrate pallet")))),(0,r.kt)("p",null,"The solution is based on ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/fawkes-crypto"},"Fawkes-Crypto")," library. We implement a join-split transaction with hidden inputs from a merkelized anonymity set. Also we are going to support spending, receiving and decryption keys, like in ZCash."),(0,r.kt)("p",null,"The resulting software will be available to sign and prove, encrypt and decrypt transactions :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"deposits"),(0,r.kt)("li",{parentName:"ul"},"withdrawals"),(0,r.kt)("li",{parentName:"ul"},"transfers")),(0,r.kt)("h3",{id:"milestone-2--implement-private-transactions-contract-for-substrate-pallet-and-client-library"},"Milestone 2 \u2014 Implement private transactions contract for substrate pallet and client library"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 27000 DAI")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 and MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can execute private transactions on the substrate node. Once the node is up, it will be possible to send test transactions that will show how the new functionality works.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,r.kt)("td",{parentName:"tr",align:null},"We will write an article or tutorial that explains the work done as part of the grant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Substrate module: private transactions"),(0,r.kt)("td",{parentName:"tr",align:null},"We will deliver a working module, demonstrating private transactions in the substrate chain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Wallet library:"),(0,r.kt)("td",{parentName:"tr",align:null},"The js&wasm wallet library will support interaction with the contract (perform transactions and view the state) from the frontend side.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the full functionality of our chain")))),(0,r.kt)("p",null,"The contract will support transfer, deposit, and withdrawal for multiple assets (DOTs, tokens, presented on the parachain). All transfers are private (balances, user accounts, asset types, transaction graph are hidden)."),(0,r.kt)("h2",{id:"future-plans"},(0,r.kt)("strong",{parentName:"h2"},"Future Plans")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trusted setup"),(0,r.kt)("li",{parentName:"ul"},"Audit"),(0,r.kt)("li",{parentName:"ul"},"Support assets from other para chains for private transfers")))}u.isMDXComponent=!0}}]);