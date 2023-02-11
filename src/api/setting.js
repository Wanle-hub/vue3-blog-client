import request from "@/utils/request"

const setting = {
    getByName(name) {
        return request.get("/setting/record_number")
    }
}

export default setting