// 地址
var config = {

	"serverHost": "http://121.5.211.254:8081",
	"czjllist":"/jx3-czjl/gets"  ,//充值记录
	"zhlist":"/jx3-zh/getzh",//根据用户名获取账号
	"addczjl":"/jx3-czjl/addczjl" ,//添加剑三充值记录
	"addZh":"/jx3-zh/addZh" ,//添加账号
	"getsgoldprice":"/jx3-goldprice/gets" ,//根据用户名获取金价记录列表（根据用户名区分待开发）
	"addgoldprice":"/jx3-goldprice/add" ,//添加金价记录 （根据用户名区分待开发）
	"getstatements":"/jx3-statements/gets" ,//获取骚话列表
	"addtatements":"/jx3-statements/add" ,//添加骚话
	"editstatements":"/jx3-statements/edit" ,//修改骚话列表
	"login":"/c-user/login" ,//登录
	"addJx3user":"/c-user/addJx3"//注册剑三账号
}

function getConfigValue(name) {
	return config[name]
}
