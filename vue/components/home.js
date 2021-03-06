(function(window){
    window.HomeComponent =
        {
                template:'<div id="container">'+
                '<img src="images/main-bg.png" alt="中国石油" id="background">'+
                '<img src="images/logo.png" alt="中国石油" id="logo">'+
                '<div class="advertise">'+
                    '<div>中石油加油卡</div>'+
                    '<div>充值97折+加油98折卡</div>'+
                '</div>'+

                '<div class="func-btn">'+
                    '<router-link class="apply-card-btn" to="/taken-card">'+
                        '立即办卡'+
                    '</router-link>'+
                    '<router-link class="deposit-card-btn" to="/card-pay">'+
                        '油卡充值'+
                    '</router-link>'+
                '</div>'+

                '<div class="card-items">'+
                '<div class="item">'+
                '<label for="cardIntroduction">油卡说明</label>'+
                '<input type="checkbox" id="cardIntroduction" checked="checked">'+
                '<ol class="content">'+
                    '<li>本卡为中石油车金服加油卡副卡，可在四川省范围内任意中石油加油站使用。</li>'+
                    '<li>本卡通过本页面充值可享受充值折扣优惠，持卡至中石油加油站充值不享受充值折扣。</li>'+
                    '<li>本卡充值持续享受97折优惠；加油享受98折优惠，合计加油优惠为95折。</li>'+
                    '<li>本卡在四川省外中石油加油站使用，将不享受加油优惠。</li>'+
                    '<li>本卡为加油特惠卡，不提供发票，敬请理解。</li>'+
                    '<li>油卡丢失请&nbsp;&nbsp;<span id="to-makeup-card" class="makeup-card" style="touch-action: pan-y; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">[申请补卡]</span>&nbsp;&nbsp;或&nbsp;&nbsp;致电客服&nbsp;&nbsp;<a class="makeup-card" href="tel:02865260660">028-65260660</a></li>'+
                '</ol>'+
                '<div></div>'+
            '</div>'+

        '<div class="item">'+
            '<label for="applyIntroduction">办卡须知</label>'+
            '<input type="checkbox" id="applyIntroduction">'+
            '<ol class="content">'+
                '<li>在本页面新办油卡，每张卡需预存200元，新办卡预存及后续充值均享受97折优惠。</li>'+
                '<li>办卡及充值可通过支付宝支付，暂不支持其他支付方式。</li>'+
                '<li>我司将以快递形式将油卡寄出，请在购卡时完整、准确填写配送信息。</li>'+
                '<li>油卡将通过顺丰速递寄出，快递费用由客户自行承担（下单时一并支付）。</li>'+
                '<li>油卡未设置初始密码，为保证资金安全，请客户收到油卡后，及时到四川省任意中石油加油站完成密码设置。</li>'+
                '<li>油卡卡内金额，需通过圈存后才能进行消费，请客户收到油卡后，及时到任意中石油加油站进行圈存。</li>'+
            '</ol>'+
            '<div></div>'+
        '</div>'+
        '<div class="item">'+
            '<label for="payIntroduction">充值须知</label>'+
            '<input type="checkbox" id="payIntroduction">'+
                '<ol class="content">'+
                    '<li>本加油卡通过本页面充值可享受充值折扣优惠，持卡至中石油加油站充值不享受充值折扣。</li>'+
                    '<li>最低充值金额为500元，充值可享受97折优惠。</li>'+
                '<li>油卡充值需正确输入卡号，如因客户输入卡号错误导致不良后果，由客户自行承担。</li>'+
                '<li>油卡充值可通过支付宝支付，暂不支持其他支付方式。</li>'+
                '<li>充值金额到账，需通过圈存后才能进行消费，请客户在充值金额到账后，及时到四川省任意中石油加油站进行圈存。</li>'+
                '<li>卡内余额及消费情况，客户在任意中石油加油站均可进行查询。</li>'+
            '</ol>'+
            '<div></div>'+
        '</div>'+
        '<div class="item">'+
            '<label for="missingIntroduction">挂失须知</label>'+
            '<input type="checkbox" id="missingIntroduction">'+
            '<ol class="content">'+
                '<li>本加油卡通过本页面充值可享受充值折扣优惠，持卡至中石油加油站充值不享受充值折扣。</li>'+
                '<li>最低充值金额为500元，充值可享受97折优惠。</li>'+
                '<li>油卡充值需正确输入卡号，如因客户输入卡号错误导致不良后果，由客户自行承担。</li>'+
                '<li>油卡充值可通过支付宝支付，暂不支持其他支付方式。</li>'+
                '<li>充值金额到账，需通过圈存后才能进行消费，请客户在充值金额到账后，及时到四川省任意中石油加油站进行圈存。</li>'+
                '<li>卡内余额及消费情况，客户在任意中石油加油站均可进行查询。</li>'+
            '</ol>'+
            '<div></div>'+
        '</div>'+
    '</div>'+
'</div>'
            }
})(window);