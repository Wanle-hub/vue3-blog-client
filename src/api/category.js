import request from '@/utils/request'

const category = {
    getAll() {
        return request.get('/category')
    },
}

export default category