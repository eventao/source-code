/**
 * Created by forli on 2017/1/20.
 */
function d (s){
    function checkPass(pass){
        if(s.length < 8){
            return 0;
        }
        var ls = 0;
        if(s.match(/([a-z])+/)){
            ls++;
        }
        if(s.match(/([0-9])+/)){
            ls++;
        }
        if(s.match(/([A-Z])+/)){
            ls++;
        }
        if(s.match(/[^a-zA-Z0-9]+/)){
            ls++;
        }
        return ls;
    }
    if(checkPass(form.password.value)<3){
        alert("密码复杂度不够，请重新设置！");
        form.password.focus();
        return false ;
    }
}


