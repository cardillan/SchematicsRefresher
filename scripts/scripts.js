const gitHubUrl = "https://github.com/cardillan/mindcode"

Events.on(EventType.ClientLoadEvent, e => {
    Vars.ui.schematics.buttons.button("@scripts.schematics-refresher.refresh", Icon.refresh, () => {
        print("Reloading all schematics.");
        Vars.schematics.load();
        const myDialog = new BaseDialog("@scripts.schematics-refresher.refresh");
        myDialog.cont.pane(cons(t=>{
            t.labelWrap("@scripts.schematics-refresher.refreshed").width(Core.graphics.isPortrait() ? 400 : 400).align(Align.center);
        }));
        myDialog.cont.row();
        myDialog.cont.button("Visit Mindcode", Icon.githubSquare, () => {
            if (!Core.app.openURI(gitHubUrl)) {
                Vars.ui.showErrorMessage("@linkfail");
            }
        }).size(260, 64);;
        myDialog.addCloseButton();
        myDialog.show();
    });
});
