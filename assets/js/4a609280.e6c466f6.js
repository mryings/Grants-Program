"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9261],{39454:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));a(16758);const r={},i="Candle auction smart contract",o={unversionedId:"rfps/Implemented/candle-auction",id:"rfps/Implemented/candle-auction",title:"Candle auction smart contract",description:"Status:* Implemented",source:"@site/docs/rfps/Implemented/candle-auction.md",sourceDirName:"rfps/Implemented",slug:"/rfps/Implemented/candle-auction",permalink:"/Grants-Program/rfps/Implemented/candle-auction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"APPI: Auto-funded public P2P infrastructure",permalink:"/Grants-Program/rfps/Implemented/appi"},next:{title:"Tip or Donate KSM Embeddable Button",permalink:"/Grants-Program/rfps/Implemented/ksm-tipping-button"}},s={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1 - Basic auction",id:"milestone-1---basic-auction",level:3},{value:"Milestone 2 - Random close",id:"milestone-2---random-close",level:3}],m={toc:c};function d(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"candle-auction-smart-contract"},"Candle auction smart contract"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Status:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/agryaznov/candle-auction-ink/tree/master"},"Implemented")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/mmagician"},"mmagician"))),(0,l.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,l.kt)("p",null,"Auctions will come in handy for various types of applications, but especially for NFTs."),(0,l.kt)("p",null,"The idea behind this proposal is to create an ",(0,l.kt)("inlineCode",{parentName:"p"},"ink!")," smart contract that is able to run a candle auction mechanism. This will be known to Polkadot followers from the ",(0,l.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/en/learn-auction"},"parachain auction mechanism"),". One of the advantages of the candle mechanism is that it incentivises bidders to submit their true bids early, thus leading to more optimal market."),(0,l.kt)("p",null,"Rather than restricting the use of candle auctions to parachain slot allocation only, users should be able to utilise it for other needs, e.g. auctioning off their NFTs."),(0,l.kt)("p",null,"Such a smart contract could have specific call logic embedded and give the winner the right to execute that logic (with supplied parameters). For example, the smart contract could own an asset, and such call logic could transfer such asset to whichever account the winners supplies."),(0,l.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 1")),(0,l.kt)("h3",{id:"milestone-1---basic-auction"},"Milestone 1 - Basic auction"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 7500 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Start & close period"),(0,l.kt)("td",{parentName:"tr",align:null},"Create an auction mechanism that has a fixed start and end period")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Accept bids"),(0,l.kt)("td",{parentName:"tr",align:null},"Any user can call the contract with a bid that is higher than the last highest bid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Find winner"),(0,l.kt)("td",{parentName:"tr",align:null},"Determine a winner at the close period")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Embed reward logic"),(0,l.kt)("td",{parentName:"tr",align:null},"The contract creator should set logic that will be executable by the winner. Such call logic should accept optional parameters. This logic should be set at the start and be immutable henceforth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Payout"),(0,l.kt)("td",{parentName:"tr",align:null},"A winner should be able to make a call, with an arbitrary number of parameters, to the reward/payout method. The contract would then pass the arguments to whichever logic is encoded as the reward (and e.g. send tokens)")))),(0,l.kt)("h3",{id:"milestone-2---random-close"},"Milestone 2 - Random close"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 2500 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Retroactive close"),(0,l.kt)("td",{parentName:"tr",align:null},"At the close block, rather than announcing the highest bidder at that point, the contract should randomly determine a block in the past (between start & end blocks) and calculate the highest bidder at that block to be the winner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Randomness source (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Randomness source should be configurable (e.g. from hash of the block in the relay chain, from a randomness beacon parachain etc.)")))))}d.isMDXComponent=!0}}]);