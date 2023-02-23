"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3184],{4353:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));a(8209);const r={},i="pallet-maci",o={unversionedId:"applications/pallet_maci",id:"applications/pallet_maci",title:"pallet-maci",description:"Proposer//github.com/MVPWorkshop",source:"@site/applications/pallet_maci.md",sourceDirName:"applications",slug:"/applications/pallet_maci",permalink:"/Grants-Program/applications/pallet_maci",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/pallet_maci.md",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:2},{value:"Technology Stack",id:"technology-stack",level:3},{value:"Ecosystem fit",id:"ecosystem-fit",level:3},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team code repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Pallet logic",id:"milestone-1---pallet-logic",level:3},{value:"Milestone 2 - ZK Circuits",id:"milestone-2---zk-circuits",level:3},{value:"Milestone 3 - CLI and Promotion",id:"milestone-3---cli-and-promotion",level:3},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future plans",id:"future-plans",level:3}],m={toc:s},u="wrapper";function d(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pallet-maci"},"pallet-maci"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Proposer:")," MVP Workshop - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/MVPWorkshop"},"https://github.com/MVPWorkshop")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 0x57bc8af36A7E900C438B0652ff2EEb24954a3e6d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Status:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/232#issuecomment-942292877"},"Terminated"))),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("p",null,"This application is a response to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/rfp-proposal/on-chain-quadratic-funding.md"},"On-chain Quadratic Funding RfP")),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Please provide the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A brief description of the project.")),(0,l.kt)("p",null,"There are numerous crowdfunding platforms dedicated to boosting the development and growth of different blockchains and their communities. One of the most famous ones is Gitcoin.co, which has had a significant influence on the Ethereum ecosystem's development."),(0,l.kt)("p",null,"Some of them are based on the quadratic funding mechanism, which became one of the fairest and most efficient ways to allocate funds to a sufficient number of projects that contribute to the ecosystem. "),(0,l.kt)("p",null,"However, a similar solution hasn't been developed for the substrate-based blockchains. Thus, we want to create one. Moreover, we want to create a package that will include quadratic funding, user registry, and maci pallets and in addition to that first substrate-based crowdfunding platform. Thereby we will offer a finished solution that anyone can use to collect and allocate funds among different projects within their ecosystems."),(0,l.kt)("p",null,'This proposal is the first step as we primarily want to create a "MACI" (Minimal Anti Collusion Infrastructure) pallet that will help us to prevent collusion. Once we are finished with this pallet, we will move to the next step that will be pallet-user-registry.'),(0,l.kt)("p",null,"More information about our long term plan you can find in the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1ogj8S1NpsdqgGKP9dF4rinQEgfk3BH5IoOVKvFaPOjM/edit#heading=h.dydg2sazp5h8"},"document"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An indication of how you will integrate this project into Substrate / Polkadot / Kusama.")),(0,l.kt)("p",null,"This is a regular pallet that can be merged into any substrate-based blockchain.\nIn the long run, once we develop the crowdfunding platform,  we aim to integrate this solution into Kusama and potentially Polkadot, so a portion of treasury funds can be allocated to the projects chosen by the community through this platform. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An indication of why your team is interested in creating this project.")),(0,l.kt)("p",null,"We have been developing numerous products on the other blockchain infrastructures such as Ethereum and Stellar. Starting from last year, we decided to focus our time and efforts more on the substrate ecosystem. Hence, we became a member of the Substrate Delivery Partners program, and a few of our team members became Polkadot ambassadors. Also, we hosted an online Substrate event - ",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=dJLUO7s-n3M&t=2s"},"link")),(0,l.kt)("p",null,"Recently we finished another web3 grant that we had been working on - Substrate Blockchain Starter Kit - ",(0,l.kt)("a",{parentName:"p",href:"https://substrate-starterkit.mvpworkshop.co/#/"},"link"),"."),(0,l.kt)("p",null,"This year, we aim to dedicate even more time to substrate-based projects, especially those that can benefit the community. That\u2019s why we got interested in creating the first substrate crowdfunding platform. "),(0,l.kt)("p",null,"Also, we find it interesting to work on the solution (pallet) that will prevent collusion."),(0,l.kt)("h1",{id:"project-details"},"Project details"),(0,l.kt)("h3",{id:"technology-stack"},"Technology Stack"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pallet-maci"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Preventing collusion:")),(0,l.kt)("p",null,"There are various problems in any kind of democratic environment, such as bribery, private key selling, physically threatening, and similar. To prevent, or at least make it very hard to do so, the platform will implement a MACI (Minimum Anti-Collusion Infrastructure) solution very similar to the one found on the Ethereum ecosystem. It will be implemented in the form of another pallet which will be plugged into the main quadratic funding pallet."),(0,l.kt)("p",null,"The MACI pallet, as presented in the roadmap of the application, is the first step in building the Quadratic funding platform. One of the first problems we have to solve, before a trustless, fair and decentralized crowdfunding platform leveraging CLR algorithm are vote bribery and user collusion."),(0,l.kt)("p",null,"The pallet's main task is tracking the state of user votes in anonymous and secure way while making sure the zk proofs are correct and cannot be compromised by any party."),(0,l.kt)("p",null,'We are going to need to limit the possibility, effectiveness and reliability of any methods used to "buy" a "vote".',(0,l.kt)("br",{parentName:"p"}),"\n","To do that, the pallet will have to utilize zero knowledge proofs.",(0,l.kt)("br",{parentName:"p"}),"\n","Mostly based on the design originating from ",(0,l.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413"},"this thread"),", the pallet will use zk-SNARKs. The most similar contender for you to see what we're going to build would be the Ethereum ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/appliedzkp/maci"},"implementation")," of the MACI design."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Pallet interface")),(0,l.kt)("p",null,"Rough glimpse of how the public methods of the pallet will look like. The interactions of all actors and guide to function usage can be seen on ",(0,l.kt)("a",{parentName:"p",href:"https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgcGFsbGV0IG1hY2kKCmFjdG9yIFVzZXIKcGFydGljaXBhbnQAHAhNQUNJAAsNQ29vcmRpbmF0bwAiDk9mZmNoYWluIGNvbXB1dGVyCgpub3RlIGxlZnQgb2YAWwZUaGUgY29udHJpYnV0b3Igd2hpY2ggaXMgCmdvaW5nIHRvIG1ha2UgYSB2b3RlCmVuZCBub3RlAEQHb3ZlcgBzDUVudGl0eQA_B2MAgREIZXMKdm90aW5nIHJvdW5kcyBhbmQgZ2VuZXJhdGVkIHprcHMATwsAgUULLT4AgWoLOiBuZXdWAEMFUm91bmQoKQoKb3B0IElmAGAKb3Igd2FudHMgdG8gY2hhbmdlIHRoZSBwdWJsaWMga2V5AEMbdXBkYXRlAIJDCygpAIFrBW9wdAoKVXNlAH4Qc2lnblVwKCkKCmxvb3AAgysFcwCCIAYAgx8LLS0-VXNlcjogZ2V0AIMeC1AAgQwFS2V5KCkARxR2b3RlKCkAgykGcmlnaACDJgpVc2VyIGNhbgCBVghoaQBuBiBhdCBhbnkgdGltZQphbmQgdGh1cyBjaGVhdACBfQVicmliZXIAgzYKZW5kIGxvb3AAglMcZW5kAIJhDgCDXxUsAIUMDVRoZSAAg2UHaGFzIGVuZGVkAIQtCSAKCgCFBBEtLT4AhTYLOiBwcm9jZXNzVm90ZXMoKQCDchsAg08Fc2hOZXdNZXNzYWdlU3RhAIIsCgCFFQUAhicLLACFfBMAhi4LAG8IZWQgbQBIBgCFHwYAXgdlZCBuZXcgc3RhAIV3DQCBLCF0YWxseQCBIilWb3RlVGFsbHkAgRksVm90ZQBiBgCBIwoAhxwLAIRJFGVyaWYAgQ0JAIVGE3RvdGFsAIJ5CACHXgoAhHIObm93AEMHAIZdBXZhbGlkaXR5IG9mAIglBXMgAIUBBWNoZWNrIG91AIR_Bm51bWJlcgAZCmV2ZXJ5b25lIGdvdACIUQo&s=rose"},"this diagram"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Functions:"),(0,l.kt)("br",{parentName:"p"}),"\n","Used for creating a new voting round\n",(0,l.kt)("inlineCode",{parentName:"p"},"newVotingRound(coordinator): roundId")),(0,l.kt)("p",null,"Used to end an active voting round\n",(0,l.kt)("inlineCode",{parentName:"p"},"endVotingRound(roundId)")),(0,l.kt)("p",null,"Coordinator address can be updated\n",(0,l.kt)("inlineCode",{parentName:"p"},"updateCoordinator(roundId)")),(0,l.kt)("p",null,"Used to signup users to current round\n",(0,l.kt)("inlineCode",{parentName:"p"},"signUp(roundId)")),(0,l.kt)("p",null,"Used by users to vote\n",(0,l.kt)("inlineCode",{parentName:"p"},"vote(roundId, optionId)")),(0,l.kt)("p",null,"Used by coordinator after generating a zero knowledge proof of\ngenuinity of vote state\n",(0,l.kt)("inlineCode",{parentName:"p"},"publishNewMessageState(roundId, stateRoot, proof)")),(0,l.kt)("p",null,"Used by coordinator to prove which party got how many votes\n",(0,l.kt)("inlineCode",{parentName:"p"},"publishVoteTally(roundId, proof)")),(0,l.kt)("p",null,"Used to verify the genuinity of the proof\n",(0,l.kt)("inlineCode",{parentName:"p"},"verifyVotes(roundId)")),(0,l.kt)("p",null,"Used to check the total number of votes of parties\n",(0,l.kt)("inlineCode",{parentName:"p"},"totalVotes(roundId)")),(0,l.kt)("p",null,"Getter functions\n",(0,l.kt)("inlineCode",{parentName:"p"},"getCoordinatorPublicKey(roundId)"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"getTallyHash(roundId)")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Config:"),(0,l.kt)("br",{parentName:"p"}),"\n","Origins which will be allowed to interact with certain functions of the pallet. This allows some implementations to levearge another pallet such as collective and have democratic processes of signup, coordination and such.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"SignupOrigin"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"VoteOrigin"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"CoordinatorOrigin")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"State:"),(0,l.kt)("br",{parentName:"p"}),"\n","Merkle trees containing data about votes",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"MessageTree")," // This one is updated by the users",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"StateTree")," // This one is updated by the coordinator"),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem fit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Are there any other projects similar to yours? If so, how is your project different?",(0,l.kt)("br",{parentName:"li"}),"There is no such pallet that supports Minimal anti collusion infrastructure.")),(0,l.kt)("h1",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Name of team leader: Filip Pajic"),(0,l.kt)("li",{parentName:"ul"},"Names of team members: Vuksan Simunovic, Filip Pajic, Andrej Rakic.")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("p",null,"Contact Name: Filip Pajic",(0,l.kt)("br",{parentName:"p"}),"\n","Contact Email: ",(0,l.kt)("a",{parentName:"p",href:"mailto:filip.pajic@mvpworkshop.co"},"filip.pajic@mvpworkshop.co"),(0,l.kt)("br",{parentName:"p"}),"\n","Website: ",(0,l.kt)("a",{parentName:"p",href:"https://mvpworkshop.co/"},"https://mvpworkshop.co/")),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("p",null,"Registered Address: Cara Du\u0161ana 51 Zemun, Republic of Serbia",(0,l.kt)("br",{parentName:"p"}),"\n","Registered Legal Entity: MVP Workshop doo"),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"The team consists of Blockchain pioneers who worked on various blockchain projects throughout the years and contributed to the community through education.\nSome of the most notable publications, projects, and technologies that the team members worked on, we will list below."),(0,l.kt)("p",null,"Publications:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mvpworkshop.co/blog/the-kusama-approach/"},"The Kusama Approach")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mvpworkshop.co/blog/moonbase-alpha-deployment/"},"Moonbase Alpha Deploy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mvpworkshop.co/blog/exploring-rust-5-reasons-why-you-should-check-it-out/"},"Exploring Rust")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blockonomi.com/create-ethereum-token/"},"ERC20 Tokens")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blockonomi.com/solidity-tutorial/"},"Introduction to Solidity")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/mvp-workshop/electionr-1d141c45d3eb"},"Custom POS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/andrejrakic/100-blockchain-developer-resources"},"Blockchain Developer resources")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mvpworkshop.co/blog/introducing-timestampphy-trustless-photo-timestamping-tool/"},"Trustless notary"))),(0,l.kt)("p",null,"Projects:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/andrejrakic/zokrates-demo"},"Zero-Knowledge demo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/MVPWorkshop/substrate-startkit-gui-api"},"Substrate Blockchain builder")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/MVPWorkshop/substrate-quadratic-democracy"},"Substrate pallet - Quadratic democracy"))),(0,l.kt)("p",null,"Technologies:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rust"),(0,l.kt)("li",{parentName:"ul"},"Typescript"),(0,l.kt)("li",{parentName:"ul"},"Substrate"),(0,l.kt)("li",{parentName:"ul"},"Ethereum"),(0,l.kt)("li",{parentName:"ul"},"Solidity")),(0,l.kt)("p",null,"Substrate related experience:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Moonbeam - we have partnered with Moonbeam and we are currently working on a project that should be deployed on the Moonbeam in the near future. Due to privacy and confidentiality, we can not share the name of the project."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/MVPWorkshop/substrate-startkit-gui-api"},"Substrate Blockchain builder")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/MVPWorkshop/substrate-quadratic-democracy"},"Substrate pallet - Quadratic democracy"))),(0,l.kt)("h3",{id:"team-code-repos"},"Team code repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/andrejrakic"},"https://github.com/andrejrakic")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/Vuksan"},"https://github.com/Vuksan")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pajicf"},"https://github.com/pajicf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/MVPWorkshop"},"https://github.com/MVPWorkshop")," - All the code will be stored in the MVP Workshop repository")),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/vuksansimunovic/"},"https://www.linkedin.com/in/vuksansimunovic/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/andrejrakic/"},"https://www.linkedin.com/in/andrejrakic/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/pajicf/"},"https://www.linkedin.com/in/pajicf/"))),(0,l.kt)("h1",{id:"development-roadmap"},"Development roadmap"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("p",null,"Total Estimated Duration: 4 months",(0,l.kt)("br",{parentName:"p"}),"\n","Full-time equivalent (FTE): 2.5 FTE",(0,l.kt)("br",{parentName:"p"}),"\n","Total Costs: 27.000 DAI"),(0,l.kt)("h3",{id:"milestone-1---pallet-logic"},"Milestone 1 - Pallet logic"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Estimated duration: 2 months"),(0,l.kt)("li",{parentName:"ul"},"FTE: 2.5"),(0,l.kt)("li",{parentName:"ul"},"Costs: 12.000 DAI"),(0,l.kt)("li",{parentName:"ul"},"Description: Pallet written in Rust for Substrate 2.0 based blockchains. The pallet will be the implementation of Minimal Anti-Collusion Infrastructure (MACI) which leverages ZKPs")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Code documentation, API reference")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Usage example"),(0,l.kt)("td",{parentName:"tr",align:null},"Example of how to use the pallet inside code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Tests"),(0,l.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide, we will describe how to run these tests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Merkle tree handling"),(0,l.kt)("td",{parentName:"tr",align:null},"messageTree (submitted by users) and stateTree (mapping keys and votes) maintenance and update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Cryptographic operations"),(0,l.kt)("td",{parentName:"tr",align:null},"To sign and encrypt a message: Generate an ECDH shared key, hash and sign EdDSA private key, Signatures validation mechanism")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Voice credit management"),(0,l.kt)("td",{parentName:"tr",align:null},"Determination of user voice credit amount assignment, weight of credits for vote calculations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Voting mechanism"),(0,l.kt)("td",{parentName:"tr",align:null},"Vote publishing, Message processing and publishing (It verifies the proof, updates the processed message counter, and updates the state root in storage with newStateRoot), vote tally verification")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6."),(0,l.kt)("td",{parentName:"tr",align:null},"Account management"),(0,l.kt)("td",{parentName:"tr",align:null},"Participant registration, Coordinator origin update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7."),(0,l.kt)("td",{parentName:"tr",align:null},"ZeroPool integration"),(0,l.kt)("td",{parentName:"tr",align:null},"Integrate ZeroPool Substrate pallet for verifying circuits")))),(0,l.kt)("h3",{id:"milestone-2---zk-circuits"},"Milestone 2 - ZK Circuits"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Estimated duration: 1 months"),(0,l.kt)("li",{parentName:"ul"},"FTE: 2.5"),(0,l.kt)("li",{parentName:"ul"},"Costs: 9.000 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation explaining the circuits and their purpose")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"State tree update"),(0,l.kt)("td",{parentName:"tr",align:null},"Circuit to prove the correctness of each state root, define public/private inputs, write circuits pseudocode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Vote tally"),(0,l.kt)("td",{parentName:"tr",align:null},"Circuit which proves that they have correctly tallied all the votes, define public/private inputs, write circuits pseudocode")))),(0,l.kt)("h3",{id:"milestone-3---cli-and-promotion"},"Milestone 3 - CLI and Promotion"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Estimated duration: 1 months"),(0,l.kt)("li",{parentName:"ul"},"FTE: 2.5"),(0,l.kt)("li",{parentName:"ul"},"Costs: 6.000 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Explanation how to use the CLI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Operation tools"),(0,l.kt)("td",{parentName:"tr",align:null},"Scripts written in Typescript used to perform offchain tasks needed to operate the platform and interface with the pallet. (Coordinator: newElection, generateProofs, submitProofs; User: register, vote )")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Pallet showcase"),(0,l.kt)("td",{parentName:"tr",align:null},"Code repo with the node-template which contains the pallet implementation used to showcase the pallet and its usage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Blog post"),(0,l.kt)("td",{parentName:"tr",align:null},"The blog post that explains what and how we built")))),(0,l.kt)("h3",{id:"community-engagement"},"Community engagement"),(0,l.kt)("p",null,"We will create a blog post as a part of the milestone we submit, explaining what and how we built it."),(0,l.kt)("h3",{id:"future-plans"},"Future plans"),(0,l.kt)("p",null,"As we mentioned, this is only the beginning and the first step in the process of creating a first substrate-based crowdfunding platform. After we finish with the maci-pallet, we will move to the pallet-user-registry and after that to the pallet-quadratic-funding and finally work platform (UI)."),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pallet-user-registry"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Preventing pseudonymous identities (Sybil resistance):")),(0,l.kt)("p",null,"For the platform to be credible and for funds to be matched fairly, no user should be able to fund some good more than once. It should be easy for a user to create his identity but very hard to create a pseudo-identity."),(0,l.kt)("p",null,"The quadratic funding pallet will be agnostic of verified user identities. Those will be plugged in the form of another pallet that implements specific interfaces.\nThis registry will be implemented in one of these 2 forms:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Some collectively managed registry of whitelisted users"),(0,l.kt)("li",{parentName:"ul"},"Some permissionless registry that uses a 3rd party service such as ",(0,l.kt)("strong",{parentName:"li"},"BrightID"))),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pallet-quadratic-funding"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Algorithm for calculating funds:")),(0,l.kt)("p",null,"As explained by Vitalik B. in ",(0,l.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2019/12/07/quadratic.html"},"this")," blog post, some voting methods will favor plutocracy while some others will neglect the range of support or disproving of creating good.\nQuadratic funding seems like the best fit for aggregating people's preferences for funding some public goods, so the platform will implement the ",(0,l.kt)("strong",{parentName:"p"},"Constrained Liberal Radicalism algorithm")," (Quadratic funding) for calculating the funds for a specific project."),(0,l.kt)("p",null,"Bellow are all the components that have to be developed before the platform is ready for use:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Components overview"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Web App"),(0,l.kt)("td",{parentName:"tr",align:null},"The GUI used to present funding data to the users in an easy way.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pallet-quadratic-funding"),(0,l.kt)("td",{parentName:"tr",align:null},"The pallet will contain business logic and data of the funding campaigns and be used to operate the platform.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pallet-user-registry"),(0,l.kt)("td",{parentName:"tr",align:null},"Pallet used to manage verified users of the platform to prevent any potential Sybil attacks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pallet-maci"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum Anti-Collusion Infrastructure implementation for substrate-based chains")))),(0,l.kt)("h1",{id:"additional-information"},"Additional information"),(0,l.kt)("p",null,"Any additional information that you think is relevant to this application that hasn't already been included."),(0,l.kt)("p",null,"Possible additional information to include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Are there are any teams who have already contributed (financially) to the project?"),(0,l.kt)("br",{parentName:"p"}),"\n","There are no other teams that have already contributed to this project.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Have you applied for other grants so far?"),(0,l.kt)("br",{parentName:"p"}),"\n","We haven\u2019t applied for other grants."))))}d.isMDXComponent=!0}}]);