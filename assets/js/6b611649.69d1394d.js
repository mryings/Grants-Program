"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3995],{59378:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(16758);const l={},r="xtokens - XCM Implementation for Fungible Assets",o={unversionedId:"Applications/xtokens",id:"Applications/xtokens",title:"xtokens - XCM Implementation for Fungible Assets",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/docs/Applications/xtokens.md",sourceDirName:"Applications",slug:"/Applications/xtokens",permalink:"/Grants-Program/Applications/xtokens",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Cross-Consensus Messaging Software Development Kit",permalink:"/Grants-Program/Applications/xcm-sdk"},next:{title:"Yatima",permalink:"/Grants-Program/Applications/yatima"}},s={},p=[{value:"Project Overview :page_facing_up",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team Github",id:"team-github",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone \u2014 Implement xtokens PoC",id:"milestone--implement-xtokens-poc",level:3},{value:"Milestone \u2014 Further Implement <code>xtokens</code> according to the XCM Fungible Asset Implementation Guide",id:"milestone--further-implement-xtokens-according-to-the-xcm-fungible-asset-implementation-guide",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information :heavy_plus_sign",id:"additional-information-heavy_plus_sign",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xtokens---xcm-implementation-for-fungible-assets"},"xtokens - XCM Implementation for Fungible Assets"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Acala"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"1Q88PtW866r4bfv2eMphobP78QnsDrRKfY"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.")),(0,i.kt)("h2",{id:"project-overview-page_facing_up"},"Project Overview :page_facing_up"),(0,i.kt)("p",null,"We are creating a XCM Implementation for Fungible Assets - xtokens."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Polkadot Cross-Consensus Message Format (XCM) is a generic message format that is very flexible but loosly defined. Therefore, we need to provide an implementation of required use case e.g. cross-chain transfer, for parachains to be interoperable with the same context, namely send/receive fungible assets between parachains, and between relay chain and parachains. We have developed an implementation guide, as well as a reference implementation ",(0,i.kt)("inlineCode",{parentName:"p"},"xtokens")," that has been used by Acala, Laminar, Plasm, and HydraDX successfully completing cross-chain fungible token transfers on Rococo parachain testnet. We are supporting many more projects including Moonbeam, Centrifuge, PolkaBTC, Darwinia, Kilt, Crust and Snowfork to implement this and enable our chains to be composable with each other."),(0,i.kt)("p",null,"We believe all chains on Polkadot/Kusama shall be composable with each other, from exchanging values to exchanging and altering states. The cross-chain fungible asset implementation is the first step towards this goal."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"We have already delivered the work we outlined in a PoC state, we will continue the development to meet the ",(0,i.kt)("inlineCode",{parentName:"p"},"best practice")," outlined in the implementation guide at a production-grade standard, and this grant is applied partially in retrospect."),(0,i.kt)("p",null,"Below are deliverables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"XCM Fungible Asset Implementation Guide that outlines fungible asset design considerations and discussions, serving as a draft ",(0,i.kt)("inlineCode",{parentName:"li"},"best practice"),". (see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-runtime-module-library/discussions/385"},"here"),")"),(0,i.kt)("li",{parentName:"ul"},"A reference implementation of cross-chain fungible assets - xtokens PoC (see xtokens ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens"},"here")," and xcm-support ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xcm-support"},"here"),")"),(0,i.kt)("li",{parentName:"ul"},"A detailed documentation for other parachains to use these pallets, configure cross-chain assets, open HRMP channels on Rococo to test the cross-chain transfer etc. (see docs ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.acala.network/build/development-guide/composable-chains"},"here"),")"),(0,i.kt)("li",{parentName:"ul"},"Further develop xtokens to implement parachain and fungible asset identifier to handle asset conversion, assetId conversion, and multi-location conversion etc in a more generic and extensible way as described in the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-runtime-module-library/discussions/385"},"implementation guide")),(0,i.kt)("li",{parentName:"ul"},"We will contribute the ",(0,i.kt)("inlineCode",{parentName:"li"},"xtokens")," code to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-runtime-module-library"},"orml (open-runtime-module-library)")," so anyone can use and further extend it.")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"This is another common-good implementation that would be useful to any parachains who want to send and receive fungible assets from other parachains, as well as send/receive relay chain token between relay chain and parachain. We have tackled many XCM and HRMP caveats while implementing ",(0,i.kt)("inlineCode",{parentName:"p"},"xtokens"),", which would save much time for many other projects and accelerate innovations on top of cross-chain value exchange. We also foresee this work will inspire more collaboration and discussion within the parachain ecosystem, and could also inspire similar development for non-fungible assets."),(0,i.kt)("p",null,"We are not aware of other implementations at this stage, but hope to inspire more."),(0,i.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shaun Wang (Lead Developer)"),(0,i.kt)("li",{parentName:"ul"},"Bryan Chen (Architect)"),(0,i.kt)("li",{parentName:"ul"},"Bette Chen (Product Manager) ")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Bette Chen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:bette@acala.network"},"bette@acala.network")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://acala.network/"},"Acala Website"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," 462 Crawford Lane #02-39 Singapore 190462"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," ACALA PTE. LTD.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"The team is made of experienced Substrate builders, various members are contributors to substrate, polkadot-js and other core libraries."),(0,i.kt)("p",null,"Shaun Wang has been contributing to several Polkadot ecosystem open source libraries, including Substrate, parity-common, type-metadata, etc. He has worked extensively on launching Acala on Rococo testnet, implementing xtokens, helping various teams installing xtokens and successfully completing cross-chain transfers."),(0,i.kt)("p",null,"Bryan Chen is one of the most active contributors to substrate codebase outside of Parity, a Polkadot community ambassador, and substrate/polkadot lecturer. He's the architect and technical brainpower behind the Laminar & Acala project."),(0,i.kt)("p",null,"Bette Chen has more than a decade product/program/project management experience with background in Software Engineering and MBA from Otago and Duke. She's in charge of product and operation for Laminar & Acala."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"xtokens: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens"},"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens")),(0,i.kt)("li",{parentName:"ul"},"xcm-support: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xcm-support"},"https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xcm-support"))),(0,i.kt)("h3",{id:"team-github"},"Team Github"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shaun: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/orgs/laminar-protocol/people/shaopengw"},"https://github.com/orgs/laminar-protocol/people/shaopengw")),(0,i.kt)("li",{parentName:"ul"},"Bryan: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/orgs/laminar-protocol/people/xlc"},"https://github.com/orgs/laminar-protocol/people/xlc")),(0,i.kt)("li",{parentName:"ul"},"Bette: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/orgs/laminar-protocol/people/bette7"},"https://github.com/orgs/laminar-protocol/people/bette7"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/bryan-chen-1ba8ba52/"},"https://www.linkedin.com/in/bryan-chen-1ba8ba52/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/bette-chen/"},"https://www.linkedin.com/in/bette-chen/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/shaopeng-wang/"},"https://www.linkedin.com/in/shaopeng-wang/"))),(0,i.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  1.5 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," USD 25k (Payable in BTC)")),(0,i.kt)("h3",{id:"milestone--implement-xtokens-poc"},"Milestone \u2014 Implement xtokens PoC"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," USD 15k")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how to use xtokens")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: ",(0,i.kt)("inlineCode",{parentName:"td"},"xtokens")),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module that will handle cross-chain Account and balance transfers: transfer relay chain token e.g. DOT, transfer parachain tokens to parachain etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: ",(0,i.kt)("inlineCode",{parentName:"td"},"xcm-support")),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module that will provide support functionalities for XCM e.g. convert relay chain decimals to parachain decimals, supports multi-currency, and converts relay chain currencyId to parachain etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Support parachain installing xtoken"),(0,i.kt)("td",{parentName:"tr",align:null},"We will support other parachains to install and test cross-chain fungible token transfer using xtoken, by providing necessary documentation, direct technical support, and trouble shooting.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,i.kt)("td",{parentName:"tr",align:null},"We will write a tutorial that explains the work done as part of the grant.")))),(0,i.kt)("h3",{id:"milestone--further-implement-xtokens-according-to-the-xcm-fungible-asset-implementation-guide"},"Milestone \u2014 Further Implement ",(0,i.kt)("inlineCode",{parentName:"h3"},"xtokens")," according to the XCM Fungible Asset Implementation Guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," USD 10k")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how to use xtokens")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: ",(0,i.kt)("inlineCode",{parentName:"td"},"xtokens")),(0,i.kt)("td",{parentName:"tr",align:null},"We will extend ",(0,i.kt)("inlineCode",{parentName:"td"},"xtokens")," to include parachain fungible asset multi location mapping with parachainId as the namespace (in PoC it's just string identifiers), Asset Transactor to handle fungible asset balances and operations, Location Conversion to map multi-location and accountId, AssetId Conversion to map foreign multi-asset to native parachain assetId/currencyId and vice versa")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: ",(0,i.kt)("inlineCode",{parentName:"td"},"xcm-support")),(0,i.kt)("td",{parentName:"tr",align:null},"We will extend ",(0,i.kt)("inlineCode",{parentName:"td"},"xcm-support")," to support the added operations from #1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,i.kt)("td",{parentName:"tr",align:null},"We will write a tutorial that explains the work done as part of the grant.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"This is only the beginning of shaping up specific use cases of XCM, we will continue to improve fungible asset implementations so its generic enough for most if not all parachains. This work is likely to inspire non-fungible asset implementations, and we'd also be keen to contribute further as well."),(0,i.kt)("h2",{id:"additional-information-heavy_plus_sign"},"Additional Information :heavy_plus_sign"),(0,i.kt)("p",null,"Possible additional information to include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"xtokens")," PoC has been implemented on multiple parachains on Rcococ, Plasm was the first amongst them, and ",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/acalanetwork/the-first-successful-cross-chain-messaging-passing-xcmp-transaction-on-polkadot-testnet-eb36af2ad8c3?source=collection_home---4------1-----------------------"},"here")," is the article describing it."),(0,i.kt)("li",{parentName:"ul"},"Are there are any teams who have already contributed (financially) to the project? Just Acala."),(0,i.kt)("li",{parentName:"ul"},"Have you applied for other grants so far? Yes, we have a grant for stablecoin that has been completed. We also have a grant for a Substrate composable EVM, of which the first milestone has been delivered.")))}u.isMDXComponent=!0}}]);