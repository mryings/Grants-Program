"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9470],{80553:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(8209);const l={},o="Substats (The framework of lightweight block explorer)",i={unversionedId:"applications/substats",id:"applications/substats",title:"Substats (The framework of lightweight block explorer)",description:"- Team Name: CESS LAB",source:"@site/applications/substats.md",sourceDirName:"applications",slug:"/applications/substats",permalink:"/Grants-Program/applications/substats",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/substats.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Background",id:"background",level:4},{value:"Current Solution",id:"current-solution",level:4},{value:"Features",id:"features",level:4},{value:"Project Details",id:"project-details",level:3},{value:"High level design",id:"high-level-design",level:4},{value:"Typical example",id:"typical-example",level:4},{value:"Mockups/designs of any UI components",id:"mockupsdesigns-of-any-ui-components",level:4},{value:"API specifications of the core functionality",id:"api-specifications-of-the-core-functionality",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-2",level:3},{value:"Milestone 1 Implement The Backend Infrastructure",id:"milestone-1-implement-the-backend-infrastructure",level:3},{value:"Milestone 2 Implement Data Processing Tools",id:"milestone-2-implement-data-processing-tools",level:3},{value:"Milestone 3 Complete The Front-End Components",id:"milestone-3-complete-the-front-end-components",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"substats-the-framework-of-lightweight-block-explorer"},"Substats (The framework of lightweight block explorer)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," CESS LAB"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x96a661ee0D829DF7c424D4415a51FFc256EEEd8A(USDC)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Level:")," 2")),(0,r.kt)("h2",{id:"project-overview"},"Project Overview"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("h4",{id:"background"},"Background"),(0,r.kt)("p",null,"The block explorer is the important portal for on-chain data visualization. It can record and count information such as each block, each transaction and address of different blockchain networks. The essence of the block explorer is to reasonably display native data and derived data to various users according to the actual situation of the blockchain network. The users of block explorer include at least: developers, users, token holders, miners, regulators, researchers, and people interested in blockchain."),(0,r.kt)("p",null,"With the goal of building a multi-chain ecosystem, Polkadot has gradually become the preferred solution for many blockchain projects. As more and more blockchain networks join the ecosystem, users have higher and higher requirements for block explorer."),(0,r.kt)("p",null,"The most influential block explorer in the Polkadot ecosystem is ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/"},"Polkadot native explorer"),". it  provides a large and comprehensive blockchain explorer, any blockchain network built on The Substrate can apply for access, and supports one-click Toggle, which is currently the primary option for many ecological project. Its characteristics can be summarized as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rich real-time data display"),". Provides the display of a large amount of data on blockchain such as blocks, validators, and community governance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Support wallet management"),". Contains most functions of the wallet, and supports wallet management functions such as account generation, import, and token transfer.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Developer friendly"),". It contains a wealth of developer tools, and supports practical functions such as chain state query, transaction initiation, and RPC call.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"One-click import"),". All blockchains developed based on the Substrate framework basically implement the same set of basic interfaces, and the Polkadot.js App only needs to provide a websockets link to implement the import."))),(0,r.kt)("p",null,"But everything has two sides. The following inconveniences also exist behind such a powerful block explorer platform:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Front-end resources are bloated and network latency is high.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Since the web side of platform directly obtains and renders data through blockchain nodes, it leads to slower data reading speed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Likewise, on-chain resources are relatively precious, resulting in more meaningful statistics that need to be processed that cannot be kept on-chain. However, these statistics have a direct impact on user experience."))),(0,r.kt)("p",null,'Based on the above characteristics, Polkadot.js App is more suitable for the needs of developers and wallet-related operation scenarios. For more common query scenarios such as retrieving transactions, querying balances of wallet address, checking the basic status of the network, and querying miner information, the actual needs of users are "fast" rather than "more". Just like if you just want to buy a bottle of beer, then the convenience store in the community may be more suitable for your needs than the supermarket that is farther away.'),(0,r.kt)("p",null,"Polkadot.js App is like a large supermarket with a wide variety of products. However, for the simple daily needs of users, convenience stores (lightweight block explorer) will be a good complement to it. So is there a lightweight block explorer that is easy enough to use in the current Polkadot ecosystem? The following is the situation of our research."),(0,r.kt)("h4",{id:"current-solution"},"Current Solution"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.subscan.io/"},"Subscan")," is a block explorer that provides operations management services. It supports about 20 Substrate-based parallel chains and offers basic functions. At the same time, it also provides paid customization services for users who have higher API requirements. This model is more convenient for developers, however, the customization service fee can be as high as tens of thousands of USDT, and developers may abandon some functions due to financial concerns."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://explorer.polkascan.io/"},"Polkascan")," is an open-source block explorer that is relatively lightweight and simple in data display. However, through code analysis on its Github, it has limited capability in data processing since it doesn't have a database and cannot perform data analysis."),(0,r.kt)("p",null,"In summary, we believe that there is a lack of a better open source lightweight explorer in the current Polkadot ecosystem. That's why we designed Substats - a lightweight block explorer framework. Different from Polkadot.js App, Substats provides lightweight components to reduce the dependence on the network and provides customized data display functions. And by building a stable background and database services to obtain more powerful data processing capabilities."),(0,r.kt)("h4",{id:"features"},"Features"),(0,r.kt)("p",null,"\u25cf ",(0,r.kt)("strong",{parentName:"p"},"On-chain data processing station"),": A processing station is built between users and the blockchain network, which includes a cache (database) layer and a computing (data processing) layer. The cache layer is responsible for pulling the data on the chain to the local database for storage. The computing layer is responsible for processing the on-chain data in the database, so that it can be combined into more meaningful data for users, such as historical data statistics, network-wide computing power rankings, etc."),(0,r.kt)("p",null,"\u25cf ",(0,r.kt)("strong",{parentName:"p"},"Convenient data display and retrieval"),": Compared with reading blockchain network data through RPC nodes, it is more convenient and faster for the client's wxplorer to read directly in the database of the processing station built by Substats."),(0,r.kt)("p",null,"\u25cf ",(0,r.kt)("strong",{parentName:"p"},"One-click construction"),": Learn from the features of Polkadot.js App. The Substats framework only needs to configure a small amount of information to achieve one-click deployment and startup. Significantly reduce development costs."),(0,r.kt)("p",null,"\u25cf ",(0,r.kt)("strong",{parentName:"p"},"Modular UI components"),": The UI components of Substats are all decoupled, allowing developers to customize the development of UI components with low threshold."),(0,r.kt)("p",null,"\u25cf ",(0,r.kt)("strong",{parentName:"p"},"Open source and security"),": Substats only provides completely open source code, and is not responsible for replacing management and operation services. All services are deployed and operated by the project party, avoiding trust costs."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"We have designed a set of explorer modular components for the Substrate ecosystem, which can be used by stakeholders (such as miners and storage users) and other users.Polkadot, Kusama and Rococo will be supported in first version. Users can inquire about basic information in the network, such as space information, rankings, blocks, transactions, addresses, visual trend charts, etc. Substats is open-source and has flexible scalability in both network and its functionalities. Hence early-stage projects or individual developers can easily integrate our components based on their business needs. The data analysis module and custom components are the two core functions of Substats."),(0,r.kt)("h4",{id:"high-level-design"},"High level design"),(0,r.kt)("h1",{id:"proposal-architecture"},(0,r.kt)("img",{parentName:"h1",src:"https://user-images.githubusercontent.com/15166250/192175233-441175e6-e736-4cb0-b580-c43f61f0c798.svg",alt:"Proposal architecture"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Figure 1: Proposal architecture")),(0,r.kt)("p",null,"\u25cf ",(0,r.kt)("strong",{parentName:"p"},"Data Processing"),": Data processing can be divided into the following steps: data acquisition, data parsing, and persistent storage. As a block explorer framework, Substats optimizes each process to reduce unnecessary workload and improve efficiency for developers. For example, it supports custom data acquisition; realizes the separation of data read and write through the buffer queue; supports various types of data acquisition methods: RPC communication of full nodes, P2P protocol of peer nodes, etc."),(0,r.kt)("p",null,"\u25cf ",(0,r.kt)("strong",{parentName:"p"},"Data Rendering"),": In addition to providing developers with APIs for crawling block data and derived data, Substats also provides developers with a front-end framework which displays data such as block info, transaction info, and address info in a modular way, and each module can be customized. And Substats has a wealth of themes and icons to choose from."),(0,r.kt)("h4",{id:"typical-example"},"Typical example"),(0,r.kt)("h1",{id:"workflow"},(0,r.kt)("img",{parentName:"h1",src:"https://user-images.githubusercontent.com/15166250/192175253-2cc55813-be4c-469f-b621-a4f5d0468812.svg",alt:"Workflow"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Figure 2: Workflow")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The node service synchronizes the block data of the blockchain network. The node services here include full nodes of the network, third-party data retrieval services, etc."),(0,r.kt)("li",{parentName:"ol"},"The data crawling module obtains block data from blockchain nodes. Substats supports full node, P2P node, local database and other types of node service connection, and supports custom data read interfaces."),(0,r.kt)("li",{parentName:"ol"},"It writes the block data crawled from the node service to the buffer queue. The buffer queue is used to separate the process of crawling data and parsing data, and supports data integrity checking and exception handling."),(0,r.kt)("li",{parentName:"ol"},"The block data is taken out of the buffer queue and sent to the parser in order."),(0,r.kt)("li",{parentName:"ol"},"The parser parses the block data and writes it to the database in time. The parsing process is accelerated by concurrent execution."),(0,r.kt)("li",{parentName:"ol"},"For general block data, Substats provides a series of database table structure that enables developers to use it out of the box. For custom Pallet data, developers need to define the relevant table structure."),(0,r.kt)("li",{parentName:"ol"},"The front-end component periodically reads the relevant data in the database through the HTTP API to render the web page.")),(0,r.kt)("h4",{id:"mockupsdesigns-of-any-ui-components"},"Mockups/designs of any UI components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Network Overview"))),(0,r.kt)("h1",{id:"overview-1"},(0,r.kt)("img",{parentName:"h1",src:"https://user-images.githubusercontent.com/15166250/192175100-fd76fc3c-c0a0-4bb6-98aa-78ee2eb4d9c7.png",alt:"Overview"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Address Analysis"))),(0,r.kt)("h1",{id:"addressdetails"},(0,r.kt)("img",{parentName:"h1",src:"https://user-images.githubusercontent.com/15166250/192175151-a75dddfe-6d36-40ab-ab7f-5af1220eaf49.png",alt:"addressDetails"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transaction Details"))),(0,r.kt)("h1",{id:"transaction"},(0,r.kt)("img",{parentName:"h1",src:"https://user-images.githubusercontent.com/15166250/192175186-fc8985a5-0992-46a4-a280-909dea71986e.png",alt:"transaction"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Block Details Details"))),(0,r.kt)("h1",{id:"blocks"},(0,r.kt)("img",{parentName:"h1",src:"https://user-images.githubusercontent.com/15166250/192175203-c6771d22-c27e-4511-88fc-99604cb21b96.png",alt:"blocks"})),(0,r.kt)("h4",{id:"api-specifications-of-the-core-functionality"},"API specifications of the core functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Substats: List of the publicly exposed methods"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No. 1"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"General"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Data request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Returns"),(0,r.kt)("td",{parentName:"tr",align:null},"DictionaryList")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Get all dictionary list")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No. 2"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Block query"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Data request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Returns"),(0,r.kt)("td",{parentName:"tr",align:null},"BlockStates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Query states info from block")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No. 3"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Transaction query"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Data request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Returns"),(0,r.kt)("td",{parentName:"tr",align:null},"TransactionResults")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Query states info from transactoin")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No. 4"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Event query"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Data request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Returns"),(0,r.kt)("td",{parentName:"tr",align:null},"EventResults")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Query states info from events")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No. 5"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Consensus query"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Data request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Returns"),(0,r.kt)("td",{parentName:"tr",align:null},"ConsensusResults")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Query states info from miner")))),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Where and how does your project fit into the ecosystem?")),(0,r.kt)("p",null,"Our project provides the Polkadot/Substrate ecosystem a quick and convenient service that is in an open-source and lightweight way for creating their block explorers."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?")),(0,r.kt)("p",null,"Parachain/dapp/wallet/developers"),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Teh Sunn Liu"),(0,r.kt)("li",{parentName:"ul"},"Shaka Lavigne"),(0,r.kt)("li",{parentName:"ul"},"Elden Young"),(0,r.kt)("li",{parentName:"ul"},"Yeou Sunn Liu"),(0,r.kt)("li",{parentName:"ul"},"Ted Zhang")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Jessie Dai"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:jessie@cess.cloud"},"jessie@cess.cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://cess.cloud/"},"https://cess.cloud"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," 22 St Leonard's Ave, Lostock, Bolton BL6 4JE, England"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Paul David Humphreys")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"\u25cf In 2019, the CESS team was established and began to design the prototype design of the storage system network's underlying construction. "),(0,r.kt)("p",null,"\u25cf In 2020, CESS completed the design of the Random Rotational Selection consensus mechanism (R\xb2S), Multi-format Data Rights Mechanism (MDRC) and Proof of Data Reduplication and Recovery (PoDR\xb2). "),(0,r.kt)("p",null,"\u25cf In 2021, released CESS v0.1 white paper. Released CESS Demo v0.2, started BSC testnet storage mining. The end of the same year, CESS was awarded 1st place in the Polkadot Hackathon APAC Edition. "),(0,r.kt)("p",null,"\u25cf In February 2022, CESS joined the Substrate Builders Program. In July CESS passed all milestones in W3F to receive a grant for developing a storage pallet for Substrate. CESS launched its testnet the same month. "),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CESSProject"},"https://github.com/CESSProject")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CESSProject/cess"},"https://github.com/CESSProject/cess")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/CESSProject/fmd-cess"},"https://github.com/CESSProject/fmd-cess"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-2"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 5 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," ",(0,r.kt)("em",{parentName:"li"},"24,000 USD"))),(0,r.kt)("h3",{id:"milestone-1-implement-the-backend-infrastructure"},"Milestone 1 Implement The Backend Infrastructure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 9,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how to use the product, display and explain the function of each component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1a."),(0,r.kt)("td",{parentName:"tr",align:null},"Develop the webservice"),(0,r.kt)("td",{parentName:"tr",align:null},"We will use the express.js framework to build the basic back-end services, and install the database link toolkit to achieve stable network communication, database connection and other functions to prepare for upper-layer applications.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1b."),(0,r.kt)("td",{parentName:"tr",align:null},"Develop the polkadot.js"),(0,r.kt)("td",{parentName:"tr",align:null},"We will use the polkadot.js API to interact with the PRC nodes of the blockchain network developed based on Substrate. And implement interfaces including block query, transaction query, Account query, Miner query, and new block subscription.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1c."),(0,r.kt)("td",{parentName:"tr",align:null},"Develop the API"),(0,r.kt)("td",{parentName:"tr",align:null},"We will define the back-end API specification for the front-end service to call, including the data structure, request parameters, request event processing function, return data format, etc. At the same time, we will implement the construction of the interface layer to meet the custom development needs of developers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1d."),(0,r.kt)("td",{parentName:"tr",align:null},"Create the database"),(0,r.kt)("td",{parentName:"tr",align:null},"We will build MySQL database service, create Table structure, complete index creation, data structure constraints, and implement MYSQL connection driver through Node.js.")))),(0,r.kt)("h3",{id:"milestone-2-implement-data-processing-tools"},"Milestone 2 Implement Data Processing Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 9,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how to use the product, display and explain the function of each component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1a."),(0,r.kt)("td",{parentName:"tr",align:null},"Data Reading Module"),(0,r.kt)("td",{parentName:"tr",align:null},"It contains on-chain data of blocks, addresses, transactions, events, miners. It supports network switching of Polkadot, Kusama and Rococo, for instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1b."),(0,r.kt)("td",{parentName:"tr",align:null},"Data Processing Module"),(0,r.kt)("td",{parentName:"tr",align:null},"It includes synchronization for block information, miner information, account lists, on-chain power timing recording, transaction data statistics and sorting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1c."),(0,r.kt)("td",{parentName:"tr",align:null},"The API Module"),(0,r.kt)("td",{parentName:"tr",align:null},"We will develop functional interfaces to return the results of data processing to front-end services in the form of a unified interface. The interface includes block information acquisition, historical statistical data acquisition, and the entire network computing power ranking.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2a."),(0,r.kt)("td",{parentName:"tr",align:null},"API Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will complete a backend API documentation explaining how the API interacts with the data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2b."),(0,r.kt)("td",{parentName:"tr",align:null},"Operation Manual"),(0,r.kt)("td",{parentName:"tr",align:null},"We will write an operation manual explaining how data reading, how network switching and processing can be used.")))),(0,r.kt)("h3",{id:"milestone-3-complete-the-front-end-components"},"Milestone 3 Complete The Front-End Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 6,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how to use the product, display and explain the function of each component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish an article explaining the problems that Substats solves and how it can benefit other projects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1a."),(0,r.kt)("td",{parentName:"tr",align:null},"Front-end Framework"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide lightweight React.js front-end components with styles based on LESS CSS extensions. These components can be customized and extended by developers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1b."),(0,r.kt)("td",{parentName:"tr",align:null},"API"),(0,r.kt)("td",{parentName:"tr",align:null},"We will define specifications for the API requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1c."),(0,r.kt)("td",{parentName:"tr",align:null},"Develop Interface"),(0,r.kt)("td",{parentName:"tr",align:null},"We will complete the development of the front-end webpage and make it web and mobile compatible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"UI Design"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a basic version of the user interface, based on the ant-design/charts icon component library. The other projects can customize the page style based on their needs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Operation Manual"),(0,r.kt)("td",{parentName:"tr",align:null},"We will complete the operation manual, including sections on front-end component usage and data requests.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"In the coming months, we will be promoting our project in Europe, South America and SouthEast Asia. We will build a bigger developer community and start testing. We will continue to maintain the component format to adapt to any updates in Substrate, meanwhile optimizing the product and providing the explorer components with more functions."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," We have heard from Parity Asia."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What work has been done already?")," We have already implemented a design prototype."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Have you ever applied for other grants?")," We had applied for two."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md"},"grant 1")," , which had passed all the milestone deliveries on January, 2022."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/ces_data_store.md"},"grant 2")," , which had passed all the milestone deliveries on July, 2022.")))}m.isMDXComponent=!0}}]);