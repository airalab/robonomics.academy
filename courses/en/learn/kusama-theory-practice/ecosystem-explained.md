---
title: How Polkadot ecosystem works?
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Kusama — From Theory to Practice Course]
defaultName: Kusama — From Theory to Practice Course
---

# Theory: Video Lecture

https://youtu.be/Iwn27Djmvco

# Theory: Polkadot & Kusama Structure

Welcome to lesson 2 of our journey into the world of Web3 technologies! In our previous lesson, we took a bird’s eye view of the Polkadot architecture with all parachains, parathreads, bridges, etc. Today, we dive deeper into the heart of robust ecosystems of Polkadot and Kusama projects, and explore their unique functionalities that are revolutionizing how we perceive and interact with blockchain technology.

Just like knowing the anatomy of a human body helps us understand its functions, grasping the structure of Polkadot and Kusama helps us comprehend how they operate. Fasten your seatbelts as the journey starts.

## Recap of previous lesson

Earlier, we likened Polkadot ecosystem to a futuristic city, and Kusama — as it’s wild cousin, or like Burning Man to a NYC. We introduced them as dynamic, multichain networks where blockchains are no longer isolated islands, but interconnected districts in a bustling city. Now, we’re about to embark on an architectural tour, examining the intricacies of this city’s design, how it was built and how operates on a day-to-day basis. 

Let’s keep things clear: Polkadot and Kusama share the same core architecture: a central Relay Chain, Parachains, Parathreads, and Bridges, as well as the principles of interoperability, scalability, and shared security. However, while being architecturally similar, they cater to different needs.

- **Polkadot** is the stable network, designed for secure, high-value transactions. It prioritizes security and stability.
- **Kusama** is the experimental sandbox, where developers test new project in a real environment, before applying them to Polkadot. It’s more risk-tolerant, and better for innovative projects.

## Diving deep: the Relay Chain

