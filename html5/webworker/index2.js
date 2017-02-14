/**
 * Created by forli on 2017/2/12.
 */

(function(){
    var i = 76877;
    function process(){
        postMessage(i);
        i++;
        setTimeout(process,500);
    }
    setTimeout(process,500);
})();



