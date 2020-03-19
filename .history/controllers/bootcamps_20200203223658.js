const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');

// @desc    Get all Bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps
    });
  } catch (error) {
    // res.status(400).json({
    //   success: false
    // });
    next(err);
  }
}

// @desc    Get single Bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
    try {
      const bootcamp = await Bootcamp.findById(req.params.id);
      
      if(!bootcamp) {
        return next(new ErrorResponse(`Resource not found with id of ${req.params.id}`, 404));
      }

      res.status(200).json({
        success: true,
        data: bootcamp
      });
    } catch (error) {
      // res.status(400).json({
      //   success: false
      // });
      next(err);
    }
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    }); 
  } catch (error) {
    // res.status(400).json({
    //   success: false
    // });
    next(err);
  }
}

// @desc    Update single bootcamp
// @route   PUT /api/v1/bootcamps/
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  try {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  }); 

  if(!bootcamp) {
    return res.status(400).json({
      success: false
    });
  }

  res.status(200).json({
    success: true,
    data: bootcamp
  }); 
} catch(err) {
  next(err);
}
};


// @desc    Delete single bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if(!bootcamp) {
      res.status(400).json({
        success: false
      });
    }

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    // res.status(400).json({
    //   success: false
    // });
    next(err);
  }
}
