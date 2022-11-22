"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5705],{98868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(16758);const r={},o="Implementation of the new hash function to BLS12 curves",l={unversionedId:"Applications/new_bls12_hash_function",id:"Applications/new_bls12_hash_function",title:"Implementation of the new hash function to BLS12 curves",description:"- Team Name: Dmitrii Koshelev",source:"@site/docs/Applications/new_bls12_hash_function.md",sourceDirName:"Applications",slug:"/Applications/new_bls12_hash_function",permalink:"/Grants-Program/Applications/new_bls12_hash_function",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"New Order - a full onchain orderbook dex with indexers",permalink:"/Grants-Program/Applications/new-order"},next:{title:"NewOmega (Milestone 3 and 4)",permalink:"/Grants-Program/Applications/newomega-m3m4"}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 An implementation in Sage",id:"milestone-1--an-implementation-in-sage",level:3},{value:"Milestone 2 \u2014 A non-constant-time implementation in Rust in the case of the BLS12-381 curve",id:"milestone-2--a-non-constant-time-implementation-in-rust-in-the-case-of-the-bls12-381-curve",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],h={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"implementation-of-the-new-hash-function-to-bls12-curves"},"Implementation of the new hash function to BLS12 curves"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Dmitrii Koshelev"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x050240CB2f5F7f7aA8AA10a5A9AE36c784AEdE49 (ERC20 USDC)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Please provide the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the name of your project is not descriptive, a tag line (one sentence summary).")),(0,i.kt)("p",null,"Implementation of my hash function in Sage in the general case and in Rust specifically for the curve BLS12-381."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A brief description of your project.")),(0,i.kt)("p",null,"Recently, my article ",(0,i.kt)("a",{parentName:"p",href:"https://link.springer.com/article/10.1007/s10623-022-01012-8"},"https://link.springer.com/article/10.1007/s10623-022-01012-8"),' was published in the quite prestigious cryptographic journal "Designs, Codes and Cryptography". This article provides a new hash function (indifferentiable from a random oracle) to the subgroup G1 of many elliptic curves of j-invariant 0, including most pairing-friendly curves of the family BLS12 (Barreto-Lynn-Scott) of embedding degree 12. Such curves and hash functions are actively used in blockchains, namely in the BLS (Boneh-Lynn-Shacham) aggregate signature. According to the web page ',(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-keys"},"https://wiki.polkadot.network/docs/learn-keys"),", the BLS signature will be in particular used in Polkadot."),(0,i.kt)("p",null,"My hash function is much faster than previous state-of-the-art ones, including the Wahby-Boneh indirect map to the curve BLS12-381. This curve is a de facto standard in today's real-world pairing-based cryptography. The indifferentiable Wahby-Boneh hash function requires to extract two square roots (i.e., to compute two exponentiations) in the basic field Fp. In comparison, the new hash function extracts only one cubic root, which can be also expressed via one exponentiation in Fp. And according to Section 1.1 of my other article ",(0,i.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2021/1082"},"https://eprint.iacr.org/2021/1082")," the exponentiations for square and cubic roots in Fp have short addition chains of about the same length."),(0,i.kt)("p",null,"I have already checked the correctness of my results in the computer algebra system Magma. The new project is dedicated to an implementation of the new hash function to BLS12-381 in Rust. This project is a follow-up of the previous one concerning a proof-of-concept implementation in Sage (see #825). I wrote such an implementation, but I didn't finish the project, because my code does not meet high standards of Web3 Foundation. However, I found a professional developer in Rust who is ready to provide a Rust implementation (based on my Sage one), including tests. Consequently, besides my initial $10,000 reward (level 1), an additional reward for my colleague's work is required."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An indication of how your project relates to / integrates into Substrate / Polkadot / Kusama.")),(0,i.kt)("p",null,"According to the web page ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-keys"},"https://wiki.polkadot.network/docs/learn-keys"),", the BLS signature will be in particular used in Polkadot."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An indication of why your team is interested in creating this project.")),(0,i.kt)("p",null,"Because I want to demonstrate to the blockchain society that my research has an immediate practical value. "),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PoC/MVP or other relevant prior work or research on the topic")),(0,i.kt)("p",null,"My article ",(0,i.kt)("a",{parentName:"p",href:"https://link.springer.com/article/10.1007/s10623-022-01012-8"},"https://link.springer.com/article/10.1007/s10623-022-01012-8"),' under the name "Indifferentiable hashing to ordinary elliptic Fq-curves of j=0 with the cost of one exponentiation in Fq".'),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Where and how does your project fit into the ecosystem?")),(0,i.kt)("p",null,"Hashing to elliptic curves in the BLS (Boneh-Lynn-Shacham) aggregate signature."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?")),(0,i.kt)("p",null,"Developers who will use the new hash function in their implementations of cryptographic protocols."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If so, how is your project different?"),(0,i.kt)("li",{parentName:"ul"},"If not, are there similar projects in related ecosystems?")))),(0,i.kt)("p",null,"I don't know, because my project is quite extraordinary, in my opinion. Maybe, similar projects (based on recent results of mathematical cryptography) periodically arise in the Ethereum Foundation grants program."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name of team leader")),(0,i.kt)("p",null,"Dmitrii Koshelev"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Names of team members")),(0,i.kt)("p",null,"My colleague who is a professional Rust programmer. He prefers to be anonymous."),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Dmitrii Koshelev"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:dimitri.koshelev@gmail.com"},"dimitri.koshelev@gmail.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.researchgate.net/profile/Dimitri-Koshelev"},"https://www.researchgate.net/profile/Dimitri-Koshelev"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," 27B boulevard Jourdan, app. 317, Paris, France"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," In this project I am an individual, but I work as a postdoctoral researcher in Telecom Paris (Polytechnic Institute of Paris).")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"There is the regularly updated CFRG draft on hashing to elliptic curves: ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/draft-irtf-cfrg-hash-to-curve/"},"https://datatracker.ietf.org/doc/draft-irtf-cfrg-hash-to-curve/"),". As for me, at the beginning\nof the last year, as said in ",(0,i.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2021/11/04/esp-allocation-update-q2-2021/"},"https://blog.ethereum.org/2021/11/04/esp-allocation-update-q2-2021/"),", I won an Ethereum Foundation grant to derive a fast hash function to the subgroup G2 of the pairing-friendly curve BLS12-381. As an outcome of this grant, in Section 1.2 of ",(0,i.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2021/1082"},"https://eprint.iacr.org/2021/1082")," I prove that for hashing to G2 the Wahby-Boneh map applied only once (not twice) is sufficient to act as a random oracle. Thus we get rid of one exponentiation in the quadratic extension Fp2 or, equivalently, of two exponentiations in the prime field Fp. Besides, I constructed a series of hash functions to other elliptic curves in the articles ",(0,i.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2021/1034"},"https://eprint.iacr.org/2021/1034")," (accepted in SIAM Journal on Applied Algebra and Geometry), ",(0,i.kt)("a",{parentName:"p",href:"https://link.springer.com/article/10.1007/s12095-021-00478-y"},"https://link.springer.com/article/10.1007/s12095-021-00478-y")," (published in Cryptography and Communications), ",(0,i.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2021/1604"},"https://eprint.iacr.org/2021/1604")," (submitted to Journal of Mathematical Cryptology). "),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dishport"},"https://github.com/dishport"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dimitri-koshelev/"},"https://www.linkedin.com/in/dimitri-koshelev/"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"links to your research diary, blog posts, articles, forum discussions or open GitHub issues,")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/indifferentiable-hashing-to-ordinary-elliptic-fq-curves-of-j-0-with-the-cost-of-one-exponentiation-in-fq/8867"},"https://ethresear.ch/t/indifferentiable-hashing-to-ordinary-elliptic-fq-curves-of-j-0-with-the-cost-of-one-exponentiation-in-fq/8867")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cfrg/draft-irtf-cfrg-hash-to-curve/issues/316"},"https://github.com/cfrg/draft-irtf-cfrg-hash-to-curve/issues/316")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/dishport/Indifferentiable-hashing-to-ordinary-elliptic-curves-of-j-0-with-the-cost-of-one-exponentiation"},"https://github.com/dishport/Indifferentiable-hashing-to-ordinary-elliptic-curves-of-j-0-with-the-cost-of-one-exponentiation")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://link.springer.com/article/10.1007/s10623-022-01012-8"},"https://link.springer.com/article/10.1007/s10623-022-01012-8")),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 15,000 USD")),(0,i.kt)("h3",{id:"milestone-1--an-implementation-in-sage"},"Milestone 1 \u2014 An implementation in Sage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USD  ")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GNU GPL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"I will provide ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"I do not intend to deliver this, because the project is research oriented.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"I will cite the implementation and I will thank Web3 Foundation for its financial support in my new article ",(0,i.kt)("a",{parentName:"td",href:"https://eprint.iacr.org/2021/1082"},"https://eprint.iacr.org/2021/1082"),". I submitted this article to Journal of Cryptology. At the moment, it is under review.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Implementation"),(0,i.kt)("td",{parentName:"tr",align:null},"Sage (non-constant-time) implementation of the hash function described below.")))),(0,i.kt)("p",null,"To be definite, let me use the notation of my article ",(0,i.kt)("a",{parentName:"p",href:"https://link.springer.com/article/10.1007/s10623-022-01012-8"},"https://link.springer.com/article/10.1007/s10623-022-01012-8"),". The new hash function consists of three components: a classical one \\eta: {0,1}^",(0,i.kt)("em",{parentName:"p"}," -> Fp^2, a rational map \\varphi: Fp^2 -> T(Fp), and an additional map h^\\prime: T(Fp) -> E(Fp), where E is a given elliptic Fp-curve of j-invariant 0 and T is a suplementary algebraic threefold. A construction of \\eta is represented in Section 5 of the draft ",(0,i.kt)("a",{parentName:"em",href:"https://datatracker.ietf.org/doc/draft-irtf-cfrg-hash-to-curve/"},"https://datatracker.ietf.org/doc/draft-irtf-cfrg-hash-to-curve/"),". This is the composition of a hash function {0,1}^")," -> {0,1}^n for some n \\in N and the subsequent restriction modulo p, hence we can use a standard hash function from one of cryptographic libraries. It remains to implement \\varphi and h^\\prime just as described in my article. "),(0,i.kt)("p",null,"It is also worth noting that the new hash function is relevant for any ordinary (i.e., non-supersingular) elliptic Fq-curve y^2 = x^3 + b (of j-invariant 0) such that the square root of b lies in Fq. Here Fq is an arbitrary finite field (of characteristic p > 3) for which 3 divides q-1, but 27 does not. Therefore, our Sage implementation is in fact relevant for all such curves and fields. The BLS12-381 curve corresponds to the case when q = 10 (mod 27) and b is not a cubic residue in Fq. "),(0,i.kt)("h3",{id:"milestone-2--a-non-constant-time-implementation-in-rust-in-the-case-of-the-bls12-381-curve"},"Milestone 2 \u2014 A non-constant-time implementation in Rust in the case of the BLS12-381 curve"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 5,000 USD  ")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache License, Version 2.0 and MIT license")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"I will provide ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. I will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"I do not intend to deliver this, because the project is research oriented.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"I will cite the implementation and I will thank Web3 Foundation for its financial support in my new article ",(0,i.kt)("a",{parentName:"td",href:"https://eprint.iacr.org/2021/1082"},"https://eprint.iacr.org/2021/1082"),". I submitted this article to Journal of Cryptology. At the moment, it is under review.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Implementation"),(0,i.kt)("td",{parentName:"tr",align:null},"Rust non-constant-time implementation of the new hash function for BLS12-381. It is suggested to use the library arkworks (",(0,i.kt)("a",{parentName:"td",href:"https://github.com/arkworks-rs/curves"},"https://github.com/arkworks-rs/curves"),") as a base. In particular, to perform the (unique) exponentiation in Fp an addition chain of quite small length has already been derived in ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/dishport/Some-remarks-on-how-to-hash-faster-onto-elliptic-curves"},"https://github.com/dishport/Some-remarks-on-how-to-hash-faster-onto-elliptic-curves")," (cf. Section 1.1 of ",(0,i.kt)("a",{parentName:"td",href:"https://eprint.iacr.org/2021/1082"},"https://eprint.iacr.org/2021/1082"),").")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"The new hash function appears to be optimal, because it performs only one exponentiation in the basic field Fq. In other words, since it is highly unlikely that there is a hash function to an elliptic curve without exponentiations at all (even if it is supersingular), the result of my article seems to be unimprovable. Thus I hope that the implementation of my hash function will be interesting not only to you, but also to all blockchain projects that involve the BLS signature. "),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If there are any other teams who have already contributed (financially) to the project.")),(0,i.kt)("p",null,"No"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Previous grants you may have applied for.")),(0,i.kt)("p",null,'An Ethereum Foundation grant called "fast hash-to-curve research" and represented on the web page ',(0,i.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2021/11/04/esp-allocation-update-q2-2021/"},"https://blog.ethereum.org/2021/11/04/esp-allocation-update-q2-2021/")))}u.isMDXComponent=!0}}]);