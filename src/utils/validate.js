export const validateName = name => {
  return name !== '';
}

export const validateZipCode = (zip) => {
  let isValidated = true;
  if (zip.length<5 || zip.length>10) isValidated=false;
  if(zip.includes(' ')) isValidated=false;
  return isValidated;
}
