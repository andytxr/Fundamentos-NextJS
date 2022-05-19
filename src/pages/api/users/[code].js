export default function Handler(req, res){

    let x = req.query.code

    res.status(200).json({

        id: x,
        name: `LDR ${x}`,
        email: `ldr@ldr.ldr ${x}`

    })

}