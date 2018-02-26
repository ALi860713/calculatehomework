$(document).ready(function(){
    var a=0,b=0,result,IsTheOperatorFirst=0,operation='',operator1='',operator2='',isdel=0;;
    $('button[name=num]').click(function(){
        var value = $(this).attr("id");
        if($('input[id=show]').val()=='0'){ //如果是一開始輸入
            if(value=='.'){
                $('input[id=show]').val(function (index,oldvalue) { 
                    return oldvalue + value;
                });
            }
            else{
                $('input[id=show]').val(value);
            }
        }
        else{
            $('input[id=show]').val(function (index,oldvalue) { 
                if(IsTheOperatorFirst>0){
                    operation+=value;
                }
                return oldvalue + value;
            });
        }
    });
    $('button[name=add]').click(function(){
        if(IsTheOperatorFirst==0){
            var value = $(this).text();
            $('input[id=show]').val(function (index,oldvalue) { 
                return oldvalue + value;
            });
            a=parseFloat($('input[id=show]').val()); //第一個數字
            IsTheOperatorFirst++;
            operator1='+';
        }
        else{
            if(isdel>0){
                isdel=0;
            }
            else{
                b=parseFloat(operation);
            }
            operation='';
            operator2='+';
            switch(operator1)
            {
                case '+':
                  result=a+b;
                  break;
                case '-':
                  result=a-b;
                  break;
                case '*':
                  result=a*b;
                  break;
                case '/':
                  result=a/b;
                  break;
                default:
                  break;
            }
            result=parseFloat(result.toFixed(2)) //四捨五入取小數點第二位
            operator1=operator2;
            a=result; //之後第一個數字 
            var value = $(this).text();
            $('input[id=show]').val(function (index,oldvalue) { 
                return result + value;
            });
        }
    });
    $('button[name=sub]').click(function(){
        if(IsTheOperatorFirst==0){
            var value = $(this).text();
            $('input[id=show]').val(function (index,oldvalue) { 
                return oldvalue + value;
            });
            a=parseFloat($('input[id=show]').val()); //第一個數字
            IsTheOperatorFirst++;
            operator1='-';
        }
        else{
            if(isdel>0){
                isdel=0;
            }
            else{
                b=parseFloat(operation);
            }
            operation='';
            operator2='-';
            switch(operator1)
            {
                case '+':
                  result=a+b;
                  break;
                case '-':
                  result=a-b;
                  break;
                case '*':
                  result=a*b;
                  break;
                case '/':
                  result=a/b;
                  break;
                default:
                  break;
            }
            result=parseFloat(result.toFixed(2)) //四捨五入取小數點第二位
            operator1=operator2;
            a=result; //之後第一個數字 
            var value = $(this).text();
            $('input[id=show]').val(function (index,oldvalue) { 
                return result + value;
            });
        }
    });
    $('button[name=mul]').click(function(){
        if(IsTheOperatorFirst==0){
            var value = $(this).text();
            $('input[id=show]').val(function (index,oldvalue) { 
                return oldvalue + value;
            });
            a=parseFloat($('input[id=show]').val()); //第一個數字
            IsTheOperatorFirst++;
            operator1='*';
        }
        else{
            if(isdel>0){
                isdel=0;
            }
            else{
                b=parseFloat(operation);
            }
            operation='';
            operator2='*';
            switch(operator1)
            {
                case '+':
                  result=a+b;
                  break;
                case '-':
                  result=a-b;
                  break;
                case '*':
                  result=a*b;
                  break;
                case '/':
                  result=a/b;
                  break;
                default:
                  break;
            }
            result=parseFloat(result.toFixed(2)) //四捨五入取小數點第二位
            operator1=operator2;
            a=result; //之後第一個數字 
            var value = $(this).text();
            $('input[id=show]').val(function (index,oldvalue) { 
                return result + value;
            });
        }
    });
    $('button[name=div]').click(function(){
        if(IsTheOperatorFirst==0){
            var value = $(this).text();
            $('input[id=show]').val(function (index,oldvalue) { 
                return oldvalue + value;
            });
            a=parseFloat($('input[id=show]').val()); //第一個數字
            IsTheOperatorFirst++;
            operator1='/';
        }
        else{
            if(isdel>0){
                isdel=0;
            }
            else{
                b=parseFloat(operation);
            }
            operation='';
            operator2='/';
            switch(operator1)
            {
                case '+':
                  result=a+b;
                  break;
                case '-':
                  result=a-b;
                  break;
                case '*':
                  result=a*b;
                  break;
                case '/':
                  result=a/b;
                  break;
                default:
                  break;
            }
            result=parseFloat(result.toFixed(2)) //四捨五入取小數點第二位
            operator1=operator2;
            a=result; //之後第一個數字 
            var value = $(this).text();
            $('input[id=show]').val(function (index,oldvalue) { 
                return result + value;
            });
        }
    });
    $('button[name=equal]').click(function(){
        if(isdel>0){
            isdel==0;
        }
        b=parseFloat(operation);
        operation='';
        switch(operator1)
        {
            case '+':
                result=a+b;
                break;
            case '-':
                result=a-b;
                break;
            case '*':
                result=a*b;
                break;
            case '/':
                result=a/b;
                break;
            default:
                break;
        }
        result=parseFloat(result.toFixed(2)) //四捨五入取小數點第二位
        operator1='';
        operator2='';
        a=result;
        IsTheOperatorFirst=0;
        $('input[id=show]').val(result);
    });
    $('button[name=clear]').click(function(){
        $('input[id=show]').val('0'); 
        a = null; 
        b = null; 
        operator1='';
        operator2='';
        result=0;
        IsTheOperatorFirst=0;
        operation='';
    });
    $('button[name=del]').click(function(){
        var num1=$('input[id=show]').val();
        var length=num1.length;//取得原字串長度
        var num2='';
        for(i=0;i<length-1;i++){
            num2+=num1[i]; //定義新字串
            if(num1[i-1]=='+'||num1[i-1]=='-'||num1[i-1]=='*'||num1[i-1]=='/'){ //設定b的新值
                operation='';
                for(var j=i;j<length-1;j++){
                    operation+=num1[j];
                    parseFloat(b);
                }
            }
        }
        $('input[id=show]').val(num2);
        length=num2.length; //如果刪到空，顯示0
        if(length==0){
            $('input[id=show]').val('0');
        }
    });
});