/**
 * Created by forli on 2017/3/10.
 */
(function(window){
    window.CardPay = {
        template:'<div id="cardPay" class="shopping-card">'+
            '<div class="title">'+
                '<div>加油卡充值</div>'+
                    '<router-link to="/card-record" class="card-pay-Link">'+
                        '充值记录'+
                    '</router-link>'+
                '</div>'+
                '<div class="content">'+
                    '<div class="search-wrapper">' +
                        '<img class="logo" src="./images/pay-logo.png" />'+
                        '<input placeholder="请输入加油卡卡号" type="text" />'+
                    '</div>'+

                    '<div class="pay-sum">'+
                        '<div class="title">请选择充值金额</div>'+
                        '<div class="item selected">'+
                            '<div>1000</div>'+
                            '<div class="price">售970元</div>'+
                            '<img src="./images/icon_money_hot.png" />'+
                        '</div>'+
                        '<div class="item">'+
                            '<div>500</div>'+
                            '<div class="price">售485元</div>'+
                        '</div>'+
                        '<div class="item">'+
                            '<div>2000</div>'+
                            '<div class="price">售1940元</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="apply-card-instruct">'+
                        '<p class="title">充值说明</p>'+
                        '<ol>'+
                            '<li>在本页面新办油卡，每张卡需预存500元，新办卡预存及后续充值均享受97折优惠。</li>'+
                            '<li>办卡及充值可通过支付宝支付，暂不支持其他支付方式。</li>'+
                            '<li>我司将以快递形式将油卡寄出，请在购卡时完整、准确填写配送信息。</li>'+
                            '<li>油卡将通过顺丰速递寄出，快递费用由客户自行承担（下单时一并支付）。</li>'+
                            '<li>油卡未设置初始密码，为保证资金安全，请客户收到油卡后，及时到四川省任意中石油加油站完成密码设置。</li>'+
                            '<li>油卡卡内金额，需通过圈存后才能进行消费，请客户收到油卡后，及时到任意中石油加油站进行圈存。</li>'+
                        '</ol>'+
                        '<div class="services">'+
                            '<img src="./images/icon_service.png" class="service-img">'+
                            '<span class="server">客服 028-65260660</span>'+
                        '</div>'+
                    '</div>'+

                '</div>'+
            '</div>'+
        '</div>'
    }
})(window);