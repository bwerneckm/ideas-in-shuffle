---
title: "Pix Foundation: The Elements of Success - Part 2"
slug: "pix-foundation-the-elements-of-success"
date: 2024-09-22
tag: Fintech
lang: "en"
excerpt: "From Traditional Transfers to Pix: Understanding Brazil's Payment Revolution"
cover: "grenadine"
---

![](/images/posts/3f156792_1024x1024.png)

> If you haven’t, read the 1st part of this series here: [Beyond Cards and Codes: Unraveling Brazil's Pre-Pix Payment Maze.](https://substack.com/@bmaxblog/p-149266560)

We are now entering a new terrain, where the idea of PIX starts to materialise in the market through a relentless pursuit of efficiency, competitiveness and evolution by the Central Bank of Brazil. In this second part, I explore the main elements of PIX’s foundation, the past issues that were solved by the new system and the complexities of its creation.

## **The Issues**

As we have explored in **[Part 1 – Beyond Cards and Codes: Unraveling Brazil’s Pre-Pix Payment Maze](https://bmax.blog/from-traditional-transfers-to-pix-understanding-brazils-payment-revolution-1-of-3/)**, the STR, created in 2002, is the backbone of the Brazilian Payments System, where money actually exchanges hands between institutions. But this infrastructure was already 20 years old. Although it performed quite well for the simple purpose of money flowing between large financial institutions, its design had a few limitations for further use cases:

- Not 24 / 7 – STR worked from 6:30am to 6:30pm on weekdays, skipping weekends and national holidays. Any other financial system working on top of it would have to work in the same time window or create a workaround to solve liquidity out-of-STR-hours.
- No confirmation message – the STR protocol didn’t have a proper message designed for the confirmation of deposit by the payee’s institution. Consequently, transactions given as settled were refunded hours later without any specific reason, creating complexity in the ecosystem and limiting the development of other payment flows and use cases.
- Protocol limitations – The protocol was designed to move money between two user accounts, two institutions or between a user account and an institution. But this was all. The old protocol was too rigid in terms of extensibility to allow the creation of other payment flows and secondary products.
- Infrastructure access – the Settlement Account, created as an instrument for Payment Institutions to access the backbone, was too complex to operate, and few institutions applied for it.

In addition, STR was only running a small portion of the TEDs in Brazil since all the banks were sending most of the transactions through SITRAF. Imagine what would have happened if, during its creation, Pix was optional. This was the exact case before.

To summarise, we can say that while TEDs had a great infrastructure for that time, the payment scheme above lacked more rigid rules to shape the evolution of the transactions in terms of **REACH, TRUSTNESS and COST EFFICIENCY.**

In an amazing technical analysis called **[Lessons From Pix: How to Build a Real-Time Payments Platform at its Full Potential](https://www.notion.so/From-Traditional-Transfers-to-Pix-Part-2-c8d800e8ccd1403399f7a66b81c81a9d?pvs=21)**, Mariana Cunha e Melo and Jonas Abreu give us a great summary of the issues the CB stood out to solve with the new design:

> ***The Protocol Issue – It must be standardised but not over-specified. The communications protocol of many payment rails suffers from over-specification. Over-specification happens when, during the protocol design process, one establishes all the use cases to be supported instead of creating a backwards-compatible extensible structure that is able to represent all those use cases through extension. A familiar example in the world of payments is the ISO 20022 payment messages. Everything that goes into the payment needs to have a specific and already specified field in one of the messages. When another type of payment appears, instead of simply extending the message in a backwards-compatible way, you need to standardise the new type of payment and fully specify it in the protocol, which can take years to happen.***
>
> ***The need for standardisation is apparent. Without it, the many participants of the system cannot communicate with each other. But once the protocol is built to accommodate one specific need with specific fields and flows, it has to be extended by adding more specific fields and re-signifying old fields to evolve. The result is an intricate, inexpugnable web of old grammar with new semantics to decipher, and a big pile of unnecessary data travels in the system.***
>
> ***The Trust Issue – is twofold. From a regulatory standpoint, moving money around requires the guarantee that money will not disappear or multiply by mistake or by malicious design. For financial system regulators, that is an issue of systemic resilience and of currency stability. If a player is able to print digital currency or loses track of where someone’s money is located, the value of the national currency or the trust in the financial system may be severely affected. The risk of a systemic failure is at the heart of the Brazilian Central Bank’s concerns in regard to payment systems.***
>
> ***The second aspect of trust in this context is that connecting the financial system takes an arrangement between any two account service providers in the land. This requirement unfolds into several issues, from the complexity of business arrangements to the technical arrangements and issues, such as determining the source of truth.***
>
> ***The Issue of Reach – The issue of reach comes from the fact the payment system needs to connect any two accounts from any two account service providers. Solving this issue is the difference between having a walled garden where only a few member institutions can provide access to the payment service and having an ecosystem where every user knows that whatever economic transaction they are making, they can use the payment service to liquidate the price because everyone is reachable. That is what enables users to leave their houses with only one payment method because they know they will be able to use it for their every need.***

## **Solving The Puzzle**

However, solving that was no easy task. There were infinite paths to take, from promoting a new regulatory framework, allowing for a private infrastructure to take place, creating a public payment scheme but handing over the infrastructure, or building both but making them optional. A lot of trade-offs were on the table.

The final approach is, in my opinion, one of the strengths of PIX’s success over the last 3 years:

1. Create a new financial market infrastructure called SPI – Instant Payments System – another real-time gross settlement system, working on top of STR but 24/7. **[Link to SPI webpage here](https://www.bcb.gov.br/estabilidadefinanceira/sistemapagamentosinstantaneos)**.
2. Create DICT – a centralised payment alias database that facilitates the identification of bank and payment accounts by linking personal keys like phone numbers, CPF (personal tax number) or emails to them. **[Link to DICT API specification here](https://www.bcb.gov.br/content/estabilidadefinanceira/pix/API-DICT.html)**.
3. PIX, the scheme – a payment scheme created, incentivised and managed by the Central Bank, containing rules about how participants interact, what use cases are supported, what types of transactions can be charged and how, dictating minimal UX / UI parameters. **[Link to PIX rules here](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=1)**.
4. PIX, the brand … I know, I know, branding is just as part of a payment scheme as deposits and loans are part of banks. Some people say that Visa and Mastercard are brands first and networks second. I can’t disagree. The CB also did that, and quite well. They’ve chosen a name that was easy to say, easy to use and very catchy. They created brand guidelines, applications, DO’s and DONT’s. **[Link to the brand book here](https://www.bcb.gov.br/content/estabilidadefinanceira/pix/Regulamento_Pix/I_manual_uso_marca_pix.pdf)**.
5. Direct and Indirect Access – From the start, the CB understood that access and reach were essential to full adoption. They created two types of access to make the system and scheme adoption mandatory to every institution in the S1 and S2 tiers but easily available to every other registered institution. In one shot, the CB gave full access and created another market for the BaaS – bank as a service – players.Direct Participants would hold accounts in SPI called Instant Payments Accounts, accessing them directly through the RSFN (National Financial System Network).Indirect Participants would be able to access all functionalities but through a Direct Participant, borrowing their access to the infrastructure and paying a fee for that.
 1. Direct Participants would hold accounts in SPI called Instant Payments Accounts, accessing them directly through the RSFN (National Financial System Network).
 2. Indirect Participants would be able to access all functionalities but through a Direct Participant, borrowing their access to the infrastructure and paying a fee for that.

This is what the new high-level architecture looks like after the SPI and DICT introduction.

![](/images/posts/672fe4b1_1024x570.jpeg)

I highlighted the Payment Institution E and Indirect Participant, accessing SPI through Bank C. To make this happen, Bank C would have to offer a transactional account with specific API functionalities designed for Indirect Participants. In this case, Payment Institution E exists in the PIX scheme, has its identifier and can be found by other institutions, but all its transactions are sent and settled through Bank C.

All other institutions in the drawing above are directly connected to SPI and have Reserves or Settlement accounts underneath – in the STR instance. They use their accounts in the STR system to feed their Instant Payment Accounts in the SPI instance. During STR non-working hours, institutions can borrow money from the central bank to solve liquidity issues, similar to what is done in STR.

This is how a set of transactions would look like:

- Payment Institution E is an indirect participant and uses Bank C as its direct participant
- Bank C uses its Reserve Account to top up its Instant Payment Account with R$ 1000
- Customer C (from Bank C) sends R$ 100 to customer D (in PI D) via PIX
- Customer E (from PI E) sends R$ 200 to customer A (in Bank A) via PIX

![](/images/posts/6a863cf1_1019x591.jpeg)

```
Real-Time Transactions Everywhere, Anytime…

What if we invert STR and SPI? Could the entire market drink from a continuously available font? Imagine card transactions settling on weekends, securities too… One of the core characteristics of STR is its specifically built messages supporting 2nd layer infrastructure systems like SILOC, SITRAF or even BM&F for securities settlement. All those secondary systems were restricted by STR working hours. Building those messages into SPI could create second-effect changes of the same magnitude as PIX. Could that change in the near future? What are your thoughts?
```

## **Creating a new payment paradigm**

Creating a new payment system like Pix and ensuring its adoption in a market dominated by entrenched players like Visa and Mastercard is a complex challenge. The incentives that card schemes have put in place over many years make them an integral part of the financial ecosystem. However, introducing a new system isn’t solely the domain of policy-making; private markets can play a significant role as well. Here’s a breakdown of the various aspects involved:

1. **Forming a Market & Breaking Through**:**Regulatory Push**: Policy-driven initiatives can provide the initial momentum. A central authority’s backing can build trust quickly, streamline implementation, and ensure widespread collaboration. In PIX’s case, the Central Bank enforced adoption through mandatory implementation by S1 and S2 institutions.**Cost Advantages**: If the new system offers cost savings over traditional card schemes (lower transaction fees, reduced infrastructure costs, etc.), it becomes attractive for both merchants and consumers, as was the case with PIX.**User Experience**: Speed, convenience, and versatility in transaction methods (like QR codes and instant transfers) can make the new system more appealing. But not just that. The Central Bank also created a very compelling and detailed guideline of the UX UI for end users of PIX, mainly inspired by the UK Openbanking Initiative that has pioneered this approach – link to the UK Openbanking UX UI Guidelines here.**User Experience**: Speed, convenience, and versatility in transaction methods (like QR codes and instant transfers) can make the new system more appealing. But not just that. The Central Bank also created a very compelling and detailed guideline of the UX UI for end users of PIX, mainly inspired by the UK Openbanking Initiative that has pioneered this approach – **[link to the UK Openbanking UX UI Guidelines here](https://www.openbanking.org.uk/wp-content/uploads/2021/04/Customer-Experience-Guidelines.pdf)**.**Integration**: Ensuring that the new system integrates seamlessly with existing financial infrastructures is crucial. This reduces barriers to entry for banks and merchants.
 - **Regulatory Push**: Policy-driven initiatives can provide the initial momentum. A central authority’s backing can build trust quickly, streamline implementation, and ensure widespread collaboration. In PIX’s case, the Central Bank enforced adoption through mandatory implementation by S1 and S2 institutions.
 - **Cost Advantages**: If the new system offers cost savings over traditional card schemes (lower transaction fees, reduced infrastructure costs, etc.), it becomes attractive for both merchants and consumers, as was the case with PIX.
 - **User Experience**: Speed, convenience, and versatility in transaction methods (like QR codes and instant transfers) can make the new system more appealing. But not just that. The Central Bank also created a very compelling and detailed guideline of the UX UI for end users of PIX, mainly inspired by the UK Openbanking Initiative that has pioneered this approach – link to the UK Openbanking UX UI Guidelines here.
 - **User Experience**: Speed, convenience, and versatility in transaction methods (like QR codes and instant transfers) can make the new system more appealing. But not just that. The Central Bank also created a very compelling and detailed guideline of the UX UI for end users of PIX, mainly inspired by the UK Openbanking Initiative that has pioneered this approach – **[link to the UK Openbanking UX UI Guidelines here](https://www.openbanking.org.uk/wp-content/uploads/2021/04/Customer-Experience-Guidelines.pdf)**.
 - **Integration**: Ensuring that the new system integrates seamlessly with existing financial infrastructures is crucial. This reduces barriers to entry for banks and merchants.

2. **Policy Making vs. Private Markets**:**Policy Making**: Government or central bank initiatives can quickly roll out and mandate the adoption of new systems. This is particularly true in markets where the public good is prioritised over commercial interests.**Private Markets**: While private entities can develop innovative solutions, their challenge lies in achieving scale and trust. Collaborations or consortiums of private entities can introduce new systems, as seen with cryptocurrency-based solutions or platforms like UPI in India.
 - **Policy Making**: Government or central bank initiatives can quickly roll out and mandate the adoption of new systems. This is particularly true in markets where the public good is prioritised over commercial interests.
 - **Private Markets**: While private entities can develop innovative solutions, their challenge lies in achieving scale and trust. Collaborations or consortiums of private entities can introduce new systems, as seen with cryptocurrency-based solutions or platforms like UPI in India.

3. **Externalities**:**Positive**: A new system can promote financial inclusion, reduce transaction costs, and boost economic activity by offering a more efficient method of payment.**Negative**: Potential risks include cyber threats, initial resistance or distrust, and disruption for businesses that need to integrate new payment methods.
 - **Positive**: A new system can promote financial inclusion, reduce transaction costs, and boost economic activity by offering a more efficient method of payment.
 - **Negative**: Potential risks include cyber threats, initial resistance or distrust, and disruption for businesses that need to integrate new payment methods.

4. **Incentive Contrasts**:**Pix vs. Card Schemes**: While card schemes might offer loyalty points, cashback, and credit facilities, Pix focuses on instantaneous transactions, lower fees, and universal accessibility.**Pix vs. TEDs/DOCs**: Pix operates 24/7 and settles instantly, while TEDs and DOCs had time restrictions and could take longer. Also, Pix often has lower or no fees compared to these traditional transfer methods.**Pix vs. Boletos**: Boletos are payment slips often used for bill payments. They’re not instantaneous and require manual processing. Pix, being digital and immediate, offers a significant advantage in terms of speed and convenience.
 - **Pix vs. Card Schemes**: While card schemes might offer loyalty points, cashback, and credit facilities, Pix focuses on instantaneous transactions, lower fees, and universal accessibility.
 - **Pix vs. TEDs/DOCs**: Pix operates 24/7 and settles instantly, while TEDs and DOCs had time restrictions and could take longer. Also, Pix often has lower or no fees compared to these traditional transfer methods.
 - **Pix vs. Boletos**: Boletos are payment slips often used for bill payments. They’re not instantaneous and require manual processing. Pix, being digital and immediate, offers a significant advantage in terms of speed and convenience.

In summary, while policy-driven initiatives like Pix have an edge in terms of trust and widespread adoption, private markets can also introduce disruptive payment methods. The key lies in understanding the existing market incentives and offering significant advantages in terms of cost, efficiency, and user experience.

## **The Main Elements that Led to Pix’s Adoption**

- **Accessibility**: Pix was designed to be inclusive. Being smartphone-based (though not exclusively), it tapped into the widespread use of mobile devices in Brazil, making it more accessible to a broader demographic.
- **Speed**: Instantaneous transactions, regardless of the hour or day, were a game-changer. Unlike TED or DOC, which had restrictions, Pix operates 24/7.
- **Cost**: Transactions through Pix are often cheaper, especially for personal use cases. Businesses also benefit from it, usually paying less than a TED for a transfer and less than a debit card transaction for an in-store or online payment. This economic advantage drove adoption among merchants and consumers alike.
- **Online User Authenticated Transaction**: As it’s based on account-to-account transactions, PIX transactions are always authenticated by the sender through its own bank’s app. Card transactions online, especially debit ones, were usually more risky as cards didn’t offer an authentication method. Even after PSD2, Brazil was still lacking functionality, and when present, the user experience was often very poor.
- **Flexibility and Versatility**: With various ways to transact (e.g., using a QR code, phone number, email, or Pix key), it appealed to a wide range of users and use cases. The way PIX’s protocol was designed allowed for the expansion of use cases without compromising the core functionalities of the system.
- **Aggressive Promotion & Education**: The Central Bank and other stakeholders carried out widespread campaigns to educate the public about Pix’s benefits, ensuring users understood and trusted the system.

## **Central Bank Roles**

As highlighted by Mariana and Jonas in **[Lessons from Pix](https://www.ctpi.io/public/research-publication/lessons-from-pix)**, a lot of the project’s success is based on the fact that PIX was a government-driven full-stack payments initiative:

> ***The Brazilian Central Bank created the rail, its rules, and its systems. It is also the one who operates the system and provides the necessary infrastructure. BCB is the financial and payments market regulator. The fact it was the financial system regulator that drove the whole project had many advantages in Brazil’s case. Although it might be possible to make different arrangements work in other countries, there are few incentives for a market-driven solution to strive for global optimisation and build a truly open, cost-effective, and flexible rail. To facilitate the process of extrapolating Pix’s case to a broader set of circumstances, however, the role the BCB plays in the Pix rail may be identified in this paper more generally as a Payment System Operator or PSO.***

Let’s detail the roles to make it clearer to our readers:

1. **Regulator**:As the monetary authority of Brazil, the Central Bank is responsible for overseeing and regulating the financial system, ensuring stability and integrity.Within the context of Pix, the Central Bank extrapolates the typical Scheme Institution role below to make some of its rules mandatory. Additionally, with its mandate of promoting competitiveness in the market, the CB can prioritise user benefits and market development instead of participants’ margins. That was the case when they made all P2P and P2B transactions free for all users. Participants may charge businesses when they are receiving payments through PIX, though.It also mandates standards for interoperability, ensuring that all banks and financial institutions in the system can seamlessly transact with each other.
 - As the monetary authority of Brazil, the Central Bank is responsible for overseeing and regulating the financial system, ensuring stability and integrity.
 - Within the context of Pix, the Central Bank extrapolates the typical Scheme Institution role below to make some of its rules mandatory. Additionally, with its mandate of promoting competitiveness in the market, the CB can prioritise user benefits and market development instead of participants’ margins. That was the case when they made all P2P and P2B transactions free for all users. Participants may charge businesses when they are receiving payments through PIX, though.
 - It also mandates standards for interoperability, ensuring that all banks and financial institutions in the system can seamlessly transact with each other.

2. **Payment Scheme Institution**:The Central Bank defines Pix’s operational, security, and business rules. This means it sets the guidelines for conducting, settling, and reporting transactions.As the payment scheme institution, the Central Bank also manages risks within the system, ensuring Pix remains a safe and trustworthy payment method.
 - The Central Bank defines Pix’s operational, security, and business rules. This means it sets the guidelines for conducting, settling, and reporting transactions.
 - As the payment scheme institution, the Central Bank also manages risks within the system, ensuring Pix remains a safe and trustworthy payment method.

3. **Settlement and Accounts AliasInfrastructure (SPI and DICT)**:SPI is the core infrastructure that underpins Pix. It’s the backbone that processes and settles transactions in real-time.The Central Bank is responsible for maintaining and overseeing this infrastructure, ensuring it remains robust, secure, and efficient. This is crucial given the need for instant settlements.By being in control of SPI, the Central Bank ensures the high availability of the system and its resilience against potential cyber threats and technical glitches.
 - SPI is the core infrastructure that underpins Pix. It’s the backbone that processes and settles transactions in real-time.
 - The Central Bank is responsible for maintaining and overseeing this infrastructure, ensuring it remains robust, secure, and efficient. This is crucial given the need for instant settlements.
 - By being in control of SPI, the Central Bank ensures the high availability of the system and its resilience against potential cyber threats and technical glitches.

Here, you can see the difference between PIX, where the Central Bank plays multiple roles at once, and a Private Card Scheme, where multiple institutions are playing different roles:

![](/images/posts/ccc49a35_1024x531.jpeg)

By playing these roles, the Central Bank guarantees Pix’s smooth functioning and instils public trust in the system. Their involvement ensures that Pix adheres to the highest security, reliability, and efficiency standards. Moreover, by being both the regulator and operator, the Central Bank is uniquely positioned to swiftly adapt and innovate the system as required.

This multi-faceted role of the Central Bank is crucial for the success of an instant payment system like Pix. It ensures not just technical robustness but also systemic integrity and public confidence.

## **Concerns About Central Bank’s Roles**

When a single entity, like the Central Bank of Brazil in the case of Pix, assumes multiple roles traditionally distributed among different organisations, concerns about potential conflicts of interest and concentration of power arise. Let’s break down these concerns:

1. **Concentration of Power**:With the Central Bank acting as both the regulator and operator of Pix, it consolidates a significant amount of power and control over the payment system. This concentration can potentially reduce checks and balances.
 - With the Central Bank acting as both the regulator and operator of Pix, it consolidates a significant amount of power and control over the payment system. This concentration can potentially reduce checks and balances.

2. **Regulation vs. Operation**:As the regulator, the Central Bank’s role is to establish rules, oversee the system, and ensure fair competition. As the operator, its interest lies in the smooth functioning and adoption of Pix.There could be situations where what’s best for the operation of Pix might not align with broader regulatory goals. For instance, a decision that boosts Pix’s performance might inadvertently sideline other payment methods or reduce competition.
 - As the regulator, the Central Bank’s role is to establish rules, oversee the system, and ensure fair competition. As the operator, its interest lies in the smooth functioning and adoption of Pix.
 - There could be situations where what’s best for the operation of Pix might not align with broader regulatory goals. For instance, a decision that boosts Pix’s performance might inadvertently sideline other payment methods or reduce competition.

3. **Commercial Interests vs. Public Good**:The sustainability of the payment market as a business is very important. While the Central Bank’s primary role is to serve the public interest, managing a system like Pix could also present commercial conflicts, especially related to other private Payment Schemes and Infrastructures that are core businesses of publicly traded companies.There might be concerns that decisions taken by the central bank could harm or even kill private profitable businesses.
 - The sustainability of the payment market as a business is very important. While the Central Bank’s primary role is to serve the public interest, managing a system like Pix could also present commercial conflicts, especially related to other private Payment Schemes and Infrastructures that are core businesses of publicly traded companies.
 - There might be concerns that decisions taken by the central bank could harm or even kill private profitable businesses.

4. **Transparency and Accountability**:With multiple roles consolidated, there could be concerns about the transparency of decisions. It might be challenging to discern whether a decision was made with the regulator or operator hat on.This blurring of roles can lead to accountability concerns. If an issue arises with Pix, the Central Bank would oversee and potentially critique its work.
 - With multiple roles consolidated, there could be concerns about the transparency of decisions. It might be challenging to discern whether a decision was made with the regulator or operator hat on.
 - This blurring of roles can lead to accountability concerns. If an issue arises with Pix, the Central Bank would oversee and potentially critique its work.

5. **Risk Management**:Having the same entity regulate, define the payment scheme, and operate the infrastructure means the Central Bank assumes all the systemic risks. A failure at any level could have cascading effects on the entire payment ecosystem and potentially the broader financial system.
 - Having the same entity regulate, define the payment scheme, and operate the infrastructure means the Central Bank assumes all the systemic risks. A failure at any level could have cascading effects on the entire payment ecosystem and potentially the broader financial system.

To address these concerns, the Central Bank maintained stringent internal checks and balances and kept a very transparent decision-making process, while making sure that all participants – represented through the market associations – were heard. By doing so, it ensured that its roles did not conflict and that the integrity of the Pix system and the broader financial ecosystem remained intact.

The final result is the incredible adoption seen in the last years, with PIX now accounting for more transactions than credit or debit cards.

![](/images/posts/7c0d86fb_980x829.jpeg)

*Source: Central Bank Dataset*

If you are like me and want to dive even deeper, please read the amazing technical analysis called **[Lessons From Pix: How to Build a Real-Time Payments Platform at its Full Potential](https://www.notion.so/From-Traditional-Transfers-to-Pix-Part-2-c8d800e8ccd1403399f7a66b81c81a9d?pvs=21)** from Mariana Cunha e Melo and Jonas Abreu.

Thanks for reading! This post is public, so feel free to share it.
