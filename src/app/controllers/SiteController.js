const Course = require('../model/Course');
const { multipleMongooseToObject } = require('../../util/mongooes');

class SiteController {
    async home(red, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch((error) => next(error));
    }

    search(red, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
