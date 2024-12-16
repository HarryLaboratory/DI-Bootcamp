const bcrypt = require('bcryptjs');
const db = require('../config/db');

async function registerUser(req, res) {
  const { email, username, first_name, last_name, password } = req.body;
  try {

    const hashedPassword = await bcrypt.hash(password, 10);

    
    const [user] = await db('users').insert({ email, username, first_name, last_name }).returning('id');
    
    await db('hashpwd').insert({ user_id: user.id, password: hashedPassword });

    res.status(201).json({ message: 'Utilisateur créé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement', error });
  }
}

async function loginUser(req, res) {
  const { username, password } = req.body;
  try {

    const user = await db('users').where('username', username).first();
    if (!user) {
      return res.status(400).json({ message: 'Utilisateur non trouvé' });
    }


    const userPassword = await db('hashpwd').where('user_id', user.id).first();
    
    const isMatch = await bcrypt.compare(password, userPassword.password);

    if (isMatch) {
      res.status(200).json({ message: 'Connexion réussie' });
    } else {
      res.status(400).json({ message: 'Mot de passe incorrect' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la connexion', error });
  }
}


async function getAllUsers(req, res) {
  try {
    const users = await db('users').select('id', 'email', 'username', 'first_name', 'last_name');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error });
  }
}


async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await db('users').where('id', id).first();
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur', error });
  }
}


async function updateUser(req, res) {
  const { id } = req.params;
  const { email, username, first_name, last_name } = req.body;
  try {
    const updatedUser = await db('users').where('id', id).update({ email, username, first_name, last_name });
    if (updatedUser) {
      res.status(200).json({ message: 'Utilisateur mis à jour' });
    } else {
      res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur', error });
  }
}

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
};
