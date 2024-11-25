<script setup>
import { ref, onMounted, reactive } from "vue";
import TocList from "@/components/TocList.vue";

// 数据定义在主模板页，增加 `expanded` 状态
const AList = reactive([
  { title: "Lollipop: Making SVM Extensible", name: "1t", expanded: false },
  { title: "1.Background", name: "2t", expanded: false },
  {
    title: "2.Catalysts for Network Extension: Layer 2 - Path to Fragmentation",
    name: "3t",
    expanded: false,
  },
  { title: "3.Why Solana", name: "4t", expanded: false },
  {
    title: "4.What do we need?",
    name: "5t",
    expanded: false,
    child: [
      { title: "4.1What is Network Extension?", name: "5.1t", active: false },
      { title: "4.2Market Demand", name: "5.2t", active: false },
    ],
  },
  {
    title: "5.Lollipop Introduction",
    name: "6t",
    expanded: false,
    child: [
      { title: "5.1Architecture", name: "6.1t", active: false },
      { title: "5.2Why Polkadot Cloud", name: "6.2t", active: false },
    ],
  },
  {
    title: "6.Key Technology",
    name: "7t",
    expanded: false,
    child: [
      { title: "6.1SVM and Parallelization", name: "7.1t", active: false },
      {
        title: "6.2Cryptography Settlement Protocol based on SMT",
        name: "7.2t",
        active: false,
      },
      { title: "6.3Stateless Verification", name: "7.3t", active: false },
    ],
  },
  { title: "7.Conclusion", name: "8t", expanded: false },
]);

// 控制状态
const tocVisible = ref(true); // 目录是否显示
const activeItem = ref(""); // 当前高亮的目录项
const allSections = ref([]); // 展平后的所有章节
const sectionRanges = ref([]); // 每个章节的有效范围

// 切换目录显示状态
const toggleToc = () => {
  tocVisible.value = !tocVisible.value;
};

// 设置当前高亮项
const setActiveItem = (name) => {
  activeItem.value = name;
  const target = document.getElementById(name);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

// 扁平化数据结构
const flattenList = (list) => {
  const result = [];
  const traverse = (items) => {
    items.forEach((item) => {
      result.push(item);
      if (item.child) traverse(item.child);
    });
  };
  traverse(list);
  return result;
};

// 初始化章节范围
const calculateSectionRanges = () => {
  sectionRanges.value = []; // 清空范围列表

  const addSectionRange = (section, nextSection) => {
    const element = document.getElementById(section.name);
    const nextElement = nextSection ? document.getElementById(nextSection.name) : null;

    sectionRanges.value.push({
      name: section.name,
      start: element ? element.offsetTop : 0,
      end: nextElement ? nextElement.offsetTop : document.body.scrollHeight,
    });

    if (section.child) {
      section.child.forEach((child, index) => {
        const nextChild = section.child[index + 1];
        addSectionRange(child, nextChild || nextSection);
      });
    }
  };

  // 遍历章节并计算范围
  AList.forEach((item, index) => {
    const nextItem = AList[index + 1];
    addSectionRange(item, nextItem);
  });
};

const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sectionRanges.value.forEach((range) => {
    const section = AList.find((item) => item.name === range.name);
    if (section) {
      const inRange = scrollPosition >= range.start && scrollPosition < range.end;

      // 更新父章节的expanded状态
      section.expanded = inRange;

      // 更新子章节的active状态
      if (inRange && section.child) {
        section.child.forEach((child) => {
          const childElement = document.getElementById(child.name);
          const childRange = sectionRanges.value.find((r) => r.name === child.name);

          // 判断子章节是否在视口内
          const childInRange =
            scrollPosition >= childRange.start && scrollPosition < childRange.end;
          child.active = childInRange;

          // 如果子章节在视口内，父章节需要展开
          if (childInRange) {
            section.expanded = true;
          }
        });
      } else if (!inRange && section.child) {
        section.child.forEach((child) => {
          child.active = false; // 滚动到大章节时，收起小章节的active状态
        });
      }
    }
  });
};

// 生命周期钩子
onMounted(() => {
  allSections.value = flattenList(AList); // 扁平化章节数据
  calculateSectionRanges(); // 初始化章节范围
  handleScroll(); // 页面加载时检查当前滚动位置
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", calculateSectionRanges); // 窗口调整时重新计算
});
</script>

