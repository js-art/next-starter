class APIFeatures{
    constructor(query,queryString){
        this.query=query
        this.queryString=queryString
    }
    search(){
        const location=this.queryString.location?{
            address:{
                $regex:this.queryString.location,
                $options:'i'
            }
        }:{}
        this.query=this.query.find({...location})
        return this
    }
    filter(){
        const queryCopy={...this.queryString}
        const removeFields=['location','page']
        removeFields.forEach(field =>  delete queryCopy[field]);
        console.log(queryCopy)
        const keys=Object.keys(queryCopy)
        keys.forEach(key=>queryCopy[key]={
            $regex:queryCopy[key],
            $options:'i' 
        })
        this.query=this.query.find(queryCopy)
        return this
    }
    pagination(resPerPage) {
        const currentPage = Number(this.queryString.page) || 1;
        const skip = resPerPage * (currentPage - 1);

        this.query = this.query.limit(resPerPage).skip(skip);
        return this;
    }


}
export default APIFeatures