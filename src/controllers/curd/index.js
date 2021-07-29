/*
 * @Description: 
 * @Date: 2021-07-29 11:07:13
 * @LastEditTime: 2021-07-29 16:06:22
 */
const curd = require("../../models/curd");

/**
 * 创建
 * @param {*} ctx 
 */
const c = async (ctx) => {
    const data = ctx.request.body;
    await curd.create(data)
        .then(res => {
            console.log(res);
            ctx.body = {
                status: true,
                msg: "保存成功",
                data: null
            }
        })
        .catch(err => {
            ctx.body = {
                status: false,
                msg: "错误",
                data: err
            }
        })
}

/**
 * 更新
 * @param {*} ctx 
 */
const u = async (ctx) => {
    const { id, name } = ctx.request.body;
    await curd.updateOne({ "_id": id }, { name })
        .then(res => {
            console.log(res);
            ctx.body = {
                status: true,
                data: null,
                msg: "更改成功"
            }
        })
        .catch(err => {
            console.log(err);
        })
}

/**
 * 获取全部
 * @param {*} ctx 
 */
const rAll = async (ctx) => {
    await curd.find({ isDel: false })
        .then(res => {
            ctx.body = {
                status: true,
                data: res,
                msg: "获取成功"
            }

        })
        .catch(err => console.log(err))
}

/**
 * 获取某个数据
 * @param {*} ctx 
 */
const rOne = async (ctx) => {
    const { id } = ctx.request.body;
    const data = {
        "_id": id,
        isDel: TextTrackCue
    }
    await curd.findOne(data)
        .then(res => {
            ctx.body = {
                status: true,
                data: res,
                msg: "获取成功"
            }
        })
        .catch(err => {
            console.log(err);
        })
}

/**
 * 直接删除
 * @param {*} ctx 
 */
const dDelete = async (ctx) => {
    const {id } = ctx.request.body;
    await curd.deleteOne({_id:id})
        .then(res =>{
            ctx.body = {
                status: true,
                data: null,
                msg: "删除成功"
            }
        })
        .catch(err => {
            console.log(err
            );
        })
}

/**
 * 隐藏 => 删除
 * @param {*} ctx 
 */
const dIsDel = async (ctx) => {
    const { id } = ctx.request.body;
    await curd.updateOne({ _id: id }, { isDel: true })
        .then(res => {
            ctx.body = {
                status: true,
                data: null,
                msg: "删除成功"
            }
        })
        .catch(err => {
            console.log(err
            );
        })
}

module.exports = {
    c,
    u,
    rAll,
    rOne,
    dDelete,
    dIsDel
}
