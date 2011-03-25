var db = require('riak-js').getClient()
// change to your riak IP
db.client.host = '192.168.1.10';

//change to your bucket
var bucketname = "mybucket";

var delete_key = function(bucket,key){
    db.remove(bucket,key);
}

var delete_keys = function(err,keys){
    keys.forEach(function(key){
        delete_key(bucketname,key);
     });
}

db.keys(bucketname, delete_keys);

