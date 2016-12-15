(function() {
    // Maps a string to a tooltip (in the form of a HTML string)
    var tooltips = {
        'schedule' : 'A plan for carrying out a process or procedure, giving lists of intended events and times.',
        'i.e.' : 'Short for <i>id est</i>.',
        'ID'   : '<a href="https://en.wikipedia.org/wiki/ID">identification</a>'
    };

    // Maps a string to a list of aliases
    var aliases = {
        'schedule' : ['schedules', 'scheduling']
    }

    for (let term in aliases) {
        let tooltip = tooltips[term];
        let values = aliases[term];
        for (let i in values) {
            let alias = values[i];
            tooltips[alias] = tooltip;
        }
    }

    var count = 0;
    $('tooltip').each(function() {
        var term = $(this).text();
        var title = tooltips[term];
        var id = String(count++);
        $(this).attr('id', id);
        $(this).tooltip({
            items: '#' + id,
            content: title
        });
    });
})();
