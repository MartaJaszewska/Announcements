import localFullDataSet from "../data/fullDataSet.local.json";
import categoriesList from "../data/categoriesList.local.json";

function addCategories(data, categoriesList, defaultCategory = "Announcement") {
  return data.map((item) => {
    const matchingCategories = [];

    categoriesList.forEach((category) => {
      if (item.title.includes(category)) {
        matchingCategories.push(category);
      }
    });

    item.categories =
      matchingCategories.length > 0 ? matchingCategories : [defaultCategory];

    return item;
  });
}

const localDataWithCategories = addCategories(localFullDataSet, categoriesList);

export default localDataWithCategories;
