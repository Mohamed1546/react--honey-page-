import React from 'react'

export default function Header() {
  return (
    <div><div className="row bg-dark">
    <div className="col-7">
      <img style={{width: 20}} src="https://th.bing.com/th?q=White+Heart+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=ar-EG&cc=EG&setlang=ar&adlt=strict&t=1&mw=247" alt="" />
      <div
        className="navbar-brand"
        style={{ color: "antiquewhite", margin: 5 }}
      >
        عسل نحل طبيعي %100
      </div>
    </div>
    <div className="col-5 m-.5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-toggler" data-toggle="collapse" href="#xc">
          <span className="navbar-toggler-icon" />
        </a>
        <div className="collapse navbar-collapse" id="xc">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">الصفحة الرئيسية</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/منتجاتنا">منتجاتنا</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/اراء العملاء">اراء العملاء</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/من نحن">من نحن</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/اتصل بنا">اتصل بنا</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <br /></div>
  )
}
