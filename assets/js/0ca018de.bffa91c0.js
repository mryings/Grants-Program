"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3035],{79094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));a(8209);const i={},r="Standard Protocol",o={unversionedId:"applications/Standard_Protocol",id:"applications/Standard_Protocol",title:"Standard Protocol",description:"Project Overview",source:"@site/applications/Standard_Protocol.md",sourceDirName:"applications",slug:"/applications/Standard_Protocol",permalink:"/Grants-Program/applications/Standard_Protocol",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Standard_Protocol.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Problems of current algorithmic stablecoins",id:"problems-of-current-algorithmic-stablecoins",level:3},{value:"1. Too much focus on price stability, no sustainable use case for interoperability",id:"1-too-much-focus-on-price-stability-no-sustainable-use-case-for-interoperability",level:4},{value:"2. Oracles are centralized, and there is no decentralized ecosystem to reward them",id:"2-oracles-are-centralized-and-there-is-no-decentralized-ecosystem-to-reward-them",level:4},{value:"3. Auctions are hard to track and centralized",id:"3-auctions-are-hard-to-track-and-centralized",level:4},{value:"Solutions",id:"solutions",level:3},{value:"1. Elastic supply",id:"1-elastic-supply",level:4},{value:"2. Decentralized oracles",id:"2-decentralized-oracles",level:4},{value:"3. Democratization of auction via automated market maker",id:"3-democratization-of-auction-via-automated-market-maker",level:4},{value:"Documentation",id:"documentation",level:3},{value:"Core Runtime Modules",id:"core-runtime-modules",level:3},{value:"token regisrty <code>/token</code>",id:"token-regisrty-token",level:4},{value:"oracle reward module <code>/oracle</code>",id:"oracle-reward-module-oracle",level:4},{value:"market module <code>/market</code>",id:"market-module-market",level:4},{value:"vault module <code>/vault</code>",id:"vault-module-vault",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Middleware for data submission and runtime integration",id:"milestone-1---middleware-for-data-submission-and-runtime-integration",level:3},{value:"Oracle provider client",id:"oracle-provider-client",level:3},{value:"Unit tests",id:"unit-tests",level:2},{value:"Oracle",id:"oracle",level:2},{value:"Milestone 2 - PoS oracle reward distribution",id:"milestone-2---pos-oracle-reward-distribution",level:3},{value:"Vault",id:"vault",level:2},{value:"Oracle",id:"oracle-1",level:2},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"standard-protocol"},"Standard Protocol"),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Standard Protocol is a collaterized algorithmic stablecoin protocol for synthetic assets."),(0,l.kt)("h3",{id:"problems-of-current-algorithmic-stablecoins"},"Problems of current algorithmic stablecoins"),(0,l.kt)("h4",{id:"1-too-much-focus-on-price-stability-no-sustainable-use-case-for-interoperability"},"1. Too much focus on price stability, no sustainable use case for interoperability"),(0,l.kt)("p",null,"Current algorithmic stablecoins focus only on automated price stability. Although they provide some interoperability between tokens with initial distribution in yield farming, but currently there is no sustainable way for them to interoperate with financial activities without the reward. Also, other algorithmic stablecoins which uses incentives in cases regarding circulating supply(e.g. contractionary, expansionary cases) are not showing sustainability to preserve 1 dollar peg."),(0,l.kt)("h4",{id:"2-oracles-are-centralized-and-there-is-no-decentralized-ecosystem-to-reward-them"},"2. Oracles are centralized, and there is no decentralized ecosystem to reward them"),(0,l.kt)("p",null,"One can be dependant to dexes, but they are prone to flash loans, making arbitrage data compared to centralized exchange. In order to provide aggregated and balanced data, oracle providers must be rewarded.  "),(0,l.kt)("h4",{id:"3-auctions-are-hard-to-track-and-centralized"},"3. Auctions are hard to track and centralized"),(0,l.kt)("p",null,"Auctions after liquidation are hard to track and participate, leaving only hardcore traders to take advantage of arbitrage. More decentralized way to provide liquidation must be considered. Auction orders come in high volume of collateral, and this can lead to plutocracy."),(0,l.kt)("h3",{id:"solutions"},"Solutions"),(0,l.kt)("h4",{id:"1-elastic-supply"},"1. Elastic supply"),(0,l.kt)("p",null,"As Amplforth(AMPL) used elastic supply to rebase its total supply of stablecoin, Standard rebases its stablecoin supply in each era, and it uses overcollaterization to mint its stablecoin, meter(MTR)."),(0,l.kt)("h4",{id:"2-decentralized-oracles"},"2. Decentralized oracles"),(0,l.kt)("p",null,"Oracle client from various sources  (e.g. binance, coinbase, hydra dx, etc) can provide aggregated price information so that the price cannot be manipulated from one source."),(0,l.kt)("h4",{id:"3-democratization-of-auction-via-automated-market-maker"},"3. Democratization of auction via automated market maker"),(0,l.kt)("p",null,"Instead of hosting an auction for liquidating collaterals, Standard protocol deposits liquidated collateral to its amm pair so that meter(MTR) holders can purchase other digital assets from liquidation."),(0,l.kt)("h3",{id:"documentation"},"Documentation"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.standardprotocol.org"},"https://docs.standardprotocol.org")),(0,l.kt)("h3",{id:"core-runtime-modules"},"Core Runtime Modules"),(0,l.kt)("h4",{id:"token-regisrty-token"},"token regisrty ",(0,l.kt)("inlineCode",{parentName:"h4"},"/token")),(0,l.kt)("p",null,"Token manages asset that flows in and out with xcmp in polkadot ecosystem. assets are managed with unique identifier."),(0,l.kt)("h4",{id:"oracle-reward-module-oracle"},"oracle reward module ",(0,l.kt)("inlineCode",{parentName:"h4"},"/oracle")),(0,l.kt)("p",null,"Oracles in standard protocol are rewarded in each era on each block reward.\nprices are stored in the state, and oracle providers are updated in each era."),(0,l.kt)("h4",{id:"market-module-market"},"market module ",(0,l.kt)("inlineCode",{parentName:"h4"},"/market")),(0,l.kt)("p",null,"Market module in standard protocol manages pair for automated market maker(AMM) between collateral and its stablecoin meter(MTR)."),(0,l.kt)("h4",{id:"vault-module-vault"},"vault module ",(0,l.kt)("inlineCode",{parentName:"h4"},"/vault")),(0,l.kt)("p",null,"Vault module in standard protocol is a collateral debt position engine where"),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"Standard protocol will act as the catalyst for other parachain's financial activities for enabling leverage trading and Arbitrage in AMM created from liquidation. It will also open a protocol for synthetic asset market with decentralized oracle ecosystem."),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("p",null,"Hyungsuk Kang, team leader"),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("p",null,"Standard protocol is being made with Apache 2.0 license. Legal entity is being built in Singapore right now."),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"Hyungsuk is Plasm network's core developer. He developed Subswap, AMM in substrate, and he wants to extend it to make the next finance in Polkadot ecosytem using XCM module and collateral debt position. He is also kernel and tendermint fellow."),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/digitalnativeinc/standard-substrate"},"https://github.com/digitalnativeinc/standard-substrate"))),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/hyungsukkang"},"https://www.linkedin.com/in/hyungsukkang"))),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("p",null,"As a synthetic asset protocol,Standard protocol heavily depends on the oracle for maintaining the system. Oracles should be formed in a sustainable way to be motivated for people to provide computing power.\nTo reward the network participant, Standard protocol proposes new PoS reward system by splitting block rewards from block validators to oracle providers."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2 months"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 1000DAI"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"0xd2234E506862991ADA75f930c6D79B4236e3E265")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Status:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/244#issuecomment-1014764739"},"Terminated"))),(0,l.kt)("h3",{id:"milestone-1---middleware-for-data-submission-and-runtime-integration"},"Milestone 1 - Middleware for data submission and runtime integration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 500DAI")),(0,l.kt)("p",null,"This milestone focuses on building a oracle provider client middleware which submits off-chain data to the blockchain. An authoritive module for testing connection between oracle provider and the protocol is provided in this phase. Then, Standard will extend the oracle module to distribute reward from session callback connected between ",(0,l.kt)("inlineCode",{parentName:"p"},"pallet_session")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"pallet_staking"),". When oracle provider submits outliers or does not submit values that are out of sync from other oracle providers, a slash can be applied from anyone to report. Outliers are detected with ",(0,l.kt)("a",{parentName:"p",href:"https://online.stat.psu.edu/stat200/lesson/3/3.2"},"IQR method"),"."),(0,l.kt)("h3",{id:"oracle-provider-client"},"Oracle provider client"),(0,l.kt)("p",null,"As chainlink and other oracle solution has a middleware or submitting client from off-chain, Standard also has its oracle client. Oracle provider client is actually a bot that uses ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/scs/substrate-api-client/blob/master/tutorials/api-client-tutorial/src/main.rs"},"polkadot-js api")," to submit information in oracle module in a certain periods(e.g. 2 hour, 4 hour). For example, to send an oracle xt from an oracle client,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript="},'// Loads config\nimport LumenConfig from "@digitalnative/lumen-config";\n// Fetch functions for acquiring off-chain data\nimport fetchData from "@digitalnative/lumen-fetch";\n// Submit function for submitting data to on-chain\nimport submitData from "@digitalnative/lumen-submit";\n// Async Apis for polkadot\nimport { ApiPromise, WsProvider } from "@polkadot/api";\n\nconst runClient = async (dir) => {\n  const cron = require("node-cron");\n  const config = LumenConfig.default({ dir });\n  const { events } = config;\n  events.emit("client:start");\n  const api = await polkadotApi(config);\n  // register cron job to execute in every minute\n  cron.schedule("*/90 * * * * *", async function() {\n    events.emit("client:next");\n    // fetch data\n    const data = await fetchData(false, config);\n    // Submit data\n    await submitData(data, config, api);\n  });\n  // Declare cron job has been set\n  events.emit("client:init");\n};\n\nexport default runClient;\n\nasync function polkadotApi(config: LumenConfig) {\n  const provider = new WsProvider(config.rpc);\n  const definitions = require("@digitalnative/type-definitions/opportunity");\n  let types = definitions.types[0].types;\n  const api = await new ApiPromise({\n    provider,\n    types,\n  });\n  await api.isReady;\n  return api;\n}\n')),(0,l.kt)("p",null,"Here is the overall workflow for the client operation, and add-ons and options are expected to be added in each function in the library."),(0,l.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,l.kt)("p",null,"Standard protocol applies test driven development(TDD) on building runtime modules for the grant.\nHere are unit tests that will be done along the development in the runtime module."),(0,l.kt)("h2",{id:"oracle"},"Oracle"),(0,l.kt)("p",null,"oracle in milestone 1 should achieve:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Only Root account can register oracle providers for slots to submit off-chain data"),(0,l.kt)("li",{parentName:"ul"},"If slots are not open for an entity in the storage, a new oracle provider initializes the slot with the oracle provider count."),(0,l.kt)("li",{parentName:"ul"},"When the provider is designated for a slot, it can only submit data for a designated slot"),(0,l.kt)("li",{parentName:"ul"},"If one reports slashing for the slot, runtime validates the slot data with iqr rule and remove provider and set the value as zero if the value violates it."),(0,l.kt)("li",{parentName:"ul"},"zero values are excluded and the median is calculated in both even and odd cases")),(0,l.kt)("p",null,"To check this, oracle provider module should have these test functions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"add_oracle_provider_works"),": Oracle should be added by the root account for now until the module includes session callback between ",(0,l.kt)("inlineCode",{parentName:"li"},"pallet-staking")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"pallet-session")," as a impl of ",(0,l.kt)("inlineCode",{parentName:"li"},"SessionManager"),".  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"oracle_report_works"),": Oracle provider should only be able to submit data only in designated slot, and create new batch if the price data has not been reported yet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"oracle_slash_works"),": when one reports slashing for oracle provider in a slot, the runtime should run iqr rule to find out whether the slot value violates the rule from the collected oracle data batch."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"oracle_excludes_zeros_and_return_median"),": Oracle runtime should exclude zero-values since it means the data is empty or not available due to violation. median should be returned from the remainder of filtered batch."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"oracle_excludes_zeros_and_return_median_even"),": the purpose is also same with the previous test function, but the batch length is even.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation will introduce how to install the oracle and participate to get block reward")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Oracle client"),(0,l.kt)("td",{parentName:"tr",align:null},"Oracle client to receive information from external sources then submit information regularly to substrate runtime")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Modified Oracle module"),(0,l.kt)("td",{parentName:"tr",align:null},"Oracle module to register operators and batch")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Unit test codes"),(0,l.kt)("td",{parentName:"tr",align:null},"Unit test codes in ",(0,l.kt)("inlineCode",{parentName:"td"},"tests.rs")," in each runtime module")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Npm binary"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a npm binary for oracle providers to install and run an oracle client")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile"),(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile for running Standard protocol binary will be provided")))),(0,l.kt)("h3",{id:"milestone-2---pos-oracle-reward-distribution"},"Milestone 2 - PoS oracle reward distribution"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 500DAI")),(0,l.kt)("p",null,"This milestone focuses on including session callbacks related to sessions in implementations of ",(0,l.kt)("inlineCode",{parentName:"p"},"SessionManager")," trait in ",(0,l.kt)("inlineCode",{parentName:"p"},"pallet-staking")," module, and all related module will be tested with its separate implementation of ",(0,l.kt)("inlineCode",{parentName:"p"},"SessionManager")," connected to ",(0,l.kt)("inlineCode",{parentName:"p"},"pallet-session")," in a mock environment."),(0,l.kt)("h2",{id:"vault"},"Vault"),(0,l.kt)("p",null,"Vault in milestone 2 should have a trait for dependency Injection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust="},"pub trait RebaseCallback {\n    fn rebase(); // where it initiates rebase in the session\n}\n")),(0,l.kt)("p",null,"The dependency injection will take place in the ",(0,l.kt)("inlineCode",{parentName:"p"},"pallet-staking"),"'s config as well as the oracle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust="},"impl pallet_custom_staking::Config for Runtime{\n    ...\n    type Rebase = RebaseCallback; // for vault rebase\n    type Oracle = OracleCallback; // for oracle callback used as same as staking callbacks\n}\n")),(0,l.kt)("p",null,"where the it will be included in ",(0,l.kt)("inlineCode",{parentName:"p"},"pallet-staking")," module's ",(0,l.kt)("inlineCode",{parentName:"p"},"SessionManager")," trait implementation in ",(0,l.kt)("inlineCode",{parentName:"p"},"end_session")," function like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust="},'/// In this implementation `new_session(session)` must be called before `end_session(session-1)`\n/// i.e. the new session must be planned before the ending of the previous session.\n///\n/// Once the first new_session is planned, all session must start and then end in order, though\n/// some session can lag in between the newest session planned and the latest session started.\nimpl<T: Config> pallet_session::SessionManager<T::AccountId> for Module<T> {\n fn new_session(new_index: SessionIndex) -> Option<Vec<T::AccountId>> {\n  frame_support::debug::native::trace!(\n   target: LOG_TARGET,\n   "[{}] planning new_session({})",\n   <frame_system::Module<T>>::block_number(),\n   new_index\n  );\n  Self::new_session(new_index)\n }\n fn start_session(start_index: SessionIndex) {\n  frame_support::debug::native::trace!(\n   target: LOG_TARGET,\n   "[{}] starting start_session({})",\n   <frame_system::Module<T>>::block_number(),\n   start_index\n  );\n  Self::start_session(start_index)\n }\n fn end_session(end_index: SessionIndex) {\n  frame_support::debug::native::trace!(\n   target: LOG_TARGET,\n   "[{}] ending end_session({}) with rebase",\n   <frame_system::Module<T>>::block_number(),\n   end_index\n  );\n                T::Rebase::rebase();\n  Self::end_session(end_index)\n }\n}\n')),(0,l.kt)("p",null,"vault in milestone 2 should achieve:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In each era, vault module should bring registered stablecoin price from oracle module with its asset id (1) and rebase its total supply to ",(0,l.kt)("inlineCode",{parentName:"li"},"(circulating supply) / (oracle price)")," in order to satisfy the ratio ",(0,l.kt)("inlineCode",{parentName:"li"},"(circulating supply) : (oracle price) = (total supply) : (1.0(USD) in decimal configured in the substrate chain)"),"."),(0,l.kt)("li",{parentName:"ul"},"Vault module should burn or mint stablecoin's module account's balance according to rebased balance"),(0,l.kt)("li",{parentName:"ul"},"Alert community when total supply cannot be decreased anymore to keep the ratio(in case where decreased total supply exceeds circulating supply) in order to propose emergency shutdown or take further actions(e.g. issuing bonds, using community vault from stability fee to stabilize the ratio)")),(0,l.kt)("p",null,"To check this, vault module should have these test functions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"supply_is_rebased_in_each_era"),": Using an oracle module, set an oracle price and start an era so that the vault module can executes rebase mechanism. The total supply of the stablecoin is checked whether it changed to the right amount."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"report_emergency"),": check whether vault module reports when the rebased next total supply is less than the circulating supply.")),(0,l.kt)("h2",{id:"oracle-1"},"Oracle"),(0,l.kt)("p",null,"oracle will replicate the ",(0,l.kt)("inlineCode",{parentName:"p"},"pallet-staking")," module regarding election of the oracle provider and the reward logic. However, there will be difference in how the elected provider(or validator) is allocated to the slot. The module only accepts the stash account to submit oracle data once ",(0,l.kt)("inlineCode",{parentName:"p"},"validate()")," tx has been finalized."),(0,l.kt)("p",null,"For example, there will be addition in the ",(0,l.kt)("inlineCode",{parentName:"p"},"select_and_update_validators")," function code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust="},'/// Select the new validator set at the end of the era.\n ///\n /// Runs [`try_do_phragmen`] and updates the following storage items:\n /// - [`EraElectionStatus`]: with `None`.\n /// - [`ErasStakers`]: with the new staker set.\n /// - [`ErasStakersClipped`].\n /// - [`ErasValidatorPrefs`].\n /// - [`ErasTotalStake`]: with the new total stake.\n /// - [`SnapshotValidators`] and [`SnapshotNominators`] are both removed.\n ///\n /// Internally, [`QueuedElected`], snapshots and [`QueuedScore`] are also consumed.\n ///\n /// If the election has been successful, It passes the new set upwards.\n ///\n /// This should only be called at the end of an era.\n fn select_and_update_validators(current_era: EraIndex) -> Option<Vec<T::AccountId>> {\n  if let Some(ElectionResult::<T::AccountId, BalanceOf<T>> {\n   elected_stashes,\n   exposures,\n   compute,\n  }) = Self::try_do_election() {\n   // Totally close the election round and data.\n   Self::close_election_window();\n\n   // Populate Stakers and write slot stake.\n   let mut total_stake: BalanceOf<T> = Zero::zero();\n   exposures.into_iter().for_each(|(stash, exposure)| {\n    total_stake = total_stake.saturating_add(exposure.total);\n    <ErasStakers<T>>::insert(current_era, &stash, &exposure);\n\n    let mut exposure_clipped = exposure;\n    let clipped_max_len = T::MaxNominatorRewardedPerValidator::get() as usize;\n    if exposure_clipped.others.len() > clipped_max_len {\n     exposure_clipped.others.sort_by(|a, b| a.value.cmp(&b.value).reverse());\n     exposure_clipped.others.truncate(clipped_max_len);\n    }\n    <ErasStakersClipped<T>>::insert(&current_era, &stash, exposure_clipped);\n   });\n\n   // Insert current era staking information\n   <ErasTotalStake<T>>::insert(&current_era, total_stake);\n\n   // collect the pref of all winners\n   for (i, stash) in elected_stashes.iter().enumerate() {\n                <Slots<T>>::insert(i, stash.clone()); // allocating slots for elected oracle provider\n    let pref = Self::validators(stash);\n    <ErasValidatorPrefs<T>>::insert(&current_era, stash, pref);\n   }\n            \n\n   // emit event\n   Self::deposit_event(RawEvent::StakingElection(compute));\n\n   log!(\n    info,\n    "\ud83d\udcb8 new validator set of size {:?} has been elected via {:?} for era {:?}",\n    elected_stashes.len(),\n    compute,\n    current_era,\n   );\n\n   Some(elected_stashes)\n  } else {\n   None\n  }\n }\n')),(0,l.kt)("p",null,"Also, slash module function should include verifier from milestone 1."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust="},"/// Slash the validator for a given amount of balance. This can grow the value\n /// of the slash in the case that the validator has less than `minimum_balance`\n /// active funds. Returns the amount of funds actually slashed.\n ///\n /// Slashes from `active` funds first, and then `unlocking`, starting with the\n /// chunks that are closest to unlocking.\n fn slash(\n  &mut self,\n  mut value: Balance,\n  minimum_balance: Balance,\n        slot: SlotIndex,\n ) -> Balance {\n  let batch = Prices::get(_id).unwrap();\n  let value = batch[_slot as usize];\n  let det = Self::determine_outlier(batch, value);\n  ensure!(det, Error::<T>::NotOutlier);\n  let pre_total = self.total;\n  let total = &mut self.total;\n  let active = &mut self.active;\n\n  let slash_out_of = |\n   total_remaining: &mut Balance,\n   target: &mut Balance,\n   value: &mut Balance,\n  | {\n   let mut slash_from_target = (*value).min(*target);\n\n   if !slash_from_target.is_zero() {\n    *target -= slash_from_target;\n\n    // don't leave a dust balance in the staking system.\n    if *target <= minimum_balance {\n     slash_from_target += *target;\n     *value += sp_std::mem::replace(target, Zero::zero());\n    }\n\n    *total_remaining = total_remaining.saturating_sub(slash_from_target);\n    *value -= slash_from_target;\n   }\n  };\n\n  slash_out_of(total, active, &mut value);\n\n  let i = self.unlocking.iter_mut()\n   .map(|chunk| {\n    slash_out_of(total, &mut chunk.value, &mut value);\n    chunk.value\n   })\n   .take_while(|value| value.is_zero()) // take all fully-consumed chunks out.\n   .count();\n\n  // kill all drained chunks.\n  let _ = self.unlocking.drain(..i);\n\n  pre_total.saturating_sub(*total)\n }\n}\n")),(0,l.kt)("h1",{id:"unit-test"},"Unit test"),(0,l.kt)("p",null,"Unit tests are all identical with the staking module's test in that all logics are identical regarding slash, reward and validation."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation will introduce how to nominate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Vault module"),(0,l.kt)("td",{parentName:"tr",align:null},"Vault module will declare dependancy injection trait to use session callback in ",(0,l.kt)("inlineCode",{parentName:"td"},"pallet-staking")," module and the test code with separate ",(0,l.kt)("inlineCode",{parentName:"td"},"SessionManager")," implementation will be provided")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Modified Staking module"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pallet_staking")," module which has two config trait for rebase callback and oracle staking callback will be provided")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Oracle module"),(0,l.kt)("td",{parentName:"tr",align:null},"same as staking module including curve integration but difference in slot allocation and separate slashing verifier will be included")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Unit test code"),(0,l.kt)("td",{parentName:"tr",align:null},"Unit test codes in ",(0,l.kt)("inlineCode",{parentName:"td"},"tests.rs")," in each runtime module with separate ",(0,l.kt)("inlineCode",{parentName:"td"},"SessionManager")," implementation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the full functionality of Standard protocol chain")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add more prices to add from the oracle (e.g. stock prices, commodities, etc) provider")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full function test on Kusama/Rococo."),(0,l.kt)("li",{parentName:"ul"},"Full function test on Polkadot.")),(0,l.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pitch: ",(0,l.kt)("a",{parentName:"li",href:"https://whitepaper.standardprotocol.org"},"https://whitepaper.standardprotocol.org"))))}p.isMDXComponent=!0}}]);