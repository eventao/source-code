/**
 * Created by yuant on 2016/12/6.
 */
(function(app) {
    app.AppComponent =
        ng.core.Component({
                selector: 'my-app',
                template: '<h1>我的第一个 Angular 应用</h1>'
            })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));
