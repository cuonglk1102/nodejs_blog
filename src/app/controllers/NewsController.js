class NewsController {
    index(red, res) {
        res.render('news');
    }

    show(red, res) {
        res.send('news detail');
    }
}

module.exports = new NewsController();
