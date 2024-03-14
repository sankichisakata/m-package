import { SlideInLeft } from "@/components/elements/observer/slideInLeft";

export default function EquipmentList() {
  return (
    <div
      className="
            bg-gray-100
            w-full h-full
            py-14 md:py-20
            flex flex-col justify-center items-center
            "
    >
      <div className="w-11/12 mx-auto">
        <div
          className="
                    w-full h-auto p-2 md:p-4 mx-auto
                    flex flex-col justify-center items-center
                    border-[0.2rem] border-sub-color
                    text-sub-color [font-size:_clamp(1.2rem,3vw,2.5rem)] font-bold
                    "
        >
          <p>設備一覧</p>
        </div>
        <div
          className="
                    bg-sub-color
                    w-full h-auto p-2 md:p-4 mx-auto
                    flex flex-col justify-center items-center
                    border-[0.2rem] border-sub-color
                    text-white [font-size:_clamp(1.2rem,3vw,2.5rem)] font-bold
                    "
        >
          <p>お客様の製品を技術で丁寧に。</p>
        </div>
      </div>

      <div
        className="
                w-full h-auto 
                flex justify-center items-center 
                "
      >
        {/* テーブル */}
        <div
          className="
                    w-11/12 xl:w-9/12 h-auto py-10
                    flex flex-col md:flex-row flex-wrap justify-start items-center gap-2 md:gap-0
                    text-xs md:text-base lg:text-xl font-bold
                    "
        >
          {/* リスト① */}
          <div
            className="
                        rounded-md
                        w-full lg:w-1/2 
                        "
          >
            <SlideInLeft>
              <div
                className="
                            bg-white m-5
                            rounded-sm shadow-md
                            "
              >
                <div
                  className="
                                overflow-hidden
                                "
                >
                  <div
                    className="
                                    w-full h-[16rem] md:h-[20rem] lg:h-[24rem]
                                    aspect-[4/6]
                                    rounded-t-sm
                                    bg-PrinterSlotter bg-center bg-cover
                                    flex justify-center items-center
                                    "
                  ></div>
                </div>
                <div
                  className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-3 md:gap-5
                                "
                >
                  <p
                    className="
                                    flex justify-center items-center
                                    pl-2 md:pl-3
                                    border-l-[0.2rem] border-sub-color
                                    text-sub-color text-base md:text-lg lg:text-xl font-bold
                                    "
                  >
                    プリンタースロッター
                  </p>
                  <div className="">
                    <p>
                      自由に動く刃物により希望の寸法に切り込みと罫線を入れる事ができます。
                    </p>
                    <p>
                      一般的なA式(みかん箱タイプ)に裁断を行ったり、同時にカラー印刷(2色)ができ、商品名やロゴなど細かい印刷が可能です。
                    </p>
                  </div>
                </div>
              </div>
            </SlideInLeft>
          </div>

          {/* リスト② */}
          <div
            className="
                        rounded-md
                        w-full lg:w-1/2 
                        "
          >
            <SlideInLeft>
              <div
                className="
                            bg-white m-5
                            rounded-sm shadow-md
                            "
              >
                <div
                  className="
                                overflow-hidden
                                "
                >
                  <div
                    className="
                                    w-full h-[16rem] md:h-[20rem] lg:h-[24rem]
                                    aspect-[4/6]
                                    rounded-t-sm
                                    bg-RotarySlitterBig bg-center bg-cover
                                    flex justify-center items-center
                                    "
                  ></div>
                </div>
                <div
                  className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-3 md:gap-5
                                "
                >
                  <p
                    className="
                                   flex justify-center items-center
                                   pl-2 md:pl-3
                                   border-l-[0.2rem] border-sub-color
                                    text-sub-color text-base md:text-lg lg:text-xl font-bold
                                    "
                  >
                    ロータリースリッター
                  </p>
                  <div className="">
                    <p>
                      板状の段ボールシートに罫線を入れたり、パット・仕切りなど指定の寸法に断裁することができます。
                    </p>
                    <p>
                      また、大小のロータリーパンチを使用して小ロットや特殊な形状の箱を作ることもできます。
                    </p>
                  </div>
                </div>
              </div>
            </SlideInLeft>
          </div>

          {/* リスト③ */}
          <div
            className="
                        rounded-md
                        w-full lg:w-1/2 
                        "
          >
            <SlideInLeft>
              <div
                className="
                            bg-white m-5
                            rounded-sm shadow-md
                            "
              >
                <div
                  className="
                                overflow-hidden
                                "
                >
                  <div
                    className="
                                    w-full h-[16rem] md:h-[20rem] lg:h-[24rem]
                                    aspect-[4/6]
                                    rounded-t-sm
                                    bg-Punch bg-center bg-cover
                                    flex justify-center items-center
                                    "
                  ></div>
                </div>
                <div
                  className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-3 md:gap-5
                                "
                >
                  <p
                    className="
                                    flex justify-center items-center
                                    pl-2 md:pl-3
                                    border-l-[0.2rem] border-sub-color
                                    text-sub-color text-base md:text-lg lg:text-xl font-bold
                                    "
                  >
                    パンチ
                  </p>
                  <div className="">
                    <p>罫線に合わせて切り込みを入れることができます。</p>
                  </div>
                </div>
              </div>
            </SlideInLeft>
          </div>

          {/* リスト④ */}
          <div
            className="
                        rounded-md
                        w-full lg:w-1/2 
                        "
          >
            <SlideInLeft>
              <div
                className="
                            bg-white m-5
                            rounded-sm shadow-md
                            "
              >
                <div
                  className="
                                overflow-hidden
                                "
                >
                  <div
                    className="
                                    w-full h-[16rem] md:h-[20rem] lg:h-[24rem]
                                    aspect-[4/6]
                                    rounded-t-sm
                                    bg-SemiAutoGluer bg-center bg-cover
                                    flex justify-center items-center
                                    "
                  ></div>
                </div>
                <div
                  className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-3 md:gap-5
                                "
                >
                  <p
                    className="
                                    flex justify-center items-center
                                    pl-2 md:pl-3
                                    border-l-[0.2rem] border-sub-color
                                    text-sub-color text-base md:text-lg lg:text-xl font-bold
                                    "
                  >
                    セミオートグルアー
                  </p>
                  <div className="">
                    <p>裁断、印刷した段ボールの接合部を糊付けします。</p>
                  </div>
                </div>
              </div>
            </SlideInLeft>
          </div>

          {/* リスト⑤ */}
          <div
            className="
                        rounded-md
                        w-full lg:w-1/2
                        "
          >
            <SlideInLeft>
              <div
                className="
                            bg-white m-5
                            rounded-sm shadow-md
                            "
              >
                <div
                  className="
                                overflow-hidden
                                "
                >
                  <div
                    className="
                                    w-full h-[16rem] md:h-[20rem] lg:h-[24rem]
                                    aspect-[4/6]
                                    rounded-t-sm
                                    bg-ArmStitcher bg-center bg-cover
                                    flex justify-center items-center
                                    "
                  ></div>
                </div>
                <div
                  className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-3 md:gap-5
                                "
                >
                  <p
                    className="
                                    flex justify-center items-center
                                    pl-2 md:pl-3
                                    border-l-[0.2rem] border-sub-color
                                    text-sub-color text-base md:text-lg lg:text-xl font-bold                                   
                                    "
                  >
                    アームステッチャー
                  </p>
                  <div className="">
                    <p>段ボールケースの接合部をワイヤーで留める機械です。</p>
                  </div>
                </div>
              </div>
            </SlideInLeft>
          </div>

          {/* リスト⑥ */}
          <div
            className="
                        rounded-md
                        w-full lg:w-1/2
                        "
          >
            <SlideInLeft>
              <div
                className="
                            bg-white m-5
                            rounded-sm shadow-md
                            "
              >
                <div
                  className="
                                overflow-hidden
                                "
                >
                  <div
                    className="
                                    w-full h-[16rem] md:h-[20rem] lg:h-[24rem]
                                    aspect-[4/6]
                                    rounded-t-sm
                                    bg-BikkuPunching bg-center bg-cover
                                    flex justify-center items-center
                                    "
                  ></div>
                </div>
                <div
                  className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-3 md:gap-5
                                "
                >
                  <p
                    className="
                                    flex justify-center items-center
                                    pl-2 md:pl-3
                                    border-l-[0.2rem] border-sub-color
                                    text-sub-color text-base md:text-lg lg:text-xl font-bold                                   
                                    "
                  >
                    ビク抜打ち機
                  </p>
                  <div className="">
                    <p>
                      抜き型を使用して展開図の形に抜き、パッケージを作成します。
                    </p>
                    <p>
                      直線だけでなく曲線、ミシン目などを組み合わせてキャラメル箱、底ワンタッチ箱、N式などの組み立て式の箱や色々な形の台紙などが作成できます。
                    </p>
                  </div>
                </div>
              </div>
            </SlideInLeft>
          </div>
        </div>
      </div>
    </div>
  );
}
