import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext, mergeProps } from "vue";
import "@splinetool/runtime";
import { _ as _export_sfc, e as _sfc_main$3 } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "destr";
import "klona";
const _sfc_main$2 = {
  __name: "splineView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><canvas id="canvas3d"></canvas></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/splineView.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "splineBox",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><canvas id="canvas3d-tow"></canvas></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/splineBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + __buildAssetsURL("4-Fast Deploy-BG.ZeGD3PF2.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_splineView = _sfc_main$2;
  const _component_splineBox = _sfc_main$1;
  const _component_svgIcon = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "index-box" }, _attrs))} data-v-9c79e089><div class="one-box" data-v-9c79e089>`);
  _push(ssrRenderComponent(_component_splineView, null, null, _parent));
  _push(`<div class="one-box-container" data-v-9c79e089><div class="one-text" data-v-9c79e089> The First <br data-v-9c79e089> Solana Native <br data-v-9c79e089> Network Extension <br data-v-9c79e089> Services: </div><div class="tow-text" data-v-9c79e089>Making SVM Extensible</div><div class="three-text" data-v-9c79e089> Customizable, Decentralized &amp; Infrastructure Compatible </div><div class="button-footer" data-v-9c79e089><div class="footer-left" data-v-9c79e089><div class="left-button" data-v-9c79e089>WHITE PAPER</div><a href="https://docs.google.com/forms/d/e/1FAIpQLSc6RbPCxaw83PaLz-v-fsJmkFsSPBEBysaNBNlDXYmNBKq0XA/viewform" data-v-9c79e089><div class="left-button" data-v-9c79e089>REQUEST A DEMO</div></a></div><div class="right-text" data-v-9c79e089>Take your <span data-v-9c79e089>Program</span> anywhere.</div></div></div></div><div class="tow-box" data-v-9c79e089><div class="top-banner justify-center" data-v-9c79e089>`);
  _push(ssrRenderComponent(_component_splineBox, null, null, _parent));
  _push(`</div><div class="title" data-v-9c79e089>Network Extension:</div><div class="text-container" data-v-9c79e089> Off-chain execution environment,<br data-v-9c79e089> extends the boundaries of computation and data. </div><div class="mini-container" data-v-9c79e089> Liquidity and settlement truly stays on L1, without fragmentation. </div></div><div class="three-box" data-v-9c79e089><div class="title-three" data-v-9c79e089> Push the limits of dApps with <br data-v-9c79e089> Lollipop NES </div><div class="list-card" data-v-9c79e089><div class="card-item" data-v-9c79e089><div class="card-container" data-v-9c79e089><div class="top-svg" data-v-9c79e089>`);
  _push(ssrRenderComponent(_component_svgIcon, { name: 1 }, null, _parent));
  _push(`</div><div class="bottom-text" data-v-9c79e089><div class="text-title" data-v-9c79e089> Cryptographic <br data-v-9c79e089> Settlement Protocols </div><div class="mini-text" data-v-9c79e089> Eliminate the centralization risks,<br data-v-9c79e089> inheriting the security of the <br data-v-9c79e089>Solana mainnet. </div></div></div></div><div class="card-item" data-v-9c79e089><div class="card-container" data-v-9c79e089><div class="top-svg" data-v-9c79e089>`);
  _push(ssrRenderComponent(_component_svgIcon, { name: 2 }, null, _parent));
  _push(`</div><div class="bottom-text" data-v-9c79e089><div class="text-title" data-v-9c79e089>Solana -Native <br data-v-9c79e089>NES</div><div class="mini-text" data-v-9c79e089> Compatible with all native <br data-v-9c79e089> infrastructure, facilitates parallel <br data-v-9c79e089> processing of SVM. </div></div></div></div><div class="card-item" data-v-9c79e089><div class="card-container" data-v-9c79e089><div class="top-svg" data-v-9c79e089>`);
  _push(ssrRenderComponent(_component_svgIcon, { name: 3 }, null, _parent));
  _push(`</div><div class="bottom-text" data-v-9c79e089><div class="text-title" data-v-9c79e089>SEPARATE <br data-v-9c79e089>&amp; PRIVACY</div><div class="mini-text" data-v-9c79e089> Offering customized pools for <br data-v-9c79e089> computation and data, with value and <br data-v-9c79e089> security anchored by L1. </div></div></div></div><div class="card-item" data-v-9c79e089><div class="card-container" data-v-9c79e089><div class="top-svg" data-v-9c79e089>`);
  _push(ssrRenderComponent(_component_svgIcon, {
    color: "fff",
    name: 4
  }, null, _parent));
  _push(`</div><div class="bottom-text" data-v-9c79e089><div class="text-title" data-v-9c79e089>LIMITLESS <br data-v-9c79e089>TVL</div><div class="mini-text" data-v-9c79e089> Polkadot Cloud, as platform for shared <br data-v-9c79e089> sequencer, DA and validator, provides <br data-v-9c79e089>trustless ground for NEs. </div></div></div></div><div class="card-item" data-v-9c79e089><div class="card-container" data-v-9c79e089><div class="top-svg" data-v-9c79e089>`);
  _push(ssrRenderComponent(_component_svgIcon, {
    color: "fff",
    name: 5
  }, null, _parent));
  _push(`</div><div class="bottom-text" data-v-9c79e089><div class="text-title" data-v-9c79e089>DISTRIBUTED <br data-v-9c79e089>VALIDATORS</div><div class="mini-text" data-v-9c79e089> Decentralized validation network with <br data-v-9c79e089>minimal hardware for broad <br data-v-9c79e089> participation. </div></div></div></div><div class="card-item" data-v-9c79e089><div class="card-container" data-v-9c79e089><div class="top-svg" data-v-9c79e089>`);
  _push(ssrRenderComponent(_component_svgIcon, { name: 6 }, null, _parent));
  _push(`</div><div class="bottom-text" data-v-9c79e089><div class="text-title" data-v-9c79e089> Increase Bandwith and <br data-v-9c79e089> Reduce Latency </div><div class="mini-text" data-v-9c79e089> Increase capacity and bandwith of the <br data-v-9c79e089> entire Solana ecosystem by splitting <br data-v-9c79e089> dApps execution with modified SVM <br data-v-9c79e089> instances. </div></div></div></div></div><div class="text1" data-v-9c79e089><div data-v-9c79e089>Lollipop</div><div data-v-9c79e089>Tech Features</div></div><div class="text2" data-v-9c79e089>SEAMLESS INTEGRATION WITH SOLANA MAINNET</div><div class="h-[460px] bg-[url(@/assets/img/1-默认.png)] bg-contain bg-center bg-no-repeat mb-[100px]" data-v-9c79e089></div><div class="h-[488px] mb-[100px] flex" data-v-9c79e089><div class="flex-[1] bg-[url(@/assets/img/2-默认.png)] bg-contain bg-no-repeat" data-v-9c79e089></div><div class="flex-1 flex flex-col justify-center items-end gap-[40px]" data-v-9c79e089><div class="text-[38px] font-[800] text-[white] leading-[42px] inline-block" data-v-9c79e089>USE SMT FOR SECURED SETTLEMENT PROTOCOLS</div><div class="text-[22px] text-[white] leading-[30px]" data-v-9c79e089>Lollipop is the first that has developed the complete Cryptographic Settlement Protocol for Solana Network Extension.</div></div></div><div class="h-[488px] flex justify-between" data-v-9c79e089><div class="flex-1 flex flex-col justify-center items-start gap-[40px]" data-v-9c79e089><div class="text-[38px] font-[800] text-[white] leading-[42px]" data-v-9c79e089>ENTER <br data-v-9c79e089> NETWORK EXTENSION</div><div class="text-[22px] text-[white] leading-[30px]" data-v-9c79e089>Value never leaves an L1 for an NE, only data and compute.<br data-v-9c79e089><br data-v-9c79e089> NE allows code to be written one time, and deployed anywhere.</div></div><div class="flex-[1] bg-[url(@/assets/img/3-默认.png)] bg-contain bg-no-repeat bg-right" data-v-9c79e089></div></div></div><div class="relative w-full" data-v-9c79e089><img class="w-full"${ssrRenderAttr("src", _imports_0)} data-v-9c79e089><div class="w-full h-full absolute left-0 bottom-0 flex flex-col px-[85px] justify-center items-center gap-[50px]" data-v-9c79e089><div data-v-9c79e089><div class="w-1/3 flex flex-col gap-[20px]" data-v-9c79e089><div class="text-[38px] text-white font-[800] leading-[42px]" data-v-9c79e089>EXTEND SOLANA<br data-v-9c79e089>WITH LOLLIPOP NES</div><div class="text-[22px] leading-[30px] text-white" data-v-9c79e089>We aim to extend Solana mainnet by facilitating the deployment of Solana-native NEs. This initiative is to provide developers private pools for customizability and computation, while maintaining value and security with Layer 1.</div></div></div><div class="flex" data-v-9c79e089><div class="text-[#0AEAF1] font-[800] text-[64px] leading-[68px] flex-1" data-v-9c79e089>Fast Deploy A Customizable Solana Network Extension</div><div class="w-1/4 flex items-center justify-center" data-v-9c79e089><a href="https://calendly.com/team-lollipop/30min" data-v-9c79e089><div class="border rounded-[60px] px-[29px] cursor-pointer py-[20px] border-[#0AEAF1] hover:bg-[#FC15EF] inline-block text-[16px] font-bold leading-[20px] text-white shadow-[0px_5px_0px_0px_#0AEAF1;]" data-v-9c79e089>BOOK A MEETING</div></a></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9c79e089"]]);
export {
  index as default
};
//# sourceMappingURL=index-CoArcJqL.js.map
