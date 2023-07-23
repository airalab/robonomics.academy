---
title: Make your first crypto transaction
description: A course for those who see the Polkadot and Kusama ecosystem for the first time.
metaOptions: [Learn, Kusama — From Theory to Practice Course]
defaultName: Kusama — From Theory to Practice Course
---

# Theory: Video Lecture

https://youtu.be/w_Cij2r7p48

# Theory: NPoS and it’s essential tools in Polkadot 

Welcome back to our third lesson on the Polkadot and Kusama networks. We’ve journeyed through Polkadot’s history, unraveled its unique structure, and now we are poised to dive deeper. In this lesson, we’ll decode the core principles of Polkadot’s consensus — Nominated Proof-of-Stake (NPoS), the symbiotic roles of validators, nominators and collators, and the tools they leverage for a seamless, secure operation of the network. 

## The Mechanics of Nominated Proof-of-Stake (NPoS)

Consensus is a method for coming to agreement over a shared state. Polkadot diverges from the mainstream consensus mechanisms like Proof-of-Work and Proof-of-Stake, opting for a more innovative solution called NPoS. This distinctive feature allows stakeholders to participate in securing the network in two capacities: as **validators** and **nominators.** And there’s also **********************collators.********************** What are they?

| Role | Description | Responsibilities | Risks |
| --- | --- | --- | --- |
| Validators | The core of Polkadot's NPoS system. They stake their DOTs or KSMs as a bond, playing a crucial role in maintaining network integrity. | Authenticate and validate proofs submitted by the collators, finalize blocks, and engage in consensus protocols with fellow validators. | They risk losing their staked tokens or face slashing if they act maliciously or fail in their duties. |
| Nominators | Support the network by selecting and backing trustworthy validators with their stake.  | Do not participate in block validation or consensus but play an essential role by carefully choosing validators. | The risks for them are generally lower than validators but they can still lose part of their stake if their chosen validators act maliciously or incompetently. |
| Collators | Responsible for maintaining parachains. | Collect parachain transactions from users and generate state transition proofs for validators.  | Similar to validators, they risk losing their stake if they fail in their responsibilities or engage in malicious activity. |

In easy words, **NPoS** is a system where people lock up or 'stake' their cryptocurrency to help secure the network. There are two main roles: validators, who run computers to verify transactions and create new blocks, and nominators, who back these validators with their own staked cryptocurrency. This system is designed to be fair, secure, and efficient, allowing for a large number of participants and ensuring the network remains decentralized.

To keep the network secure, these roles use a variety of tools. Polkadot.js provides a suite of tools for interacting with the NPoS system in the Polkadot Network. Here is how it works:

## Polkadot.js