<template>
  <div class="flex justify-center pb-[50px] bg-[url('@/assets/img/bg.jpg')] bg-contain">
    <div class="w-[55%] mt-[80px] pt-[30px] relative">
      <div class="fixed right-[19%] translate-x-full">
        <TocList :list="AList" :active-item="activeItem" @update-active="setActiveItem" />
      </div>
      <div class="title" id="1t">Lollipop: Making SVM Extensible</div>
      <div class="text-center font-bold text-lg">Lollipop Builders</div>
      <br />
      <div class="flex justify-evenly text-lg">
        <div>Dr. Yugart Song</div>
        <div>Stepan Soin</div>
        <div>Qinwen Wang</div>
      </div>
      <br />
      <br />
      <div class="prologue" id="2t">1. Background</div>
      <div class="MainBody">
        The rapid evolution of blockchain technology has been shaped by competing design
        philosophies, with Ethereum and Solana emerging as dominant forces in their
        respective categories. Historically, Ethereum dominated TVL for EVM chains and
        Solana for non-EVM chains due to their different philosophies and approaches.<br />
        However, as network demand grew, Ethereum began ceding dominance to emerging EVM
        chains and shifted toward L2 scaling solutions. In contrast, Solana’s monolithic
        architecture, supported by unique technical innovations and significant
        performance reserves, avoids such fragmentation at the expense of high bandwidth
        and speed.
      </div>
      <br />
      <div class="MainBody">
        At the same time, the idea of rollups also offers an important opportunity for
        dApps: the ability to create customizable environments. The end result is an
        interesting situation: L2s fragment Ethereum's liquidity and user base, while
        L2/L3 appchains make this process even more extensive. Solana is a proponent of a
        monolithic ecosystem. <br />However, the benefits of customizable environments for
        different use cases are obvious. Therefore, the Lollipop team set out to realize a
        novel approach to increase the functionality and flexibility of the Solana
        ecosystem while maintaining its monolithic nature.
      </div>
      <br />
      <br />
      <div class="prologue" id="3t">
        2. Catalysts for Network Extension: Layer 2 - Path to Fragmentation
      </div>
      <div class="MainBody">
        The evolution of Ethereum scaling, from Plasma in 2017 to Optimistic and
        zk-rollups, highlights the necessity of scaling for ecosystems built on fragmented
        chains. However, it is important to note that part of Ethereum’s L2-based TVL is
        underpinned by bridged ETH, which remains locked on L1.
      </div>
      <br />
      <div class="MainBody">
        That is, the shift to L2 solutions on Ethereum has introduced a "vampire effect”.
        This is evidenced by a sharp decline in Ethereum's fee revenues following the
        implementation of EIP-4844. Analysts, including Justin Bons from Cyber Capital,
        emphasize that Ethereum’s fee growth is increasingly constrained, as L2 solutions
        now take up a significant portion of transaction fees.
      </div>
      <div class="img">
        <img src="../assets/img/图片 1.png" alt="" />
      </div>
      <div class="text-center">
        Figure 1: ETH supply dynamics. Source:
        <a href="https://ultrasound.money/">ultrasound.money</a>
      </div>
      <br />
      <div class="MainBody">
        This trend undermines Ethereum's deflationary model, which is based on burning ETH
        at a cost. Lower activity on Ethereum's L1 decreases the burn rate, leading to
        higher supply growth and weakening the intended deflationary dynamic.
      </div>
      <br />
      <div class="MainBody">
        In this context, Solana's approach of preserving the chain’s identity while
        maintaining a monolithic structure with a unified ecosystem philosophy seems
        highly attractive.
      </div>
      <br />
      <br />
      <div class="prologue" id="4t">3. Why Solana</div>
      <div class="MainBody">
        The Solana blockchain presents a novel blockchain architecture compared to
        previous systems designed around the Ethereum Virtual Machine (EVM). Solana
        implements Proof-of-Stake (PoS) as a sybil control mechanism, alongside one of its
        key innovations – the Proof-of-History (PoH) algorithm. PoH is a type of
        verifiable delay function (VDF) that allows for the ordering and timestamping of
        transactions sent over the network. In addition, Solana stands apart for its use
        of high-performance hardware, mempool-less transaction forwarding protocol (Gulf
        Stream) and a different take on the traditional blockchain account model, – which
        is similar to the file system of the Linux operating system.
      </div>
      <br />
      <div class="MainBody">
        Solana follows a monolithic design philosophy, enabling significantly higher
        scalability through its distinctive consensus mechanism, technical innovations,
        and ongoing architectural optimizations to enhance speed and throughput.
      </div>
      <br />
      <div class="MainBody">
        Solana also benefits from a strong developer community: over 2,500 developers are
        actively involved. Together, this has driven remarkable growth. Solana’s TVL
        increased from a low of $210m in 2023 to a current level of $7.73b in 2024—an
        almost 35x growth. Trading volume on Solana DEXs has surged 200-300x year-on-year
        compared to November 2022, accompanied by a 5x increase in DAU since summer 2023.
        By November 14, Solana’s trading volume had surpassed Ethereum's by more than 4x.
        The number of active wallets is also actively growing, with a peak of 9.4m active
        users in one day on October 22, 2024.
      </div>
      <br />
      <div class="img">
        <img src="../assets/img/图片 2.png" alt="" />
      </div>
      <div class="text-center">
        Figure 2: Solana DEXes trading volumes and active wallets dynamics. Source:<a
          href="https://dune.com/queries/3084516/5142955"
          >Dune</a
        >,<a href="https://app.artemis.xyz/project/solana?from=projects"> Artemis</a>
      </div>
      <br />
      <div class="MainBody">
        Solana is a very strong ecosystem with a large number of users and developers. And
        it is experiencing exponential growth in the number of users and activity. These
        developments underline the growing importance of Solana as a leading non-EVM
        chain.
      </div>
      <div class="img">
        <img src="../assets/img/图片 3.png" alt="" />
      </div>
      <div class="text-center">
        Figure 3: Non-EVM blockchains TVL comparison. Source:
        <a href="https://defillama.com/chains/Non-EVM">DefiLlama</a>
      </div>
      <br />
      <div class="MainBody">
        The dApps significantly improve their functionality by increasing acceptance and
        user-frendliness. It is becoming apparent that Solana is becoming a super shift
        that demands exceptional features. But some apps such as Zeta Market are going to
        launch their own instances (L2) for the same purpose. One fact stands above all –
        the SVM works great in isolation. This is well documented through Pyth Net, Cube
        Exchange, and others leveraging the SVM for appchains, or what the Solana
        ecosystem refers to as Solana Permissioned Environments (SPEs).
      </div>
      <br />
      <div class="MainBody">
        While there is a use case for standalone “application-specific” SVM chains that
        are not significantly different from the vanilla Solana client, we believe that
        vanilla Solana forks that serve as Layer 2 are of limited value. And it's very
        clear that Solana needs a separate approach in order not to jeopardize its
        monolithic nature. This is why we have developed the Lollipop Network Extensions,
        which should significantly change the landscape of the Solana ecosystem.
      </div>
      <br />
      <br />
      <div class="prologue" id="5t">4. What do we need?</div>
      <div class="Second" id="5.1t">4.1 What is Network Extension?</div>
      <div class="MainBody">
        All of the above factors have led to conversations in the Solana community about
        the need to move some of the computing to somewhere else. Extensions themselves
        are not a new phenomenon for Solana. Back in 2022 Token Extensions appeared, which
        offered new features such as Confidential transfers, Transfer hooks, Metadata
        pointer. So when it came to improving Solana's functionality and scaling dApps, it
        was logical to propose the name Network Extensions (NE).
      </div>
      <br />
      <div class="MainBody">
        Based on insights and discussions within the Solana ecosystem, we identified
        several fundamental principles that should define the architecture and
        functionality of Network Extensions. These principles are designed to ensure
        seamless integration with the Solana network while preserving the core benefits of
        its architecture:
      </div>
      <br />
      <div class="MainBody font-bold pl-6">
        1. No fragmentation of liquidity <br />
        2. No fragmentation of the user base <br />
        3. For users, theinteraction with the environment remains the same as if they were
        using Solanadirectly <br />
        4. A unified technology stack <br />
        5. Network Extensions send transactions directlyto Solana validators
      </div>
      <br />
      <div class="MainBody">
        In the case of NE, Solana is a true settlement layer, the flow of funds occurs at
        this level. And NE is a true execution layer that is not fragmented from the
        mainchain and works with Accounts and Programs directly on this layer.
      </div>
      <div class="img">
        <img src="../assets/img/图片 4.png" alt="" />
      </div>
      <div class="text-center">Figure 4: Simplified view of Network Extension flow</div>
      <br />
      <div class="MainBody">
        These things are the main difference between NEs and rollups, sidechains,
        different variants of L2s, L3s, appchains, and so on. L2s collect transactions and
        send their proofs to L1s. Network Extensions send transactions directly to Solana
        validators. Sidechains must not have a direct connection to the mainchain.
        Subchains in their current implementation imply the possibility of building
        separate ecosystems, and liquidity as well as users in them are concentrated in
        separate spaces. NEs work directly with Solana liquidity and do not lead to the
        formation of disparate chains, spaces and communities.
      </div>
      <br />
      <div class="Second" id="5.2t">4.2 Market Demand</div>
      <div class="MainBody">
        Currently, Lollipop is the first solution to offer a native direct connection with
        Solana without fragmenting liquidity or the user base. Lollipop's native
        environment can serve as a foundation for both new products and the migration of
        existing dApps without breaking the connection to the Solana ecosystem and
        liquidity. For existing dApps, this will improve speed, stability, and extend
        functionality.
      </div>
      <div class="img">
        <img src="../assets/img/图片 5.png" alt="" />
      </div>
      <div class="text-center">Figure 5: Lollipop comparative landscape</div>
      <br />
      <div class="MainBody">
        NEs can operate infrastructure solutions for Solana and its dApps, as well as the
        dApps themselves. This concept is remotely similar to the idea of appchains and
        L2s. Multiple dApps are transitioning to their own dedicated instances to improve
        performance, scalability, and user experience. There are many such solutions under
        L2: OP-Stack, Arbitrum Orbit, Polygon CDK, StarkEX, zkSync Era, Termina and
        others. These toolkits have enabled numerous Layer 2 projects to launch
        successfully, significantly advancing the scalability and usability of blockchain
        networks. But as we could see above, the current approach of the Layers model with
        fragmented environments is not suitable for the Solana monolith.
      </div>
      <br />
      <div class="MainBody font-bold">Notable examples include:</div>
      <ul>
        <li>
          <span class="font-bold">Uniswap:</span> Uniswap Labs has announced the launch of
          Unichain, a Layer 2 blockchain designed to enhance DeFi applications. Built on
          Optimism’s technology stack, Unichain leverages the Superchain framework to
          facilitate seamless interoperability with other Layer 2 solutions. This
          integration is expected to improve liquidity and user experience across various
          DeFi platforms.
        </li>
        <li>
          <span class="font-bold">dYdX:</span> dYdX has transitioned to its own
          blockchain, known as the dYdX Chain, to enhance scalability and
          decentralization. This move is part of their v4 upgrade, aiming to provide a
          fully decentralized, high-performance trading platform.
        </li>
        <li>
          <span class="font-bold">MakerDAO:</span> MakerDAO is planning to develop its own
          native blockchain, referred to as “NewChain.” This initiative is part of the
          fifth phase of MakerDAO’s “Endgame” roadmap, which outlines the project’s
          long-term strategic vision.
        </li>
        <li>
          <span class="font-bold">Zeta Markets:</span> Zeta Markets is working on its
          SVM-based ZetaChain, designed to improve performance and decentralize
          derivatives trading. Built to support seamless cross-chain interactions,
          ZetaChain aims to provide a scalable, high-performance infrastructure tailored
          to the needs of modern financial markets.
        </li>
        <li>
          <span class="font-bold">Syndr:</span> Launched Syndr Chain, an app-specific
          hybrid Layer-3 Optimistic rollup powered by Arbitrum Orbit, offering
          institutional-grade trading capabilities
        </li>
        <li>
          <span class="font-bold">Worldcoin:</span> Built its decentralized, privacy-first
          digital identity application as part of the OP Stack Superchain, aiming to
          provide scalable and secure identity verification.
        </li>
        <li>
          <span class="font-bold">Meliora:</span> Launched an Arbitrum Orbit-based Layer-3
          credit protocol, offering seamless lending and borrowing by eliminating
          dependency on oracles and liquidations.
        </li>
      </ul>
      <br />
      <div class="MainBody">
        These cases reflect a broader trend among dApps to build independent instances.
        This allows them to optimize their operations and functionality and provide better
        services to their users. These can be DeFi applications, games, verification and
        identification protocols, privacy protocols, institutional and enterprise
        solutions and so on. These environments are mainly built based on different
        implementations of rollups. As we have seen above, rollups have a vampiric effect
        on the base chain.
      </div>
      <br />
      <div class="MainBody">
        Another area that NEs could potentially cover are use cases related to AVS based
        on restacking protocols. These include decentralized oracles, co-processors,
        verifiable computations, decentralized sequencing, fast finalizations and others.
        This is made possible by the adaptability of NES environments.
      </div>
      <br />
      <div class="MainBody">
        Another important scenario for NES is the ability to create gas-free economies
        within the environment similar to how this is implemented in the EVM Account
        Abstraction. This is a very useful option for protocols where users can generate a
        large number of transactions - e.g. HFT, gaming, rebalancing protocols, dynamic
        pools with concentrated liquidity and more.
      </div>
      <br />
      <div class="MainBody">
        Therefore, the Lollipop team has a non-trivial task: to ensure that dApps can
        create customized environments from the Solana ecosystem, but with a direct
        connection to Solana. That is, conceptually it looks like the execution is
        off-chain in Network Extension, but settlement and finalization of actions takes
        place on Solana. At the same time, the user's wallet itself should be located in
        the Solana blockspace. After a long and thorough research and development process,
        the Lollipop team has arrived at the current design of Lollipop.
      </div>
      <br />
      <br />
      <div class="prologue" id="6t">5. Lollipop Introduction</div>
      <div class="Second" id="6.1t">5.1 Architecture</div>
      <div class="MainBody">
        Lollipop allows projects to modify the Solana client in an off-chain execution
        environment and seamlessly transfer the results to the Solana mainnet, eliminating
        the need to create a separate chain. Solana does not have a global state tree,
        which is central to ensuring secure settlement of off-chain executions back to
        Solana mainnet. Lollipop incorporates this essential feature with Sparse Merkle
        Trees (SMT) to cryptographically verify execution results on its Network
        Extension. This makes Lollipop's approach uniquely suited for Solana dApps.
      </div>
      <div class="img">
        <img src="../assets/img/图片6.png" alt="" />
      </div>
      <div class="text-center">Figure 6: Lollipop architecture flow</div>
      <br />
      <div class="MainBody font-bold">
        Lollipop consists of several general components:
      </div>
      <ul>
        <li class="MainBody">Network Extensions layer</li>
        <li class="MainBody">Programs on Solana layer</li>
        <li class="MainBody">Polkadot Cloud layer</li>
      </ul>
      <br />
      <div class="MainBody">
        Lollipop builds natively on Solana, leveraging its parallel execution and unique
        transaction data structure. The key to SVM’s parallel processing capabilities lies
        within the Solana Client itself. By modifying the Solana Client, Lollipop
        maximizes the performance benefits of Solana’s native strengths​.
      </div>
      <br />
      <div class="MainBody">
        This architecture allows dApps to seamlessly migrate from Solana’s L1 to
        Lollipop’s NES without requiring any changes to their program code, and it
        requires fewer resources while supporting the same tools and developer stack as
        Solana.
      </div>
      <br />
      <div class="MainBody">
        It is important to emphasize that the parallel execution of SVM is based on
        Solana's unique transaction data structure. In each transaction, the originator
        pre-states the account information to be read and written. This allows the SVM to
        process a batch of transactions in an efficient parallel sequence based on this
        account information and ensures that transactions executed in parallel do not read
        and write to the same account at the same time. In other words, simply grafting
        SVM onto other execution frameworks does not bring the advantages of parallel
        processing.
      </div>
      <br />
      <div class="Second" id="6.2t">5.2 Why Polkadot Cloud</div>
      <div class="MainBody">
        Polkadot Cloud is set to become a trustless supercomputer for Web3 cloud services,
        offering multicore execution, global coherence, and cost-effectiveness. By
        leveraging Polkadot Cloud, Lollipop can fully implement its network extension
        services with shared sequencers, decentralized data availability (DA), and
        stateless validated contracts—all at an economical rate, thanks to Polkadot’s low
        DOT-based pricing. Each contract runs on a dedicated core that enables parallel,
        synchronized execution across validators, sequencers, and DA, ensuring highly
        efficient processing.
      </div>
      <div class="img">
        <img src="../assets/img/图片 7.png" alt="" />
      </div>
      <div class="text-center">Figure 7: Lollipop architecture</div>
      <br />
      <div class="MainBody">
        To address these common risks, Lollipop integrates with the Polkadot Cloud, an
        advanced decentralized network that provides support for Shared Sequencers, Data
        Availability, and Stateless Validators setting a new standard for validation. This
        approach allows improved decentralization of our network extensions and reduces
        the validator costs.
      </div>
      <ol>
        <li class="MainBody">
          <span class="font-bold">Shared Sequencers:</span> Polkadot Cloud handles the
          sequencing of transactions in a decentralized and transparent way, ensuring that
          Lollipop’s Network Extensions remain efficient and trustworthy. Polkadot offers
          tremendous advantages in terms of security, speed, and decentralization, which
          is why we chose it as our unified shared sequencer.Shared sequencers can batch
          multiple transactions together, reducing the number of individual transactions
          that need to be processed on the base layer, which significantly increases
          capacity. Once the transactions are submitted from the Lollipop ecosystem to
          Polkadot, they are only ordered, but not executed.
        </li>
        <li class="MainBody">
          <span class="font-bold">Stateless Validators:</span> The Stateless Validator
          contract on Polkadot Cloud will break down the complete validation task into
          small chunks, which are then distributed to the validator network. Lollipop
          significantly reduces the hardware requirements for participants, and makes it
          easier for nodes to join and leave the network without needing access to the
          full state.
        </li>
        <li class="MainBody">
          <span class="font-bold">Data Availability:</span> Solana has strict transaction
          size limitations of 1232 bytes, which can be challenging for rollup-based DA
          solutions. By implementing extended DA on the Polkadot Cloud, Lollipop ensures
          secure and decentralized data management, overcoming the limitations of Solana’s
          native DA solutions​. In addition, this design retains the ability to audit data
          on Solana.
        </li>
      </ol>
      <br />
      <br />
      <div class="prologue" id="7t">6. Key Technology</div>
      <div class="Second" id="7.1t">6.1 SVM and Parallelization</div>
      <div class="MainBody">
        Solana's SVM (Solana Virtual Machine) is an efficient smart contract execution
        environment that uses parallel transaction processing and state-independent design
        to enable multiple transactions to be executed simultaneously, resulting in
        significantly higher throughput and lower latency. The SVM supports programming
        languages such as Rust and C and allows developers to easily build
        high-performance decentralized applications, fueling the rapid growth of the
        Solana ecosystem.
      </div>
      <br />
      <div class="MainBoay">
        It is important to emphasize that SVM parallel execution relies on Solana's unique
        transaction data structure. For each transaction, the originator pre-states the
        account information to be read and written. This allows the SVM to process a batch
        of transactions in an efficient parallel order based on these accounts'
        information, ensuring that transactions executed in parallel do not read and write
        to the same account at the same time. In other words, simply grafting SVM onto
        other execution frameworks does not provide the advantages of parallel processing.
      </div>
      <br />
      <div class="MainBody">
        Therefore, we chose to use Solana Client as our base execution framework.
      </div>
      <br />
      <div class="Second" id="7.2t">
        6.2 Cryptography Settlement Protocol based on SMT
      </div>
      <div class="MainBody">
        A sparse Merkle tree (SMT) is a type of cryptographic data structure that combines
        both a traditional Merkle tree and a Patricia tree data structure to efficiently
        store a large set of key-value pairs. The advantage of an SMT over a traditional
        Merkle tree is that tree nodes are organized in such a way that only certain nodes
        need to be stored, typically those that contain non-empty values or that are on
        the path to a leaf node with a value — this is what defines them as “sparse”.
      </div>
      <br />
      <div class="MainBody">
        Overall, they allow compact proofs (Merkle proofs) that a particular key-value
        pair is or is not contained in the tree, without revealing the values themselves.
        This leads to an optimization of storage and computational efficiency. The
        relevant use cases for SMTs in Layer 2 solutions are state commitment and state
        verification. State commitment refers to Layer 2 solutions that commit the state
        of off-chain transactions (of Layer 1). By committing this state on Layer 1,
        participants of Layer 2 can prove the validity of their off-chain transactions
        without disclosing the entire state or requiring the Layer 1 blockchain to process
        every off-chain transaction.
      </div>
      <div class="img">
        <img src="../assets/img/图片 8.png" alt="" />
      </div>
      <div class="text-center">Figure 8: Fraud Proof</div>
      <br />
      <div class="MainBody">
        Since the conflicting transaction was found, we must now replay this transaction
        to determine which node is lying.
      </div>
      <br />
      <div class="MainBody">
        Previously, we found that we have already compiled an SVM into rBPF (Solana
        bytecode) as part of our Solana program.
      </div>
      <br />
      <br />
      <div class="prologue" id="7.3t">6.3 Stateless Verification</div>
      <div class="MainBody">
        If you want to run a validator on the Solana mainnet that needs to manage a large
        global state in addition to the computing power required to process a large number
        of transactions in a timely manner, you will likely pay $1,500 to $2,000 per month
        in server fees.
      </div>
      <br />
      <div class="MainBody">
        These costs are not conducive to setting up a validator through a third party,
        which is why we use the stateless validator method.
      </div>
      <br />
      <div class="MainBody">
        With the SMT built by us and the global state root submitted to the consensus
        layer, the validator does not need to maintain the global state, but only needs to
        synchronize the global state root with the consensus layer.
      </div>
      <br />
      <div class="MainBody">
        The blocker is then asked to provide the input required for each transaction and
        the output produced. In this way, validators can validate transactions at low
        cost, and a large number of validators independently validate different
        transactions to ensure that all transactions are correct.
      </div>
      <br />
      <br />
      <div class="prologue" id="8t">7. Conclusion</div>
      <div class="MainBody">
        The development of network extensions with Lollipop is an important step towards
        improving the functionality of dApps and protocols in the Solana ecosystem. By
        introducing a new approach to the development of dApps and protocols in the Solana
        ecosystem, Lollipop provides seamless integration into the Solana mainnet while
        maintaining a monolithic structure and avoiding fragmentation. Unlike traditional
        Layer 2 solutions that often create isolated environments with fragmented
        liquidity, Lollipop's direct connection to Solana ensures that liquidity and user
        base remain unified at both layers. Lollipop Network Extensions offer developers a
        universal framework that allows them to create customized runtime environments
        that meet specific requirements for different use cases.
      </div>
      <br />
      <div class="MainBody">
        Ultimately, the Lollipop design provides a forward-thinking solution that not only
        improves the scalability of Solana-based dApps, but also lays the foundation for a
        new era of high-performance blockchain environments. As the Solana ecosystem
        continues to grow, Lollipop's unique architecture positions it as a key enabler of
        future innovation, giving developers the tools they need to build applications
        securely, efficiently and sustainably.
      </div>
      <br />
      <div class="h-[1px] bg-black"></div>
      <br />
      <div class="MainBody font-bold">Disclaimer</div>
      <div>
        This document is provided for informational purposes only, and the opinions
        expressed herein are solely those of the authors, reflecting their subjective
        viewpoints. It does not constitute an offer to provide financial services, sell,
        or purchase any securities or other financial instruments. This material should
        not be construed as financial advertising, investment advice, or an inducement to
        participate in any product, offering, or investment. All information,
        descriptions, diagrams, forecasts, estimates, predictions, goals, outlooks, and/or
        opinions contained in this document are subject to change without prior notice.
        Authors have endeavored to adhere to principles of transparency and diligence in
        the preparation of this document, its content reflects information current as of
        the publication date and is provided without any guarantees or warranties of any
        kind. This document may be revised or updated periodically at the discretion of
        the authors.
      </div>
    </div>
  </div>
