export default {
    getData(object) {
        let data;
        try {
            data = object.response.data;
        } catch (e) {
            data = null
        }
        return data
    },

    getIsFetching(object) {
        let isFetching;
        try {
            isFetching = object.isFetching;
        } catch (e) {
            isFetching = null;
        }
        return isFetching;
    },
}