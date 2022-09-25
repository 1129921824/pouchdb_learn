const PouchDB = require('pouchdb-browser');
const pouchDB = PouchDB.default.defaults();

// 创建数据库
const db = new pouchDB('pouch');
// 打印数据库
console.log(db)

// 创建文档
db.put({
  _id: 'mybook',
  title: '活着'
}).then(function (response: any) {
    console.log("新增成功");
  // handle response
}).catch(function (err: any) {
  //console.log(err);
});

// 更新文档
// db.get('mybook').then(function(doc: any) {
//   return db.put({
//     _id: 'mybook',
//     _rev: doc._rev,
//     title: "在人间"
//   });
// }).then(function(response: any) {
//   // handle response
//   console.log("修改成功");
//   console.log(response)
// }).catch(function (err: any) {
//   console.log(err);
// });

// 插入文档并让pouchdb自动生成id
// db.post({
//   title: '我与地坛'
// }).then(function (response: any) {
//     console.log(response)
//   // handle response
// }).catch(function (err: any) {
//   console.log(err);
// });

// 获取文档
// db.get("69462db4-87dd-4d86-9fcc-8cdae740eed0").then(function (doc: any) {
//   // handle doc
//   console.log(doc);
// }).catch(function (err: any) {
//   console.log(err);
// });

// 删除文档
// db.get('mybook').then(function(doc) {
//   return db.remove(doc);
// }).then(function (result: any) {
//   // handle result
//   console.log(result);
// }).catch(function (err: any) {
//   console.log(err);
// });

// 通过提供一个id和rev来删除一个文档
// db.get('mybook').then(function(doc) {
//   return db.remove(doc._id, doc._rev);
// }).then(function (result: any) {
//   // handle result
//   console.log(result);
// }).catch(function (err: any) {
//   console.log(err);
// });

// 通过使用put()和{_deleted: true}来删除文档
db.get('mybook').then(function(doc) {
  doc._deleted = true;
  return db.put(doc);
}).then(function (result: any) {
  // handle result
  console.log(result);
}).catch(function (err: any) {
  console.log(err);
});


// 删除数据库
// db.destroy().then(function (response:any) {
//   // success
//   console.log("pouch数据库删除成功")
// }).catch(function (err:any) {
//   console.log(err);
// });


