"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9650],{57316:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));a(8209);const r={},i="Fractapp",o={unversionedId:"applications/fractapp",id:"applications/fractapp",title:"Fractapp",description:"Proposer:* CryptoBadBoy",source:"@site/applications/fractapp.md",sourceDirName:"applications",slug:"/applications/fractapp",permalink:"/Grants-Program/applications/fractapp",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/fractapp.md",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Wallet",id:"milestone-1--wallet",level:3},{value:"Milestone 2 \u2014 Profile",id:"milestone-2--profile",level:3},{value:"Milestone 3 \u2014 Chat",id:"milestone-3--chat",level:3},{value:"Future Plans",id:"future-plans",level:2}],m={toc:s},u="wrapper";function c(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"fractapp"},"Fractapp"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Proposer:")," CryptoBadBoy"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 3HrP78rbmafpfBsU49LCpywYrNcscnKd76")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"The above combination of your GitHub account and payment address will be your unique identifier during the program. Please keep them safe.")),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Please provide the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A brief description of the project.")),(0,l.kt)("p",null,"Fractapp is a messenger with a cryptocurrency wallet. Cryptocurrency address is hard to remember so users have a problem send cryptocurrency to another user.\nFractapp creating a simple ecosystem for users. Users can send crypto in chats and use DApp chat-bots. Fractapp will be available on Android and later IOS."),(0,l.kt)("p",null,"And we have old ",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=cG5PAIVoqh0"},"DEMO")," for the hackathon."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"An indication of how you will integrate this project into Substrate / Polkadot / Kusama."),(0,l.kt)("p",{parentName:"li"},"The integration will involve creating a mobile app on Expo (React Native) and backend services.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Mobile App:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Non custodial wallet for Polkadot and Kusama (creating, backup, wallet details, transaction info)"),(0,l.kt)("li",{parentName:"ul"},"Payment chat is a chat for only send cryptocurrency. These milestones haven't support messages in chats. But we will add messages later."),(0,l.kt)("li",{parentName:"ul"},"Chat-bots for DApp"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Backend services:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Push-Notification service is a service which will notify a user about received transactions"),(0,l.kt)("li",{parentName:"ul"},"Profile service is a service that stores not public information about the user (Nickname, Twitter, Email, Phone Number)."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"CBI (Chat-Bot interface):"))),(0,l.kt)("p",null,"CBI is the interface between Fractapp and your chat-bots. It can be summarized in the following algorithm:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"To call the bot, the user must send a request to start."),(0,l.kt)("li",{parentName:"ol"},"Bot service must return the user interface (button name, image, and trigger name)"),(0,l.kt)("li",{parentName:"ol"},"The user clicks a button and sends the request with the trigger name to the chat-bot service."),(0,l.kt)("li",{parentName:"ol"},"Chat-bot processes the user's request by the trigger name.. If the user doesn't need to make a choice then the service returns the transaction which the user will sign."),(0,l.kt)("li",{parentName:"ol"},"User signs or cancels transactions.")),(0,l.kt)("p",null,"Example, Decentralized Exchange Bot (exchange DOT <-> KSM):"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"User sends a request to start."),(0,l.kt)("li",{parentName:"ol"},"Chat-Bot returns response with 2 buttons: DOT, KSM"),(0,l.kt)("li",{parentName:"ol"},"User chooses DOT"),(0,l.kt)("li",{parentName:"ol"},"Chat-Bot returns the text-editor element to the user"),(0,l.kt)("li",{parentName:"ol"},"User sends a request with text (amount)"),(0,l.kt)("li",{parentName:"ol"},"Chat-Bot returns transaction (transaction calling Exchange DApp)"),(0,l.kt)("li",{parentName:"ol"},"User signs and sends transaction")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An indication of why your team is interested in creating this project.")),(0,l.kt)("p",null,"Polkadot is one of the most interesting blockchain platforms. We want to help users to just join in polkadot and wallet is the most important module in the platform."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"We expect the teams to already have a solid idea about the project's expected final state."),(0,l.kt)("p",null,"Therefore, we ask the teams to submit (where relevant):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mockups/designs of any UI components")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://elshandzhafarov326555.invisionapp.com/overview/Fractapp---cryptocurrency-wallet-with-messenger-ckeyvvuh70t3j01bx5mg6e7b0"},"https://elshandzhafarov326555.invisionapp.com/overview/Fractapp---cryptocurrency-wallet-with-messenger-ckeyvvuh70t3j01bx5mg6e7b0")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An overview of the technology stack to be used")),(0,l.kt)("p",null,"Golang, React Native, Polkadot, Kusama"),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"Similar projects: Luno/Polkawallet"),(0,l.kt)("p",null,"We are creating a messenger with a cryptocurrency wallet. This will help the user to interact with each other without a complicated address. Users can exchange currency, use p2p smart-contracts, vote in the DAOs and etc via chat-bots."),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Elshan Dzhafarov"),(0,l.kt)("li",{parentName:"ul"},"Anastasiya Strashnikova")),(0,l.kt)("h3",{id:"team-website"},"Team Website"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fractapp.com"},"https://fractapp.com"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("p",null,"personal address will be provided via the invoice form"),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"Elshan Dzhafarov:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ex CTO at Ventuary DAO. Ventuary DAO received a grant from the Wave Platform. (",(0,l.kt)("a",{parentName:"li",href:"https://medium.com/waves-lab/waves-grants-recipients-progress-2ade081d4ca0"},"https://medium.com/waves-lab/waves-grants-recipients-progress-2ade081d4ca0"),")"),(0,l.kt)("li",{parentName:"ul"},"Ex CTO at Neutrino Protocol. Neutrino Protocol is a protocol for creating the stablecoin. Neutrino USD is the most popular DApp on the Waves Platform. (",(0,l.kt)("a",{parentName:"li",href:"https://neutrino.at"},"https://neutrino.at")," / ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ventuary-lab/neutrino-contract"},"https://github.com/ventuary-lab/neutrino-contract"),")"),(0,l.kt)("li",{parentName:"ul"},"Co-author gravity protocol. (",(0,l.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2007.00966"},"https://arxiv.org/abs/2007.00966"),")"),(0,l.kt)("li",{parentName:"ul"},"Open-source contributor gravity protocol. (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Gravity-Tech"},"https://github.com/Gravity-Tech"),")"),(0,l.kt)("li",{parentName:"ul"},'Winner of the hackathon "My country and blockchain", "Hack Moscow" in nomination from Health Nexus, "Spring Hack" in nomination from QIWI Blockchain. Prize-winner "Unblock Hackathon" and "Blockchain Founder Hackathon".')),(0,l.kt)("p",null,"Anastasiya Strashnikova:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Awesome designer at Fractapp")),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/fractapp"},"https://github.com/fractapp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cryptobadboy"},"https://github.com/cryptobadboy"))),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/elshan-dzhafarov/"},"https://www.linkedin.com/in/elshan-dzhafarov/"))),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 3.5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 1.2 BTC")),(0,l.kt)("h3",{id:"milestone-1--wallet"},"Milestone 1 \u2014 Wallet"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 0.44 BTC")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Creating wallet"),(0,l.kt)("td",{parentName:"tr",align:null},"Procedure for creating/importing a wallet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Backup wallet"),(0,l.kt)("td",{parentName:"tr",align:null},"User can backup wallet one of method: google drive/encrypted file to phone/ display of seed phrase on the screen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Wallet details"),(0,l.kt)("td",{parentName:"tr",align:null},"User can see balance, transactions, transaction info")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"A standalone document, describing usage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Unit-testing"),(0,l.kt)("td",{parentName:"tr",align:null},"Unit tests covering at least 75% of the code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6."),(0,l.kt)("td",{parentName:"tr",align:null},"Distributing"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide .apk files for Android")))),(0,l.kt)("h3",{id:"milestone-2--profile"},"Milestone 2 \u2014 Profile"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 0.38 BTC")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Profile"),(0,l.kt)("td",{parentName:"tr",align:null},"Fractapp user profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Connect phone number/twitter/email"),(0,l.kt)("td",{parentName:"tr",align:null},"User can connect social for an account. Any users can search to find user by social.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Push-Notification service for transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"Push-Notification service notifies users about transactions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Backend for profile storage"),(0,l.kt)("td",{parentName:"tr",align:null},"Golang backend for storing fractapp profiles.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"Docker image for backend and push-notification service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"A standalone document, describing usage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7."),(0,l.kt)("td",{parentName:"tr",align:null},"Unit-testing"),(0,l.kt)("td",{parentName:"tr",align:null},"Unit tests covering at least 75% of the code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8."),(0,l.kt)("td",{parentName:"tr",align:null},"Distributing"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide .apk files for Android")))),(0,l.kt)("h3",{id:"milestone-3--chat"},"Milestone 3 \u2014 Chat"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 0.38 BTC")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Chat"),(0,l.kt)("td",{parentName:"tr",align:null},"Only payment chat (not have messages). Users will be able to send crypto by email/phone/twitter/nickname.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Staking bot"),(0,l.kt)("td",{parentName:"tr",align:null},"First built in a chat-bot for staking.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"A standalone document, describing usage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Unit-testing"),(0,l.kt)("td",{parentName:"tr",align:null},"Unit tests covering at least 75% of the code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Distributing"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish on Google Play and F-Droid")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Apply to App Store"),(0,l.kt)("li",{parentName:"ul"},"Integration Bitcoin and Ethereum"),(0,l.kt)("li",{parentName:"ul"},"Messaging protocol on a substrate"),(0,l.kt)("li",{parentName:"ul"},"Creating popular DApp in chat-bots"),(0,l.kt)("li",{parentName:"ul"},"Group chats for DAO (If user have token then he can join the group)"),(0,l.kt)("li",{parentName:"ul"},"Decentralized voting in a groups")))}c.isMDXComponent=!0}}]);