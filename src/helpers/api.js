class api {
    async getCategories() {
      console.log('api called')
      const response = await fetch('http://jservice.io/api/categories?count=100');
      console.log('response', response);  
      const json = await response.json();
      return json;  
    }
    async getCategoryById(id) {
      const response = await fetch(`http://jservice.io/api/category?id=${id}`);
      const json = await response.json();
      return json;
    }
  }
  
  export default new api();