
ʹ��ǰ����������jquery ��Ϊ��js������չ������jquery
ʹ�÷�ʽ:

html�ļ���
<script src="your_path/jquery.bet.js" type="text/javascript"> </script>
<div class="content"></div>

js�ļ���

$(document).ready(function () {
	$(".content").runMora({callBack: function (res) {alert(res)}});
	$(".content").runDice({callBack: function (res) {alert(res)}});
});

�����õ����ԣ� 
����ĳ��Ϳ� : {height: "30px", width: "30px"}
��ʼ��ʾ��ͼƬ�� {src: 'yourpath/yourimg_name.jpg'}
��ʽ: {style: 'display: none; background-color: red'}
����������Ļص������� {callBack: function (res) {alert(res)}}// res:���ض���ֹͣʱ��ͼƬ��ţ� ��������