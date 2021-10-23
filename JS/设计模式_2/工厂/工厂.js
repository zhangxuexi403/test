/* 1.简单工厂模式 */
// 给定不同的材料，生产不同属性值的产品，把那个且把产品返回。批量身缠，具备相同属性的产品，
// 步骤：1.声明工厂函数(接受所有原料参数)。2.使用工厂函数，传递参数，接收对象。
/* 2.复杂工厂模式 */
// 可以根据不同的类型，创建不同的产品
/* 3.应用场景 */
// 需要创建的对象较少，客户端不关心对象的创建过程。对象的构建十分复杂。需要依赖具体环境常见不同实例。处理大量具有相同属性的小对象。
/* 4.业务需求 */
// 网页端token存储
// 根据工厂模式，在工厂中创建对象，工厂中根据不同浏览器类型，创建不同对象。
// 在浏览器支持H5的时候，存储token与localStorage;
// 在不支持H5的浏览器中还存储与cookie
