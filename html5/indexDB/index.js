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
        dataBase:"dbTitle",
        openDb:function(p){
            let self = this;
            let request = window.indexedDB.open(p.dbName,p.version);
            request.onupgradeneeded = function(evt){
                let employeeStore = evt.currentTarget.result.objectStore("employees");
                employeeStore.createIndex("stateIndex", "state", { unique: false });
                employeeStore.createIndex("emailIndex", "email", { unique: true });
                employeeStore.createIndex("zipCodeIndex", "zip_code", { unique: false });
            };
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
            let store = trans.objectStore(self.dataBase);
            //一个小数据id是主键
            let students = p || [
                {
                    name:"梅旭",
                    gender:"男",
                    email:"2432423423@qq.com",
                    state:"南充",
                    zip_code:"672731",
                    id: guid()
                }
                ,{
                    name:"陈益民",
                    gender:"男",
                    email:"342392232@qq.com",
                    state:"乐山",
                    zip_code:"372735",
                    id: guid()
                }
                ,{
                    name:"李涛",
                    gender:"男",
                    email:"384758699@qq.com",
                    state:"乐山",
                    zip_code:"372735",
                    id: guid()
                }
                ,{
                    name:"黄鹤立",
                    gender:"男",
                    email:"938495855@qq.com",
                    state:"南充",
                    zip_code:"672731",
                    id: guid()
                }
                ,{
                    name:"万茂",
                    gender:"男",
                    email:"384944833@qq.com",
                    state:"乐山",
                    zip_code:"372735",
                    id: guid()
                }
                ,{
                    name:"张扬扬",
                    gender:"女",
                    email:"384344833@qq.com",
                    state:"遂宁",
                    id: guid()
                }
                ,{
                    name:"赵晨",
                    gender:"男",
                    email:"38482733@qq.com",
                    state:"遂宁",
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
            let self = this;
            //读取数据
            let trans = db.transaction([self.transaction], IDBTransaction.READ_WRITE);
            let store = trans.objectStore(self.dataBase);
        }
    };

    dbOperate.openDb({
        dbName:"students",
        version:version,
        success:function(db){}
    });

    let students = [
        {
            name:"梅旭",
            gender:"男",
            email:"2432423423@qq.com",
            state:"南充",
            zip_code:"672731",
            id: guid()
        }
        ,{
            name:"陈益民",
            gender:"男",
            email:"342392232@qq.com",
            state:"乐山",
            zip_code:"372735",
            id: guid()
        }
        ,{
            name:"李涛",
            gender:"男",
            email:"384758699@qq.com",
            state:"乐山",
            zip_code:"372735",
            id: guid()
        }
        ,{
            name:"黄鹤立",
            gender:"男",
            email:"938495855@qq.com",
            state:"南充",
            zip_code:"672731",
            id: guid()
        }
        ,{
            name:"万茂",
            gender:"男",
            email:"384944833@qq.com",
            state:"乐山",
            zip_code:"372735",
            id: guid()
        }
        ,{
            name:"张扬扬",
            gender:"女",
            email:"384344833@qq.com",
            state:"遂宁",
            id: guid()
        }
        ,{
            name:"赵晨",
            gender:"男",
            email:"38482733@qq.com",
            state:"遂宁",
            id: guid()
        }
    ];

})();