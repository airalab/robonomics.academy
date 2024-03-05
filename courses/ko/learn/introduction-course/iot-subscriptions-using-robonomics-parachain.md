---
title: "레슨 #5, 로보노믹스 파라체인을 사용한 IoT 구독"
lastUpdate: Thu May 04 2023 12:53:55 GMT+0400 (Samara Standard Time)
description: 로보노믹스 파라체인에서 IoT 구독을 구매하는 방법을 배우게 될 것입니다. 실제 네트워크의 토큰을 사용합니다.
lessonNumber: 5
metaOptions: [배우다, 로보노믹스 아이디어 소개]
defaultName:  Introduction to the ideas of Robonomics
---

소개 과정의 마지막 수업은 인내심이 필요하기 때문에 아마도 가장 어려울 것입니다. 우리 네트워크의 실제 토큰을 사용하여 Robonomics Parachain에서 IoT 구독을 구매하는 방법을 배우게 됩니다.


## 소개

IoT 구독은 사이버 물리 시스템의 디지털 트윈의 상태를 변경하고 해당 정보를 Polkadot / Kusama 생태계를 사용하여 저장하는 모든 기능에 대한 액세스 키입니다. 구독을 소유하면 사용자가 거래 수수료를 지불할 필요가 없어집니다. 대신 사용자는 일정 기간에 한 번 무료 거래를 보낼 수 있습니다.

구독을 구매하는 주요 방법은 구독 경매에 참여하는 것이며, 따라서 이 레슨에서는 입찰을 하고 거래를 제출하기 위해 XRT 토큰을 얻어야 합니다. 이 프로세스에 대한 자세한 정보는 [우리 위키](https://wiki.robonomics.netw또는k/docs/get-subscription)에서도 확인할 수 있습니다.

## 지침

<List type="numbers">

<li>

약 2개의 XRT 로보노믹스 파라체인 토큰이 필요합니다 ([토큰 정보](https://robonomics.netw또는k/xrt/)). 보유하고 있지 않다면, 여러 옵션이 있습니다:

a) 레슨 2와 레슨 4를 모두 90% 정답률로 통과하면 레슨용 무료 토큰을 요청할 수 있습니다. [특별 확인 dapp](https://lk.robonomics.academy/)에서 점수를 확인하세요. 특히 레슨 2에서 17개 중 15개, 레슨 4에서 11개 중 10개를 맞춰야 하며, 이를 위해 두 번의 시도 기회가 주어집니다. 토큰을 받으려면 [Discord](https://discord.gg/xqDgG3EGm9)의 아카데미 관리자(IBerman#5862)에게 연락하십시오.

b) 거래소 중 하나에서 XRT 토큰을 구입하세요 ([거래소 목록](https://www.coingecko.com/en/coins/robonomics-network#markets/)). 암호화폐 거래소에 익숙하지 않다면 주의하세요. 암호화폐 거래소에서의 모든 구매에는 잠재적인 위험이 있으므로 이 레슨을 통과하기 위해 필요한 양의 토큰만 구입하세요. 또한 로보노믹스는 이더리움과 쿠사마 두 네트워크에 존재하므로 각 네트워크에는 고유의 XRT 토큰이 있습니다. 쿠사마 네트워크의 파라체인에서 사용되는 토큰이 필요합니다.

c) 이더리움 네트워크(ERC-20 형식)에 XRT 토큰이 있는 경우, [Exodus](https://old.dapp.robonomics.network/#/exodus) 프로세스를 사용하여 이더리움 네트워크에서 쿠사마로 토큰을 전송하세요. 토큰 전송은 매주 한 번 이루어집니다.

</li>

<li>

IoT 구독은 경매 과정을 통해 구매됩니다. 최고 입찰자가 구독을 획득합니다.

경매에 참여하기 전에 사용 가능한 경매가 있는지 확인해야 합니다. 로보노믹스 [Polkadot/Substrate 포털](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/chainstate)을 열고 Chain state 메뉴를 선택하세요. <code>rws</code> 쿼리에서 <code>auctionQueue()</code>를 선택하고 '+' 버튼을 누르세요. 사용 가능한 경매 ID를 확인해야 합니다. 경매가 표시되지 않거나 사용 가능하지 않은 경우, "[🎓robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315)" 채널에서 저희에게 연락하세요.

이제 동일한 Chain state 메뉴에서 <code>rws</code>를 선택하고 <code>auction(u32): Option&lt;PalletRobonomicsRwsAuctionLedger&gt;</code>를 선택하고 <code>u32</code> 필드에 기억한 경매 ID를 입력하세요. "+" 버튼을 누르면 흥미로운 경매에 대한 정보가 표시됩니다. <code>winner</code> 필드에 <code>null</code> 값이 있는 경우, 아무도 이 구독을 가지고 있지 않으며 여러분이 시도할 수 있습니다.

</li>

<li>

XRT 토큰으로 입찰하세요.

개발자 -> 외부 메뉴로 이동하고 이전 레슨에서 사용한 Polkadot.js 계정을 선택하여 <code>rws</code>와 <code>bid(index, amount)</code>를 사용하세요. <code>index</code> 필드에는 흥미로운 경매의 ID를 입력하세요. <code>amount</code> 필드에는 입찰에 사용할 토큰 수를 "wieners"(1 XRT = 1,000,000,000 Wn)로 변환하여 입력하세요. [dapp](https://dapp.robonomics.network/#/subscription)에서 현재 최소 구독 가격을 확인하세요. 

거래를 제출하고 행운이 따르면 IoT 구독을 받을 수 있습니다. Polkadot 주소가 동일한 Chain 상태 메뉴를 통해 구독을 소유하고 있는지 확인할 수 있습니다.

</li>

<li>

마지막 단계는 IoT 구독을 위해 장치를 추가하는 것입니다.

이것은 단순히 구독에 추가적인 Polkadot 주소를 할당하여 extrinsic(예: 장치 실행 또는 장치 데이터를 블록체인으로 전송)를 실행할 수 있도록 하는 것을 의미합니다.

먼저 Robonomics Parachain을 위한 새 계정을 생성하고 편의를 위해 "smart device"라고 부르세요([우리 위키](https://wiki.robonomics.network/docs/create-account-in-dapp/)에서 안내 참조).

그런 다음, 개발자 -> 외부 메뉴로 이동하고 <code>rws</code>와 <code>setDevices()</code>를 선택하세요. 장치 목록에서 "항목 추가" 버튼을 사용하여 장치를 추가하고 최근에 생성된 계정을 선택하세요. 그 후 거래를 제출하세요.

장치 주소는 구독에 추가되어야 합니다. Polkadot.js 계정을 사용하여 Chain 상태 메뉴에서 <code>rws</code>와 <code>devices()</code> 쿼리를 사용하여 확인할 수 있습니다.

</li>

</List>

<Result>

IoT 구독을 구매하고 장치를 추가하는 성공적인 거래를 보낸 후 레슨이 완료된 것으로 간주됩니다. 거래는 계정의 Polkadot 탐색기에 나타나야 합니다.

[특별 확인 댑](https://lk.robonomics.academy/)에서 결과를 확인할 수 있습니다. 확인 댑에 로그인하려면 수강 중에 사용한 Polkadot.js 계정을 사용하세요.

</Result>