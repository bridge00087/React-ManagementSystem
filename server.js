const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// 接続テスト
app.get('/api/hello', (req, res) => {
    res.send({message: 'こんにちはExpress!'});
});

// 顧客リストの取得
app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'https://placeimg.com/64/64/any',
          'name': '山田　太郎',
          'birthday': '961222',
          'gender': '男',
          'job': '大学生'
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/64/64/any',
          'name': '鈴木　二郎',
          'birthday': '970521',
          'gender': '男',
          'job': '会社員'
        },
        {
          'id': 3,
          'image': 'https://placeimg.com/64/64/any',
          'name': '宮崎　優子',
          'birthday': '890801',
          'gender': '女',
          'job': '会社員'
        }
        ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));