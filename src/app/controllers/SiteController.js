class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /searcb
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
