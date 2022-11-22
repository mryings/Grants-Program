"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9078],{32623:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));a(16758);const r={},l="Pallet for Decentralized Off-Chain Storage on Skynet",o={unversionedId:"Applications/skynet-substrate-integration",id:"Applications/skynet-substrate-integration",title:"Pallet for Decentralized Off-Chain Storage on Skynet",description:"- Team Name: Skynet Labs",source:"@site/docs/Applications/skynet-substrate-integration.md",sourceDirName:"Applications",slug:"/Applications/skynet-substrate-integration",permalink:"/Grants-Program/Applications/skynet-substrate-integration",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"SkyePass",permalink:"/Grants-Program/Applications/skyepass"},next:{title:"SLON - a recommendation letter system",permalink:"/Grants-Program/Applications/slonigiraf"}},s={},u=[{value:"Project Overview :page_facing_up",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Authentication &amp; Portal Preference for HTTP Requests",id:"authentication--portal-preference-for-http-requests",level:4},{value:"Immutable Skyfiles",id:"immutable-skyfiles",level:4},{value:"Mutable Registry Entries",id:"mutable-registry-entries",level:4},{value:"Skylinks v2",id:"skylinks-v2",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team :busts_in_silhouette",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status :open_book",id:"development-status-open_book",level:2},{value:"Development Roadmap :nut_and_bolt",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Exploratory Skynet Immutable Off-Chain Storage SDK (Immutable Data Functionality)",id:"milestone-1---exploratory-skynet-immutable-off-chain-storage-sdk-immutable-data-functionality",level:3},{value:"Future Milestone - Skynet Immutable Off-Chain Storage Pallet (Mutable Data Functionality)",id:"future-milestone---skynet-immutable-off-chain-storage-pallet-mutable-data-functionality",level:3},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information :heavy_plus_sign",id:"additional-information-heavy_plus_sign",level:2},{value:"Update &amp; Amendments",id:"update--amendments",level:2},{value:"02/25/2022",id:"02252022",level:3}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pallet-for-decentralized-off-chain-storage-on-skynet"},"Pallet for Decentralized Off-Chain Storage on Skynet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Skynet Labs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," ETH ",(0,i.kt)("inlineCode",{parentName:"li"},"0xa4e14Aa5F82Cd903d97BE09B921c97E7Fc43d909"))),(0,i.kt)("h2",{id:"project-overview-page_facing_up"},"Project Overview :page_facing_up"),(0,i.kt)("p",null,"If this application is in response to an RFP, please indicate this on the first line of this section."),(0,i.kt)("p",null,"If this is an application for a follow-up grant (the continuation of an earlier, successful W3F grant), please provide name and/or pull request of said grant on the first line of this section."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Our intention is to build the initial parts needed for an integration with Skynet, allowing Substrate developers to make use of decentralized off-chain storage from any project using FRAME."),(0,i.kt)("p",null,"Skynet is a decentralized storage and web application platform built to use the Sia blockchain network for storage, but in a way that's accessible via the web and available to anyone, without concerning themselves with cryptocurrencies or special software. Skynet provides hosting of robust web-app frontends and storage of application data in a way where users retain control over their data and application data is interoperable between applications."),(0,i.kt)("p",null,"Off-chain storage is an important problem to solve for blockchain applications, and Skynet meets storage needs well on several fronts by providing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a decentralized architecture matching the ethos of blockchains themselves"),(0,i.kt)("li",{parentName:"ul"},"strong, cryptographic guarantees on immutable data"),(0,i.kt)("li",{parentName:"ul"},"mutable data using private keys for write access"),(0,i.kt)("li",{parentName:"ul"},"portals used to access data, allowing for either managed access or running your own software. (With managed access, users and developers don't have to integrate another cryptocurrency running on a separate chain into their architecture.)"),(0,i.kt)("li",{parentName:"ul"},"equal access to Skynet no matter what portal is used or how it is accessed")),(0,i.kt)("p",null,"Our team wants to take on this project to expand the possibilities of what can be done with web3 applications and decentralized storage."),(0,i.kt)("p",null,"At this point, we have a JS SDK to easily expose Skynet in the browser to users, who can upload files and then store the unique URI (skylink) on-chain. Later, those can be retrieved and easily downloaded in the browser. We'd love to see developers building applications where blockchains themselves can interact more deeply with Skynet, writing data to Skynet, either for later access or for consumption by other web applications."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"In its final form, the Skynet Substrate SDK made for use in Off-chain Worker Pallets would allow projects built with Substrate FRAME to access any Skynet Portal on the network using off-chain workers in order to do the following on Skynet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upload a file or directory and return the skylink for use by the runtime"),(0,i.kt)("li",{parentName:"ul"},"Download a skyfile to storage or for use by runtime"),(0,i.kt)("li",{parentName:"ul"},"Registry Read: read from Skynet's mutable data layer using public keys"),(0,i.kt)("li",{parentName:"ul"},"Registry Write: write to mutable storage, authenticated by signing using a private key"),(0,i.kt)("li",{parentName:"ul"},"Support any Skynet portal and portal account"),(0,i.kt)("li",{parentName:"ul"},"Support v2 Skylink compatability"),(0,i.kt)("li",{parentName:"ul"},"Interact with mutable SkyDB and MySky files"),(0,i.kt)("li",{parentName:"ul"},"Data Verification for all interactions with a portal, using storage proofs from the Sia network."),(0,i.kt)("li",{parentName:"ul"},"Subscribing to registry entry changes (pending future Substrate development of long-running off-chain worker processes).")),(0,i.kt)("p",null,'Communication with portals happens by utilizing portal HTTP APIs along with additional processing and cryptography on the client-side. Although Skynet interaction can appear to be merely REST-styled API requests, certain cryptographic tools are needed to 1) created well-formed requests and 2) verify the cryptographic proofs and signatures returned alongside HTTP responses. Without this additional tooling that requires "client-side" processing, most of Skynet\'s power is cutoff from the application.'),(0,i.kt)("p",null,"In addition to this, decentralization is at the core of Skynet's ethos, so the SDK must account for additional complexities over interacting with portal APIs that might not exist for a traditional API endpoint, including supporting portal accounts (similar to authorization), dealing with not-shared-in-common portals (where nodes could supply their own portal URL and API key), and porting our Skynet utility libraries to Rust to ensure full inoperability with browser javascript applications and creating and signing items like registry entries to enable SkyDB and Skylink v2 (allowing content updating for a constant URL which can point to immutable skyfiles). For greater clarity and flexibility, we will separate the example pallet codebase from the SDK library of action and helper utils."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"To be more specific on the functionality needing to be built out in Milestone 1:")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: This work is implementing interaction with a pre-existing protocol, so much of the work will be porting code from our Javascript SDK to Rust in a way that feels ergonomic for Substrate developers.")),(0,i.kt)("h4",{id:"authentication--portal-preference-for-http-requests"},"Authentication & Portal Preference for HTTP Requests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All below actions requiring interaction with a Skynet portal should be assumed to be interacting only with the preferred portal and using an authentication mechanism. (Currently we support only encrypted JWTs, but may extend to API keys too.)"),(0,i.kt)("li",{parentName:"ul"},"For example, repinning Skylinks requires a simple HTTP request with optional authentication.")),(0,i.kt)("h4",{id:"immutable-skyfiles"},"Immutable Skyfiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Skyfile downloads are just HTTP GET requests."),(0,i.kt)("li",{parentName:"ul"},"Skyfile uploads come in 2 varieties:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Small Files: Simple HTTP POST requests that return a skylink from the portal"),(0,i.kt)("li",{parentName:"ul"},"Large Files: Orchestrated HTTP requests implementing the ",(0,i.kt)("inlineCode",{parentName:"li"},"tus")," protocol for increasing reliability by retrying failed chunks.")))),(0,i.kt)("h4",{id:"mutable-registry-entries"},"Mutable Registry Entries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Registry entries have a specific structure including a public key, data key (which together identify it for lookup), a revision number, data (limited to 70 bytes), and a signature signing the aforementioned using the public key's corresponding secret key."),(0,i.kt)("li",{parentName:"ul"},"Reading registry entries involves making an HTTP GET request, then verifying the signature against the data (Key pairs and signatures all using ",(0,i.kt)("inlineCode",{parentName:"li"},"ed25519"),")."),(0,i.kt)("li",{parentName:"ul"},"Writing registry entries involves creating a registry entry (getting the revision number can be done by first reading, or trusting you know the correct revision), and then signing the entry before making a POST request to the portal."),(0,i.kt)("li",{parentName:"ul"},"Registry entries have a complicated concurrency model, so attention will need to be given to revision number usage and tracking."),(0,i.kt)("li",{parentName:"ul"},"Registry entries are the core mutable primative for the rest of Skynet, including MySky, SkyDB, and Skylinks v2. The 70 bytes can be used to create custom data structures and is enough space to hold 2 Skylinks.")),(0,i.kt)("h4",{id:"skylinks-v2"},"Skylinks v2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For creating a Skylink v2, this is a coordination of getting or creating a Skylink to point at, converting the link from Base64 to a byte array, and writing this to a registry entry. This data field then acts like a pointer in the Skylink v2."),(0,i.kt)("li",{parentName:"ul"},"Then a hash of the public key and data key is taken and encoded into a skylink format (combining with a version number) before encoding to Base64 to generate the v2 Skylink."),(0,i.kt)("li",{parentName:"ul"},'Reading a Skylink v2 involves a GET request, which returns the data from the pointed to immutable Skylink (if the Skylink v2 points to another Skylink v2, if acts recursively until immutable file is resolved). The portal also returns a "proof" containing the chain of registry entries (each a Skylink v2) that need their signatures verified.')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"For this grant, we seek the support of the Web3 Foundation for doing an initial build-out of Skynet functionality. The Skynet Labs team (formerly Nebulous, creators of the Sia blockchain network) have extensive experience in blockchain development, but have much less experience in Rust and the Polkadot ecosystems. We would view this as an opportunity to build out support for many of the Skynet primitives and utility functions while working to find the most developer friendly way of exposing those to applications building with Substrate."),(0,i.kt)("p",null,"For more information on Skynet and our SDKs, see our ",(0,i.kt)("a",{parentName:"p",href:"http://support.skynetlabs.com/"},"support guide")," and our ",(0,i.kt)("a",{parentName:"p",href:"http://siasky.net/docs/"},"SDK documentation"),"."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"The most similar project in the ecosystem that we are aware of is the ",(0,i.kt)("inlineCode",{parentName:"p"},"offchain:ipfs")," fork of Substrate that implements an ipfs node in Rust along with an example pallet."),(0,i.kt)("p",null,"IPFS has many differences in performance, ease-of-use, availability and infrastructure as compared to Skynet. The most critical to this conversation is that Skynet Web Portal take care of much of the overhead that an IPFS node would, but without equal data verifiability guarentees. Because of this, we do not intend to need to make modifications to Substrate core for integration, instead working from the perspective of a pallet, allowing for easier maintenance and community up-take in the long term."),(0,i.kt)("p",null,"Some use cases where we believe Skynet will be useful for Substrate devs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chains where interaction focuses on client-side web apps"),(0,i.kt)("li",{parentName:"ul"},"Off-chain storage for NFTs"),(0,i.kt)("li",{parentName:"ul"},"On-chain referencing of user-generated-content"),(0,i.kt)("li",{parentName:"ul"},"Indirect communication for chain-external data (where another service can publish to skynet, to be consumed by the off-chain worker)"),(0,i.kt)("li",{parentName:"ul"},"Persistance of runtime data that isn't saved to storage"),(0,i.kt)("li",{parentName:"ul"},"Off-chain publishing of on-chain data")),(0,i.kt)("h2",{id:"team-busts_in_silhouette"},"Team :busts_in_silhouette"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Leader"),": David Vorick, ",(0,i.kt)("em",{parentName:"li"},"CEO | Skynet Labs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Skynet Labs Team Members")," including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Chris Schinnerl"),(0,i.kt)("li",{parentName:"ul"},"Peter-Jan Brone"),(0,i.kt)("li",{parentName:"ul"},"Matthew Sevey"),(0,i.kt)("li",{parentName:"ul"},"Daniel Helm"),(0,i.kt)("li",{parentName:"ul"},"Marcin Swieczkowski"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Skynet Labs Community Contributors"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"TBD"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Polkadot Ecosystem Collaborators"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"TBD")))),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Daniel Helm, ",(0,i.kt)("em",{parentName:"li"},"Developer Evangelist for Skynet Labs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:daniel@skynetlabs.com"},"daniel@skynetlabs.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://skynetlabs.com/"},"https://skynetlabs.com/"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," 177 Huntington Ave Ste 1703, PMB 71942, Boston, Massachusetts 02115-3153 US"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Skynet Labs")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"The Skynet Labs team (recently renamed from Nebulous) was responsible for the development and oversight of the Sia blockchain network and several projects in its ecosystem for many years. The team's most recent significant project is Skynet, a web-accessible decentalized storage protocol built to enable usage of Sia storage for users and developers without reliance on running any specialized software or obtaining any cryptocurrency. Skynet hosts over 200 community-created web apps, and has seen many signifigant partnerships and integrations."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/SkynetLabs/skyd"},"https://gitlab.com/SkynetLabs/skyd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SkynetLabs/skynet-webportal"},"https://github.com/SkynetLabs/skynet-webportal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SkynetLabs/skynet-js"},"https://github.com/SkynetLabs/skynet-js"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/david-vorick-6758a66a/"},"https://www.linkedin.com/in/david-vorick-6758a66a/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/peterjanbrone/"},"https://www.linkedin.com/in/peterjanbrone/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/sevey/"},"https://www.linkedin.com/in/sevey/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dghelm/"},"https://www.linkedin.com/in/dghelm/"))),(0,i.kt)("h2",{id:"development-status-open_book"},"Development Status :open_book"),(0,i.kt)("p",null,"Preliminary research has been undertaken into the Polkadot ecosystem generally and substrate development specifically for the purposes of writing this proposal, along with coordinating with the Web3Foundation and Parity team member to make sure the the implementation plans and technical details were thorough and sensible."),(0,i.kt)("h2",{id:"development-roadmap-nut_and_bolt"},"Development Roadmap :nut_and_bolt"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 8 Months")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  0.1875 FTE (",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Full-time_equivalent"},"see"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," $30,000")),(0,i.kt)("h3",{id:"milestone-1---exploratory-skynet-immutable-off-chain-storage-sdk-immutable-data-functionality"},"Milestone 1 - Exploratory Skynet Immutable Off-Chain Storage SDK (Immutable Data Functionality)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 8 months")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  0.1875 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," $30,000")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"MIT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and technical documentation that explains how a user can use the SDK in a pallet for basic off-chain functionality.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Sample Node with OCW Pallet & Read-Only Frontend"),(0,i.kt)("td",{parentName:"tr",align:null},"We will document and provide a node and frontend for a trivial use case that integrates our SDK into an example ocw-pallet based off the Substrate Node Template. This also acts a minimal implementation example for developers to see how to use the SDK.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Skynet Substrate SDK for Off-Chain Worker Pallet (Skyfiles)"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a pallet to interact with Skynet from an off-chain worker. For Milestone 1, this will include uploading and downloading immutable files from Skynet using content-addressable skylinks, tying these uploads to a portal account.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Skynet Substrate SDK for Off-Chain Worker Pallet (Registry Entries)"),(0,i.kt)("td",{parentName:"tr",align:null},"Additional logic necessary to derive secret and public keys from a seed, construct registry entries, sign them and verify signatures. This is the core mutable primative needed for other mutable data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Skynet Substrate SDK for Off-Chain Worker Pallet (Skylink V2)"),(0,i.kt)("td",{parentName:"tr",align:null},"Building on registry entries, we will create the functionality to create and access v2 Skylinks. These are Skylinks that point to other Skylinks, which the portal resolves and returns the pointed to immutable skyfile.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Skynet Substrate SDK for Off-Chain Worker Pallet (Repin)"),(0,i.kt)("td",{parentName:"tr",align:null},"Expose the ability to request that a portal pin an already exisiting Skyfile by only passing the skylink.")))),(0,i.kt)("h3",{id:"future-milestone---skynet-immutable-off-chain-storage-pallet-mutable-data-functionality"},"Future Milestone - Skynet Immutable Off-Chain Storage Pallet (Mutable Data Functionality)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We intend to take the lessons learned from the first version of this pallet and extend Skynet functionality according to the needs of developers. What follows are some steps we would look to take outside of the scope of this grant.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Skynet Substrate SDK for Off-Chain Worker Pallet (SkyDB and MySky File support)"),(0,i.kt)("td",{parentName:"tr",align:null},"We will extend the SDK from milestone 1 to interact with the primatives built on Skynet's registry. This mutable storage layer acts as key-value database from which SkyDB and MySky files are constructed. This allows getting and setting arbitrary data and pointing to JSON files, encrypted files, and arbitrary skyfiles pointed to by consistent MySky file paths. These use public/private key combinations for access-control. This will also contain functionality for generating decryption and derivation keys that are interoperable with Skynet's MySky SDK.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Skynet Substrate SDK for Off-Chain Worker Pallet (Verification)"),(0,i.kt)("td",{parentName:"tr",align:null},"We will extend the SDK from milestone 1 to allow for two important features: Verification of storage proofs for full end-to-end trustless infrastructure, and, pending Substrate's addition of long-running off-chain workers, subscribing to changes of SkyDB entries using Websockets. If this functionality is not yet in place for FRAME, we hope to work with core developers to prepare for implementing this functionality when the feature becomes available.")))),(0,i.kt)("h3",{id:"community-engagement"},"Community engagement"),(0,i.kt)("p",null,"Skynet has a very active developer community, and we'll be sure to create various content around the integration, including promotional write-ups and a highlight video as part of our SiaTV YouTube content."),(0,i.kt)("p",null,"We engage general audiences and developer audiences with our outreach media, and we'd include content for each audience."),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Skynet Labs will continue to develop Skynet by furthering integrations with blockchain projects needing decentralized, off-chain storage and front-end hosting, while also supporting client-facing applications that fall outside of blockchain programming. Our goal is that the data for these use-cases becomes increasingly interoperable and empowers users to have control over their data. Our medium-term plans include a robust monetization ecosystem that builds on our client-side, fully decentralized identity solution MySky."),(0,i.kt)("h2",{id:"additional-information-heavy_plus_sign"},"Additional Information :heavy_plus_sign"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," - Parity & Web3 Foundation Representatives"),(0,i.kt)("p",null,"No work outside preliminary research has been done on the pallet so far. Skynet Labs does have investors, but we have no other contributors or grants related to this specific project."),(0,i.kt)("h2",{id:"update--amendments"},"Update & Amendments"),(0,i.kt)("h3",{id:"02252022"},"02/25/2022"),(0,i.kt)("p",null,"We grossly underestimated the number of blockers and competing priorities we'd encounter as a team, and the timeline has now been exceeded by several months. We are ready to submit our work, and will do so soon."),(0,i.kt)("p",null,"As we better understood the ecosystem, we realized that a library for using Skynet in an off-chain worker was much more flexible for developing an application off-chain worker than was a proper pallet. As part of our deliverables, we now include the SDK library code ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SkynetLabs/skynet-substrate"},"skynet-substrate"),", along with a substrate example off-chain worker and front-end showing how to use various features of the SDK."),(0,i.kt)("p",null,"This amendment also updates our company name, URL, and payout address."))}d.isMDXComponent=!0}}]);