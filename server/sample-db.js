const Product = require('./model/product')

class FakeDb{

    constructor(){
        this.products =[
            {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screen',
                heading1:'サンプルテキスト1',
                heading2:'サンプルテキスト2',
                heading3:'サンプルテキスト3',
                headingtext1:'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2:'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext3:'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト'
            },
            {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best camera',
                heading1:'サンプルテキスト1',
                heading2:'サンプルテキスト2',
                heading3:'サンプルテキスト3',
                headingtext1:'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2:'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext3:'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト'
            },
            {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heading1:'サンプルテキスト1',
                heading2:'サンプルテキスト2',
                heading3:'サンプルテキスト3',
                headingtext1:'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2:'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext3:'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト'
            },
            {
                coverImage:'./assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 599,
                description: '',
                heading1:'サンプルテキスト1',
                heading2:'サンプルテキスト2',
                heading3:'サンプルテキスト3',
                headingtext1:'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2:'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext3:'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト'
            }
        ]
    }
async initDb(){
    await this.cleanDb()
    this.pushProductToDb()
}

     async cleanDb(){
         await Product.deleteMany({})
    }

    pushProductToDb(){
        this.products.forEach((product)=>{
            const newProduct = new Product(product)
            newProduct.save()
        })
    }


    seeDb(){
        this.pushProductToDb()
    }

}

module.exports = FakeDb