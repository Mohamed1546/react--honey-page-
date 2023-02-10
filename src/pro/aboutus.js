import React from 'react'
import Header from '../comp/header'
import Footer from '../comp/footer'

export default function Aboutus() {
  return (
    <div>
      <Header />
      <div className='container w-10'>
        <h2 style={{ color: "white", backgroundColor: "black",}}>
        نحالين بخبرة عالية تفوق 40 سنة في مجال العسل و مناحلنا في سوهاج و تنتج العسل بجودة عالية
        ثقة العميل في المنتج هي اهم شئ عندنا و بالتالي بنينا ثقة كبيرة علي مدار السنين و بسبب دا 
        احنا مستمرين و نحاول نحافظ علي السعر و الجودة باكبر مجهود ممكن 
              شكرا لدعمكم....
        </h2>
        <Footer />
      </div>
    </div>
  )
}
