function validateObject(obj) {
    // Create an empty object to store the validated object.
    const validatedObj = {};

    // Iterate over the properties of the original object.
    for (const prop in obj) {
        // Get the value of the property.
        const value = obj[prop];

        // Validate the type of the property.
        const propType = typeof value;
        if (!isValidType(propType)) {
            throw new Error(`Property "${prop}" should be of type "${propType}", but is of type "${typeof value}".`);
        }

        // Add the property to the validated object with the correct type.
        validatedObj[prop] = value;
    }

    // Return the validated object.
    return validatedObj;
}

function isValidType(propType) {
    // The following types are valid.
    const validTypes = ["string", "number", "boolean"];

    // Return true if the property type is valid.
    return validTypes.includes(propType);
}