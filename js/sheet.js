function checkDot(obj, firstAlwaysChecked) {
    var checkedDot = "checkedDot";
    var id = "[id=" + obj.name;
    var removeFirstDot = true;

    var obj1 = $(id + "-dot-1]");
    var obj2 = $(id + "-dot-2]");
    var obj3 = $(id + "-dot-3]");
    var obj4 = $(id + "-dot-4]");
    var obj5 = $(id + "-dot-5]");

    if (obj2.hasClass(checkedDot) || obj3.hasClass(checkedDot) || obj4.hasClass(checkedDot) || obj5.hasClass(checkedDot)) {
        removeFirstDot = false;
    }

    obj2.removeClass(checkedDot);
    obj3.removeClass(checkedDot);
    obj4.removeClass(checkedDot);
    obj5.removeClass(checkedDot);

    if (obj.value == 1 && !firstAlwaysChecked) {
        if (obj1.hasClass(checkedDot) && removeFirstDot) {
            obj1.removeClass(checkedDot);
        } else {
            obj1.addClass(checkedDot);
        }
    } else if (obj.value == 2) {
        obj1.addClass(checkedDot);
        obj2.addClass(checkedDot);
    } else if (obj.value == 3) {
        obj1.addClass(checkedDot);
        obj2.addClass(checkedDot);
        obj3.addClass(checkedDot);
    } else if (obj.value == 4) {
        obj1.addClass(checkedDot);
        obj2.addClass(checkedDot);
        obj3.addClass(checkedDot);
        obj4.addClass(checkedDot);
    } else if (obj.value == 5) {
        obj1.addClass(checkedDot);
        obj2.addClass(checkedDot);
        obj3.addClass(checkedDot);
        obj4.addClass(checkedDot);
        obj5.addClass(checkedDot);
    }

    return true;
}