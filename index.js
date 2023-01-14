// Chưa dùng STRATEGY PATTERN
function getPrice(orginalPrice, typePromotion = "default") {
  // Giảm giá khi người dùng đặt trước một sản phẩm của VINFAST
  if (typePromotion === "preOrder") {
    return orginalPrice * 0.8; // Giảm 20%
  } // Ở giai đoạn này nếu nhưu bạn đã biết về SOLID thì nó đã phá vỡ nguyên tắc đầu tiên. Đó là nguyên tắc t
  // Tiếp tục thêm tính năng khuyến mãi thông thường, ví dụ giá gốc < 200 thì giảm 10%, Còn > thì giảm t
  if (typePromotion === "promotion") {
    return orginalPrice <= 200 ? orginalPrice * 0.9 : orginalPrice - 30;
  }
  // Thời xưa chưa có marketing như bây giờ
  if (typePromotion === "default") {
    return orginalPrice;
  }
}

console.log("-------> PRICE:::", getPrice(200, "preOrder"));

// ---------------------------------------------------------------------------------

// dùng STRATEGY PATTERN
/**
 * Giảm giá khi người dùng đặt trước một sản phẩm của VINFAST
 * @params {*} originalPrice
 * @returns
 */
function preOrderPrice(originalPrice) {
  return originalPrice * 0.8;
}

/**
 * Tiếp tục thêm tính năng khuyến mãi thông thường, ví dụ nếu giá gốc < 200 thì giảm 10%, còn lớn hơn thì giảm tối da 30
 * @params {*} originalPrice
 * @returns
 */
function promotionPrice(orginalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.9 : orginalPrice - 30;
}

/**
 * Giá mặc định
 * @params {*} originalPrice
 * @returns
 */
function defaultPrice(orginalPrice) {
  return orginalPrice;
}

/**
 * Giảm giá theo ngày
 * @params {*} originalPrice
 * @returns
 */
function dayPrice(orginalPrice) {
  return orginalPrice * 0.6;
}

// Và chúng ta sẽ sửa đổi lại như sau:
function getPrice(originalPrice, typePromotion) {
  if (typePromotion === "preOrder") {
    return preOrderPrice(originalPrice);
  }
  if (typePromotion === "promotion") {
    return promotionPrice(originalPrice);
  }
  if (typePromotion === "default") {
    return defaultPrice(originalPrice);
  }
}

console.log("-------> PRICE:::", getPrice(200, "preOrder"));
