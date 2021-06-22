const getDB = require('../../bbdd/db');

const { deletePhoto } = require('../../helpers');

const deletePhotoExperience = async (req, res, next) => {
    let connection;

    try {
        connection = await getDB();

        const { idExp, idPhoto } = req.params;
        if (req.userAuth.rol !== 'admin') {
            const error = new Error('No tienes permisos para eliminar fotos');
            error.httpStatus = 401;
            throw error;
        }
        const [photo] = await connection.query(
            `SELECT url FROM photos WHERE id = ? AND id_experience = ?;`,
            [idPhoto, idExp]
        );
        console.log(idExp);
        if (photo.length < 1) {
            const error = new Error('La foto no existe');
            error.httpStatus = 404;
            throw error;
        }

        // Borramos la foto del servidor.
        await deletePhoto(photo[0].url);

        // Borramos la foto de la base de datos.
        await connection.query(
            `DELETE FROM photos WHERE id = ? AND id_experience = ?;`,
            [idPhoto, idExp]
        );

        res.send({
            status: 'ok',
            message: 'Foto eliminada',
        });
    } catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deletePhotoExperience;
