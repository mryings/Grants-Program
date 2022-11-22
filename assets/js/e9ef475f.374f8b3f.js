"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4128],{48970:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));a(16758);const l={},o="Everlasting Cash",r={unversionedId:"Applications/EverlastingCash",id:"Applications/EverlastingCash",title:"Everlasting Cash",description:"- Team Name: Cycan Technologies",source:"@site/docs/Applications/EverlastingCash.md",sourceDirName:"Applications",slug:"/Applications/EverlastingCash",permalink:"/Grants-Program/Applications/EverlastingCash",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Doter (A browser extension wallet for Polkadot)",permalink:"/Grants-Program/Applications/Doter"},next:{title:"FIAT on-off-ramp",permalink:"/Grants-Program/Applications/FIAT-on-off-ramp"}},s={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Technical Design Overview",id:"technical-design-overview",level:4},{value:"Tokens",id:"tokens",level:4},{value:"Multifunction Pool",id:"multifunction-pool",level:4},{value:"Inflation Governance",id:"inflation-governance",level:4},{value:"Oracle",id:"oracle",level:4},{value:"Contract",id:"contract",level:4},{value:"Multifunction Pool",id:"multifunction-pool-1",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2013 Implement ELC contracts",id:"milestone-1--implement-elc-contracts",level:3},{value:"Milestone 2 \u2013 Extend functions of the ELC contract.",id:"milestone-2--extend-functions-of-the-elc-contract",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"everlasting-cash"},"Everlasting Cash"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Cycan Technologies"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," ETH address: 0x722043b40dEb4656a103aF03Fd8E781d0146d3F6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:"),": Terminated")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"While the incumbent stablecoins in the market have served the purpose of stabilizing the prices of cryptocurrencies, there are obvious limitations. Fiat-backed stablecoins such as USDT are not decentralized with the risk of being compromised by the central entity; while crypto-backed stablecoins are more vulnerable to price instability, since they are pegged to other cryptocurrencies. The risk of a possible crash for non-collateralized stablecoins is relatively high, since they lack collateral to liquidate the coin back into, while commodity-backed stablecoins might have liquidity problems as physical assets are not so easily liquidated."),(0,i.kt)("li",{parentName:"ul"},"Everlasting Cash is a new kind of stablecoin which solves these issues with a truly decentralized, anti-inflation and stable product with reserves."),(0,i.kt)("li",{parentName:"ul"},"Everlasting Cash a.k.a. ELC is a decentralized algorithmic stablecoin using Substrate with a unique reserve system, i.e. a hybrid of a crypto-collateralized and an algorithmic stablecoin mechanism, with the collateralized mechanism providing the underlying value guarantee, and the algorithmic mechanism incentivizing the participants on one hand, and hedging the downside risk when the demand for the stablecoin is insufficient on the other."),(0,i.kt)("li",{parentName:"ul"},"ELC aims to provide users in the Polkadot ecosystem with a stablecoin that appreciates naturally and achieves the goal of anti-inflation.")),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Everlasting Cash (ELC) contracts are written in Rust language and can be deployed to Polkadot/Kusama parachain (ink! pallet)."),(0,i.kt)("h4",{id:"technical-design-overview"},"Technical Design Overview"),(0,i.kt)("img",{src:"https://github.com/CycanTech/docs/blob/main/Technical_Design_Overview.png",width:"900"}),(0,i.kt)("h4",{id:"tokens"},"Tokens"),(0,i.kt)("p",null,"1) Everlasting Parachain Token - ELP\nELP is a native token of the Everlasting Parachain (a parachain on Kusama). Participants are able to send ELP to the ELC multifunction contract as reserve assets to exchange ELC: according to the different system liability ratios, the contract will return both ELC and rELP, or rELP only to participants (see \u201cReserve\u201d paragraph below)."),(0,i.kt)("p",null,"2) ELC Token\nELC token is the stablecoin within the ELC contract system, with the initial pegged rate of 1 USD value in the year of 2021. The pegged rate varies over time based on inflation and depends on whether its supply expands or shrinks based on the system LR."),(0,i.kt)("p",null,"3) rELP Token\nrELP token is a risk asset in the ELC system (an equity in the system). Participants are able to add rELP liquidity to the multifunction pool, which could be realized by sending ELP to ELC contract. The system encourages user to do long-term liquidity mining so as to keep the reserve pool more stable with liquidity."),(0,i.kt)("h4",{id:"multifunction-pool"},"Multifunction Pool"),(0,i.kt)("p",null,"1) Reserve\nParticipants can send ELPs to the ELC system in exchange for both ELC and rELP, or rELP alone, depending on what the system liability ratios are. When the system LR is less than 30%, participants who send ELPs to the ELC system can obtain a certain amount of ELC and rELP minted and the LR of the system remains unchanged. When the system LR is higher than 30%, participants who send ELPs to the ELC system will only get rELP,  and this can decrease LR."),(0,i.kt)("p",null,"2) Risk Reserve Fund\nThe risk reserve fund includes two assets (ELPs and ELCs). The purpose of the Risk Reserve Fund is to keep the ELC prices floating between 98% and 102% of the ELC aim price (ELCaim). For example, 1 million ELPs out of the overall 21 million of ELPs initial issuance are used as initial risk reserves.\nSuch risk reserve fund is used as follows:  when ELP price is lower than 98% of ELCaim, the ELC system will swap ELP for ELC until all ELP in the pool are swapped into ELC to keep the price back to ELCaim. When ELP price is higher than 102% of ELCaim, the ELC system will swap ELC to ELP until all ELCs in the pool are swapped into ELP to keep the price back to ELCaim."),(0,i.kt)("p",null,"3) Liquidity Mining\nParticipants who have deposited ELPs to the reserve pool contract, can obtain rELP and use rELP to participate in the liquid mining. In order to maintain the size of reserves, participants are encouraged to do long-term liquidity mining. Participants who join liquidity mining will earn more tokens if they hold the tokens longer."),(0,i.kt)("h4",{id:"inflation-governance"},"Inflation Governance"),(0,i.kt)("p",null,"The generation time of ELP is 6 seconds per block. The ELP target price rises every 10,000 blocks in K, K is an anti-inflation factor. The inflation factor K can be adjusted through the ELP governance mechanism. rELP holders can vote for the adjustment of the anti-inflation factor K when the USD inflation goes into hyperinflation."),(0,i.kt)("h4",{id:"oracle"},"Oracle"),(0,i.kt)("p",null,"The oracle of reserve asset ELP and stablecoin ELC is implemented with Chainlink-Polkadot. We utilize Chainlink's decentralized Oracle network to quickly and securely connect end-to-end all the inputs and outputs of smart contracts to avoid pitfalls associated with deploying our own Oracle, such as long delays, additional charges, and even fatal security vulnerabilities."),(0,i.kt)("h4",{id:"contract"},"Contract"),(0,i.kt)("p",null,"1) ELC - Minting and burning of the ELC token\nMints ELC amount to the recipient account.\nBurns ELC amount from the account."),(0,i.kt)("p",null,"2) rELP - Minting and burning of the rELP token\nMints rELP amount to the recipient account.\nBurns rELP amount from the account."),(0,i.kt)("h4",{id:"multifunction-pool-1"},"Multifunction Pool"),(0,i.kt)("p",null,"Mints some rELC amount, in exchange for some ELP amount.\nMints some ELC and rELP amounts, in exchange for some ELP amount.\nReturns the amount of ELC and rELP."),(0,i.kt)("p",null,"ELCaim(after adjustment) = ELCaim(before adjustment) ",(0,i.kt)("em",{parentName:"p"},"(1+K)\nLR = Value/P(ELP)")," Amount(ELP)"),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Value is the value of the ELCs that have been issued"),(0,i.kt)("li",{parentName:"ul"},"P isthe price of ELP"),(0,i.kt)("li",{parentName:"ul"},"Amount is the number of ELP in reserve pool")),(0,i.kt)("p",null,"When LR is lower than 0.3, the ELC system mints amounts of ELCs and rELPs, in exchange for amount of ELPs."),(0,i.kt)("p",null,"\u25b3Amount(rELP) = p(ELP) ",(0,i.kt)("em",{parentName:"p"},"\u25b3Amount(ELP)")," (1-LR)/p(rELP)\n\u25b3Amount(ELC) = p(ELP) ",(0,i.kt)("em",{parentName:"p"},"\u25b3Amount(ELP)")," LR"),(0,i.kt)("p",null,"When LR is higher than 0.3, the ELC system mints amount of rELPs only, in exchange for amount of ELPs.\n\u25b3Amount(rELP) = p(ELP) * \u25b3Amount(ELP) /p(rELP)\nWhen ELC is higher than 102% of ELCaim and LR <= 0.7, the ELC system issues amount of ELC to rELP holders (95% of issued ELC) and the pool (5% of issued ELC)."),(0,i.kt)("p",null,"When ELC is higher than 102% of ELCaim, if the multifunction pool has ELC, it swaps amount of ELCs for amount of ELPs, decreasing ELC supply.\nWhen ELC is lower  than 98% of ELCaim, the multifuncitonal pool swaps amount of ELPs for amount of ELCs."),(0,i.kt)("p",null,"When ELC is higher than 102% of ELCaim and LR is <= 0.7, when min (weighted average price of ELC 24 hours, weighted average price of ELC 1 hour) > $1, additional ELCs are issued,  additional ELC will allocate to rELP liquidity provider (95% of issued ELC) and the multifunction pool (5% of issued ELC)."),(0,i.kt)("p",null,"Number of additional ELCs for the day = min (weighted average price of ELCs 24 hours before monitoring point, weighted average price of ELCs 1 hour before monitoring point) /100 * number of ELCs before additional issuance."),(0,i.kt)("p",null,"Number of ELCs obtained by the rELP liquidity miner = number of additional ELCs issued on that day ",(0,i.kt)("em",{parentName:"p"},"95%")," miner\u2019s share"),(0,i.kt)("p",null,"Number of ELCs added to the multifunction pool as risk reserve fund = number of additional ELCs issued on the day * 5%"),(0,i.kt)("p",null,"When ELC is higher than 102% of ELCaim and LR > 0.7, the system will not issue any new ELCs, but will use the risk reserve fund (ELC) to swap amount of ELC for amount of ELP, which can decrease ELC price."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"Everlasting Cash is the stablecoin for the Cycan Network, which is a larger effort to build a decentralized autonomous trust (DAT) protocol for everyone to build business models in fintech and other fields within the Polkadot ecosystem. On the Cycan Network, for instance, anyone can launch a DeFi project, or build an investment portfolio and participate in the decision-making process for any DeFi product on the network."),(0,i.kt)("p",null,"The ELC protocol is a smart contract protocol based on the Cycan Network/Everlasting Parachain."),(0,i.kt)("p",null,"The Cycan Network (CYA) is an parachain built on the Polkadot network. The Everlasting Parachain (ELP), as Cycan\u2019s canary network, is the parachain on Polkadot\u2019s canary network - Kusama network."),(0,i.kt)("p",null,"ELC has a stable target pricing mechanism, called ELCaim. ELCaim is initially set as 1 USD and the pegged rate of ELCaim will be continuously adjusted and stabilized based on the anti-inflation factor (K), forming the anti-inflation algorithmic stablecoin mechanism. ELC not only uses crypto currencies as systemic reserves to decide the basic value of stablecoins, but also uses algorithms to control the supply of ELC so that the prices are at the same level of ELCaim. Users can use other cryptocurrencies including CYA, ELP, DOT, KSM, BTC, ETH and other digital assets proposed by the Cycan community to generate Everlasting Cash in the ELC protocol."),(0,i.kt)("p",null,"Based on the Polkadot/Kusama ecosystem, Everlasting Cash will be playing a huge role in the future DeFi market, thanks to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The adoption a crypto-collateralized mechanism to ensure the basic value of ELC."),(0,i.kt)("li",{parentName:"ol"},"The utilization of a reserve-based liquidity mining mechanism to issue additional ELC, so that ELC grows in an orderly manner with the expansion of demand."),(0,i.kt)("li",{parentName:"ol"},"The anti-inflation model, and using the anti-inflation factor K to adjust the ELCaim (the pegged rate). The annual appreciation rate of ELC is roughly the same as the inflation rate of USD."),(0,i.kt)("li",{parentName:"ol"},"The buffer mechanism with reserves for price falls, which avoid the death loop trap of algorithmic stablecoins.")),(0,i.kt)("p",null,"The ELC reserve pool will prioritize the tokens from the Polkadot system to build a solid stablecoin ecosystem."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("p",null,"The team beyond Everlasting Cash is the Cycan team, an early-stage core pool of talents from around the world, with a background in finance, blockchain development and large-scale software architectures serving multiple industries, business development and media.\nCycan has a core team of developers numbering 10, including a development leader, 7 Rust developers, 1 product manager, and 1 front-end engineer."),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("p",null,"Cycan is directed by the following key roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Donald Gao: founder, financial model designer"),(0,i.kt)("li",{parentName:"ul"},"Michele Ruberl, global tech partner, IT architect"),(0,i.kt)("li",{parentName:"ul"},"Vivi Lin, global partner, CMO")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Contact Name:")," Donald Gao")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"p",href:"mailto:Donald@cycan.network"},"Donald@cycan.network"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Website ",(0,i.kt)("a",{parentName:"p",href:"http://cycan.network"},"http://cycan.network")))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Registered Address:")," to be registered.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Registered Legal Entity:")," Cycan Foundation is being registered in Singapore, ETA March 2021."))),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Cycan\u2019s team has a long experience in the blockchain technology development and financial model designs."),(0,i.kt)("p",null,"The team has developed public chains similar to Ethereum, cross-chain bridges connecting DPOS-based side chain and the notary network, and the open consortium chain with the rPBFT consensus mechanism. The team also has rich experience in smart contract development, including the Bancor-based decentralized transaction protocol, decentralized identity, distributed domain registration and auction, decentralized stable coin protocols, etc."),(0,i.kt)("p",null,"Our developers are proficient in Rust, Java, C++, Solidity, Go and other development languages, and familiar with the Substrate development framework."),(0,i.kt)("p",null,"The team also has extensive experiences in financial model designs, especially for the trust instruments and relevant model designs."),(0,i.kt)("p",null,"Lastly, the team has a consolidated architectural and devops experience both in the context of experimental and in real-world large-scale deployments."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ELP-Runtime-node: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CycanTech/ELP-Runtime-node"},"https://github.com/CycanTech/ELP-Runtime-node"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ELC-contracts: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CycanTech/ELC"},"https://github.com/CycanTech/ELC")))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/donald-gao-6bab74206/"},"https://www.linkedin.com/in/donald-gao-6bab74206/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/vivi-lin-1862276/"},"https://www.linkedin.com/in/vivi-lin-1862276/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/mikrub/"},"https://www.linkedin.com/in/mikrub/")))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Total Estimate Duration:")," 14 weeks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Full-time Equivalent(FTE):")," 4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Total cost:")," 1500 USD  (we accept up to 100% of payment in crypto currencies that are equivalent to $1,500 including DAI)"))),(0,i.kt)("h3",{id:"milestone-1--implement-elc-contracts"},"Milestone 1 \u2013 Implement ELC contracts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Total Estimate Duration:")," 8 weeks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Full-time Equivalent(FTE):")," 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Total cost:")," 1000 USD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Task:")," to fulfill the ELC contracts development based on ink!"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GNU General Public License v3.0 / Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a tutorial that explains how a user can use ELC contract.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"ELC contracts"),(0,i.kt)("td",{parentName:"tr",align:null},"Develop ELC contract implement ELC whitepaper")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1a."),(0,i.kt)("td",{parentName:"tr",align:null},"Anti-Inflation Factor K & On-Chain Governance"),(0,i.kt)("td",{parentName:"tr",align:null},"As the Polkadot parachain, Cycan/ELP network generates a block every 6 seconds or so, and the ELCaim increases by K every 10,000 blocks. In the ELC network, K can be adjusted through the on-chain governance mechanism, which can be decided by public voting in the community.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1b."),(0,i.kt)("td",{parentName:"tr",align:null},"Liability Ratio"),(0,i.kt)("td",{parentName:"tr",align:null},"To swap digital assets into the ELC contract, in which one can obtain both ELC and the risk assets(rXXX) or only the risk asset(rXXX). The difference will be defined by the Liability Ratio(marked as LR).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1c."),(0,i.kt)("td",{parentName:"tr",align:null},"ELC Supply Expansion mechanism"),(0,i.kt)("td",{parentName:"tr",align:null},"When the prices of ELC exceed ELCaim, additional ELC will be issued and automatically allocated to the risk asset holders.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1d."),(0,i.kt)("td",{parentName:"tr",align:null},"ELC Supply Contraction"),(0,i.kt)("td",{parentName:"tr",align:null},"When the prices of ELC go lower than 0.98 ELCaim, the circulating ELC will be repurchased by the risk reserve fund, and this part of ELC will be temporarily taken out of circulation; when the prices of ELC start to go over ELCaim, the ELC will be sold with priority by the risk reserve fund to recover the reserve.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1e."),(0,i.kt)("td",{parentName:"tr",align:null},"Oracle Price acquirement"),(0,i.kt)("td",{parentName:"tr",align:null},"The oracle price adopts the dual price mechanism of Parachain DEX and Chainlink (or Zenlink).")))),(0,i.kt)("h3",{id:"milestone-2--extend-functions-of-the-elc-contract"},"Milestone 2 \u2013 Extend functions of the ELC contract."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Total Estimate Duration:")," 6 weeks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Full-time Equivalent(FTE):")," 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Total cost:")," 500 USD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Task:")," Implement new contract functions based on ink! and develop DAPP front-end."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GNU General Public License v3.0 / Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a tutorial that explains how a user can use product.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage to ensure functionality and robustness. In the guide we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1a."),(0,i.kt)("td",{parentName:"tr",align:null},"ELC contract extension: Liquidity Mining Pool"),(0,i.kt)("td",{parentName:"tr",align:null},"ELP reserves a certain percentage of tokens to reward participants generatingELC, which means that part of the tokens will be given to risk asset (rELP) holders.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1b."),(0,i.kt)("td",{parentName:"tr",align:null},"ELC contract extension:  Risk Reserve Fund"),(0,i.kt)("td",{parentName:"tr",align:null},"1) A total of 21 million ELPs, of which 1 million ELPs are deposited into the risk reserve fund as the initial risk reserve. 2)\xa0In the ELC supply expansion process, 5% of the additional ELC issued through the algorithmic mechanism is converted into ELP and deposited in the risk reserve fund.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2a."),(0,i.kt)("td",{parentName:"tr",align:null},"ELC Dapp"),(0,i.kt)("td",{parentName:"tr",align:null},"1) ELC generation function. 2) Redemption of the pledged assets function. 3)\xa0ELC price, issuance volumes, risk assets, debt ratios and other query functions. 4)\xa0Liquidity mining function. And integrate with the wallet.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Our team would like to make continuous contributions to the Substrate and Polkadot ecosystems. Our future plans are as follows:\n\u2022 Everlasting Cash is only deployed in the Polkadot ecosystem, through the Runtime module using the Substrate framework.\n\u2022 The ELC reserve pool will prioritize tokens from the Polkadot system to build a solid stablecoin ecosystem.\n\u2022 To provide the users in the Polkadot ecosystem with a stablecoin that appreciates naturally and achieves the goal of anti-inflation.\nEverlasting Cash will exist as an independent asset in the Polkadot ecosystem, and will also power the Cycan decentralized autonomous trust (DAT) on the path to revolutionize trust in the financial market."),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"What work has been done so far?"),(0,i.kt)("p",{parentName:"li"},"1) The development of the initial version of the Substrate-based Pheonix test chain has been completed, supporting the WASM and EVM virtual machines.\n2) The DAO self-governance Runtime module and the application for the access to the Rococo test network are in progress.\n3) The development plan for the ELC contract has been formulated and the development is in progress.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Are there are any teams who have already contributed (financially) to the project?"))),(0,i.kt)("p",null,"\xa0","No"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Have you applied for other grants so far?")),(0,i.kt)("p",null,"\xa0","No"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Are there any other project similar to yours?")),(0,i.kt)("p",null,"\xa0","To the best of our knowledge, there is no project about anti-inflation stablecoin that is similar to our project. Please let us know if there are any."))}p.isMDXComponent=!0}}]);