(function(){
    var console = window.console || {
            log : function(){}
        },
        n = '\n' ,
        words = [

            n +'            �������㣮 ����            ����ϲ������õ��ڲ٣�50�� ����     '+ n
                +'            ��������������'+ n
                +'            �� ��   �� ��'+ n
                +'            ��  ��   ��  ��                   '+ n
                +'            ��  �� �� ��  ��               '+ n
                +'            ���𩥩�������'+ n
            ,


            n +'   ����       ����'+ n
                +' �����ߩ����������ߩ�'+ n
                +' ��              ��                              �������ڴ��ػ���'+ n
                +' ��      ��      ��'+ n
                +' ��  �ש�  ����   ��'+ n
                +' ��              ��'+ n
                +' ��      ��      ��'+ n
                +' ��              ��'+ n
                +' ��������   ��������'+ n
                +'      ��   ��'+ n
                +'      ��   ��'+ n
                +'      ��   ����������-����'+ n
                +'      ��              �ǩ�                   '+ n
                +'      ��              ����'+ n
                +'      �����������ש�������'+ n
                +'        ���ϩ�  ���ϩ�                      '+ n
                +'        ���ߩ�  ���ߩ�'
        ];
    console.log( words[rand(0, words.length - 1 )] );

    //ȡ�����������
    function rand(mi,ma){
        var range = ma - mi;
        var out = mi + Math.round( Math.random() * range) ;
        return parseInt(out);
    }
})()



var sun = sun || {};

/**
 * it is for alex to shortcut method
 * delete before online
 */
(function shortCut() {
    tojs = function(vmodel) {
        return ko.mapping.toJS(vmodel)
    };
    log = function (){
        console.log(arguments)
    };
})()

sun.ajax = function() {
    var mime = {
        html: 'html',
        js: 'script',
        json: 'json',
        xml: 'xml',
        txt: 'text'
    }

    var _stringifyData = function(sType, oData) {
        var _data = oData;

        if ((sType.toUpperCase() === 'POST') && ( !! oData)) {
            _data = JSON.stringify(oData);
        }

        return _data;
    };

    base = function(sUrl, sType, sDataType, oData, fnCallBack, isShlowLoading, isAsync) {
        var _data = oData,
            _isAsync = typeof isAsync === 'boolean' ? isAsync : true;

        if (sUrl.indexOf('?') === -1){
            sUrl = sUrl + '?t=' + Math.random();
        }else {
            sUrl = sUrl + '&t=' + Math.random();
        }

        $.ajax({
            async: _isAsync,
            type: sType,
            url: sUrl,
            data: _stringifyData(sType, oData),
            contentType: 'application/json',
            dataType: sDataType,
            beforeSend: function(XMLHttpRequest) {
                if (!!isShlowLoading) {
                    
                }
            },
            success: function(data, textStatus) {
                if (!!isShlowLoading) {
                    
                }
                if(!_isAsync && (typeof fnCallBack === 'function')){
                    fnCallBack(data, textStatus);
                };
                _data = data;
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                if (!!isShlowLoading) {
                    
                }
                
                _data = errorThrown;
            }
        }).done(function(data, textStatus, _self) {
            if (!!isShlowLoading) {
                    
            }

            if (!!_isAsync && (typeof fnCallBack === 'function')) {
                fnCallBack(data, textStatus);
            }
        });;

        return _data;
    };

    return {
        post: function(sPageUrl, oData, fnCallBack, isAsync) {
            if ((typeof oData === 'function') && (!fnCallBack)) {
                fnCallBack = oData;
                oData = null;
            }

            return base(sPageUrl, 'POST', mime.json, oData, fnCallBack, false, isAsync);
        },
        getJSON: function(sPageUrl, oData, fnCallBack, isAsync) {
            if ((typeof oData === 'function') && (!fnCallBack)) {
                fnCallBack = oData;
                oData = null;
            }

            return base(sPageUrl, 'get', mime.json, oData, fnCallBack, false, isAsync);
        }
    }
}();