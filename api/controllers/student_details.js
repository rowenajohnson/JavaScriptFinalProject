const student = require('../models/student_details');
const User = require('../models/user');

exports.index = async (req, res, next) => {

  try {
    const student_details = await student.find();
    

    res.status(200).json(student_details);
      }
      catch(error)
      {
        next(error);
      }
};

exports.show = async (req, res, next) => {
  try {
    const student = await student.findById(req.params.id);
    res.status(200).json(student);
  }
  catch(error)
  {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const {StudentName, StudentID, Course } = req.body;

    const user = await User.findById(req.user._id);

    const details = await student.create({
      StudentName,
      StudentID,
      Course
    });

    res.status(200).json({ message: "student Account was created successfully", status:"success", student: details });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try 
  {
    const {_id, StudentName, StudentID, Course } = req.body;
    const details = await student.findOneAndUpdate({ _id: _id }, {
        StudentName,
        StudentID,
        Course
    });
  res.status(200).json({message:"student Account was updated successfully", status:"success", student: details});
  }
  catch (error) {
    next(error);
  }
}

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.body;
    await student.findOneAndDelete({ _id: id });
    res.status(200).json({ message: "student Account was deleted successfully" });
  } catch (error) {
    next(error);
  }
};
