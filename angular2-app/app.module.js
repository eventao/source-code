/**
 * Created by yuant on 2016/12/6.
 */
(function(app) {
    app.AppModule =
        ng.core.NgModule({
                imports: [ ng.platformBrowser.BrowserModule ],
                declarations: [ app.AppComponent ],
                bootstrap: [ app.AppComponent ]
            })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));
