/**
 * Created by forli on 2017/3/6.
 */
(function(){
    function guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

    let version = 1.0;
    let dbOperate = {
        version:1.0,
        dbObj:null,
        transaction:"todo",
        openDb:function(p){
            let self = this;
            let request = window.indexedDB.open(p.dbName,p.version);
            request.onupgradeneeded = function(){};
            request.onsuccess = function(e){
                let db = e.target.result;
                self.dbObj = db;
                p.success(db);
            };
        },
        addRecord:function(p){
            let self = this;
            /**
             * 要操作数据必须建立transaction 和 Store
             */
            //创建transaction(事务)
            let trans = self.dbObj.transaction([self.transaction],
                IDBTransaction.READ_WRITE);
            //创建Store(存储器)
            let store = trans.objectStore(self.transaction);
            //一个小数据id是主键
            let students = p || [
                {
                    name:"梅旭",
                    gender:"男",
                    id: guid()
                }
                ,{
                    name:"陈益民",
                    gender:"男",
                    id: guid()
                }
                ,{
                    name:"李涛",
                    gender:"男",
                    id: guid()
                }
                ,{
                    name:"黄鹤立",
                    gender:"男",
                    id: guid()
                }
                ,{
                    name:"万茂",
                    gender:"男",
                    id: guid()
                }
            ];
            //‘强行’插入数据
            students.forEach(function(std){
                let request = store.put(std);
                request.onsuccess = function(e){
                    let r = e;
                };
            });

        },
        getData:function(){
            //读取数据
            let trans = db.transaction(["todo"], IDBTransaction.READ_WRITE);
            let store = trans.objectStore("todo");

        }
    };

    dbOperate.openDb({
        dbName:"students",
        version:version,
        success:function(db){

        }
    });

})();