module.exports = {
	// 正規アクセス文字列でMongoDBへの接続に失敗するため、旧アクセス文字列を代替として使用
	// 正規アクセス文字列で接続できない理由は、Mongoose側にあるらしい
	// 参考サイト：https://stackoverflow.com/questions/55499175/how-to-fix-error-querysrv-erefused-when-connecting-to-mongodb-atlas
	DB_URI:'mongodb://test:test@ac-ajyuk8f-shard-00-00.ie25onm.mongodb.net:27017,ac-ajyuk8f-shard-00-01.ie25onm.mongodb.net:27017,ac-ajyuk8f-shard-00-02.ie25onm.mongodb.net:27017/?ssl=true&replicaSet=atlas-zi30ab-shard-0&authSource=admin&retryWrites=true&w=majority'
}
