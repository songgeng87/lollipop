import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { useSSRContext, ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import "@splinetool/runtime";
import { _ as _export_sfc, b as _sfc_main$3 } from "../server.mjs";
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
import "element-plus/dist/index.full";
const _sfc_main$2 = {
  __name: "aboutSplineTop",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><canvas id="canvas3d-top"></canvas></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/aboutSplineTop.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "aboutSplineBottom",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><canvas id="canvas3d-bottom"></canvas></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/aboutSplineBottom.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const carousel = ref("");
    const currentIndex = ref("0");
    const changeIndex = (current) => {
      currentIndex.value = current + 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_aboutSplineTop = _sfc_main$2;
      const _component_aboutSplineBottom = _sfc_main$1;
      const _component_el_carousel = resolveComponent("el-carousel");
      const _component_el_carousel_item = resolveComponent("el-carousel-item");
      const _component_svgIcon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "aboutView pt-[250px] pr-[85px] pl-[85px] overflow-hidden" }, _attrs))} data-v-c43adc9b><div class="w-[100%] flex items-center justify-center mb-36" data-v-c43adc9b><div class="about-top w-[400px] h-[370px]" data-v-c43adc9b>`);
      _push(ssrRenderComponent(_component_aboutSplineTop, { class: "scale-[2]" }, null, _parent));
      _push(`</div></div><div class="about-center w-[1270px] m-[auto]" data-v-c43adc9b><div class="top-title mb-[87px] w-[100%] flex justify-end" data-v-c43adc9b><div class="text-[60px] text-[#fff]" data-v-c43adc9b>about us</div></div><div class="flex justify-between mb-36" data-v-c43adc9b><div class="left-container" data-v-c43adc9b><div class="flex items-center mb-7" data-v-c43adc9b><div class="left-cell mr-4" data-v-c43adc9b></div><div class="left-text" data-v-c43adc9b>Our Technology</div></div><div class="left-box" data-v-c43adc9b> Lollipop is the first Solana Network Extension Stack <br data-v-c43adc9b> with Cryptographic Settlement Protocols which <br data-v-c43adc9b> extended Solana mainnet security and with <br data-v-c43adc9b> infrastructure compatibility. We enable the creation <br data-v-c43adc9b> of Solana Native NEs for Dapps, and help SVM or <br data-v-c43adc9b> Ethereum forks [L1&amp;L2] to settle back to Solana <br data-v-c43adc9b> Mainnet through Lollipop. </div></div><div class="right-container" data-v-c43adc9b><div class="flex items-center mb-7" data-v-c43adc9b><div class="right-cell mr-4" data-v-c43adc9b></div><div class="left-text" data-v-c43adc9b>Our Mission</div></div><div class="right-box" data-v-c43adc9b><div class="text=[24px] font-[500] mb-8" data-v-c43adc9b> “Write Once, Deploy Anywhere.” </div> Lollipop harnesses Solana&#39;s robust infrastructure for high security and performance, <br data-v-c43adc9b>and integrating Shared Sequencing, Data Availability (DA), and Stateless Validation on <br data-v-c43adc9b>Polkadot Cloud. This synergy empowers SVM Network Extensions with superior <br data-v-c43adc9b> performance, enhanced decentralization, and seamless mobility across <br data-v-c43adc9b> Solana scosystem. </div></div></div><div class="flex justify-between mb-36" data-v-c43adc9b><div class="text-[60px] text-[#ffff] flex items-center" data-v-c43adc9b>videos</div><div class="videos-box" data-v-c43adc9b><div class="w-[700px] h-[360px] rounded-2xl bg-white mb-5" data-v-c43adc9b></div><div class="text-white text-[16px] font-[Space Grotesk]" data-v-c43adc9b> Lollipop’s Debut at Solana Hacker House in Hong Kong </div></div></div><div class="flex justify-center flex-wrap pb-6" data-v-c43adc9b><div class="w-[100%] text-center font-[800] text-white text-[60px] mb-10" data-v-c43adc9b> Latest news </div><div class="relative w-[100%] h-[790px]" data-v-c43adc9b><div class="absolute top-16 scale-150 w-[100%] h-[100%]" data-v-c43adc9b>`);
      _push(ssrRenderComponent(_component_aboutSplineBottom, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_carousel, {
        ref_key: "carousel",
        ref: carousel,
        height: "795px",
        "motion-blur": false,
        interval: 1e4,
        "indicator-position": "none",
        arrow: "never",
        onChange: changeIndex
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(5, (item) => {
              _push2(ssrRenderComponent(_component_el_carousel_item, {
                name: item,
                key: item
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-v-c43adc9b${_scopeId2}><div class="wrap-border justify-between flex items-center mb-7" data-v-c43adc9b${_scopeId2}><div class="w-[630px] h-[372px] bg-white rounded-[20px]" data-v-c43adc9b${_scopeId2}></div><div data-v-c43adc9b${_scopeId2}><div class="btn" data-v-c43adc9b${_scopeId2}>partnership announcement</div><div class="pt-12 pb-12" data-v-c43adc9b${_scopeId2}><div class="text-[42px] font-black leading-10 text-white text-center font-[Space Grotesk] mb-10" data-v-c43adc9b${_scopeId2}> You can customize on <br data-v-c43adc9b${_scopeId2}> and whatever you need </div><div style="${ssrRenderStyle({ "color": "rgba(255, 255, 255, 0.9)" })}" class="text-center text-[16px] font-[Space Grotesk]" data-v-c43adc9b${_scopeId2}> You can customize on and whatever you need，You can <br data-v-c43adc9b${_scopeId2}> customize,You can customize on and whatever <br data-v-c43adc9b${_scopeId2}> you need You can customize ... ... </div></div><div class="flex justify-between items-center" data-v-c43adc9b${_scopeId2}><div class="bottom-text" data-v-c43adc9b${_scopeId2}>Jun 09, 2024 6 min read</div><div class="bottom-text" data-v-c43adc9b${_scopeId2}>Read more</div></div></div></div><div class="flex justify-between items-center" data-v-c43adc9b${_scopeId2}><div class="wrap-border justify-between flex items-center" data-v-c43adc9b${_scopeId2}><div class="w-[284px] h-[274px] bg-white rounded-[20px] mr-5" data-v-c43adc9b${_scopeId2}></div><div data-v-c43adc9b${_scopeId2}><div class="btn" data-v-c43adc9b${_scopeId2}>partnership announcement</div><div class="pt-12 pb-12" data-v-c43adc9b${_scopeId2}><div class="text-[24px] font-black leading-7 text-white text-center font-[Space Grotesk] mb-5" data-v-c43adc9b${_scopeId2}> You can customize on <br data-v-c43adc9b${_scopeId2}> and whatever you need </div><div style="${ssrRenderStyle({ "color": "rgba(255, 255, 255, 0.9)" })}" class="text-center text-[12px] font-[Space Grotesk] leading-5" data-v-c43adc9b${_scopeId2}> You can customize,You can customize on and whatever you need <br data-v-c43adc9b${_scopeId2}> You can customize ... ... </div></div><div class="flex justify-between items-center" data-v-c43adc9b${_scopeId2}><div class="bottom-text" data-v-c43adc9b${_scopeId2}>Jun 09, 2024 6 min read</div><div class="bottom-text" data-v-c43adc9b${_scopeId2}>Read more</div></div></div></div><div class="wrap-border justify-between ml-5 flex items-center" data-v-c43adc9b${_scopeId2}><div class="w-[284px] h-[274px] bg-white rounded-[20px] mr-5" data-v-c43adc9b${_scopeId2}></div><div data-v-c43adc9b${_scopeId2}><div class="btn" data-v-c43adc9b${_scopeId2}>partnership announcement</div><div class="pt-12 pb-12" data-v-c43adc9b${_scopeId2}><div class="text-[24px] font-black leading-7 text-white text-center font-[Space Grotesk] mb-5" data-v-c43adc9b${_scopeId2}> You can customize on <br data-v-c43adc9b${_scopeId2}> and whatever you need </div><div style="${ssrRenderStyle({ "color": "rgba(255, 255, 255, 0.9)" })}" class="text-center text-[12px] font-[Space Grotesk] leading-5" data-v-c43adc9b${_scopeId2}> You can customize,You can customize on and whatever you need <br data-v-c43adc9b${_scopeId2}> You can customize ... ... </div></div><div class="flex justify-between items-center" data-v-c43adc9b${_scopeId2}><div class="bottom-text" data-v-c43adc9b${_scopeId2}>Jun 09, 2024 6 min read</div><div class="bottom-text" data-v-c43adc9b${_scopeId2}>Read more</div></div></div></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("div", { class: "wrap-border justify-between flex items-center mb-7" }, [
                          createVNode("div", { class: "w-[630px] h-[372px] bg-white rounded-[20px]" }),
                          createVNode("div", null, [
                            createVNode("div", { class: "btn" }, "partnership announcement"),
                            createVNode("div", { class: "pt-12 pb-12" }, [
                              createVNode("div", { class: "text-[42px] font-black leading-10 text-white text-center font-[Space Grotesk] mb-10" }, [
                                createTextVNode(" You can customize on "),
                                createVNode("br"),
                                createTextVNode(" and whatever you need ")
                              ]),
                              createVNode("div", {
                                style: { "color": "rgba(255, 255, 255, 0.9)" },
                                class: "text-center text-[16px] font-[Space Grotesk]"
                              }, [
                                createTextVNode(" You can customize on and whatever you need，You can "),
                                createVNode("br"),
                                createTextVNode(" customize,You can customize on and whatever "),
                                createVNode("br"),
                                createTextVNode(" you need You can customize ... ... ")
                              ])
                            ]),
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode("div", { class: "bottom-text" }, "Jun 09, 2024 6 min read"),
                              createVNode("div", { class: "bottom-text" }, "Read more")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "flex justify-between items-center" }, [
                          createVNode("div", { class: "wrap-border justify-between flex items-center" }, [
                            createVNode("div", { class: "w-[284px] h-[274px] bg-white rounded-[20px] mr-5" }),
                            createVNode("div", null, [
                              createVNode("div", { class: "btn" }, "partnership announcement"),
                              createVNode("div", { class: "pt-12 pb-12" }, [
                                createVNode("div", { class: "text-[24px] font-black leading-7 text-white text-center font-[Space Grotesk] mb-5" }, [
                                  createTextVNode(" You can customize on "),
                                  createVNode("br"),
                                  createTextVNode(" and whatever you need ")
                                ]),
                                createVNode("div", {
                                  style: { "color": "rgba(255, 255, 255, 0.9)" },
                                  class: "text-center text-[12px] font-[Space Grotesk] leading-5"
                                }, [
                                  createTextVNode(" You can customize,You can customize on and whatever you need "),
                                  createVNode("br"),
                                  createTextVNode(" You can customize ... ... ")
                                ])
                              ]),
                              createVNode("div", { class: "flex justify-between items-center" }, [
                                createVNode("div", { class: "bottom-text" }, "Jun 09, 2024 6 min read"),
                                createVNode("div", { class: "bottom-text" }, "Read more")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "wrap-border justify-between ml-5 flex items-center" }, [
                            createVNode("div", { class: "w-[284px] h-[274px] bg-white rounded-[20px] mr-5" }),
                            createVNode("div", null, [
                              createVNode("div", { class: "btn" }, "partnership announcement"),
                              createVNode("div", { class: "pt-12 pb-12" }, [
                                createVNode("div", { class: "text-[24px] font-black leading-7 text-white text-center font-[Space Grotesk] mb-5" }, [
                                  createTextVNode(" You can customize on "),
                                  createVNode("br"),
                                  createTextVNode(" and whatever you need ")
                                ]),
                                createVNode("div", {
                                  style: { "color": "rgba(255, 255, 255, 0.9)" },
                                  class: "text-center text-[12px] font-[Space Grotesk] leading-5"
                                }, [
                                  createTextVNode(" You can customize,You can customize on and whatever you need "),
                                  createVNode("br"),
                                  createTextVNode(" You can customize ... ... ")
                                ])
                              ]),
                              createVNode("div", { class: "flex justify-between items-center" }, [
                                createVNode("div", { class: "bottom-text" }, "Jun 09, 2024 6 min read"),
                                createVNode("div", { class: "bottom-text" }, "Read more")
                              ])
                            ])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(5, (item) => {
                return createVNode(_component_el_carousel_item, {
                  name: item,
                  key: item
                }, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("div", { class: "wrap-border justify-between flex items-center mb-7" }, [
                        createVNode("div", { class: "w-[630px] h-[372px] bg-white rounded-[20px]" }),
                        createVNode("div", null, [
                          createVNode("div", { class: "btn" }, "partnership announcement"),
                          createVNode("div", { class: "pt-12 pb-12" }, [
                            createVNode("div", { class: "text-[42px] font-black leading-10 text-white text-center font-[Space Grotesk] mb-10" }, [
                              createTextVNode(" You can customize on "),
                              createVNode("br"),
                              createTextVNode(" and whatever you need ")
                            ]),
                            createVNode("div", {
                              style: { "color": "rgba(255, 255, 255, 0.9)" },
                              class: "text-center text-[16px] font-[Space Grotesk]"
                            }, [
                              createTextVNode(" You can customize on and whatever you need，You can "),
                              createVNode("br"),
                              createTextVNode(" customize,You can customize on and whatever "),
                              createVNode("br"),
                              createTextVNode(" you need You can customize ... ... ")
                            ])
                          ]),
                          createVNode("div", { class: "flex justify-between items-center" }, [
                            createVNode("div", { class: "bottom-text" }, "Jun 09, 2024 6 min read"),
                            createVNode("div", { class: "bottom-text" }, "Read more")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-between items-center" }, [
                        createVNode("div", { class: "wrap-border justify-between flex items-center" }, [
                          createVNode("div", { class: "w-[284px] h-[274px] bg-white rounded-[20px] mr-5" }),
                          createVNode("div", null, [
                            createVNode("div", { class: "btn" }, "partnership announcement"),
                            createVNode("div", { class: "pt-12 pb-12" }, [
                              createVNode("div", { class: "text-[24px] font-black leading-7 text-white text-center font-[Space Grotesk] mb-5" }, [
                                createTextVNode(" You can customize on "),
                                createVNode("br"),
                                createTextVNode(" and whatever you need ")
                              ]),
                              createVNode("div", {
                                style: { "color": "rgba(255, 255, 255, 0.9)" },
                                class: "text-center text-[12px] font-[Space Grotesk] leading-5"
                              }, [
                                createTextVNode(" You can customize,You can customize on and whatever you need "),
                                createVNode("br"),
                                createTextVNode(" You can customize ... ... ")
                              ])
                            ]),
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode("div", { class: "bottom-text" }, "Jun 09, 2024 6 min read"),
                              createVNode("div", { class: "bottom-text" }, "Read more")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "wrap-border justify-between ml-5 flex items-center" }, [
                          createVNode("div", { class: "w-[284px] h-[274px] bg-white rounded-[20px] mr-5" }),
                          createVNode("div", null, [
                            createVNode("div", { class: "btn" }, "partnership announcement"),
                            createVNode("div", { class: "pt-12 pb-12" }, [
                              createVNode("div", { class: "text-[24px] font-black leading-7 text-white text-center font-[Space Grotesk] mb-5" }, [
                                createTextVNode(" You can customize on "),
                                createVNode("br"),
                                createTextVNode(" and whatever you need ")
                              ]),
                              createVNode("div", {
                                style: { "color": "rgba(255, 255, 255, 0.9)" },
                                class: "text-center text-[12px] font-[Space Grotesk] leading-5"
                              }, [
                                createTextVNode(" You can customize,You can customize on and whatever you need "),
                                createVNode("br"),
                                createTextVNode(" You can customize ... ... ")
                              ])
                            ]),
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode("div", { class: "bottom-text" }, "Jun 09, 2024 6 min read"),
                              createVNode("div", { class: "bottom-text" }, "Read more")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1032, ["name"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute bottom-0 left-[50%] ml-[-104px] w-[208px]" data-v-c43adc9b><div class="ml-[auto] mr-[auto] flex justify-center items-center" data-v-c43adc9b><div class="w-[30px] bg-[#5A0A93] svg-border rounded-full h-[30px]" data-v-c43adc9b>`);
      _push(ssrRenderComponent(_component_svgIcon, {
        color: "#FFFFFF",
        name: "Button"
      }, null, _parent));
      _push(`</div><ul class="flex justify-between mr-3 ml-3" data-v-c43adc9b><!--[-->`);
      ssrRenderList(5, (item) => {
        _push(`<li class="${ssrRenderClass([item == currentIndex.value ? "bg-white" : "", "bg-gray-400 w-3 h-3 rounded-full mr-2"])}" data-v-c43adc9b></li>`);
      });
      _push(`<!--]--></ul><div class="w-[30px] bg-[#5A0A93] svg-border rounded-full h-[30px]" data-v-c43adc9b>`);
      _push(ssrRenderComponent(_component_svgIcon, {
        color: "#FFFFFF",
        name: "Button-1"
      }, null, _parent));
      _push(`</div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c43adc9b"]]);
export {
  about as default
};
//# sourceMappingURL=about-xZdyH82A.js.map
