"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[84982],{56919:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(8209);const r={},l="AssetHub NFT Indexer",o={unversionedId:"applications/kodadot_assethub_nft_indexer_statemine_statemint",id:"applications/kodadot_assethub_nft_indexer_statemine_statemint",title:"AssetHub NFT Indexer",description:"- Team Name:  KodaDot",source:"@site/applications/kodadot_assethub_nft_indexer_statemine_statemint.md",sourceDirName:"applications",slug:"/applications/kodadot_assethub_nft_indexer_statemine_statemint",permalink:"/applications/kodadot_assethub_nft_indexer_statemine_statemint",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/kodadot_assethub_nft_indexer_statemine_statemint.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Architecture \ud83c\udfd7",id:"architecture-",level:4},{value:"Technology Stack \ud83d\udcbb",id:"technology-stack-",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members (In order of joining time)",id:"team-members-in-order-of-joining-time",level:3},{value:"Contact \ud83d\udcde",id:"contact-",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team GitHub accounts \ud83e\uddd1\u200d\ud83d\udcbb",id:"team-github-accounts-",level:4},{value:"Team LinkedIn Profiles \ud83e\uddd1\u200d\ud83c\udf93",id:"team-linkedin-profiles-",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - AssetHub Indexer Implementation first part",id:"milestone-1---assethub-indexer-implementation-first-part",level:2},{value:"Future Plans \ud83d\udd2d",id:"future-plans-",level:2},{value:"Additional Information  \u2795",id:"additional-information--",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"assethub-nft-indexer"},"AssetHub NFT Indexer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:"),"  KodaDot"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:"),"  1KxzJHoRJHi8EgWVhrGDueeyzg8PyihAvSL3NP6QMcxEve6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program#baby_chick-level-2"},"Level"),":"),"  2 ")),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The AssetHub Indexer is a GraphQL service designed to streamline the interaction with Uniques, NFT non-fungible assets, and fungible assets on AssetHubs (Statemine/Statemint). This service is specifically tailored to serve as a robust data layer for NFT-oriented dApps, leveraging the simplicity of GraphQL and REST API."),(0,i.kt)("p",null,"In the current landscape, developers face challenges interacting with Uniques and Assets on Statemine due to the complexity and time-consuming nature of querying fungible and non-fungible assets on AssetHub. AssetHub Indexer aims to address these challenges by providing a user-friendly GraphQL interface, thus reducing the time and effort required to query these assets."),(0,i.kt)("p",null,"The key advantages of the AssetHub Indexer include\nits focus on ease of use,\nversatility for a broad range of use cases, and\nits commitment to bringing Statemine utilization & documentation closer to developers.\nFurthermore, the AssetHub Indexer is a completely decentralized, open-source solution that respects user privacy by not collecting user data."),(0,i.kt)("p",null,"By reducing the time required to query assets and providing a more user-friendly interface, the AssetHub Indexer aims to foster the growth and development of the Web 3.0 ecosystem in Polkadot."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"The AssetHub Indexer is a state-of-the-art infrastructure tool designed to address developers' challenges when querying NFTs from the chain. Currently, developers are limited to querying NFTs in batches from RPC nodes, which can be time-consuming and inefficient for customer-facing products. This limitation often results in long waiting times and heavy device data loads."),(0,i.kt)("p",null,"To overcome these challenges, we have developed the AssetHub Indexer. This tool leverages the power of GraphQL to provide a more efficient and user-friendly interface for developers. With the AssetHub Indexer, developers can easily query NFTs and build on top of the new ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/frame/nfts/src/lib.rs"},"NFTs pallet by Parity"),", opening up a wide range of potential use cases, such as creating ",(0,i.kt)("a",{parentName:"p",href:"https://fandom.deno.dev"},"fandom shops")," for art."),(0,i.kt)("p",null,"Recognizing that many web developers may not have extensive experience with GraphQL, we have also built a TypeScript-based SDK that can be easily imported into any existing project. This SDK simplifies interacting with Uniques and Assets on Statemine, making it more accessible for developers of all skill levels."),(0,i.kt)("p",null,"The AssetHub Indexer uses TypeScript and leverages the Squid framework (ArrowSquid) for data processing. It interacts with a Postgres database and provides a GraphQL interface for querying data. The project structure includes directories for generated model/server definitions, server extensions, data type definitions, and mapping modules. It also uses environment variables defined in a .env file or supplied by a shell for configuration."),(0,i.kt)("p",null,"Currently, the AssetHub Indexer allows developers to interact with Uniques and Assets on Statemine using GraphQL. The project is designed to be as simple as possible, ensuring all tasks can be done quickly and without extended searching. We aim to reduce the time necessary to query fungible and non-fungible assets on AssetHub, making it easier for developers to build innovative and user-friendly decentralized apps."),(0,i.kt)("h4",{id:"architecture-"},"Architecture \ud83c\udfd7"),(0,i.kt)("p",null,"The architecture of the AssetHub Indexer is designed with simplicity and efficiency in mind, ensuring a seamless interaction with Uniques and Assets on Statemine."),(0,i.kt)("p",null,"At the core of our architecture is TypeScript, a statically typed superset of JavaScript that adds optional types to the language. TypeScript ensures robustness and reliability in our codebase, allowing us to catch errors early in the development process and write more maintainable code."),(0,i.kt)("p",null,"To handle data processing, we leverage the ArrowSquid framework. ArrowSquid is a powerful tool allowing us to process and index blockchain data efficiently. It provides a set of utilities for defining and running data processing tasks, making handling complex data processing requirements easier."),(0,i.kt)("p",null,"Our project interacts with a Postgres database, a powerful, open-source object-relational database system that uses and extends the SQL language. Postgres provides us with the robustness, scalability, and performance we need to handle large amounts of data."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/SyLxL56uh.jpg",alt:null})),(0,i.kt)("p",null,"On the architectural level, we have a few layers, as described in the picture above.\nWe need to obtain the data for the correct function of our indexer. AssetHub indexer combines the SubSquid archive (the pre-indexed storage) and RPC node for the new data. When the indexer obtains a new event, it is automatically processed by the defined handler. As previously mentioned, we processed data stored in the Postgres DB. "),(0,i.kt)("p",null,"To expose the data to clients, we provide a GraphQL interface. GraphQL is a query language for APIs and a runtime for executing those queries with our existing data. It allows clients to ask for exactly what they need and nothing more, making it easier to evolve and enabling powerful developer tools."),(0,i.kt)("p",null,"The project structure is organized into several key directories. The 'src/generated' directory contains model/server definitions created by codegen. The 'src/server-extension' directory contains a module with custom type-graphql-based resolvers. The 'src/types' directory contains data type definitions for chain events and extrinsics created by typegen. The 'src/mappings' directory contains the mapping module. The 'lib' directory contains compiled js files, reflecting the structure of the 'src' directory."),(0,i.kt)("p",null,"Finally, the project configures environment variables, defined in a .env file or supplied by a shell. This approach allows us to easily manage and change the configuration without altering the codebase."),(0,i.kt)("p",null,"The second state-of-the-art is our Client-first SDK called Uniquery. As we can see in the picture below, the only thing that client applications need to do is import the Uniquery package via ESM/CJS (Javascript targets). Once we have the Uniquery package, we can access query builder implementation (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"client.getCollectionById(id)"),"). Additionally, because many developers are familiar with REST API, we build a similar fetch strategy without needing a third party (every client fetches data directly from SubSquid). The REST looks like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"$fetch(/collectionById/${id}).")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/HkMKagJt3.png",alt:null})),(0,i.kt)("h4",{id:"technology-stack-"},"Technology Stack \ud83d\udcbb"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TypeScript"),(0,i.kt)("li",{parentName:"ul"},"Node.js"),(0,i.kt)("li",{parentName:"ul"},"Docker"),(0,i.kt)("li",{parentName:"ul"},"SubSquid (ArrowSquid for Substrate)"),(0,i.kt)("li",{parentName:"ul"},"Postgres"),(0,i.kt)("li",{parentName:"ul"},"GraphQL")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"The AssetHub Indexer is a crucial addition to the Polkadot and Substrate SDK ecosystem. It addresses the challenges developers often encounter when building on top of runtime pallets, particularly when interacting with Uniques, NFTs, and Assets on Statemine. The AssetHub Indexer provides a comprehensive NFT-oriented data solution, simplifying the development process and enhancing the efficiency of dApps within the ecosystem."),(0,i.kt)("p",null,"Our solution stands out within the Polkadot and Substrate SDK ecosystem due to its user-friendly GraphQL interface and TypeScript-based SDK. These features streamline interaction with Uniques and Assets on Statemine, reducing the complexity of querying these assets."),(0,i.kt)("p",null,"Moreover, the AssetHub Indexer is designed to be versatile, supporting a broad range of use cases. Developers can also leverage our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kodadot/sub-scaffold"},"sub-scaffold UI")," template to bootstrap their projects quickly. This template, a forkable Substrate dev stack focused on rapid product iterations, accelerates the development process and allows developers to focus on creating innovative and user-friendly dApps, rather than getting bogged down in the initial setup."),(0,i.kt)("p",null,"Our target audience for this proposal includes Web3 projects and blockchain developers, whether they are just starting out or already established within the Polkadot and Substrate SDK ecosystem. We believe the AssetHub Indexer can provide significant value to these developers, enabling them to build more efficient and user-friendly dApps like ",(0,i.kt)("a",{parentName:"p",href:"https://kodadot.xyz/"},"KodaDot"),"."),(0,i.kt)("p",null,"AssetHub also plays significant for the ",(0,i.kt)("a",{parentName:"p",href:"https://kodadot.xyz/"},"KodaDot")," NFT marketplace, which is one of the main consumers for this indexer. Thanks to that, developers can find real-world examples of how to effectively make GraphQL queries and learn more about using Uniquery."),(0,i.kt)("p",null,"Regarding competition within the Polkadot and Substrate SDK ecosystem, the AssetHub Indexer differentiates itself through its focus on NFT-oriented data solutions, user-friendly interface, and commitment to simplifying the development process. Including the sub-scaffold UI template further sets it apart, providing developers with a ready-to-use foundation for their projects. Moreover, the AssetHub Indexer is already being utilized by ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/SubsocialChain/status/1674435226334904320"},"Subsocial")," and KodaDot, demonstrating its practical application and effectiveness. We plan to further promote the indexer within the ecosystem to onboard new developers and explore new solutions. These factors position the AssetHub Indexer as a unique and valuable tool within the Polkadot and Substrate SDK ecosystem, ultimately serving as a Common Good solution."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members-in-order-of-joining-time"},"Team members (In order of joining time)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Matej Nem\u010dek - Project Lead"),(0,i.kt)("li",{parentName:"ul"},"Viktor Vala\u0161t\xedn - Developer")),(0,i.kt)("h3",{id:"contact-"},"Contact \ud83d\udcde"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:"),"  Matej Nem\u010dek"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:"),"  ",(0,i.kt)("a",{parentName:"li",href:"mailto:matej.nemcek@geefu.net"},"matej.nemcek@geefu.net"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:"),"  Proletarska cesta 4, 1000 Ljubljana, Slovenia, Europe"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:"),"  GenArt, Matej Nem\u010dek s.p.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Matej Nem\u010dek")," is the Founder and CEO of ",(0,i.kt)("a",{parentName:"p",href:"https://kodadot.xyz/"},"KodaDot"),". He has been instrumental in the growth and development of KodaDot, leading the team to create the best end-user experience on the Asset hub. Matej's leadership and vision have been pivotal in transforming KodaDot into a collaborative hub where creators, developers, and community members work collectively for decision-making."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Viktor Vala\u0161t\xedn"),", also known as Viki Val, is the Co-founder of KodaDot. He is responsible for the technical aspects of the project. Viktor has been working on implementing MoonBeam and MoonRiver NFT EVM smart contracts and enabling read-only access to existing components for seamless end-user interaction. His technical expertise has been crucial in successfully launching the Basilisk NFT Marketplace pallet in the Fall of 2022."),(0,i.kt)("p",null,"Matej and Viktor are strongly committed to the Polkadot ecosystem and have demonstrated their ability to deliver high-quality, impactful projects. They bring a wealth of knowledge and experience to the AssetHub Indexer project. Their work has earned KodaDot the number one rank as a decentralized dapp in the Polkadot ecosystem on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/topics/polkadot"},"Github"),". You can read more about their work and KodaDot's contributions to the Polkadot ecosystem on the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-nft-projects#kodadot"},"Polkadot Wiki"),"."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kodadot/stick"},"https://github.com/kodadot/stick")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kodadot/nft-gallery"},"https://github.com/kodadot/nft-gallery"))),(0,i.kt)("h4",{id:"team-github-accounts-"},"Team GitHub accounts \ud83e\uddd1\u200d\ud83d\udcbb"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vikiival"},"Viktor Vala\u0161t\xedn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yangwao"},"Matej Nem\u010dek"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-"},"Team LinkedIn Profiles \ud83e\uddd1\u200d\ud83c\udf93"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://linkedin.com/in/mnemcek/"},"Matej Nemcek")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://linkedin.com/in/vikival/"},"Viktor Valastin"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kodadot/stick/milestone/1"},"github.com/kodadot/stick/milestone/1")," - Milestone 1 track"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kodadot/stick"},"github.com/kodadot/stick")," This is the repo for AssetHub Indexer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kodadot/uniquery"},"github.com/kodadot/uniquery")," This is the repo for SDK.")),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:"),"  3 months \u231b\ufe0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:"),"  30,000 USD \ud83d\udcb0")),(0,i.kt)("h2",{id:"milestone-1---assethub-indexer-implementation-first-part"},"Milestone 1 - AssetHub Indexer Implementation first part"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:"),"  3 months \u231b\ufe0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 30,000 USD \ud83d\udcb0")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"Licensing"),(0,i.kt)("td",{parentName:"tr",align:null},"MIT License will be applicable.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Comprehensive inline code documentation and an explicit README file to guide the project setup and execution.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Test Guidelines"),(0,i.kt)("td",{parentName:"tr",align:null},"Testing will cover major functionality with unit tests and provide a guide for executing these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker Integration"),(0,i.kt)("td",{parentName:"tr",align:null},"A Dockerfile will enable the project to run within a Docker container.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1a."),(0,i.kt)("td",{parentName:"tr",align:null},"Backward Compatibility Maintenance"),(0,i.kt)("td",{parentName:"tr",align:null},"Ensuring backward compatibility with current Uniques v1.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1b."),(0,i.kt)("td",{parentName:"tr",align:null},"Collection Schema Development"),(0,i.kt)("td",{parentName:"tr",align:null},"Development of a GraphQL schema entity that represents the collection.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1c."),(0,i.kt)("td",{parentName:"tr",align:null},"NFT Schema Development"),(0,i.kt)("td",{parentName:"tr",align:null},"Formulation and creation of a GraphQL schema entity representing Non-fungible tokens.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Unique v1.1 Handlers"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement a handlers to index buy, set_price events from the chain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"NFT Pallet Handlers"),(0,i.kt)("td",{parentName:"tr",align:null},"Handler created for indexing create, mint, buy, set_price, transfer, burn events from the chain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4a."),(0,i.kt)("td",{parentName:"tr",align:null},"On-chain Attributes Schema Design"),(0,i.kt)("td",{parentName:"tr",align:null},"Development and design of a GraphQL schema entity representing on-chain attributes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4b."),(0,i.kt)("td",{parentName:"tr",align:null},"On-chain Attributes Handlers"),(0,i.kt)("td",{parentName:"tr",align:null},"Implementing a four handlers to index the creation and deletion of metadata set for collection and NFT from the chain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5a."),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata Schema Development"),(0,i.kt)("td",{parentName:"tr",align:null},"Creating and designing a GraphQL schema entity representing metadata.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5b."),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata Handlers"),(0,i.kt)("td",{parentName:"tr",align:null},"Implementing a four handlers to index the creation and deletion of an attribute for collection and NFT from the chain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5c."),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata IPFS Integration Handler"),(0,i.kt)("td",{parentName:"tr",align:null},"Design a handler to retrieve IPFS Metadata from the IPFS network.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5d."),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata IPFS Unification Handler"),(0,i.kt)("td",{parentName:"tr",align:null},"Design and integrate the library to uniform IPFS metadata into one format (OpenSea,TZIP-16,ERC-5773, FXhash)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6a."),(0,i.kt)("td",{parentName:"tr",align:null},"NFT Royalties Schema Integration"),(0,i.kt)("td",{parentName:"tr",align:null},"Design and include royalty support within the GraphQL schema.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6b."),(0,i.kt)("td",{parentName:"tr",align:null},"NFT Royalties Addition Handler"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement a handler to add royalty into NFT.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"6c."),(0,i.kt)("td",{parentName:"tr",align:null},"NFT Royalties PAYOUT Handler"),(0,i.kt)("td",{parentName:"tr",align:null},"Creation of handler to index royalty payout events from the chain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7a."),(0,i.kt)("td",{parentName:"tr",align:null},"Fungible Assets Schema Creation"),(0,i.kt)("td",{parentName:"tr",align:null},"Design and formulation of a GraphQL schema entity representing fungible assets.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7b."),(0,i.kt)("td",{parentName:"tr",align:null},"Fungible Assets Force Creation"),(0,i.kt)("td",{parentName:"tr",align:null},"Handlers will be developed to add system tokens like KSM/DOT into fungible assets.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7c."),(0,i.kt)("td",{parentName:"tr",align:null},"Fungible Assets CREATE Event"),(0,i.kt)("td",{parentName:"tr",align:null},"An event handler for indexing the creation of a fungible event from a chain, such as (RMRK/USDT) will be developed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7d."),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata Support for Fungible Assets"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement a handler to add metadata to a fungible asset event from the chain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"7e."),(0,i.kt)("td",{parentName:"tr",align:null},"Fungible Asset Allowlist Setup"),(0,i.kt)("td",{parentName:"tr",align:null},"Setting up allows list-based indexing of fungible assets.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8a."),(0,i.kt)("td",{parentName:"tr",align:null},"Data Views Development"),(0,i.kt)("td",{parentName:"tr",align:null},"Construction of data views for efficient access to indexed data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8b."),(0,i.kt)("td",{parentName:"tr",align:null},"Implementing Metadata Caching Layer"),(0,i.kt)("td",{parentName:"tr",align:null},"Develop and retry IPFS metadata if un-indexed by Metadata IPFS Integration Handler.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9."),(0,i.kt)("td",{parentName:"tr",align:null},"Transfer of Collection Ownership"),(0,i.kt)("td",{parentName:"tr",align:null},"Incorporate functionality to transfer collection ownership.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10a."),(0,i.kt)("td",{parentName:"tr",align:null},"Collection settings Schema Design"),(0,i.kt)("td",{parentName:"tr",align:null},"Development and design of a GraphQL schema entity representing Collection settings")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"10b."),(0,i.kt)("td",{parentName:"tr",align:null},"Collection settings handler"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement a handler to add collection settings into data")))),(0,i.kt)("h2",{id:"future-plans-"},"Future Plans \ud83d\udd2d"),(0,i.kt)("p",null,"Upon the successful deployment of the AssetHub Indexer, our team plans to continue refining and expanding its capabilities in response to user feedback and technological advancements. We have outlined several key enhancements and upgrades that we aim to implement:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Development of an explorer to facilitate navigation within the NFT ecosystem."),(0,i.kt)("li",{parentName:"ol"},"Introduction of collections functionality for systematic organization of NFTs."),(0,i.kt)("li",{parentName:"ol"},"Creation of view modules to visually present NFT details."),(0,i.kt)("li",{parentName:"ol"},"Establishment of user profiles to enable personalized user interfaces."),(0,i.kt)("li",{parentName:"ol"},"Incorporation of constituent elements for individual NFT representation."),(0,i.kt)("li",{parentName:"ol"},"Implement action components for functionalities like LIST, SEND, BUY, MINT, BURN, and Atomic Swap."),(0,i.kt)("li",{parentName:"ol"},"Development of comprehensive statistical representations and analytics mechanisms."),(0,i.kt)("li",{parentName:"ol"},"Introduction of rankings to highlight top-performing users, collections, or items."),(0,i.kt)("li",{parentName:"ol"},"Personalization of the user interface to enhance the user experience."),(0,i.kt)("li",{parentName:"ol"},"Maintenance of compatibility with runtime upgrades and changes in the Kusama/Statemine ecosystem."),(0,i.kt)("li",{parentName:"ol"},"Regular updates to keep up with Substrate for continuous system enhancement."),(0,i.kt)("li",{parentName:"ol"},"Management of upgrades to parachain runtime versions, including indexer enhancements and related costs.")),(0,i.kt)("h2",{id:"additional-information--"},"Additional Information  \u2795"),(0,i.kt)("p",null,"The AssetHub Indexer project continues our team's various projects and implementations in the Polkadot ecosystem. We have already attracted interest from developers within the Polkadot and Kusama ecosystems. Notably, we have in 2019 previously received a grant from the W3F for creating Vue.js UI utilities, components, and libraries, details of which can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/Vuejs_ui-components.md"},"here"),"."),(0,i.kt)("p",null,"This previous grant allowed us to reimplement keyring into Vue.js & TypeScript, demonstrating our hands-on experience with the polkadot.js.org/common utilities. The result of this work can be seen in the ",(0,i.kt)("a",{parentName:"p",href:"https://subkey.netlify.com/"},"web-based Subkey")," tool."),(0,i.kt)("p",null,"We learned about the Grants Program through a personal recommendation. We believe that our project aligns well with the program's goals, and we are excited about the potential to further contribute to the Polkadot ecosystem."))}m.isMDXComponent=!0}}]);