import Sequelize from 'sequelize'
import {sequelize} from '../database'

export const Context = sequelize.define('context', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true}, 
    name: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true
    },
    image: { type: Sequelize.STRING(128), allowNull: false},
    sound: { type: Sequelize.STRING(128)},
    video: { type: Sequelize.STRING(128)}
})