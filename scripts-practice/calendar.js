/**
 * Created by yuant on 2016/12/21.
 */
(function(window){
    window.util = window.util || {};
    util.calendar = function(selector,dateParam){
        var container = document.querySelector(selector);
        var now = dateParam || new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        (function appendToolbar(){
            var toolBar = document.createElement("div");
            toolBar.setAttribute("class","tool-bar");
            var currentDate = document.createElement("span");
            currentDate.innerText = year + "年"+month+"月" ;

            var top = document.createElement("div");
            top.innerText = "<";
            top.setAttribute("class","top");
            var down = document.createElement("div");
            down.innerText = ">";
            down.setAttribute("class","down");

            function monthChange(flag){
                var currMonth = now.getMonth();
                if(flag){
                    //向下
                    now.setMonth(currMonth + 1);
                    container.innerHTML = "";
                    util.calendar(selector,now);
                }else{
                    //向上
                    now.setMonth(currMonth - 1);
                    container.innerHTML = "";
                    util.calendar(selector,now);
                }
            }
            top.addEventListener("click",function(){
                monthChange(0);
            });
            down.addEventListener("click",function(){
                monthChange(1);
            });


            toolBar.appendChild(currentDate);
            toolBar.appendChild(top);
            toolBar.appendChild(down);
            container.appendChild(toolBar);
        })();

        var day = ['一','二','三','四','五','六','日'];
       (function fillDay(){
            var dayRow = document.createElement("div");
            for(var i = 0;i < day.length; i++){
                var dayColumn = document.createElement("div");
                dayColumn.setAttribute("class","date-container");
                dayColumn.innerText = day[i];
                dayRow.appendChild(dayColumn);
            }
            container.appendChild(dayRow);
        })();

       (function fillDate(){
           var now = dateParam || new Date();
           var year = now.getFullYear();
           var month = now.getMonth()+1;
           var date = now.getDate();
           var firstDate = new Date(year+"-"+month+"-1");
           var firstDay = firstDate.getDay();

           var dateContainer = document.createElement("div");
           var dateTotal = 6 * 7;
            for(var i = 0; i < dateTotal; i++){
                var dateEle = document.createElement("div");
                dateEle.setAttribute("class","date-container");
                var tempMonth = firstDate.getMonth();
                if(tempMonth + 1 != month){
                    dateEle.setAttribute("class","date-container next");
                }
                if(firstDate.getDate() == date){
                    dateEle.setAttribute("class","date-container today");
                }
                if(i >　firstDay-2){
                    dateEle.innerText = firstDate.getDate();
                    firstDate.setDate(firstDate.getDate() + 1);
                }else{
                    var firstDate2 = new Date(year+"-"+month+"-1");
                    var nowDate = firstDate2.getDate();
                    firstDate2.setDate(nowDate - (firstDay - (i + 1)));
                    dateEle.innerText = firstDate2.getDate();
                    dateEle.setAttribute("class","date-container next");
                }
                dateContainer.appendChild(dateEle);
            }
           container.appendChild(dateContainer);
       })();

    };
})(window);
