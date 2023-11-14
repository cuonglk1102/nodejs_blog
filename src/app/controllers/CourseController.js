const Course = require('../model/Course');
const { mongooseToObject } = require('../../util/mongooes');

class CourseController {
    show(red, res,next) {
        Course.findOne({slug : red.params.slug })
            .then(course => {
                res.render('courses/show',{course : mongooseToObject(course)})
            })
            .catch(next);
    }
}

module.exports = new CourseController();
