
var AddressModel = require('../model/addresses');

let update = (req, res, next) => {
  let body = req.body;
  AddressModel.findOne({
    username: body.username
  }).then((data)=>{
    if(data){  //更新
      AddressModel.updateOne({ username: body.username },{ $set: body }).then((info)=>{
        res.send({"errcode": 0});
      }).catch((err)=>{
        res.send({"errcode": -1});
      });
    }
    else{  //添加
      AddressModel(body).save().then((info)=>{
        if(info){
          res.send({"errcode": 0});
        }
        else{
          res.send({"errcode": -1});
        }
      }).catch((err)=>{
        res.send({"errcode": -1});
      });
    }
  });
};

let list = (req, res, next) => {
  let data = req.query;
  AddressModel.find(data).then((datas)=>{
    res.send(datas);
  });
};

module.exports = {
  update,
  list
};