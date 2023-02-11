import request from '@/utils/request'

const article = {
    getById(id) {
        return request.get('/article/' + id)
    },
    getPage(pageNum, pageSize, category) {
        return request.get("/article/page", {
            params: {
                pageNum: pageNum,
                pageSize: pageSize,
                category: category,
            },
        })
    }
}

export default article