Interactions with the Polkadot network are facilitated by **[Polkadot.js](https://polkadot.js.org/)**.. It provides developers the ability to query a node and interact with the Substrate built blockchains, like Polkadot or Kusama and their parachains, using JavaScript. For example, you can use it’s API, one of the component of Polkadot.js collection, to interface with a Moonbeam node to read and write data to the network.

<robo-academy-note type="note" title="Note">
  Moonbeam is the only parachain in Polkadot that is fully compatible with Ethereum. This network provides multi-chain projects with access to the Polkadot ecosystem, facilitating their expansion within it.
</robo-academy-note>

In our future city Polkadot.js serves as a multi-functional city hub or town center, where citizens come to engage with the community, participate in governance, manage their resources, etc.

Polkadot.js offers these following capabilities:

1. Managing staking, including nominating validators.
2. Participating in governance votes and referenda.
3. Viewing block and transaction information.
4. Working with contracts.
5. Sending and receiving tokens.

### Staking

In this section most job by validators and nominators are done. Participation in staking starts with choosing validators you want to support. This is an important decision since it impacts your share of the staking revenue. 

### Referenda

Since Polkadot is decentralized network, every token holder can have a vote in network governance. In the Referenda section of Polkadot.js, you can vote on existing proposals or create your own. Your vote will be weighed according to amount of tokens you have.

### Block information

This can be accessed from the main page of the Explorer section. It displays the latest blocks that have been added to the blockchain, and some additional information: height, hash, parent hash, state root, and extrinsics root.

<robo-academy-note type="note" title="Note">
  In Polkadot, extrinsics represent pieces of information about transactions that come from outside the chain and are included in the blocks. They include not only regular transactions that transfer tokens from one account to another but also other types of operations, such as staking operations, governance votes, etc.
</robo-academy-note>

### Contracts

Polkadot.js can interact with smart contracts deployed on the network. To use this feature, the network in question must support the necessary smart contract functionality.

### Wallet

Polkadot.js provides a wallet browser extension for sending and receiving tokens that allows you to participate and interact with all Polkadot features such as DeFi, games, digital art, social media and more. It is not actually a full-featured wallet, as it relies on the Polkadot apps UI to initiate transactions. 

## Conclusion

In our video, dedicated to this lesson, we showed an example of a transaction sent through the Rococo testnet using the Talisman wallet that we set up in a previous video. Hopefully, you have had a chance to watch it! There’s a lot more available networks on the [Polkadot.js.org/apps](http://Polkadot.js.org/apps). It includes Polkadot, Kusama, Westend, Rococo and all the networks inside them. You can choose the network you want to interact with using the drop-down menu at the top of the page. 

Polkadot.js serves as an essential tool in managing and navigating NPoS consensus in Polkadot ecosystem. It provides a user-friendly interface for participating in staking as a nominator or validator. This includes bonding tokens, nominating validators, or setting up as a validator. Additionally, it facilitates participation in governance via referenda and allows users to interact with smart contracts. 

Just like a city hub that is central to urban life, Polkadot.js forms a vital part of the Polkadot ecosystem, as it enables active participation, efficient communication, thereby ensuring a thriving, interconnected city. In our next module we’ll take a closer look at **wallets** you can create to interact with Polkadot through this tool, so stay tuned!

# Theory: Test

### Question 1

What allows to have full control over actions with a cryptocurrency wallet?

- Public key
- Seed phrase
- Private key
- Public address
- Mnemonic phrase

### Question 2

The public address of an account in different networks of Kusama and Polkadot usually differs in its appearance. However, different formats are just different representations of the same public key of your account. Try to find out what the public key of the following address looks like (it is written in the format of the Kusama network):

<LessonCodeWrapper language="json" noLines>
  GkMByX2YdJa8USs4NJLzqYnzB2mTLotCuHWhs4bF9Ht5eio
</LessonCodeWrapper>

To do this, you can use the Account Format Transform tool available on Subscan.io.

### Question 3

Each network and parachain produces its blocks at some desired rate. Find out how fast (in sec) the following networks want to produce blocks on the Rococo testnet using the Polkadot.js portal (Network tab):

- Rococo itself
- Basilisk testnet
- Bifrost on Rococo
- Integritee Network on Rococo


# Practice: First Transaction

In this practical task, you will need to execute your first transaction using test tokens on the Rococo testnet. The task will be considered successfully completed when the transaction is executed successfully and the ROC tokens are transferred to the specified address.

### Task

1. Go to the [Polkadot.js](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io) portal and select the Rococo testnet from the dropdown list in the top left corner.
2. Approve the connection of your account to the portal via your wallet application.
3. Go to the Accounts tab, choose your added account and copy the account’s address in the Rococo network format.
4. Get any amount of ROC tokens using a faucet. Your can use [Triangle faucet](https://faucet.triangleplatform.com/polkadot/rococo) or any faucet that your can find in Internet. 

<robo-academy-note type="warning" title="Warning">
  Always be careful when dealing with external sites and your crypto assets. Never share your private keys and seed phrases.
</robo-academy-note>
    
5. Return to the Accounts tab on the Polkadot.js portal to make a transaction. Click Send, paste the following address into the `send to address` field:
    
<LessonCodeWrapper language="json" noLines>
  GkMByX2YdJa8USs4NJLzqYnzB2mTLotCuHWhs4bF9Ht5eio
</LessonCodeWrapper>

and specify any amount of ROC tokens. The address will change its format to Rococo format.

6. Press the `Make Transfer` button and confirm the transaction in your wallet application.