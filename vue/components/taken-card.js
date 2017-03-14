(function(window){
    window.TakenCardComponent =
        {
            template:'<div id="takenCard" class="shopping-card">'+
            '<div class="title">'+
                '<div>我要办卡</div>'+
                    '<router-link to="/card-pay" class="card-pay-Link">'+
                        '油卡充值'+
                    '</router-link>'+
                '</div>'+
            '<div class="content">'+
            '<div>中石油加油卡</div>'+
            '<div>持续享受97折充值+98折加油</div>'+
            '<div class="pre-store">'+
            '<div class="title">'+
            '<div>预</div>'+
            '<div>存</div>'+
            '</div>'+
            '<div class="calculate">'+
            '<span>200</span>元&nbsp;/&nbsp;张'+
            '</div>'+
            '<div class="result">'+
            '<span>194</span>元'+
            '</div>'+
            '</div>'+

            '<div class="pre-store total">'+
            '<div class="title">'+
            '<div>数</div>'+
            '<div>量</div>'+
            '</div>'+
            '<div class="calculate">'+
            '<div class="sub">-</div>'+
            '<div class="content">1</div>'+
            '<div class="plus">+</div>'+
            '</div>'+
            '<div class="result">'+
            '<span>194</span>元'+
            '</div>'+
            '</div>'+

            '<div class="pre-store express">'+
            '<div class="title">'+
            '<div>顺</div>'+
            '<div>丰</div>'+
            '<div>快</div>'+
            '<div>递</div>'+
            '</div>'+
            '<div class="calculate">'+

            '</div>'+
            '<div class="result">'+
            '<span>20</span>元'+
            '</div>'+
            '</div>'+

            '<div class="pre-store express addr">'+
            '<div class="title">'+
            '<div>配</div>'+
            '<div>送</div>'+
            '<div>地</div>'+
            '<div>址</div>'+
            '</div>'+
            '<div class="calculate">'+
            '请填写配送地址'+
            '</div>'+
            '<div class="result">'+

            '</div>'+
            '</div>'+

            '<div class="pre-store express accept">'+
            '<div class="title">'+
            '<div class="accepted">'+
            '<input id="acceptedInput" type="checkbox" checked title="是否同意协议">'+
            '<div class="icon"></div>'+
            '</div>'+

            '</div>'+
            '<div class="calculate">'+
            '<label for="acceptedInput">'+
            '我已阅读并同意'+
            '</label>'+
            '<a>《用户协议》</a>'+
            '</div>'+
            '<div class="result">'+
            '</div>'+
            '</div>'+

            '<div class="apply-card-instruct">'+
            '<p class="title">办卡须知</p>'+
            '<ol>'+
            '<li>在本页面新办油卡，每张卡需预存500元，新办卡预存及后续充值均享受97折优惠。</li>'+
            '<li>办卡及充值可通过支付宝支付，暂不支持其他支付方式。</li>'+
            '<li>我司将以快递形式将油卡寄出，请在购卡时完整、准确填写配送信息。</li>'+
            '<li>油卡将通过顺丰速递寄出，快递费用由客户自行承担（下单时一并支付）。</li>'+
            '<li>油卡未设置初始密码，为保证资金安全，请客户收到油卡后，及时到四川省任意中石油加油站完成密码设置。</li>'+
            '<li>油卡卡内金额，需通过圈存后才能进行消费，请客户收到油卡后，及时到任意中石油加油站进行圈存。</li>'+
            '</ol>'+
            '<div>'+
            '<img class="service-img" src="./images/icon_service.png">'+
            '<span class="server">'+
            '客服 028-65260660'+
            '</span>'+
            '</div>'+
            '</div>'+


            '</div>'+

            '<footer>'+
            '<div>'+
            '<span>'+
            '214'+
            '<b>元</b>'+
            '</span>'+

            '</div>'+
            '<div>'+
            '确认支付'+
            '</div>'+
            '</footer>'+

            '</div>'};

})(window);