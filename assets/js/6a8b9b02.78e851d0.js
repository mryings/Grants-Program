"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[147],{79421:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(16758);const i={},o="Keysafe Network",l={unversionedId:"Applications/keysafe_network",id:"Applications/keysafe_network",title:"Keysafe Network",description:"- Team Name: Keysafe",source:"@site/docs/Applications/keysafe_network.md",sourceDirName:"Applications",slug:"/Applications/keysafe_network",permalink:"/Grants-Program/Applications/keysafe_network",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"polkadot-java-client",permalink:"/Grants-Program/Applications/java-client"},next:{title:"Klevoya - Substrate WASM Smart Contract Fuzzer",permalink:"/Grants-Program/Applications/klevoya_fuzzer"}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Background",id:"background",level:4},{value:"Description",id:"description",level:4},{value:"Our solution",id:"our-solution",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Documentations",id:"documentations",level:4},{value:"POC",id:"poc",level:4},{value:"Technology Stack",id:"technology-stack",level:4},{value:"Scope",id:"scope",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement On-chain Modules",id:"milestone-1--implement-on-chain-modules",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keysafe-network"},"Keysafe Network"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Keysafe"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x09C08f46d523822cC9D18A077e2e3BDE5BC07a0b (Ethereum (USDT)) "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"This grant is for the RFP ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md"},"Social Recovery Wallet")),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("h4",{id:"background"},"Background"),(0,r.kt)("p",null,"As the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md"},"RFP"),' mentioned: "managing private keys is a difficult task." A secure, simple and user-friendly private key management solution has not yet appeared in the Web3 world. Most typical Web3 users do not have the ability to properly safeguard and manage private keys to their crypto assets and Web3 identities. Based on a latest research by ChainAnalysis, the number of lost bitcoins due to account loss has reached 3.79 million($150 billion).'),(0,r.kt)("p",null,"We are thus inspired and encouraged by this initiatives and create Keysafe, a decentralized key custody network together with its underlying protocols, to offer a solution that aims to keep private keys safe and 'alive' in a user-friendly way for all Web3 users."),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Keysafe is a decentralized protocol for private key backup, retrieval, and access management. Keysafe allows users to register their keys with multiple authentications (SMS, email, etc.) and access their keys from anywhere in the world securely without carrying specific devices that store them."),(0,r.kt)("h4",{id:"our-solution"},"Our solution"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/keysafe-protocol/documents/main/network_structure.png",alt:"architecture"})),(0,r.kt)("p",null,"Keysafe Protocol uses Secure Multi-party Computation (MPC), Threshold BLS Signatures, and Trusted Execution Environment (TEE) technology to manage private keys and allows owners to access with a customized combination of Web2 third-party authentication services including SMS, email, Google Auth, and even another Web3 address."),(0,r.kt)("p",null,"When a private key is registered in Keysafe Network, the key will be divided into multiple fragments by a threshold secret sharing scheme on user's local device and then sent to randomly appointed TEE nodes in encrypted forms. Each fragment is bound to an authentication condition set by the user, i.e. SMS, email, Google authentication, etc. The private key fragments and the corresponding authentication info will be safely stored in Keysafe's decentralized network of TEE nodes - even the TEE enclave are not allowed to read the data."),(0,r.kt)("p",null,"When a user wants to access his or her registered private keys from Keysafe Network, the TEE nodes who are in charge of each fragment will initiate an authentication task, i.e. sending a verification SMS or email, according to the authentication info bound to the fragment. After passing the authentication process, the user is allowed to access his or her private keys, which can be a key retrieval, a remote Sig generation, a remote Tx generation, or a modification on the registered data."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("h4",{id:"documentations"},"Documentations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Project overview PPT ",(0,r.kt)("a",{parentName:"li",href:"https://docsend.com/view/b9yhcs36z2i33755"},"here")),(0,r.kt)("li",{parentName:"ul"},"Technical whitepaper ",(0,r.kt)("a",{parentName:"li",href:"https://docsend.com/view/bsb8xf4hbrw422gy"},"here")),(0,r.kt)("li",{parentName:"ul"},"API specifications ",(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1DuewxMxVOSB9H6i45FzP71ALR5c6LeDE4Zzg8svlWcw/edit?usp=sharing"},"here"))),(0,r.kt)("h4",{id:"poc"},"POC"),(0,r.kt)("p",null,"We have completed a proof-of-concept to verify the feasibility of our solutions ",(0,r.kt)("a",{parentName:"p",href:"https://demo.keysafe.network"},"here"),"."),(0,r.kt)("h4",{id:"technology-stack"},"Technology Stack"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The TEE (Trusted Execution Environment) technology: TEE guarantees secrets to be protected with respect to confidentiality and integrity from a hardware level."),(0,r.kt)("li",{parentName:"ul"},"Secret Sharing algorithm: Based on the M-of-N Threshold Secret Sharing algorithm, privates key can be divided into N shares, and can be later restored as long as M shares are obtained."),(0,r.kt)("li",{parentName:"ul"},"BLS-MPC: Based on MPC and BLS algorithms, users can manage nodes to complete threshold signatures with their stored private key fragments."),(0,r.kt)("li",{parentName:"ul"},"The Node: Keysafe Network is made up of many distributed Nodes with TEE inside. Private key fragments are stored safely in the node's TEE enclave."),(0,r.kt)("li",{parentName:"ul"},"Web2 + Web3 authentications: The user can authenticate through Web2 or/and Web3 methods (including SMS, emails, social media accounts and Web3 accounts) to access his or her registered private keys.")),(0,r.kt)("h4",{id:"scope"},"Scope"),(0,r.kt)("p",null,"There are a lot of tasks involved to get all of these into a product-ready state which is what we are always aiming for, but it'd be too extensive to fit all of the tasks into this one single open grant. Therefore, we have carved out a scope specifically for this grant, followed by the details of the future tasks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Grant scope")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Develop TEE module(written in C++) that supports basic private key transfer and management functions."),(0,r.kt)("li",{parentName:"ul"},"Develop off-chain node program(written in Rust) that coordinating with TEE module."),(0,r.kt)("li",{parentName:"ul"},"Develop on-chain protocol (written in ink! smart contract) that organizes all TEE nodes into a functioning network."),(0,r.kt)("li",{parentName:"ul"},"Develop a key management tool with Web-UI (written in JS) that supports Ethereum and Polkadot accounts."),(0,r.kt)("li",{parentName:"ul"},"Implement a hybrid authentication mode that includes mailbox, password, Google 2FA, and Polkadot account."),(0,r.kt)("li",{parentName:"ul"},"Contribute SDKs for polkadot-js or polkadot-apps, so that polkadot users can use Keysafe Network to backup, recover and manage their substrate-based keys.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Future development")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implement more functions in TEE, such as MPC signature and access delegation."),(0,r.kt)("li",{parentName:"ul"},"Accept nodes endorsed by more organizations."),(0,r.kt)("li",{parentName:"ul"},"Support more authentication methods such as google sign-in"),(0,r.kt)("li",{parentName:"ul"},"Develop more Adapter SDKs, compatible with all users of the Substrate ecosystem.")),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generally, Keysafe Network provides decentralized and distributed private key custody with recovery and remote access compatibility with multi-factor auth for all potential web3 users."),(0,r.kt)("li",{parentName:"ul"},"By integrating Polkadot-JS and other libraries if needed, Keysafe Network provides key management for all kinds of accounts/address in the Substrate/Polkadot ecosystem."),(0,r.kt)("li",{parentName:"ul"},"Dapps and their users will greatly benefit from the decentralized key custody service from Keysafe Network:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No more worrying about losing private keys and corresponding crypto assets for their accounts;"),(0,r.kt)("li",{parentName:"ul"},"They can now easily migrate their private keys to new devices without copying private keys or seedphrases in plaintext and risking themselves of accidentally exposing them to attackers."),(0,r.kt)("li",{parentName:"ul"},"They can remotely access their accounts and generate signatures/transactions with multi-factor social auths, from devices that don't have private keys stored locally."))),(0,r.kt)("li",{parentName:"ul"},"Futhermore, as long as Keysafe Network integrates libraries/SDKs from other ecosystem/blockchains, our users enjoy one-stop cross-platform management for their keys, accounts as well as assets held by the accounts."),(0,r.kt)("li",{parentName:"ul"},"Keysafe Network can be easily integrated into all kinds of Dapps (i.e. wallets, De-Fi protocols, GameFi projects) so that they can offer their users with a 'Log in with Keysafe' option inside their user interface. Since Keysafe's login style is significantly more friendly to new web3 users who are expectedly much familier with social auth, both Dapps and Keysafe Network realize a win-win situation from these integrations.")),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name of team leader: Dean Yan"),(0,r.kt)("li",{parentName:"ul"},"Names of team members: Mingshi Song, Yan Jiang")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Dean Yan"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:yyd106@gmail.com"},"yyd106@gmail.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dean-yan-717784100/"},"https://www.linkedin.com/in/dean-yan-717784100/"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No legal entity yet")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dean is the author of technical whitepaper of ",(0,r.kt)("a",{parentName:"li",href:"https://crust.network/"},"Crust Network")),(0,r.kt)("li",{parentName:"ul"},"Mingshi is the incubation program leader of ",(0,r.kt)("a",{parentName:"li",href:"https://astar.network/"},"Astar Network")),(0,r.kt)("li",{parentName:"ul"},"We once won the third prize at ",(0,r.kt)("a",{parentName:"li",href:"https://web3-hackathon.com/"},"Web3-hackathon")," with the idea of \u200b\u200bKeysafe")),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/keysafe-protocol"},"https://github.com/keysafe-protocol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/keysafe-protocol/keysafe-front"},"https://github.com/keysafe-protocol/keysafe-front")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/keysafe-protocol/ks-sgx"},"https://github.com/keysafe-protocol/ks-sgx"))),(0,r.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/keysafe-protocol/people/yyd106"},"https://github.com/orgs/keysafe-protocol/people/yyd106")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/keysafe-protocol/people/jarodzz"},"https://github.com/orgs/keysafe-protocol/people/jarodzz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/keysafe-protocol/people/newnewsms"},"https://github.com/orgs/keysafe-protocol/people/newnewsms"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dean-yan-717784100/"},"https://www.linkedin.com/in/dean-yan-717784100/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/yan-jiang-97512455/"},"https://www.linkedin.com/in/yan-jiang-97512455/"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"We completed a ",(0,r.kt)("a",{parentName:"p",href:"https://demo.keysafe.network/"},"prototype system")," to verify technical feasibility.\nThe relevant ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/social-recovery-wallet.md"},"RFP is here")),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," $27,000 (payable in Ethereum-USDT)")),(0,r.kt)("h3",{id:"milestone-1--implement-on-chain-modules"},"Milestone 1 \u2014 Implement On-chain Modules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 15,000USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can use Keysafe.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Core Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,r.kt)("inlineCode",{parentName:"td"},"nodeRegister")," ",(0,r.kt)("inlineCode",{parentName:"td"},"userRegister")," ",(0,r.kt)("inlineCode",{parentName:"td"},"userAuthentication")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"keyRecovery")," functions for Node program written in Rust.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"TEE Implementation"),(0,r.kt)("td",{parentName:"tr",align:null},"Implements the ",(0,r.kt)("inlineCode",{parentName:"td"},"nodeRegister")," ",(0,r.kt)("inlineCode",{parentName:"td"},"userRegister")," ",(0,r.kt)("inlineCode",{parentName:"td"},"userAuthentication")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"keyRecovery")," functions for TEE part written in C++.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Smart Contract"),(0,r.kt)("td",{parentName:"tr",align:null},"Implements and test for the !ink smart contracts used for ",(0,r.kt)("inlineCode",{parentName:"td"},"nodeRegister")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"userRegister"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Web Server"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide meta-data management service for Keysafe users written in Rust, users can manage keys and authentication methods")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Polkadot.js"),(0,r.kt)("td",{parentName:"tr",align:null},"Add in encryption/decryption functionality to ",(0,r.kt)("inlineCode",{parentName:"td"},"@polkadot/keyring")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"@polkadot/extension")," so that the protocol can run without the needs to read the private key of users.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 12,000USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a project can integrate the Keysafe Protocol into their project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"MPMC(Multi-Party-Multi-Cloud)"),(0,r.kt)("td",{parentName:"tr",align:null},"Cooperation with multiple institutions, different institutions run Keysafe nodes on different cloud vendors. Decentralizing the Keysafe Network.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Keysafe SDK"),(0,r.kt)("td",{parentName:"tr",align:null},"Develop the Keysafe SDK and the corresponding Adapters written in JS, so that the projects in Polkadot ecosystem can integrate Keysafe to provide users with a secured private key backup and recovery function.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Support mainstream authentication methods"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide multiple authentication methods for user key recovery, such as Ethereum wallet, Polkadot wallet, email and other authentication methods.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implement more functions in TEE, such as MPC signature and access delegation"),(0,r.kt)("li",{parentName:"ul"},"Accept nodes endorsed by more organizations"),(0,r.kt)("li",{parentName:"ul"},"Support more authentication methods such as google sign-in"),(0,r.kt)("li",{parentName:"ul"},"Develop more Adapter SDKs, compatible with all users of the Substrate ecosystem")),(0,r.kt)("p",null,"As a long-term business model, we have following plans to make Keysafe powerful and secure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We will support more TEE implementations, such as Trusted Zone of ARM, SEV of AMD;"),(0,r.kt)("li",{parentName:"ul"},"We will explore more possibilities as Keysafe Lego, including AML integrations, Web3 social graph, and decentralized access management;")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Announcement by another team"),(0,r.kt)("p",null,"Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:"),(0,r.kt)("p",null,"Dean's Crust Network and Mingshi's Astart Network are both projects of Web3 Grants."))}m.isMDXComponent=!0}}]);