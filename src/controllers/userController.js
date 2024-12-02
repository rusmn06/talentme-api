//const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        //const [data] = await UsersModel.getAllUsers();
        // data dummy
        const data = [
            { id: 1, nama: 'deni', password: 'deni1234', jenis_kelamin: 'Laki-laki', email: 'deni@gmail.com' },
        ];
    
        res.json({
            message: 'Berhasil mendapatkan semua user',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Gagal mendapatkan user, Server Error',
            serverMessage: error,
        })
    }
}

const createUser = async (req, res) => {
    const {body} = req;

    if(!nama || !password || !jenis_kelamin || !email){
        return res.status(400).json({
            message: 'Mohon mengisi seluruh data',
            data: null,
        })
    }

    try {
        // await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'Berhasil membuat user',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Gagal membuat user, mohon periksa kembali',
            serverMessage: error,
        })
    }
}

const getUserById = async (req, res) => {
    const { idUser } = req.params;

    try {
        // data dummy
        const data = [
            { id: 2, nama: 'deni', password: 'deni1234', jenis_kelamin: 'Laki-laki', email: 'deni@gmail.com' },
            { id: 3, nama: 'rusmana', password: 'rusmana1234', jenis_kelamin: 'Laki-laki', email: 'rusmana@gmail.com' },
        ];

        // Cari user berdasarkan ID
        const user = data.find((item) => item.id === parseInt(idUser));

        if (!user) {
            return res.status(404).json({
                message: `Gagal mendapatkan user ${idUser}`,
                data: null,
            });
        }

        res.json({
            message: `Berhasil mendapatkan user ${idUser}`,
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Gagal mendapatkan user, Server Error',
            serverMessage: error,
        });
    }
};

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        //await UsersModel.updateUser(body, idUser);
        res.json({
            message: 'Berhasil memperbaharui user',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Gagal memperbaharui user, mohon periksa kembali',
            serverMessage: error,
        })
    }
}

const deleteUser = async (req, res) => {
    const {idUser} = req.params;
    try {
        //await UsersModel.deleteUser(idUser);
        res.json({
            message: 'Berhasil menghapus user',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Gagal menghapus user, mohon periksa kembali',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
}