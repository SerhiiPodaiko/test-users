import axios from "axios"

class GetResourceApi {
    getAllUsers = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`)

            return {
                data: await response.data
            }
        } catch (e) {
            return {error: e}
        }
    }

    getAllPostsUser = async (id) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${id}/posts`)

            return {
                data: await response.data
            }
        } catch (e) {
            return {error: e}
        }
    }

    getAllAlbumsUser = async (id) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${id}/albums`)

            return {
                data: await response.data
            }
        } catch (e) {
            return {error: e}
        }
    }
}

export default new GetResourceApi()
