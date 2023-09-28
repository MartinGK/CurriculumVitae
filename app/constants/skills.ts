import { skillsByGroup } from ".";

export const skillsObjectForWordCloud = Object.entries(skillsByGroup).map(([key, objectValue]) => {
  return objectValue.reduce((acc, curObj) => {
    if (acc.hasOwnProperty(key)) {
      acc[key] += (`${curObj.name} - `.repeat(curObj.value));
    } else {
      acc[key] = (`${curObj.name} - `.repeat(curObj.value));
    }
    return acc;
  }, {});
});

export const skillsStringForWordCloud = skillsObjectForWordCloud.map((obj) => Object.values(obj)[0]).join(" ");
