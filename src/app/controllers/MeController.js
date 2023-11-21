const Course = require('../model/Course');
const { multipleMongooseToObject } = require('../../util/mongooes');

class MeController {
    //[GET] /me/stored/courses
    storedcourses(req, res, next) {
        Promise.all([Course.countDocumentsDeleted(), Course.find({})])
            .then(([deletedCourses, courses]) =>
                res.render('me/stored-course', {
                    deletedCourses,
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    //[GET] /me/trash/courses
    trashcourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-course', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
