"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3529],{27063:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(8209);const o={},i="Uke Messaging - PoC - Phase 1",r={unversionedId:"applications/uke",id:"applications/uke",title:"Uke Messaging - PoC - Phase 1",description:"See the Grants Program Process on how to submit a proposal.",source:"@site/applications/uke.md",sourceDirName:"applications",slug:"/applications/uke",permalink:"/Grants-Program/applications/uke",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/uke.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team",id:"team",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status",id:"development-status",level:2},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement ink! Human DNS &amp; Account Rules Contracts",id:"milestone-1--implement-ink-human-dns--account-rules-contracts",level:3},{value:"Milestone 2 \u2014 Front-end completion, Substrate &amp; polkadot.js integration into Ionic App",id:"milestone-2--front-end-completion-substrate--polkadotjs-integration-into-ionic-app",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"uke-messaging---poc---phase-1"},"Uke Messaging - PoC - Phase 1"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"See the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/#pencil-process"},"Grants Program Process")," on how to submit a proposal.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," Uke"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," bc1qttjsaqr0m8sxm46wnfdupzpl6rjemts3uxsuu5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Level:")," 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Status:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/548#issuecomment-1230409529"},"Terminated"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,l.kt)("em",{parentName:"p"},"The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe."))),(0,l.kt)("h2",{id:"project-overview"},"Project Overview"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Uke is a p2p, completely distributed messaging protocol.  It utilizes local cryptography and a Substrate blockchain instance to verify, send, and receive messages in real time - just like any other conventional messaging protocol, and can be used to construct messaging apps, or any other application in which real time messaging is needed."),(0,l.kt)("p",null,"Substrate is a key part of this solution, as ",(0,l.kt)("strong",{parentName:"p"},"uke")," essentially defies the need for any sort of traditional backend in favor of a ",(0,l.kt)("strong",{parentName:"p"},"completely DLT based infrastructure.")),(0,l.kt)("p",null,"Initially, the PoC for this phase will be messaging app, however key components will be built that will allow for many more applications in the future.  The eventual goal is a messaging protocol that can be implemented anywhere, and is not dependent on any one centralized backend."),(0,l.kt)("p",null,"The purpose of this messaging app is to have it entirely independent of any third party service for both messaging and users - a true representation of web3."),(0,l.kt)("p",null," There is more to uke than just peer to peer messaging - it\u2019s to demonstrate a lot more can be created with DLT than just another cryptocurrency. Rather than exchange currency one another, uke aims to take those same concepts and apply them to data and messaging."),(0,l.kt)("p",null," Personally, I am passionate about bringing more value to web3 via this sort of application - something that can be used by people, but also in a wider context of businesses and confidential, secure messaging."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Project Expectations & Goals")),(0,l.kt)("p",null,"The initial goal for this grant is to allow for the development of a PoC of this messaging protocol in the form of a mobile app."),(0,l.kt)("p",null,"In the future, as the protocol becomes more defined, the goal is to develop a suite of SDKs and docs centering around secure and confidential messaging for any use case - with Substrate and its extensive functionality being the core of the solution."),(0,l.kt)("p",null,"Uke has a few primary goals and standards to upkeep:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Privacy - each message sent is completely, and purely, peer to peer - no one else can intercept or decrypt the message.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Fault Tolerance / Reliability - By using DLT, we remove the need for a central server, meaning as long as an amount of nodes are kept online, users can still talk to one another.  This is especially useful in emergency scenarios, as users can even opt to run their own nodes to ensure 100% runtime.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Anonymity - since each user is essentially just a cryptographic key paired with an id, user\u2019s can easily stay anonymous on and off chain if they so wish to choose."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Technology Stack")),(0,l.kt)("p",null,"For the front end, Ionic will be used for all web, Android and iOS versions."),(0,l.kt)("p",null,"The backend will purely be DLT based - for this one, a Substrate instance will be run to send messages back and forth between accounts."),(0,l.kt)("p",null,"Below are the summarized languages / tech stack"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Typescript / Javascript"),(0,l.kt)("li",{parentName:"ul"},"Rust"),(0,l.kt)("li",{parentName:"ul"},"Ionic"),(0,l.kt)("li",{parentName:"ul"},"ink! (where applicable)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"High Level Architecture")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/922350668264652810/1006601101375721522/Screenshot_2022-08-09_at_12.32.44_PM.png?width=880&height=1022",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"As a general overview, each message will be a transaction, and each user is essentially merely an account on the blockchain."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Components")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"For the purposes of defining the Uke PoC / MVP, the initial functionality of both modules will be represented via an ink! smart contract. However, in the future, it is planned to become a full pallet as needs become more apparent.  If it is preferred for the initial implementation to be a pallet, then we can arrange that.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Human DNS Module / Contract (future pallet)"))),(0,l.kt)("p",null,"Using Substrate allows for the use of an ink! Smart contract, which in this case is used for mapping cryptographic addresses to more human readable names, just like a DNS.  We call this the Human DNS, and essentially it maps unique, human readable ids to otherwise illegible addresses."),(0,l.kt)("p",null,"With this mapping of addresses, users can then look up other users and add them to their contacts, or write them a new message, or any other package of data in theory."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Account Rules Module / Contract (future pallet)"))),(0,l.kt)("p",null,"Users can define rules for whether they wish to be contacted or not, and who can contact them.  They essentially can create whitelists to explicitly allow who is permitted to message that specific account, along with what data can be sent in the future."),(0,l.kt)("p",null,"This measure prevents a common issue with phone numbers, email, and even other apps - spam.  Using smart contracts ensures the rules are kept in place, and the user is safe from any malicious or unwanted messages."),(0,l.kt)("p",null,"Each message is a transaction on the blockchain, which depending on the rulings, can be deemed valid or invalid.  In theory, one could set up their own Uke messaging network with very specific rulings in the future."),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Substrate Instance"))),(0,l.kt)("p",null,"The Substrate Instance will allow for all messages to be propagated, as well as smart contracts to be deployed in a guaranteed environment.  "),(0,l.kt)("p",null,"It's worth noting that I plan to implement the concept of ",(0,l.kt)("em",{parentName:"p"},"light clients")," into each client-side instance, so as to provide"),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Uke Messaging App"))),(0,l.kt)("p",null,"The eventual conclusion, and primary deliverable of this proposal is representing all of the aforementioned technology into an easy to use, hybrid mobile app that will be released for use.  This app can be used across either Kusama or custom Uke networks, whatever is deemed fit upon launch."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Mockups and Design of PoC App")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Keep in mind these are mockups, and are subject to change")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/922350668264652810/1006620707519729774/uke-collection2x.png?width=984&height=1022",alt:null})),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"The eventual goal is to provide a streamlined way to for the following in the Substrate / Polkadot ecosystem:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Provide a common, and easy to use identity solution"),(0,l.kt)("li",{parentName:"ol"},"Provide a way to define account rules and filters in order to customize what transactions, messages, or accounts can interact with an account."),(0,l.kt)("li",{parentName:"ol"},"Provide an out-of-the-box confidential messaging protocol which can be used for many different usecases.")),(0,l.kt)("p",null,"The target audience here is our own user-base eventually, but also developers through opensourcing all work done here along with documentation on how one can also setup their own messaging using our tools."),(0,l.kt)("p",null,"Currently, there is no standard for how one can build a dapp quickly, and that does something common. This can serve as a baseline for how a dapp can function without the use of cryptocurrency or the like."),(0,l.kt)("p",null,"What makes us different:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"No traditional backends are used here. Everything is purely based off of Substrate, as shown in the architecture diagram.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In our designs, the use of DLT/blockchain is not shown - this is intentional, as it allows users to merely experience a secure messaging experience without the cumbersome interface"))),(0,l.kt)("h2",{id:"team"},"Team"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bader Youssef - Team Lead, Architect, and Fullstack Developer.")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Bader Youssef"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:ibnbassem@gmail.com"},"ibnbassem@gmail.com"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Address:")," N/A"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," N/A")),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"Bader has previously built over systems on both Ethereum and the NEM/Symbol blockchain - part of which you may see on his Github.  He mainly has focused on creating front-end applications and architecture around purely DLT architectures for multiple companies.  He is proficient in a number of programming languages and protocols, as well as general solution architecture for both low and higher level software."),(0,l.kt)("p",null,"Some notable projects include:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"A PoC IoT device that logged sensor data directly to a blockchain.  This included a custom UART serial protocol to convert Arduino code to blockchain transactions.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Portable battery powered nodes, utilizing a Raspberry Pi. (I'd like to do this for Substrate as well!)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The nftize project, an app that allowed for anyone to convert a physical asset to a digital one with ease.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Implementing Shamir secret sharing for an "offline multi sig" and private key sharding model.')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"A supply chain tracking system in which crop from the US was tracked to Japan over a private NEM blockchain\ninstance."))),(0,l.kt)("p",null,"In his spare time, he also wrote many articles centered around using blockchain in practical and real world scenarios, which you may find here: ",(0,l.kt)("a",{parentName:"p",href:"https://iodlt.com/iodlt-blog/"},"https://iodlt.com/iodlt-blog/")),(0,l.kt)("p",null,"He is also published on Hackernoon, with articles gaining some traction (plans to write more!): ",(0,l.kt)("a",{parentName:"p",href:"https://hackernoon.com/u/crackTheCode"},"https://hackernoon.com/u/crackTheCode")),(0,l.kt)("p",null,"If any more proof / material is needed, then it will be provided!"),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("p",null,"The eventual code regarding uke will reside in the following repository:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/Uke-Messaging"},"https://github.com/Uke-Messaging"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Bader Youssef - ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/CrackTheCode016"},"https://github.com/CrackTheCode016")))),(0,l.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bader Youssef - ",(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/bader-youssef-975914159"},"https://www.linkedin.com/in/bader-youssef-975914159"))),(0,l.kt)("h2",{id:"development-status"},"Development Status"),(0,l.kt)("p",null,"There is currently a WIP repo that is being constructed in parallel with this proposal, which will be shared as soon as possible.  To clarify:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The front end is mostly implemented for the mobile app, along with a login / signup system using polkadotjs.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The initial architecture is all complete, with future plans for pallet development."))),(0,l.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1 (one) for the duration of the project"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," $9,000 USD")),(0,l.kt)("h3",{id:"milestone-1--implement-ink-human-dns--account-rules-contracts"},"Milestone 1 \u2014 Implement ink! Human DNS & Account Rules Contracts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 4,500 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,l.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,l.kt)("strong",{parentName:"td"},"tutorial")," that explains how anyone can submit the contract to a valid Substrate node, as well as how to properly run unit tests for the contract in question.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Both contracts will be unit tested to the maximum with proper documentation and justification.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Human DNS ink! Smart Contract"),(0,l.kt)("td",{parentName:"tr",align:null},"Fully functioning smart contract, queryable  that keeps a mapping of addresses to users, allowing for user IDs and accounts to be identified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Account Rules ink! Smart Contract"),(0,l.kt)("td",{parentName:"tr",align:null},'Fully functioning smart contract which maps rules to registered accounts. Each account is either "opted in", or out.  Accounts can then set and define rules relating to who they wish to filter out from their messages.')))),(0,l.kt)("h3",{id:"milestone-2--front-end-completion-substrate--polkadotjs-integration-into-ionic-app"},"Milestone 2 \u2014 Front-end completion, Substrate & polkadot.js integration into Ionic App"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 4,500 USD")),(0,l.kt)("p",null,"..."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,l.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,l.kt)("strong",{parentName:"td"},"tutorial")," that explains how anyone can build the Ionic project for iOS, Android, or web.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"The front-end will contain a minimum of 50% unit test coverage, of which these will be covered in the guide.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"We will write a full blog post on Hackernoon on how Uke was created, what powers it, and what exact work was completed on it (as well as future goals).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1a."),(0,l.kt)("td",{parentName:"tr",align:null},"Uke Ionic Application: Data Models"),(0,l.kt)("td",{parentName:"tr",align:null},"Create the appropriate data structures and models to represent users, accounts, and messages coming from a Substrate instance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1b."),(0,l.kt)("td",{parentName:"tr",align:null},"Uke Ionic Application: Login and Signup Service"),(0,l.kt)("td",{parentName:"tr",align:null},"Usage of the ",(0,l.kt)("inlineCode",{parentName:"td"},"polkadot.js")," SDK to create, store, and secure user account's locally.  Proper authentication guards will also be created for the Ionic application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1c."),(0,l.kt)("td",{parentName:"tr",align:null},"Uke Ionic Application: Message Delivery & Configuration"),(0,l.kt)("td",{parentName:"tr",align:null},"Create the necessary services for messages to be retrieved, sent, and verified from a Substrate instance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1e."),(0,l.kt)("td",{parentName:"tr",align:null},"Uke Ionic Application: In-App Notification System"),(0,l.kt)("td",{parentName:"tr",align:null},"A minimalistic notification system for notifying users of in-app events, such as received messages.")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("p",null,"In the short term, I plan to begin marketting a beta program for this project in order to gain user feedback and viability. Based off of this, I will further the protocol as needed."),(0,l.kt)("p",null,"Short Term Goals"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Gather initial feedback for the app"),(0,l.kt)("li",{parentName:"ul"},"Immediate planning to streamline the protocol"),(0,l.kt)("li",{parentName:"ul"},"Design ",(0,l.kt)("inlineCode",{parentName:"li"},"uke")," SDK and developer docs for others to use"),(0,l.kt)("li",{parentName:"ul"},"Demonstrate uses of web3 beyond cryptocurrency")),(0,l.kt)("p",null,"Longer Term Goals"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Develop Human DNS and Account Ruling Pallets for common Substrate use"),(0,l.kt)("li",{parentName:"ul"},"Develop appropriate modules for business use"),(0,l.kt)("li",{parentName:"ul"},'"Disappearing", or temporary secure messaging'),(0,l.kt)("li",{parentName:"ul"},"Optional payment integrations for users, if applicable"),(0,l.kt)("li",{parentName:"ul"},"Custom Substrate Uke network implementation for private or public use")),(0,l.kt)("h2",{id:"additional-information"},"Additional Information"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")),(0,l.kt)("p",null,"I found it while exploring the Polkadot / Substrate ecosystem for development purposes."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Work you have already done.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"I already have completed a significant part of the front end work, all that is needed is the Substrate and polkadotjs implementation.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If there are any other teams who have already contributed (financially) to the project.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"None, this is an independent project.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Previous grants you may have applied for.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This is my first time applying to the Web3 grants program.")))}c.isMDXComponent=!0}}]);