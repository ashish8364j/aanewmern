const schema = require('../model/modelSchema.js') 
class controllers {
    static homePage=(req,res)=>{
        res.render('home.ejs')
    }

    static checkData=async(req,res)=>{
        const result = await req.body
        
        res.render('registration.ejs')
    }
    static checkpostData=async(req,res)=>{
        
        const newUser = new schema(req.body)
        newUser.save()
        res.send('<h1>successfully registered </h1> <br> <a href="/login"><button>Go Back</button>')
    }

    static loginPage=(req,res)=>{
        res.render('login.ejs')

    }
    static loginpostPage=async(req,res)=>{
        const {name,email,password}= req.body
        const a = await schema.find( { $or: [ { name: { $eq: name } }, { password: { $eq: password } },{ email: { $eq: email } } ] } );
        
        if(a.length==0){
            return res.send('nothing matched <br> <a href="/login"><button>Go Back</button></a>')
        }
        for(var i=0;i<a.length;i++){
            if(a[i].name==name){
                if(a[i].email==email){
                    if(a[i].password==password){
                        return res.send('<h1>login success </h1> <br> <a href="/login"><button>Go Back</button>')
                    }
                    else{
                        return res.send('<h1>wrong password</h1> <br> <a href="/login"><button>Go Back</button>')
                    }
                }
                else{
                    return res.send('<h1>wrong email </h1> <br> <a href="/login"><button>Go Back</button>')
                }
            }
            else{
                return res.send('<h1>wrong name </h1> <br> <a href="/login"><button>Go Back</button>')
            }
        }
       
    }
}

module.exports = controllers 