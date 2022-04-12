import { Data } from "./define";
const category = [
    "smileys_and_people",
    "animals_and_nature",
    "food_and_drink",
    "travel_and_places",
    "activities",
    "objects",
    "symbols",
    "flags",
].map((i) => ({ value: "category_" + i, desc: "" }));
const group = [
    "body",
    "cat_face",
    "clothing",
    "creature_face",
    "emotion",
    "face_negative",
    "face_neutral",
    "face_positive",
    "face_positive",
    "face_role",
    "face_sick",
    "family",
    "monkey_face",
    "person",
    "person_activity",
    "person_gesture",
    "person_role",
    "skin_tone",
    "animal_amphibian",
    "animal_bird",
    "animal_bug",
    "animal_mammal",
    "animal_marine",
    "animal_reptile",
    "plant_flower",
    "plant_other",
    "dishware",
    "drink",
    "food_asian",
    "food_fruit",
    "food_prepared",
    "food_sweat",
    "food_vegetable",
    "travel_and_places",
    "activities",
    "objects",
    "symbols",
    "flags",
].map((i) => ({ value: "group_" + i, desc: "" }));
const data: Data = {
    title: "EmojiHub ",
    desc: "Emoji 查询 API",
    link: "https://emojihub.herokuapp.com/",
    tags: ["文本", "Mock"],
    request: {
        root: "https://emojihub.herokuapp.com/api/:type/:detailType",

        pathParams: [
            {
                key: "type",
                value: [
                    { value: "random", desc: "随机" },
                    { value: "all", desc: "全部列表" },
                ],
            },
            { key: "detailType", value: [...category, ...group] },
        ],
    },
    resultType: "json",
};
export default data;