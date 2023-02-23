"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5802],{59041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));a(8209);const o={},i="SLON - a recommendation letter system",l={unversionedId:"applications/slonigiraf",id:"applications/slonigiraf",title:"SLON - a recommendation letter system",description:"- Team Name: Slonigiraf",source:"@site/applications/slonigiraf.md",sourceDirName:"applications",slug:"/applications/slonigiraf",permalink:"/Grants-Program/applications/slonigiraf",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/slonigiraf.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Substrate Module",id:"milestone-1--implement-substrate-module",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"slon---a-recommendation-letter-system"},"SLON - a recommendation letter system"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Slonigiraf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," bc1qyuk4rdeqvc2rmetfhr3key4clty5sglaw4n5wx (BTC)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SLON is a recommendation letter system on a blockchain."),(0,r.kt)("li",{parentName:"ul"},"Reputation is the cornerstone of economic life. Societies with great social trust grow faster than those that do not trust each other. Today we have many private reputation systems: Airbnb, which allows travelers and homeowners to trust each other, Uber, which ranks taxi drivers and passengers by their history and comments about each other, Google Places, which ranks restaurants and other businesses... \\\nThe reputation systems mentioned above collect recommendations from people and centrally accumulate this value within a private company. \\\n",(0,r.kt)("a",{parentName:"li",href:"https://www.econstor.eu/bitstream/10419/176431/1/10.1186_s40854-016-0039-4.pdf"},"It\u2019s known")," that such systems are vulnerable to ballot-stuffing, bad-mouthing, and various attack models including constant attack, camouflage attack, whitewashing attack and sybil attack. \\\nTraditional reputation systems try to solve such problems by tying economic interactions to reputation or ranking, for example Amazon.com flags a product's rating if it comes from a \"verified purchase\". However, such ratings can be influenced by the seller imitating the buyer and rating their own product. \\\nHowever, there is a well-known working orthogonal approach that has proven to be effective and stable for more than centuries and is decentralized - letters of recommendation. \\\nA letter of recommendation is a document issued by a person with a social reputation. Such a person (referee) recommends an employee for hiring in the company. The company can downgrade and ultimately damage the referee's reputation if they refer a bad employee, so the referee makes some profit from the employee before recommending them, often not in monetary terms to deal with such risk. Thus, the referee acts as an insurer. \\\nA letter of recommendation divides the rating system into two parts: a statement about the employee and the reputation of the referee. For example, if Uber uses this approach, then the taxi driver rating will consist of a series of letters of recommendation, and referees will lose reputation if they recommend a bad taxi driver to a new client. \\\nThe recommendation letter system has limited applications due to the difficulty of disseminating information about bad-faith referees who cheat the system, and the difficulty of calculating the actual reputation of the referee. \\\nWe are aiming to create a blockchain recommendation letter system that can solve the problems of maintaining the reputation of referees and punishing them in case of bad recommendations."),(0,r.kt)("li",{parentName:"ul"},"Our team has an experience of using a recommendation letter system at a public school education. We apply it to teacher-student interaction where a teacher issues recommendation letters about student skills. The idea initially was developed in 2019 year as a ",(0,r.kt)("a",{parentName:"li",href:"https://slon-i-giraf.ru/app/work?view=paperGameView&language=ENG"},"paper game"),". Then in 2020 we implemented the web version of this educational model on Java/Mysql and use it for now."),(0,r.kt)("li",{parentName:"ul"},"This grant application is asking for funding to create a reputation letter system in the form of a Substrate pallet that can be used in any substrate-based chain that provides a reputation tracking feature.")),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The pallet interface will consist of functions that enable users to check a letter validity and penalize referees for dishonest behavior. Invalid recommendation letters are planned to be stored as Map of boolean arrays with keys consisting of referees addresses concatenated to the index of the window where letter id resides. Valid recommendation letters will be stored off chain to save blockchain space."),(0,r.kt)("li",{parentName:"ul"},'The identity of users is tracked as follows: each letter of recommendation contains public keys of the referee and the worker. The referee key is linked to a publicly visible reputation balance. If the referee\'s balance falls below the amount of the letter penalty, the letter of recommendation is considered temporarily void. If the worker wants to present the employer with an active letter of recommendation for employment, the employee signs an agreement to give the employer the right to impose fines. The worker knows the real identity and public keys of the employees and referee, the referee know the real identity and public key of the worker. The referee knows the public key of who fined him and the real identity of the worker who had the letter. This information is enough to prevent "silent" fines. Referees can keep track of each penalty with the help of a worker. A Sibyl attack is basically impossible in such a system, since all transactions are carried out between real individuals. Note that the worker can be his own referee, but it is economically unprofitable for him, because he cannot adequately determine the risk of being a bad worker. It is safer for the employee not to issue the letter himself, but to ask the referee to do it.'),(0,r.kt)("li",{parentName:"ul"},"A letter of recommendation is NOT registered on the blockchain when issued. This design principle saves blockchain space and hides important personal information from intruders. A letter of recommendation is a sign by guarantee of a string consisting of the letter_id, the public key of the guarantee, the public key of the worker, and the amount of reputation staked on this letter. The worker can sign the employer's right to send a letter of recommendation to the blockchain to penalize the guarantee."),(0,r.kt)("li",{parentName:"ul"},"We plan to use Rust / Substrate to complete this part of the project. We initially thought that smart contracts on Ethereum/Polka etc would be enough. However we implement the system that should process requests from millions of users every day. \\\nLet's calculate the required number of transactions per second. \\\nThere are two types of transactions that are sent: first - usual for any blockchain - transfer of SLON between holders. We will not count this type of transaction because the number of second type transactions is large enough to convince us that we need a parallelization.\nThe second type transaction is a reimbursement where the person who is eligible to punish the recommender uses that right. \\\nWe will take into account only our educational project where we do have real world statistics about reimbursement transactions.\nUsually we process about 30 reimbursements per 45 minutes lesson per class of 20 students or 0.67 transactions per minute per 20 students.\nIn Russia there are about 15 million pupils at schools. If we assume that all teachers will use such a system at lesson we get (0.671510^6/20) transactions per minute or 8375 transactions per second. \\\nSubstrate gives about 1000 transactions per second per chain. Thus we need at least 9 chains only for Russia to make this blockchain work. One can argue that in Russia there are different time zones and transaction load will be lowered by this means. But don't forget that on Earth we have about 50x more pupils than in Russia. \\\nThus no single chain can process transactions if all pupils in Russia will use our educational model at classes - too many transactions, even considering that we use offchain as much as possible. Thus we look for any approach to shard and parallelize transaction processing. Polkadot design with relay and parachains looks great to solve this parallelization issue. As we need a lot of parachains to make the system work it's unlikely to include all of them in Polkadot or Kusama directly. Instead we plan to use our own relay chain with our parachains. ",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwss1.slonigiraf.org#/explorer"},"Our relay chain")," can be connected to Polkadot or Kusama with bridges. We\u2019ve already launched our own relay chain and it\u2019s active from 12 April 2021."),(0,r.kt)("li",{parentName:"ul"},"We've built PoC/MVP product on Java Vaadin framework that can be used via\nlink: ",(0,r.kt)("a",{parentName:"li",href:"https://slon-i-giraf.ru/app/work?language=ENG"},"https://slon-i-giraf.ru/app/work?language=ENG")),(0,r.kt)("li",{parentName:"ul"},"What needs to be completed: datastore, penalizing capability, letter validity lookup, tests, documentation,\nexample integration to parachain template, example UI.")),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Our projects fits to dApp part of Polkadot/Kusama like ecosystem."),(0,r.kt)("li",{parentName:"ul"},"The project audience consists of pupils, students, teachers, employees and companies. Most of them never touched crypto world.\nThis part of the project is intended to build the blockchain API that will be used in future for UI creation."),(0,r.kt)("li",{parentName:"ul"},"Our projects meet the need for a decentralized reputation system."),(0,r.kt)("li",{parentName:"ul"},"Recommendation letter is a well known tool in the real world but was never ported to blockchain.")),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reshetov Denis. Founder, Rust/JavaScript developer.")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Denis Reshetov"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:reshetovdenis@gmail.com"},"reshetovdenis@gmail.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://www.slonigiraf.org/"},"https://www.slonigiraf.org/"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," Golubinskaya 9, Moscow, Russia"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Individual entrepreneur Reshetov Denis.")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Denis Reshetov graduated from Moscow State University, Faculty of Bioengineering and Bioinformatics (2009).\\\nDenis is good at different programming languages such as Java and Javascript and have a lot of ",(0,r.kt)("a",{parentName:"p",href:"https://pubmed.ncbi.nlm.nih.gov/?term=reshetov+d&filter=simsearch2.ffrft&sort=date"},"publications in\nbioinformatics")," and one year of Rust/Substrate experience."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("p",null,"Company:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/slonigiraf"},"https://github.com/slonigiraf"))),(0,r.kt)("p",null,"Team leader:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/reshetovdenis"},"https://github.com/reshetovdenis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/slonigiraf/slon-token"},"https://github.com/slonigiraf/slon-token"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ru.linkedin.com/in/reshetovdenis"},"https://ru.linkedin.com/in/reshetovdenis"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We've built PoC/MVP product on Java Vaadin framework that can be used via\n",(0,r.kt)("a",{parentName:"li",href:"https://slon-i-giraf.ru/app/work?language=ENG"},"link")),(0,r.kt)("li",{parentName:"ul"},"The white paper and overall design is presented ",(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1XP7yICWpr8MQuSTCSBpWYN-8lSAXuGgyk90ZBMj5kc0/edit?usp=sharing"},"here"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 10,000 USD")),(0,r.kt)("h3",{id:"milestone-1--implement-substrate-module"},"Milestone 1 \u2014 Implement Substrate Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USD")),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Number"),(0,r.kt)("th",{align:"center"},"Deliverable"),(0,r.kt)("th",{align:"center"},"Specification")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 0a. "),(0,r.kt)("td",null," License "),(0,r.kt)("td",null," Unlicense ")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 0b. "),(0,r.kt)("td",null," Documentation "),(0,r.kt)("td",null," We will provide both ",(0,r.kt)("b",null,"inline documentation")," of the code and a basic ",(0,r.kt)("b",null,"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. ")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 0c. "),(0,r.kt)("td",null," Testing Guide "),(0,r.kt)("td",null," Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. ")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 0d. "),(0,r.kt)("td",null," Docker "),(0,r.kt)("td",null," We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. ")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 0e. "),(0,r.kt)("td",null," Article "),(0,r.kt)("td",null," We will publish an ",(0,r.kt)("b",null,"article")," that explains what was done/achieved as part of the grant. (Content, language and medium should reflect your target audience described above.)")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 1. "),(0,r.kt)("td",null," Substrate module "),(0,r.kt)("td",null," ",(0,r.kt)("b",null,"Publicly exposed methods:")," ",(0,r.kt)("br",null),"Function to penalize a referee. Will allow a worker to enable employer to penalize the referee. Should test if referee and worker signatures are valid and a letter was not previously used.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pub fn reimburse(\n   origin: OriginFor&lt;T&gt;,\n   letter_id: u32,\n   referee_id: H256,\n   worker_id: H256,\n   employer_id: H256,\n   ask_price: BalanceOf&lt;T&gt;,\n   referee_sign: H512,\n   worker_sign: H512,\n  ) -> DispatchResultWithPostInfo\n")),(0,r.kt)("p",null,"Function to see if the letter is valid. Should return TRUE if referee was not penalized yet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fn was_letter_used(\n  referee: H256,\n  number: usize,\n ) -> bool\n")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Runtime Storage defined by your module:"),(0,r.kt)("br",null),"Invalid letters are planned to be stored as Map of boolean arrays with key consisted of referee address concatenated to index of window where letter id resides.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# [pallet::storage]\n# [pallet::getter(fn letter_of_owner_by_index)]\npub(super) type OwnedLetersArray&lt;T: Config&gt; =\nStorageMap&lt;_, Twox64Concat, (H256, u64), Vec&lt;bool&gt;, ValueQuery&gt;;\n")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Private functions:"),(0,r.kt)("br",null),"Function that creates a part of datastore to mark fraud letter. See runtime storage definition.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fn mint_chunk(\n  to: H256,\n  chunk: usize,\n ) -> DispatchResult\n")),(0,r.kt)("br",null),"Function to see if chunk of datastore exists.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fn chunk_exists(\n  to: H256,\n  chunk: usize,\n ) -> bool\n")),(0,r.kt)("br",null),"Conversion from letter index to coordinates of it in datastore.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fn coordinates_from_letter_index(number: usize) -> LetterCoordinates\n")),(0,r.kt)("br",null),"Conversion from coordinates in datastore to letter index.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fn letter_index_from_coordinates(coordinates: LetterCoordinates) -> usize\n")),(0,r.kt)("br",null),"See if letter is fraud.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fn was_letter_canceled(\n  guarantee: H256,\n  number: usize,\n ) -> bool\n")),(0,r.kt)("br",null),"Mark letter as fraud.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fn mark_letter_as_fraud(\n  guarantee: H256,\n  letter_number: usize,\n ) -> DispatchResult\n")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Benchmarking:"),(0,r.kt)("p",null,"Data structures to run benchmarks and create weights"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"benchmarks! {\n create {\n  ...\n }: _(RawOrigin::Signed(caller))\n\n reimburse {\n  ...\n }: _(RawOrigin::Signed(caller), origin, letter_id, referee_id, worker_id, employer_id, ask_price, referee_sign, worker_sign)\n}\n\nimpl_benchmark_test_suite!(\n ...\n);\n")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Weights"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pub trait WeightInfo {\n fn reimburse() -> Weight;\n}\n\npub struct SubstrateWeight&lt;T&gt;(PhantomData&lt;T&gt;);\nimpl&lt;T: frame_system::Config&gt; WeightInfo for SubstrateWeight&lt;T&gt; {\n fn create() -> Weight {\n  ...\n }\n}\n\nimpl WeightInfo for () {\n fn create() -> Weight {\n  ...\n }\n}\n\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null," 2. "),(0,r.kt)("td",null," Example UI "),(0,r.kt)("td",null,(0,r.kt)("b",null,"Recommendation letter creation"),(0,r.kt)("br",null),"Template/Example React.js component that allows to create a letter of recommendation for guarantees. ",(0,r.kt)("br",null),"Contains a text area where guarantee can specify text of the letter; text field to specify a public ",(0,r.kt)("br",null),"key of worker; a button to sign a transaction; QR code of the signed letter to be transferred to the worker.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("b",null,"Penalization right transfer"),(0,r.kt)("br",null),"Template/Example React.js component that transfers a right to penalize guarantees to employer. ",(0,r.kt)("br",null),"Creates a QR code that can be shown to an employer to transfer the letter text, guarantee and ",(0,r.kt)("br",null),"worker public keys, signatures of guarantee and worker.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("b",null,"Penalization submission to a blockchain"),(0,r.kt)("br",null),"Template/Example React.js component for employers to send recommendation letter for penalization of ",(0,r.kt)("br",null),"guarantees. Contains a text field to show a text of the letter; a button to send a penalization transaction ",(0,r.kt)("br",null),"to the blockchain.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("b",null,"Simple UI"),(0,r.kt)("br",null),"Should contain React.js components mentioned above combined in a single page web application based ",(0,r.kt)("br",null),"on the [substrate-front-end-template](https://github.com/substrate-developer-hub/substrate-front-end-template).")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1tJp9ucrf-1OMzSmOJ5X9taixQed4gmSS/view?usp=sharing"},"Use case diagram")),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We plan to launch a chain with this pallet in short term and integrate it with our current App."),(0,r.kt)("li",{parentName:"ul"},"Next we plan to integrate React.js components with our MVP that to use in schools and universities.")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Personal recommendation.\nCheckout the ",(0,r.kt)("a",{parentName:"p",href:"https://slon-i-giraf.ru/app/work?view=paperGameView&language=ENG"},"paper version")," of this protocol that can be used in any educational process:"))}m.isMDXComponent=!0}}]);