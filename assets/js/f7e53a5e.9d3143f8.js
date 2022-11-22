"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1791],{37739:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(16758);const r={},i="Libra - Decentralized Payment Network",o={unversionedId:"Applications/Libra",id:"Applications/Libra",title:"Libra - Decentralized Payment Network",description:"- Team Name: @Scale Technologies",source:"@site/docs/Applications/Libra.md",sourceDirName:"Applications",slug:"/Applications/Libra",permalink:"/Grants-Program/Applications/Libra",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Koi Metaverse",permalink:"/Grants-Program/Applications/Koiverse"},next:{title:"Map Bridge",permalink:"/Grants-Program/Applications/MAP-Bridge"}},s={},p=[{value:"Project Overview :page_facing_up",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"LRP protocol",id:"lrp-protocol",level:4},{value:"Data model",id:"data-model",level:5},{value:"State transition",id:"state-transition",level:5},{value:"Resolvers network",id:"resolvers-network",level:4},{value:"SDK",id:"sdk",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status :open_book",id:"development-status-open_book",level:2},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - LRP Protocol Implementation",id:"milestone-1---lrp-protocol-implementation",level:3},{value:"Milestone 2 - Resolvers Network Implementation",id:"milestone-2---resolvers-network-implementation",level:3},{value:"Milestone 3 \u2014 Javascript SDK Implementation",id:"milestone-3--javascript-sdk-implementation",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information :heavy_plus_sign",id:"additional-information-heavy_plus_sign",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"libra---decentralized-payment-network"},"Libra - Decentralized Payment Network"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," @Scale Technologies"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 0x77AE9e7c90E6f6137AC3b3cd09A4bdc4654A0fe5 (ERC20 USDT)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,l.kt)("h2",{id:"project-overview-page_facing_up"},"Project Overview :page_facing_up"),(0,l.kt)("p",null,"Libra Payment Network is a decentralized-first payment system. Libra allows people to accept cryptocurrencies as a payment method and handle real-world eCommerce transactions without hassle."),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Blockchain is revolutionizing eCommerce, making payment safer and faster while bringing greater access to global consumers.",(0,l.kt)("br",{parentName:"p"}),"\n","Due to the nature of digital currency protocols, transactions cannot be canceled or altered once they are initiated.",(0,l.kt)("br",{parentName:"p"}),"\n","However, global eCommerce data shows that at least 30% of all products ordered online are returned.  "),(0,l.kt)("p",null,"How can we adopt blockchain to eCommerce with such a barrier?"),(0,l.kt)("p",null,"Libra was born to tackle this problem and help facilitate blockchain adoption in the eCommerce industry.",(0,l.kt)("br",{parentName:"p"}),"\n","Libra is a decentralized payment network. Through its SDK, Libra allows sellers to accept cryptocurrency payments in minutes.",(0,l.kt)("br",{parentName:"p"}),"\n","Libra includes a Lock and Release Payment (LRP) Protocol and Resolvers Network at its core.",(0,l.kt)("br",{parentName:"p"}),"\n","LRP Protocol helps the buyer to purchase with confidence. It also helps the seller to increase conversion and do proper order handling.",(0,l.kt)("br",{parentName:"p"}),"\n","Resolvers Network leverages the power of blockchain and the community to resolve transaction conflict in a quick and efficient method without involving any financial institution.  "),(0,l.kt)("p",null,"Libra bridges the gap between blockchain and eCommerce to enable all people to exchange value and transact globally, securely, at significantly lower cost, and more inclusively than traditional financial systems allow.  "),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"The project's scope is to build three core components that define the foundation of Libra Network: LRP protocol, Resolver Networks, and Javascript SDK. From these components, people can easily integrate the cryptocurrencies payment to their business while their customers are protected by Libra Network."),(0,l.kt)("h4",{id:"lrp-protocol"},"LRP protocol"),(0,l.kt)("p",null,"LRP protocol allows buyer and seller to make a p2p payment while the cryptocurrencies of the buyer have locked until the seller delivers the order. The below diagram will explain the logic of LRP protocol when the sellers integrate with Libra Network."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/92568442/148349639-145690aa-98c3-4e13-b9a3-ccfa01d55f6a.png",alt:"Project Libra-LRP Protocol"})),(0,l.kt)("p",null,"For the LRP protocol, the data model for LRP protocol should be generic and flexible for any use cases. Besides, it should be small to store on-chain but need to provide enough information if needed (e.g. dispute case)."),(0,l.kt)("h5",{id:"data-model"},"Data model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "uuid",\n  "payer": "5ERjkQVj8M7v5UVZQ8qTbZ2qb1o5TgNXq9tXt2BsWF9jBpDu",\n  "payee": "5GWeq3dqEp4gzZS8jnEzTdTtPYxAp4AMcvjdhJdse4nU8zb2",\n  "amount": 1000,\n  "currency": "LIBRA",\n  "description": "This is charged by @Scale Tech",\n  "status": "pending",\n  "receipt_hash": "b55126a39f9b1170a32e6f61e4a694c45235e5ac11c05ecd6ff6395de6a11187",\n  "created_at": 1640761503329,\n  "updated_at": 1640761504444\n}\n')),(0,l.kt)("h5",{id:"state-transition"},"State transition"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/92568442/148345661-fd24292a-389b-44ef-95a5-5d8422f546c6.png",alt:"state-transition"})),(0,l.kt)("h4",{id:"resolvers-network"},"Resolvers network"),(0,l.kt)("p",null,"Although most payments can be processed on the LRP protocol, disputes are inevitable and they need to be resolved by humans. The estimated dispute rate of the traditional payment platforms is about 2%. A dispute occurs when buyer and seller cannot decide the outcome of the payment by themselves and the fund is still locked in the LRP protocol. We considered many of ideas and we believe the resolvers network is the best way to implement a decentralized dispute resolution."),(0,l.kt)("p",null,"The dispute can be issued by the buyer and the seller can appeal the dispute. Both dispute and appeal action will need the fee estimated at $10 pay by Libra\u2019s token. A dispute will be resolved by a random resolver on the resolver's network. To become a resolver, a person needs to stake a required amount of Libra\u2019s token or create a candidate application and receive enough nominations from the community. 50% of the dispute fee is distributed to resolvers and the counterpart share to the nominators of the resolver."),(0,l.kt)("p",null,"In the case that buyer or seller does not accept the final decision from the resolver, they will have 72 hours to decide to escalate the dispute or not. To request to escalate, they need to deposit $20 and the resolvers network will pick two more resolvers to re-investigate the dispute. After the investigation, the resolvers will vote for the final decision. If the final decision is different from the first resolver made, the first resolver will be slashed $20 to cover escalate fee and decrease the credibility. If the credibility is too low, the resolver will be banned permanently on the network."),(0,l.kt)("p",null,"This diagram shows the whole dispute process"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/92568442/148343813-2f581a72-36b7-4065-bf69-cb0d642f25f5.png",alt:"Project Libra- Dispute process"})),(0,l.kt)("h4",{id:"sdk"},"SDK"),(0,l.kt)("p",null,"The SDK is indispensable for the product\u2019s adoption. It should be developer-friendly and easy to integrate with a few lines of the code. The interface of the SDK is listed below."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Install")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install libra-sdk\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import Libra from "@libra-sdk";\n\nconst libra = new Libra(config);\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Checkout")),(0,l.kt)("p",null,"Create a payment with the SDK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const payment = libra.createPayment({\n payee,\n amount,\n currency,\n description,\n receipt\n});\n")),(0,l.kt)("p",null,"Cancel a payment (before the seller accept)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"libra.cancelPayment(payment.id)\n")),(0,l.kt)("p",null,"Complete a payment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"libra.complePayment(payment.id);\n")),(0,l.kt)("p",null,"Dispute a payment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"libra.dispute({\n paymentId: payment.id,\n evidence: {...}\n});\n\nlibra.escalateDispute(disputeId);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Seller\u2019s dashboard")),(0,l.kt)("p",null,"Get payments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"libra.getPayments();\n")),(0,l.kt)("p",null,"Accept or reject a payment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"libra.acceptPayment(paymentId);\n\nlibra.rejectPayment(paymentId);\n")),(0,l.kt)("p",null,"Confirm full fill the order"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"libra.fullFill(paymentId);\n")),(0,l.kt)("p",null,"Appeal a dispute"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"libra.appeal(disputeId);\n\nlibra.escalate(disputeId);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Governance dashboard")),(0,l.kt)("p",null,"Setup identity"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"libra.setIdentity({\n displayName,\n legalName,\n email,\n website,\n ...\n});\n")),(0,l.kt)("p",null,"Apply resolver"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'libra.apply({\n role: "resolver",\n application: {...},\n deposit: 100000,\n});\n')),(0,l.kt)("p",null,"Nominate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"libra.nominate({\n address,\n amount,\n ...\n});\n")),(0,l.kt)("p",null,"Resolve a dispute"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"libra.approveDispute(disputeId);\n\\\\ OR \nlibra.rejectDispute(disputeId);\n")),(0,l.kt)("p",null,"Resolve an appeal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"libra.approveAppeal(disputeId);\n\\\\ OR \nlibra.rejectAppeal(disputeId);\n")),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Where and how does your project fit into the ecosystem?")," Libra is built on top of Substrate. Thanks to Substrate's ecosystem, Libra supports all substrate tokens as a payment method by default."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?"),"\nLibra's target audience is sellers/buyers who want a safer, faster, more straightforward solution for online payment using cryptocurrencies. Through Resolvers Network, Libra also brings new jobs and a new way to earn income by solving disputes.  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"What need(s) does your project meet?")," Libra provides a safe mechanism for both buyers and sellers to transact online"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?")," As far as we know, Libra, with its unique LRP protocol and Resolvers network, is the first project designed to solve real-world eCommerce transactions. There are no similar projects in the ecosystem yet.")),(0,l.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Name of team leader: Anthony Dong"),(0,l.kt)("li",{parentName:"ul"},"Names of team members: Andrew Le")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Anthony Dong"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:anthony@atscale.xyz"},"anthony@atscale.xyz")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Website:")," ",(0,l.kt)("a",{parentName:"li",href:"https://atscale.xyz"},"https://atscale.xyz"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("p",null,"(We're in the process of registering the legal entity)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Address:")," N/A"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," N/A")),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"AtScale is a team specialized in blockchain development. We aim to rely on blockchain technologies to solve real-world problems and facilitate blockchain-based products to mass adoption."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Anthony Dong"),": Anthony successfully built and exited several internet startups during the last ten years. Anthony was the CTO in his recent company, helping the company bootstrapped from zero to $15 million ARR (Annual Recurring Revenue) in 2 years."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Andrew Le"),": Andrew was the Lead Researcher at his previous company, specializing in AI/Machine Learning and Blockchain technologies. He led the development to build one of the most accurate body measurement prediction engines in the industry during his past job.")),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/atscaletech/"},"https://github.com/atscaletech/")," (AtScale Technologies)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/atscaletech/polkadot-hackathon-apac"},"https://github.com/atscaletech/polkadot-hackathon-apac")," (Hackathon Submission)")),(0,l.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,l.kt)("p",null,"Due to privacy concerns, the team information will provide in private by email if requested."),(0,l.kt)("h2",{id:"development-status-open_book"},"Development Status :open_book"),(0,l.kt)("p",null,"Libra is founded and developed in the Polkadot APAC Hackathon 2021. We already built a proof of concept application and here is our hackathon submission:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pitch video: ",(0,l.kt)("a",{parentName:"li",href:"https://youtu.be/pR4_2nrrJQQ"},"https://youtu.be/pR4_2nrrJQQ")),(0,l.kt)("li",{parentName:"ul"},"Demo screencast: ",(0,l.kt)("a",{parentName:"li",href:"https://youtu.be/cR7gKSzVoAY"},"https://youtu.be/cR7gKSzVoAY")),(0,l.kt)("li",{parentName:"ul"},"Live demo: ",(0,l.kt)("a",{parentName:"li",href:"https://app.libra.atscale.xyz"},"https://app.libra.atscale.xyz")),(0,l.kt)("li",{parentName:"ul"},"Explorer: ",(0,l.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.libra.atscale.xyz#/explorer"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.libra.atscale.xyz#/explorer")),(0,l.kt)("li",{parentName:"ul"},"Git repository: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/atscaletech/polkadot-hackathon-apac"},"https://github.com/atscaletech/polkadot-hackathon-apac"))),(0,l.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," ~ 4 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1.5 FTE"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 16,000 USD")),(0,l.kt)("h3",{id:"milestone-1---lrp-protocol-implementation"},"Milestone 1 - LRP Protocol Implementation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 4,000 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"The documentation includes: general concepts explanation, setup and run node guide, RPC specs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing"),(0,l.kt)("td",{parentName:"tr",align:null},"All of the code will be covered by unit and integration test suites with the testing instruction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Live testnet"),(0,l.kt)("td",{parentName:"tr",align:null},"The live testnet with a few nodes and public RPC endpoints to test or connect more nodes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate module: LRP pallet"),(0,l.kt)("td",{parentName:"tr",align:null},"The LRP protocol implementation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate module: Currencies pallet"),(0,l.kt)("td",{parentName:"tr",align:null},"The extended module of ORML currencies allows creates and manages currencies by bonding some native tokens.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate based chain"),(0,l.kt)("td",{parentName:"tr",align:null},"The integration LRP protocol with substrate chain.")))),(0,l.kt)("h3",{id:"milestone-2---resolvers-network-implementation"},"Milestone 2 - Resolvers Network Implementation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 8,000 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"The documentation includes: general concepts explanation, setup and run node guide, RPC specs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing"),(0,l.kt)("td",{parentName:"tr",align:null},"All of the code will be covered by unit and integration test suites with the testing instruction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate module: Identity pallet"),(0,l.kt)("td",{parentName:"tr",align:null},"The identity pallet handles more specific fields of on-chain identity including identity credibility which is calculated by the actions that identity made on-chain such as transactions, dispute rates, dispute decisions... We will also add domain verification to prevent identity impersonation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate module: Resolvers pallet"),(0,l.kt)("td",{parentName:"tr",align:null},"Resolver's application and nomination logic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate module: Dispute resolution pallet"),(0,l.kt)("td",{parentName:"tr",align:null},"Dispute resolution implementation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate chain integration"),(0,l.kt)("td",{parentName:"tr",align:null},"Integrate identity pallet, resolvers pallet and dispute resolution pallet with current chain.")))),(0,l.kt)("h3",{id:"milestone-3--javascript-sdk-implementation"},"Milestone 3 \u2014 Javascript SDK Implementation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 4,000 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"The documentation is about the basic concepts, functions specs, and samples of how to use SDK to integrate with the Libra Network.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing"),(0,l.kt)("td",{parentName:"tr",align:null},"The unit tests and integration tests will cover at least 70% of the code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"CI/CD"),(0,l.kt)("td",{parentName:"tr",align:null},"The lint, tests, and release will run automatically on the Github actions. If a new version is available, it will be published on NPM.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"SDK"),(0,l.kt)("td",{parentName:"tr",align:null},"The set of Javascript libraries and utils that help front-end developers easy to integrate their web app with the Libra network. The specification of the SDK is listed in the project detail session.")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("p",null,"Once three components (LRP protocol, Resolvers Network, JS SDK) are done, we stand on a solid foundation and are ready to scale up."),(0,l.kt)("p",null,"In the short term, we plan to launch the validation and testing phase:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Develop MVPs:")," Based on three core components (LRP protocol, Resolvers Network, JS SDK) that we have done, we will build some sample products such as an online shop, p2p marketplace, one-page checkout, ... These products will let us know what we need to do for the next steps and it also allows end-users to have a chance to interact with the Libra Network test-net and give us the valuable feedback from the end-user perspective."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Build branding and community:")," Community is an important part of a decentralized network. We cannot do anything i.e. build a resolver network without the supports of the community. That is why we put it on the high priority in the short term. ****"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Improvement from the community feedback:")," Once we get valuable feedback, we can improve these components to make them production-ready."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Canary network launch:")," At the end of this phase, we plan to join the Kusama para-chain auction and launch the canary network.")),(0,l.kt)("p",null,"For the long term plan, we will:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Launch Polkadot para-chain"),(0,l.kt)("li",{parentName:"ul"},"Acquire more users and boost the network's GMV (gross merchandise value)"),(0,l.kt)("li",{parentName:"ul"},"Scale up the resolvers networks"),(0,l.kt)("li",{parentName:"ul"},"Develop tools for Libra such as fraud payment detection, API, AI/ML dispute processor, ...")),(0,l.kt)("h2",{id:"additional-information-heavy_plus_sign"},"Additional Information :heavy_plus_sign"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website"))}m.isMDXComponent=!0}}]);