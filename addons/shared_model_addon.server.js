
YUI.add('shared_model_addon', function(Y, NAME) {

    function Addon(command, adapter, ac) {

        adapter.req.mojito = adapter.req.mojito || {};
        adapter.req.mojito.cache = adapter.req.mojito.cache || {};
        adapter.req.mojito.cache.models = adapter.req.mojito.cache.models || {};

        this.ac = ac;
        this.models = adapter.req.mojito.cache.models;
    }

    Addon.prototype = {

        namespace: 'model',

        load: function(name) {
            if(!this.models[name]){
                if(this.ac.models[name]){
                    this.models[name] = this.ac.models[name];
                } else {
                    Y.log('Model "' + name + '" not found.', 'debug', NAME);
                }
            } else {
                Y.log('Model "' + name + '" served from cache.', 'debug', NAME);
            }
            return this.models[name];
        }

    };

    Y.mojito.addons.ac.model = Addon;

}, '0.1.0', {requires: ['mojito']});
