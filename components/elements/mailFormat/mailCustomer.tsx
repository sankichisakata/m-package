
export default function MailCustomer () {

return(`
<head>
    <meta charset="utf-8"> <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no"> <!-- Tell iOS not to automatically link certain text strings. -->
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title></title> <!--   The title tag shows in email notifications, like Android 4.4. -->

    <!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->
    <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->

    <!-- Web Font / @font-face : BEGIN -->
    <!-- NOTE: If web fonts are not required, lines 23 - 41 can be safely removed. -->

    <!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->
    <!--[if mso]>
        <style>
            * {
                font-family: sans-serif !important;
            }
        </style>
    <![endif]-->

    <!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->
    <!--[if !mso]><!-->
    <!-- insert web font reference, eg: <link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'> -->
    <!--<![endif]-->

    <!-- Web Font / @font-face : END -->

    <!-- CSS Reset : BEGIN -->
    <style>

        /* What it does: Tells the email client that only light styles are provided but the client can transform them to dark. A duplicate of meta color-scheme meta tag above. */
        :root {
          color-scheme: light;
          supported-color-schemes: light;
        }

        /* What it does: Remove spaces around the email design added by some email clients. */
        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            height: 100% !important;
            width: 100% !important;
        }

        /* What it does: Stops email clients resizing small text. */
        * {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        /* What it does: Centers email on Android 4.4 */
        div[style*="margin: 16px 0"] {
            margin: 0 !important;
        }

        /* What it does: forces Samsung Android mail clients to use the entire viewport */
        #MessageViewBody, #MessageWebViewDiv{
            width: 100% !important;
        }

        /* What it does: Stops Outlook from adding extra spacing to tables. */
        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }

        /* What it does: Fixes webkit padding issue. */
        table {
            border-spacing: 0 !important;
            border-collapse: collapse !important;
            table-layout: fixed !important;
            margin: 0 auto !important;
        }

        /* What it does: Uses a better rendering method when resizing images in IE. */
        img {
            -ms-interpolation-mode:bicubic;
        }

        /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
        a {
            text-decoration: none;
        }

        /* What it does: A work-around for email clients meddling in triggered links. */
        a[x-apple-data-detectors],  /* iOS */
        .unstyle-auto-detected-links a,
        .aBn {
            border-bottom: 0 !important;
            cursor: default !important;
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
        .a6S {
            display: none !important;
            opacity: 0.01 !important;
        }

        /* What it does: Prevents Gmail from changing the text color in conversation threads. */
        .im {
            color: inherit !important;
        }

        /* If the above doesn't work, add a .g-img class to any image in question. */
        img.g-img + div {
            display: none !important;
        }

        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
        /* Create one of these media queries for each additional viewport size you'd like to fix */

        /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
            u ~ div .email-container {
                min-width: 320px !important;
            }
        }
        /* iPhone 6, 6S, 7, 8, and X */
        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
            u ~ div .email-container {
                min-width: 375px !important;
            }
        }
        /* iPhone 6+, 7+, and 8+ */
        @media only screen and (min-device-width: 414px) {
            u ~ div .email-container {
                min-width: 414px !important;
            }
        }

    </style>
    <!-- CSS Reset : END -->

    <!-- Progressive Enhancements : BEGIN -->
    <style>

      /* What it does: Hover styles for buttons */
      .button-td,
      .button-a {
          transition: all 100ms ease-in;
      }


      .button-td-primary:hover,
      .button-a-primary:hover {
          background: #555555 !important;
          border-color: #555555 !important;
      }
      .button-td-logo:hover,
      .button-a-logo:hover {
          background: #b5b5b5 !important;
          border-color: #b5b5b5 !important;
      }

      /* Media Queries */
      @media screen and (max-width: 600px) {

          /* What it does: Adjust typography on small screens to improve readability */
          .email-container p {
              font-size: 13px !important;
          }

          .small-text p{
            font-size: 12px !important;
          }

      }

    </style>
    <!-- Progressive Enhancements : END -->

    </head>
    <!--
      The email background color (#222222) is defined in three places:
      1. body tag: for most email clients
      2. center tag: for Gmail and Inbox mobile apps and web versions of Gmail, GSuite, Inbox, Yahoo, AOL, Libero, Comcast, freenet, Mail.ru, Orange.fr
      3. mso conditional: For Windows 10 Mail
    -->





    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">


    <!--******************************** Email.js 以下から ********************************-->


    <!-- 管理者 受信メール -first -->

      <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #ffffff;">
        <!--[if mso | IE]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #222222;">
        <tr>
        <td>
        <![endif]-->

            <!-- Visually Hidden Preheader Text : BEGIN -->

            <!-- <div style="max-height:0; overflow:hidden; mso-hide:all;" aria-hidden="true">
                (Optional) This text will appear in the inbox preview, but not the email body. It can be used to supplement the email subject line or even summarize the email's contents. Extended text preheaders (~490 characters) seems like a better UX for anyone using a screenreader or voice-command apps like Siri to dictate the contents of an email. If this text is not included, email clients will automatically populate it using the text (including image alt text) at the start of the email's body.
            </div> -->

            <!-- Visually Hidden Preheader Text : END -->

            <!-- Preview Text Spacing Hack : BEGIN -->

            <!-- <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
              &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
            </div> -->

            <!-- Preview Text Spacing Hack : END -->

            <!--
                Set the email width. Defined in two places:
                1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 600px.
                2. MSO tags for Desktop Windows Outlook enforce a 600px width.
            -->
            <div style="max-width: 600px; margin: 0 auto;">


                <!------------------- Email Header : BEGIN ------------------->
                <!-- ロゴボタン -start -->
                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"  style="margin: auto;">
                  
                  <tr>
                    <td style="background-color: #ffffff; margin: auto;">
                      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: auto;">

                        <tr>
                            <td style=" padding: 40px 0 30px 0; text-align: center">
                              <a class="button-a button-a-logo" href="https://m-package.vercel.app/" 
                                style="padding: 20px 10px; font-family: sans-serif; line-height: 0; font-size: 18px; font-weight: bold;  color: #555555; text-decoration: none; display: block; border-radius: 4px;">
                                ダンボールのエムパッケージ
                              </a>
                                <!-- <img src="https://via.placeholder.com/200x50" width="200" height="50" alt="alt_text" border="0" style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555;"> -->
                            </td>
                        </tr>

                      </table>
                    </td>
                  </tr>

                </table>
                <!-- ロゴボタン -end -->
                <!------------------- Email Header : END ------------------->
                


                <!-- オートボーダー -start -->
                <!-- 余白なし -->
                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                  <tr>
                    <td style="background-color: #ffffff; margin: auto;">
                      <table cellspacing="0" cellpadding="0" border="0" width="95%"  style="margin: auto;">
                  
                        <tr>
                          <td style="font-size:0;border-bottom:1px solid #555555;" height="0"></td>
                        </tr>
                        <tr>
                          <td style="font-size:0;" height="0"></td>
                        </tr>

                      </table>
                    </td>
                  </tr>
                </table>
                <!-- オートボーダー -end -->




              <!------------------- Email Body : BEGIN ------------------->
                    
              <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #826565; margin: auto;">



                      <!-- Hero Image, Flush : BEGIN -->
                      <!-- <tr>
                          <td style="background-color: #ffffff;">
                              <img src="https://via.placeholder.com/1200x600" width="600" height="" alt="alt_text" border="0" style="width: 100%; max-width: 600px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555; margin: auto; display: block;" class="g-img">
                          </td>
                      </tr> -->
                      <!-- Hero Image, Flush : END -->




                      <!-- 注意書き -start -->
                      <tr>
                        <td style="background-color: #ffffff; padding: 30px 0;">
                          <table ellspacing="0" cellpadding="0" border="0" width="90%" style="background-color: #ffffff; margin: auto;">

                          <tr>
                            <td style="text-align: center; border:1px solid #555555; padding: 15px; font-family: sans-serif; font-size: 9px; font-weight: bold; color: #555555;">
                              <span style="margin: 0;">※本メールはシステムにより自動送信しております。</span>
                              <br>
                              <br><sapn style="margin: 0;">このメールにお心当たりがない場合はお手数ではございますが、</span>
                              <br><span style="margin: 0;">${ process.env.NEXT_PUBLIC_MAIL_ADDRESS }までご連絡いただき、</span>
                              <br><span style="margin: 0;">このメールの破棄をお願い致します。</span>
                            </td>
                          </tr>

                          </table>

                        </td>
                      </tr>
                      <!-- 注意書き -end -->


                      <!-- 問合せ日時 -start -->
                      <tr>
                        <td style=" background-color: #ffffff; padding: 10px 0;">
                          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="95%">
                            <tr>
                              <td style="text-align: center; font-family: sans-serif; font-size: 12px; font-weight: bold; color: #555555;">
                                <p class="" style="margin: 0;">【&nbsp;問合せ日時：${ data.time }&nbsp;】</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <!-- 問合せ日時 -end -->

                      <!-- 問い合わせ受付通知 -start -->
                      <tr>
                        <td style="background-color: #ffffff; padding: 10px 0;">
                          <table align="center" ellspacing="0" cellpadding="0" border="0" width="90%" style=" margin: auto;">

                            <tr>
                              <td style="text-align: left; font-family: sans-serif; font-size: 12px; font-weight: bold; color: #555555;">
                                  <p style="margin: 0;">${ data.company }</p>
                                  <p style="margin: 0;">${ data.name }&nbsp様</p>
                                  <br>
                                  <p style="margin: 0;">この度は、お問い合わせいただきまして誠にありがとうございます。</p>
                                  <p style="margin: 0;">お問い合わせ内容を確認次第、ご連絡致します。</p>
                                  <p style="margin: 0;">今しばらくお待ち下さいませ。</p>
                              </td>
                            </tr>

                          </table>

                        </td>
                      </tr>
                      <!-- 問い合わせ受付通知 -end -->

                      <!-- お急ぎ時連絡先 -start -->
                      <tr>
                        <td style="background-color: #ffffff; padding: 30px 0 10px 0;">
                          <table ellspacing="0" cellpadding="0" border="0" width="90%" style=" margin: auto;">

                            <tr>
                              <td style="text-align: center; font-family: sans-serif; font-size: 12px; font-weight: bold; color: #555555;">
                                  <p style="margin: 0;">なお、お急ぎのお客様は下記までご連絡ください。</p>
                                  <p style="margin: 0; padding: 5px 0; ">□&nbsp;048-287-8055（営業時間&emsp;9:00&nbsp;〜&nbsp;17:30）</p>
                                  <p style="margin: 0;">何卒よろしくお願い申し上げます。</p>
                              </td>
                            </tr>

                          </table>

                        </td>
                      </tr>
                      <!-- お急ぎ時連絡先 -end -->

                      <!-- 内容案内 -start -->
                      <tr>
                        <td style=" background-color: #ffffff; padding: 30px 0 30px 0;">
                          <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="90%">
                            <tr>
                              <td style="text-align: left; font-family: sans-serif; font-size: 12px; font-weight: bold; color: #555555;">
                                <p style="margin: 0;">以下の内容にてお問い合わせを受け付けました。</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <!-- 内容案内-end -->

                      <!-- フォーム内容 -start -->
                      <tr>
                        <td style="background-color: #ffffff; padding: 0 0 0 0;">
                          <table align="center" width="100%" ellspacing="0" cellpadding="0" border="0" style=" margin: auto;">
                          
                            <tr>
                              <td class="email-container" style=" font-family: sans-serif; color: #555555;">
                                <table align="center" width="95%" style="border: 1px solid #555555;" border="0">



                                  <!-- お問い合わせの種類 -start -->
                                  <tr>
                                    <td style=" background-color: #ffffff; padding: 35px 20px 20px 20px;">
                                      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="95%">
                                        <tr>
                                          <td style="text-align: center; font-family: sans-serif; font-size: 12px; font-weight: bold; color: #555555;">
                                            <p class="" style="margin: 0;">お問い合わせ</p>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <!-- お問い合わせの種類 -end -->

                                    <tr>
                                      <td style="border-radius: 10px; padding: 10px 20px; font-family: sans-serif; font-size: 12px; color: #555555;">
                                          <p style="margin: 0; padding-bottom: 5px; font-weight: bold; color: #7c7c7c;">会社名</p>
                                          <p style="margin: 0;">
                                            &emsp;
                                            <span style="border-bottom: 0.5px solid #989898; font-weight: bold; padding-bottom: 2px;">&nbsp;${ data.company }&nbsp;
                                            </span>
                                          </p>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td style=" border-radius: 10px; padding: 20px 20px 20px 20px; font-family: sans-serif; font-size: 12px; color: #555555;">
                                          <p style="margin: 0; padding-bottom: 5px; font-weight: bold; color: #7c7c7c;">お名前</p>
                                          <p style="margin: 0;">
                                            &emsp;
                                            <span style="border-bottom: 0.5px solid #989898; font-weight: bold; padding-bottom: 2px;">&nbsp;${ data.name }&nbsp;
                                            </span>
                                          </p>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td style=" border-radius: 10px; padding: 20px 20px 20px 20px; font-family: sans-serif; font-size: 12px; color: #555555;">
                                          <p style="margin: 0; padding-bottom: 5px; font-weight: bold; color: #7c7c7c;">お名前（フリガナ）</p>
                                          <p style="margin: 0;">
                                            &emsp;
                                            <span style="border-bottom: 0.5px solid #989898; font-weight: bold; padding-bottom: 2px;">&nbsp;${ data.phonetic }&nbsp;
                                            </span>
                                          </p>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td style="border-radius: 10px; padding: 20px 20px 20px 20px; font-family: sans-serif; font-size: 12px; color: #555555;">
                                          <p style="margin: 0; padding-bottom: 5px; font-weight: bold; color: #7c7c7c;">電話番号</p>
                                          <p style="margin: 0;">
                                            &emsp;
                                              <span style="border-bottom: 0.5px solid #989898; font-weight: bold; padding-bottom: 2px;">&nbsp;${ data.phone }&nbsp;
                                              </span>
                                            </p>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td style="border-radius: 10px; padding: 20px 20px 20px 20px; font-family: sans-serif; font-size: 12px; color: #555555;">
                                          <p style="margin: 0; padding-bottom: 5px; font-weight: bold; color: #7c7c7c;">メールアドレス</p>
                                          <p style="margin: 0;">
                                          &emsp;
                                            <span style="border-bottom: 0.5px solid #989898; font-weight: bold; padding-bottom: 2px;">&nbsp;${ data.email }&nbsp;
                                            </span>
                                          </p>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td style="border-radius: 10px; padding: 20px 20px 35px 20px; font-family: sans-serif; font-size: 12px; color: #555555;">
                                          <p style="margin: 0; padding-bottom: 5px; font-weight: bold; color: #7c7c7c;">お問い合わせ内容</p>
                                          <p style="margin: 0;">
                                            &emsp;
                                            <span style="border-bottom: 0.5px solid #989898; font-weight: bold; padding-bottom: 2px; line-height: 2;">&nbsp;${ data.contents }&nbsp;
                                            </span>
                                          </p>
                                      </td>
                                    </tr>


                                </table>
                              </td>
                            </tr>
                          
                          </table>
                        </td>
                      </tr>
                      <!-- フォーム内容 -start -->


                    </table>

              <!------------------- Email Body : END ------------------->




              <!------------------- Email Footer : BEGIN ------------------->


              <!-- オートボーダー -start -->
              <!-- 上に余白20px -start -->
              <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style=" margin: auto;">
                <tr>
                  <td style="padding: 20px 0 0 0; background-color: #ffffff; margin: auto;">
                    <table cellspacing="0" cellpadding="0" border="0" width="95%"  style="margin: auto;">
                
                      <tr>
                        <td style="font-size:0;border-bottom: 0.3px solid #555555;" height="0"></td>
                      </tr>
                      <tr>
                        <td style="font-size:0;" height="0"></td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>
              <!-- オートボーダー -end -->


              <!-- フッター会社名ボタン -start -->
              <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                      <td style="background-color: #ffffff;  padding: 30px 0;">

                        <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style=" margin: auto;">
                          <tr>
                              <td class="button-td button-td-logo" style=" border-radius: 4px;">
                                  <a class="button-a button-a-logo" href="https://m-package.vercel.app/" 
                                  style=" padding: 20px 20px; font-family: sans-serif; line-height: 0; font-size: 14px; font-weight: bold; text-decoration: none; color: #7c7c7c; display: block; border-radius: 4px;">
                                  株式会社エムパッケージ
                                  </a>
                              </td>
                          </tr>
                      </table>
                        
                    </td>
                  </tr>
              </table>
              <!-- フッター社名ボタン -end -->

                
              <!-- 住所横並び -start -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style=" margin: auto;">
                <tr>
                    <td style="background-color: #ffffff; padding: 0 0 20px 0; font-family: sans-serif; text-align: center; ">

                      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="90%">
                        <tr>
                          <td>

                            <table align="left" border="0" width="50%">
                              <tr>
                                <td style=" font-size: 10px; font-weight: bold; color: #7c7c7c; padding: 0 20px; text-align: left;" class="unstyle-auto-detected-links">
                                  <span style="margin: 0;">〒332-0006 埼玉県川口市末広2-7-15</span>
                                  <br><span style="margin: 0;">048-287-8055</span>
                                </td>
                              </tr>
                            </table>


                            <table align="left" border="0" width="50%">
                              <tr>
                                <td style=" font-size: 10px; font-weight: bold; color: #7c7c7c; padding: 0 20px; text-align: left;" class="unstyle-auto-detected-links">
                                  <span style="margin: 0;">2-7-15, Suehiro, Kawaguchi-si, Saitama, 332-0006</span>
                                  <br><span style="margin: 0;">(+81) 48-287-8055</span>
                                </td>
                              </tr>
                            </table>

                          </td>
                        </tr>
                      </table>
                      
                      
                    </td>
                </tr>
              </table>
              <!-- 住所横並び -end -->




              <!-- コピーライト -start -->
              <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="text-align: center; padding: 0 0 50px 0; background-color: #ffffff;">
                    <span style="color: #7c7c7c; font-family: sans-serif; font-size: 10px;" class="unstyle-auto-detected-links">
                      ©︎ 株式会社エムパッケージ
                    </span>
                  </td>
                </tr>
              </table>
              <!-- コピーライト -end -->

                <!------------------- Email Footer : END ------------------->

    <!-- 管理者 受信メール -end -->


    <!--******************************** Email.js 以上まで ********************************-->


    </div>


    </body>
`
)

}