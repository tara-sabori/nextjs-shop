// const Controller = require("./index"); // فرض بر این است که فایل مادر شما در این مسیر است
const Controller = require("../../controller");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { CategoryModel } = require("../../../../models/category");
const { UserModel } = require("../../../../models/user");
const { ProductModel } = require("../../../../models/product");

class DashboardController extends Controller {
  async getDashboardStats(req, res) {
    const [userCount, categoryCount, productCount] = await Promise.all([
      UserModel.countDocuments(),
      CategoryModel.countDocuments(),
      ProductModel.countDocuments()
    ]);

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        users: userCount,
        categories: categoryCount,
        products: productCount
      }
    });
  }
}

module.exports = {
  DashboardController: new DashboardController(),
};
