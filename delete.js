const dbConnect = require("./mongodb");

const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteMany({ name: "max 7" });
  console.log(result);
  if (result.acknowledged) console.log("Data is deleted");
};

deleteData();
