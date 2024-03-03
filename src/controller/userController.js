//Depende de wilian fazer a conexão e criar a schema USER
const userRegistration = async (req, res) => {
   const newUsuario = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
   };

   try {
    // const salvarUsuario = await newUsuario.save();
    res.status(200).json(newUsuario);
   } catch (error) {
     res.status(400).json({messager: error,messager})
   }
};

// const loginUsuario = async (req, res) => {
//   const {login, password} = req.body;
//   const user = await User.findOne({login, password})

//   if(login === user.login && password === user.password ) {
//     res.status(200).json({message: "Login efetuado com sucesso!"})
//   } else {
//     res.status(401).json({message: "Usuario ou senha"})
//   }
// }

module.exports = {
  userRegistration
};