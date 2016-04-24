(function _getLive() {
    var d = new Date();
    var minut = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    var hour = (d.getHours() < 10 ? '0' : '') + d.getHours()
    var date = parseInt(hour + "" + minut);
    var day = d.getDay() ? d.getDay() : 7;
    document.getElementById('weeks_nav' + day).checked = true;
    var elem = document.querySelectorAll('#day' + day + ' [data-time]');
    var arr = Object.keys(elem).map(function(key) {
        return elem[key]
    });

    var result = arr.filter(function(item, i) {
        var time = parseInt(elem[i].getAttribute('data-time').replace(':', ''));
        if (time > date) {
            return time
        }
    });
    if (result.length > 1) {
        result[0].classList.add('schedule_item__date--active');
    } else {
        
    }
}());

function _filterType() {
    var elem = document.querySelectorAll('.checkbox__input');
    for (var i = 0; i < elem.length; i++) {
        if (elem[i].type === 'checkbox') {
            elem[i].onclick = _updateSchedule;
        }
    }
}

function _updateSchedule() {
    var elem = document.querySelectorAll('[data-type=' + this.value + ']');
    if (this.checked) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.toggle('schedule_item_' + this.value + '--active');
        }
    } else {
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.toggle('schedule_item_' + this.value + '--active');
        }
    }
};

document.getElementById('live').addEventListener("click", function() {
    var d = new Date();
    var date = d.getHours() + "" + d.getMinutes();
    var day = d.getDay();
    console.log(date, day);

});

// Включаем фильтр
_filterType();
