function menotify(type, title, text) {
    PNotify.desktop.permission();
    (new PNotify({
            title: title,
            type: type,
            text: text,
            desktop: {
                desktop: true
            }
        })
    )
}