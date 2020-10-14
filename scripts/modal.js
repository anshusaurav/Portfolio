$(document).ready(function () {
    // MODAL
    var modalText = {
        pupbot: {
            title: 'Pupbot',
            tag: 'Run asynchronous standups on Slack',
            detail:
                "Automate standups, surveys, and daily reports. To schedule your report,set the time and the days you would like the report to take place so Pupbot knows when to ask questions to your team.",
            link: 'https://pupbot.netlify.app'
        },
        trello: {
            title: 'Trello Clone',
            tag: 'WEB-BASED KANBAN-STYLE LIST-MAKING APPLICATION.',
            detail:
                'Users can create their task boards with different columns and move the tasks between them. Typically columns include task statuses such as To Do, In Progress, Done.',
            link: 'https://trello-clone-mern.netlify.app'
        },
        instagram: {
            title: 'Instagram Clone',
            tag: 'MULTIMEDIA SHARING SOCIAL NETWORKING SERVICE.',
            detail:
                "The app allows users to upload media that can be organized by hashtags and location.Users can upload photographs and short videos, follow other users' feeds.",
            link: 'https://github.com/anshusaurav/Photo-App-Frontend'
        },
        medium: {
            title: 'Medium Clone',
            tag: 'ONLINE PUBLISHING PLATFORM.',
            detail:
                'A Social publishing platform that is open to all and home to a diverse array of stories, ideas, and perspectives.',
            link: 'https://github.com/anshusaurav/Medium-Clone-EJS'
        },
        bookstore: {
            title: 'Bookstore App - Pustaka',
            tag: 'E-COMMERCE PLATFORM FOR BOOKS',
            detail:
                'Pustaka consists of the buying or selling of books via electronic means integrated with Razor-Pay for handling electronic transactions via Debit/Credit Cards, Netbanking and more  ',
            link: 'https://github.com/anshusaurav/Mongo-Node-Express-BookStoreApp-with-EJS'
        },
        scrabble: {
            title: 'Scrabble-Go',
            tag: 'TWO PLAYER SCRABBLE GAME',
            detail:
                'Scrabble is a word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board divided into a 15×15 grid of squares. The tiles must form words that, in crossword fashion, read left to right in rows or downward in columns, and be included in a standard dictionary or lexicon.',
            link: 'https://scrabblego.netlify.app/'
        },
        platformgame: {
            title: 'Platform Game',
            tag: 'VIDEO GAME SIMILAR TO GOOD OLD MARIO',
            detail:
                'Small platform game which is both entertaining and minimalist.',
            link: 'https://platform-game-mario.netlify.app/'
        },
        chromex: {
            title: 'Chrome-X',
            tag: 'A CHROME EXTENSION',
            detail:
                'The one of the best HISTORY search and clean tool for your Chromebook, Windows PC, Mac or Linux. ChromeX is easy to use. Completely made in Javascript which supports one click removal of chrome history.',
            link: 'https://chrome.google.com/webstore/detail/chrome-x/goaifllkmmcjkekjdlkjofoiiebmfljg'
        },
        mastrplannr: {
            title: 'Mastr Plannr',
            tag: 'WEBSITE FOR EVENT MANAGEMENT COMPANY',
            detail:
                'MastrPlannr is a website for event management company. At MastrPlannr, we can arrange the A to Z of any event. Be it marriages, birthdays, private parties, corporate events and social gatherings.',
            link: 'https://anshusaurav.github.io/Real-Event-Planner/'
        },
        
    };

    $('#gallery .button').on('click', function () {
        fillModal(this.id);
        $('.modal-wrap').addClass('visible');
    });

    $('.close').on('click', function () {
        $('.modal-wrap, #modal .button').removeClass('visible');
    });

    $('.mask').on('click', function () {
        $('.modal-wrap, #modal .button').removeClass('visible');
    });

    var carousel = $('#carousel'),
        slideWidth = 700,
        threshold = slideWidth / 3,
        dragStart,
        dragEnd;

    setDimensions();

    $('#next').click(function () {
        shiftSlide(-1);
    });
    $('#prev').click(function () {
        shiftSlide(1);
    });

    carousel.on('mousedown', function () {
        if (carousel.hasClass('transition')) return;
        dragStart = event.pageX;
        $(this).on('mousemove', function () {
            dragEnd = event.pageX;
            $(this).css('transform', 'translateX(' + dragPos() + 'px)');
        });
        $(document).on('mouseup', function () {
            if (dragPos() > threshold) {
                return shiftSlide(1);
            }
            if (dragPos() < -threshold) {
                return shiftSlide(-1);
            }
            shiftSlide(0);
        });
    });

    function setDimensions() {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            slideWidth = $(window).innerWidth();
        }
        $('.carousel-wrap, .slide').css('width', slideWidth);
        $('.modal').css('max-width', slideWidth);
        $('#carousel').css('left', slideWidth * -1);
    }

    function dragPos() {
        return dragEnd - dragStart;
    }

    function shiftSlide(direction) {
        if (carousel.hasClass('transition')) return;
        dragEnd = dragStart;
        $(document).off('mouseup');
        carousel
            .off('mousemove')
            .addClass('transition')
            .css('transform', 'translateX(' + direction * slideWidth + 'px)');
        setTimeout(function () {
            if (direction === 1) {
                $('.slide:first').before($('.slide:last'));
            } else if (direction === -1) {
                $('.slide:last').after($('.slide:first'));
            }
            carousel.removeClass('transition');
            carousel.css('transform', 'translateX(0px)');
        }, 700);
    }

    function fillModal(id) {
        $('#modal .title').text(modalText[id].title);
        $('#modal .detail').text(modalText[id].detail);
        $('#modal .tag').text(modalText[id].tag);
        if (modalText[id].link)
            $('#modal .button')
                .addClass('visible')
                .parent()
                .attr('href', modalText[id].link);

        $.each($('#modal li'), function (index, value) {
            $(this).text(modalText[id].bullets[index]);
        });
        $.each($('#modal .slide'), function (index, value) {
            $(this).css({
                background:
                    "url('img/slides/" + id + '-' + index + ".jpg') center center/contain no-repeat",
                backgroundSize: 'contain'
            });
        });
    }
});
