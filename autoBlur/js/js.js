


$(document).ready(function(){
    $('#opciones').hide();
    
    var srcElm = $('#searchBox');
    var elmBlur = $('#opciones');
    
    srcElm.click(function (evt) {
        elmBlur.slideDown();
        
        sun.autoBlur(srcElm[0], elmBlur[0], function () {
            elmBlur.hide();
        });
    });
});

var sun = sun || {};

// �Զ��رմ���
sun.autoBlur = function(nodeTrigger, nodeResult, fnblur) {
    var isFirst = true;
    
    function callBack(evt) {
        console.log('1234124');
    
        // ��һ���¼�������ִ��
        if (isFirst) {
            isFirst = false;
            return;
        }
        
        // �ٴε������ ���������е�Ԫ��
        if (nodeTrigger.contains(evt.target)) {
            document.removeEventListener('click', callBack);
            return;
        }
        
        // ������� ��������е�Ԫ��
        if (nodeResult.contains(evt.target)) {
            'nothing';
        } else {
            fnblur();
            document.removeEventListener('click', callBack);
        }
    };
    
    document.addEventListener('click', callBack);
};










sun.autoBlur.prototype.hasSonNode = function (nodeBlur, nodeSon) {
    return;

    var topName = ['BODY', 'HTML'];
    
    var index =  topName.indexOf(nodeSon.tagName.toUpperCase());
    
    if (nodeBlur.contains(nodeSon)) {
        console.log(1);
    } else {
        this.fnBlur();
    }
    
    
};
