class api {
    async getCategories(){
        const reponse = await fetch('http://jservice.io/api/category?count=100');
        const json = await response.json();
        return json;
    }
    async getCategoriesById(id){
        const reponse = await fetch('http://jservice.io/api/category?id=$(id)');
        const json = await response.json();
        return json;
    }
}

export default new api ();