Technically speaking, Polkadot and Kusama networks are multichain networks, that means they consist of many blockchains. At the core of each is the Relay Chain, which is modular blockchain, built using [Substrate](https://www.parity.io/blog/how-to-build-your-own-blockchain-using-parity-substrate/) framework, created by Parity Technologies.

The Relay Chain is the central chain of Polkadot and Kusama projects. It serves as two main functions: providing security for the network and enabling cross-chain interoperability.

- **Security.** Relay Chain provides shared security for the entire network. **Validators** stake their tokens (DOT or KSM) as collateral to validate proofs from **collators**, participate in the production of new blocks, and confirm the validity of transactions. This collective security model allows all **parachains** and **parathreads** to benefit frim the robust security of the Relay Chain, reducing the risk of attacks and enhancing trust in the network.
- **Interoperability.** Relay Chain uses the interim [Horizontal Relay-routed Message Passing (HRMP)](https://wiki.polkadot.network/docs/learn-xcm-transport) protocol for cross-chain interoperability, with the more robust [Cross-Chain Message Passing protocol (XCMP)](https://wiki.polkadot.network/docs/learn-xcm) still under implementation. This allows basic interaction between parachains, facilitating the development of multi-chain applications.

<robo-academy-note type="note" title="Note">
  Relay Chain uses a rare Nominated Proof of Stake (NPoS) consensus mechanism, which involves validators and nominators in securing the network. Read more here: https://polkadot.network/launch-roadmap/npos/.
</robo-academy-note>

Speaking about validators, they are like police officers of this city. Their job is to check that all the transactions happening on the network are legit. They validate **proofs** (essentially a summary or representation of the block and its transactions) from collators (those who collect parachain data), and by doing so, they help secure the Relay Chain and all the chains connected to it.

Validators are chosen by the network’s participants, who nominate them with their tokens. The people with the most votes get to be validators. This ensures that the network is fair and not controlled by just a few people.

## Understanding Parachains and Parathreads

We have already mentioned **parachains** as individual neighborhoods in the Polkadot city. Each one has its own characteristics, and they could be a residential area, a business district, a park or a shopping center and serve different purposes.

**Parachains** are also independent blockchains (or other type of data structure) that run in parallel to the **Relay Chain**. They can have their own tokens, rules, handle their own transactions and even smart-contracts.

Each **parachain** connected to the Relay Chain via special nodes called **validators.** They are responsible for validating the information produced by the collators of each parachain. Once validated, these transactions are included in the blockchain.

**Parathreads** are a proposed feature for the Polkadot network and, if implemented, would function similarly to parachains but with a key difference. Rather than holding a permanent slot in the Relay Chain, parathreads would operate on a **pay-as-you-go** basis, connecting to the Relay Chain as and when needed. This proposed model would be a cost-effective option for projects that may not require continuous connectivity to the network.

In theory, just like parachains, parathreads would have their own tokens and specific functionalities. They would also use collators to gather transactions and produce proofs for the validators on the Relay Chain. However, they would only pay for the specific times they are included in the Relay Chain.

## Bridges: Connecting distinct networks

Actually, not every blockchain can become a parachain of Polkadot or Kusama network. In order to be a part of it, they have to meet two specific criteria:

- **Be substrate-based, or be compatible.** As was said, Polkadot and Kusama are built on a Substrate framework. To become a parachain, the blockchain must also be built on Substrate, or at least be compatible with it.
- **Adopt shared security model.** Potential Parachains need to adopt Polkadot or Kusama’s shared security model, which means they don’t need their own set of validators or miners to secure their network. Instead, they rely on Polkadot or Kusama’s validators.

And if a blockchain doesn’t meet these criteria — for example, if it has a different consensus mechanism or is not built on Substrate — then we need **bridges**.

Coming back to our vision of Polkadot as a future city, we can imagine bridges like actual bridges, that allow a free flow of data between our city and neighboring cities, which in this analogy are external blockchains like Ethereum or Bitcoin. Those can’t just be a parachains, because all three use different consensus mechanisms, and overall such big blockchains have their own unique architecture, community, governance models, etc. This way becoming a parachain would mean giving up a degree of that sovereignty, as they’d have to conform to Polkadot’s consensus and governance model.

Bridges making it possible for such external networks to interact and communicate with Polkadot or Kusama network without having them to become parachains.

## DOT and KSM: Governance, Staking, and Bonding

DOT and KSM tokens are the beating heart of the Polkadot and Kusama networks. They’re not just tokens you can buy & sell, they’re more like keys to our city, and those who have the keys can participate in big city life.

### Governance

Owning DOT and KSM is equals to having voting tickets in our city council. If you have them, you can participate in deciding how the city should evolve. The more tokens you have, the more you can say. For example, token holders can vote on network upgrades or approve funding for some projects, just like this course. Imagine having the power to vote on whether our city gets a new park, or how high the buildings can be? This concept of governance system is very relevant to how Decentralized Autonomous Organization (DAO) operate, however, they are not strictly considered DAOs due to elements of centralized development and discretionary decision-making. 

With recent updates, Polkadot gone even more democratic with its [OpenGov](https://polkadot.network/features/opengov/) model, which is giving more decision-making power to average DOT or KSM token holders. Here’s a few key points about how it works:

1. In the network there are no first-class citizens, and no single authority or group makes decisions. All DOT or KSM holders can make decisions and changes to the network to its **Treasury** expenditures.
2. The new expert body of network, which has replaced council, the **Fellowship**, provides technical expertise but has no hard power over the network. It can declare some proposals on bug fixes or identifying malicious ones.
3. Unique mechanism allows for multiple referenda to run simultaneously, that leads to faster decision-making without compromising security.
4. The main network and all connected parachains are able to upgrade without hard forks, almost seamlessly.

### Staking

Every DOT or KSM holder can lock up his tokens to validate transactions (or nominate someone else to do so). In return for staking, and by thus helping secure the network, staker earns reward. This is like your way of contributing to the city’s security. By staking your tokens, you’re saying “I trust in this city, and I’m willing to put my tokens on the line for it”. And the city rewards you for that trust. If you’re a validator, you can even participate in the creation of new blocks and check transactions, just like being part of the city council. 

### Bonding

This is what you do when you want to add a new building (or parachain) to our city. You bond (or lock up) your DOT or KSM tokens for a certain period to secure a slot for your parachain. This is like putting down a deposit on a piece of land where you want to build your own skyscraper. Once the lease is up, you get your deposit back.

In addition to bonding tokens for parachain slots, DOT and KSM holders can also bond their tokens for auctions, where they can participate in the auction of other parachain slots. This is similar to buying a plot of land with a building already on it. The tokens are locked up for a certain period, and if the auction is unsuccessful, the tokens are returned. In the next lesson, we will explore the mechanisms of validators and collators in more detail, and how they work together to secure the network and enable cross-chain communication.

### Conclusion

There you have it: the ins and outs of Polkadot and Kusama’s structure. Let’s wrap up key points of what we have learned today:

- **Polkadot** and **Kusama** are multichain networks with a central Relay Chain, Parachains, Parathreads, and Bridges.
- While architecturally similar, they serve different purposes: Polkadot is a stable network for high-value transactions, while Kusama is an experimental sandbox for innovative projects.
- The **Relay Chain** provides shared security and enables cross-chain interoperability.
- **Parachains** are independent blockchains that run in parallel to the Relay Chain, while **Parathreads** are pay-as-you-go parachains.
- **Bridges** connect external networks to Polkadot or Kusama.
- **DOT** and **KSM** tokens are used for governance, staking, and bonding.
- **Validators** secure the network, while **collators** gather transactions and produce proofs for validators.
- **Governance** in Polkadot is democratic, and token holders can vote on network upgrades and approve projects.
- **Staking** and **bonding** tokens earn rewards and secure slots for parachains.

We hope this overview gave you a clearer picture of how Polkadot and Kusama networks function. In our upcoming lessons, we’ll take a closer look at their mechanisms. Stay tuned, until next time!

# Theory: Test

### Question 1

Choose from the proposed list of features that the Polkadot and Kusama ecosystem has:

- On-chain governance
- Quantum multi-chain computing
- Shared security
- Central control committee
- Unified Proof-of-Work consensus
- Cross-chain interoperability

### Question 2

Choose the right definitions for the following Polkadot and Kusama ecosystem concepts:

Concepts:
- Relay Chain
- Parachain
- Parathread
- Bridge
- Validator
- Collator

Definitions:

- — a node that maintains a parachain by collecting parachain transactions and producing proofs for the validation.
- — central chain that provides security for the network and enables cross-chain interoperability.
- — a custom, application-specific data structure (usually, a blockchain) without a slot that can temporarily participate on a pay-as-you-go basis in the common network.
- — a node that secures Relay Chain by staking its tokens and validating proofs of parachains.
- — a connection by which two economically sovereign and technologically diverse chains to communicate with each other.
- — a custom, application-specific data structure (usually, a blockchain) with own characteristics and purposes.

### Question 3

Use [Subscan.io](http://subscan.io/) and select 3 parachains from the list that are NOT PRESENT in the Kusama ecosystem:

- Moonbeam
- Robonomics
- Basilisk
- Solana
- Moonriver
- Rococo
- Crust Shadow
- Karura


# Practice: Install Wallet

In this small practical task, you will learn how to install and create a wallet designed to work with the Polkadot and Kusama ecosystems.

All wallets operate on the same principle: generating a associated pair of public and private keys. The public key acts as your public address for identification, while the private key authorizes access to manage your account and perform any actions on its behalf. Losing access or compromising the private key results in the loss of tokens without the possibility of recovery.

It is important to understand whether you have full access to the private key or not. For example, if you use centralized crypto exchanges, you can still manage your crypto assets, but you do not have access to the private key associated with them. Only the administration of the service has access to the key, and at any time can terminate your service. Such wallets are called **custodial wallets**, as opposed to wallets where you have access to the key — **non-custodial wallets**.

<robo-academy-note type="warning" title="Warning">
  It is ALWAYS recommended to use non-custodial wallets.
</robo-academy-note>

There are many different applications for non-custodial wallets, such as browser extensions, mobile apps, and even physical devices. They can also be divided into two types: **hot** (having access to the Internet) and **cold** (having limited or no access to the network). For example, extensions and mobile apps are considered hot, while writing down your private key on paper would be considered a cold wallet.

In any case, almost all wallet applications during the creation phase will ask you to write down **a seed or mnemonic or recovery phrase**, consisting of a set of random words. This is done so that users can conveniently restore their wallet, instead of having to use a long set of numbers and letters that consist the private key each time. You can think of the seed phrase as a private key, just written in a more convenient format.

<robo-academy-note type="warning" title="Warning">
  Always securely store your seed phrases.
</robo-academy-note>

## Task

1. Download and install a wallet application. Different wallet options are available for Polkadot and Kusama (see [here](https://wiki.polkadot.network/docs/wallets-and-extensions)). All of them provide basic functionality (wallet creation, transaction sending), but some advanced features of the ecosystem may not be available. In our course, we will use [Talisman wallet](https://www.talisman.xyz/), which works within the browser.
2. Create a wallet. The application will ask you to create a strong password for it, which will be used for quick access to the wallet from this application.
3. Securely write down and save the seed phrase for your wallet.