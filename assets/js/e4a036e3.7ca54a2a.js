"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4524],{57902:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));a(8209);const i={},o="PANIC",l={unversionedId:"applications/panic",id:"applications/panic",title:"PANIC",description:"- Team Name: Simply VC",source:"@site/applications/panic.md",sourceDirName:"applications",slug:"/applications/panic",permalink:"/Grants-Program/applications/panic",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/panic.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Table 1",id:"table-1",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Mockups of UI components",id:"mockups-of-ui-components",level:4},{value:"Technology stack being used",id:"technology-stack-being-used",level:4},{value:"Core components and architecture",id:"core-components-and-architecture",level:4},{value:"Table 2",id:"table-2",level:5},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Conversations with the Web3 Foundation",id:"conversations-with-the-web3-foundation",level:3},{value:"Initial investigation",id:"initial-investigation",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Table 3",id:"table-3",level:4},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2},{value:"Work already done",id:"work-already-done",level:3}],p={toc:d},m="wrapper";function h(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"panic"},"PANIC"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," Simply VC"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," 0x672b62B64abe450F8C6957785fA5c79E33422aEF (ETH/USDT)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("p",null,"This grant request is a follow-up on a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/panic_by_simply_vc.md"},"previous agreement")," that has been terminated to allow for a value-first approach for the delivery of PANIC increments."),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"PANIC by Simply VC is an open-source monitoring and alerting solution for blockchain node operators. PANIC monitors a node operator\u2019s setup, and sends relevant alerts via multiple alerting channels. The main objectives are to give node operators insight about the state of their systems, and to promptly raise alerts in case of an issue that may degrade the availability of their service. "),(0,n.kt)("p",null,"This grant request revolves around expanding the base tool together with the UI to cater for high priority Substrate metrics. This will allow PANIC users to monitor and be alerted on a growing number of metrics. Below is a table of what is in scope for this grant:"),(0,n.kt)("h4",{id:"table-1"},"Table 1"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Metric"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Consensus"),(0,n.kt)("td",{parentName:"tr",align:null},"Blocks authored")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Consensus"),(0,n.kt)("td",{parentName:"tr",align:null},"Validator status in consensus (active, disabled, elected)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Consensus"),(0,n.kt)("td",{parentName:"tr",align:null},"Grandpa consensus rounds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Consensus"),(0,n.kt)("td",{parentName:"tr",align:null},"Slashing events")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Consensus"),(0,n.kt)("td",{parentName:"tr",align:null},"I'm online events")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Consensus"),(0,n.kt)("td",{parentName:"tr",align:null},"Validator rewards per era and pending payouts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Governance Activity"),(0,n.kt)("td",{parentName:"tr",align:null},"Pending votes for the validator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Node"),(0,n.kt)("td",{parentName:"tr",align:null},"Syncing status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Node"),(0,n.kt)("td",{parentName:"tr",align:null},"Best block height")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Node"),(0,n.kt)("td",{parentName:"tr",align:null},"Finalised block height")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Node"),(0,n.kt)("td",{parentName:"tr",align:null},"Sync target height")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Node Stash"),(0,n.kt)("td",{parentName:"tr",align:null},"New Controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Payout"),(0,n.kt)("td",{parentName:"tr",align:null},"Payout Occurred")))),(0,n.kt)("p",null,"PANIC is built around the needs of our own node operations team. We believe in dogfooding as it allows us to better assess the strengths and weaknesses of what is being built and ultimately provide a better product for external node operations teams."),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("h4",{id:"mockups-of-ui-components"},"Mockups of UI components"),(0,n.kt)("p",null,"For the scope of this iteration, the installer will remain mostly unchanged, with the exception of the ",(0,n.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1R1wScmHhDo_63mylVvKF45mUthdzlPrO/view?usp=sharing"},"Alerts Configuration")," page. During the installation process, the node operator can manage out-of-the-box thresholds and severities for a list of alerts that will include the metrics listed in ",(0,n.kt)("a",{parentName:"p",href:"#table-1"},"Table 1")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1Tnd6QKmLI9JuigryYkiJSo2DRZUTuKqO/view?usp=sharing"},"first iteration of the UI")," includes a high-level dashboard from which node operators will be able to review all implemented alerts across all chains setup during installation. Also provided is a low-level system metrics dashboard which displays real-time data related to the host systems\u2019 performance. The UI will remain unchanged but node operators will be able to view new alerts on the metrics listed in ",(0,n.kt)("a",{parentName:"p",href:"#table-1"},"Table 1"),"."),(0,n.kt)("h4",{id:"technology-stack-being-used"},"Technology stack being used"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Alerter - Python"),(0,n.kt)("li",{parentName:"ul"},"UI (backend) - Node.js, TypeScript"),(0,n.kt)("li",{parentName:"ul"},"UI (frontend) - TypeScript, Stencil JS, Sass"),(0,n.kt)("li",{parentName:"ul"},"Docker")),(0,n.kt)("h4",{id:"core-components-and-architecture"},"Core components and architecture"),(0,n.kt)("p",null,"PANIC is a Publisher-Subscriber system consisting of a number of components where each component is either a publisher, a subscriber or both. PANIC uses RabbitMQ to forward messages between components classified the table below:"),(0,n.kt)("h5",{id:"table-2"},"Table 2"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Components"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Monitors"),(0,n.kt)("td",{parentName:"tr",align:null},"The role of a monitor is to track the status of a monitorable (node/repository/network) by periodically obtaining a set of metrics from various sources (such as prometheus/rpc endpoints) and forwarding these metrics to RabbitMQ")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Data Transformers"),(0,n.kt)("td",{parentName:"tr",align:null},"Each data transformer listens to metric data from the monitors. Depending to what monitorable the data belongs to, the data transformer outputs two sets of data, one for saving and another for alerting")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Alerters"),(0,n.kt)("td",{parentName:"tr",align:null},"The role of the alerters is to load the alert rules set up during installation and listen to transformed data from the data transformer. When this is received, an alerter checks the alert rules and raises alerts with the appropriate severity when needed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Data Stores"),(0,n.kt)("td",{parentName:"tr",align:null},"The data stores receive transformed data and store the metric data inside Redis and MongoDB. Redis data will be used to load the current metrics state in the UI dashboards, whereas MongoDB data will be used to load historic data on the UI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Alert Router"),(0,n.kt)("td",{parentName:"tr",align:null},"The role of the alert router is to forward the raised alert to the appropriate channel, depending on the severity-channel mapping set during installation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Channels Manager"),(0,n.kt)("td",{parentName:"tr",align:null},"The channels manager receives alerts from the alert router and forwards these alerts to the channel determined by the alert router. The channels manager contains all the logic required by PANIC to communicate with a specific channel")))),(0,n.kt)("p",null,"PANIC\u2019s architecture diagram can be found ",(0,n.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/187MzJo-vy9oZNGCXVzDx6wK4D3B-rJUk/view?usp=sharing"},"here"),"."),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"PANIC\u2019s main objective is to become the go-to tool for node operators active on various chains, including Substrate-based ones. PANIC\u2019s focus is on alerting in the event that an issue arises that directly impacts the service being maintained. This grant request is against the investigation, development, testing, and delivery of additional metrics with the goal of providing node operators with a more complete monitoring and alerting solution as per ",(0,n.kt)("a",{parentName:"p",href:"#table-1"},"Table 1"),"."),(0,n.kt)("p",null,"Currently a number of node operators are using other tools, such as ",(0,n.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," in collaboration with ",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Alertmanager"),", but this is not without fault. Such solutions require considerable setup effort and offer no default configurations. On the other hand, PANIC is built with ease of use in mind. The node operator is taken intuitively through the installation process which is clean and quick, with out-of-the-box thresholds and severities that can be configured if required. Once the installation is finalised, the UI will be made available with ",(0,n.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1Tnd6QKmLI9JuigryYkiJSo2DRZUTuKqO/view"},"visual representations of alerts")," in line with the setup installed."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team lead and full stack developer"),": Dylan Galea"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full stack developer"),": Guilherme Zimmermann "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full stack developer"),": Daniel Cherrett"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full stack developer"),": Francesco Borg Bonello"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full stack developer"),": R\xedder Cantu\xe1ria"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Product owner"),": Christian Falzon")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," Christian Falzon"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:chris@simply-vc.com.mt"},"chris@simply-vc.com.mt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," ",(0,n.kt)("a",{parentName:"li",href:"https://simply-vc.com.mt/"},"https://simply-vc.com.mt/"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Address:")," 33, Pope Alexander VII Street, Balzan, BZN 1530, Malta (subject to change)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," SIMPLY VC LTD is a Limited Liability Company registered in Malta with the Company reg no C 61022.")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("p",null,"For a more in-depth review of the team\u2019s past experiences, go to the team\u2019s ",(0,n.kt)("a",{parentName:"p",href:"#Team-LinkedIn-Profiles"},"LinkedIn profiles")," section."),(0,n.kt)("p",null,"Dylan Galea has been involved in the development of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SimplyVC/panic_polkadot"},"PANIC for Polkadot")," in both frontend and backend work. He has been part of the backend team during the implementation of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SimplyVC/polkadot_api_server"},"Polkadot API server")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SimplyVC/panic_cosmos"},"PANIC for Cosmos")," and helped in the fulfilment of technical reviews for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SimplyVC/panic_oasis"},"PANIC for Oasis"),"."),(0,n.kt)("p",null,"Guilherme Zimmermann was previously a full stack developer on the ",(0,n.kt)("a",{parentName:"p",href:"https://www.betsson.com/en/blog/"},"blog")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.betsson.com/en/promotions"},"promotions platform")," of Betsson Group. He was also involved in the ",(0,n.kt)("a",{parentName:"p",href:"https://www.philips.ae/healthcare/resources/landing/tasy"},"public billing module")," of Philips Healthcare as a full stack developer. His efforts are now focused on the PANIC UI together with the development of Simply VC\u2019s open source ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@simply-vc/uikit"},"UI Kit"),"."),(0,n.kt)("p",null,"In July 2019 Daniel Cherrett joined Betsson Group as a QA Engineer on their ",(0,n.kt)("a",{parentName:"p",href:"https://www.betssongroupaffiliates.com/brands/"},"affiliates program"),". He is also the sole developer of ",(0,n.kt)("a",{parentName:"p",href:"https://call2let.com/"},"Call2Let"),", a Maltese property letting platform. He is now involved in developing the PANIC backend."),(0,n.kt)("p",null,"Francesco Borg Bonello worked as a developer for ",(0,n.kt)("a",{parentName:"p",href:"https://www.melita.com/"},"Melita"),", a Maltese telecommunications company. Together with Dylan and Daniel he is now working on PANIC\u2019s backend. "),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/"},"https://github.com/SimplyVC/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/panic"},"https://github.com/SimplyVC/panic")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/panic_cosmos"},"https://github.com/SimplyVC/panic_cosmos")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/panic_polkadot"},"https://github.com/SimplyVC/panic_polkadot")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/polkadot_api_server"},"https://github.com/SimplyVC/polkadot_api_server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/panic_oasis"},"https://github.com/SimplyVC/panic_oasis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/oasis_api_server"},"https://github.com/SimplyVC/oasis_api_server"))),(0,n.kt)("p",null,"The GitHub accounts of the team members are listed below:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dylan Galea - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dillu24"},"https://github.com/dillu24")),(0,n.kt)("li",{parentName:"ul"},"Guilherme Zimmermann  - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/zimaah"},"https://github.com/zimaah")),(0,n.kt)("li",{parentName:"ul"},"Daniel Cherrett - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Cherrett"},"https://github.com/Cherrett")),(0,n.kt)("li",{parentName:"ul"},"Francesco Borg Bonello - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/itsciccio"},"https://github.com/itsciccio")),(0,n.kt)("li",{parentName:"ul"},"R\xedder Cantu\xe1ria - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/simplyrider"},"https://github.com/simplyrider")),(0,n.kt)("li",{parentName:"ul"},"Christian Falzon - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/crsfalzon"},"https://github.com/crsfalzon"))),(0,n.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dylan Galea - ",(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dylan-galea-8352b0173/"},"https://www.linkedin.com/in/dylan-galea-8352b0173/")),(0,n.kt)("li",{parentName:"ul"},"Guilherme Zimmermann  - ",(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/guilhermezima/"},"https://www.linkedin.com/in/guilhermezima/")),(0,n.kt)("li",{parentName:"ul"},"Daniel Cherrett - ",(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/daniel-cherrett/"},"https://www.linkedin.com/in/daniel-cherrett/")),(0,n.kt)("li",{parentName:"ul"},"Francesco Borg Bonello - ",(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/francesco-borg-bonello-521933221/"},"https://www.linkedin.com/in/francesco-borg-bonello-521933221/")),(0,n.kt)("li",{parentName:"ul"},"R\xedder Cantu\xe1ria - ",(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/ridercantuaria/"},"https://www.linkedin.com/in/ridercantuaria/")),(0,n.kt)("li",{parentName:"ul"},"Christian Falzon - ",(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/christian-falzon-5a2691b3/"},"https://www.linkedin.com/in/christian-falzon-5a2691b3/"))),(0,n.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,n.kt)("h3",{id:"conversations-with-the-web3-foundation"},"Conversations with the Web3 Foundation"),(0,n.kt)("p",null,"At Simply VC we strive to keep our external stakeholders aware of product progress. For PANIC, this is achieved by the issue of an ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1Du6YOdcP4l1M3GVQ5sQWDRHk_Awxo3VtAh_8tAKBOBc/edit?usp=sharing"},"end-of-month progress report"),", which includes our latest releases, changes to the team structure and way of working, current priorities, and what features will be tackled in the short-term. Also included is a high-level roadmap to allow for longer-term visibility."),(0,n.kt)("h3",{id:"initial-investigation"},"Initial investigation"),(0,n.kt)("p",null,"Following an initial investigation, we envisage that for Substrate ",(0,n.kt)("strong",{parentName:"p"},"node monitoring and alerting"),", PANIC will operate as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"When the Monitors Manager Process receives the configurations, it starts as many Substrate Node Monitors as there are Substrate configurations to be monitored."),(0,n.kt)("li",{parentName:"ol"},"Each Substrate Monitor extracts the Substrate data from the node's websocket url and forwards this data to the Substrate Data Transformer via RabbitMQ."),(0,n.kt)("li",{parentName:"ol"},"The Substrate Node Data Transformer starts by listening for data from the Substrate Node Monitors via RabbitMQ. Whenever a Substrate node's data is received, the Substrate Node Data Transformer combines the received data with the Substrate node's state obtained from Redis, and sends the combined data to the Data Store and the Substrate Node Alerter via RabbitMQ."),(0,n.kt)("li",{parentName:"ol"},"The Substrate Node Alerter starts by listening for data from the Substrate Node Data Transformer via RabbitMQ. Whenever a Substrate node's transformed data is received, the Substrate Node Alerter compares the received data with the alert rules set during installation, and raises an alert if any of these rules are triggered. This alert is then sent to the Alert Router via RabbitMQ ."),(0,n.kt)("li",{parentName:"ol"},"The Data Store also receives data from the Substrate Node Data Transformer via RabbitMQ and saves this data to both Redis and MongoDB as required."),(0,n.kt)("li",{parentName:"ol"},"When the Alert Router receives an alert from the Substrate Node Alerter via RabbitMQ, it checks the configurations to determine which channels should receive this alert. As a result, this alert is then routed to the appropriate channel and the Data Store (so that the alert is stored in a Mongo database) via RabbitMQ."),(0,n.kt)("li",{parentName:"ol"},"When a Channel Handler receives an alert via RabbitMQ, it simply forwards it to the channel it handles and the Node Operator would be notified via this channel.")),(0,n.kt)("p",null,"For Substrate ",(0,n.kt)("strong",{parentName:"p"},"network monitoring and alerting"),", PANIC will operate as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"When the Monitors Manager Process receives the configurations, it starts one Substrate Network Monitor per chain and keeps the configurations updated. A Substrate Network monitor chooses the first syncing and accessible node it finds to retrieve network metrics."),(0,n.kt)("li",{parentName:"ol"},"Each Substrate Network Monitor extracts the Substrate network data from the selected substrate node's websocket url endpoint and forwards this data to the Substrate Network Data Transformer via RabbitMQ."),(0,n.kt)("li",{parentName:"ol"},"The Substrate Network Data Transformer starts by listening for data from the Substrate Network Monitors via RabbitMQ. Whenever a Substrate network's data is received, the Substrate Network Data Transformer combines the received data with the Substrate Network's state obtained from Redis, and sends the combined data to the Data Store and the Substrate Network Alerter via RabbitMQ."),(0,n.kt)("li",{parentName:"ol"},"The Substrate Network Alerter starts by listening for data from the Substrate Network Data Transformer via RabbitMQ. Whenever a Substrate Network's transformed data is received, the Substrate Network Alerter compares the received data with the alert rules set during installation, and raises an alert if any of these rules are triggered. This alert is then sent to the Alert Router via RabbitMQ ."),(0,n.kt)("li",{parentName:"ol"},"The Data Store also receives data from the Substrate Network Data Transformer via RabbitMQ and saves this data to both Redis and MongoDB as required."),(0,n.kt)("li",{parentName:"ol"},"When the Alert Router receives an alert from the Substrate Network Alerter via RabbitMQ, it checks the configurations to determine which channels should receive this alert. As a result, this alert is then routed to the appropriate channel and the Data Store (so that the alert is stored in a Mongo database) via RabbitMQ."),(0,n.kt)("li",{parentName:"ol"},"When a Channel Handler receives an alert via RabbitMQ, it simply forwards it to the channel it handles and the Node Operator would be notified via this channel.")),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("p",null,"This grant request consists of a single milestone with the aim of expanding the base tool together with the UI to cater for high priority Substrate metrics."),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 71 days"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 3"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," \uff0449,984 (USD)")),(0,n.kt)("h4",{id:"table-3"},"Table 3"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"Update of design and setup documentation present on our repository")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"Backend functions will be covered by unit tests. Frontend components will go through unit and end-to-end testing. When deliverables 1 - 7 are implemented and tested, a release candidate will be provided to our staking team for UAT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,n.kt)("td",{parentName:"tr",align:null},"Docker"),(0,n.kt)("td",{parentName:"tr",align:null},"Our system will run on Docker. We will make available Dockerfiles to make the running and testing of the product possible")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,n.kt)("td",{parentName:"tr",align:null},"Article"),(0,n.kt)("td",{parentName:"tr",align:null},"Delivery of a Medium article on the need fulfilled by PANIC, together with a high-level description of the product and what\u2019s coming next")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Research"),(0,n.kt)("td",{parentName:"tr",align:null},"Research about the metrics and data sources")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Monitors"),(0,n.kt)("td",{parentName:"tr",align:null},"Develop Substrate monitors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"Data Transformers"),(0,n.kt)("td",{parentName:"tr",align:null},"Develop Substrate data transformers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4."),(0,n.kt)("td",{parentName:"tr",align:null},"Data Store"),(0,n.kt)("td",{parentName:"tr",align:null},"Develop Substrate data store")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"5."),(0,n.kt)("td",{parentName:"tr",align:null},"Alerter"),(0,n.kt)("td",{parentName:"tr",align:null},"Develop Substrate alerter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"6."),(0,n.kt)("td",{parentName:"tr",align:null},"UI"),(0,n.kt)("td",{parentName:"tr",align:null},"Update high-level dashboards with new metric information")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"7."),(0,n.kt)("td",{parentName:"tr",align:null},"UAT"),(0,n.kt)("td",{parentName:"tr",align:null},"User acceptance testing carried out by Simply VC\u2019s staking team")))),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("p",null,"We see PANIC as being the go-to tool for node operators active on Substrate, Cosmos, and Chainlink networks. For this to be achieved we will continue to introduce more metrics for monitoring and alerting from various data sources. Considerable time and effort will be invested in the UI to introduce new functionality such as MFA and low-level dashboards for additional visual representations on node, governance, and consensus data."),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Element"),(0,n.kt)("h3",{id:"work-already-done"},"Work already done"),(0,n.kt)("p",null,"In its current state, PANIC provides node operators with:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A base tool that monitors host systems that the Substrate/Cosmos-SDK/Chainlink nodes are running on."),(0,n.kt)("li",{parentName:"ol"},"Monitoring and alerting on:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Chainlink nodes"),(0,n.kt)("li",{parentName:"ul"},"Chainlink contracts"),(0,n.kt)("li",{parentName:"ul"},"EVM nodes"),(0,n.kt)("li",{parentName:"ul"},"GitHub repositories"),(0,n.kt)("li",{parentName:"ul"},"DockerHub repositories"))),(0,n.kt)("li",{parentName:"ol"},"Channels designed to notify node operators of the status of monitored metrics and any issues that might require immediate attention :",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Telegram"),(0,n.kt)("li",{parentName:"ul"},"Slack"),(0,n.kt)("li",{parentName:"ul"},"Email"),(0,n.kt)("li",{parentName:"ul"},"Twilio"),(0,n.kt)("li",{parentName:"ul"},"PagerDuty"),(0,n.kt)("li",{parentName:"ul"},"Opsgenie"),(0,n.kt)("li",{parentName:"ul"},"Console"),(0,n.kt)("li",{parentName:"ul"},"Log files"))),(0,n.kt)("li",{parentName:"ol"},"Basic control over the alerter (such as mute alerts and check status) via Telegram bots and Slack apps."),(0,n.kt)("li",{parentName:"ol"},"A quick installation through an intuitive UI setup and configuration process."),(0,n.kt)("li",{parentName:"ol"},"Out-of-the-box alert thresholds for metrics monitored and associated severity levels of alerts (Info, Warning, Major, and Critical), customisable by node operators."),(0,n.kt)("li",{parentName:"ol"},"A UI which consists of a high-level dashboard from which node operators can review all alerts together with a low-level dashboard which allows node operators to review the performance of their host infrastructure.")),(0,n.kt)("p",null,"May 2022 will see an additional release which will allow node operators to get alerted on high priority metrics for Cosmos based chains."))}h.isMDXComponent=!0}}]);