import Property from "../models/Property.js";

export const createPropery = async (req, res, next) => {
  const newPropery = new Property(req.body);

  try {
    const savePropery = await newPropery.save()
    res.status(200).json(savePropery)

  } catch (err) {
    next(err);
  }
}

export const updateProperty = async (req, res, next) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProperty);
  } catch (err) {
    next(err);
  }
};

export const deleteProperty = async (req, res, next) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getProperty = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json(err)
  }
}

export const getallProperty = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const properties = await Property.find({
      ...others,
      price: { $gt: min | 1, $lt: max || 9999999999 },
    }).limit(req.query.limit);
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json(err)
  }
}

export const searchproperty = async (req, res, next) => {
  try {
    let data = await Property.find(
      {
        "$or": [
          { "location": { $regex: req.params.key } },
          { "country": { $regex: req.params.key } },
          { "propertytitle": { $regex: req.params.key } },
          { "ownername": { $regex: req.params.key } },
          { "ownerprofession": { $regex: req.params.key } },
          { "propertytype": { $regex: req.params.key } },
          { "feature": { $regex: req.params.key } }
        ]
      }
    )
    res.status(200).json(data);
  } catch (err){
    res.status(500).json(err)
  }
}

export const paginateallproperty = async (req, res, next) => {

  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 3;

  try {
    const pageproperty = await Property.find().skip((page) * limit);
    res.status(200).json(pageproperty);
  } catch (err) {
    res.status(500).json(err)
  }
}