</template>

<style scoped>
ul li {
  padding-left: 20px;
  position: relative;
}
ul li::after {
  top: 7px;
  content: "";
  position: absolute !important;
  left: 5px;
  border-radius: 50%;
  width: 7px;
  height: 7px;
  background: #000;
}
ol li {
  padding-left: 40px;
  position: relative;
}
ol li::after {
  top: 11px;
  content: "";
  position: absolute !important;
  left: 15px;
  width: 7px;
  height: 1px;
  background: #000;
}

.title {
  border-bottom: 1px solid #eee;
  padding-bottom: 0.3em;
  font-size: 2.5em;
  text-align: center;
  font-weight: bold;
  margin-bottom: 16px;
}
.prologue {
  border-bottom: 1px solid #eee;
  padding-bottom: 0.3em;
  font-size: 26px;
font-weight: bold;
line-height: 34px;
  margin-bottom: 16px;
}
.MainBody {
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  color: #333333;
  font-family: 'SpaceGrotesk', sans-serif;
}
.img {
  max-width: 100%;
  padding: 10px;
}
a {
  color: blue;
  text-decoration: underline;
}
.Second {
  text-indent: 1em;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.3em;
  font-size: 20px;
font-weight: bold;
line-height: 28px;
  margin-bottom: 16px;
}
</style>
