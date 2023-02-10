import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="row justify-content-center">
        <div className="col-4">
          <div
            className="card"
            style={{ filter: "opacity(0.7)", width: "50%", borderRadius: 25 }}
          >
            <img
              src="https://www13.0zz0.com/2023/02/05/15/886360386.jpg"
              className="card-img-top"
              style={{ borderRadius: 100 }}
            />
            <h2 className="card-title" id="name">
              عسل نحل
            </h2>
          </div>
        </div>
        <div id="vb" className="col-7" />
      </div>
      <hr />
      <div className="row" style={{ display: "flex", margin: 30 }}>
        <div className="col-lg-3">
          <div className="container">
            <div className="card bg-secondary" style={{ width: "15rem" }}>
              <img
                src="https://www9.0zz0.com/2023/02/05/23/582520882.jpg"
                className="card-img-top"
                style={{ scale: "0.8" }}
              />
              <div className="card-body">
                <h3 className="card-title">عسل بالشمع</h3>
                <p className="card-text">
                  علب عسل بالشمع وزن كيلو باين جمال العسل و الشمع من الصورة
                </p>
                <a
                  className="btn btn-success"
                  href="https://www.facebook.com/commerce/products/%D8%B9%D8%B3%D9%84-%D8%A8%D8%A7%D9%84%D8%B4%D9%85%D8%B9-%D8%A7%D9%84%D8%A7%D8%B5%D9%84%D9%8A/4221550727883951/?ref=page_shop_tab&referral_code=page_shop_tab_card"
                >
                  50 L.E
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="container">
            <div className="card bg-secondary" style={{ width: "15rem" }}>
              <img
                src="https://www7.0zz0.com/2023/02/05/16/417799086.jpg"
                className="card-img-top"
                style={{ scale: "0.8" }}
              />
              <div className="card-body">
                <h3 className="card-title">عسل بالمكسرات</h3>
                <p className="card-text">
                  عسل نحل بالمكسرات الطازة و هي عين جمل-كاجو-بندق-لوز
                </p>
                <a
                  className="btn btn-success"
                  href="https://www.facebook.com/commerce/products/%D8%B9%D8%B3%D9%84-%D8%A8%D8%A7%D9%84%D9%85%D9%83%D8%B3%D8%B1%D8%A7%D8%AA/4081671715249273/?ref=page_shop_tab&referral_code=page_shop_tab_card"
                >
                  60 L.E
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="container">
            <div className="card bg-secondary" style={{ width: "15rem" }}>
              <img
                src="https://www14.0zz0.com/2023/02/05/16/532764323.jpg"
                className="card-img-top"
                style={{ scale: "0.8" }}
              />
              <div className="card-body">
                <h3 className="card-title">عسل نحل</h3>
                <p className="card-text">
                  عسل نحل فرز اول برسيم باين من لونه في الصورة طعم و ريحة حكاية
                </p>
                <a
                  className="btn btn-success"
                  href="https://www.facebook.com/commerce/products/%D8%B9%D8%B3%D9%84-%D9%81%D8%B1%D8%B2-%D8%A8%D8%B1%D8%B3%D9%8A%D9%85-%D9%85%D9%86%D8%A7%D8%AD%D9%84-%D8%B3%D9%88%D9%87%D8%A7%D8%AC/4069565443133075/?ref=page_shop_tab&referral_code=page_shop_tab_card"
                >
                  40 L.E
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="container">
            <div className="card bg-secondary" style={{ width: "15rem" }}>
              <img
                src="https://www9.0zz0.com/2023/02/05/16/495738332.jpg"
                className="card-img-top"
                style={{ scale: "0.8" }}
              />
              <div className="card-body">
                <h3 className="card-title">غذاء ملكات النحل</h3>
                <p className="card-text">
                  المعروف بفوايده الكبيرة و العلبة بتكون 5 جرام
                </p>
                <a
                  className="btn btn-success"
                  href="https://www.facebook.com/commerce/products/%D8%BA%D8%B0%D8%A7%D8%A1-%D9%85%D9%84%D9%83%D8%A7%D8%AA-%D8%A7%D9%84%D9%86%D8%AD%D9%84/4131573166865545/?ref=mini_shop_storefront&referral_code=page_shop_tab_card"
                >
                  20 L.E
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ width: "100%" }}>
        <div
          className="col-lg-12"
          style={{ backgroundColor: "rgba(236, 232, 232, 0.7)", height: 60, display: "flex" }}
        >
          <a href="https://www.facebook.com/profile.php?id=100064564099552">
          <h5 style={{ marginLeft: 20 }}>face book</h5>
          </a>
          <a href="/+201011953866">
            <h5 style={{ marginLeft: 20 }}>whats app</h5>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
