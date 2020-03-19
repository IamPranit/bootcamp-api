const Bootcamp = require('../models/Bootcamp');

// @desc    Get all Bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Show all Bootcamps"
  });
}

// @desc    Get single Bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Create new bootcamp` });
}

// @desc    Update single bootcamp
// @route   PUT /api/v1/bootcamps/
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}


// @desc    Delete single bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res
      .status(200)
      .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
}
