"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8714],{44792:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(16758);const l={},i="OpenSea.js on polkadot",o={unversionedId:"Applications/pacific_store",id:"Applications/pacific_store",title:"OpenSea.js on polkadot",description:"- Proposer: vlbos",source:"@site/docs/Applications/pacific_store.md",sourceDirName:"Applications",slug:"/Applications/pacific_store",permalink:"/Grants-Program/Applications/pacific_store",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Open rollup - MVP - Phase 1",permalink:"/Grants-Program/Applications/openrollup-mvp-phase-1"},next:{title:"drand in substrate",permalink:"/Grants-Program/Applications/pallet-drand-client"}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"A brief description of the project.",id:"a-brief-description-of-the-project",level:4},{value:"An indication of how you will integrate this project into Substrate / Polkadot / Kusama.",id:"an-indication-of-how-you-will-integrate-this-project-into-substrate--polkadot--kusama",level:4},{value:"An indication of why your team is interested in creating this project.",id:"an-indication-of-why-your-team-is-interested-in-creating-this-project",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Build your own OpenSea-powered marketplace",id:"build-your-own-opensea-powered-marketplace",level:4},{value:"Full customizability",id:"full-customizability",level:4},{value:"OpenSea SDK",id:"opensea-sdk",level:4},{value:"OpenSea frontend portal Creator",id:"opensea-frontend-portal-creator",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Opensea.js backend  orderbook On Polkadot",id:"milestone-1---openseajs-backend--orderbook-on-polkadot",level:3},{value:"Milestone 2 opensea.js integrate polkadot.js",id:"milestone-2-openseajs-integrate-polkadotjs",level:3},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"openseajs-on-polkadot"},"OpenSea.js on polkadot"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," vlbos"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 1NpKNwNSAdoVgwD4XXwe8caLheZRVrFVBL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/110#issuecomment-908594354"},"Terminated"))),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("h4",{id:"a-brief-description-of-the-project"},"A brief description of the project."),(0,r.kt)("p",null,"When it comes to the rise of crypto collectables, it\u2019s no surprise that many secondary markets have arisen for the exchange of these unique assets."),(0,r.kt)("p",null,"For those unfamiliar with non-fungible tokens (better known as NFTs), they are tokens which are unique from one another due to special characteristics or identifiers which distinguish them from others in a similar set."),(0,r.kt)("p",null,"Specifically within DeFi, we\u2019ve seen NFTs play a role in the tokenization of assets and contracts alike, all of which play a larger role in the notion of composability \u2013 or different products interacting with one another towards a larger ecosystem."),(0,r.kt)("p",null,"In this overview, we\u2019ll dive into OpenSea \u2013 an industry-leading decentralized exchange (DEX) for NFTs built on Polkadot/Kusama."),(0,r.kt)("p",null,"OpenSea is an open-sourced crypto collectible marketplace which allows users to trade popular tokens built on interoperable standards like ."),(0,r.kt)("p",null,"Prior to OpenSea, there was no easy way to trade crypto collectables other than brokering over-the-counter (OTC) deals \u2013 a situation which invokes a large amount of trust and counterparty risk."),(0,r.kt)("p",null,"With OpenSea, users can bid directly for items owned by other users, with assets being exchanged instantaneously in the event the seller accepts a bid or a buyer accepts an offer."),(0,r.kt)("p",null,"While there are a number of other crypto collectible marketplaces on the market, OpenSea currently leads as the defacto choice for swapping NFTs."),(0,r.kt)("h4",{id:"an-indication-of-how-you-will-integrate-this-project-into-substrate--polkadot--kusama"},"An indication of how you will integrate this project into Substrate / Polkadot / Kusama."),(0,r.kt)("p",null,"OpenSea is a decentralized exchange platform. It will have three high-level components."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Parachain on Polkadot for bringing liquidity from Polkadot\u2019s interoperability community.")),(0,r.kt)("h4",{id:"an-indication-of-why-your-team-is-interested-in-creating-this-project"},"An indication of why your team is interested in creating this project."),(0,r.kt)("p",null,"We are amused by the OpenSea of centralized institutions cropping up around the decentralized idea of open, peer to peer, programmable internet of value. Decentralized Exchanges are built on the idea of non-custodial interoperability. Polkadot and Substrate are the most promising blockchain interoperability platforms. We want to provide our users with maximum liquidity, security, and world-class user experience. Hence, we are excited and confident that building a DEX on Substrate, supported by Polkadot\u2019s interoperability, will increase user engagement and overall trading experience when combined with our trading expertise over the years."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("h4",{id:"build-your-own-opensea-powered-marketplace"},"Build your own OpenSea-powered marketplace"),(0,r.kt)("p",null,"OpenSea provides a robust suite of tools for developers building projects with blockchain-based digital assets."),(0,r.kt)("p",null,"Project developers can power their marketplace directly on OpenSea's infrastructure, gaining instant access to our full suite of ecommerce features and earning revenue every time a sale is made."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The most advanced marketplace feature set\nOpenSea's platform provides the most powerful way for your users to buy and sell their items\u2014auctioning, bidding, bundling, you name it. All developers get instantaneous access to our suite of marketplace features:"),(0,r.kt)("li",{parentName:"ol"},"Product Listing Items can be sold at a set price or gifted"),(0,r.kt)("li",{parentName:"ol"},"Dutch Auctions Item's price can fluctuate up or down in a set timeframe"),(0,r.kt)("li",{parentName:"ol"},"Item Bidding eBay-style Bidding Auction your items to the highest bidder"),(0,r.kt)("li",{parentName:"ol"},"Bundle Sales Items can be sold in groups")),(0,r.kt)("h4",{id:"full-customizability"},"Full customizability"),(0,r.kt)("p",null,"You can tailor your marketplace exactly how you want it. Whether you're building with our instant OpenSea storePortal solution, on your own domain with our white-labeled integration, or with a DIY approach using the OpenSea SDK, you'll be able to get the exact look and feel you want for your marketplace experience."),(0,r.kt)("h4",{id:"opensea-sdk"},"OpenSea SDK"),(0,r.kt)("p",null,"Build your own marketplace on OpenSea, using our SDK"),(0,r.kt)("p",null,"Want to build your own integration on top of OpenSea? Check out our SDK for the underlying toolset that allows you to power your in-game marketplace with our platform."),(0,r.kt)("p",null,"With the SDK, developers can build your own marketplace from scratch and integrate it more deeply in your game. Perhaps you're building a custom backend for your game and want to create trades server-side, or perhaps you need people to be able to create auctions in a deep area of gameplay. The sky is really the limit with the SDK."),(0,r.kt)("h4",{id:"opensea-frontend-portal-creator"},"OpenSea frontend portal Creator"),(0,r.kt)("p",null,'The simplest way to leverage OpenSea is through the OpenSea frontend portal creator feature. As long as your contract is stardard compliant, this option works instantly. Just follow the OpenSea developer tutorial to set up your items and get an instant marketplace for your items. Developers have called the process "magical".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An overview of the technology stack to be used")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node.js"),(0,r.kt)("li",{parentName:"ul"},"Polkadot-js/api"),(0,r.kt)("li",{parentName:"ul"},"substrate-developer-hub/substrate-node-template"),(0,r.kt)("li",{parentName:"ul"},"Polkadot"),(0,r.kt)("li",{parentName:"ul"},"Kusama")),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Are there any other projects similar to yours? If so, how is your project different?\nTo the best of our knowledge, there is no project working on creating collectables NFTs in Polkadot. There are some existing projects that create NFTs in Ethereum ( OpenSea etc.)."),(0,r.kt)("p",null,"OpenSea will make it to buy and sell collectables NFTs in Polkadot/Kusama. It aims to close the gap and enable more business use cases for collectables NFTs in Polkadot ecosystems."),(0,r.kt)("p",null,"OpenSea is deeply committed to web3 and our stack is focussed firmly on helping make it simple for developers to bring truly decentralized applications, online autonomy and new business models to users. Adding the ability to interface with parachains, as a bridge to the Polkadot ecosystem opens up a world of financial and other tools to those developers, and provides developers working in or interested in the Polkadot ecosystem a fast simple way to get started. collectables NFT in Defi is the perfect proving ground for this."),(0,r.kt)("p",null,"Main differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support Chinese"),(0,r.kt)("li",{parentName:"ul"},"Base on Polkadot/Kusama"),(0,r.kt)("li",{parentName:"ul"},"Build smartcontract parachain")),(0,r.kt)("p",null,"Pacific_store vs Rarelink differences:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pacific_store"),(0,r.kt)("th",{parentName:"tr",align:null},"Rarelink"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cross-chain buying and selling NFT marketplace"),(0,r.kt)("td",{parentName:"tr",align:null},"Cross-chain mint and transfer NFT Protocol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dapp for instant buying and selling NFT"),(0,r.kt)("td",{parentName:"tr",align:null},"Infrastructure of creating dynamic NFT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Build an instant, customizable marketplace for your game items, collectibles, or other ERC721 assets"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deploy an instantly tradeable ERC1155 contract"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Build own custom sale contract"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Build the peer-to-peer marketplace for your users to trade your items"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Issue your initial items to your users"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sell packs of items to your users"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Airdop items to users as rewards"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Have lootboxes that can be purchased and even traded by users"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integrate an existing NFT contract into OpenSea"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Build a customizable, marketplace for your NFT"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Provides the most powerful way for your users to buy and sell their items\u2014auctioning, bidding, bundling, you name it"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Provides a set of r smart contracts specifically designed for buying and selling unique digital assets. You won't need to deploy any additional smart contracts (other than your ERC721 or ERC155 contract) in order for your items to be instantly tradeable with the SDK."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full customizability,you can tailor own marketplace exactly how you want it"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cross-chain via IBC"),(0,r.kt)("td",{parentName:"tr",align:null},"Cross-chain via Oracle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cross-chain based on Polkadot,Ethereum,Eos,Bos,Tron"),(0,r.kt)("td",{parentName:"tr",align:null},"Cross-chain based on Polkadot,Ethereum")))),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sam Lee  "),(0,r.kt)("li",{parentName:"ul"},"yang zhou  "),(0,r.kt)("li",{parentName:"ul"},"Jack"),(0,r.kt)("li",{parentName:"ul"},"Simon Wang"),(0,r.kt)("li",{parentName:"ul"},"Frank ")),(0,r.kt)("h3",{id:"team-website"},"Team Website"),(0,r.kt)("p",null,"No."),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("p",null,"FOS Foundation LTD, Singapore (Reg 201729444E)",(0,r.kt)("br",{parentName:"p"}),"\n","22 NORTH CANAL ROAD #02-00, Singapore, 048834"),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Our team is based in China . We are very interested in substrate and we have done a lot of related development work, such as build smartcontract parachain of eos and tron."),(0,r.kt)("p",null,"But our focus has always been interblockchain communitcation , which extends it more domains ."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sam Lee  ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vlbos"},"https://github.com/vlbos"),"  "),(0,r.kt)("li",{parentName:"ul"},"yang zhou  ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/TraceBundy"},"https://github.com/TraceBundy"),"  "),(0,r.kt)("li",{parentName:"ul"},"Jack ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Jack-Jhon"},"https://github.com/Jack-Jhon")),(0,r.kt)("li",{parentName:"ul"},"Simon Wang - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vonhenry"},"https://github.com/vonhenry")),(0,r.kt)("li",{parentName:"ul"},"Frank - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Frank-AFN"},"https://github.com/Frank-AFN"))),(0,r.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/vchengsong/"},"https://www.linkedin.com/in/vchengsong/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/yuyang-zhang-499292107/"},"https://www.linkedin.com/in/yuyang-zhang-499292107/"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 12 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 0.7 BTC.\n")),(0,r.kt)("h3",{id:"milestone-1---openseajs-backend--orderbook-on-polkadot"},"Milestone 1 - Opensea.js backend  orderbook On Polkadot"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 6 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 0.4 BTC"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Programming Language & framework"),":Rust  with substrate")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Describe functionalities and instructions on compiling")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Substrate Runtime Module:backend orderbook"),(0,r.kt)("td",{parentName:"tr",align:null},"The orderbook includes:",(0,r.kt)("inlineCode",{parentName:"td"},"postOrder``postAssetWhitelist"),",",(0,r.kt)("inlineCode",{parentName:"td"},"getOrder"),",",(0,r.kt)("inlineCode",{parentName:"td"},"getOrders"),",",(0,r.kt)("inlineCode",{parentName:"td"},"getAsset"),",",(0,r.kt)("inlineCode",{parentName:"td"},"getAssets"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Substrate Runtime Module:wyvern Exchange"),(0,r.kt)("td",{parentName:"tr",align:null},"The Exchange includes:",(0,r.kt)("inlineCode",{parentName:"td"},"hashOrder"),",",(0,r.kt)("inlineCode",{parentName:"td"},"requireValidOrder"),",",(0,r.kt)("inlineCode",{parentName:"td"},"validateOrderParameters"),",",(0,r.kt)("inlineCode",{parentName:"td"},"validateOrder"),",",(0,r.kt)("inlineCode",{parentName:"td"},"approveOrder"),",",(0,r.kt)("inlineCode",{parentName:"td"},"cancelOrder"),".",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ProjectOpenSea/wyvern-js/blob/master/src/wyvern-ethereum/contracts/exchange/ExchangeCore.sol"},"wyvern"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Unit Tests"),(0,r.kt)("td",{parentName:"tr",align:null},"The code will have 95% unit-test coverage to ensure functionality")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker file"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker image with a Substrate chain using the sdk, demonstrating its functionality")))),(0,r.kt)("h3",{id:"milestone-2-openseajs-integrate-polkadotjs"},"Milestone 2 opensea.js integrate polkadot.js"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 6 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 0.3 BTC"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Programming Language & framework"),":Javascript/Typescript with node.js"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides the api of functions of the code .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"SDK tutorial"),(0,r.kt)("td",{parentName:"tr",align:null},"How to create buyorder ,sell order ;how to create crowdsale,how to create auction etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Base SDK:Pacific Store-js/api :base"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3a."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getAsset")," Fetching Assets"),(0,r.kt)("td",{parentName:"tr",align:null},"Assets are items on OpenSea. They can be non-fungible (conforming to standards like ERC721), semi-fungible (like ERC1155 assets), and even fungible (ERC20).The ",(0,r.kt)("inlineCode",{parentName:"td"},"Asset")," type is the minimal type you need for most marketplace actions. You can fetch an asset using the ",(0,r.kt)("inlineCode",{parentName:"td"},"OpenSeaAPI"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3b."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getAssetBalance")," Checking Balances and Ownerships"),(0,r.kt)("td",{parentName:"tr",align:null},"the ",(0,r.kt)("inlineCode",{parentName:"td"},"Asset")," type is that it unifies logic between fungibles, non-fungibles, and semi-fungibles.Once you have an ",(0,r.kt)("inlineCode",{parentName:"td"},"Asset"),", you can see how many any account owns, regardless of whether it's an ERC-20 token or a non-fungible goods.You can use this same method for fungible ERC-20 tokens . As a convenience, you can use this fungible wrapper for checking fungible balances.",(0,r.kt)("inlineCode",{parentName:"td"},"getTokenBalance"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3c."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createBuyOrder")," Making Offers"),(0,r.kt)("td",{parentName:"tr",align:null},"Once you have your asset, you can do this to make an offer .When you make an offer on an item owned by an OpenSea user, ",(0,r.kt)("strong",{parentName:"td"},"that user will automatically get an email notifying them with the offer amount"),", if it's above their desired threshold.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3d."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createSellOrder")," Making Listings / Selling Items"),(0,r.kt)("td",{parentName:"tr",align:null},"To sell an asset, call ",(0,r.kt)("inlineCode",{parentName:"td"},"createSellOrder"),". You can do a fixed-price listing, where ",(0,r.kt)("inlineCode",{parentName:"td"},"startAmount")," is equal to ",(0,r.kt)("inlineCode",{parentName:"td"},"endAmount"),", or a declining Dutch auction, where ",(0,r.kt)("inlineCode",{parentName:"td"},"endAmount")," is lower and the price declines until ",(0,r.kt)("inlineCode",{parentName:"td"},"expirationTime")," is hit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3e."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getOrder({ side: OrderSide.Sell, ... })")," ",(0,r.kt)("inlineCode",{parentName:"td"},"fulfillOrder")," Buying Items"),(0,r.kt)("td",{parentName:"tr",align:null},"To buy an item , you need to fulfill a sell order.If the order is a sell order , the taker is the ",(0,r.kt)("em",{parentName:"td"},"buyer")," and this will prompt the buyer to pay for the item(s).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3f."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getOrder({ side: OrderSide.Buy, ... })")," ",(0,r.kt)("inlineCode",{parentName:"td"},"fulfillOrder"),"Accepting Offers"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar to fulfilling sell orders , you need to fulfill a buy order on an item you own to receive the tokens in the offer.If the order is a buy order , then the taker is the ",(0,r.kt)("em",{parentName:"td"},"owner")," and this will prompt the owner to exchange their item(s) for whatever is being offered in return.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createBundleBuyOrder")," Bidding on Multiple Assets"),(0,r.kt)("td",{parentName:"tr",align:null},"You can also make an offer on a bundle of assets. This could also be used for creating a bounty for whoever can acquire a list of items.When you bid on multiple assets, an email will be sent to the owner if a bundle exists on OpenSea that contains the assets. In the future, OpenSea will send emails to multiple owners if the assets aren't all owned by the same wallet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4a."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createBuyOrder (PNSShortNameAuction)")," Bidding on PNS Short Name Auctions"),(0,r.kt)("td",{parentName:"tr",align:null},"The Polkadot Name Service (PNS) is auctioning short (3-6 character) names that can be used for labeling wallet addresses and more. To bid, you must use the PNS Short Name schema.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4b."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createSellOrder(waitForHighestBid: true)")," Creating English Auctions"),(0,r.kt)("td",{parentName:"tr",align:null},"English Auctions are auctions that start at a small amount (we recommend even doing 0!) and increase with every bid. At expiration time, the item sells to the highest bidder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createFactorySellOrders")," Running Crowdsales"),(0,r.kt)("td",{parentName:"tr",align:null},"You can now sell items to users To create a presale or crowdsale and create batches of sell orders for a single asset factory, creating your crowdsale contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"Advanced SDK:Pacific Store-js/api"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides purchasing for users server-side or with a bot, making bundling items together, or making bids in different Standard(ERC-20) tokens.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6a."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transfer({  asset: { tokenId, tokenAddress },  fromAddress, toAddress})")," Transferring Items or Coins (Gifting)"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenSea.js is the ability to transfer any supported asset (fungible or non-fungible tokens) .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6b."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fulfillOrder({  order,  accountAddress,   recipientAddress })")," Purchasing Items for Other Users"),(0,r.kt)("td",{parentName:"tr",align:null},"You can buy and transfer an item to someone else in one step! Just pass the ",(0,r.kt)("inlineCode",{parentName:"td"},"recipientAddress")," parameter.If the order is a sell order , the taker is the ",(0,r.kt)("em",{parentName:"td"},"buyer")," and this will prompt the buyer to pay for the item(s) but send them to the ",(0,r.kt)("inlineCode",{parentName:"td"},"recipientAddress"),". If the order is a buy order ( ",(0,r.kt)("inlineCode",{parentName:"td"},"OrderSide.Buy"),"), the taker is the ",(0,r.kt)("em",{parentName:"td"},"seller")," but the bid amount be sent to the ",(0,r.kt)("inlineCode",{parentName:"td"},"recipientAddress"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6c."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transferAll")," Bulk Transfers"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenSea.js is the ability to transfer multiple items at once in a single transaction. This works by grouping together as many ",(0,r.kt)("inlineCode",{parentName:"td"},"transferFrom")," calls as the Polkadot gas limit allows, which is usually under 30 items, for most item contracts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6d."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createBundleSellOrder")," Creating Bundles"),(0,r.kt)("td",{parentName:"tr",align:null},"You can also create bundles of assets to sell at the same time! If the owner has approved all the assets in the bundle already, only a signature is needed to create it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6e."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createSellOrder(...,paymentTokenAddress)")," Using Standard(ERC-20) Tokens Instead of DOT/KSM"),(0,r.kt)("td",{parentName:"tr",align:null},"You can use ",(0,r.kt)("inlineCode",{parentName:"td"},"getPaymentTokens")," to search for tokens by symbol name. And you can even list all orders for a specific Standard(ERC-20) token by querying the API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6f."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createSellOrder(...,buyerAddress)")," Private Auctions"),(0,r.kt)("td",{parentName:"tr",align:null},"Now you can make auctions and listings that can only be fulfilled by an address or email of your choosing. This allows you to negotiate a price in some channel and sell for your chosen price on OpenSea, ",(0,r.kt)("strong",{parentName:"td"},"without having to trust that the counterparty will abide by your terms!"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6g."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createSellOrder(...,buyerEmail)")," Airdrops and Email Whitelisting"),(0,r.kt)("td",{parentName:"tr",align:null},"create a private sell order targeted to a specific email. The buyer will have to verify that email to fulfill the order.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7."),(0,r.kt)("td",{parentName:"tr",align:null},"Affiliate Program SDK:Pacific Store-js/api"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7a."),(0,r.kt)("td",{parentName:"tr",align:null},"Affiliate Program"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenSea.js allows to you easily create an affiliate program . It's the crypto-equivalent of bounty hunting, and best of all, it's ",(0,r.kt)("strong",{parentName:"td"},"fully paid for by OpenSea")," so you can keep all of your winnings.If you want to be an affiliate, you can use this to ",(0,r.kt)("strong",{parentName:"td"},"win at least 1%")," of the sale price of any listing, both for assets and bundles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7b."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fulfillOrder({ order, accountAddress, referrerAddress })")," Referring Listings"),(0,r.kt)("td",{parentName:"tr",align:null},"You can instantly create an affiliate program for your assets by just passing in one more parameter when fulfilling orders. ",(0,r.kt)("strong",{parentName:"td"},"and OpenSea will pay for it!")," Whenever someone refers a sale or the acceptance of an offer.This works for buying assets and bundles, along with accepting bids that had no referrer attached to them.As long as the referrer hasn't referred the buyer before,OpenSea will send the referrer an email congradulating them, along with ",(0,r.kt)("strong",{parentName:"td"},"1%")," of the item's sale price.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7c."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createBuyOrder({...,  referrerAddress })"),"  Referring Offers"),(0,r.kt)("td",{parentName:"tr",align:null},"you can also refer offers on assets! When the seller accepts the offer, the referrer will get credit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7d."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createBuyOrder({ referrerAddress })")," Custom Affiliate Programs"),(0,r.kt)("td",{parentName:"tr",align:null},"You can use ",(0,r.kt)("inlineCode",{parentName:"td"},"createBuyOrder({ referrerAddress })")," to create your own affiliate programs as well.When buyers place offers or bids on an asset, the referrers will automatically be recorded on OpenSea.cn. Then, you can use the Orderbook API to inspect the ",(0,r.kt)("inlineCode",{parentName:"td"},"metadata")," for orders and manually pay out referrers if you want to. The referrer will be labeled as ",(0,r.kt)("inlineCode",{parentName:"td"},"referrerAddress")," in the ",(0,r.kt)("inlineCode",{parentName:"td"},"metadata")," field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7e."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createSellOrder({..., extraBountyBasisPoints: extraBountyPercent * 100})"),"  Custom Referral Bounties"),(0,r.kt)("td",{parentName:"tr",align:null},"Sellers can customize the bounties they add to their items when listing them for sale. By default, OpenSea will pay referrers 1% and sellers pay them nothing, but sellers can increase this up to the full OpenSea fee for both assets and bundles.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8."),(0,r.kt)("td",{parentName:"tr",align:null},"Unit Tests"),(0,r.kt)("td",{parentName:"tr",align:null},"The code will have 95% unit-test coverage to ensure functionality")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker file"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker image with a Substrate chain using the sdk, demonstrating its functionality")))))),(0,r.kt)("h3",{id:"community-engagement"},"Community engagement"),(0,r.kt)("p",null,"The tutorials and Documentation that we provide will be published as articles in Medium. Meanwhile, we will give talks and do defi sessions to advertise the project to the Polkadot community."),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build & deploy OpenSea template contracts on Polkadot/Kusama/Rococo."),(0,r.kt)("li",{parentName:"ul"},"Full function test on Polkadot/Kusama/Rococo.")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What work has been done so far?\nNo."),(0,r.kt)("li",{parentName:"ul"},"Are there are any teams who have already contributed (financially) to the project?\nNo."),(0,r.kt)("li",{parentName:"ul"},"Have you applied for other grants so far?\nNo.")))}p.isMDXComponent=!0}}]);