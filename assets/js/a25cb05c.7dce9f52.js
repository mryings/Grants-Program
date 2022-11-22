"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3639],{66222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(16758);const r={},i="Uncollateralized Stablecoin Research",s={unversionedId:"rfps/Under Development/uncollateralized-stablecoin-research",id:"rfps/Under Development/uncollateralized-stablecoin-research",title:"Uncollateralized Stablecoin Research",description:"Status:* Under Development",source:"@site/docs/rfps/Under Development/uncollateralized-stablecoin-research.md",sourceDirName:"rfps/Under Development",slug:"/rfps/Under Development/uncollateralized-stablecoin-research",permalink:"/Grants-Program/rfps/Under Development/uncollateralized-stablecoin-research",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Social Recovery Wallet",permalink:"/Grants-Program/rfps/Under Development/social-recovery-wallet"}},o={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1 - Research &amp; Design",id:"milestone-1---research--design",level:3},{value:"Milestone 2 - PoC Implementation",id:"milestone-2---poc-implementation",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"uncollateralized-stablecoin-research"},"Uncollateralized Stablecoin Research"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Status:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/stardust.md"},"Under Development")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Noc2"},"Noc2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Projects you think this work could be useful for")," ","[optional]",": Any Defi Project")),(0,l.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,l.kt)("p",null,"Stablecoins are cryptocurrencies where the price is designed to be pegged (=fixed exchange rate) to a cryptocurrency, fiat money, or to exchange-traded commodities. Seigniorage-style, uncollateralized or algo stablecoin is a token that uses algorithms to control the circulating supply to get a stable value of the asset. In general the price volatility of cryptocurrencies is one of the biggest barriers to widespread adoption. Stablecoins therefore have become a key component of DeFi applications. However, all successful existing stable coins (e.g. DAI, USDT, USDC, etc) are asset backed. Therefore they are subject to the same volatility and risk associated with the backing asset and the underlying process. Some of the potentially issues based on this are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Additional trust assumptions (e.g. USDT)  "),(0,l.kt)("li",{parentName:"ul"},"Scalability issues (restricted by the underlying asset) "),(0,l.kt)("li",{parentName:"ul"},"Devalue under massive crashes in the underlying assets ")),(0,l.kt)("p",null,"Purely algorithmic stablecoin would overcome these risks. Additionally it would be fairly simple to peg an algorithmic stablecoin to different assets (USD, EUR) or in the future even to a consumer price index (CPI). However, until now most algorithmic stablecoins introduced significant additional disadvantages or weren't able to maintain their peg for a longer period of time (e.g. AMPL, ESD, DSD, BAC, NuBits)."),(0,l.kt)("p",null,"The goal of this RFP is to research and create new uncollateralized stablecoin mechanisms and implement these as ink! smart contract or pallets. The biggest research question hereby is how to efficiently decrease the supply of the token.   "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Useful resources:")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.basis.io/basis_whitepaper_en.pdf"},"https://www.basis.io/basis_whitepaper_en.pdf"),"  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2425270"},"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2425270")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=bnC5RQsaAXQ"},"https://www.youtube.com/watch?v=bnC5RQsaAXQ")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://econteric.com/stablecoin/algo/"},"https://econteric.com/stablecoin/algo/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://assets.fei.money/docs/whitepaper.pdf"},"https://assets.fei.money/docs/whitepaper.pdf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.terra.money/Terra_White_paper.pdf"},"https://www.terra.money/Terra_White_paper.pdf"))),(0,l.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,l.kt)("p",null,"The milestones below are just an initial draft. The milestones can be structured completely differently and the implementation can also leverage other tools and infrastructure as long as the overall goal of the RFP is met."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 30k")),(0,l.kt)("h3",{id:"milestone-1---research--design"},"Milestone 1 - Research & Design"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 10k")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Overview of existing solutions"),(0,l.kt)("td",{parentName:"tr",align:null},"Create an overview of existing and previous uncollateralized stablecoin solutions and why they failed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Increasing Supply"),(0,l.kt)("td",{parentName:"tr",align:null},"Develop a mechanism to deal with an increasing demand for the cryptocurrency and analyses potential attack vectors")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Decreasing Supply"),(0,l.kt)("td",{parentName:"tr",align:null},"Develop a mechanism to deal with an decreasing demand for the cryptocurrency and analyses potential attack vectors")))),(0,l.kt)("h3",{id:"milestone-2---poc-implementation"},"Milestone 2 - PoC Implementation"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Ideally part of a separate follow-up grant, since it depends on the outcome of the initial research!"),"  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 20k")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Implement PoC"),(0,l.kt)("td",{parentName:"tr",align:null},"Implement the previous reasearch as ink! Smart contract or pallets")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"UI (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Implement a basic UI that can be used for testing")))))}m.isMDXComponent=!0}}]);