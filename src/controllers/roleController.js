import Role from "../models/Role.js";

export const getRoles = async (req, res) => {
    try {
        const roles = await Role.find({})

        return res.json({ status: res.status, data: roles });
    } catch (error) {
        console.error(error);
    }
};

export const registerRole = async (req, res) => {
    try {
        const { body } = req
        const newRole = await Role.create(body);

        return res.json({ status: res.status, data: newRole });
    } catch (error) {
        console.error(error);
    }
};

export const getRoleById = async (req, res) => {
    try {
        const { id: _id } = req.params
        const role = await Role.findOne({ _id })

        return res.json({ status: res.status, data: role });
    } catch (error) {
        console.error(error);
    }
};

export const updateRole = async (req, res) => {
    try {
        const filter = { _id: req.params.id };
        const query = { $set: req.body }

        const role = await Role.updateOne(filter, query);

        return res.json({ status: res.status, data: role });
    } catch (error) {
        res.status(500).send("Error al modificar rol" + error)
        console.error(error);
    }
};

export const deleteRole = async (req, res) => {
    try {
        const { id: _id } = req.params
        await Role.deleteOne({ _id });

        return res.json({ status: res.status });
    } catch (error) {
        res.status(500).send("Error al eliminar rol" + error)
        console.error(error);
    }
};