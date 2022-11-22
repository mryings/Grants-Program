"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[7849],{21555:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(16758);const l={},r="Polkakeeper Grant Proposal",o={unversionedId:"Applications/polkakeeper",id:"Applications/polkakeeper",title:"Polkakeeper Grant Proposal",description:"- Team Name: RAMP DEFI",source:"@site/docs/Applications/polkakeeper.md",sourceDirName:"Applications",slug:"/Applications/polkakeeper",permalink:"/Grants-Program/Applications/polkakeeper",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"PolkaJ Android Support",permalink:"/Grants-Program/Applications/polkaj_android_support"},next:{title:"PolkaMusic",permalink:"/Grants-Program/Applications/polkamusic"}},s={},p=[{value:"Polkakeeper - A Community-Led Value Assurance Protocol Empowering DeFi Markets Efficiency on Polkadot",id:"polkakeeper---a-community-led-value-assurance-protocol-empowering-defi-markets-efficiency-on-polkadot",level:2},{value:"Project Details",id:"project-details",level:2},{value:"1. Installation",id:"1-installation",level:2},{value:"2. Adaptation",id:"2-adaptation",level:2},{value:"3. Usage",id:"3-usage",level:2},{value:"Vault",id:"vault",level:2},{value:"Methods",id:"methods",level:3},{value:"Liquidator",id:"liquidator",level:2},{value:"Methods",id:"methods-1",level:3},{value:"LiquidatorAdapter",id:"liquidatoradapter",level:2},{value:"Methods",id:"methods-2",level:3},{value:"UI: User goals",id:"ui-user-goals",level:2},{value:"Team members",id:"team-members",level:2},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Overview",id:"overview",level:3},{value:"Technical Milestones",id:"technical-milestones",level:3},{value:"Milestone 1: Beta Release (0.275 BTC)",id:"milestone-1-beta-release-0275-btc",level:4},{value:"Milestone 2: Final Release (0.275 BTC)",id:"milestone-2-final-release-0275-btc",level:4},{value:"Technical Stack",id:"technical-stack",level:3},{value:"Marketing and Community Engagement",id:"marketing-and-community-engagement",level:2},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polkakeeper-grant-proposal"},"Polkakeeper Grant Proposal"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://rampdefi.com/polkakeeper/digitalassets/polkakeeperlogo.png",alt:null})),(0,i.kt)("h1",{id:"polkakeeper"},"Polkakeeper"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," RAMP DEFI"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BTC Payment Address:")," 1DQNr9EyYmoS5hbwRzQkfNrw5DS247cpF8"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/200#issuecomment-897495999"},"Terminated"))),(0,i.kt)("h2",{id:"polkakeeper---a-community-led-value-assurance-protocol-empowering-defi-markets-efficiency-on-polkadot"},"Polkakeeper - A Community-Led Value Assurance Protocol Empowering DeFi Markets Efficiency on Polkadot"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Project Overview")),(0,i.kt)("p",null,"Polkakeeper is a decentralized value assurance underwriter that empowers community creation of keeper strategies on the Polkadot network and bridged chains. On Polkakeeper, Strategists create Keepers (smart contracts), which can be executed by Finders who actively search for keeper execution opportunities. Backers are users who deposit their funds or assets into Vaults to back the deployment of keeper strategies."),(0,i.kt)("p",null,"Keepers are automated on-chain value assurance strategies that increase overall DeFi market efficiencies, such as liquidating undercollateralized positions in lending / margin trading protocols, or smoothing asset prices through arbitrage strategies across exchanges. We expect that as the Polkadot infrastructure matures, Keepers may deploy assets across chains, which give strategies new dimensions in identifying profit opportunities. A simple example of a liquidator keeper module in action would be a strategy that: (i) Finder discovers liquidation opportunity and calls Keeper function; (ii) Keeper checks profit execution logic for liquidation value less funds deployed > 0; (iii) If profit logic is established, Keeper calls borrow function on Vaults, executes liquidation and return funds to Vaults within one transaction."),(0,i.kt)("p",null,"Upon successful Keeper execution, the profits is distributed among the Strategist, Finder and Vaults. Where funds or assets in Vaults are not utilized, they are deployed to lending protocols and optimized for the best yields across chains."),(0,i.kt)("p",null,"The vision for Polkakeeper is to become the leading value assurance protocol and through DAO governance, organizes the Polkadot developer and user communities towards optimizing and maintaining high level of market efficiencies for Polkadot DeFi protocols. Polkakeeper is designed to empower community collaboration for Strategists, Finders and users to act collectively, rather than individually."),(0,i.kt)("p",null,"Polkakeeper is designed as an independent, composable Substrate component that can be seamlessly integrated and deployed across Polkadot\u2019s multi-chain network."),(0,i.kt)("h2",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Overview Diagram of how Polkakeeper works\n",(0,i.kt)("img",{parentName:"p",src:"https://rampdefi.com/polkakeeper/digitalassets/technical_diagram_updated.png",alt:null})),(0,i.kt)("h1",{id:"sample-scenario"},"Sample Scenario"),(0,i.kt)("p",null,"A description of how Polkakeeper Liquidator Module works, by walking through a typical scenario:"),(0,i.kt)("h2",{id:"1-installation"},"1","."," Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Defi product includes Polkakeeper Pallets into the runtime:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"PolkakeeperVault"),(0,i.kt)("li",{parentName:"ul"},"PolkakeeperLiquidator"),(0,i.kt)("li",{parentName:"ul"},"PolkakeeperLiquidatorAdapter")))),(0,i.kt)("h2",{id:"2-adaptation"},"2","."," Adaptation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Developers implement functions in PolkakeeperLiquidatorAdapter to fit the destination platform:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"liquidate"))),(0,i.kt)("li",{parentName:"ol"},"Connect the UserInterface to the extrinsic in the Liquidator runtime.")),(0,i.kt)("h2",{id:"3-usage"},"3","."," Usage"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Backers fund the Vault"),(0,i.kt)("li",{parentName:"ol"},"Finders execute the Strategy using the extrinsic function or the UI.")),(0,i.kt)("h1",{id:"glossary"},"Glossary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Finder",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A user who identifies opportunities to execute the Keeper strategy against. The finding is done off-chain due to the required computing/network resources needed. The outcome is a transaction that invokes the Keeper which has specific parameters embedded, for example a liquidation."))),(0,i.kt)("li",{parentName:"ul"},"Backer",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A user who provides liquidity to the Vaults. By pooling funds, Keepers can execute on liquidation opportunities with leverage. Backers earn from the profits made by the Keeper."))),(0,i.kt)("li",{parentName:"ul"},"Vaults",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A pooled user funds module for Backers to add liquidity. Keepers utilize pooled user funds within the Vaults to execute on profit opportunities."))),(0,i.kt)("li",{parentName:"ul"},"Strategy: Liquidator.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Code that executes against a specific DeFi platform to capture liquidation opportunities. For now, this is liquidation extrinsic only. Keeper: Liquidator includes conditional profit-only logic that ensures return of principal back to the Vault.")))),(0,i.kt)("h1",{id:"runtime-modules"},"Runtime Modules"),(0,i.kt)("h2",{id:"vault"},"Vault"),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn borrow(asset_id: T::AssetId, amount: T::Balance) -> Result;\npub fn deposit(asset_id: T::AssetId, amount: T::Balance) -> Result;\npub fn withdraw(asset_id: T::AssetId, amount: T::Balance) -> Result;\n")),(0,i.kt)("h2",{id:"liquidator"},"Liquidator"),(0,i.kt)("h3",{id:"methods-1"},"Methods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"fn liquidate(\n    origin, \n    target_user: T::AccountId, \n    pay_asset_id: T::AssetId, \n    get_asset_id: T::AssetId, \n    pay_asset_amount: T::Balance,\n    max_liquidatable: T::Balance,\n    borrow_amount: T::Balance\n) -> Result;\n\n// liquidate has internal checks for proper valuation of the asset\n// using the assetPriceAdapter, so it only executes if \n//     (pay_asset_price * pay_asset_amount) > borrowAmount\n\n")),(0,i.kt)("h2",{id:"liquidatoradapter"},"LiquidatorAdapter"),(0,i.kt)("h3",{id:"methods-2"},"Methods"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"fn liquidate(\n    origin, \n    target_user: T::AccountId, \n    pay_asset_id: T::AssetId, \n    get_asset_id: T::AssetId, \n    pay_asset_amount: T::Balance,\n) -> Result;\n\nfn assetPriceAdapter(\n    origin,\n    asset_id: T::AssetId\n) -> Result;\n\n")),(0,i.kt)("h1",{id:"backend-development"},"Backend Development"),(0,i.kt)("p",null,"This project has no backend component."),(0,i.kt)("h1",{id:"ui-development"},"UI Development"),(0,i.kt)("p",null,"We will implement a basic frontend component in React + Javascript + Polkadot.js. This component can be incorporated into the implementing platform's User Interface."),(0,i.kt)("h2",{id:"ui-user-goals"},"UI: User goals"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Load the application in the browser"),(0,i.kt)("li",{parentName:"ol"},"Sign in to a chain with a wallet"),(0,i.kt)("li",{parentName:"ol"},"Choose Keeper"),(0,i.kt)("li",{parentName:"ol"},"See Keeper details"),(0,i.kt)("li",{parentName:"ol"},"Choose Account/Position to act on"),(0,i.kt)("li",{parentName:"ol"},"See Asset to Pay"),(0,i.kt)("li",{parentName:"ol"},"See Asset to Get"),(0,i.kt)("li",{parentName:"ol"},"See needed Amount to pay"),(0,i.kt)("li",{parentName:"ol"},"Choose Amount to pay"),(0,i.kt)("li",{parentName:"ol"},"Choose whether to Borrow from Vault"),(0,i.kt)("li",{parentName:"ol"},"See available borrowable amount from Vault"),(0,i.kt)("li",{parentName:"ol"},"Execute transaction")),(0,i.kt)("h1",{id:"team"},"Team"),(0,i.kt)("h2",{id:"team-members"},"Team members"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Lawrence Lim")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Project Lead for RAMP DEFI, a leading DeFi protocol providing cross-chain liquid staking solutions."),(0,i.kt)("li",{parentName:"ul"},"Head of International Growth at IOST, a layer 1 blockchain protocol."),(0,i.kt)("li",{parentName:"ul"},"Global Sales at TradeGecko, an inventory management software company acquired by Intuit."),(0,i.kt)("li",{parentName:"ul"},"Corporate finance and private banking in global financial institutions including JP Morgan, BNP Paribas and KPMG."),(0,i.kt)("li",{parentName:"ul"},"LinkedIn: ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/lawrencelimhz/"},"https://www.linkedin.com/in/lawrencelimhz/"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Loh Zheng Rong")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Global Marketing Lead for RAMP DEFI overseeing overall project marketing execution and team operations."),(0,i.kt)("li",{parentName:"ul"},"Investments and blockchain advisory at Merkle Ventures."),(0,i.kt)("li",{parentName:"ul"},"COO of Toucan, Payments aggregator platform in S.E.A region."),(0,i.kt)("li",{parentName:"ul"},"LinkedIn: ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/lohzhengrong/"},"https://www.linkedin.com/in/lohzhengrong/"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Jade Wang")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Greater China Marketing Lead for RAMP DEFI, focusing on China market growth and development."),(0,i.kt)("li",{parentName:"ul"},"International Marketing Manager for IOST, a layer 1 blockchain protocol with headquarters in Beijing.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Caspar Oostendorp")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Technical Lead for RAMP DEFI overseeing technical R&D, multi-chain protocol deployments and multi-chain node operations."),(0,i.kt)("li",{parentName:"ul"},"Co-founder of BlockDevs Asia, a community of DLT/Blockchain tech devs."),(0,i.kt)("li",{parentName:"ul"},"Co-founder of Oost & Voort, specializing in cloud and blockchain solutions."),(0,i.kt)("li",{parentName:"ul"},"LinkedIn: ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/caspar-oostendorp-7bb82873/"},"https://www.linkedin.com/in/caspar-oostendorp-7bb82873/"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Anu Nair")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Blockchain Lead for RAMP DEFI overseeing product R&D, multi-chain protocol integrations and smart contracts development."),(0,i.kt)("li",{parentName:"ul"},"Senior blockchain developer at Propine, a digital asset custodian regulated by the Monetary Authority of Singapore."),(0,i.kt)("li",{parentName:"ul"},"Senior software engineer in leading software companies including Oracle and Manthan."),(0,i.kt)("li",{parentName:"ul"},"LinkedIn: ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/anu-b-nair-0551763a/"},"https://www.linkedin.com/in/anu-b-nair-0551763a/"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Jeannette Zhang")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Operations Lead overseeing business operations and finance."),(0,i.kt)("li",{parentName:"ul"},"Strategy and Finance Manager at Hashed.Labs, a blockchain incubator in partnership with the Singapore government."),(0,i.kt)("li",{parentName:"ul"},"Senior Auditor at Deloitte overseeing audit engagements."),(0,i.kt)("li",{parentName:"ul"},"LinkedIn: ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jeanettez/"},"https://www.linkedin.com/in/jeanettez/"))),(0,i.kt)("h1",{id:"teams-experience"},"Team's Experience"),(0,i.kt)("p",null,"Polkakeeper is conceptualized by RAMP DEFI, a leading DeFi project specializing in cross-chain staked liquidity solutions. The team members collectively have commercial experiences in scaling up decentralized projects and node operations, and have deep technical expertise in blockchain protocol developments in various programming languages including Solidity, Javascript and Python.\nRAMP helps users unlock the value of non-ERC20 assets by collateralizing them into fungible liquidity and bridging this liquidity into Ethereum. As of today, RAMP had already created integrations across Ethereum, IOST, Tomochain and Tezos, with more integrations under active development.\nRAMP is already building cross-chain keeper solutions, and its suite of DeFi products for staked liquidity and value assurance can similarly be customized and launched for the Polkadot network."),(0,i.kt)("p",null,"App link: ",(0,i.kt)("a",{parentName:"p",href:"https://app.rampdefi.com/#/"},"https://app.rampdefi.com/#/")),(0,i.kt)("p",null,"RAMP Vaults TVL: 15.4 Million USDT value\n",(0,i.kt)("a",{parentName:"p",href:"https://app.rampdefi.com/#/vault"},"https://app.rampdefi.com/#/vault")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://rampdefi.com/polkakeeper/digitalassets/vaults.png",alt:null})),(0,i.kt)("p",null,"RAMP DEFI rStake: Cross-chain integrated stake farming with native assets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.rampdefi.com/#/stake/iost"},"https://app.rampdefi.com/#/stake/iost")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.rampdefi.com/#/stake/tomo"},"https://app.rampdefi.com/#/stake/tomo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.rampdefi.com/#/stake/tezos"},"https://app.rampdefi.com/#/stake/tezos"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://rampdefi.com/polkakeeper/digitalassets/rstake.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Integration Partners for RAMP DEFI include:")),(0,i.kt)("p",null,"IOST | TOMOCHAIN | SOLANA | ELROND | NULS | MOONSTAKE | INJECTIVE PROTOCOL | CRUST | STONE FINANCE | ALLIANCE BLOCK"),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI"},"https://github.com/RAMP-DEFI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI/RAMP_IOST"},"https://github.com/RAMP-DEFI/RAMP_IOST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI/RAMP_TOMOCHAIN"},"https://github.com/RAMP-DEFI/RAMP_TOMOCHAIN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI/RAMP_VERSION_TEZOS"},"https://github.com/RAMP-DEFI/RAMP","_","VERSION","_","TEZOS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI/RAMP_REWARDS_MANAGER"},"https://github.com/RAMP-DEFI/RAMP","_","REWARDS","_","MANAGER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI/RAMP_API"},"https://github.com/RAMP-DEFI/RAMP_API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI/RAMP_WEB_MAIN"},"https://github.com/RAMP-DEFI/RAMP","_","WEB","_","MAIN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI/RAMP_wRAMP"},"https://github.com/RAMP-DEFI/RAMP_wRAMP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI/RAMP_IOSTSWAP"},"https://github.com/RAMP-DEFI/RAMP_IOSTSWAP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI/RAMP_Public_Sale"},"https://github.com/RAMP-DEFI/RAMP","_","Public","_","Sale")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI/RAMP_ERC_CLAIM_DAPP"},"https://github.com/RAMP-DEFI/RAMP","_","ERC","_","CLAIM_DAPP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI/RAMP_SECURITY_AUDITS_REWARDS"},"https://github.com/RAMP-DEFI/RAMP","_","SECURITY","_","AUDITS_REWARDS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI/RAMP_SECURITY_AUDITS_IOST"},"https://github.com/RAMP-DEFI/RAMP","_","SECURITY","_","AUDITS_IOST")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/RAMP-DEFI/RAMP_SECURITY_AUDITS_TOMOCHAIN"},"https://github.com/RAMP-DEFI/RAMP","_","SECURITY","_","AUDITS_TOMOCHAIN"))),(0,i.kt)("h1",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contact Name: LOH ZHENG RONG"),(0,i.kt)("li",{parentName:"ul"},"Contact Email: ",(0,i.kt)("a",{parentName:"li",href:"mailto:zr@rampdefi.com"},"zr@rampdefi.com")),(0,i.kt)("li",{parentName:"ul"},"Website: ",(0,i.kt)("a",{parentName:"li",href:"https://polkakeeper.com"},"https://polkakeeper.com"))),(0,i.kt)("h1",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Registered Address: 14 ROBINSON ROAD #08-01A FAR EAST FINANCE BUILDING S(048545), SINGAPORE"),(0,i.kt)("li",{parentName:"ul"},"Registered Legal Entity: Ramp Protocol Pte Ltd"),(0,i.kt)("li",{parentName:"ul"},"Country of registration: Singapore")),(0,i.kt)("h1",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Comparable projects")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep3r.network: ",(0,i.kt)("a",{parentName:"li",href:"https://keep3r.network/"},"https://keep3r.network/")," (Ethereum)"),(0,i.kt)("li",{parentName:"ul"},"KeeperDao: ",(0,i.kt)("a",{parentName:"li",href:"https://keeperdao.com/"},"https://keeperdao.com/")," (Ethereum)"),(0,i.kt)("li",{parentName:"ul"},"Web3 Guardian : ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/guardian"},"https://github.com/open-web3-stack/guardian")," (Ethereum)")),(0,i.kt)("h1",{id:"milestones"},"Milestones:"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 Months / POC"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 2.75"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 0.55 BTC")),(0,i.kt)("h3",{id:"technical-milestones"},"Technical Milestones"),(0,i.kt)("h4",{id:"milestone-1-beta-release-0275-btc"},"Milestone 1: Beta Release (0.275 BTC)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"All code will be open-sourced under the MIT license and shared in Github or Gitlab. We welcome contribution and reuse.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Source code"),(0,i.kt)("td",{parentName:"tr",align:null},"Public source code repository containing a Rust codebase based on the Substrate Node Template would be set up. Pallets implemented using Rust, using the Substrate Framework.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Source code"),(0,i.kt)("td",{parentName:"tr",align:null},"Vault, Liquidator and MockLiquidatorAdaptor pallets implemented with initial (<30%) unit test coverage.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Source code"),(0,i.kt)("td",{parentName:"tr",align:null},"Include a Reference runtime for testing locally.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Source code"),(0,i.kt)("td",{parentName:"tr",align:null},"React project for the User Interface Functionality: Feature complete for local execution, with basic documentation on how to run it locally and contribute. Basic layout/styling.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tooling"),(0,i.kt)("td",{parentName:"tr",align:null},"Docker container build setup that allows developers to get started quickly")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Community"),(0,i.kt)("td",{parentName:"tr",align:null},"Opening the codebase and inviting open-source developers to submit PRs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Community"),(0,i.kt)("td",{parentName:"tr",align:null},"Publish a Medium Article that announces all deliveries and a step by step tutorial for the developer community once evaluation is passed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial public outline of the documentation")))),(0,i.kt)("h4",{id:"milestone-2-final-release-0275-btc"},"Milestone 2: Final Release (0.275 BTC)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"All code will be open-sourced under the MIT license and shared in github or gitlab. We welcome contribution and reuse.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Source code"),(0,i.kt)("td",{parentName:"tr",align:null},"Inline documentation of the code and a guide that explains how to integrate the Vault, Liquidator and LiquidatorAdaptor pallets into other DeFi projects.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Source code"),(0,i.kt)("td",{parentName:"tr",align:null},"All Vault, Liquidator and LiquidatorAdaptor and AssetPriceAdapter components are completed and documented.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Source code"),(0,i.kt)("td",{parentName:"tr",align:null},"Unit tests at 85% coverage.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Source code"),(0,i.kt)("td",{parentName:"tr",align:null},"Includes reference/example code for implementation in other projects and contribution.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UI / Functionality"),(0,i.kt)("td",{parentName:"tr",align:null},"Feature complete (see User Stories) including a reference integration with a real-world (but testnet most likely) chain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UI / Functionality"),(0,i.kt)("td",{parentName:"tr",align:null},"React App source code available and deployed in working state to an online location for demo purposes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Complete, aimed at developers integrating Polkakeeper into DeFi projects.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Integration"),(0,i.kt)("td",{parentName:"tr",align:null},"Adapter pallet templates and example implementations complete and documented")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Community"),(0,i.kt)("td",{parentName:"tr",align:null},"Launch of Polkakeeper components in Substrate/Polkadot dev community")))),(0,i.kt)("h3",{id:"technical-stack"},"Technical Stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Programming language: Rust"),(0,i.kt)("li",{parentName:"ul"},"Framework: Substrate + FRAME"),(0,i.kt)("li",{parentName:"ul"},"Project template: Substrate Node Template"),(0,i.kt)("li",{parentName:"ul"},"Source control: Github or Gitlab"),(0,i.kt)("li",{parentName:"ul"},"CI/CD: Docker container based, with Runners or Actions"),(0,i.kt)("li",{parentName:"ul"},"Front-end: React + Polkadot.js")),(0,i.kt)("h2",{id:"marketing-and-community-engagement"},"Marketing and Community Engagement"),(0,i.kt)("p",null,"We will write articles and grow marketing awareness around Polkakeeper\u2019s development and implementation on Polkadot. As RAMP is a leading DeFi project, there is a ready community of DeFi users who can consume this content, and a marketing network for content distribution. They include, but are not limited to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Medium Articles on the product design, integration and tutorials for users."),(0,i.kt)("li",{parentName:"ul"},"Twitter posts covering development and other announcements."),(0,i.kt)("li",{parentName:"ul"},"Community engagement by running a range of incentivised testnets to get more feedback from the existing end-users to improve the Polkakeeper solution."),(0,i.kt)("li",{parentName:"ul"},"On-boarding and seeding the Polkakeeper community via the RAMP community.")),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Future Developments will focus on the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Collaboration with DeFi partners on Polkadot"),(0,i.kt)("li",{parentName:"ul"},"Bug bounties to enhance security for users"),(0,i.kt)("li",{parentName:"ul"},"Community developer grants and incentive programs for Strategists and Finders to develop Polkakeeper and scale up network value")),(0,i.kt)("h2",{id:"additional-information"},"Additional Information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What work has been done so far?"),"\nBase layer groundwork has been completed with substrate infrastructure planning. Subsequent bottom up construction of the solution would be developed in parts to ensure each running functionality performs as intended."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Are there any teams who have already contributed (financially) to the project?"),"\nOur R&D expenses have been covered thus far via RAMP DEFI with world class investors who took part in RAMP DEFI\u2019s private sale round such as Alameda Research, Mechanism Capital, Arrington XRP, Parafi Capital, among others."),(0,i.kt)("p",null,"We have further investment interest for follow-on investment should the need arise between the use of this grant and our next source of funding, whether that be the General Grants program or another VC-led investment."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Have you applied for other grants so far?"),"\nNo."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How can I get involved?"),"\nAnyone looking to get involved with RAMP DEFI is welcomed to reach out to us at: ",(0,i.kt)("a",{parentName:"p",href:"mailto:team@polkakeeper.com"},"team@polkakeeper.com")))}d.isMDXComponent=!0}}]);