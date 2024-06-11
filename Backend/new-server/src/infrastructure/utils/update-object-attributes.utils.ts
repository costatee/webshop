/**
 * Recursively updates attributes of an object.
 * This function only accepts objects as inputs for both original and updates.
 * It traverses both the original object and the updates object.
 * If an update is found for a property, it is applied.
 * If a property is itself an object, the function recurses into that object.
 *
 * @param originalObject - The original object to be updated.
 * @param updates - An object containing the updates to be applied.
 * @returns A new object with the updates applied. The return type is the same as the type of the original object.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateObjectAttributes = <T extends Record<string, any>>(
  originalObject: T,
  updates: Partial<T>,
): T => {
  const updatedObject = { ...originalObject };

  Object.keys(updates).forEach((key) => {
    const updateKey = key as keyof T;
    const originalValue = updatedObject[updateKey];
    const updateValue = updates[updateKey];

    // Check if the update value is an object and not null or an array
    if (
      updateValue &&
      typeof updateValue === 'object' &&
      !Array.isArray(updateValue) &&
      updateValue !== null
    ) {
      // Check if the original value is also an object and not null or an array
      if (
        originalValue &&
        typeof originalValue === 'object' &&
        !Array.isArray(originalValue) &&
        originalValue !== null
      ) {
        updatedObject[updateKey] = updateObjectAttributes(
          originalValue,
          updateValue,
        );
      } else {
        updatedObject[updateKey] = updateValue;
      }
    } else if (updateValue !== undefined) {
      updatedObject[updateKey] = updateValue;
    }
  });

  return updatedObject;
};
