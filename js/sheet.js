function checkDot(obj) {
    var id = "[id=" + obj.name;

    var obj1 = $(id + "-dot-2]");
    var obj2 = $(id + "-dot-2]");
    var obj3 = $(id + "-dot-3]");
    var obj4 = $(id + "-dot-4]");
    var obj5 = $(id + "-dot-5]");

    obj2.removeClass("checkedDot");
    obj3.removeClass("checkedDot");
    obj4.removeClass("checkedDot");
    obj5.removeClass("checkedDot");

    if (obj.value == 2) {
        obj2.addClass("checkedDot");
    } else if (obj.value == 3) {
        obj2.addClass("checkedDot");
        obj3.addClass("checkedDot");
    } else if (obj.value == 4) {
        obj2.addClass("checkedDot");
        obj3.addClass("checkedDot");
        obj4.addClass("checkedDot");
    } else if (obj.value == 5) {
        obj2.addClass("checkedDot");
        obj3.addClass("checkedDot");
        obj4.addClass("checkedDot");
        obj5.addClass("checkedDot");
    }
}
