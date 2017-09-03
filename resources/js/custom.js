jQuery(document).ready(function ($) {
    var name_file = "default";
    var path = 'resources/css/themes/';
    getYearsOfExperience();
    $(".hide-color").show(5000);
    $('#controller-colors-style').animate({
        left: '-134px'
    });

    $('#controller-colors-style .switch-slide').click(function (e) {
        e.preventDefault();
        var div = $('#controller-colors-style');
        if (div.css('left') === '-134px') {
            $('#controller-colors-style').animate({
                left: '0px'
            });
            $(this).addClass('open');
            $(this).removeClass('closed');
        } else {
            $('#controller-colors-style').animate({
                left: '-134px'
            });
            $(this).addClass('closed');
            $(this).removeClass('open');

        }
    });

    $("#custom-color li a").click(function () {
        if ($("#themes").length == 0) {
            $('<link id="themes" href="' + path + name_file + '.css" rel="stylesheet" type="text/css">').appendTo('body');
        }
        var name_file = $(this).attr('class');
        $(this).parent().parent().find('li').removeClass('active');
        $("#themes").attr("href", path + name_file + ".css");
        $(this).parent().addClass('active');
        return false;
    });

    $(".button-show-content a").click(function () {
        var div = $('#top');
        if (div.css('top') != '0px') {
            div.animate({
                top: '0px'
            });
            $("#btn-open").show();
            $("#btn-close").hide();
            $("footer").hide();
            $('#content').css('display', 'none');
            $('body').css('overflow', 'hidden');
        } else {
            div.animate({
                top: '-80%'
            }, 'slow', function () {
                $('#content').animate({
                    top: '20%'
                });
                $('#content').css('display', 'block');
                $("footer").show();
            });
            $("#btn-open").hide();
            $("#btn-close").show();
        }
    });

    size_card();

    $(window).resize(function () {
        size_card();
    });

    $(".card").hover(function () {
        var skills_text = $(this).find("div > p.card-text.skills-text");
        if (skills_text.length > 0) {
            $(this).find("div > p.card-text").hide();
            skills_text.show();
        }
    }, function () {
        var skills_text = $(this).find("div > p.card-text.skills-text");
        if (skills_text.length > 0) {
            $(this).find("div > p.card-text").show();
            skills_text.hide();
        }
    });
});

function getYearsOfExperience() {
    var d = new Date();
    var year = d.getFullYear();
    var yearsOfExperience = year - 2012;
    $("#year,#yearsOfExperience,#yearsOfExperienceWord").empty();
    $("#year").append(year);
    $("#yearsOfExperienceWord").append(numberToWord(yearsOfExperience));
    $("#yearsOfExperience").append(yearsOfExperience);
}

function size_card() {
    var width_window = $(window).width();
    if (width_window > 0 && width_window < 388) {
        $(".card").css("height", "280px");
    } else if (width_window >= 388 && width_window < 489) {
        $(".card").css("height", "260px");
    } else if (width_window >= 489 && width_window < 600) {
        $(".card").css("height", "280px");
    } else if (width_window >= 600 && width_window < 768) {
        $(".card").css("height", "300px");
    } else {
        $(".card").css("height", "220px");
    }

}