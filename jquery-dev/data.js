/**
 * Created by forli on 2017/1/13.
 */
var content = {
    dataTotal: 3000,
    pageIndex: 1,
    pageSize: 15,
    data: [
        {
            name: "梅旭",
            gender: "男",
            age: 20,
            address: ""
        },
        {
            name: "万茂",
            gender: "男",
            age: 20,
            address: ""
        },
        {
            name: "李涛",
            gender: "男",
            age: 20,
            address: ""
        },
        {
            name: "张扬扬",
            gender: "女",
            age: 20,
            address: ""
        },
        {
            name: "赵晨",
            gender: "男",
            age: 20,
            address: ""
        },
        {
            name: "曾俊杰",
            gender: "男",
            age: 20,
            address: ""
        },
        {
            name: "何瑞阳",
            gender: "男",
            age: 20,
            address: ""
        },
        {
            name: "齐浩",
            gender: "男",
            age: 20,
            address: ""
        },
        {
            name: "黄鹤立",
            gender: "男",
            age: 20,
            address: ""
        },
        {
            name: "陈益民",
            gender: "男",
            age: 20,
            address: ""
        },
        {
            name: "巫兆俊",
            gender: "男",
            age: 20,
            address: ""
        }
    ]
};

var sLength = content.data.length;  
for(var i = 0; i < 500;i++){
    for(var j = 0; j < sLength; j++){
        var stu = {};
        var s = content.data[j];
        for(var k in s){
            if(s.hasOwnProperty(k)){
                stu[k] = s[k];
            }
        }
        content.data.push(stu);
    }
}


function renderData(pageIndex) {
    var start = (pageIndex - 1) * 15;
    var t = start + 15;
    var container = $(".container");
    container.html("");
    for (var i = start; i < t; i++) {
        var row = $("<div class='row'></div>");
        var student = content.data[i];
        //姓名
        var column = $("<div class='column'></div>");
        column.text(student.name);
        row.append(column);
        // column.appendTo(row);
        //性别
        var columnGender = column.clone();
        columnGender.text(student.gender);
        row.append(columnGender);
        //年龄
        var ageGender = column.clone();
        ageGender.text(student.age);
        row.append(ageGender);
        //地址
        var addrGender = column.clone();
        addrGender.text(student.address);
        row.append(addrGender);
        //操作
        var operGender = column.clone();
        operGender.html("<input type='button' class='edit' value='编辑' />");
        row.append(operGender);

        container.append(row);
    }
}
renderData(1);

function operation() {
    var edit = $(".edit");
    edit.click(function () {
        var province = $("<select></select>");
        province.change(function () {
        });
        var city = $("<select></select>");
        city.change(function () {
            var c = $(this).val();
            var pro = $(this).siblings("select");
            var p = pro.val();
            $(this).parent().append("<div>"+ p + "/" + c+"</div>");
            pro.remove();
            $(this).remove();
        });
        province.append("<option value='四川'>四川</option>");
        province.append("<option value='湖北'>湖北</option>");

        city.append("<option value='成都'>成都</option>");
        city.append("<option value='绵阳'>绵阳</option>");
        city.append("<option value='自贡'>自贡</option>");
        city.append("<option value='南充'>南充</option>");
        city.append("<option value='攀枝花'>攀枝花</option>");
        city.append("<option value='德阳'>德阳</option>");
        city.append("<option value='遂宁'>遂宁</option>");
        city.append("<option value='泸州'>泸州</option>");
        city.append("<option value='宜宾'>宜宾</option>");

        var row = $(this).parents('.row');
        var addr = row.find(".column").eq(3);
        addr.html("");
        addr.append(province);
        addr.append(city);
    });
}
operation();

function pager(){
    var pNumber = $(".page-number");
    var p = Math.ceil(content.dataTotal / content.pageSize);
    var pTotal = 5;
    for(var i = 0; i < pTotal; i++){
        pNumber.append("<div>"+(i + 1)+"</div>");
    }
    $(".ellipsis2").remove();
    pNumber.after("<div class='ellipsis2'>...</div>");
    pNumber.find("div").eq(0).addClass("current");
}
pager();

var currentPage = 1;
var stepChange = 5;
function pagerNumberEvent(){
    var pNumber = $(".page-number");
    pNumber.find("div").click(function(){
        currentPage = $(this).text();
        currentPage = Number(currentPage);
        renderData(currentPage);
        $(".current").removeClass("current");
        $(this).addClass("current");
    });

    $(".ellipsis2").click(function(){
        currentPage += stepChange;
        var min = currentPage - (stepChange);
        var max = currentPage + (stepChange - 1);
        var pNumber = $(".page-number");
        pNumber.html("");
        $(".ellipsis1").remove();
        pNumber.before("<div class='ellipsis1'>...</div>");
        for(var i = min; i < max;i++){
            pNumber.append("<div>"+(i + 1)+"</div>");
        }
        $(".ellipsis2").remove();
        pNumber.after("<div class='ellipsis2'>...</div>");
        pNumber.find("div").eq(5).addClass("current");
        renderData(currentPage);
        pagerNumberEvent();
    });

    $(".ellipsis1").click(function(){
        var min,max;
        if(currentPage < stepChange + 1){
            min = 0;
            max = stepChange;
        }else if(currentPage == stepChange + 1){
            currentPage -= stepChange;
            min = 0;
            max = currentPage + (stepChange - 1);
        }else{
            currentPage -= stepChange;
            min = currentPage - stepChange;
            max = currentPage + (stepChange - 1);
        }
        var pNumber = $(".page-number");
        pNumber.html("");
        if(currentPage >= stepChange + 1){
            $(".ellipsis1").remove();
            pNumber.before("<div class='ellipsis1'>...</div>");
        }
        for(var i = min; i < max;i++){
            pNumber.append("<div>"+(i + 1)+"</div>");
        }
        $(".ellipsis2").remove();
        pNumber.after("<div class='ellipsis2'>...</div>");
        if(currentPage >= stepChange + 1){
            pNumber.find("div").eq(5).addClass("current");
        }else{
            pNumber.find("div").eq(0).addClass("current");
        }
        renderData(currentPage);
        pagerNumberEvent();
    });

}
pagerNumberEvent();

var rows = $(".container .row");
var dragging = {};
function dragHandle(){
    $(".drag-handle").mousedown(function(e){
        e.preventDefault();
        rows = $(".container .row");
        dragging.handle = $(this);
        dragging.handleIndex =
         $(".drag-handle").index($(this));
        dragging.group = [];
        rows.each(function(){
            var cols = $(this).find(".column");
            var l = cols.eq(dragging.handleIndex);
            var r = cols.eq(dragging.handleIndex + 1);
            dragging.group.push({
                l:l,
                r:r
            });
        });
    });
    $(document).mousemove(function(e){
        if(dragging.prePoi){
            var subX = e.pageX - dragging.prePoi.x;
            if(dragging.handle){
                var p = dragging.handle.parent();
                var w = p.width();
                var p0 = p.prev();
                var w0 = p0.width();
                p0.width(w0 + subX);
                p.width(w - subX);
                dragging.group.forEach(function(o){
                    o.l.width(o.l.width() + subX);
                    o.r.width(o.r.width() - subX);
                });
            }
        }
        dragging.prePoi = {x:e.pageX,y:e.pageY};
    }).mouseup(function(){
        dragging.handle = null;
    });
}
dragHandle();
