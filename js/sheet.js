var checkedDot = "checkedDot";

$("[name=morality]").click(function(){
    var value = this.value;
    var array = $("[name=morality]");
    for (var i = 0; i < array.length; i++) {
        if (array[i].value == value) {
            array[i].className = checkedDot;
        } else {
            array[i].className = "";
        }
    }
});

function checkDot(obj, firstAlwaysChecked) {
    var value = obj.value;
    var array = $("[name="+obj.name+"]");

    if (value == 1 && (obj.className != "") && (array[1].className == ""))  {
        obj.className = "";
        obj.checked = false;
    } else {
        var i = 0;
        if (firstAlwaysChecked) {
            i = 1;
        }
        for (i; i<array.length; i++) {
            if (value >= i+1) {
                array[i].className = checkedDot;
            } else {
                array[i].className = "";
            }
        }
    }
}