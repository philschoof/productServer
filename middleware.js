const validateProductName = (req, res, next) => {
  if(req.body && req.body.productName) {
    if(typeof req.body.productName=== 'string') {
      return next();
    }
  } else {
    throw new Error('Missing Request Body')
  }
};

const validateAttrTypes = (req, res, next) => {
  if(!req.body.attributes || !Array.isArray(req.body.attributes)) {
    throw new Error('Attributes must be an array of objects')
  }

  const bodyAttrs = req.body.attributes;
  if(bodyAttrs.every(attrObj => typeof attrObj.type === 'string' && typeof attrObj.value === 'string')) {
    return next()
  } else {
    throw new Error('Attribute types and values must be strings')
  }
};



module.exports = {
  validateProductName,
  validateAttrTypes
}
