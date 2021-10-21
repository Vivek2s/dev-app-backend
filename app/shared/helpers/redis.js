'use strict';
const redisClient = require('../../../config/redis');
module.exports = {
    for: (key) => {
        // key/value data tructure
        const isKeySet = async()=>{
            let key = await get();
            return key || false;
        };

        const increase = async() => {
            return await redisClient.incrAsync(key);
        };
        const get = async () => {
            return await redisClient.getAsync(key);
        };
        const set = async (field) => {
            return await redisClient.setAsync(key, field);
        };
        const setWithExpire = (field, TIME) => {
            return redisClient.setAsync(key, field, 'EX', TIME);
        };
        const del = () => {
            return redisClient.delAsync(key);
        };
        const reset = () => {
            return redisClient.delAsync(key);
        };
        const expire = (time) => {
            return redisClient.expireAsync(key, time);
        };
        const ttl = () => {
            return redisClient.ttlAsync(key);
        };
        // HASH data sctructure
        const hget = (field) => {
            return redisClient.hgetAsync(key, field);
        };
        const hset = (field, value) => {
            return redisClient.hsetAsync(key, field, JSON.stringify(value));
        };
        const hdel = (fields) => {
            return redisClient.hdel(key, fields);
        };
        return { increase, expire, get, set,setWithExpire, reset, ttl, hget, hset, hdel, del, isKeySet };
    },
    isStoreActive: () => {
        return redisClient.connected;
    }
};