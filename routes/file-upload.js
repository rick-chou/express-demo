const express = require('express');
const multer = require('multer');
const path = require('path');

var router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //  第一个参数为err的相关信息 node的回调函数都是错误优先的回调
    //  第二个参数为文件上传的目的地
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    // 同样的 第一个参数为错误信息 第二个参数为文件名
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// 前端 fieldName 必须是file 不然会报错
router.put('/single', upload.single('file'), (req, res, next) => {
  res.json(req.file);
});

router.put(
  '/multiple',
  upload.fields([
    // file1 field 最多上传一个文件
    { name: 'file1', macCount: 1 },
    // file2 field 最多上传两个文件
    { name: 'file2', maxCount: 2 },
  ]),
  (req, res, next) => {
    console.log(req.files);
  }
);

module.exports = router;
