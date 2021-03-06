Notificacao = {
    show: function(type, options) {
        var alert = Notificacao.create(type, options);
        if (options.timeout > 0) {
            setTimeout(function() {
                $.noty.close(alert.options.id);
            }, options.timeout);
        }
    },
    create: function(type, options) {
        var n = noty({
            text: options.message,
            type: type,
            dismissQueue: false,
            layout: 'top',
            theme: 'rubixTheme'
        });
        return n;
    }
};

Global = {
    init: function() {
        Global.config();
    },
    config: function() {
        $('body').tooltip({
            selector: '[rel=tooltip]'
        });

        var tooltipOptions = {
            placement: 'bottom',
            container: 'body',
            html: true
        };

        $('[title!=]').tooltip(tooltipOptions);

        Global.setNotificacoes();
    },
    setNotificacoes: function() {
        if (msgError.length > 0) {
            for (var i = 0, l = msgError.length; i < l; i++) {
                Notificacao.show('error', msgError[i]);
            }
        }

        if (msgSuccess.length > 0) {
            for (var i = 0, l = msgSuccess.length; i < l; i++) {
                Notificacao.show('success', msgSuccess[i]);
            }
        }
    }
};

$(document).ready(function() {
    Global.init();
});