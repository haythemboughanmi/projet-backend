const {connection} =require("../databases/config")
module.exports ={
    addProduct :((req,res)=>{
        const query=`INSERT INTO prodcut(name,catygorie,price,descreption,quantity) VALUES("${req.body.name}","${req.body.catygorie}","${req.body.price}","${req.body.descreption}","${req.body.quantity}")`
        connection.query(query,(error,result)=>{
        error?res.status(500).send(error)
        :res.status(200).send('mrigel')
    })
    }),
    getProduct:((req,res)=>{
        const query = `SELECT * FROM prodcut`
        connection.query(query,(error,result)=>{
            error? res.status(500).send(error)
            :res.status(200).send(result)
    })

}),
    updateProduct:((req,res)=>{
        const query=`UPDATE prodcut SET name="${req.body.name}",catygorie="${req.body.catygorie}" ,price="${req.body.price}",descreption="${req.body.descreption}",quantity="${req.body.quantity}" WHERE id=${req.params.id} `
        connection.query(query,(error,result)=>{
            error? res.status(500).send(error)
            :res.status(200).send("update mrigel")
    })
    }),
    deleteProduct:((req,res)=>{
        const query=`DELETE FROM prodcut WHERE id=${req.params.id}`
        connection.query(query,(error,result)=>{
            error? res.status(500).send(error)
            :res.status(200).send("delete mrigel")
    })
    })

}