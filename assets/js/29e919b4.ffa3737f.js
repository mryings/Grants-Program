"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[708],{41656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(8209);const r={},o="ParaSpell",i={unversionedId:"applications/ParaSpell_follow-up",id:"applications/ParaSpell_follow-up",title:"ParaSpell",description:"- Team Name: ParaSpell\u2728",source:"@site/applications/ParaSpell_follow-up.md",sourceDirName:"applications",slug:"/applications/ParaSpell_follow-up",permalink:"/Grants-Program/applications/ParaSpell_follow-up",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/ParaSpell_follow-up.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Architecture \ud83c\udfd7\ufe0f",id:"architecture-\ufe0f",level:4},{value:"Technology Stack  \ud83d\udcbb\ufe0f",id:"technology-stack--\ufe0f",level:4},{value:"Ecosystem Fit  \ud83c\udf33",id:"ecosystem-fit--",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team Github Profiles \ud83e\uddd1\u200d\ud83c\udf93",id:"team-github-profiles-",level:3},{value:"Team LinkedIn Profiles \ud83e\uddd1\u200d\ud83c\udf93",id:"team-linkedin-profiles-",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Improve ParaSpell UI 1/2 &amp; ParaSpell SDK 1/3",id:"milestone-1---improve-paraspell-ui-12--paraspell-sdk-13",level:3},{value:"Milestone 2 - Improve ParaSpell SDK 2/3",id:"milestone-2---improve-paraspell-sdk-23",level:3},{value:"Milestone 3 - Improve ParaSpell UI 2/2 &amp; ParaSpell SDK 3/3",id:"milestone-3---improve-paraspell-ui-22--paraspell-sdk-33",level:3},{value:"Future Plans \ud83d\udd2d",id:"future-plans-",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2},{value:"Project achievements in chronological order  \u231b\ufe0f",id:"project-achievements-in-chronological-order--\ufe0f",level:5}],d={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"paraspell"},"ParaSpell"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," ParaSpell\u2728"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 0xB7d45Ef044fD9342e4c03e28D9e9bddA2d4Fe3e1 (USDC)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2 \ud83d\udc24")),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("p",null,"Previously delivered:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/3905f49d0efcd3700670fc3e13c2d92a2f84a7fa/applications/ParaSpell.md"},"Proposal 1 for base funding ParaSpell")),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"XCM & XCMP related development tool with SDK and UI created for developers."),(0,l.kt)("p",null,"ParaSpell main advantages can be summarized in the following list:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ParaSpell is a platform that allows developers to use specific XCM & XCMP related tasks from a user-friendly interface."),(0,l.kt)("li",{parentName:"ul"},"ParaSpell focuses on ease of use, broad scale of use cases, and bringing XCM & XCMP utilization & documentation closer to developers."),(0,l.kt)("li",{parentName:"ul"},"ParaSpell guarantees to be a completely decentralized, open-source platform that does not collect any user data."),(0,l.kt)("li",{parentName:"ul"},"ParaSpell allows other substrate projects to easily implement XCM & XCMP functionality with ParaSpell SDK")),(0,l.kt)("p",null,"One of the ParaSpell main goals is to reduce the time necessary to create XCM calls or open HRMP channels.\nAnother goal is to make XCM calls as easy as possible to construct via SDK while retaining full customizability of what is transferred through XCM message and where."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/198574902-1a9e1c98-9351-4f5d-894f-7e0158eabeaa.jpg",alt:"comparison"})),(0,l.kt)("p",null,"As we can see in the figure above, the amount of details the user has to fill to transfer the XCM message is drastically reduced. As an example, users do not need to specify a specific route from origin to destination chain. These details are filled for them."),(0,l.kt)("p",null,"Another goal of ParaSpell is having network installation, compilation & startup done as simply as possible. This is achieved by makefile that groups commands into fewer much more intuitive commands and by network startup configuration file. Together, these two files take care of the network side, and adding new nodes into these files is intuitive. Starting the application is also very simple and done by one command. Communication between application and network is made possible with Polkadot API libraries. This can help future Parachain developers with testing."),(0,l.kt)("p",null,"ParaSpell focuses mainly on substrate developers. Added value comes from being user friendly SDK for simplifying development by saving time necessary to install & launch network, open HRMP channels or create XCM transfers between nodes available in network.\nAnother added value comes from SDK that aims to connect entire Substrate ecosystem and in future also EVM with Substrate."),(0,l.kt)("p",null,"Overall ParaSpell is all about developer experience."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"ParaSpell in its current form allows developers to install all dependencies as well as a network consisting of Rococo, Pichiu(Kylin network), Bifrost & Acala nodes with one command. Launching a network is also done by one command. Once the network is installed and started ParaSpell application allows developers to open/close HRMP channels between mentioned parachains. In current progress ParaSpell already has user interface and main functionality almost finished."),(0,l.kt)("p",null,"The following screen allows the user to open the HRMP channels between list of parachains pulled from Rococo by API call.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/198574223-8444aff5-a3f8-4d15-bf25-0ccf345e2577.png",alt:"open channel"})),(0,l.kt)("p",null,"Closing HRMP channels is just as simple as opening them. One button click to close the required channel.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/198574247-12a00f37-33a4-467a-aaaa-e83d913af558.png",alt:"close channel"})),(0,l.kt)("p",null,"If the user decides to transfer funds from Relay chain to Parachain they can do so by filling following details. These required details are way faster to fill than filling a full XCM call which requires a complete route and selection of concrete token.\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/198574295-30a4d124-8f72-4931-a3ee-2f3e1375d73b.png",alt:"relay to para"})),(0,l.kt)("p",null,"The opposite, but nearly the same scenario is sending tokens from Parachain to Relay chain. It is just as simple, however.\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/198574386-d3883bfe-54ba-4e74-abcc-f08995a39703.png",alt:"para to relay"})),(0,l.kt)("p",null,"The last transaction scenario is the transfer of funds between Parachain and another Parachain.\n",(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/198574413-8ef3714c-f971-4652-ab7f-b8114f8928bb.png",alt:"para to para"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Overview video of application is also available on Youtube  ",(0,l.kt)("a",{parentName:"li",href:"https://youtu.be/YKZEa2MaY6Q"},"Link to overview video"))),(0,l.kt)("h4",{id:"architecture-\ufe0f"},"Architecture \ud83c\udfd7\ufe0f"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/55763425/198412240-e031d877-c5d8-4952-9048-2e1256ba4469.svg",alt:"screenFlow"})),(0,l.kt)("p",null,"UI is purposely designed to be as simple as possible. This guarantees, that all tasks can be done quickly and without extended searching. All necessary screens also feature notifications which will as a milestone explain be callback reactive. The loading screen is only present on the first application & network startup, once accessing the same screen after the application was loaded it will be skipped automatically. The screen serves to register necessary assets in parachain nodes. This is only required to be run once per network startup."),(0,l.kt)("p",null,"SDK currently handles transfers to 29 compatible Parachains (ones that have xTokens pallet) (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paraspell/sdk/tree/beta-pre-release"},"Beta-pre-release ParaSpell SDK"),") and also can transfer to both Relay chains. It is easy to construct calls as is but we want to make it even easier and more developer friendly. "),(0,l.kt)("h4",{id:"technology-stack--\ufe0f"},"Technology Stack  \ud83d\udcbb\ufe0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Vue.js"),(0,l.kt)("li",{parentName:"ul"},"Node.js"),(0,l.kt)("li",{parentName:"ul"},"Typescript"),(0,l.kt)("li",{parentName:"ul"},"Polkadot api libraries"),(0,l.kt)("li",{parentName:"ul"},"Make"),(0,l.kt)("li",{parentName:"ul"},"Parachain launch"),(0,l.kt)("li",{parentName:"ul"},"Substrate compatible nodes (For now Rococo, Pichiu(Kylin network), Bifrost & Acala)")),(0,l.kt)("h3",{id:"ecosystem-fit--"},"Ecosystem Fit  \ud83c\udf33"),(0,l.kt)("p",null,"There are not many XCM & XCMP related development tools released currently. We aim to aid this mostly empty space and help developers to understand XCM & XCMP as the current state-of-the-art technology by providing documentation and a user interface in which they can do development tasks more easily and faster."),(0,l.kt)("p",null,"In Polkadot and Kusama ecosystem, there are few XCM related tools in development. For example Moonbeam XCM SDK was released only recently. We bring comparison table that compares our ParaSpell SDK to Moonbeam SDK\n| Features | ParaSpell XCM SDK | Moonbeam XCM SDK |\n| -----: | ----------- | ------------- |\n| Number of packages user has to install | User needs to install only 1 package | User needs to install 2 packages |\n| Support for Parachains | Already integrated for every with xTokens & will be integrated for all with polkadotXCM pallet (Will be basically implemented for all nodes then) Link to implementation ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paraspell/sdk/tree/beta-pre-release"},"Beta-pre-release ParaSpell SDK"),'  | Every new node has to be added manually |\n| Build pattern | Will be integrated, to be as intuitive as possible | Integrated, not as intuitive to implement however |\n| Support for asset pallet operations | Will be integrated  | Not integrated |\n| Support for HRMP pallet operations | Integrated users can open & close HRMP channels on their local chain (Useful feature for devs) | Not integrated |\n| Support for checking details that do not change | Will be integrated & will also be covered with some error handling eg (too little ammount being sent, not sufficient for XCM transfer) | Integrated in form of small "map" for different Tokens & Node IDs |\n| Support for Axelar GMP (General message passing) that will connect Substrate with EVM chains | Planned to be implemented in the future | No data |'),(0,l.kt)("p",null,'Unlike the already mentioned "Moonbeam XCM" platform ParaSpell provides UI enhancement that uses our XCM SDK and users can try/learn technology from it. ParaSpell also includes support for all 29 Substrate Parachains (',(0,l.kt)("a",{parentName:"p",href:"https://github.com/paraspell/sdk/tree/beta-pre-release"},"Beta-pre-release ParaSpell SDK"),") that have xTokens pallet compared to Moonbeam XCM to which users have to implement compatible nodes manually. ParaSpell SDK only needs one package compared to Moonbeam XCM which has total of two. Compared to Moonbeam XCM which contains only XCM calls ParaSpell also contains calls that can open or close HRMP channels. We also want to include support for Parachains that have template pallet for XCM called polkadotXCM this pallet is a little harder to work with than xTokens, even more for inexperienced developers."),(0,l.kt)("p",null,"Another comparison worth mentioning is UI vs Morph which is also enhancement of XCM UI Transfer tool\n| Features | ParaSpell XCM UI | Morph |\n| -----: | ----------- | ------------- |\n| Focus: | Developers & users that wish to try XCM locally first | Users |\n| Wiki: | Comprehensive Wiki explaining XCM, how to add assets to UI & Nodes and more implemented | Not implemented |\n| Support for transfers: | In three different scenarios | In two scenarios |\n| Support for local network configuration: | Fully implemented example network configuration that uses maintained Parachain-launch library | Not implemented |\n| Support for HRMP channel opening/closing: | Fully implemented | Not implemented |"),(0,l.kt)("p",null,'Unlike the already mentioned "Morph" platform ParaSpell focuses more on developers. ParaSpell features complete network install and startup configuration in one single command. This automatization ensures, that developers do not need to do any extra tasks when they wish to run development nodes locally. ParaSpell also allows developers to open and close HRMP channels between Parachains they connected. Like "Morph", ParaSpell can also transfer fungible tokens in three scenarios. From Parachains to Relay chain, from Relay chain to Parachains & from Parachains to Parachains.'),(0,l.kt)("p",null,"We are currently in talks with several Parachain teams that like the idea of unified SDK for XCM transfers as much as we do. SDK that unifies XCM can be very helpful for entire ecosystem in our opinion."),(0,l.kt)("p",null,"Our target audiences are Web3 projects and starting/current blockchain developers."),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("p",null,"Du\u0161an Morh\xe1\u010d - Student, project Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava"),(0,l.kt)("p",null,"Viktor Vala\u0161t\xedn - Supervisor, founder of  ",(0,l.kt)("a",{parentName:"p",href:"https://kodadot.xyz/"},"KodaDot"),". Faculty of Informatics and Information Technologies STU in Bratislava"),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Du\u0161an Morh\xe1\u010d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:xmorhac@stuba.sk"},"xmorhac@stuba.sk"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Address:")," Tom\xe1\u0161ovsk\xe1 453/2, Kalinovo 98501, Slovak Republic"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Du\u0161an Morh\xe1\u010d ml.")),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Du\u0161an is the programmer & researcher behind this project and has successfully presented it at the international conference ICECET2022 held in Prague from which there is an article regarding XCMP & our project. It is published on ",(0,l.kt)("a",{parentName:"li",href:"https://ieeexplore.ieee.org/document/9872938"},"IEEE"),". Du\u0161an also studies Blockchain technology and had a bachelor thesis about cross-blockchain sharing from which this idea was born. Du\u0161an is actively working on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/paraspell"},"ParaSpell")," full-time & have also created project called ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dudo50/MoonDo"},"MoonDo")," which he works on & researches during free time, research from it will be used in ParaSpell. MoonDo won second place bounty for Axelar in Moonbeam connected contracts hackathon ",(0,l.kt)("a",{parentName:"li",href:"https://devpost.com/software/moondo"},"link"),"."),(0,l.kt)("li",{parentName:"ul"},"Viktor (",(0,l.kt)("a",{parentName:"li",href:"https://twitter.com/vikiival"},"@vikiival"),") is building open-source software in the Polkadot ecosystem since 2019. Viktor is also Du\u0161an's supervisor, Co-Founder of  ",(0,l.kt)("a",{parentName:"li",href:"https://kodadot.xyz/"},"KodaDot"),", and co-author of our XCMP ICECET2022 article publication.")),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/paraspell"},"https://github.com/paraspell")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dudo50/MoonDo"},"https://github.com/dudo50/MoonDo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/kodadot/nft-gallery"},"https://github.com/kodadot/nft-gallery")," ")),(0,l.kt)("h3",{id:"team-github-profiles-"},"Team Github Profiles \ud83e\uddd1\u200d\ud83c\udf93"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/dudo50"},"https://github.com/dudo50"),"  Du\u0161an Morh\xe1\u010d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/vikiival"},"https://github.com/vikiival"),"  Viktor Vala\u0161t\xedn")),(0,l.kt)("h3",{id:"team-linkedin-profiles-"},"Team LinkedIn Profiles \ud83e\uddd1\u200d\ud83c\udf93"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dudo50"},"https://www.linkedin.com/in/dudo50")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/vikival"},"https://www.linkedin.com/in/vikival"))),(0,l.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/paraspell/ui"},"UI")," that uses XCM SDK has it's functionality implemented already which was main goal of our first proposal. We will shift it towards new version of Vue which is state of the art during fufillment of this proposal. SDK has ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paraspell/sdk/tree/beta-pre-release"},"beta pre-release")," phase released, it features all 29 nodes that implement xTokens pallet, ability to transfer to & from Relay chains, ability to open & close HRMP channels."),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 2 FTE"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 28 500 USD")),(0,l.kt)("h3",{id:"milestone-1---improve-paraspell-ui-12--paraspell-sdk-13"},"Milestone 1 - Improve ParaSpell UI 1/2 & ParaSpell SDK 1/3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 months \u231b\ufe0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 9 500 USD \ud83d\udcb0\ufe0f")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"MIT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,l.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a usage explanation in readme.md")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"SDK Core UNIT tests will be provided for xTokens Pallet, HRMP pallet, polkadotXCM pallet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"Docker file that allows to test ParaSpell SDK through ParaSpell UI will be provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Create scaffold template for Web3 projects"),(0,l.kt)("td",{parentName:"tr",align:null},"Create template on Git for Web3 dApps to allow users to start developing and deploying in just minutes, this template will contain different libraries important for Web3 development already preinstalled. Languages planned to be used are ",(0,l.kt)("inlineCode",{parentName:"td"},"Typescript"),". Stack that will be used is ",(0,l.kt)("inlineCode",{parentName:"td"},"Vue3 (Nuxt 3)"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"pnpm package manager"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Polkadot API libraries")," (Use KodaDot packages if applicable), ",(0,l.kt)("inlineCode",{parentName:"td"},"ParaSpell SDK"),", UI will consist of basic components (address input (checks if address entered is valid), ballance input (no longer necessity to input lenghty amounts, will have sum conversions) etc.. ), wallet management (PolkadotJS, Talisman, Subwallet), all other not mentioned libraries will be mentioned in readme of template and readme will be linked to delivery.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Implement support for checking asset compatibility through ",(0,l.kt)("inlineCode",{parentName:"td"},"asset pallet")),(0,l.kt)("td",{parentName:"tr",align:null},"Each node, that has ability to check which tokens it supports should be automatically queried for this data and SDK should be able to determine compatibility based on data queried.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3.a"),(0,l.kt)("td",{parentName:"tr",align:null},"Add support for nodes without xTokens pallet I"),(0,l.kt)("td",{parentName:"tr",align:null},"We will implement support for transfer scenario Parachain to Relay chain for nodes that do not have xTokens pallet but have ",(0,l.kt)("inlineCode",{parentName:"td"},"polkadotXCM")," prebuilt template pallet. (SDK will be able to determine which pallet to use on which Parachain automatically)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3.b"),(0,l.kt)("td",{parentName:"tr",align:null},"Add support for nodes without xTokens pallet II"),(0,l.kt)("td",{parentName:"tr",align:null},"We will implement support for transfer scenario Parachain to Parachain for nodes that do not have xTokens pallet but have ",(0,l.kt)("inlineCode",{parentName:"td"},"polkadotXCM")," prebuilt template pallet. (SDK will be able to determine which pallet to use on which Parachain automatically)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Make SDK easier to use"),(0,l.kt)("td",{parentName:"tr",align:null},"Merge Parachain to Parachain & Parachain to Relay chain scenarios in SDK into one scenario that will be able to adapt based on details provided (if destination node id not provided, then assume transfer is for relay chain, also if token is compatible with relay chain), this will replace need for calling two functions for each scenario with only one function covering both scenarios eg. ",(0,l.kt)("inlineCode",{parentName:"td"},"send()")," instead ",(0,l.kt)("inlineCode",{parentName:"td"},"paratopara()")," & ",(0,l.kt)("inlineCode",{parentName:"td"},"paratorelay()"))))),(0,l.kt)("h3",{id:"milestone-2---improve-paraspell-sdk-23"},"Milestone 2 - Improve ParaSpell SDK 2/3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 months \u231b\ufe0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 9 500 USD \ud83d\udcb0\ufe0f")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"MIT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,l.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a usage explanation in readme.md")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"SDK Core UNIT tests will be provided for pallets mentioned previously, script that checks pallets, functionality to check data that does not change, builder pattern")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"Docker file that allows to test ParaSpell SDK through ParaSpell UI will be provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Add support for checking data that does not change"),(0,l.kt)("td",{parentName:"tr",align:null},"There are things that do not change, such as base token configuration (Polkadot, DOT token, 10 decimals), (Astar, ASTR, 18 decimals) This can be imported from  ",(0,l.kt)("inlineCode",{parentName:"td"},"@polkadot/network")," library to have better support for different transfer scenarios")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Rewrite SDK to builder pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"Best thing we can do to support multiple pallets and make it simplier for developers would be a Builder pattern functionality would look like: ",(0,l.kt)("inlineCode",{parentName:"td"},"import { Builder } as \u2018@paraspell/sdk\u2019")," and then building of call would be something in sence: ",(0,l.kt)("inlineCode",{parentName:"td"},"const call = Builder(api).from(\u2018bsx\u2019).to(\u2018ksm\u2019).teleportTokens(\u2018KSM\u2019).addr('destinationAddr').sum(currencySum).asV3().build()"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Make a map of compatible <chain, pallet>"),(0,l.kt)("td",{parentName:"tr",align:null},"Before each SDK release there should be a script that connects to the compatible nodes, checks all relevant available pallets ",(0,l.kt)("inlineCode",{parentName:"td"},"xTokens"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"polkadotXCM"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"asset pallets"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"HRMP")," pallets) and saves them to the map.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Use ",(0,l.kt)("a",{parentName:"td",href:"https://turborepo.org/"},"turborepo")),(0,l.kt)("td",{parentName:"tr",align:null},"Remake package into ",(0,l.kt)("inlineCode",{parentName:"td"},"monorepo")," for easier importing and cleaner use")))),(0,l.kt)("h3",{id:"milestone-3---improve-paraspell-ui-22--paraspell-sdk-33"},"Milestone 3 - Improve ParaSpell UI 2/2 & ParaSpell SDK 3/3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 months \u231b\ufe0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 9 500 USD \ud83d\udcb0\ufe0f")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"MIT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,l.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a usage explanation in readme.md")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"SDK Core UNIT tests will be provided for every scenario that SDK offers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"Docker file that allows to test ParaSpell SDK through ParaSpell UI will be provided.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish Medium article about development of SDK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Release new functionality"),(0,l.kt)("td",{parentName:"tr",align:null},"Ability to install new version of package from npm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2.a"),(0,l.kt)("td",{parentName:"tr",align:null},"Update ParaSpell UI I"),(0,l.kt)("td",{parentName:"tr",align:null},"Update ParaSpell XCM UI Parachain to Parachain Scenario screen to be able to use new SDK (Add or remove some variables according to new requirements from SDK functions)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2.b"),(0,l.kt)("td",{parentName:"tr",align:null},"Update ParaSpell UI II"),(0,l.kt)("td",{parentName:"tr",align:null},"Update ParaSpell XCM UI Relay chain to Parachain Scenario screen to be able to use new SDK (Add or remove some variables according to new requirements from SDK functions)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2.c"),(0,l.kt)("td",{parentName:"tr",align:null},"Update ParaSpell UI III"),(0,l.kt)("td",{parentName:"tr",align:null},"Update ParaSpell XCM UI Parachain to Relay chain Scenario screen to be able to use new SDK (Add or remove some variables according to new requirements from SDK functions)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Add comprehensive Wiki guide"),(0,l.kt)("td",{parentName:"tr",align:null},"We will add Wiki guide, that will specify SDK implementation to another dApps, different SDK functionalities & Guide for Parachain creators that wish to add their freshly baked node to the list of compatible nodes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Use scaffold template from Milestone 1 to update UI"),(0,l.kt)("td",{parentName:"tr",align:null},"This will update ParaSpell UI from Vue 2 into Vue3 and nuxt. It will also be good demonstration for template usage & it will make UI more compatible with other dApps.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Integrate suggestions from ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/w3f/Grant-Milestone-Delivery/blob/1343c66d74a1078b2a30972463a614737ed8aa92/evaluations/paraspell_1_keeganquigley.md"},"evaluation")),(0,l.kt)("td",{parentName:"tr",align:null},"Integrate suggestions regarding Wiki, module for asset conversions to not need to write so many 0s & replace button text ",(0,l.kt)("inlineCode",{parentName:"td"},"Log in with:")," with account name once logged in")))),(0,l.kt)("h2",{id:"future-plans-"},"Future Plans \ud83d\udd2d"),(0,l.kt)("p",null,"Once everything will be implemented according to the proposed plan application will still be under constant improvement as technology will progress. For example, once the XCMP protocol will be released we wish to deprecate the HRMP protocol we currently use for channels."),(0,l.kt)("p",null,"In a long run, we also want to improve design of the UI, add new features that can be useful for developers and support for new nodes. "),(0,l.kt)("p",null,"Project goal is that SDK will serve dApp developers and UI will teach new substrate developers to use XCM and will serve to existing substrate developers to test their freshly baked Parachains."),(0,l.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Personal recommendation"),(0,l.kt)("h5",{id:"project-achievements-in-chronological-order--\ufe0f"},"Project achievements in chronological order  \u231b\ufe0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udcd9 Article about project created & presented on international conference ICECET2022 held in Prague (450 out of 1000+ articles accepted) Link to IEEE publication -  ",(0,l.kt)("a",{parentName:"li",href:"https://ieeexplore.ieee.org/document/9872938/"},"IEEE - Sharing Fungible Assets Across Polkadot Paraverse")),(0,l.kt)("li",{parentName:"ul"},"\ud83e\udd48  2nd Prize, Build a XCM related Tool for Moonbeam - Polkadot North America Hackathon  ",(0,l.kt)("a",{parentName:"li",href:"https://devpost.com/software/polkachange-cross-blockchain-transfer-tool"},"Hackathon entry")),(0,l.kt)("li",{parentName:"ul"},"\ud83e\udd49  3rd Prize, EVM+ DApp for aUSD yield - Polkadot North America Hackathon  ",(0,l.kt)("a",{parentName:"li",href:"https://devpost.com/software/polkachange-cross-blockchain-transfer-tool"},"Hackathon entry")),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udf88 Web 3 Foundation base grant funded ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dudo50/Grants-Program/blob/d182e10ecbd7705aee07edc5f7aa0085d07188e5/applications/ParaSpell.md"},"link"),", ",(0,l.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/web3-foundation-grants-wave-15-recipients-5ac4e6406485"},"link2"),"."),(0,l.kt)("li",{parentName:"ul"},"\ud83e\udd48 Second place bounty in Moonbeam connected contracts Hackathon - Build Cross-chain application with Axelar ",(0,l.kt)("a",{parentName:"li",href:"https://devpost.com/software/moondo"},"Link to hackathon post"))))}c.isMDXComponent=!0}}]);